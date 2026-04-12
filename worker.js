// Worker entry point — serves static assets + API routes
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // API routes
    if (url.pathname === "/api/results") {
      if (request.method === "OPTIONS") {
        return new Response(null, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
          }
        });
      }

      if (request.method === "POST") {
        return handlePost(request, env);
      }

      if (request.method === "GET") {
        return handleGet(request, env);
      }

      return new Response("Method not allowed", { status: 405 });
    }

    // Static assets — fall through to site binding
    return env.ASSETS.fetch(request);
  }
};

async function handlePost(request, env) {
  try {
    const body = await request.json();

    if (!body.topArchetype || !body.scores || !body.domains) {
      return jsonResponse({ error: "Missing required fields" }, 400);
    }

    const record = {
      timestamp: new Date().toISOString(),
      topArchetype: body.topArchetype,
      top3: body.top3 || [],
      scores: body.scores || {},
      domains: body.domains || {},
      userAgent: request.headers.get("User-Agent") || "unknown",
      country: request.cf?.country || "unknown",
    };

    const key = "result:" + Date.now() + ":" + Math.random().toString(36).slice(2, 8);
    await env.QUIZ_RESULTS.put(key, JSON.stringify(record));

    // Update aggregate counter
    const countsRaw = await env.QUIZ_RESULTS.get("aggregate:counts");
    const counts = countsRaw ? JSON.parse(countsRaw) : {};
    counts[record.topArchetype] = (counts[record.topArchetype] || 0) + 1;
    counts._total = (counts._total || 0) + 1;
    await env.QUIZ_RESULTS.put("aggregate:counts", JSON.stringify(counts));

    return jsonResponse({ ok: true, total: counts._total });
  } catch (e) {
    return jsonResponse({ error: e.message }, 500);
  }
}

async function handleGet(request, env) {
  const auth = request.headers.get("Authorization");
  if (auth !== "Bearer afterthegrind2026") {
    return jsonResponse({ error: "unauthorized" }, 401);
  }

  try {
    const list = await env.QUIZ_RESULTS.list({ prefix: "result:" });
    const results = [];
    for (const key of list.keys) {
      const val = await env.QUIZ_RESULTS.get(key.name);
      if (val) results.push(JSON.parse(val));
    }

    const countsRaw = await env.QUIZ_RESULTS.get("aggregate:counts");
    const counts = countsRaw ? JSON.parse(countsRaw) : {};

    return jsonResponse({ aggregate: counts, results });
  } catch (e) {
    return jsonResponse({ error: e.message }, 500);
  }
}

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    }
  });
}

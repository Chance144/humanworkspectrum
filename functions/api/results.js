// Cloudflare Pages Function — saves quiz results to KV
// POST /api/results — store a result
// GET /api/results — retrieve all results (password protected)

export async function onRequestPost(context) {
  try {
    const body = await context.request.json();
    
    // Validate
    if (!body.topArchetype || !body.scores || !body.domains) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
      });
    }

    const record = {
      timestamp: new Date().toISOString(),
      topArchetype: body.topArchetype,
      top3: body.top3 || [],
      scores: body.scores || {},
      domains: body.domains || {},
      userAgent: context.request.headers.get("User-Agent") || "unknown",
      country: context.request.cf?.country || "unknown",
    };

    // Store in KV with timestamp key
    const key = `result:${Date.now()}:${Math.random().toString(36).slice(2, 8)}`;
    await context.env.QUIZ_RESULTS.put(key, JSON.stringify(record));

    // Also update aggregate counter
    const countsRaw = await context.env.QUIZ_RESULTS.get("aggregate:counts");
    const counts = countsRaw ? JSON.parse(countsRaw) : {};
    counts[record.topArchetype] = (counts[record.topArchetype] || 0) + 1;
    counts._total = (counts._total || 0) + 1;
    await context.env.QUIZ_RESULTS.put("aggregate:counts", JSON.stringify(counts));

    return new Response(JSON.stringify({ ok: true, total: counts._total }), {
      status: 200,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
    });
  }
}

export async function onRequestGet(context) {
  // Password protect the data export
  const auth = context.request.headers.get("Authorization");
  if (auth !== "Bearer afterthegrind2026") {
    return new Response(JSON.stringify({ error: "unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" }
    });
  }

  try {
    const list = await context.env.QUIZ_RESULTS.list({ prefix: "result:" });
    const results = [];
    for (const key of list.keys) {
      const val = await context.env.QUIZ_RESULTS.get(key.name);
      if (val) results.push(JSON.parse(val));
    }

    // Also get aggregate
    const countsRaw = await context.env.QUIZ_RESULTS.get("aggregate:counts");
    const counts = countsRaw ? JSON.parse(countsRaw) : {};

    return new Response(JSON.stringify({ aggregate: counts, results }, null, 2), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    }
  });
}

/* ===================================================
   Human Work Spectrum — Quiz Engine
   =================================================== */

const ARCHETYPES = {
  liaison:          { name: "The Liaison",           domain: "interpersonal",  color: "#7c3aed" },
  bridge_builder:   { name: "The Bridge Builder",    domain: "integrative",    color: "#0d9488" },
  translator:       { name: "The Translator",        domain: "interpretive",   color: "#2563eb" },
  architect:        { name: "The Architect",         domain: "integrative",    color: "#0d9488" },
  orchestrator:     { name: "The Orchestrator",      domain: "integrative",    color: "#0d9488" },
  sensemaker:       { name: "The Sensemaker",        domain: "interpretive",   color: "#2563eb" },
  mentor:           { name: "The Mentor of Mentors", domain: "interpersonal",  color: "#7c3aed" },
  futurist:         { name: "The Reflective Futurist", domain: "imaginative",  color: "#d97706" },
  narrative:        { name: "The Narrative Carrier", domain: "interpersonal",  color: "#7c3aed" },
  signal_architect: { name: "The Signal Architect",  domain: "interpretive",   color: "#2563eb" },
};

// Each question has a scenario + 4 options, each mapped to an archetype
const QUESTIONS = [
  {
    q: "Your team receives a confident AI-generated market analysis. Something feels off.",
    context: "The report is well-formatted and cites real data. But your instinct says it's missing something important.",
    options: [
      { text: "I'd dig into what assumptions the model made and what data it might have missed.", archetype: "sensemaker" },
      { text: "I'd check with people in the field — does this match what they're seeing?", archetype: "liaison" },
      { text: "I'd reframe the question: what problem were we actually trying to answer?", archetype: "translator" },
      { text: "I'd map how this connects to the broader system before accepting it.", archetype: "bridge_builder" },
    ]
  },
  {
    q: "A major workflow change is rolling out and half the team is resistant.",
    context: "The technology works. But adoption is stalling. Meetings are tense.",
    options: [
      { text: "I'd focus on redesigning the workflow so it respects how people actually work.", archetype: "architect" },
      { text: "I'd get in a room with the skeptics and find out what they're really worried about.", archetype: "mentor" },
      { text: "I'd tell the story of why this change matters — not just how it works.", archetype: "narrative" },
      { text: "I'd map the sequence: who needs to move first for others to feel safe following.", archetype: "orchestrator" },
    ]
  },
  {
    q: "You're in a meeting between the engineering team and the marketing team. They're talking past each other.",
    context: "Both teams are smart and well-intentioned. The problem is vocabulary and mental models — not the work.",
    options: [
      { text: "I'd translate what each side is actually saying into terms the other can understand.", archetype: "translator" },
      { text: "I'd find the shared goal and anchor the conversation there.", archetype: "bridge_builder" },
      { text: "I'd figure out who the real decision-maker is and make sure they have what they need.", archetype: "liaison" },
      { text: "I'd step back and ask: what outcome do both teams actually need from this project?", archetype: "sensemaker" },
    ]
  },
  {
    q: "Your company is about to deploy a new AI tool across the organization.",
    context: "It's powerful, but no one has thought through what happens when it fails, or who's responsible for its outputs.",
    options: [
      { text: "I'd design the guardrails: what the AI can decide alone vs. what needs human review.", archetype: "architect" },
      { text: "I'd map the information flow: who sees what, when, and what signals matter.", archetype: "signal_architect" },
      { text: "I'd ask what we're optimizing for — and whether that's actually the right goal.", archetype: "futurist" },
      { text: "I'd sequence the rollout so teams aren't overwhelmed and can give real feedback.", archetype: "orchestrator" },
    ]
  },
  {
    q: "A junior colleague has the technical skills but lacks confidence in their own judgment.",
    context: "They consistently produce solid work but defer to others or the AI output even when their instinct is right.",
    options: [
      { text: "I'd create situations where they have to own a decision and reflect on it afterward.", archetype: "mentor" },
      { text: "I'd show them how to slow down and interrogate AI outputs before accepting them.", archetype: "sensemaker" },
      { text: "I'd connect them with people in the organization who could stretch their perspective.", archetype: "liaison" },
      { text: "I'd give them language for describing their own value — not just their tasks.", archetype: "translator" },
    ]
  },
  {
    q: "Your team is drowning in dashboards, reports, and alerts. Nobody agrees on what matters.",
    context: "There's more data than ever. There's less clarity than ever.",
    options: [
      { text: "I'd audit what we're actually tracking and remove everything that doesn't drive decisions.", archetype: "signal_architect" },
      { text: "I'd run a session to identify which three metrics actually determine outcomes.", archetype: "sensemaker" },
      { text: "I'd redesign the reporting structure so the right people see the right signals.", archetype: "architect" },
      { text: "I'd sit with each stakeholder and find out what question they're actually trying to answer.", archetype: "liaison" },
    ]
  },
  {
    q: "Leadership is excited about a new strategic direction. You're not sure anyone has asked the second-order questions.",
    context: "The plan looks good on a slide. But you keep thinking about what it creates three years from now.",
    options: [
      { text: "I'd map out three possible futures: what happens if this works, if it half-works, if it fails.", archetype: "futurist" },
      { text: "I'd write the story of where this leads — including the part nobody wants to say out loud.", archetype: "narrative" },
      { text: "I'd build a framework for which decisions need to be revisited as things unfold.", archetype: "architect" },
      { text: "I'd find the people in the room who are quietly skeptical and get their honest read.", archetype: "liaison" },
    ]
  },
  {
    q: "Your organization is going through a major transition and people are losing the thread of why it matters.",
    context: "The strategy is sound. But morale is slipping. People are showing up but not believing.",
    options: [
      { text: "I'd articulate the story beneath the change — not the memo version, the real version.", archetype: "narrative" },
      { text: "I'd create moments for people to reconnect with the purpose they came here for.", archetype: "mentor" },
      { text: "I'd map which stakeholders need different versions of the same message.", archetype: "translator" },
      { text: "I'd look for the weak signals — what are people not saying that leadership needs to hear?", archetype: "futurist" },
    ]
  },
  {
    q: "Two high-performing teams are working on related problems but not talking to each other.",
    context: "There's no conflict — just silos. The overlap isn't obvious until you look closely.",
    options: [
      { text: "I'd create a shared language so they can understand each other's work.", archetype: "bridge_builder" },
      { text: "I'd design a collaboration structure that doesn't slow either team down.", archetype: "orchestrator" },
      { text: "I'd find the individuals whose work most overlaps and introduce them personally.", archetype: "liaison" },
      { text: "I'd visualize how both workstreams connect to the bigger system.", archetype: "architect" },
    ]
  },
  {
    q: "You're asked to explain a complex AI capability to a non-technical executive.",
    context: "The executive is smart but has zero background in ML. They need to make a funding decision by Friday.",
    options: [
      { text: "I'd find the analogy that makes the capability instantly intuitive.", archetype: "translator" },
      { text: "I'd tell the story of what it can and can't do — including what failure looks like.", archetype: "narrative" },
      { text: "I'd focus on what decision this capability is actually helping them make.", archetype: "sensemaker" },
      { text: "I'd map out the risk landscape: what could go wrong at each stage?", archetype: "futurist" },
    ]
  },
  {
    q: "Your team is executing well but you notice the work lacks originality — everything is derivative.",
    context: "AI tools are producing polished output quickly. But nothing surprises anyone anymore.",
    options: [
      { text: "I'd introduce constraints or provocations that force new angles.", archetype: "futurist" },
      { text: "I'd bring in perspectives from completely different industries or disciplines.", archetype: "bridge_builder" },
      { text: "I'd ask: what assumption is everyone in this field making that we could question?", archetype: "sensemaker" },
      { text: "I'd create space for people to share work-in-progress without judgment — building psychological safety for risk.", archetype: "mentor" },
    ]
  },
  {
    q: "A project is technically on schedule, but something feels fragile. Handoffs are messy and energy is low.",
    context: "Nobody has missed a deadline. But you sense that one wrong move could cause a cascade.",
    options: [
      { text: "I'd sequence the remaining work to reduce dependencies and give people breathing room.", archetype: "orchestrator" },
      { text: "I'd identify the three most likely failure modes and build contingencies.", archetype: "architect" },
      { text: "I'd check in with team members individually to understand what's draining them.", archetype: "mentor" },
      { text: "I'd surface the fragility explicitly to leadership before it becomes a crisis.", archetype: "futurist" },
    ]
  },
  {
    q: "You're onboarding a new team member who is technically excellent but struggling to navigate the organization.",
    context: "They know how to do the work. They don't know who to go to, how decisions get made, or what's really valued.",
    options: [
      { text: "I'd introduce them to the key people and explain the informal power map.", archetype: "liaison" },
      { text: "I'd help them understand the unwritten rules — the real culture vs. the stated culture.", archetype: "narrative" },
      { text: "I'd create a learning map: here's what you need to know in 30 days and how to get there.", archetype: "mentor" },
      { text: "I'd explain how their role connects to the broader system and where the leverage points are.", archetype: "bridge_builder" },
    ]
  },
  {
    q: "You're reviewing an AI-generated strategy document before it goes to the board.",
    context: "It's coherent and well-sourced. But it reads like a summary of the consensus — not an actual recommendation.",
    options: [
      { text: "I'd add the interpretation layer: what does this data actually recommend we do?", archetype: "translator" },
      { text: "I'd interrogate the assumptions and mark what's uncertain vs. what's solid.", archetype: "sensemaker" },
      { text: "I'd stress-test it: what would have to be true for this strategy to fail?", archetype: "futurist" },
      { text: "I'd rewrite the executive summary so it leads with a clear, defensible point of view.", archetype: "narrative" },
    ]
  },
  {
    q: "Your organization has more tools, more data, and more AI than ever — and outcomes haven't improved.",
    context: "Everyone is busy. Everything is measured. Nothing is getting meaningfully better.",
    options: [
      { text: "I'd audit the system: where are tools creating friction instead of removing it?", archetype: "architect" },
      { text: "I'd ask what we stopped doing when we automated — what judgment did we outsource?", archetype: "sensemaker" },
      { text: "I'd look at what signals people are actually using to make decisions vs. what's available.", archetype: "signal_architect" },
      { text: "I'd go back to purpose: what outcome were we actually trying to produce?", archetype: "futurist" },
    ]
  },
];

// ---- STATE ----
let current = 0;
let answers = {}; // { questionIndex: archetypeKey }

function init() {
  renderQuestion();
  updateProgress();
}

function renderQuestion() {
  const q = QUESTIONS[current];
  const container = document.getElementById('quiz-container');

  const letters = ['A', 'B', 'C', 'D'];
  const optionsHtml = q.options.map((opt, i) => `
    <button class="quiz-option ${answers[current] === opt.archetype ? 'selected' : ''}"
            onclick="selectOption('${opt.archetype}', this)"
            data-archetype="${opt.archetype}">
      <span class="option-letter">${letters[i]}</span>
      <span class="option-text">${opt.text}</span>
    </button>
  `).join('');

  container.innerHTML = `
    <div class="quiz-q-num">Question ${current + 1} of ${QUESTIONS.length}</div>
    <div class="quiz-question">${q.q}</div>
    <div class="quiz-context">${q.context}</div>
    <div class="quiz-options">${optionsHtml}</div>
    <div class="quiz-nav">
      <button class="btn-quiz btn-quiz-back" onclick="prevQuestion()" ${current === 0 ? 'style="visibility:hidden"' : ''}>← Back</button>
      <button class="btn-quiz btn-quiz-primary" id="next-btn" onclick="nextQuestion()" ${answers[current] ? '' : 'disabled'}>
        ${current === QUESTIONS.length - 1 ? 'See My Results →' : 'Next →'}
      </button>
    </div>
  `;
}

function selectOption(archetype, el) {
  answers[current] = archetype;
  document.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
  el.classList.add('selected');
  el.querySelector('.option-letter').style.background = 'var(--blue)';
  el.querySelector('.option-letter').style.color = '#fff';
  document.getElementById('next-btn').disabled = false;
}

function nextQuestion() {
  if (!answers[current]) return;
  if (current < QUESTIONS.length - 1) {
    current++;
    renderQuestion();
    updateProgress();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    showResults();
  }
}

function prevQuestion() {
  if (current > 0) {
    current--;
    renderQuestion();
    updateProgress();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function updateProgress() {
  const pct = ((current) / QUESTIONS.length) * 100;
  document.getElementById('progress-bar').style.width = pct + '%';
}

function showResults() {
  // Tally scores
  const scores = {};
  Object.values(answers).forEach(a => { scores[a] = (scores[a] || 0) + 1; });

  // Sort archetypes by score
  const ranked = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .map(([key, score]) => ({ key, score, ...ARCHETYPES[key] }));

  // Tally 4I domain scores
  const domainScores = { interpretive: 0, integrative: 0, interpersonal: 0, imaginative: 0 };
  ranked.forEach(r => { domainScores[r.domain] = (domainScores[r.domain] || 0) + r.score; });
  const maxDomain = Math.max(...Object.values(domainScores)) || 1;

  // Build results params and redirect
  const params = new URLSearchParams();
  params.set('top', ranked.slice(0, 3).map(r => r.key).join(','));
  params.set('scores', ranked.slice(0, 3).map(r => r.score).join(','));
  params.set('domains', Object.values(domainScores).join(','));
  window.location.href = `results.html?${params.toString()}`;
}

document.addEventListener('DOMContentLoaded', init);

/* ===================================================
   Human Work Spectrum - Personal App
   =================================================== */

const APP_ARCHETYPES = {
  liaison: {
    name: "The Liaison",
    domain: "interpersonal",
    badge: "badge-interpersonal",
    tagline: "I'm not the expert, but I can connect the experts.",
    desc: "You build trust across boundaries. Your value grows when technical, organizational, and human worlds have to work together.",
    skills: ["Stakeholder mapping", "Trust repair", "Context translation"],
    habit: "Before starting important work, name every person who needs to trust the outcome.",
    boundary: "Let AI draft the message. Do not let it own the relationship strategy.",
    practice: [
      "Map the three people whose trust matters most for your current work.",
      "Have one conversation that clarifies what someone is really worried about.",
      "Rewrite a technical update for a non-technical stakeholder.",
      "Identify one handoff where trust is weak and propose a repair."
    ],
    book: "Read the chapters on interpersonal value and the loneliness problem. Focus on how trust becomes more valuable when tasks become cheaper."
  },
  bridge_builder: {
    name: "The Bridge Builder",
    domain: "integrative",
    badge: "badge-integrative",
    tagline: "The best idea wins only after people can understand each other.",
    desc: "You connect disciplines, mental models, and priorities. Your value grows when silos create friction or missed opportunity.",
    skills: ["Systems mapping", "Cross-domain synthesis", "Framework translation"],
    habit: "Each week, read or watch one serious thing from outside your field and connect it to your work.",
    boundary: "AI can find similarities. You decide which connections matter.",
    practice: [
      "Draw a map of two teams or disciplines that should be learning from each other.",
      "Translate one idea from another field into your current work.",
      "Ask what each side of a disagreement is optimizing for.",
      "Find one useful analogy that makes a hard concept portable."
    ],
    book: "Read the 4I Framework sections on integration. Focus on why recombination becomes a premium skill."
  },
  translator: {
    name: "The Translator",
    domain: "interpretive",
    badge: "badge-interpretive",
    tagline: "What do they actually want us to do?",
    desc: "You turn complex outputs into useful meaning. Your value grows when fluency is cheap but judgment is scarce.",
    skills: ["Audience analysis", "Recommendation writing", "Bias detection"],
    habit: "Translate the same idea for three audiences before you send important work.",
    boundary: "AI can draft. You validate, interpret, and decide what gets communicated.",
    practice: [
      "Take one AI output and write the plain-English recommendation in two sentences.",
      "List what a polished answer might be hiding.",
      "Rewrite a technical paragraph for a busy executive.",
      "Ask what decision a piece of information is supposed to support."
    ],
    book: "Read the interpretive value sections. Focus on the difference between producing an answer and knowing what the answer means."
  },
  architect: {
    name: "The Architect",
    domain: "integrative",
    badge: "badge-integrative",
    tagline: "This workflow isn't broken. It's undesigned.",
    desc: "You design systems, workflows, guardrails, and governance. Your value grows when tools need structure before they can scale.",
    skills: ["Workflow design", "Governance design", "Risk architecture"],
    habit: "For every AI tool, write down what it may decide alone and what requires human review.",
    boundary: "AI can operate inside the system. You design the system and its limits.",
    practice: [
      "Choose one recurring workflow and mark every handoff, delay, and decision point.",
      "Define the failure modes for one AI-assisted process.",
      "Write a simple rule for when humans must override automation.",
      "Remove one unnecessary step from a process without weakening accountability."
    ],
    book: "Read the sections on systems, delegation, and the teammate test. Focus on making AI useful without making humans passive."
  },
  orchestrator: {
    name: "The Orchestrator",
    domain: "integrative",
    badge: "badge-integrative",
    tagline: "No one is behind. We're just out of sequence.",
    desc: "You create flow across people, tools, and timing. Your value grows when effort is high but work is out of rhythm.",
    skills: ["Sequencing", "Dependency mapping", "Team energy management"],
    habit: "Before a project begins, identify what must happen first for everything else to work.",
    boundary: "AI can track tasks. You decide pacing, sequence, and load.",
    practice: [
      "Draw the dependency chain for one active project.",
      "Find the bottleneck that is making capable people look slow.",
      "Ask who is carrying too much invisible coordination work.",
      "Move one task earlier or later to reduce friction."
    ],
    book: "Read the sections on agentic work and superscaling. Focus on coordinating hybrid human-machine teams."
  },
  sensemaker: {
    name: "The Sensemaker",
    domain: "interpretive",
    badge: "badge-interpretive",
    tagline: "The AI summary is confident. But is it right?",
    desc: "You slow the room down enough to think. Your value grows when clean outputs hide weak assumptions.",
    skills: ["Assumption testing", "First-principles thinking", "Judgment under uncertainty"],
    habit: "Before accepting an answer, name the assumption that would make it wrong.",
    boundary: "AI generates answers. You generate the right questions.",
    practice: [
      "Take one confident answer and write three ways it could be wrong.",
      "Ask what evidence would change your mind about a current decision.",
      "Separate facts, interpretations, and recommendations in a document.",
      "Run one problem from first principles instead of analogy."
    ],
    book: "Read the interpretive and judgment sections. Focus on why the ability to question outputs becomes career insurance."
  },
  mentor: {
    name: "The Mentor of Mentors",
    domain: "interpersonal",
    badge: "badge-interpersonal",
    tagline: "Tell me what you're really worried about.",
    desc: "You build people's capacity to learn, decide, and adapt. Your value grows when answers are instant but maturity is not.",
    skills: ["Coaching", "Feedback design", "Learning loop design"],
    habit: "End every coaching conversation with: what will you try, and how will you know if it worked?",
    boundary: "AI can critique a document. You develop a person's judgment.",
    practice: [
      "Ask one person what decision they are avoiding.",
      "Turn advice into a question that helps someone think.",
      "Create a small reflection loop after a completed task.",
      "Notice where someone is outsourcing confidence to AI."
    ],
    book: "Read the interpersonal value sections. Focus on why human development is not the same as information transfer."
  },
  futurist: {
    name: "The Reflective Futurist",
    domain: "imaginative",
    badge: "badge-imaginative",
    tagline: "Before we build this, let's ask what it creates.",
    desc: "You examine second-order effects and alternate futures. Your value grows when everyone else is optimizing the present.",
    skills: ["Scenario thinking", "Weak signal detection", "Second-order analysis"],
    habit: "For any major decision, ask what happens if everyone copies it.",
    boundary: "AI can extrapolate trends. You ask whether the trend is worth following.",
    practice: [
      "Map three futures for a decision: works, half-works, fails.",
      "Name one second-order consequence nobody is discussing.",
      "Find a weak signal in your field and explain why it might matter.",
      "Ask what a current success could make worse over time."
    ],
    book: "Read the imaginative value sections. Focus on how foresight protects people from efficient mistakes."
  },
  narrative: {
    name: "The Narrative Carrier",
    domain: "interpersonal",
    badge: "badge-interpersonal",
    tagline: "This change needs a story, not a memo.",
    desc: "You carry meaning through change. Your value grows when organizations have information but have lost the thread.",
    skills: ["Narrative framing", "Cultural interpretation", "Values articulation"],
    habit: "Before any major communication, ask what story the message is really telling.",
    boundary: "AI can write the memo. You carry the meaning the memo cannot capture.",
    practice: [
      "Rewrite a change announcement as a human story.",
      "Name the value underneath a current project.",
      "Identify one place where the stated story and real behavior conflict.",
      "Give a team language for why the work matters."
    ],
    book: "Read the sections on meaning, trust, and human work. Focus on why stories coordinate people when data cannot."
  },
  signal_architect: {
    name: "The Signal Architect",
    domain: "interpretive",
    badge: "badge-interpretive",
    tagline: "The dashboard says everything, so it says nothing.",
    desc: "You design information environments that make better decisions possible. Your value grows when attention is scarce.",
    skills: ["Information architecture", "Metric design", "Noise filtering"],
    habit: "Before building a report, ask what decision it is supposed to improve.",
    boundary: "AI can visualize data. You decide what deserves attention.",
    practice: [
      "Delete one metric that no one uses to make a decision.",
      "Write the decision question at the top of a dashboard.",
      "Separate signal from noise in a report people overread.",
      "Design a one-page view that makes the next action obvious."
    ],
    book: "Read the interpretive value sections and the AI-work chapters. Focus on attention as a scarce professional resource."
  }
};

const DOMAIN_LABELS = {
  interpretive: "Interpretive",
  integrative: "Integrative",
  interpersonal: "Interpersonal",
  imaginative: "Imaginative"
};

const DOMAIN_COLORS = {
  interpretive: "#2563eb",
  integrative: "#0d9488",
  interpersonal: "#7c3aed",
  imaginative: "#d97706"
};

function loadResult() {
  try {
    const stored = JSON.parse(localStorage.getItem('hws.latestResult') || 'null');
    if (stored && stored.top && stored.top.length) return stored;
  } catch(e) {}

  const params = new URLSearchParams(window.location.search);
  const top = (params.get('top') || '').split(',').filter(Boolean);
  if (!top.length) return null;
  const domainValues = (params.get('domains') || '0,0,0,0').split(',').map(Number);
  return {
    completedAt: new Date().toISOString(),
    top,
    scores: (params.get('scores') || '').split(',').map(Number),
    domains: {
      interpretive: domainValues[0] || 0,
      integrative: domainValues[1] || 0,
      interpersonal: domainValues[2] || 0,
      imaginative: domainValues[3] || 0
    }
  };
}

function progressKey(result) {
  return 'hws.progress.' + result.top.join('.');
}

function loadProgress(result) {
  try {
    return JSON.parse(localStorage.getItem(progressKey(result)) || '{}');
  } catch(e) {
    return {};
  }
}

function saveProgress(result, progress) {
  try {
    localStorage.setItem(progressKey(result), JSON.stringify(progress));
  } catch(e) {}
}

function dayIndex() {
  return Math.floor(Date.now() / 86400000);
}

function article(name) {
  return /^[AEIOU]/i.test(name.replace(/^The\s+/, '')) ? 'an ' + name : 'a ' + name;
}

function renderDashboard(result) {
  const primaryKey = result.top[0];
  const primary = APP_ARCHETYPES[primaryKey];
  if (!primary) return;

  document.getElementById('no-result').hidden = true;
  document.getElementById('app-dashboard').hidden = false;
  document.getElementById('app-title').textContent = 'My Spectrum: ' + primary.name;
  document.getElementById('app-subtitle').textContent = 'A practical roadmap for building value as ' + article(primary.name) + ' in the age of AI.';

  document.getElementById('primary-name').textContent = primary.name;
  document.getElementById('primary-tagline').textContent = '"' + primary.tagline + '"';
  document.getElementById('primary-desc').textContent = primary.desc;
  document.getElementById('primary-meta').innerHTML = [
    '<span class="domain-badge ' + primary.badge + '">' + primary.domain + '</span>',
    '<span class="app-chip">Primary path</span>',
    '<span class="app-chip">' + primary.skills[0] + '</span>'
  ].join('');

  renderDomains(result);
  renderRoadmap(result, primary);
  renderDaily(result, primary);
  renderSupporting(result);
  renderBookPath(result, primary);
}

function renderDomains(result) {
  const domains = result.domains || {};
  const max = Math.max(1, ...Object.values(domains));
  const el = document.getElementById('domain-profile');
  el.innerHTML = Object.keys(DOMAIN_LABELS).map(key => {
    const raw = domains[key] || 0;
    const pct = Math.round((raw / max) * 100);
    return '<div class="app-domain-row">' +
      '<div class="app-domain-label"><span>' + DOMAIN_LABELS[key] + '</span><span>' + pct + '%</span></div>' +
      '<div class="app-domain-bar"><span style="width:' + pct + '%; background:' + DOMAIN_COLORS[key] + '"></span></div>' +
    '</div>';
  }).join('');
}

function renderRoadmap(result, primary) {
  const progress = loadProgress(result);
  const steps = [
    {
      id: 'name-path',
      title: 'Name your value path',
      body: 'Write a two-sentence version of your value as ' + primary.name + '. One sentence should describe what you notice. One should describe what you help people do.'
    },
    {
      id: 'build-skill',
      title: 'Build the first skill',
      body: 'Practice ' + primary.skills[0] + ' in live work this week. Pick one meeting, assignment, or project where that skill changes the outcome.'
    },
    {
      id: 'install-habit',
      title: 'Install the weekly habit',
      body: primary.habit
    },
    {
      id: 'set-boundary',
      title: 'Set your AI boundary',
      body: primary.boundary
    }
  ];

  document.getElementById('roadmap-steps').innerHTML = steps.map((step, i) => {
    const done = progress[step.id] ? ' is-done' : '';
    return '<div class="roadmap-step' + done + '">' +
      '<button class="roadmap-check" type="button" data-step="' + step.id + '" aria-label="Toggle step ' + (i + 1) + '">' + (progress[step.id] ? 'done' : '') + '</button>' +
      '<div><h3>' + (i + 1) + '. ' + step.title + '</h3><p>' + step.body + '</p></div>' +
    '</div>';
  }).join('');

  document.querySelectorAll('.roadmap-check').forEach(button => {
    button.addEventListener('click', () => {
      const next = loadProgress(result);
      next[button.dataset.step] = !next[button.dataset.step];
      saveProgress(result, next);
      renderRoadmap(result, primary);
    });
  });

  document.getElementById('reset-progress').onclick = () => {
    saveProgress(result, {});
    renderRoadmap(result, primary);
    renderDaily(result, primary);
  };
}

function renderDaily(result, primary) {
  const progress = loadProgress(result);
  const today = new Date().toISOString().slice(0, 10);
  const practice = primary.practice[dayIndex() % primary.practice.length];
  document.getElementById('daily-title').textContent = practice;
  document.getElementById('daily-body').textContent = 'Use this as a small field rep today. The goal is not reflection for its own sake. The goal is to behave like the archetype in real work.';
  document.getElementById('daily-status').textContent = progress.daily === today ? 'Completed today.' : 'Not completed yet today.';
  document.getElementById('complete-daily').onclick = () => {
    const next = loadProgress(result);
    next.daily = today;
    saveProgress(result, next);
    renderDaily(result, primary);
  };
  document.getElementById('ai-boundary').textContent = primary.boundary;
  document.getElementById('boundary-test').textContent = 'Before using AI on important work, write down the human judgment you are still responsible for.';
}

function renderSupporting(result) {
  const items = result.top.slice(1, 3).map(key => APP_ARCHETYPES[key]).filter(Boolean);
  const el = document.getElementById('supporting-archetypes');
  if (!items.length) {
    el.innerHTML = '<p>Your result is highly concentrated. Retake the assessment later to see whether a secondary pattern emerges.</p>';
    return;
  }
  el.innerHTML = items.map(item => (
    '<div class="supporting-item">' +
      '<span class="domain-badge ' + item.badge + '">' + item.domain + '</span>' +
      '<h3>' + item.name + '</h3>' +
      '<p>' + item.desc + '</p>' +
    '</div>'
  )).join('');
}

function renderBookPath(result, primary) {
  const support = result.top.slice(1, 3).map(key => APP_ARCHETYPES[key]?.name).filter(Boolean);
  const el = document.getElementById('book-path');
  el.innerHTML = [
    '<div class="book-path-item"><strong>1. Re-read the 4I Framework.</strong><span>Use it to place ' + primary.name + ' inside the larger human-value map.</span></div>',
    '<div class="book-path-item"><strong>2. Focus on your primary chapter lens.</strong><span>' + primary.book + '</span></div>',
    '<div class="book-path-item"><strong>3. Compare your supporting pattern.</strong><span>' + (support.length ? 'Watch how ' + support.join(' and ') + ' change the way you express your primary archetype.' : 'Retake the assessment after a few weeks of practice and compare the result.') + '</span></div>'
  ].join('');
}

document.addEventListener('DOMContentLoaded', () => {
  const result = loadResult();
  if (!result) {
    document.getElementById('no-result').hidden = false;
    return;
  }
  renderDashboard(result);
});

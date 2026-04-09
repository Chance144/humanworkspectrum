// Shared script for all archetype detail pages — inject page-specific data via window.ARCHETYPE_PAGE
document.addEventListener('DOMContentLoaded', function() {
  const d = window.ARCHETYPE_PAGE;
  if (!d) return;
  document.title = d.name + ' — Human Work Spectrum';
  document.getElementById('ap-badge').textContent = d.domain;
  document.getElementById('ap-badge').className = 'domain-badge ' + d.badge_class;
  document.getElementById('ap-name').textContent = d.name;
  document.getElementById('ap-tagline').textContent = '"' + d.tagline + '"';
  document.getElementById('ap-desc').textContent = d.desc;
  document.getElementById('ap-protects').innerHTML = d.protects.map(i => '<li>' + i + '</li>').join('');
  document.getElementById('ap-produces').innerHTML = d.produces.map(i => '<li>' + i + '</li>').join('');
  document.getElementById('ap-does').innerHTML = d.does.map(i => '<li>' + i + '</li>').join('');
  document.getElementById('ap-trait').textContent = d.trait;

  // Action steps
  const stepsEl = document.getElementById('ap-steps');
  d.steps.forEach((s, i) => {
    stepsEl.innerHTML += `
      <div class="action-step">
        <div class="action-num">${i+1}</div>
        <div class="action-step-content">
          <h4>${s.title}</h4>
          <p>${s.body}</p>
        </div>
      </div>`;
  });

  // Related archetypes
  if (d.related) {
    const rel = document.getElementById('ap-related');
    d.related.forEach(r => {
      rel.innerHTML += `<a href="${r.url}" class="card-link" style="display:inline-block; margin-right:1rem; font-size:0.9rem; font-weight:600;">${r.name} →</a>`;
    });
  }
});

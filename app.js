'use strict';

// Navigation remains ordinary anchor navigation when JavaScript is unavailable.
const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
const setMenu = (open) => {
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  mobileNav.hidden = !open;
};
menuToggle.addEventListener('click', () => setMenu(menuToggle.getAttribute('aria-expanded') !== 'true'));
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !mobileNav.hidden) { setMenu(false); menuToggle.focus(); }
});
document.addEventListener('click', (event) => {
  if (!mobileNav.hidden && !event.target.closest('.site-header')) setMenu(false);
});
window.matchMedia('(min-width: 621px)').addEventListener('change', event => { if (event.matches) setMenu(false); });

const filterButtons = [...document.querySelectorAll('[data-filter]')];
const projectCards = [...document.querySelectorAll('.project-card')];
filterButtons.forEach(button => button.addEventListener('click', () => {
  const filter = button.dataset.filter;
  filterButtons.forEach(item => {
    item.classList.toggle('active', item === button);
    item.setAttribute('aria-pressed', String(item === button));
  });
  let count = 0;
  projectCards.forEach(card => {
    const visible = filter === 'all' || card.dataset.category.split(' ').includes(filter);
    card.hidden = !visible;
    if (visible) count++;
  });
  document.getElementById('filter-status').textContent = `${count} ${count === 1 ? 'project' : 'projects'} shown.`;
}));

const projects = {
  "agent": {
    "category": "TECHNICAL AI SAFETY / 2026",
    "title": "When Do Agent Failures Become Visible?",
    "html": "<p>Early-warning signals for LLM agents are a model × domain property. This two-phase study tests when partial trajectories reveal an impending task failure and whether warning horizons transfer between settings.</p><div class=\"research-measures\"><div><strong>~3,300</strong><span>Logged rollouts</span></div><div><strong>5</strong><span>Model families</span></div><div><strong>5</strong><span>Evaluation domains</span></div></div><h3>The finding that changed the project</h3><p>An initial prediction of stable model-specific failure phenotypes did not hold up across domains. The current work examines why the same model can be legible in one setting and hard to monitor in another.</p><h3>What the study covers</h3><p>Retail and airline tasks through τ-bench, authored health and banking domains, and code repair. The repository includes independent-judge checks, horizon calibration, confirmatory tests, and a documented null result for perturbation amplification.</p><p><img class=\"dialog-image\" src=\"assets/agent-matrix.png\" alt=\"Model by domain early-warning AUROC research figure.\"></p><p class=\"dialog-note\">Journal manuscript in preparation. Scope and findings are reported in the project repository. Analysis code is public; rollout logs are available on request pending dataset deposit.</p><p><a class=\"text-link\" href=\"https://github.com/Ejigsonpeter/agent-failure-legibility\" target=\"_blank\" rel=\"noopener noreferrer\">Read the current research and methods ↗</a></p>"
  },
  "stopcheck": {
    "category": "AGENT CONTROL / SCRIPTED PILOT",
    "title": "StopCheck: testing whether stop holds.",
    "html": "<p>StopCheck asks whether a workflow can still commit a protected action after a human withdraws permission. It separates application cancellation from a stop message delivered to an agent and scores outcomes from saved execution logs.</p><h3>The test fixture</h3><p>The pilot uses LangGraph, an async queue, and a SQLite ledger. Its restart fixture checks whether a recovered worker can execute a persisted job after cancellation and whether a commit-time authority check blocks that action.</p><h3>A dashboard for inspecting evidence</h3><p>The React and TypeScript frontend, served by a FastAPI backend, supports run browsing, trial timelines, trace rescoring, and new fixture runs.</p><p><img class=\"dialog-image\" src=\"assets/stopcheck-dashboard.png\" alt=\"StopCheck local dashboard showing the bundled scripted pilot.\"></p><p class=\"dialog-note\">Current status: 54 saved scripted trials. No live-model or external stop trials have run. Protected effects are database rows; these fixture outcomes are not deployed-agent failure rates.</p><p><a class=\"text-link\" href=\"https://github.com/essentric-coder/stopcheck\" target=\"_blank\" rel=\"noopener noreferrer\">Explore StopCheck on GitHub ↗</a></p>"
  },
  "caliper": {
    "category": "CLINICAL AI SAFETY / EVALUATION MVP",
    "title": "Caliper: evidence for safer medical AI.",
    "html": "<p>Caliper is a defensive red-team measurement tool for medical AI. It runs adversarial clinical prompts, judges responses with a separate model, and exposes case-level failures for inspection.</p><div class=\"research-measures\"><div><strong>6</strong><span>Adversarial suites</span></div><div><strong>37</strong><span>Evaluation cases</span></div><div><strong>3</strong><span>Verdicts: safe, partial, unsafe</span></div></div><h3>What is implemented</h3><p>A Python evaluation engine, FastAPI backend, and Next.js / TypeScript dashboard. Workflows include consistency checks, run comparisons, evidence grading, redacted exports, and a mock mode that works without API keys.</p><h3>What the measurements mean</h3><p>The scores describe the chosen cases and judge. They support failure analysis and regression checks; they do not certify clinical safety.</p><p class=\"dialog-note\">MVP. The repository documents production-hardening work that remains before use with real tenants and billing.</p><p><a class=\"text-link\" href=\"https://github.com/Ejigsonpeter/caliper\" target=\"_blank\" rel=\"noopener noreferrer\">View Caliper source and evaluation notes ↗</a></p>"
  },
  "multimodal": {
    "category": "MULTIMODAL LEARNING / MEDICAL AI",
    "title": "Vision-language models for medical questions.",
    "html": "<p>At Morgan State University’s Computer Vision and AI Lab, I fine-tune and evaluate vision-language models for medical question answering and captioning.</p><h3>Models and methods</h3><p>Qwen2.5-VL, Florence-2, transformers, and parameter-efficient adaptation, supported by reproducible PyTorch and Hugging Face workflows.</p><h3>Research directions</h3><p>Gastrointestinal visual question answering, synthetic training data, radiology captioning, structured explainability, and safety-oriented reasoning.</p><p>The work includes organizer-run CLEF evaluation, with attention to distribution shift, calibration, failure analysis, and generalization beyond internal validation.</p><p><a class=\"text-link\" href=\"https://github.com/Ejigsonpeter/Multi-Modal-Vision-Language-Learning-for-Gastrointestinal-VQA-and-Synthetic-Training-Data-Generation\" target=\"_blank\" rel=\"noopener noreferrer\">Explore the research repository ↗</a></p>"
  },
  "synpoly": {
    "category": "MEDICAL COMPUTER VISION / RESEARCH CODE",
    "title": "SynPolySegNet: from synthesis to segmentation.",
    "html": "<p>A multi-architecture framework for automated polyp segmentation, connecting synthetic data generation, object detection, and mask prediction.</p><h3>The pipeline</h3><p>Fine-tuned Stable Diffusion generates images, SAM supports automated ground-truth mask generation, and Faster R-CNN provides detection. Segmentation experiments span U-Net, PSPNet, FPN, LinkNet, and MANet.</p><h3>Why this work matters</h3><p>Medical vision research often operates with limited annotated data. This project explores how synthesis and automated annotation can support a broader experimental pipeline.</p><p><a class=\"text-link\" href=\"https://github.com/Ejigsonpeter/SynPolySegNet\" target=\"_blank\" rel=\"noopener noreferrer\">Read the code and experimental setup ↗</a></p>"
  },
  "privacy": {
    "category": "PRIVACY EVALUATION / IMAGECLEFMEDICAL 2026",
    "title": "Empirical Privacy Without Differential Privacy.",
    "html": "<p>This CSMorgan Lab project studies the privacy–utility tradeoff in synthetic CT generation through the ImageCLEFmedical GANs 2026 challenge.</p><h3>Three complementary questions</h3><ul><li>Can an attack identify images used to train a generator?</li><li>Can synthetic images be matched to their original latent vectors?</li><li>Can a CT generator reduce measured leakage while preserving useful structure?</li></ul><p>The notebooks examine membership inference, latent matching, and privacy-oriented generation. They report development-to-test generalization failures as well as the fidelity cost of stronger empirical privacy.</p><p class=\"dialog-note\">The approach does not provide a formal differential-privacy guarantee. Privacy results are specific to the benchmark attacks and evaluation protocol.</p><p><a class=\"text-link\" href=\"https://github.com/Ejigsonpeter/Empirical-Privacy-Without-Differential-Privacy\" target=\"_blank\" rel=\"noopener noreferrer\">Explore methods, results, and limitations ↗</a></p>"
  },
  "themis": {
    "category": "AI EVALUATION / PYTHON TOOLING",
    "title": "Themis: repeatable checks for model outputs.",
    "html": "<p>Themis is a modular Python framework for evaluating AI outputs through both a command-line interface and a Python API.</p><h3>Evaluation workflows</h3><p>The repository documents hallucination, bias, and toxicity checks; batch evaluation; structured output; and configurable evaluation components.</p><h3>Engineering focus</h3><p>Reusable interfaces and inspectable results make evaluation part of a repeatable workflow. Individual scores depend on the evaluator, reference information, and test data used.</p><p><a class=\"text-link\" href=\"https://github.com/Ejigsonpeter/themis\" target=\"_blank\" rel=\"noopener noreferrer\">View Themis on GitHub ↗</a></p>"
  }
};
const dialog = document.getElementById('project-dialog');
const closeDialog = () => dialog.close();
let previousFocus = null;
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  const project = projects[button.dataset.project];
  if (!project) return;
  previousFocus = button;
  document.getElementById('dialog-category').textContent = project.category;
  document.getElementById('dialog-title').textContent = project.title;
  document.getElementById('dialog-content').innerHTML = project.html;
  if (typeof window.applyEmbeddedAssets === 'function') window.applyEmbeddedAssets(document.getElementById('dialog-content'));
  dialog.showModal();
  dialog.scrollTop = 0;
  document.body.classList.add('dialog-open');
  document.getElementById('close-dialog').focus();
}));
document.getElementById('close-dialog').addEventListener('click', closeDialog);
document.getElementById('dialog-done').addEventListener('click', closeDialog);
dialog.addEventListener('close', () => {
  document.body.classList.remove('dialog-open');
  if (previousFocus) previousFocus.focus();
});
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) closeDialog();
});

// Show repository figures at a readable size without navigating away.
document.querySelectorAll('.project-visual[href]').forEach(link => link.addEventListener('click', event => {
  event.preventDefault();
  previousFocus = link;
  const sourceImage = link.querySelector('img');
  document.getElementById('dialog-category').textContent = 'PROJECT IMAGE';
  document.getElementById('dialog-title').textContent = link.classList.contains('figure-visual') ? 'Model × domain results' : 'StopCheck dashboard';
  const image = document.createElement('img');
  image.className = 'dialog-image';
  image.src = sourceImage.src;
  image.alt = sourceImage.alt;
  document.getElementById('dialog-content').replaceChildren(image);
  dialog.showModal();
  dialog.scrollTop = 0;
  document.body.classList.add('dialog-open');
  document.getElementById('close-dialog').focus();
}));

const publicationRows = [...document.querySelectorAll('.publication-row')];
const publicationSearch = document.getElementById('publication-search');
const publicationYear = document.getElementById('publication-year');
const publicationToggle = document.getElementById('publications-toggle');
const publicationStatus = document.getElementById('publication-status');
let publicationsExpanded = false;
const updatePublications = () => {
  const query = publicationSearch.value.trim().toLocaleLowerCase();
  const year = publicationYear.value;
  const filtering = Boolean(query) || year !== 'all';
  const matches = publicationRows.filter(row => (!query || row.textContent.toLocaleLowerCase().includes(query)) && (year === 'all' || row.dataset.year === year));
  const visible = new Set(filtering || publicationsExpanded ? matches : matches.slice(0, 6));
  publicationRows.forEach(row => { row.hidden = !visible.has(row); });
  publicationStatus.textContent = matches.length ? `Showing ${visible.size} of ${matches.length} research outputs${filtering ? ' matching your filters' : ''}.` : 'No matching research outputs. Try another keyword or year.';
  publicationToggle.hidden = filtering || matches.length <= 6;
  publicationToggle.setAttribute('aria-expanded', String(publicationsExpanded));
  publicationToggle.textContent = publicationsExpanded ? 'Show fewer outputs ↑' : `Show all ${matches.length} outputs ↓`;
};
document.querySelector('.publication-tools').hidden = false;
publicationSearch.addEventListener('input', updatePublications);
publicationYear.addEventListener('change', updatePublications);
publicationToggle.addEventListener('click', () => {
  const wasExpanded = publicationsExpanded;
  publicationsExpanded = !publicationsExpanded;
  updatePublications();
  if (wasExpanded) document.getElementById('publications-title').scrollIntoView({ behavior: 'auto', block: 'start' });
});
updatePublications();

document.getElementById('copy-email').addEventListener('click', async () => {
  const address = document.getElementById('email-address');
  const status = document.getElementById('copy-status');
  try {
    await navigator.clipboard.writeText(address.textContent.trim());
    status.textContent = 'Email address copied.';
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(address);
    selection.removeAllRanges();
    selection.addRange(range);
    status.textContent = 'Email selected. Press Ctrl+C or ⌘C to copy.';
  }
});

if ('IntersectionObserver' in window) {
  const navLinks = [...document.querySelectorAll('.desktop-nav a')];
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => link.classList.toggle('is-current', link.getAttribute('href') === `#${entry.target.id}`));
    });
  }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
  document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
}

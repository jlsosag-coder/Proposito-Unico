// ── Data ──────────────────────────────────────────────────────────────
const steps = [
  {
    num: "Herramienta 1",
    title: "Las tres voces",
    desc: "Antes de encontrar tu propósito, necesitas identificar qué voces estás escuchando. Hay tres voces que compiten por dirigir tu vida.",
    insight: "La mayoría vivimos respondiendo a las dos primeras voces sin saberlo. Tu propósito vive en la tercera — la más callada, pero la más verdadera.",
    questions: [
      {
        label: "Voz 1 — El guión heredado",
        text: "¿Qué frases o creencias heredadas de tu familia o cultura guían tus decisiones hoy, aunque no las hayas elegido conscientemente?",
        hint: "Ej: «hay que ser responsable», «no puedes vivir de eso», «así se hacen las cosas».",
        key: "v1"
      },
      {
        label: "Voz 2 — El miedo social",
        text: "¿Qué decisiones has tomado principalmente para ser aprobado o para no decepcionar a alguien?",
        hint: "Piensa en tu carrera, relaciones o estilo de vida.",
        key: "v2"
      },
      {
        label: "Voz 3 — Tu voz real",
        text: "¿Cuándo fue la última vez que sentiste que estabas siendo completamente tú mismo? ¿Qué estabas haciendo?",
        hint: "No importa si fue algo pequeño. Ese momento es una señal.",
        key: "v3"
      }
    ]
  },
  {
    num: "Herramienta 2",
    title: "Arqueología de vida",
    desc: "Tu propósito dejó huellas a lo largo de toda tu historia. Esta herramienta te ayuda a rastrearlas y encontrar el patrón que las une.",
    insight: "No construyes tu propósito desde cero. Lo excavas. Ya estuvo ahí toda tu vida — en ciertos momentos de máxima energía y conexión.",
    questions: [
      {
        label: "Momentos de máxima energía",
        text: "¿En qué momentos de tu vida sentiste que el tiempo desaparecía? ¿Cuándo te sentiste completamente vivo haciendo algo?",
        hint: "Pueden ser de cualquier época — infancia, adolescencia, o reciente. Escribe 2 o 3 momentos.",
        key: "arq1"
      },
      {
        label: "Momentos de máxima conexión",
        text: "¿Cuándo sentiste que lo que hacías realmente importaba? ¿Cuándo tuviste la sensación de estar exactamente donde debías estar?",
        hint: "Piensa en momentos donde tocaste algo verdadero en otra persona.",
        key: "arq2"
      },
      {
        label: "El patrón oculto",
        text: "Mirando esos momentos juntos, ¿qué hilo común ves? ¿Qué estabas haciendo en todos ellos, aunque el contexto fuera diferente?",
        hint: "Puede ser: enseñar, resolver, crear, conectar, liderar, construir, sanar...",
        key: "arq3"
      }
    ]
  },
  {
    num: "Herramienta 3",
    title: "El triángulo de propósito",
    desc: "Tu propósito vive en el cruce exacto de tres elementos. Si falta uno, algo siempre se sentirá incompleto.",
    insight: "La mayoría vive en uno o dos vértices. El propósito verdadero requiere los tres al mismo tiempo.",
    questions: [
      {
        label: "Vértice 1 — Talento natural",
        text: "¿Qué haces de forma casi automática que para otros resulta difícil o especial? ¿Qué te pide la gente que repitas o expliques?",
        hint: "Lo que te sale solo, lo que no te cuesta como a otros, aunque tú lo veas como «normal».",
        key: "tri1"
      },
      {
        label: "Vértice 2 — Pasión profunda",
        text: "¿Por qué causa o transformación estarías dispuesto a sacrificar algo importante, incluso si nadie te viera ni te pagara?",
        hint: "No lo que te gusta — lo que te mueve visceralmente. Lo que defiendes.",
        key: "tri2"
      },
      {
        label: "Vértice 3 — Impacto en otros",
        text: "¿Qué cambia en una persona después de estar contigo o de recibir lo que tú das? ¿Quién es diferente y cómo?",
        hint: "Sé específico. «Todos» no es una respuesta. Piensa en una persona concreta.",
        key: "tri3"
      }
    ]
  },
  {
    num: "Herramienta 4",
    title: "La prueba del legado",
    desc: "Cuando te mueves mentalmente al final de tu vida y miras hacia atrás, todo el ruido desaparece. Lo que queda es lo único que de verdad importó.",
    insight: "El arrepentimiento anticipado es la brújula más honesta que existe. Lo que más temes no haber hecho es casi siempre lo que más debes hacer.",
    questions: [
      {
        label: "El funeral",
        text: "¿Qué quieres que digan de ti las personas más importantes de tu vida el día de tu funeral?",
        hint: "No tus logros ni títulos. Quién fuiste para ellos.",
        key: "leg1"
      },
      {
        label: "La huella",
        text: "¿Qué habrá cambiado en el mundo — aunque sea en tu mundo pequeño — por el hecho de que tú exististe?",
        hint: "Puede ser una persona, una familia, una comunidad. Algo concreto.",
        key: "leg2"
      },
      {
        label: "El arrepentimiento",
        text: "Si llegaras al final de tu vida sin haber vivido tu propósito, ¿de qué específicamente te arrepentirías?",
        hint: "Responde sin filtro. Esta es la pregunta más poderosa del proceso.",
        key: "leg3"
      }
    ]
  },
  {
    num: "Herramienta 5",
    title: "Tu declaración de propósito",
    desc: "Ahora integras todo en una sola frase que capture quién eres y para qué estás aquí. No busques la perfección — busca la honestidad.",
    insight: "Esta frase no es un slogan. Es una brújula. Cuando tengas que elegir entre dos caminos, ella te dice cuál tomar.",
    questions: [
      {
        label: "Tu talento en acción",
        text: "Completa: «Soy alguien que...» (describe lo que haces de forma natural, no tu profesión)",
        hint: "Ej: «conecta ideas», «abre espacios seguros», «simplifica lo complejo», «despierta potencial».",
        key: "dec1"
      },
      {
        label: "La transformación que produces",
        text: "Completa: «...para que...» (describe el cambio que produces en otros)",
        hint: "Ej: «las personas se vean a sí mismas», «nadie tenga que caminar solo», «el conocimiento llegue a quien lo necesita».",
        key: "dec2"
      },
      {
        label: "Tu persona específica",
        text: "Completa: «...en...» (describe a quién específicamente)",
        hint: "No «todos». Una persona concreta: «personas que sienten que viven la vida de otros», «jóvenes sin dirección», «líderes abrumados».",
        key: "dec3"
      }
    ]
  }
];

// ── State ─────────────────────────────────────────────────────────────
let current = 0;
const answers = {};

// Load saved state
function loadState() {
  try {
    const saved = sessionStorage.getItem('proposito_state');
    if (saved) {
      const state = JSON.parse(saved);
      current = state.current || 0;
      Object.assign(answers, state.answers || {});
    }
  } catch(e) {}
}

function saveState() {
  try {
    sessionStorage.setItem('proposito_state', JSON.stringify({ current, answers }));
  } catch(e) {}
}

// ── DOM builders ──────────────────────────────────────────────────────
function buildDots() {
  const wrap = document.getElementById('progressDots');
  wrap.innerHTML = '';
  steps.forEach((_, i) => {
    const d = document.createElement('div');
    d.className = 'progress-dot' + (i < current ? ' done' : i === current ? ' active' : '');
    wrap.appendChild(d);
  });
  const label = current >= steps.length
    ? 'Proceso completo ✓'
    : `Herramienta ${current + 1} de ${steps.length}`;
  document.getElementById('progressLabel').textContent = label;
}

function buildStep(idx) {
  const s = steps[idx];
  const container = document.getElementById('stepsContainer');
  container.innerHTML = '';

  const card = document.createElement('div');
  card.className = 'step-card';

  const qs = s.questions.map(q => `
    <div class="q-block">
      <p class="q-label">${q.label}</p>
      <p class="q-text">${q.text}</p>
      <p class="q-hint">${q.hint}</p>
      <textarea
        id="${q.key}"
        placeholder="Escribe aquí tu respuesta..."
        oninput="onTextInput()"
        rows="4"
      >${escapeHtml(answers[q.key] || '')}</textarea>
    </div>
    <div class="divider"></div>
  `).join('');

  card.innerHTML = `
    <div class="step-header">
      <p class="step-num">${s.num}</p>
      <h2 class="step-title">${s.title}</h2>
      <p class="step-desc">${s.desc}</p>
    </div>
    <div class="step-body">
      <div class="insight"><strong>¿Por qué esta herramienta?</strong> ${s.insight}</div>
      ${qs}
    </div>
  `;
  container.appendChild(card);
  checkAnswers();
}

function buildResult() {
  const container = document.getElementById('stepsContainer');
  document.getElementById('navBar').classList.add('hidden');

  const t   = answers.dec1 || '[tu talento]';
  const tr  = answers.dec2 || '[tu transformación]';
  const p   = answers.dec3 || '[tu persona]';
  const purpose = `Soy alguien que ${t} para que ${tr} en ${p}.`;

  container.innerHTML = `
    <div class="result-card">
      <p class="result-eyebrow">Tu declaración de propósito vivido</p>
      <div class="result-quote-mark">"</div>
      <p class="result-purpose">${escapeHtml(purpose)}</p>

      <div class="result-divider"></div>

      <div class="result-section">
        <p class="result-section-label">Tu patrón de vida</p>
        <p class="result-section-text">${escapeHtml(answers.arq3 || answers.tri1 || '—')}</p>
      </div>
      <div class="result-section">
        <p class="result-section-label">Tu pasión profunda</p>
        <p class="result-section-text">${escapeHtml(answers.tri2 || '—')}</p>
      </div>
      <div class="result-section">
        <p class="result-section-label">Tu mayor arrepentimiento anticipado</p>
        <p class="result-section-text">${escapeHtml(answers.leg3 || '—')}</p>
      </div>

      <div class="result-divider"></div>

      <div class="validation">
        <p class="validation-title">Tres pruebas para tu declaración</p>
        <div class="val-item"><span class="val-dot"></span>¿Te incomoda un poco? Si es completamente cómoda, es demasiado segura.</div>
        <div class="val-item"><span class="val-dot"></span>¿La reconoces como tuya? ¿Sientes que alguien por fin nombró algo que ya sabías?</div>
        <div class="val-item"><span class="val-dot"></span>¿Te da dirección en decisiones concretas? ¿Te dice qué hacer el martes por la mañana?</div>
      </div>

      <div class="result-actions">
        <button class="btn-share" onclick="shareResult('${escapeAttr(purpose)}')">📤 Compartir mi propósito</button>
        <button class="btn-restart" onclick="restart()">Volver al inicio</button>
      </div>
    </div>

    <div class="result-note">
      <p class="result-note-label">Recuerda</p>
      <p class="result-note-text">Esta es tu primera versión. No es perfecta — y no debe serlo. Se llama propósito <em>vivido</em> porque se afina con el tiempo, en las decisiones reales de cada día.</p>
    </div>
  `;
}

// ── Helpers ───────────────────────────────────────────────────────────
function escapeHtml(str) {
  return String(str)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;');
}
function escapeAttr(str) {
  return String(str).replace(/'/g,"\\'");
}

function onTextInput() {
  saveCurrentAnswers();
  checkAnswers();
  saveState();
}

function saveCurrentAnswers() {
  if (current >= steps.length) return;
  steps[current].questions.forEach(q => {
    const el = document.getElementById(q.key);
    if (el) answers[q.key] = el.value.trim();
  });
}

function checkAnswers() {
  if (current >= steps.length) return;
  const allFilled = steps[current].questions.every(q => {
    const el = document.getElementById(q.key);
    return el && el.value.trim().length > 4;
  });
  document.getElementById('btnNext').disabled = !allFilled;
}

function goNext() {
  saveCurrentAnswers();
  saveState();
  current++;
  if (current >= steps.length) {
    buildResult();
    buildDots();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  buildStep(current);
  buildDots();
  updateBackBtn();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goBack() {
  if (current === 0) return;
  saveCurrentAnswers();
  current--;
  buildStep(current);
  buildDots();
  updateBackBtn();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateBackBtn() {
  const btn = document.getElementById('btnBack');
  if (btn) btn.style.display = current === 0 ? 'none' : '';
}

function restart() {
  current = 0;
  Object.keys(answers).forEach(k => delete answers[k]);
  try { sessionStorage.removeItem('proposito_state'); } catch(e) {}
  document.getElementById('navBar').classList.remove('hidden');
  buildStep(0);
  buildDots();
  updateBackBtn();
  document.getElementById('btnNext').disabled = true;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function shareResult(purpose) {
  if (navigator.share) {
    navigator.share({
      title: 'Mi propósito de vida',
      text: purpose,
    }).catch(() => {});
  } else {
    navigator.clipboard.writeText(purpose)
      .then(() => alert('¡Declaración copiada al portapapeles!'))
      .catch(() => alert(purpose));
  }
}

// ── PWA install prompt ────────────────────────────────────────────────
let deferredPrompt = null;
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredPrompt = e;
  const banner = document.getElementById('installBanner');
  if (banner) banner.classList.remove('hidden');
});

document.getElementById('installBtn')?.addEventListener('click', async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  deferredPrompt = null;
  document.getElementById('installBanner').classList.add('hidden');
});

window.addEventListener('appinstalled', () => {
  document.getElementById('installBanner')?.classList.add('hidden');
});

// ── Service Worker ────────────────────────────────────────────────────
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .catch(err => console.log('SW registration failed:', err));
  });
}

// ── Init ──────────────────────────────────────────────────────────────
loadState();
buildStep(current);
buildDots();
updateBackBtn();
if (current >= steps.length) {
  buildResult();
  document.getElementById('navBar').classList.add('hidden');
}

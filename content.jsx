// Bilingual content + data for the portfolio
const COPY = {
  en: {
    role: "Software Developer",
    location: "Madrid, Spain",
    available: "Open to work",

    heroBio: (
      <>
        Backend-leaning developer working primarily with <strong>Java</strong> and the <strong>Spring Boot</strong> ecosystem. Recently completed a three-month internship at <strong>Indra</strong>. Self-taught, methodical, and focused on writing reliable, well-documented code.
      </>
    ),

    nav: {
      about: "about",
      now: "now",
      experience: "experience",
      projects: "projects",
      skills: "skills",
      contact: "contact",
    },

    sections: {
      about: { title: "About", sub: "A short introduction." },
      now: { title: "Currently", sub: "What occupies the working hours right now." },
      experience: { title: "Experience", sub: "Education and professional milestones." },
      projects: { title: "Projects", sub: "Live from GitHub — sorted by latest activity." },
      skills: { title: "Stack", sub: "Languages, tools, and the AI assistants in regular rotation." },
      contact: { title: "Contact", sub: "For roles, collaborations, or technical conversations." },
    },

    aboutP1: (<>I am a software developer based in Madrid with a strong interest in backend systems and the broader software ecosystem. I recently completed the <strong>Higher Vocational Degree in Multi-Platform Application Development</strong> at CEU FP, after finishing a Baccalaureate in Technological Sciences.</>),
    aboutP2: (<>I work primarily with <strong>Java and Spring Boot</strong>, and I am comfortable across the stack with HTML, CSS, JavaScript, SQL and Kotlin. I value structured, well-documented code and clear communication within a team. I am proactive, learn fast, and treat every project as an opportunity to improve the way I work.</>),
    aboutP3: (<>I am looking for a developer role where I can contribute, keep learning, and grow alongside an experienced team.</>),

    now: {
      tag: "// status",
      title: "Building on Spring Boot fundamentals",
      body: "After a three-month internship at Indra training in Spring Boot, GitHub workflows, and team practices, I am now consolidating that experience through personal projects and continuing to deepen my Java backend foundations.",
      items: [
        "Spring Boot REST APIs",
        "Vue 3 + REST integrations",
        "SQL & data modeling",
        "Reading: clean architecture",
      ],
    },

    experience: [
      {
        period: "2025 · 3 months",
        org: "Indra",
        role: "Software Development Intern",
        pill: "Recent",
        current: true,
        summary: "Three-month internship training in Spring Boot (Java), GitHub workflows, and the team dynamics of a large engineering organization.",
      },
      {
        period: "2023 — 2025",
        org: "CEU FP",
        role: "Higher Vocational Degree — Multi-Platform Application Development",
        summary: "Completed the Higher Vocational Degree in Multi-Platform Application Development, covering software design, databases, web programming, and cross-platform application development.",
      },
      {
        period: "2023 — 2024",
        org: "Círculo de Baile",
        role: "Visual Design — Promotional Posters",
        summary: "Designed promotional posters and visual material for the company's events and activities.",
      },
      {
        period: "2022 — 2023",
        org: "Bachillerato",
        role: "Baccalaureate in Technological Sciences",
        summary: "Completed the Baccalaureate in Technological Sciences, building the foundation for further studies in software development.",
      },
    ],

    projectsLoading: "fetching repositories from github.com/BRUSKYMIL ...",
    projectsError: "could not reach github api — check connection or visit the profile directly.",
    projectsEmpty: "no public repositories found.",

    skillGroups: [
      { tag: "languages", items: ["Java", "Kotlin", "SQL", "JavaScript", "HTML", "CSS"], primary: true },
      { tag: "frameworks & runtimes", items: ["Spring Boot", "Vue 3", "Node.js"] },
      { tag: "tooling", items: ["Git", "GitHub", "IntelliJ IDEA", "VS Code"] },
      { tag: "practices", items: ["Structured code", "Documentation", "Team collaboration", "Continuous learning"] },
    ],

    aiTitle: "AI assistants in rotation",
    aiSub: "Tools used regularly to research, prototype, and review code.",
    aiTools: [
      { name: "Claude", color: "oklch(0.78 0.16 30)", letter: "C" },
      { name: "GitHub Copilot", color: "oklch(0.92 0.02 250)", letter: "G" },
      { name: "ChatGPT", color: "oklch(0.78 0.16 145)", letter: "O" },
      { name: "Gemini", color: "oklch(0.78 0.18 250)", letter: "G" },
      { name: "Blackbox AI", color: "oklch(0.40 0.02 250)", letter: "B" },
    ],

    contactIntro: "Interested in discussing a role, a project, or a technical question? The form sends a message directly — no account required. LinkedIn works too.",
    form: {
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      send: "Send message",
      sending: "Sending…",
      ok: "✓ Message captured locally. For real delivery, this form needs to be wired to a backend.",
      err: "Could not send. Try LinkedIn instead.",
    },

    footer: "Designed and built with care.",
  },

  es: {
    role: "Desarrollador de Software",
    location: "Madrid, España",
    available: "Disponible",

    heroBio: (
      <>
        Desarrollador con perfil backend, centrado en <strong>Java</strong> y el ecosistema <strong>Spring Boot</strong>. Recién finalizadas las prácticas de tres meses en <strong>Indra</strong>. Autodidacta, metódico y enfocado en escribir código fiable y bien documentado.
      </>
    ),

    nav: {
      about: "sobre mí",
      now: "ahora",
      experience: "experiencia",
      projects: "proyectos",
      skills: "stack",
      contact: "contacto",
    },

    sections: {
      about: { title: "Sobre mí", sub: "Una breve presentación." },
      now: { title: "Actualmente", sub: "En qué se centran las horas de trabajo ahora mismo." },
      experience: { title: "Experiencia", sub: "Formación y trayectoria profesional." },
      projects: { title: "Proyectos", sub: "En directo desde GitHub — ordenados por actividad reciente." },
      skills: { title: "Stack", sub: "Lenguajes, herramientas y los asistentes de IA que utilizo habitualmente." },
      contact: { title: "Contacto", sub: "Para procesos, colaboraciones o conversaciones técnicas." },
    },

    aboutP1: (<>Soy desarrollador de software en Madrid, con un fuerte interés en sistemas backend y el ecosistema del software en general. Recientemente he finalizado el <strong>Grado Superior de Desarrollo de Aplicaciones Multiplataforma</strong> en CEU FP, tras cursar el Bachillerato de Ciencias Tecnológicas.</>),
    aboutP2: (<>Trabajo principalmente con <strong>Java y Spring Boot</strong>, y me defiendo en HTML, CSS, JavaScript, SQL y Kotlin. Valoro el código estructurado y bien documentado, así como la comunicación clara dentro del equipo. Soy proactivo, aprendo rápido y entiendo cada proyecto como una oportunidad para mejorar mi forma de trabajar.</>),
    aboutP3: (<>Busco una posición como desarrollador donde poder aportar, seguir aprendiendo y crecer junto a un equipo con experiencia.</>),

    now: {
      tag: "// estado",
      title: "Consolidando los fundamentos de Spring Boot",
      body: "Tras tres meses de prácticas en Indra formándome en Spring Boot, flujos con GitHub y dinámicas de equipo, ahora consolido esa experiencia con proyectos personales y profundizo en los fundamentos del backend con Java.",
      items: [
        "APIs REST con Spring Boot",
        "Integración Vue 3 + REST",
        "SQL y modelado de datos",
        "Lectura: arquitectura limpia",
      ],
    },

    experience: [
      {
        period: "2025 · 3 meses",
        org: "Indra",
        role: "Prácticas de Desarrollo de Software",
        pill: "Reciente",
        current: true,
        summary: "Tres meses de prácticas formándome en Spring Boot (Java), flujos de trabajo con GitHub y la dinámica de funcionamiento de un equipo de ingeniería grande.",
      },
      {
        period: "2023 — 2025",
        org: "CEU FP",
        role: "Grado Superior — Desarrollo de Aplicaciones Multiplataforma",
        summary: "Finalizado el Grado Superior de Desarrollo de Aplicaciones Multiplataforma, cubriendo diseño de software, bases de datos, programación web y desarrollo multiplataforma.",
      },
      {
        period: "2023 — 2024",
        org: "Círculo de Baile",
        role: "Diseño visual — Carteles promocionales",
        summary: "Diseño de carteles y material visual para promoción de actividades y eventos de la empresa.",
      },
      {
        period: "2022 — 2023",
        org: "Bachillerato",
        role: "Bachillerato de Ciencias Tecnológicas",
        summary: "Bachillerato de Ciencias Tecnológicas finalizado, sentando la base para los estudios posteriores en desarrollo de software.",
      },
    ],

    projectsLoading: "obteniendo repositorios de github.com/BRUSKYMIL ...",
    projectsError: "no se pudo conectar con la API de GitHub — revisa la conexión o visita el perfil directamente.",
    projectsEmpty: "no se han encontrado repositorios públicos.",

    skillGroups: [
      { tag: "lenguajes", items: ["Java", "Kotlin", "SQL", "JavaScript", "HTML", "CSS"], primary: true },
      { tag: "frameworks y runtimes", items: ["Spring Boot", "Vue 3", "Node.js"] },
      { tag: "herramientas", items: ["Git", "GitHub", "IntelliJ IDEA", "VS Code"] },
      { tag: "metodología", items: ["Código estructurado", "Documentación", "Trabajo en equipo", "Aprendizaje continuo"] },
    ],

    aiTitle: "Asistentes de IA en rotación",
    aiSub: "Herramientas utilizadas habitualmente para investigar, prototipar y revisar código.",
    aiTools: [
      { name: "Claude", color: "oklch(0.78 0.16 30)", letter: "C" },
      { name: "GitHub Copilot", color: "oklch(0.92 0.02 250)", letter: "G" },
      { name: "ChatGPT", color: "oklch(0.78 0.16 145)", letter: "O" },
      { name: "Gemini", color: "oklch(0.78 0.18 250)", letter: "G" },
      { name: "Blackbox AI", color: "oklch(0.40 0.02 250)", letter: "B" },
    ],

    contactIntro: "¿Te interesa hablar de una vacante, un proyecto o una cuestión técnica? El formulario envía el mensaje directamente — no hace falta cuenta. LinkedIn también funciona.",
    form: {
      name: "Nombre",
      email: "Email",
      subject: "Asunto",
      message: "Mensaje",
      send: "Enviar mensaje",
      sending: "Enviando…",
      ok: "✓ Mensaje guardado localmente. Para entrega real, conecta el formulario a un backend.",
      err: "No se pudo enviar. Prueba por LinkedIn.",
    },

    footer: "Diseñado y construido con cuidado.",
  },
};

const PROFILE = {
  name: "Luis Moreno-Torres Marqués",
  github: "https://github.com/BRUSKYMIL",
  githubUser: "BRUSKYMIL",
  linkedin: "https://www.linkedin.com/in/luismtm",
  cv: "assets/CV-Luis-Moreno-Torres.pdf",
};

window.COPY = COPY;
window.PROFILE = PROFILE;

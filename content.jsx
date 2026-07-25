// Bilingual content + data for the portfolio
const COPY = {
  en: {
    role: "Software Developer",
    location: "Madrid, Spain",
    available: "Open to work",

    heroBio: (
      <>
        Web developer at the <strong>Registro Mercantil de Madrid</strong> since July 2026, building a web application with <strong>C# and ASP.NET Web Forms</strong>. Backend-leaning by background, with <strong>Java</strong> and the <strong>Spring Boot</strong> ecosystem. Self-taught, methodical, and focused on writing reliable, well-documented code.
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
    aboutP2: (<>Professionally I work with <strong>C# and ASP.NET Web Forms</strong>, while my own background is built around <strong>Java and Spring Boot</strong>. I am comfortable across the stack with HTML, CSS, JavaScript, SQL and Kotlin. I value structured, well-documented code and clear communication within a team. I am proactive, learn fast, and treat every project as an opportunity to improve the way I work.</>),
    aboutP3: (<>I am looking for a developer role where I can contribute, keep learning, and grow alongside an experienced team.</>),

    now: {
      tag: "// status",
      title: "Building web applications with C# and .NET",
      body: "Since July 2026 I am part of the team at the Registro Mercantil de Madrid (Madrid Companies Registry), where I develop a web application with C# and ASP.NET Web Forms.",
      items: [
        "C#",
        "ASP.NET Web Forms",
        ".NET",
      ],
      sideTag: "// outside work",
      sideItems: [
        "GamerZone — my own platform",
        "Node.js & WebRTC",
        "Java + Spring Boot",
      ],
    },

    experience: [
      {
        period: "Jul 2026 — Present",
        org: "Registro Mercantil de Madrid",
        role: "Web Developer",
        pill: "Current",
        current: true,
        summary: "Developing a web application with C# and ASP.NET Web Forms at the Madrid Companies Registry, bringing my backend background into a professional production environment.",
      },
      {
        period: "2025 · 3 months",
        org: "Indra",
        role: "Software Development Intern",
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

    featured: {
      tag: "// featured project",
      live: "Live",
      desc: "A full real-time communication platform built and operated end to end: servers with roles and permissions, text channels and group DMs, WebRTC voice calls with screen sharing, push notifications, an installable PWA, and a Windows desktop app with auto-updates. Running in production on a cloud VM with real daily users.",
      stack: ["Node.js", "WebSockets", "WebRTC", "PWA + Web Push", "Electron", "Oracle Cloud + Caddy"],
      visit: "Visit GamerZone",
      caption: "gamerzone-gg.duckdns.org — production login screen",
    },

    projectsLoading: "fetching repositories from github.com/BRUSKYMIL ...",
    projectsError: "could not reach github api — check connection or visit the profile directly.",
    projectsEmpty: "no public repositories found.",

    skillGroups: [
      { tag: "languages", items: ["Java", "C#", "Kotlin", "SQL", "JavaScript", "HTML", "CSS"], primary: true },
      { tag: "frameworks & runtimes", items: ["Spring Boot", "ASP.NET Web Forms", "Vue 3", "Node.js"] },
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
      ok: "✓ Message sent successfully. I'll get back to you soon!",
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
        Desarrollador web en el <strong>Registro Mercantil de Madrid</strong> desde julio de 2026, donde desarrollo una aplicación web con <strong>C# y ASP.NET Web Forms</strong>. De formación backend, con <strong>Java</strong> y el ecosistema <strong>Spring Boot</strong>. Autodidacta, metódico y enfocado en escribir código fiable y bien documentado.
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
    aboutP2: (<>Profesionalmente trabajo con <strong>C# y ASP.NET Web Forms</strong>, mientras que mi base personal se apoya en <strong>Java y Spring Boot</strong>. Me defiendo en HTML, CSS, JavaScript, SQL y Kotlin. Valoro el código estructurado y bien documentado, así como la comunicación clara dentro del equipo. Soy proactivo, aprendo rápido y entiendo cada proyecto como una oportunidad para mejorar mi forma de trabajar.</>),
    aboutP3: (<>Busco una posición como desarrollador donde poder aportar, seguir aprendiendo y crecer junto a un equipo con experiencia.</>),

    now: {
      tag: "// estado",
      title: "Desarrollando aplicaciones web con C# y .NET",
      body: "Desde julio de 2026 formo parte del equipo del Registro Mercantil de Madrid, donde desarrollo una aplicación web con C# y ASP.NET Web Forms.",
      items: [
        "C#",
        "ASP.NET Web Forms",
        ".NET",
      ],
      sideTag: "// al margen del trabajo",
      sideItems: [
        "GamerZone — plataforma propia",
        "Node.js y WebRTC",
        "Java + Spring Boot",
      ],
    },

    experience: [
      {
        period: "Jul 2026 — Actualidad",
        org: "Registro Mercantil de Madrid",
        role: "Desarrollador Web",
        pill: "Actual",
        current: true,
        summary: "Desarrollo de una aplicación web con C# y ASP.NET Web Forms en el Registro Mercantil de Madrid, aplicando mi base de backend en un entorno profesional de producción.",
      },
      {
        period: "2025 · 3 meses",
        org: "Indra",
        role: "Prácticas de Desarrollo de Software",
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

    featured: {
      tag: "// proyecto destacado",
      live: "En producción",
      desc: "Una plataforma completa de comunicación en tiempo real, construida y operada de principio a fin: servidores con roles y permisos, canales de texto y grupos de mensajes directos, llamadas de voz WebRTC con compartir pantalla, notificaciones push, PWA instalable y aplicación de escritorio para Windows con auto-actualizaciones. Desplegada en producción en una VM cloud con usuarios reales a diario.",
      stack: ["Node.js", "WebSockets", "WebRTC", "PWA + Web Push", "Electron", "Oracle Cloud + Caddy"],
      visit: "Visitar GamerZone",
      caption: "gamerzone-gg.duckdns.org — pantalla de acceso en producción",
    },

    projectsLoading: "obteniendo repositorios de github.com/BRUSKYMIL ...",
    projectsError: "no se pudo conectar con la API de GitHub — revisa la conexión o visita el perfil directamente.",
    projectsEmpty: "no se han encontrado repositorios públicos.",

    skillGroups: [
      { tag: "lenguajes", items: ["Java", "C#", "Kotlin", "SQL", "JavaScript", "HTML", "CSS"], primary: true },
      { tag: "frameworks y runtimes", items: ["Spring Boot", "ASP.NET Web Forms", "Vue 3", "Node.js"] },
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
      ok: "✓ Mensaje enviado correctamente. ¡Me pondré en contacto contigo pronto!",
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

const { useState, useEffect, useMemo, useRef } = React;

// ============ Hero terminal — typed effect ============
function HeroTerminal({ lang }) {
  const lines = useMemo(() => lang === "es" ? [
    { kind: "cmd", text: "whoami" },
    { kind: "out", text: "luis-moreno-torres" },
    { kind: "cmd", text: "cat profile.json" },
    { kind: "json", lines: [
      "{",
      '  "rol":      "Desarrollador Web",',
      '  "stack":    ["C#", ".NET", "Java", "SQL"],',
      '  "ubicacion":"Madrid, ES",',
      '  "estado":   "disponible para trabajar"',
      "}",
    ]},
    { kind: "cmd", text: "./run.sh" },
    { kind: "out", text: "→ listo cuando tú lo estés." },
  ] : [
    { kind: "cmd", text: "whoami" },
    { kind: "out", text: "luis-moreno-torres" },
    { kind: "cmd", text: "cat profile.json" },
    { kind: "json", lines: [
      "{",
      '  "role":     "Web Developer",',
      '  "stack":    ["C#", ".NET", "Java", "SQL"],',
      '  "location": "Madrid, ES",',
      '  "status":   "open to work"',
      "}",
    ]},
    { kind: "cmd", text: "./run.sh" },
    { kind: "out", text: "→ ready when you are." },
  ], [lang]);

  // Render JSON with syntax coloring
  const colorizeJson = (line) => {
    // match "key":
    const keyMatch = line.match(/^(\s*)"([^"]+)":(.*)$/);
    if (keyMatch) {
      const [, indent, key, rest] = keyMatch;
      // colorize string values & arrays inside rest
      const parts = [];
      let r = rest;
      const re = /"([^"]*)"/g;
      let last = 0, m;
      while ((m = re.exec(r)) !== null) {
        if (m.index > last) parts.push(r.slice(last, m.index));
        parts.push(<span key={m.index} className="str">"{m[1]}"</span>);
        last = re.lastIndex;
      }
      if (last < r.length) parts.push(r.slice(last));
      return (
        <span>
          {indent}<span className="key">"{key}"</span>:{parts}
        </span>
      );
    }
    return <span>{line}</span>;
  };

  return (
    <div className="terminal" aria-hidden="false">
      <div className="terminal-bar">
        <div className="lights"><span /><span /><span /></div>
        <div className="title">~ / luis — zsh</div>
      </div>
      <div className="terminal-body">
        {lines.map((l, i) => {
          if (l.kind === "cmd") return <div key={i}><span className="prompt">$</span> <span className="cmd">{l.text}</span></div>;
          if (l.kind === "out") return <div key={i} className="out">{l.text}</div>;
          if (l.kind === "json") return (
            <div key={i} className="out">
              {l.lines.map((ln, j) => <div key={j}>{colorizeJson(ln)}</div>)}
            </div>
          );
          return null;
        })}
        <div><span className="prompt">$</span> <span className="cursor" /></div>
      </div>
    </div>
  );
}

// ============ Section header ============
function SectionTag({ num, label }) {
  return (
    <div className="section-tag">
      <span className="num">{num}</span>
      <span className="slash">/</span>
      <span>{label}</span>
    </div>
  );
}

// ============ Top bar ============
function TopBar({ lang, setLang, copy }) {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <div className="brand-mark">
          <span className="dot" />
          <span><strong>luis</strong>.dev</span>
          <span style={{ color: "var(--dim)" }}>·</span>
          <span>{copy.available}</span>
        </div>
        <div className="top-actions">
          <div className="lang-toggle" role="group" aria-label="Language toggle">
            <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button>
            <button className={lang === "es" ? "active" : ""} onClick={() => setLang("es")}>ES</button>
          </div>
          <a className="cv-btn" href={PROFILE.cv} download>
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M8 2v9m0 0l-3-3m3 3l3-3M3 14h10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            CV.pdf
          </a>
        </div>
      </div>
    </header>
  );
}

// ============ Hero ============
function Hero({ lang, copy }) {
  return (
    <section id="home" className="section hero">
      <div className="hero-meta">
        <span><span className="key">→</span> <span>{copy.role}</span></span>
        <span><span className="key">@</span> <span>{copy.location}</span></span>
        <span><span className="key">●</span> <span>{copy.available}</span></span>
      </div>
      <h1 className="hero-name">
        Luis Moreno-Torres<br/>
        <span className="accent">{copy.role}.</span>
      </h1>

      <div className="hero-grid">
        <p className="hero-bio">{copy.heroBio}</p>
        <HeroTerminal lang={lang} />
      </div>
    </section>
  );
}

// ============ About ============
function About({ copy }) {
  return (
    <section id="about" className="section">
      <SectionTag num="01" label={copy.nav.about} />
      <h2 className="section-title">{copy.sections.about.title}</h2>
      <p className="section-sub">{copy.sections.about.sub}</p>
      <div className="about-grid">
        <div>
          <p>{copy.aboutP1}</p>
          <p>{copy.aboutP2}</p>
        </div>
        <div>
          <p>{copy.aboutP3}</p>
        </div>
      </div>
    </section>
  );
}

// ============ Now ============
function Now({ copy }) {
  return (
    <section id="now" className="section">
      <SectionTag num="02" label={copy.nav.now} />
      <h2 className="section-title">{copy.sections.now.title}</h2>
      <p className="section-sub">{copy.sections.now.sub}</p>
      <div className="now-card">
        <div className="now-header">
          <span className="live-dot" />
          <span>{copy.now.tag}</span>
        </div>
        <h3>{copy.now.title}</h3>
        <p>{copy.now.body}</p>
        <ul className="now-list">
          {copy.now.items.map((it, i) => <li key={i}>{it}</li>)}
        </ul>
        <div className="now-side">
          <span className="now-side-tag">{copy.now.sideTag}</span>
          <ul className="now-list now-list-side">
            {copy.now.sideItems.map((it, i) => <li key={i}>{it}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

// ============ Experience timeline ============
function Experience({ copy }) {
  return (
    <section id="experience" className="section">
      <SectionTag num="03" label={copy.nav.experience} />
      <h2 className="section-title">{copy.sections.experience.title}</h2>
      <p className="section-sub">{copy.sections.experience.sub}</p>
      <div className="timeline">
        {copy.experience.map((item, i) => (
          <div key={i} className={"tl-item" + (item.current ? " is-current" : "")}>
            <div className="tl-period">{item.period}</div>
            <h3 className="tl-title">
              <span>{item.role}</span>
              <span style={{ color: "var(--dim)" }}>·</span>
              <span className="org">{item.org}</span>
              {item.pill && <span className="pill">{item.pill}</span>}
            </h3>
            <p className="tl-summary">{item.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ============ Featured project — GamerZone ============
const GAMERZONE_URL = "https://gamerzone-gg.duckdns.org";

function FeaturedProject({ copy }) {
  const f = copy.featured;
  return (
    <div className="featured-card">
      <div className="featured-info">
        <div className="now-header" style={{ marginBottom: 14 }}>
          <span className="live-dot" />
          <span>{f.tag}</span>
        </div>
        <h3 className="featured-name">
          GamerZone
          <span className="pill">{f.live}</span>
        </h3>
        <p className="featured-desc">{f.desc}</p>
        <ul className="skill-list" style={{ marginBottom: 22 }}>
          {f.stack.map((s, i) => <li key={i}>{s}</li>)}
        </ul>
        <a className="cv-btn" href={GAMERZONE_URL} target="_blank" rel="noopener noreferrer">
          {f.visit} ↗
        </a>
      </div>
      <a className="featured-shot" href={GAMERZONE_URL} target="_blank" rel="noopener noreferrer">
        <span className="terminal-bar">
          <span className="lights"><span /><span /><span /></span>
          <span className="title">gamerzone-gg.duckdns.org</span>
        </span>
        <img src="assets/gamerzone-preview.png" alt={f.caption} loading="lazy" />
      </a>
    </div>
  );
}

// ============ Projects (live from GitHub) ============
const LANG_COLORS = {
  Java: "oklch(0.65 0.18 30)",
  "C#": "oklch(0.62 0.16 300)",
  Kotlin: "oklch(0.72 0.18 290)",
  JavaScript: "oklch(0.85 0.18 95)",
  TypeScript: "oklch(0.65 0.16 240)",
  HTML: "oklch(0.68 0.18 30)",
  CSS: "oklch(0.65 0.18 250)",
  Vue: "oklch(0.72 0.16 145)",
  Python: "oklch(0.70 0.13 230)",
  PHP: "oklch(0.62 0.10 280)",
  Shell: "oklch(0.78 0.10 145)",
  default: "oklch(0.66 0.02 250)",
};

function Projects({ copy }) {
  const [state, setState] = useState({ status: "loading", repos: [] });

  useEffect(() => {
    let cancelled = false;
    fetch(`https://api.github.com/users/${PROFILE.githubUser}/repos?per_page=100&sort=updated`)
      .then(r => {
        if (!r.ok) throw new Error("github " + r.status);
        return r.json();
      })
      .then(data => {
        if (cancelled) return;
        const filtered = data
          .filter(r => !r.fork)
          .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
          .slice(0, 9);
        setState({ status: filtered.length ? "ok" : "empty", repos: filtered });
      })
      .catch(() => { if (!cancelled) setState({ status: "error", repos: [] }); });
    return () => { cancelled = true; };
  }, []);

  const fmtDate = (iso) => {
    if (!iso) return "";
    const d = new Date(iso);
    return d.toISOString().slice(0, 10);
  };

  return (
    <section id="projects" className="section">
      <SectionTag num="04" label={copy.nav.projects} />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 12, marginBottom: 16 }}>
        <div>
          <h2 className="section-title">{copy.sections.projects.title}</h2>
          <p className="section-sub" style={{ marginBottom: 0 }}>{copy.sections.projects.sub}</p>
        </div>
        <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="cv-btn" style={{ background: "transparent", color: "var(--lime)", border: "1px solid var(--lime)" }}>
          @{PROFILE.githubUser} ↗
        </a>
      </div>

      <FeaturedProject copy={copy} />

      {state.status === "loading" && <div className="projects-state">$ <span style={{color:"var(--lime)"}}>{copy.projectsLoading}</span><span className="cursor" style={{verticalAlign:"-1px"}}/></div>}
      {state.status === "error" && <div className="projects-state">$ <span className="err">{copy.projectsError}</span></div>}
      {state.status === "empty" && <div className="projects-state">$ <span>{copy.projectsEmpty}</span></div>}

      {state.status === "ok" && (
        <div className="projects-grid">
          {state.repos.map(repo => {
            const langColor = LANG_COLORS[repo.language] || LANG_COLORS.default;
            return (
              <a key={repo.id} href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo-card">
                <h3 className="repo-name">{repo.name}</h3>
                <p className="repo-desc">{repo.description || (repo.language ? `${repo.language} project.` : "—")}</p>
                <div className="repo-meta">
                  {repo.language && (
                    <span className="lang">
                      <span className="swatch" style={{ background: langColor }} />
                      {repo.language}
                    </span>
                  )}
                  <span className="stat">★ {repo.stargazers_count}</span>
                  <span className="stat" style={{ marginLeft: "auto" }}>{fmtDate(repo.pushed_at)}</span>
                </div>
              </a>
            );
          })}
        </div>
      )}
    </section>
  );
}

// ============ Skills + AI ============
function Skills({ copy }) {
  return (
    <section id="skills" className="section">
      <SectionTag num="05" label={copy.nav.skills} />
      <h2 className="section-title">{copy.sections.skills.title}</h2>
      <p className="section-sub">{copy.sections.skills.sub}</p>

      <div className="skills-grid" style={{ marginBottom: 32 }}>
        {copy.skillGroups.map((g, i) => (
          <div key={i} className="skill-group">
            <h4>{g.tag}</h4>
            <ul className="skill-list">
              {g.items.map((s, j) => <li key={j} className={g.primary ? "lang-tag" : ""}>{s}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 8 }}>
        <h4 style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--lime)", margin: "0 0 6px", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600 }}>
          {copy.aiTitle}
        </h4>
        <p style={{ color: "var(--muted)", fontSize: 14, margin: "0 0 16px", maxWidth: "60ch" }}>{copy.aiSub}</p>
        <div className="ai-row">
          {copy.aiTools.map((t, i) => (
            <span key={i} className="ai-chip">
              <span className="glyph" style={{ background: t.color }}>{t.letter}</span>
              {t.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ Contact ============
function Contact({ copy }) {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [state, setState] = useState({ sending: false, ok: "", err: "" });

  const onSubmit = async (e) => {
    e.preventDefault();
    setState({ sending: true, ok: "", err: "" });
    try {
      // Netlify Forms: POST as URL-encoded with form-name=contact
      const body = new URLSearchParams({ "form-name": "contact", ...form }).toString();
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      if (!res.ok && res.status !== 200) throw new Error("network");
      setState({ sending: false, ok: copy.form.ok, err: "" });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      // Local fallback so it doesn't lose the message during dev
      try {
        const drafts = JSON.parse(localStorage.getItem("luis_messages") || "[]");
        drafts.push({ ...form, ts: new Date().toISOString() });
        localStorage.setItem("luis_messages", JSON.stringify(drafts));
      } catch {}
      setState({ sending: false, ok: "", err: copy.form.err });
    }
  };

  return (
    <section id="contact" className="section">
      <SectionTag num="06" label={copy.nav.contact} />
      <h2 className="section-title">{copy.sections.contact.title}</h2>
      <p className="section-sub">{copy.sections.contact.sub}</p>

      <div className="contact-grid">
        <div className="contact-info">
          <p>{copy.contactIntro}</p>
          <ul className="contact-links">
            <li>
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">
                <span>
                  <span className="label">LinkedIn</span>
                  <span className="val">/in/luismtm</span>
                </span>
                <span className="arrow">→</span>
              </a>
            </li>
            <li>
              <a href={PROFILE.github} target="_blank" rel="noopener noreferrer">
                <span>
                  <span className="label">GitHub</span>
                  <span className="val">@BRUSKYMIL</span>
                </span>
                <span className="arrow">→</span>
              </a>
            </li>
            <li>
              <a href={PROFILE.cv} download>
                <span>
                  <span className="label">Curriculum Vitae</span>
                  <span className="val">CV-Luis-Moreno-Torres.pdf</span>
                </span>
                <span className="arrow">↓</span>
              </a>
            </li>
          </ul>
        </div>

        <form className="contact-form" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={onSubmit}>
          <input type="hidden" name="form-name" value="contact" />
          <p style={{ display: "none" }}><label>Don't fill this: <input name="bot-field" /></label></p>
          <label>
            {copy.form.name}
            <input type="text" required maxLength={80} value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })} />
          </label>
          <label>
            {copy.form.email}
            <input type="email" required maxLength={120} value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })} />
          </label>
          <label>
            {copy.form.subject}
            <input type="text" required maxLength={120} value={form.subject}
              onChange={e => setForm({ ...form, subject: e.target.value })} />
          </label>
          <label>
            {copy.form.message}
            <textarea required maxLength={2000} rows={5} value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })} />
          </label>
          <button type="submit" disabled={state.sending}>
            {state.sending ? copy.form.sending : copy.form.send}
          </button>
          {state.ok && <div className="form-msg ok">{state.ok}</div>}
          {state.err && <div className="form-msg err">{state.err}</div>}
        </form>
      </div>
    </section>
  );
}

// ============ Footer ============
function Footer({ copy }) {
  return (
    <footer>
      <div className="footer-inner">
        <span className="sig">© 2026 Luis Moreno-Torres Marqués · <span>{copy.footer}</span></span>
        <span>v1.1.0 · build {new Date().toISOString().slice(0, 10)}</span>
      </div>
    </footer>
  );
}

// ============ App ============
function App() {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem("luis_lang") || "en"; } catch { return "en"; }
  });
  useEffect(() => {
    try { localStorage.setItem("luis_lang", lang); } catch {}
    document.documentElement.lang = lang;
  }, [lang]);

  const copy = COPY[lang];

  return (
    <>
      <TopBar lang={lang} setLang={setLang} copy={copy} />
      <main>
        <Hero lang={lang} copy={copy} />
        <About copy={copy} />
        <Now copy={copy} />
        <Experience copy={copy} />
        <Projects copy={copy} />
        <Skills copy={copy} />
        <Contact copy={copy} />
      </main>
      <Footer copy={copy} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

import { useState, useEffect } from "react";
import { GitBranch, ExternalLink, Terminal, Database, Server, ArrowUpRight, Menu, X } from "lucide-react";
import "./index.css";
import "./App.css";

const NAV_LINKS = ["Projects", "Contact"];

const PROJECTS = [
  {
  title: "Thapar On Wheels",
  tag: "Campus Transport",
  tagColor: "green",
  description:
    "A smart campus ride-sharing and transport coordination platform for Thapar students featuring ride listings, live seat availability, trip scheduling, route coordination, and secure student-based access for easier intercity travel.",
  stack: [
    "Spring Boot",
    "React",
    "MongoDB",
    "JWT",
    "Tailwind CSS",
  ],
  github: "https://github.com/hnpsbindra-singh/ThaparOnWheelz",
  metric: "Campus",
  metricLabel: "ride network",
},
  {
    title: "FestTrack",
    tag: "Campus Events",
    tagColor: "warm",
    description:
      "An event management and tracking platform for colleges that handles registrations, schedules, announcements, participation tracking, and real-time event coordination through a centralized dashboard.",
    stack: [
      "Spring Boot",
      "React",
      "MongoDB",
      "Tailwind",
      "REST API",
    ],
    github: "https://github.com/hnpsbindra-singh/FestTrek",
  
    metric: "Live",
    metricLabel: "event tracking",
  },
  {
    title: "CommUnity",
    tag: "Social Platform",
    tagColor: "default",
    description:
      "A full-stack community discussion platform featuring authentication, post creation, threaded comments, likes, JWT-based sessions, and responsive UI with instant interaction updates.",
    stack: [
      "Spring Boot",
      "React",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],
    github: "https://github.com/hnpsbindra-singh/CommUnity",
    
    metric: "JWT",
    metricLabel: "secure auth",
  },
 {
    title: "Auth Service",
    tag: "Security",
    tagColor: "warm",
    description:
      "A reusable authentication microservice implementing JWT authentication, refresh token flow, role-based access control, secure password hashing, and API-level authorization.",
    stack: [
      "Spring Boot",
      "Spring Security",
      "JWT",
      "MongoDB"
      
    ],
    github: "https://github.com/hnpsbindra-singh/AuthApp",
    
    metric: "RBAC",
    metricLabel: "authorization",
  },
  {
  title: "MYFitness",
  tag: "Fitness Platform",
  tagColor: "warm",
  description:
    "A fitness tracking and workout management platform that helps users monitor progress, manage workout routines, track calories and macros, and stay consistent through personalized fitness insights and daily activity logging.",
  stack: [
    "Spring Boot",
    "React",
    "MySQL",
    "JWT"
    
  ],
  github: "https://github.com/hnpsbindra-singh/MyFitnessArena",
  
  metric: "Daily",
  metricLabel: "progress tracking",
},
  
];

const TAG_COLORS = {
  green: { bg: "#e8f5ee", color: "#2d6a4f", border: "#b7ddc8" },
  warm: { bg: "#fdf0e3", color: "#c47c3e", border: "#f0d0a8" },
  default: { bg: "#eeecea", color: "#4a4845", border: "#d0cdc8" },
};

const STACK_ICONS = { default: Terminal, database: Database };

function Tag({ label, color = "default" }) {
  const s = TAG_COLORS[color] || TAG_COLORS.default;
  return (
    <span
      style={{
        display: "inline-block",
        padding: "2px 10px",
        borderRadius: "2px",
        fontSize: "11px",
        fontFamily: "var(--font-mono)",
        fontWeight: 500,
        letterSpacing: "0.04em",
        background: s.bg,
        color: s.color,
        border: `1px solid ${s.border}`,
      }}
    >
      {label}
    </span>
  );
}

function StackPill({ name }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "3px 8px",
        borderRadius: "2px",
        fontSize: "11px",
        fontFamily: "var(--font-mono)",
        background: "var(--surface-2)",
        color: "var(--text-muted)",
        border: "1px solid var(--border)",
      }}
    >
      {name}
    </span>
  );
}

function ProjectCard({ project, index }) {
  return (
    <div className="project-card" style={{ animationDelay: `${index * 0.07}s` }}>
      <div className="project-card-inner">
        <div className="project-header">
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
            <Tag label={project.tag} color={project.tagColor} />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--text-muted)",
                background: "var(--surface-2)",
                padding: "2px 8px",
                borderRadius: "2px",
                border: "1px solid var(--border)",
              }}
            >
              {project.metric}{" "}
              <span style={{ opacity: 0.6 }}>{project.metricLabel}</span>
            </span>
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            {project.github && (
              <a href={project.github} className="icon-btn" aria-label="GitHub">
                <GitBranch size={15} />
              </a>
            )}
            {project.live && (
              <a href={project.live} className="icon-btn" aria-label="Live">
                <ExternalLink size={15} />
              </a>
            )}
          </div>
        </div>

        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "16px" }}>
          {project.stack.map((s) => (
            <StackPill key={s} name={s} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="app">
      {/* NAV */}
      <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
        <div className="nav-inner">
          <a href="#" className="nav-logo">
            <Terminal size={16} />
            <span>Harnimarpreet Singh</span>
          </a>
          <div className="nav-links">
            {NAV_LINKS.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="nav-link">
                {l}
              </a>
            ))}
            <a href="#contact" className="nav-cta">
              Hire Me
            </a>
          </div>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <div className="mobile-menu">
            {NAV_LINKS.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {l}
              </a>
            ))}
            <a href="#contact" className="mobile-link mobile-cta" onClick={() => setMenuOpen(false)}>
              Hire Me
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-badge">
            <span className="status-dot" />
            Available for opportunities
          </div>
          <h1 className="hero-title">
            Backend Engineer
            <br />
            <em>building reliable systems</em>
          </h1>
          <p className="hero-sub">
            I design and build distributed systems, APIs, and data pipelines that scale.
            Obsessed with correctness, observability, and clean interfaces between services.
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              View Projects <ArrowUpRight size={16} />
            </a>
            <a href="#contact" className="btn-secondary">
              Get in Touch
            </a>
          </div>
        </div>
        <div className="hero-graphic">
          <div className="terminal-window">
            <div className="terminal-bar">
              <span />
              <span />
              <span />
            </div>
            <pre className="terminal-code">{`$ whoami
backend-engineer

$ cat Java · PostgreSQL · MySQL · Spring Boot
React · Docker · MongoDb

$ uptime
Fresher, still learning

`}</pre>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <div className="section-inner">
          <div className="section-header">
            <div>
              <p className="section-label">
                <Database size={13} /> Selected Work
              </p>
              <h2 className="section-title">Projects</h2>
            </div>
            <p className="section-desc">
              A selection of backend systems, tools, and infrastructure projects built in production and open source.
            </p>
          </div>
          <div className="projects-grid">
            {PROJECTS.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>
            {/* DEVELOPER PRESENCE */}
      <section id="coding" className="section">
        <div className="section-inner">
          <div className="section-header">
            <div>
              <p className="section-label">
                <Terminal size={13} /> Developer Presence
              </p>
              <h2 className="section-title">Problem Solving & Profiles</h2>
            </div>

            <p className="section-desc">
              Consistently improving problem-solving, backend fundamentals,
              and data structures through hands-on coding practice and technical platforms.
            </p>
          </div>

          <div className="projects-grid">

            {/* LeetCode */}
            <div className="project-card">
              <div className="project-card-inner">
                <div className="project-header">
                  <Tag label="Problem Solving" color="warm" />

                  <a
                    href="https://leetcode.com/u/3E9LrlAgkf/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-btn"
                  >
                    <ExternalLink size={15} />
                  </a>
                </div>

                <h3 className="project-title">LeetCode</h3>

                <p className="project-desc">
                  Practicing DSA, backend-oriented interview questions,
                  and writing optimized Java solutions for real-world coding patterns.
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "16px" }}>
                  <StackPill name="Java" />
                  <StackPill name="DSA" />
                  <StackPill name="Optimization" />
                </div>
              </div>
            </div>

            {/* Code360 */}
            <div className="project-card">
              <div className="project-card-inner">
                <div className="project-header">
                  <Tag label="Learning" color="green" />

                  <a
                    href="https://www.naukri.com/code360/profile/HnpsBindra"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-btn"
                  >
                    <ExternalLink size={15} />
                  </a>
                </div>

                <h3 className="project-title">Code360</h3>

                <p className="project-desc">
                  Strengthening core computer science concepts through structured
                  practice in algorithms, trees, graphs, and interview preparation.
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "16px" }}>
                  <StackPill name="Algorithms" />
                  <StackPill name="Trees" />
                  <StackPill name="Graphs" />
                </div>
              </div>
            </div>

            {/* GFG */}
            <div className="project-card">
              <div className="project-card-inner">
                <div className="project-header">
                  <Tag label="Technical Growth" color="default" />

                  <a
                    href="https://www.geeksforgeeks.org/profile/nimar2q7c?tab=activity"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-btn"
                  >
                    <ExternalLink size={15} />
                  </a>
                </div>

                <h3 className="project-title">GeeksforGeeks</h3>

                <p className="project-desc">
                  Exploring system design concepts, Java backend fundamentals,
                  and practicing data structure problems for stronger engineering foundations.
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "16px" }}>
                  <StackPill name="Java" />
                  <StackPill name="System Design" />
                  <StackPill name="Backend" />
                </div>
              </div>
            </div>

            {/* Codolio */}
            <div className="project-card">
              <div className="project-card-inner">
                <div className="project-header">
                  <Tag label="Developer Profile" color="green" />

                  <a
                    href="https://codolio.com/profile/ewgblvq"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-btn"
                  >
                    <ExternalLink size={15} />
                  </a>
                </div>

                <h3 className="project-title">Codolio</h3>

                <p className="project-desc">
                  Unified coding and development profile showcasing projects,
                  technical activity, and continuous learning across platforms.
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "16px" }}>
                  <StackPill name="Projects" />
                  <StackPill name="Coding Profiles" />
                  <StackPill name="Growth" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">
        <div className="section-inner contact-inner">
          <p className="section-label">
            <Server size={13} /> Let's Connect
          </p>
          <h2 className="contact-title">Open to new roles &amp; collaborations</h2>
          <p className="contact-sub">
            Whether you're building something ambitious or looking for a backend engineer who cares about craft — I'd love to hear from you.
          </p>
          <div className="contact-links">
            <a href="mailto:hnps.bindra@gmail.com" className="contact-link">
              hnps.bindra@gmail.com<ArrowUpRight size={14} />
            </a>
            <a href="https://github.com/hnpsbindra-singh" className="contact-link" target="_blank" rel="noreferrer">
              <GitBranch size={14} /> github.com/hnps-Bindra
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--text-muted)" }}>
            Made By Harnimarpreet Singh
          </span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--border)" }}>
            Built with React + Vite
          </span>
        </div>
      </footer>
    </div>
  );
}

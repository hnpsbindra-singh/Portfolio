import { useState, useEffect } from "react";
import {
  GitBranch,
  ExternalLink,
  Terminal,
  Database,
  Server,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

import "./index.css";
import "./App.css";

const NAV_LINKS = ["Projects", "Coding", "Contact"];

const PROJECTS = [
  {
    title: "Thapar On Wheels",
    tag: "Campus Transport",
    tagColor: "green",

    description:
      "Campus ride-sharing platform for Thapar students featuring trip scheduling, route coordination, live seat availability, and secure student authentication.",

    stack: [
      "Spring Boot",
      "React",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],

    github: "https://github.com/hnpsbindra-singh/ThaparOnWheelz",

    metric: "Real-time",
    metricLabel: "ride coordination",
  },

  {
    title: "FestTrack",
    tag: "Campus Events",
    tagColor: "warm",

    description:
      "College event management platform handling registrations, schedules, announcements, participation tracking, and centralized event coordination.",

    stack: [
      "Spring Boot",
      "React",
      "MongoDB",
      "Tailwind CSS",
      "REST APIs",
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
      "Full-stack community discussion platform with authentication, threaded comments, likes, JWT sessions, and responsive real-time interactions.",

    stack: [
      "Spring Boot",
      "React",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],

    github: "https://github.com/hnpsbindra-singh/CommUnity",

    metric: "JWT",
    metricLabel: "authentication",
  },

  {
    title: "Auth Service",
    tag: "Security",
    tagColor: "warm",

    description:
      "Reusable authentication microservice implementing JWT authentication, refresh tokens, RBAC authorization, secure password hashing, and API-level security.",

    stack: [
      "Spring Boot",
      "Spring Security",
      "JWT",
      "MongoDB",
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
      "Fitness tracking platform for workout management, calorie tracking, macro monitoring, and daily progress analytics with secure user authentication.",

    stack: [
      "Spring Boot",
      "React",
      "MySQL",
      "JWT",
    ],

    github: "https://github.com/hnpsbindra-singh/MyFitnessArena",

    metric: "Daily",
    metricLabel: "progress analytics",
  },
  {
    title: "AI based Flood Resuce System",
    tag: "Rescue Platform",
    tagColor: "warm",

    description:
      "In Progress and Not completed yet",

    stack: [
      "Spring Boot",
      "React",
      "MySQL",
      "JWT",
    ],

    github: "https://github.com/hnpsbindra-singh/FloodRescueSystem",
    metric: "Capstone",
    metricLabel: "project",

   
  },
];

const TAG_COLORS = {
  green: {
    bg: "#e8f5ee",
    color: "#2d6a4f",
    border: "#b7ddc8",
  },

  warm: {
    bg: "#fdf0e3",
    color: "#c47c3e",
    border: "#f0d0a8",
  },

  default: {
    bg: "#eeecea",
    color: "#4a4845",
    border: "#d0cdc8",
  },
};

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
    <div
      className="project-card"
      style={{ animationDelay: `${index * 0.07}s` }}
    >
      <div className="project-card-inner">

        <div className="project-header">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
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
              <span style={{ opacity: 0.6 }}>
                {project.metricLabel}
              </span>
            </span>
          </div>

          <div style={{ display: "flex", gap: "8px" }}>
            {project.github && (
              <a
                href={project.github}
                className="icon-btn"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <GitBranch size={15} />
              </a>
            )}
          </div>
        </div>

        <h3 className="project-title">{project.title}</h3>

        <p className="project-desc">
          {project.description}
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "6px",
            marginTop: "16px",
          }}
        >
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
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
        <div className="nav-inner">

          <a href="#" className="nav-logo">
            <Terminal size={16} />
            <span>Harnimarpreet Singh</span>
          </a>

          <div className="nav-links">
            {NAV_LINKS.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="nav-link"
              >
                {l}
              </a>
            ))}

            <a href="#contact" className="nav-cta">
              Hire Me
            </a>
          </div>

          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
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

            <a
              href="#contact"
              className="mobile-link mobile-cta"
              onClick={() => setMenuOpen(false)}
            >
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
            Open to backend engineering opportunities
          </div>

          <h1 className="hero-title">
            Building scalable backend systems
            <br />
            <em>with Java, Spring Boot & Modern APIs</em>
          </h1>

          <p className="hero-sub">
            Backend-focused developer passionate about building secure,
            scalable, and production-ready applications using Java,
            Spring Boot, MongoDB, React, and modern backend technologies.
            I enjoy designing APIs, authentication systems, real-time features,
            and solving engineering problems through clean architecture.
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

            <pre className="terminal-code">{`$ role
Backend Engineer

$ current_focus
Scalable backend systems

$ stack
Java · Spring Boot · MongoDB
React · REST APIs · JWT

$ status
Building & shipping projects daily
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

              <h2 className="section-title">
                Projects
              </h2>
            </div>

            <p className="section-desc">
              A collection of backend systems, scalable APIs,
              and full-stack applications focused on real-world engineering problems.
            </p>
          </div>

          <div className="projects-grid">
            {PROJECTS.map((p, i) => (
              <ProjectCard
                key={p.title}
                project={p}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL HIGHLIGHTS */}
      <section id="highlights" className="section">
        <div className="section-inner">

          <div className="section-header">
            <div>
              <p className="section-label">
                <Server size={13} /> Technical Highlights
              </p>

              <h2 className="section-title">
                Engineering Focus
              </h2>
            </div>

            <p className="section-desc">
              Focused on backend engineering, scalable architectures,
              secure authentication systems, and production-ready APIs.
            </p>
          </div>

          <div className="projects-grid">

            <div className="project-card">
              <div className="project-card-inner">
                <h3 className="project-title">
                  Authentication & Security
                </h3>

                <p className="project-desc">
                  Built JWT authentication systems, refresh token flows,
                  RBAC authorization, and secure API protection using
                  Spring Security.
                </p>
              </div>
            </div>

            <div className="project-card">
              <div className="project-card-inner">
                <h3 className="project-title">
                  REST API Development
                </h3>

                <p className="project-desc">
                  Designed scalable REST APIs using Spring Boot with clean
                  architecture, layered design, and efficient backend workflows.
                </p>
              </div>
            </div>

            <div className="project-card">
              <div className="project-card-inner">
                <h3 className="project-title">
                  Database Engineering
                </h3>

                <p className="project-desc">
                  Worked with MongoDB and MySQL including geo-indexing,
                  optimized queries, schema design, and scalable data handling.
                </p>
              </div>
            </div>

            <div className="project-card">
              <div className="project-card-inner">
                <h3 className="project-title">
                  Real-Time Systems
                </h3>

                <p className="project-desc">
                  Built systems with live interaction updates, event tracking,
                  and dynamic backend coordination for responsive applications.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CODING PROFILES */}
      <section id="coding" className="section">
        <div className="section-inner">

          <div className="section-header">
            <div>
              <p className="section-label">
                <Terminal size={13} /> Developer Presence
              </p>

              <h2 className="section-title">
                Problem Solving & Profiles
              </h2>
            </div>

            <p className="section-desc">
              Improving backend fundamentals, problem-solving,
              and data structures through hands-on coding practice.
            </p>
          </div>

          <div className="projects-grid">

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

                <h3 className="project-title">
                  LeetCode
                </h3>

                <p className="project-desc">
                  Practicing DSA, backend-oriented interview questions,
                  and optimized Java problem solving.
                </p>
              </div>
            </div>

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

                <h3 className="project-title">
                  Code360
                </h3>

                <p className="project-desc">
                  Strengthening algorithms, trees, graphs,
                  and computer science fundamentals.
                </p>
              </div>
            </div>

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

                <h3 className="project-title">
                  GeeksforGeeks
                </h3>

                <p className="project-desc">
                  Exploring backend concepts, Java fundamentals,
                  and system design practices.
                </p>
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

          <h2 className="contact-title">
            Let’s build reliable backend systems together.
          </h2>

          <p className="contact-sub">
            Interested in backend engineering, scalable applications,
            APIs, or collaborative projects? Feel free to reach out.
          </p>

          <div className="contact-links">

            <a
              href="mailto:hnps.bindra@gmail.com"
              className="contact-link"
            >
              hnps.bindra@gmail.com
              <ArrowUpRight size={14} />
            </a>

            <a
                href="/Resume_Harnimar(102316032).pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                Resume
              </a>

            <a
              href="https://github.com/hnpsbindra-singh"
              className="contact-link"
              target="_blank"
              rel="noreferrer"
            >
              <GitBranch size={14} />
              github.com/hnpsbindra-singh
            </a>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">

          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "var(--text-muted)",
            }}
          >
            © 2026 Harnimarpreet Singh
          </span>

          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "var(--border)",
            }}
          >
            Built with React & Vite
          </span>

        </div>
      </footer>
    </div>
  );
}

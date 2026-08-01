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
  FileText,
  Award,
  GraduationCap,
  Code2,
  Check,
  Copy,
  Layers,
  BookOpen,
} from "lucide-react";

import "./index.css";
import "./App.css";

function LinkedinIcon({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const NAV_LINKS = [
  "Projects",
  "Skills",
  "Education",
  "Certifications",
  "Coding",
  "Contact",
];

const PROJECTS = [
  {
    title: "Cloud Share",
    tag: "Cloud Storage",
    tagColor: "cool",
    description:
      "Full-stack Microservices based cloud storage platform for secure file upload, folder organization, search, and sharing with Redis caching, JWT-based authentication, and RESTful APIs documented via Swagger.",
    stack: [
      "Spring Boot",
      "Spring Security",
      "Microservices",
      "PostgreSQL",
      "Redis",
      "Cloudinary",
      "React.js",
      "JWT",
      "Swagger",
    ],
    github: "https://github.com/hnpsbindra-singh/CloudShare",
    deployed: "https://cloudshare-cdn.vercel.app/",
    swagger: "https://cloudshare-le1b.onrender.com/swagger-ui/index.html",
    metric: "Cloud",
    metricLabel: "file sharing",
    category: "Backend & Cloud",
  },
  {
    title: "BookMyEvent",
    tag: "Event Booking",
    tagColor: "warm",
    description:
      "Full-stack event management and ticket booking platform featuring organizer event management, user ticket booking workflows, role-based access control, payment verification, and Redis caching.",
    stack: [
      "Spring Boot",
      "Spring Security",
      "PostgreSQL",
      "Redis",
      "Spring Data JPA",
      "React.js",
      "JWT",
    ],
    github: "https://github.com/hnpsbindra-singh/FestTrackerSystem",
    deployed: "https://fest-tracker-system.vercel.app/auth",
    swagger: "https://festtrackersystem.onrender.com/swagger-ui/index.html#/",
    metric: "Ticket",
    metricLabel: "booking lifecycle",
    category: "Full Stack",
  },
  {
    title: "Cab On Campus",
    tag: "Campus Transit",
    tagColor: "green",
    description:
      "Full-stack campus cab booking platform for students and drivers within Thapar University. Features DTO-driven API design, role-based authorization, centralized exception handling, and optimized query performance.",
    stack: [
      "Spring Boot",
      "Spring Security",
      "PostgreSQL",
      "Redis",
      "Spring Data JPA",
      "React.js",
      "JWT",
    ],
    github: "https://github.com/hnpsbindra-singh/CabOnCampus_Final",
    deployed: "https://cab-on-campus-final.vercel.app/login",
    swagger: "https://caboncampus-final.onrender.com/swagger-ui/index.html#/",
    metric: "~120 MS",
    metricLabel: "API response latency",
    category: "Real-Time",
  },
  {
    title: "Skills Swap",
    tag: "Skill Barter",
    tagColor: "cool",
    description:
      "Peer-to-peer skill exchange platform enabling users to trade knowledge through a barter marketplace with real-time WebSocket messaging, admin controls, profile verification, and Swagger API docs.",
    stack: [
      "Spring Boot",
      "Spring Security",
      "WebSocket API",
      "MongoDB",
      "React.js",
      "JWT",
      "Swagger",
    ],
    github: "https://github.com/hnpsbindra-singh/SkillsSwap",
    deployed: "https://skills-swap-wheat.vercel.app/",
    swagger: "https://skillsbarter-backend.onrender.com/swagger-ui/index.html#/",
    metric: "Barter",
    metricLabel: "skill exchange",
    category: "Real-Time",
  },
  {
    title: "Family Tracker",
    tag: "Real-Time Safety",
    tagColor: "cool",
    description:
      "Family location tracking platform enabling real-time location sharing, secure family group management, live WebSocket updates, JavaMailSender, and emergency communication between family members.",
    stack: [
      "Spring Boot",
      "MongoDB",
      "Spring Security",
      "JWT",
      "WebSockets",
      "JavaMailSender",
    ],
    github: "https://github.com/hnpsbindra-singh/FamilyTrace",
    metric: "Live",
    metricLabel: "location tracking",
    category: "Real-Time",
  },
  {
    title: "Auth Service Microservice",
    tag: "Security",
    tagColor: "warm",
    description:
      "Reusable authentication microservice implementing JWT authentication, refresh tokens, RBAC authorization, secure password hashing, and API-level security.",
    stack: ["Spring Boot", "Spring Security", "JWT", "MongoDB"],
    github: "https://github.com/hnpsbindra-singh/AuthApp",
    metric: "RBAC",
    metricLabel: "authorization",
    category: "Backend & Cloud",
  },
  {
    title: "AI Flood Rescue System",
    tag: "Rescue Platform",
    tagColor: "warm",
    description:
      "AI-powered disaster management and emergency response coordination platform integrating real-time telemetry and resource allocation [Capstone • Under Active Development].",
    stack: ["Spring Boot", "React", "MySQL", "JWT"],
    github: "https://github.com/hnpsbindra-singh/FloodRescueSystem",
    metric: "Capstone",
    metricLabel: "under active dev",
    category: "Backend & Cloud",
  },
];

const SKILL_CATEGORIES = [
  {
    category: "Programming Languages",
    icon: Code2,
    skills: ["Java (JDK 17/21)", "SQL", "C++", "JavaScript (ES6+)"],
  },
  {
    category: "Backend & Frameworks",
    icon: Server,
    skills: [
      "Spring Boot",
      "Spring Framework",
      "Spring Data JPA",
      "Spring Security",
      "JWT Auth",
      "Hibernate",
      "WebSocket API",
      "RESTful APIs",
    ],
  },
  {
    category: "Databases & Storage",
    icon: Database,
    skills: [
      "PostgreSQL",
      "Redis Caching",
      "MySQL",
      "MongoDB",
      "Cloudinary Storage",
    ],
  },
  {
    category: "Frontend & UI",
    icon: Layers,
    skills: [
      "React.js",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    category: "Tools & Ecosystem",
    icon: Terminal,
    skills: [
      "VS Code",
      "IntelliJ IDEA",
      "Eclipse",
      "Git & GitHub",
      "Maven",
      "Postman",
      "Swagger UI",
    ],
  },
];

const EDUCATION = [
  {
    institution: "Thapar Institute of Engineering & Technology, Patiala",
    degree: "Bachelor of Engineering – Computer Science & Engineering",
    duration: "August 2023 – May 2027",
    cgpa: "CGPA: 7.53",
    courses: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Computer Architecture",
      "Computer Networks",
      "Object Oriented Programming",
      "Software Engineering",
      "Machine Learning",
      "Database Management Systems",
      "Data Engineering",
      "Computer Programming",
    ],
  },
  {
    institution: "Central Board of Secondary Education (CBSE)",
    degree: "Senior Secondary (12th Grade)",
    duration: "April 2021 – March 2023",
    cgpa: "Percentage: 88.6%",
    courses: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
  },
  {
    institution: "Central Board of Secondary Education (CBSE)",
    degree: "Secondary (10th Grade)",
    duration: "April 2020 – March 2021",
    cgpa: "Percentage: 91.4%",
    courses: ["Mathematics", "Science", "English", "Social Sciences"],
  },
];

const CERTIFICATIONS = [
  {
    title: "Spring Boot & Spring Framework",
    issuer: "Udemy",
    link: "https://www.udemy.com/certificate/UC-8c7c5461-5ef4-4e60-b5e6-42bcdac5bcbc/",
    tag: "Spring Framework",
  },
  {
    title: "JDBC Servlets and JSP - Java Web Development Fundamentals",
    issuer: "Udemy",
    link: "https://www.udemy.com/certificate/UC-786bbcbf-9f72-4422-aab6-fc96dd400598/",
    tag: "Java Web Dev",
  },
  {
    title: "Java (Basics)",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/certificates/iframe/ff80ceb79780",
    tag: "Java",
  },
  {
    title: "SQL (Basics)",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/certificates/iframe/87f9d277f7e4",
    tag: "SQL",
  },
  {
    title: "Top 3% Ranking at Thapar University (14,500+ Coders)",
    issuer: "GeeksforGeeks",
    link: "https://www.geeksforgeeks.org/profile/nimar2q7c?tab=activity",
    tag: "Top 3% Coders",
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
  cool: {
    bg: "rgba(0, 242, 254, 0.1)",
    color: "#00f2fe",
    border: "rgba(0, 242, 254, 0.3)",
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
              <span style={{ opacity: 0.6 }}>{project.metricLabel}</span>
            </span>
          </div>

          <div style={{ display: "flex", gap: "8px" }}>
            {project.swagger && (
              <a
                href={project.swagger}
                className="icon-btn icon-btn-swagger"
                target="_blank"
                rel="noreferrer"
                aria-label="Swagger Documentation"
                title="Swagger API Specs"
              >
                <FileText size={15} />
              </a>
            )}
            {project.deployed && (
              <a
                href={project.deployed}
                className="icon-btn"
                target="_blank"
                rel="noreferrer"
                aria-label="Live Demo"
                title="Live Application"
              >
                <ExternalLink size={15} />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                className="icon-btn"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Repository"
                title="GitHub Source Code"
              >
                <GitBranch size={15} />
              </a>
            )}
          </div>
        </div>

        <h3 className="project-title">{project.title}</h3>

        <p className="project-desc">{project.description}</p>

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
  const [activeCategory, setActiveCategory] = useState("All");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hnps.bindra@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

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
              <a key={l} href={`#${l.toLowerCase()}`} className="nav-link">
                {l}
              </a>
            ))}

            <a
              href="https://www.linkedin.com/in/hnpsb/"
              target="_blank"
              rel="noreferrer"
              className="nav-link"
              title="LinkedIn Profile"
              style={{ display: "flex", alignItems: "center", gap: "4px" }}
            >
              <LinkedinIcon size={16} />
              LinkedIn
            </a>

            <a href="#contact" className="nav-cta">
              Hire Me
            </a>
          </div>

          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <div className="mobile-menu active">
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
              href="https://www.linkedin.com/in/hnpsb/"
              target="_blank"
              rel="noreferrer"
              className="mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              LinkedIn Profile
            </a>
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
            Backend-focused engineer passionate about building secure, scalable,
            and production-ready applications using Java, Spring Boot, Spring Security,
            PostgreSQL, Redis, MongoDB, and React. I specialize in designing RESTful APIs,
            microservices, authentication systems, and real-time features.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              View Projects <ArrowUpRight size={16} />
            </a>

            <a
              href="https://www.linkedin.com/in/hnpsb/"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
            >
              <LinkedinIcon size={16} /> LinkedIn
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
Java Backend Developer

$ university
Thapar Institute of Engineering & Tech (B.E. CSE)

$ core_stack
Java · Spring Boot · PostgreSQL · Redis · MongoDB

$ highlights
Top 3% GFG Coders · 40+ Repos · Swagger APIs

$ status
Available for Backend Roles & Internships
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
              A collection of backend systems, cloud storage services, real-time applications,
              and full-stack platforms focused on high performance and clean architecture.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="filter-container">
            {["All", "Backend & Cloud", "Real-Time", "Full Stack"].map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat} {cat === "All" ? `(${PROJECTS.length})` : ""}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS & TECH MATRIX */}
      <section id="skills" className="section">
        <div className="section-inner">
          <div className="section-header">
            <div>
              <p className="section-label">
                <Server size={13} /> Technical Stack
              </p>

              <h2 className="section-title">Skills & Architecture</h2>
            </div>

            <p className="section-desc">
              Comprehensive breakdown of backend frameworks, database systems,
              cloud tools, and programming languages from my resume.
            </p>
          </div>

          <div className="tech-matrix-grid">
            {SKILL_CATEGORIES.map((sc) => {
              const IconComponent = sc.icon;
              return (
                <div key={sc.category} className="tech-card">
                  <div className="tech-card-header">
                    <div className="tech-icon-box">
                      <IconComponent size={20} />
                    </div>
                    <h3 className="tech-card-title">{sc.category}</h3>
                  </div>

                  <div className="tech-pill-list">
                    {sc.skills.map((skill) => (
                      <span key={skill} className="tech-matrix-pill">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="section">
        <div className="section-inner">
          <div className="section-header">
            <div>
              <p className="section-label">
                <GraduationCap size={13} /> Academic Background
              </p>

              <h2 className="section-title">Education</h2>
            </div>

            <p className="section-desc">
              Academic foundation in Computer Science & Engineering, core CS fundamentals,
              and software engineering principles.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {EDUCATION.map((edu) => (
              <div key={edu.degree} className="education-card">
                <div className="education-meta">
                  <div>
                    <h3 className="education-degree">{edu.degree}</h3>
                    <p className="education-institution">{edu.institution}</p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <span className="cgpa-badge">{edu.cgpa}</span>
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "12px",
                        color: "var(--text-muted)",
                        marginTop: "4px",
                      }}
                    >
                      {edu.duration}
                    </p>
                  </div>
                </div>

                <div style={{ marginTop: "12px" }}>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "var(--text-muted)",
                      marginBottom: "8px",
                      fontWeight: 500,
                    }}
                  >
                    Key Coursework / Subjects:
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {edu.courses.map((c) => (
                      <StackPill key={c} name={c} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="section">
        <div className="section-inner">
          <div className="section-header">
            <div>
              <p className="section-label">
                <Award size={13} /> Verifiable Credentials
              </p>

              <h2 className="section-title">Certifications & Honors</h2>
            </div>

            <p className="section-desc">
              Professional certifications and verified competitive programming achievements.
            </p>
          </div>

          <div className="projects-grid">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.title} className="cert-card">
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "8px",
                    }}
                  >
                    <span className="cert-issuer">{cert.issuer}</span>
                    <Tag label={cert.tag} color="green" />
                  </div>
                  <h3 className="cert-title">{cert.title}</h3>
                </div>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "13px",
                    padding: "8px 14px",
                    marginTop: "16px",
                    width: "fit-content",
                  }}
                >
                  Verify Certificate/Profile <ExternalLink size={13} />
                </a>
              </div>
            ))}
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

              <h2 className="section-title">Problem Solving & Profiles</h2>
            </div>

            <p className="section-desc">
              Demonstrated problem-solving capabilities, algorithm mastery,
              and algorithmic rating across competitive platforms.
            </p>
          </div>

          <div className="projects-grid">
            {/* LeetCode */}
            <div className="project-card">
              <div className="project-card-inner">
                <div className="project-header">
                  <Tag label="250+ Solved" color="warm" />

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
                  Practicing Data Structures, Algorithms, optimized Java solutions,
                  and backend engineering interview questions (250+ problems solved).
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                    marginTop: "16px",
                  }}
                >
                  <StackPill name="DSA" />
                  <StackPill name="Java" />
                  <StackPill name="Algorithms" />
                </div>
              </div>
            </div>

            {/* GeeksforGeeks */}
            <div className="project-card">
              <div className="project-card-inner">
                <div className="project-header">
                  <Tag label="Top 3% Thapar" color="green" />

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
                  Ranked in the top 3% among 14,500+ students at Thapar University with 900+ coding score and 250+ problems solved.
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                    marginTop: "16px",
                  }}
                >
                  <StackPill name="900+ Score" />
                  <StackPill name="Ranked Top 3%" />
                </div>
              </div>
            </div>

            {/* Code360 */}
            <div className="project-card">
              <div className="project-card-inner">
                <div className="project-header">
                  <Tag label="200+ Solved" color="cool" />

                  <a
                    href="https://www.naukri.com/code360/profile/HnpsBindra"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-btn"
                  >
                    <ExternalLink size={15} />
                  </a>
                </div>

                <h3 className="project-title">Coding Ninjas (Code360)</h3>

                <p className="project-desc">
                  Strengthening computer science fundamentals, trees, dynamic programming,
                  and graph algorithms (200+ problems solved).
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                    marginTop: "16px",
                  }}
                >
                  <StackPill name="Code360" />
                  <StackPill name="Graphs" />
                  <StackPill name="DP" />
                </div>
              </div>
            </div>

            {/* Codolio */}
            <div className="project-card">
              <div className="project-card-inner">
                <div className="project-header">
                  <Tag label="Unified Profile" color="default" />

                  <a
                    href="https://codolio.com/profile/ewgblvq"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-btn"
                  >
                    <ExternalLink size={15} />
                  </a>
                </div>

                <h3 className="project-title">Codolio Profile</h3>

                <p className="project-desc">
                  Unified developer profile aggregating coding metrics, project activity,
                  and continuous growth tracking across platforms.
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                    marginTop: "16px",
                  }}
                >
                  <StackPill name="Portfolio" />
                  <StackPill name="Activity" />
                </div>
              </div>
            </div>

            {/* NeetCode */}
            <div className="project-card">
              <div className="project-card-inner">
                <div className="project-header">
                  <Tag label="DSA Patterns" color="warm" />

                  <a
                    href="https://neetcode.io/user/RapidAndorian514"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-btn"
                  >
                    <ExternalLink size={15} />
                  </a>
                </div>

                <h3 className="project-title">NeetCode</h3>

                <p className="project-desc">
                  Practicing Data Structures, Algorithms, NeetCode DSA roadmap,
                  and technical interview problem-solving patterns.
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                    marginTop: "16px",
                  }}
                >
                  <StackPill name="NeetCode 150" />
                  <StackPill name="DSA Roadmap" />
                  <StackPill name="Patterns" />
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

          <h2 className="contact-title">
            Let’s build reliable backend systems together.
          </h2>

          <p className="contact-sub">
            Interested in backend engineering, Java & Spring Boot applications,
            REST APIs, or collaborative projects? Feel free to reach out.
          </p>

          <div className="contact-links">
            <a href="mailto:hnps.bindra@gmail.com" className="contact-link">
              hnps.bindra@gmail.com
              <ArrowUpRight size={14} />
            </a>

            <button onClick={handleCopyEmail} className="btn-secondary">
              {copied ? <Check size={14} /> : <Copy size={14} />}{" "}
              {copied ? "Copied Email!" : "Copy Email"}
            </button>

            <a
              href="https://www.linkedin.com/in/hnpsb/"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <LinkedinIcon size={14} />
              linkedin.com/in/hnpsb
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

            <a
              href="/Resume_Harnimar(102316032).pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              Resume PDF
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
            © 2026 Harnimarpreet Singh • Java Backend Developer
          </span>
        </div>
      </footer>

      {copied && (
        <div className="toast-notice">
          <Check size={16} style={{ color: "var(--accent-green)" }} />
          Email copied to clipboard (hnps.bindra@gmail.com)
        </div>
      )}
    </div>
  );
}

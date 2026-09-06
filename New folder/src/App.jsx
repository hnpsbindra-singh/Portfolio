import { useState, useEffect } from "react";
import {
  ExternalLink,
  GitBranch,
  Terminal,
  Database,
  Server,
  Layers,
  Cpu,
  ArrowUpRight,
  FileText,
  Award,
  GraduationCap,
  Code2,
  Check,
  Copy,
  Mail,
  Zap,
  Shield,
  Menu,
  X,
  Workflow,
  Radio,
  Clock,
  ChevronRight,
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

function GithubIcon({ size = 16 }) {
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
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const NAV_LINKS = [
  { label: "Featured", href: "#featured" },
  { label: "All Work", href: "#projects" },
  { label: "Problem Solving", href: "#coding" },
  { label: "Technical Stack", href: "#skills" },
  { label: "Education", href: "#education" },
];

const FEATURED_PROJECTS = [
  {
    id: "relay",
    title: "Relay",
    tag: "Distributed Event Streaming",
    badgeType: "indigo",
    subtitle: "Enterprise Asynchronous Notification & Messaging Pipeline",
    description:
      "A production-grade, multi-tenant notification engine engineered to decouple heavy email and push alerts from user-facing HTTP request cycles using Apache Kafka in KRaft mode. Provides stateless JWT security, Redis token revocation, and PostgreSQL persistence with a Google Workspace-inspired PWA.",
    archFlow: [
      "Spring Boot Producer",
      "Apache Kafka Topic",
      "Async Worker Consumers",
      "Brevo Email & PostgreSQL",
    ],
    decisions: [
      "Decoupled Event Streaming: Buffers burst notification traffic across Kafka topics, eliminating HTTP response timeouts during peak broadcasts.",
      "Stateless Auth with Fast Revocation: Implemented JWT authentication combined with Redis token blacklisting for instant session termination.",
      "Multi-Tenant Workspace Isolation: Organization-scoped data access, channel permissions, and role-based access control (Admin, Employee, Member).",
      "Optimized Media Ingestion: Integrated client-side compression before streaming assets to Cloudinary, reducing ingress network payload.",
    ],
    stack: [
      "Apache Kafka (KRaft)",
      "Spring Boot 3",
      "PostgreSQL 16",
      "Redis 7",
      "Docker Compose",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Brevo API",
      "Cloudinary",
    ],
    github: "https://github.com/hnpsbindra-singh/Kafka-based-Notification-System",
    deployed: "https://relay-latest-dhkl.onrender.com/",
    swagger: "https://relay-latest-dhkl.onrender.com/swagger-ui/index.html",
    metric: "KRaft Kafka",
    metricLabel: "event streaming",
  },
  {
    id: "notthatshort",
    title: "NotThatShort",
    tag: "Low-Latency Caching & Shortening",
    badgeType: "amber",
    subtitle: "High-Throughput URL Shortener with 2-Tier Caching & Quota Controls",
    description:
      "A robust URL management and redirection service optimized for sub-millisecond lookup latency. Uses Base62 collision-free code hashing, two-tier Redis cache-aside resolution, MongoDB TTL automatic record pruning, user quota metering, and dynamic QR code generation.",
    archFlow: [
      "HTTP Ingress",
      "Redis Cache Check (~1ms)",
      "MongoDB Fallback",
      "TTL Auto-Expiry (7d)",
    ],
    decisions: [
      "Sub-Millisecond Redirection: Employs Redis cache-aside (@Cacheable) keyed by short code, routing 99% of incoming redirect queries directly from memory.",
      "Proactive Cache Eviction: Automatic cache invalidation on link updates ensuring zero stale redirect destinations.",
      "Automated Lifecycle Pruning: MongoDB TTL indexing (expiresAt) purges expired records automatically with zero cron task overhead.",
      "Built-In Campaign Tools: Dynamic client-side QR generation, UTM campaign tag assembly, and rate-metered user quotas.",
    ],
    stack: [
      "Java 17",
      "Spring Boot",
      "Spring Security",
      "Redis Caching",
      "MongoDB Atlas",
      "Docker",
      "React.js",
      "PWA",
      "JWT",
      "Tailwind CSS",
    ],
    github: "https://github.com/hnpsbindra-singh/NotThatShort-Url-Shortener-",
    deployed: "https://not-that-short-url-shortener.vercel.app/",
    metric: "Sub-ms",
    metricLabel: "Redis redirect cache",
  },
];

const ALL_PROJECTS = [
  {
    title: "Cloud Share",
    category: "Distributed & Cloud",
    tag: "Cloud Storage",
    description:
      "Full-stack microservices platform for secure cloud storage, nested folder organization, metadata search, and file sharing with Redis query caching and JWT authentication.",
    stack: [
      "Spring Boot",
      "Spring Cloud Gateway",
      "Microservices",
      "PostgreSQL",
      "Redis",
      "Cloudinary",
      "React.js",
      "Swagger",
    ],
    github: "https://github.com/hnpsbindra-singh/CloudShare",
    deployed: "https://cloudshare-cdn.vercel.app/",
    swagger: "https://cloudshare-le1b.onrender.com/swagger-ui/index.html",
  },
  {
    title: "BookMyEvent",
    category: "Full-Stack",
    tag: "Event Ticketing",
    description:
      "Full-stack event ticket booking system with organizer event management, role-based authorization, ACID payment verification, and Redis-cached listings.",
    stack: [
      "Spring Boot",
      "PostgreSQL",
      "Redis",
      "Spring Data JPA",
      "React.js",
      "JWT",
    ],
    github: "https://github.com/hnpsbindra-singh/FestTrackerSystem",
    deployed: "https://fest-tracker-system.vercel.app/auth",
    swagger: "https://festtrackersystem.onrender.com/swagger-ui/index.html#/",
  },
  {
    title: "Cab On Campus",
    category: "Real-Time",
    tag: "Campus Mobility",
    description:
      "Campus ride-booking platform serving students and drivers within Thapar University. Features DTO-driven architecture, RBAC authorization, and ~120ms API response latency.",
    stack: [
      "Spring Boot",
      "PostgreSQL",
      "Redis",
      "Spring Security",
      "React.js",
      "JWT",
    ],
    github: "https://github.com/hnpsbindra-singh/CabOnCampus_Final",
    deployed: "https://cab-on-campus-final.vercel.app/login",
    swagger: "https://caboncampus-final.onrender.com/swagger-ui/index.html#/",
  },
  {
    title: "Skills Swap",
    category: "Real-Time",
    tag: "Skill Barter",
    description:
      "Peer-to-peer barter exchange platform enabling knowledge trading via bidirectional WebSocket messaging, profile verification, and admin controls.",
    stack: [
      "Spring Boot",
      "WebSocket API",
      "MongoDB",
      "Spring Security",
      "React.js",
      "Swagger",
    ],
    github: "https://github.com/hnpsbindra-singh/SkillsSwap",
    deployed: "https://skills-swap-wheat.vercel.app/",
    swagger: "https://skillsbarter-backend.onrender.com/swagger-ui/index.html#/",
  },
  {
    title: "Family Tracker",
    category: "Real-Time",
    tag: "Location Safety",
    description:
      "Real-time family safety platform with live WebSocket coordinates streaming, family circle management, and JavaMailSender emergency dispatch.",
    stack: [
      "Spring Boot",
      "WebSockets",
      "MongoDB",
      "Spring Security",
      "JavaMailSender",
    ],
    github: "https://github.com/hnpsbindra-singh/FamilyTrace",
  },
  {
    title: "Auth Microservice",
    category: "Distributed & Cloud",
    tag: "Security Engine",
    description:
      "Standalone authentication service implementing stateless JWT issuance, refresh token rotation, BCrypt password hashing, and role-based route protection.",
    stack: ["Spring Boot", "Spring Security", "JWT", "MongoDB"],
    github: "https://github.com/hnpsbindra-singh/AuthApp",
  },
  {
    title: "AI Flood Rescue",
    category: "Distributed & Cloud",
    tag: "Disaster Coordination",
    description:
      "Emergency disaster response platform coordinating victims, NGOs, donors, and administrators in real time during flood emergencies (Capstone Project).",
    stack: ["Spring Boot", "React.js", "MySQL", "JWT"],
    github: "https://github.com/hnpsbindra-singh/FloodRescueSystem",
  },
];

const CODING_STATS = [
  {
    platform: "LeetCode",
    badge: "350+ Solved",
    badgeType: "amber",
    headline: "1600+ Max Contest Rating",
    desc: "Consistent competitive problem solving in Java. Practicing advanced Data Structures, Dynamic Programming, Graphs, and Greedy Algorithms.",
    link: "https://leetcode.com/u/3E9LrlAgkf/",
    pills: ["350+ Solved", "1600+ Peak Rating", "DSA in Java"],
  },
  {
    platform: "GeeksforGeeks",
    badge: "Top 3% Thapar",
    badgeType: "emerald",
    headline: "1000+ Score · 300+ Solved",
    desc: "Ranked in the top 3% among 14,500+ student coders at Thapar Institute of Engineering & Technology with consistent algorithmic submissions.",
    link: "https://www.geeksforgeeks.org/profile/nimar2q7c?tab=activity",
    pills: ["300+ Solved", "1000+ Score", "Top 3% Coders"],
  },
  {
    platform: "Coding Ninjas (Code360)",
    badge: "200+ Solved",
    badgeType: "indigo",
    headline: "Algorithmic Foundation",
    desc: "Focused on trees, binary search variations, graph traversals (BFS/DFS), and algorithmic complexity optimization.",
    link: "https://www.naukri.com/code360/profile/HnpsBindra",
    pills: ["200+ Solved", "Graphs & Trees", "DP"],
  },
  {
    platform: "NeetCode",
    badge: "DSA Roadmap",
    badgeType: "slate",
    headline: "Pattern Mastery",
    desc: "Mastering interview patterns through the NeetCode 150 problem curriculum and structured algorithmic roadmaps.",
    link: "https://neetcode.io/user/RapidAndorian514",
    pills: ["NeetCode 150", "Systematic Patterns", "Java"],
  },
  {
    platform: "Codolio Profile",
    badge: "Unified Metrics",
    badgeType: "slate",
    headline: "Aggregated Performance",
    desc: "Consolidated developer profile tracking activity, submission heatmaps, and continuous growth across all coding platforms.",
    link: "https://codolio.com/profile/ewgblvq",
    pills: ["Unified Profile", "Continuous Activity"],
  },
];

const SKILL_GROUPS = [
  {
    title: "Backend & Distributed Systems",
    icon: Server,
    skills: [
      "Java (JDK 17/21)",
      "Spring Boot 3",
      "Apache Kafka (KRaft)",
      "Spring Security",
      "Spring Data JPA",
      "Spring Cloud Gateway",
      "Hibernate ORM",
      "RESTful APIs",
      "Microservices",
      "WebSocket API",
    ],
  },
  {
    title: "Databases & Caching",
    icon: Database,
    skills: [
      "PostgreSQL",
      "Redis (Cache-Aside & Queues)",
      "MongoDB Atlas",
      "MySQL",
      "Cloudinary Storage",
    ],
  },
  {
    title: "Infrastructure & DevOps",
    icon: Cpu,
    skills: [
      "Docker & Docker Compose",
      "Git & GitHub Actions",
      "Maven Build Tool",
      "Postman API Client",
      "Swagger / OpenAPI",
      "Linux / Bash",
    ],
  },
  {
    title: "Frontend & Client",
    icon: Layers,
    skills: [
      "React.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Bootstrap",
      "Progressive Web Apps (PWA)",
      "HTML5 & CSS3",
    ],
  },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [toastMessage, setToastMessage] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("hnps.bindra@gmail.com");
    showToast("Email copied to clipboard: hnps.bindra@gmail.com");
  };

  const filteredProjects =
    activeCategory === "All"
      ? ALL_PROJECTS
      : ALL_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="app">
      {/* Google Multi-Color Top Bar */}
      <div className="google-bar" />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast">
          <Check size={16} color="#34a853" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* NAVBAR */}
      <header className={`nav-header ${scrolled ? "scrolled" : ""}`}>
        <div className="container nav-inner">
          <a href="#" className="nav-brand">
            <div className="brand-logo" aria-hidden="true">
              <span style={{ color: "#4285f4" }}>&lt;</span>
              <span style={{ color: "#ea4335" }}>/</span>
              <span style={{ color: "#34a853" }}>&gt;</span>
            </div>
            <div className="brand-info">
              <div className="brand-name-row">
                <span className="brand-name">Harnimarpreet Singh</span>
                <span className="brand-chip">Backend</span>
              </div>
              <span className="brand-title">Distributed Systems & Cloud APIs</span>
            </div>
          </a>

          <nav className="nav-links">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <div className="status-badge">
              <span className="pulse-dot" />
              <span>Available for Roles</span>
            </div>

            <button
              onClick={copyEmail}
              className="btn btn-secondary nav-copy-btn"
              style={{ padding: "6px 12px", fontSize: "12px" }}
              title="Copy email address"
            >
              <Copy size={13} />
              <span className="copy-btn-text">Copy Email</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle-btn"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-nav-drawer">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="mobile-nav-footer">
              <a
                href="/Resume_Harnimar(102316032).pdf"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <FileText size={15} />
                <span>View Resume</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            {/* Hero System Status Card (Left Column) */}
            <div className="hero-card">
              <div className="hero-card-header">
                <div className="card-title-group">
                  <Terminal size={16} color="#4285f4" />
                  <span className="card-title">Core Engineering Profile</span>
                </div>
                <div className="live-indicator">
                  <span className="pulse-dot" />
                  <span>Active</span>
                </div>
              </div>

              <div className="hero-card-stats">
                <div className="stat-box">
                  <div className="stat-value">350+</div>
                  <div className="stat-label">LeetCode (1600+ Rating)</div>
                </div>
                <div className="stat-box">
                  <div className="stat-value">1000+</div>
                  <div className="stat-label">GFG Score (Top 3%)</div>
                </div>
                <div className="stat-box">
                  <div className="stat-value">300+</div>
                  <div className="stat-label">GFG Problems Solved</div>
                </div>
                <div className="stat-box">
                  <div className="stat-value">40+</div>
                  <div className="stat-label">Public Repositories</div>
                </div>
              </div>

              <div className="hero-card-stack-label">Primary Architecture Stack</div>
              <div className="hero-card-tags">
                <span className="tech-pill">Java 17/21</span>
                <span className="tech-pill">Spring Boot 3</span>
                <span className="tech-pill">Apache Kafka</span>
                <span className="tech-pill">PostgreSQL</span>
                <span className="tech-pill">Redis Caching</span>
                <span className="tech-pill">MongoDB</span>
                <span className="tech-pill">Docker</span>
                <span className="tech-pill">React & PWA</span>
              </div>
            </div>

            {/* Hero Bio & Actions (Right Column) */}
            <div className="hero-content">
              <h1 className="hero-title">
                Harnimarpreet Singh
              </h1>

              <p className="hero-narrative">
                Computer Science undergrad at <strong>Thapar Institute of Engineering & Technology</strong> (2023–2027).
                I specialize in architecting backend systems in <strong>Java</strong> and <strong>Spring Boot</strong>,
                orchestrating asynchronous event pipelines with <strong>Apache Kafka</strong>, and engineering low-latency caching
                layers with <strong>Redis</strong> and <strong>PostgreSQL</strong>.
              </p>

              <div className="hero-cta-group">
                <a href="#featured" className="btn btn-primary">
                  Explore Work <ArrowUpRight size={15} />
                </a>

                <a
                  href="https://github.com/hnpsbindra-singh"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  <GithubIcon size={15} />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/hnpsb/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  <LinkedinIcon size={15} />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="/Resume_Harnimar(102316032).pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost"
                  style={{ border: "1px solid var(--border)" }}
                >
                  <FileText size={15} />
                  <span>Resume</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Metrics Ribbon */}
          <div className="stats-ribbon">
            <div className="ribbon-item">
              <div className="ribbon-number">350+ Solved</div>
              <div className="ribbon-label">LeetCode · 1600+ Max Contest Rating</div>
            </div>
            <div className="ribbon-item">
              <div className="ribbon-number">Top 3% Ranking</div>
              <div className="ribbon-label">GeeksforGeeks · 14,500+ Peers at Thapar</div>
            </div>
            <div className="ribbon-item">
              <div className="ribbon-number">1000+ Score</div>
              <div className="ribbon-label">GFG Coding Score · 300+ Solved</div>
            </div>
            <div className="ribbon-item">
              <div className="ribbon-number">~120ms Latency</div>
              <div className="ribbon-label">Production REST API Response Targets</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED ARCHITECTURES: RELAY & NOTTHATSHORT */}
      <section id="featured" className="section">
        <div className="container">
          <div className="section-label">
            <Radio size={13} color="#4285f4" /> Flagship Distributed Systems
          </div>
          <h2 className="section-title">Featured Engineering Projects</h2>
          <p className="section-desc">
            Deep-dive into production-ready architectures built with asynchronous
            event queues, multi-tier cache validation, and decoupled microservices.
          </p>

          <div className="featured-showcase">
            {FEATURED_PROJECTS.map((p) => (
              <div key={p.id} className="featured-card">
                <div className="featured-header">
                  <div className="featured-title-wrap">
                    <div className="featured-tag-row">
                      <span
                        className={`badge ${
                          p.badgeType === "indigo"
                            ? "badge-indigo"
                            : "badge-amber"
                        }`}
                      >
                        {p.tag}
                      </span>
                      <span className="badge badge-slate">
                        {p.metric} · {p.metricLabel}
                      </span>
                    </div>
                    <h3 className="featured-title">{p.title}</h3>
                    <p style={{ fontSize: "14px", color: "var(--text-tertiary)" }}>
                      {p.subtitle}
                    </p>
                  </div>

                  <div className="featured-actions">
                    {p.deployed && (
                      <a
                        href={p.deployed}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary"
                      >
                        <ExternalLink size={14} />
                        <span>Live App</span>
                      </a>
                    )}
                    {p.swagger && (
                      <a
                        href={p.swagger}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-secondary"
                      >
                        <FileText size={14} />
                        <span>Swagger</span>
                      </a>
                    )}
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary"
                    >
                      <GithubIcon size={14} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>

                <p className="featured-desc">{p.description}</p>

                {/* Architecture Pipeline Visual */}
                <div className="arch-box">
                  <div className="arch-box-title">
                    <Workflow size={13} />
                    <span>System Pipeline & Data Flow</span>
                  </div>
                  <div className="arch-flow">
                    {p.archFlow.map((node, i) => (
                      <span
                        key={node}
                        style={{ display: "flex", alignItems: "center", gap: "10px" }}
                      >
                        <span className="arch-node">{node}</span>
                        {i < p.archFlow.length - 1 && (
                          <span className="arch-arrow">➔</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Engineering Decisions */}
                <div className="decisions-grid">
                  {p.decisions.map((dec, i) => (
                    <div key={i} className="decision-item">
                      <span className="decision-bullet">▹</span>
                      <span>{dec}</span>
                    </div>
                  ))}
                </div>

                <div className="featured-footer">
                  <div className="featured-stack">
                    {p.stack.map((t) => (
                      <span key={t} className="tech-pill">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALL PROJECTS GRID */}
      <section id="projects" className="section">
        <div className="container">
          <div className="section-label">
            <Database size={13} color="#4285f4" /> Production Systems
          </div>
          <h2 className="section-title">Additional Backend & Full-Stack Systems</h2>
          <p className="section-desc">
            A selection of microservices, campus utilities, and real-time platforms
            built with Spring Boot, PostgreSQL, MongoDB, and WebSockets.
          </p>

          <div className="filter-tabs">
            {[
              "All",
              "Distributed & Cloud",
              "Real-Time",
              "Full-Stack",
            ].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`tab-btn ${activeCategory === cat ? "active" : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((p) => (
              <div key={p.title} className="project-card">
                <div>
                  <div className="card-top">
                    <span className="badge badge-slate">{p.tag}</span>
                  </div>

                  <h3 className="card-title">{p.title}</h3>
                  <p className="card-desc">{p.description}</p>
                </div>

                <div>
                  <div className="card-stack">
                    {p.stack.map((s) => (
                      <span key={s} className="tech-pill">
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="card-links">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-ghost"
                        style={{ padding: "4px 8px", fontSize: "12px" }}
                      >
                        <GithubIcon size={14} /> Code
                      </a>
                    )}
                    {p.deployed && (
                      <a
                        href={p.deployed}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-ghost"
                        style={{ padding: "4px 8px", fontSize: "12px" }}
                      >
                        <ExternalLink size={14} /> Live
                      </a>
                    )}
                    {p.swagger && (
                      <a
                        href={p.swagger}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-ghost"
                        style={{ padding: "4px 8px", fontSize: "12px" }}
                      >
                        <FileText size={14} /> Swagger
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM SOLVING & CODING PROFILES */}
      <section id="coding" className="section">
        <div className="container">
          <div className="section-label">
            <Code2 size={13} color="#4285f4" /> Competitive Problem Solving
          </div>
          <h2 className="section-title">Algorithmic Mastery & Profiles</h2>
          <p className="section-desc">
            Demonstrated mastery in Data Structures, algorithmic optimization,
            and competitive programming across global coding platforms.
          </p>

          <div className="coding-grid">
            {CODING_STATS.map((c) => (
              <div key={c.platform} className="coding-card">
                <div>
                  <div className="coding-card-header">
                    <span className="platform-name">{c.platform}</span>
                    <span
                      className={`badge ${
                        c.badgeType === "amber"
                          ? "badge-amber"
                          : c.badgeType === "emerald"
                          ? "badge-emerald"
                          : c.badgeType === "indigo"
                          ? "badge-indigo"
                          : "badge-slate"
                      }`}
                    >
                      {c.badge}
                    </span>
                  </div>

                  <div className="coding-metric-main">{c.headline}</div>
                  <p className="coding-metric-sub">{c.desc}</p>
                </div>

                <div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
                    {c.pills.map((pill) => (
                      <span key={pill} className="tech-pill">
                        {pill}
                      </span>
                    ))}
                  </div>

                  <a
                    href={c.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary"
                    style={{ width: "100%", fontSize: "13px" }}
                  >
                    <span>View Public Profile</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL SKILLS MATRIX */}
      <section id="skills" className="section">
        <div className="container">
          <div className="section-label">
            <Cpu size={13} color="#4285f4" /> Technical Competencies
          </div>
          <h2 className="section-title">Skills & Architecture Matrix</h2>
          <p className="section-desc">
            Core technologies, database engines, and frameworks I use to build
            scalable and resilient backend infrastructure.
          </p>

          <div className="skills-grid">
            {SKILL_GROUPS.map((group) => {
              const IconComp = group.icon;
              return (
                <div key={group.title} className="skill-category-card">
                  <div className="category-header">
                    <div className="category-icon-box">
                      <IconComp size={16} />
                    </div>
                    <h3 className="category-title">{group.title}</h3>
                  </div>

                  <div className="skill-list">
                    {group.skills.map((s) => (
                      <span key={s} className="tech-pill">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EDUCATION & CERTIFICATIONS */}
      <section id="education" className="section">
        <div className="container">
          <div className="section-label">
            <GraduationCap size={13} color="#4285f4" /> Academic Background
          </div>
          <h2 className="section-title">Education & Verified Credentials</h2>
          <p className="section-desc">
            Rigorous foundations in computer science theory, systems architecture,
            and software engineering methodologies.
          </p>

          <div className="edu-timeline">
            <div className="edu-card">
              <div className="edu-card-top">
                <div>
                  <h3 className="edu-degree">
                    Bachelor of Engineering – Computer Science & Engineering
                  </h3>
                  <p className="edu-school">
                    Thapar Institute of Engineering & Technology, Patiala
                  </p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <span className="badge badge-emerald">CGPA: 7.53</span>
                  <div className="edu-period" style={{ marginTop: "6px" }}>
                    Aug 2023 – May 2027
                  </div>
                </div>
              </div>

              <div className="edu-courses">
                {[
                  "Data Structures & Algorithms",
                  "Operating Systems",
                  "Computer Networks",
                  "Database Management Systems",
                  "Computer Architecture",
                  "Object-Oriented Programming",
                  "Software Engineering",
                  "Machine Learning",
                  "Data Engineering",
                  "Intro to Computer Programming",
                ].map((course) => (
                  <span key={course} className="tech-pill">
                    {course}
                  </span>
                ))}
              </div>
            </div>

            <div className="edu-card">
              <div className="edu-card-top">
                <div>
                  <h3 className="edu-degree">Senior Secondary (CBSE 12th Grade)</h3>
                  <p className="edu-school">SAJSMS, Ambala (CBSE)</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <span className="badge badge-slate">88.6%</span>
                  <div className="edu-period" style={{ marginTop: "6px" }}>
                    April 2021 – March 2023
                  </div>
                </div>
              </div>
              <div className="edu-courses">
                {["Physics", "Chemistry", "Mathematics", "Computer Science"].map(
                  (c) => (
                    <span key={c} className="tech-pill">
                      {c}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Certifications Row */}
            <div className="certs-grid">
              <div className="edu-card">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <span style={{ fontSize: "12px", color: "var(--text-tertiary)" }}>
                    Udemy Verified
                  </span>
                  <span className="badge badge-indigo">Spring Boot</span>
                </div>
                <h4 style={{ fontSize: "15px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "12px" }}>
                  Spring Boot & Spring Framework Masterclass
                </h4>
                <a
                  href="https://www.udemy.com/certificate/UC-8c7c5461-5ef4-4e60-b5e6-42bcdac5bcbc/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost"
                  style={{ fontSize: "12px", padding: "4px 8px" }}
                >
                  Verify Certificate <ExternalLink size={12} />
                </a>
              </div>

              <div className="edu-card">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <span style={{ fontSize: "12px", color: "var(--text-tertiary)" }}>
                    Udemy Verified
                  </span>
                  <span className="badge badge-indigo">Java Web Dev</span>
                </div>
                <h4 style={{ fontSize: "15px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "12px" }}>
                  JDBC Servlets and JSP Fundamentals
                </h4>
                <a
                  href="https://www.udemy.com/certificate/UC-786bbcbf-9f72-4422-aab6-fc96dd400598/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost"
                  style={{ fontSize: "12px", padding: "4px 8px" }}
                >
                  Verify Certificate <ExternalLink size={12} />
                </a>
              </div>

              <div className="edu-card">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <span style={{ fontSize: "12px", color: "var(--text-tertiary)" }}>
                    HackerRank
                  </span>
                  <span className="badge badge-indigo">Java</span>
                </div>
                <h4 style={{ fontSize: "15px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "12px" }}>
                  Java (Basics) Certificate
                </h4>
                <a
                  href="https://www.hackerrank.com/certificates/iframe/ff80ceb79780"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost"
                  style={{ fontSize: "12px", padding: "4px 8px" }}
                >
                  Verify Certificate <ExternalLink size={12} />
                </a>
              </div>

              <div className="edu-card">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <span style={{ fontSize: "12px", color: "var(--text-tertiary)" }}>
                    HackerRank
                  </span>
                  <span className="badge badge-amber">SQL</span>
                </div>
                <h4 style={{ fontSize: "15px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "12px" }}>
                  SQL (Basics) Certificate
                </h4>
                <a
                  href="https://www.hackerrank.com/certificates/iframe/87f9d277f7e4"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost"
                  style={{ fontSize: "12px", padding: "4px 8px" }}
                >
                  Verify Certificate <ExternalLink size={12} />
                </a>
              </div>

              <div className="edu-card">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <span style={{ fontSize: "12px", color: "var(--text-tertiary)" }}>
                    GeeksforGeeks
                  </span>
                  <span className="badge badge-emerald">Top 3% Coders</span>
                </div>
                <h4 style={{ fontSize: "15px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "12px" }}>
                  Top 3% Ranking at Thapar University (14,500+ Peers)
                </h4>
                <a
                  href="https://www.geeksforgeeks.org/profile/nimar2q7c?tab=activity"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost"
                  style={{ fontSize: "12px", padding: "4px 8px" }}
                >
                  View GFG Profile <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Technical Highlights / Leadership */}
            <div className="highlights-grid">
              <div className="edu-card">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <span style={{ fontSize: "12px", color: "var(--text-tertiary)" }}>
                    Leadership
                  </span>
                  <span className="badge badge-indigo">Tech Lead</span>
                </div>
                <h4 style={{ fontSize: "15px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "6px" }}>
                  Tech Lead & Backend Developer — Capstone Project
                </h4>
                <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: "1.55" }}>
                  Led backend development and technical implementation for the Capstone Project (AI Flood Rescue System).
                </p>
              </div>

              <div className="edu-card">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <span style={{ fontSize: "12px", color: "var(--text-tertiary)" }}>
                    Academic Role
                  </span>
                  <span className="badge badge-emerald">1 Year</span>
                </div>
                <h4 style={{ fontSize: "15px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "6px" }}>
                  Group Representative — 3P1, Thapar University
                </h4>
                <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: "1.55" }}>
                  Served as Group Representative for 1 year, coordinating communication and academic activities between students and faculty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT & GET IN TOUCH */}
      <section id="contact" className="section">
        <div className="container">
          <div className="contact-box">
            <span className="badge badge-indigo">Let's Connect</span>
            <h2 className="contact-title">
              Ready to collaborate or discuss an engineering role?
            </h2>
            <p className="contact-desc">
              I am actively seeking backend engineering roles, internships, and
              distributed systems projects where I can contribute high-impact Java,
              Spring Boot, and Kafka architectures.
            </p>

            <p style={{ fontSize: "14px", color: "var(--text-secondary)", fontFamily: "var(--font-mono)" }}>
              +91-9306707837 · hnps.bindra@gmail.com
            </p>

            <div className="contact-actions">
              <a
                href="mailto:hnps.bindra@gmail.com"
                className="btn btn-primary"
              >
                <Mail size={15} />
                <span>Send an Email</span>
              </a>

              <button onClick={copyEmail} className="btn btn-secondary">
                <Copy size={15} />
                <span>Copy Email</span>
              </button>

              <a
                href="https://www.linkedin.com/in/hnpsb/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                <LinkedinIcon size={15} />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/hnpsbindra-singh"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                <GithubIcon size={15} />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          <div className="footer-bar">
            <div>© {new Date().getFullYear()} Harnimarpreet Singh Bindra</div>
          </div>
        </div>
      </section>
    </div>
  );
}

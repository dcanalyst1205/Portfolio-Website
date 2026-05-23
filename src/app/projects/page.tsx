import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hadi Khan — Computer Engineering @ UWaterloo",
  description: "Portfolio of Hadi Khan, Computer Engineering student at the University of Waterloo. Software, systems, and data.",
};

const SKILLS = [
  { category: "Frontend",  items: ["Next.js", "TypeScript", "Tailwind CSS", "React"] },
  { category: "Backend",   items: ["Node.js", "Python", "REST APIs", "Azure"] },
  { category: "Data",      items: ["Pandas", "Scikit-Learn", "Recharts", "SQL"] },
  { category: "Tooling",   items: ["Git", "Docker", "Vercel", "Linux"] },
];

const STATS = [
  { val: "3",  label: "Projects deployed" },
  { val: "3+", label: "Years of experience" },
  { val: "4A", label: "UWaterloo CE" },
  { val: "∞",  label: "Iterations shipped" },
];

export default function HomePage() {
  return (
    <main className="page">

      {/* ── Hero ── */}
      <section className="container hero" aria-label="Introduction">
        <p className="hero__eyebrow">Computer Engineering · University of Waterloo</p>

        <h1 className="hero__name">
          Hadi
          <span>Khan</span>
        </h1>

        <p className="hero__desc">
          Building precise, performant software at the intersection of systems
          engineering and data. Currently looking for co-op opportunities in
          software and data engineering.
        </p>

        <div className="hero__cta">
          <Link href="/projects" className="btn btn--primary">
            View Projects ↗
          </Link>
          <Link href="/contact" className="btn btn--ghost">
            Get in Touch
          </Link>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <div className="container">
        <div className="stat-strip" aria-label="Quick stats">
          {STATS.map(({ val, label }) => (
            <div className="stat-item" key={label}>
              <div className="stat-item__val">{val}</div>
              <div className="stat-item__label">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Skills ── */}
      <section className="container" aria-labelledby="skills-heading" style={{ marginTop: "var(--sp-8)" }}>
        <header className="section-header">
          <h2 className="section-title" id="skills-heading">Stack</h2>
          <span className="section-subtitle">Power Unit</span>
        </header>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1px",
            background: "var(--border)",
          }}
        >
          {SKILLS.map(({ category, items }) => (
            <div
              key={category}
              style={{ background: "var(--bg)", padding: "var(--sp-5)" }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "9px",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  color: "var(--teal)",
                  textTransform: "uppercase",
                  marginBottom: "var(--sp-4)",
                }}
              >
                {category}
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "var(--sp-2)" }}>
                {items.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "13px",
                      fontWeight: 400,
                      color: "var(--silver)",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Recent project preview ── */}
      <section className="container" aria-labelledby="recent-heading" style={{ marginTop: "var(--sp-8)" }}>
        <header className="section-header">
          <h2 className="section-title" id="recent-heading">Recent</h2>
          <span className="section-subtitle">Latest deployment</span>
          <Link
            href="/projects"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              color: "var(--gray-muted)",
              textTransform: "uppercase",
              textDecoration: "none",
              marginLeft: "auto",
              paddingBottom: "4px",
              borderBottom: "1px solid var(--border-mid)",
              transition: "color 0.15s",
            }}
          >
            All projects ↗
          </Link>
        </header>

        {/* Teaser card — just the most recent project */}
        <article
          style={{
            background: "var(--bg-surface)",
            padding: "var(--sp-6)",
            borderLeft: "2px solid var(--teal)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "var(--sp-5)",
            flexWrap: "wrap",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: "var(--teal)",
                textTransform: "uppercase",
                marginBottom: "var(--sp-3)",
              }}
            >
              PKG-001 · 2025
            </p>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(20px, 3vw, 32px)",
                fontWeight: 700,
                letterSpacing: "0.02em",
                textTransform: "uppercase",
                color: "var(--white)",
                lineHeight: 1.1,
                marginBottom: "var(--sp-3)",
              }}
            >
              QuantOptions Visualizer
            </h3>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                fontWeight: 300,
                color: "var(--gray-subtle)",
                lineHeight: 1.6,
                maxWidth: "520px",
              }}
            >
              Black-Scholes option pricing engine with interactive 3D sensitivity
              heatmaps. Built with Next.js 15 and Recharts.
            </p>
          </div>
          <Link href="/projects" className="btn btn--ghost" style={{ flexShrink: 0 }}>
            View all ↗
          </Link>
        </article>
      </section>

      <footer className="footer container" style={{ marginLeft: 0 }}>
        <span className="footer__text">Hadi Khan · Season 2026</span>
        <span className="footer__text">UWaterloo CE · HK-1205</span>
      </footer>

    </main>
  );
}

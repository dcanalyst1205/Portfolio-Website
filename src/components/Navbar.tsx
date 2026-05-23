"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { num: "S1", label: "Home",       href: "/" },
  { num: "S2", label: "Projects",   href: "/projects" },
  { num: "S3", label: "Bio",        href: "/bio" },
  { num: "S4", label: "Experience", href: "/experience" },
  { num: "S5", label: "Contact",    href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [latency, setLatency] = useState(14);
  const [fps, setFps]         = useState(60);

  // Make telemetry feel live
  useEffect(() => {
    const id = setInterval(() => {
      setLatency(Math.floor(Math.random() * 6) + 11); // 11–16ms
      setFps(Math.random() > 0.05 ? 60 : 59);
    }, 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* ── Left rail ── */}
      <aside className="left-rail" aria-hidden="true">
        <span className="left-rail__text">Mercedes-AMG · Season 2026</span>
        <div className="left-rail__dot" />
        <span className="left-rail__text">HK-1205</span>
      </aside>

      {/* ── Top nav ── */}
      <nav className="nav" role="navigation" aria-label="Main navigation">
        <Link href="/" className="nav__logo">
          Hadi<span className="nav__logo-accent">&nbsp;Khan</span>
        </Link>

        <ul className="nav__links" role="list">
          {NAV_LINKS.map(({ num, label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={`nav__link ${pathname === href ? "active" : ""}`}
              >
                <span className="nav__link-num">{num}</span>
                <span className="nav__link-label">{label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav__status" aria-label="System status">
          <div className="nav__status-dot" aria-hidden="true" />
          <span>{latency}ms</span>
          <span style={{ color: "var(--gray-dark)" }}>·</span>
          <span>{fps}fps</span>
        </div>
      </nav>

      {/* ── Telemetry bar ── */}
      <div className="telemetry-bar" aria-hidden="true" style={{ marginLeft: "var(--rail-w)" }}>
        {[
          { k: "Driver",   v: "HK-1205",   accent: false },
          { k: "Team",     v: "AMG",        accent: false },
          { k: "Status",   v: "ONLINE",     accent: true  },
          { k: "DRS",      v: "ACTIVE",     accent: true  },
          { k: "Season",   v: "2026",       accent: false },
          { k: "Stack",    v: "Next.js 15", accent: false },
        ].map(({ k, v, accent }, i, arr) => (
          <span key={k} style={{ display: "contents" }}>
            <span className="telemetry-item">
              <span className="telemetry-item__key">{k}</span>
              <span className={`telemetry-item__val${accent ? " telemetry-item__val--accent" : ""}`}>
                {v}
              </span>
            </span>
            {i < arr.length - 1 && <span className="telemetry-divider" />}
          </span>
        ))}
      </div>
    </>
  );
}

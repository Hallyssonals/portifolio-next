"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@400;600;700&display=swap');

        .vought-nav {
          background: #0a0a0a;
          border-bottom: 2px solid #c0000a;
          font-family: 'Barlow Condensed', sans-serif;
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 4px 32px rgba(192,0,10,0.18);
        }
        .vought-nav-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 64px;
        }
        .vought-logo {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.7rem;
          letter-spacing: 0.12em;
          color: #fff;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .vought-logo-accent {
          color: #c0000a;
        }
        .vought-logo-bar {
          width: 3px;
          height: 28px;
          background: #c0000a;
          display: inline-block;
        }
        .vought-links {
          display: flex;
          gap: 0;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .vought-links a {
          display: block;
          padding: 0 1.1rem;
          height: 64px;
          line-height: 64px;
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #aaa;
          text-decoration: none;
          position: relative;
          transition: color 0.2s;
        }
        .vought-links a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: #c0000a;
          transform: scaleX(0);
          transition: transform 0.2s ease;
        }
        .vought-links a:hover {
          color: #fff;
        }
        .vought-links a:hover::after {
          transform: scaleX(1);
        }
        .vought-hamburger {
          display: none;
          background: none;
          border: 1px solid #333;
          color: #aaa;
          padding: 6px 10px;
          cursor: pointer;
          font-size: 1.2rem;
          border-radius: 3px;
        }
        .vought-mobile-menu {
          display: none;
          background: #0f0f0f;
          border-top: 1px solid #1e1e1e;
        }
        .vought-mobile-menu.open {
          display: block;
        }
        .vought-mobile-menu a {
          display: block;
          padding: 0.85rem 2rem;
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #888;
          text-decoration: none;
          border-left: 3px solid transparent;
          transition: color 0.2s, border-color 0.2s;
        }
        .vought-mobile-menu a:hover {
          color: #fff;
          border-left-color: #c0000a;
        }
        @media (max-width: 768px) {
          .vought-links { display: none; }
          .vought-hamburger { display: block; }
        }
      `}</style>

      <nav className="vought-nav">
        <div className="vought-nav-inner">
          <Link href="/" className="vought-logo">
            <span className="vought-logo-bar" />
            <span>
              HALLYSSON<span className="vought-logo-accent">.</span>DEV
            </span>
          </Link>

          <ul className="vought-links">
            {[
              { href: "/", label: "Home" },
              { href: "/sobre", label: "Sobre" },
              { href: "/experiencia-academica", label: "Acadêmico" },
              { href: "/experiencia-profissional", label: "Profissional" },
              { href: "/projetos", label: "Projetos" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>

          <button
            className="vought-hamburger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Abrir menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        <div className={`vought-mobile-menu ${menuOpen ? "open" : ""}`}>
          {[
            { href: "/", label: "Home" },
            { href: "/sobre", label: "Sobre" },
            { href: "/experiencia-academica", label: "Acadêmico" },
            { href: "/experiencia-profissional", label: "Profissional" },
            { href: "/projetos", label: "Projetos" },
          ].map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
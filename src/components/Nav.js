import React, { useEffect, useState } from "react";
import { Menu, X, Terminal as TerminalIcon } from "lucide-react";
import { PROFILE } from "../data";

const links = [
  { id: "hero", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "skills", label: "SKILLS" },
  { id: "projects", label: "PROJECTS" },
  { id: "experience", label: "EXP" },
  { id: "education", label: "EDU" },
  { id: "contact", label: "CONTACT" },
];

const Nav = () => {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 140;
      const found = [...links].reverse().find((l) => {
        const el = document.getElementById(l.id);
        return el && el.offsetTop <= y;
      });
      if (found) setActive(found.id);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className={`nav ${open ? "open" : ""}`} data-testid="site-nav">
      <div className="container-wide nav-inner">
        <button className="nav-brand" onClick={() => go("hero")} data-testid="nav-brand">
          <span className="nav-brand-dot" />
          <TerminalIcon size={16} />
          <span>AI // {PROFILE.handle.toUpperCase()}</span>
        </button>

        <div className="nav-links" data-testid="nav-links">
          {links.map((l) => (
            <button
              key={l.id}
              className={`nav-link ${active === l.id ? "active" : ""}`}
              onClick={() => go(l.id)}
              data-testid={`nav-link-${l.id}`}
            >
              {l.label}
            </button>
          ))}
          <a
            href={PROFILE.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="nav-cta"
            data-testid="nav-resume-btn"
          >
            ↓ RESUME
          </a>
        </div>

        <button className="nav-toggle" onClick={() => setOpen((v) => !v)} data-testid="nav-toggle" aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </nav>
  );
};

export default Nav;

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Code2, Download, ArrowDown, MapPin, Mail, Radar } from "lucide-react";
import Starfield from "./components/Starfield";
import Terminal from "./components/Terminal";
import Orb from "./components/Orb";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import {
  PROFILE,
  SKILLS,
  PROJECTS,
  EXPERIENCE,
  EDUCATION,
  PUBLICATIONS,
  ACHIEVEMENTS,
} from "./data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.6, 0.2, 1] } },
};

const Section = ({ id, label, title, sub, children, testid }) => (
  <section id={id} className="section" data-testid={testid || `section-${id}`}>
    <div className="container-wide">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeUp}
      >
        <div className="section-label">{label}</div>
        <h2 className="section-title">{title}</h2>
        {sub && <p className="section-sub">{sub}</p>}
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.1 } } }}
      >
        {children}
      </motion.div>
    </div>
  </section>
);

function App() {
  return (
    <div className="shell grain scanlines" data-testid="app-shell">
      <Starfield />
      <Nav />

      {/* HERO */}
      <header id="hero" className="section" style={{ paddingTop: 40 }} data-testid="section-hero">
        <div className="container-wide hero">
          <div className="hero-content">
            <motion.div
              className="hero-tag"
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              data-testid="hero-status-tag"
            >
              <span className="dot" /> UPLINK ESTABLISHED · SIGNAL 100%
            </motion.div>

            <Terminal />

            <motion.h1
              className="hero-title glitch"
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.9 }}
              data-testid="hero-name"
            >
              ATHARVA<br />
              <span className="accent">INGALE.</span>
            </motion.h1>

            <motion.div
              className="hero-role"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
              data-testid="hero-role"
            >
              FULL-STACK DEV<span className="split">◇</span>CLOUD SECURITY
            </motion.div>

            <motion.div
              className="hero-meta"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
            >
              <span><MapPin size={14} /> {PROFILE.location} · {PROFILE.coordinates}</span>
              <span><Radar size={14} /> Available for Internships</span>
              <span><Mail size={14} /> {PROFILE.email}</span>
            </motion.div>

            <motion.div
              className="hero-cta"
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.15 }}
            >
              <a href={PROFILE.resumeUrl} target="_blank" rel="noreferrer" className="btn solid" data-testid="hero-resume-btn">
                <Download size={14} /> Download Resume
              </a>
              <button
                className="btn"
                onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
                data-testid="hero-projects-btn"
              >
                <ArrowDown size={14} /> View Projects
              </button>
              <a href={PROFILE.socials.github} target="_blank" rel="noreferrer" className="btn magenta" data-testid="hero-github-btn">
                <Github size={14} /> GitHub
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 1 }}
          >
            <Orb />
          </motion.div>
        </div>
      </header>

      {/* ABOUT */}
      <Section
        id="about"
        label="// 01_SYS.ABOUT"
        title="ORIGIN LOG"
        sub="Who's behind the console — a third-year CSE student obsessed with shipping."
      >
        <div className="about-grid">
          <p className="about-copy" data-testid="about-copy">
            <span className="drop">A</span>
            {PROFILE.summary}
            <br /><br />
            Currently based out of AISSMS IIT, Pune — building deployable systems, hardening
            them with role-based access control, and pushing containerized workloads to AWS
            when the mood strikes. Fluent in the language of trees, graphs, and 24-hour
            hackathon nights.
          </p>

          <div>
            <div className="stat-block" data-testid="about-stats">
              <div className="stat"><div className="k">150+</div><div className="v">DSA Solved</div></div>
              <div className="stat"><div className="k">2</div><div className="v">Full-Stack Ships</div></div>
              <div className="stat"><div className="k">7.88</div><div className="v">CGPA</div></div>
              <div className="stat"><div className="k">Top 100</div><div className="v">Reckon 6.0 / 1000+</div></div>
            </div>
            <div style={{ marginTop: 22 }}>
              <div className="hud-line"><span>◇ ROLE</span><span>{PROFILE.role}</span></div>
              <div className="hud-line"><span>◇ FOCUS</span><span>{PROFILE.subrole}</span></div>
              <div className="hud-line"><span>◇ ORIGIN</span><span>{PROFILE.location}</span></div>
              <div className="hud-line"><span>◇ CERT</span><span>Google Cybersecurity</span></div>
            </div>
          </div>
        </div>
      </Section>

      {/* SKILLS */}
      <Section
        id="skills"
        label="// 02_SKILL_MATRIX"
        title="ARSENAL"
        sub="Categorized loadout — languages, frameworks, and cloud primitives currently equipped."
      >
        <div className="skills-grid" data-testid="skills-grid">
          {SKILLS.map((s, idx) => (
            <div className="skill-card" key={s.id} data-testid={`skill-card-${s.id}`}>
              <div className="id">SEC_0{idx + 1}</div>
              <div className="h">{s.label}</div>
              <div className="chips">
                {s.items.map((it) => (
                  <span className="chip" key={it}>{it}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section
        id="projects"
        label="// 03_MISSION_LOG"
        title="DEPLOYED SYSTEMS"
        sub="Selected builds — full-stack apps operational in the wild."
      >
        <div className="projects-grid" data-testid="projects-grid">
          {PROJECTS.map((p) => (
            <article className="project-card" key={p.id} data-testid={`project-card-${p.id}`}>
              <div className="project-top">
                <div className="project-code">{p.codename} · {p.date}</div>
                <div className="project-status"><span className="dot" /> {p.status}</div>
              </div>
              <h3 className="project-name">{p.name}</h3>
              <div className="project-tag">{p.tagline}</div>
              <ul className="project-list">
                {p.highlights.map((h, i) => <li key={i}>{h}</li>)}
              </ul>
              <div className="project-tech">
                {p.tech.map((t) => <span className="chip" key={t}>{t}</span>)}
              </div>
              <div className="project-actions">
                {p.liveUrl && (
                  <a href={p.liveUrl} target="_blank" rel="noreferrer" className="btn solid" data-testid={`project-live-${p.id}`}>
                    ↗ Live Deploy
                  </a>
                )}
                {p.repoUrl && (
                  <a href={p.repoUrl} target="_blank" rel="noreferrer" className="btn" data-testid={`project-repo-${p.id}`}>
                    <Github size={14} /> Repository
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section
        id="experience"
        label="// 04_OPS_HISTORY"
        title="FIELD OPERATIONS"
        sub="High-intensity engagements & leadership deployments."
      >
        <div className="timeline" data-testid="experience-timeline">
          {EXPERIENCE.map((e) => (
            <div className="timeline-item" key={e.id} data-testid={`experience-item-${e.id}`}>
              <div className="tl-date">{e.date}</div>
              <div className="tl-role">{e.role}</div>
              <div className="tl-org">{e.org}</div>
              <ul className="tl-list">
                {e.highlights.map((h, i) => <li key={i}>{h}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* EDUCATION + PUBLICATIONS */}
      <Section
        id="education"
        label="// 05_KNOWLEDGE_CORE"
        title="EDUCATION · PUBLICATIONS"
        sub="Academic uplink and research signal."
      >
        <div className="hud-grid">
          <div className="hud-card" data-testid="education-card">
            <div className="cap">◇ DEGREE_MODULE</div>
            <h4>{EDUCATION.degree}</h4>
            <div className="meta">{EDUCATION.institution} · {EDUCATION.window}</div>
            <div className="hud-line"><span>CGPA</span><span>{EDUCATION.cgpa}</span></div>
            <div className="hud-line"><span>COURSEWORK</span><span>{EDUCATION.coursework.join(" · ")}</span></div>
            <div className="hud-line"><span>STATUS</span><span style={{ color: "var(--green)" }}>IN-ORBIT</span></div>
          </div>

          <div className="hud-card" data-testid="publications-card">
            <div className="cap">◇ SIGNAL_ARCHIVE</div>
            <h4>Publications</h4>
            <div className="meta">Peer-reviewed transmissions.</div>
            {PUBLICATIONS.map((p, i) => (
              <div className="pub" key={i} data-testid={`publication-${i}`}>
                <div className="t">"{p.title}"</div>
                <div className="v">{p.venue} · {p.date}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ACHIEVEMENTS */}
      <Section
        id="achievements"
        label="// 06_COMMENDATIONS"
        title="ACHIEVEMENTS"
        sub="Recognitions accumulated across the mission timeline."
      >
        <div className="achievements" data-testid="achievements-grid">
          {ACHIEVEMENTS.map((a, i) => (
            <div className="ach-card" key={i} data-testid={`achievement-${i}`}>
              <div className="icon">◈</div>
              <div>
                <h5>{a.title}</h5>
                <p>{a.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Contact />

      {/* FOOTER */}
      <footer className="footer" data-testid="site-footer">
        <div className="container-wide footer-inner">
          <div>
            <div style={{ color: "var(--cyan)", fontSize: 12, letterSpacing: "0.28em" }}>
              {"// END_OF_TRANSMISSION"}
            </div>
            <div style={{ marginTop: 6 }}>
              © {new Date().getFullYear()} ATHARVA INGALE · Compiled with React, Firebase & caffeine.
            </div>
          </div>
          <div className="social">
            <a href={PROFILE.socials.github} target="_blank" rel="noreferrer" data-testid="footer-github"><Github size={16} /></a>
            <a href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer" data-testid="footer-linkedin"><Linkedin size={16} /></a>
            <a href={PROFILE.socials.leetcode} target="_blank" rel="noreferrer" data-testid="footer-leetcode"><Code2 size={16} /></a>
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PROFILE.email)}`}
              target="_blank"
              rel="noreferrer"
              data-testid="footer-email"
            ><Mail size={16} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

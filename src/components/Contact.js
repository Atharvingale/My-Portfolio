import React, { useState } from "react";
import { Send, Mail, MapPin, Phone, Github, Linkedin, Code2 } from "lucide-react";
import { PROFILE } from "../data";
import { db, firebaseEnabled } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const gmailComposeUrl = (subject = "", body = "") => {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: PROFILE.email,
    subject,
    body,
  });
  return `https://mail.google.com/mail/?${params.toString()}`;
};

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ state: "idle", msg: "" });
  const [sending, setSending] = useState(false);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const validEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ state: "err", msg: "> ERROR: All fields required." });
      return;
    }
    if (!validEmail(form.email)) {
      setStatus({ state: "err", msg: "> ERROR: Invalid email signature." });
      return;
    }
    setSending(true);
    setStatus({ state: "idle", msg: "" });
    try {
      if (firebaseEnabled && db) {
        await addDoc(collection(db, "contact_messages"), {
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          created_at: serverTimestamp(),
          source: "portfolio",
        });
        setStatus({ state: "ok", msg: "> TRANSMISSION COMPLETE // Message received." });
        setForm({ name: "", email: "", message: "" });
      } else {
        const body = `${form.message}\n\n— ${form.name} (${form.email})`;
        const subject = `Portfolio contact from ${form.name}`;
        window.open(gmailComposeUrl(subject, body), "_blank", "noopener,noreferrer");
        setStatus({
          state: "ok",
          msg: "> Opening Gmail compose window. (Firebase not configured yet)",
        });
      }
    } catch (err) {
      setStatus({ state: "err", msg: `> ERROR: ${err.message || "Transmission failed."}` });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section" data-testid="section-contact">
      <div className="container-wide">
        <div className="section-label">// 07_TRANSMISSION</div>
        <h2 className="section-title">OPEN A CHANNEL</h2>
        <p className="section-sub">
          Recruiter, engineer, or fellow explorer? Ping the deck — I read every signal.
        </p>

        <div className="contact-grid">
          <div className="contact-side">
            <h3>Ready to build something worth deploying?</h3>
            <p>
              Actively seeking software development or cloud-focused internships. Comfortable
              across React, Node, and container-based deployments. Happy to jump on a call or
              collaborate on your next launch window.
            </p>
            <div className="contact-info">
              <a href={gmailComposeUrl()} target="_blank" rel="noreferrer" data-testid="contact-email-link">
                <Mail size={16} /> {PROFILE.email}
              </a>
              <a href={`tel:${PROFILE.phone.replace(/\s+/g, "")}`} data-testid="contact-phone-link">
                <Phone size={16} /> {PROFILE.phone}
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} data-testid="contact-location">
                <MapPin size={16} /> {PROFILE.location} · {PROFILE.coordinates}
              </a>
              <a href={PROFILE.socials.github} target="_blank" rel="noreferrer" data-testid="contact-github-link">
                <Github size={16} /> github.com/Atharvingale
              </a>
              <a href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer" data-testid="contact-linkedin-link">
                <Linkedin size={16} /> linkedin.com/in/atharva-ingale2005
              </a>
              <a href={PROFILE.socials.leetcode} target="_blank" rel="noreferrer" data-testid="contact-leetcode-link">
                <Code2 size={16} /> leetcode.com/u/atharva_ingale
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={onSubmit} data-testid="contact-form">
            <div className="section-label" style={{ marginBottom: 18 }}>▹ compose_transmission --to=atharva</div>
            <div className="field">
              <label htmlFor="name">▸ IDENTIFIER</label>
              <input
                id="name" name="name" type="text"
                placeholder="> enter your name_"
                value={form.name} onChange={onChange}
                data-testid="contact-input-name"
                autoComplete="name"
              />
            </div>
            <div className="field">
              <label htmlFor="email">▸ RETURN_SIGNAL</label>
              <input
                id="email" name="email" type="email"
                placeholder="> enter email address_"
                value={form.email} onChange={onChange}
                data-testid="contact-input-email"
                autoComplete="email"
              />
            </div>
            <div className="field">
              <label htmlFor="message">▸ PAYLOAD</label>
              <textarea
                id="message" name="message" rows={5}
                placeholder="> type your message_"
                value={form.message} onChange={onChange}
                data-testid="contact-input-message"
              />
            </div>
            <button type="submit" className="btn solid" disabled={sending} data-testid="contact-submit-btn">
              {sending ? "TRANSMITTING..." : "TRANSMIT"} <Send size={14} />
            </button>
            {status.msg && (
              <div className={`form-msg ${status.state}`} data-testid="contact-form-msg">
                {status.msg}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

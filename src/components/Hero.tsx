import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import type { Profile, SocialLinks } from "../data/portfolio";

type HeroProps = {
  profile: Profile;
  links: SocialLinks;
};

export function Hero({ profile, links }: HeroProps) {
  return (
    <section id="top" className="hero">
      <div className="hero-grid" aria-hidden="true" />

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="eyebrow">Portfolio / Software + Cloud</p>
        <h1>Hey, I&apos;m Adam.</h1>
        <p className="hero-subtitle">{profile.role}</p>
        <p className="hero-copy">{profile.intro}</p>

        <div className="hero-actions">
          <a className="primary-button" href="#projects">
            View Projects
            <ArrowRight size={18} />
          </a>
          <a className="secondary-button" href="#contact">
            Contact Me
            <Mail size={18} />
          </a>
          <a className="ghost-button" href={links.resume} target="_blank" rel="noreferrer">
            Resume
          </a>
        </div>

        <div className="hero-links" aria-label="Social links">
          <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={19} />
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={19} />
          </a>
          <a href={`mailto:${links.email}`} aria-label="Email">
            <Mail size={19} />
          </a>
        </div>
      </motion.div>

      <motion.div
        className="hero-panel"
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="status-bar">
          <span />
          <span />
          <span />
        </div>
        <div className="code-card">
          <p>const adam = {"{"}</p>
          <p>
            &nbsp;&nbsp;school: <span>&quot;Texas A&amp;M&quot;</span>,
          </p>
          <p>
            &nbsp;&nbsp;focus: <span>&quot;SWE + cloud infrastructure&quot;</span>,
          </p>
          <p>
            &nbsp;&nbsp;building: <span>&quot;reliable systems&quot;</span>
          </p>
          <p>{"};"}</p>
        </div>
        <div className="signal-card">
          <span>Currently</span>
          <strong>Looking for full-time opportunities</strong>
        </div>
      </motion.div>

      <a className="scroll-cue" href="#about" aria-label="Scroll to about">
        <ArrowDown size={18} />
      </a>
    </section>
  );
}

import { motion } from "framer-motion";
import { Check, Copy, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import type { SocialLinks } from "../data/portfolio";

type ContactProps = {
  links: SocialLinks;
};

export function Contact({ links }: ContactProps) {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(links.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${links.email}`;
    }
  };

  return (
    <motion.section
      id="contact"
      className="contact-section"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div>
        <p className="eyebrow">Contact</p>
        <h2>Let&apos;s build something useful.</h2>
        <p>
          I am open to software engineering internships, project collaborations,
          and conversations about full-stack development, cloud infrastructure, or DevOps work.
        </p>
      </div>

      <div className="contact-actions">
        <a className="primary-button" href={`mailto:${links.email}`}>
          <Mail size={18} />
          Email Me
        </a>
        <button className="secondary-button" type="button" onClick={copyEmail}>
          {copied ? <Check size={18} /> : <Copy size={18} />}
          {copied ? "Copied" : "Copy Email"}
        </button>
      </div>

      <div className="contact-links">
        <a href={links.github} target="_blank" rel="noreferrer">
          <Github size={18} />
          GitHub
        </a>
        <a href={links.linkedin} target="_blank" rel="noreferrer">
          <Linkedin size={18} />
          LinkedIn
        </a>
        <a href={`mailto:${links.email}`}>
          <Mail size={18} />
          {links.email}
        </a>
      </div>
    </motion.section>
  );
}

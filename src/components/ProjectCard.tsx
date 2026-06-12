import { motion } from "framer-motion";
import { ArrowUpRight, Github, Star } from "lucide-react";
import type { Project } from "../data/portfolio";
import { SkillTag } from "./SkillTag";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      className={`project-card ${project.featured ? "featured" : ""}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.99 }}
    >
      <div className={`project-preview image-${project.imageFit ?? "cover"}`}>
        <motion.img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          initial={{ scale: 1.04 }}
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      <div className="project-body">
        <div className="project-heading">
          <h3>{project.title}</h3>
          {project.featured ? (
            <span className="featured-pill">
              <Star size={14} />
              Featured
            </span>
          ) : null}
        </div>
        <p>{project.description}</p>
        <div className="skill-list compact">
          {project.tech.map((tech) => (
            <SkillTag key={tech} label={tech} />
          ))}
        </div>
        <div className="project-links">
          {project.github ? (
            <a href={project.github} target="_blank" rel="noreferrer">
              <Github size={17} />
              GitHub
            </a>
          ) : null}
          {project.demo ? (
            <a href={project.demo} target="_blank" rel="noreferrer">
              <ArrowUpRight size={17} />
              Live Demo
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}

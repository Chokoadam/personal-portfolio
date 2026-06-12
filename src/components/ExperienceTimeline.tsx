import { BriefcaseBusiness } from "lucide-react";
import type { Experience } from "../data/portfolio";
import { SkillTag } from "./SkillTag";

type ExperienceTimelineProps = {
  items: Experience[];
};

export function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  return (
    <div className="timeline">
      {items.map((item) => (
        <article className="timeline-item" key={`${item.role}-${item.company}`}>
          <div className="timeline-marker" aria-hidden="true">
            <BriefcaseBusiness size={18} />
          </div>
          <div className="timeline-content">
            <div className="timeline-heading">
              <div>
                <p>{item.company}</p>
                <h3>{item.role}</h3>
              </div>
              <span>{item.dates}</span>
            </div>
            <ul>
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <div className="skill-list compact">
              {item.tech.map((tech) => (
                <SkillTag key={tech} label={tech} />
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

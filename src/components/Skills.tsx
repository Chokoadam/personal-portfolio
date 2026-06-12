import type { SkillGroup } from "../data/portfolio";
import { SkillTag } from "./SkillTag";

type SkillsProps = {
  skills: SkillGroup[];
};

export function Skills({ skills }: SkillsProps) {
  return (
    <div className="skills-grid">
      {skills.map((group) => (
        <article className="skill-group" key={group.title}>
          <h3>{group.title}</h3>
          <div className="skill-list">
            {group.skills.map((skill) => (
              <SkillTag key={skill} label={skill} />
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

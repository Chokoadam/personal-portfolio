import { motion } from "framer-motion";
import { GraduationCap, MapPin, Sparkles } from "lucide-react";
import type { Profile } from "../data/portfolio";

type AboutProps = {
  profile: Profile;
  currently: string[];
};

export function About({ profile, currently }: AboutProps) {
  return (
    <div className="about-layout">
      <div className="about-copy">
        {profile.bio.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <motion.aside
        className="about-card"
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
      >
        <div className="fact-row">
          <GraduationCap size={20} />
          <div>
            <span>Education</span>
            <strong>{profile.degree}</strong>
            <p>{profile.university}</p>
          </div>
        </div>
        <div className="fact-row">
          <MapPin size={20} />
          <div>
            <span>Based near</span>
            <strong>{profile.location}</strong>
          </div>
        </div>
        <div className="currently-card">
          <div className="currently-title">
            <Sparkles size={18} />
            <strong>Currently</strong>
          </div>
          <ul>
            {currently.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </motion.aside>
    </div>
  );
}

import { motion } from "framer-motion";

type HobbiesProps = {
  hobbies: string[];
};

export function Hobbies({ hobbies }: HobbiesProps) {
  return (
    <div className="hobby-grid">
      {hobbies.map((hobby, index) => (
        <motion.article
          className="hobby-card"
          key={hobby}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35, delay: index * 0.04 }}
          whileHover={{ y: -4 }}
        >
          <span>{String(index + 1).padStart(2, "0")}</span>
          <h3>{hobby}</h3>
        </motion.article>
      ))}
    </div>
  );
}

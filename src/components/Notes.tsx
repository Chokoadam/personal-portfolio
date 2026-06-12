import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Note } from "../data/portfolio";

type NotesProps = {
  notes: Note[];
};

export function Notes({ notes }: NotesProps) {
  return (
    <div className="notes-grid">
      {notes.map((note, index) => (
        <motion.article
          className="note-card"
          key={note.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          whileHover={{ y: -5 }}
        >
          <span>{note.category}</span>
          <h3>{note.title}</h3>
          <p>{note.description}</p>
          {note.href ? (
            <a href={note.href}>
              Read note
              <ArrowUpRight size={16} />
            </a>
          ) : null}
        </motion.article>
      ))}
    </div>
  );
}

import { AnimatePresence } from "framer-motion";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Hobbies } from "./components/Hobbies";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Section } from "./components/Section";
import { Skills } from "./components/Skills";
import { portfolio } from "./data/portfolio";

function App() {
  return (
    <AnimatePresence>
      <div className="app-shell">
        <Navbar links={portfolio.links} />
        <main>
          <Hero profile={portfolio.profile} links={portfolio.links} />
          <Section
            eyebrow="About"
            title="A builder's mindset with a student engine."
            description="I care about clean interfaces, dependable systems, and the infrastructure that helps software ship well."
            id="about"
          >
            <About profile={portfolio.profile} currently={portfolio.currently} />
          </Section>
          <Section
            eyebrow="Skills"
            title="Tools I use to turn ideas into software."
            description="A growing technical stack across frontend, backend, cloud infrastructure, DevOps, and developer tooling."
            id="skills"
          >
            <Skills skills={portfolio.skills} />
          </Section>
          <Section
            eyebrow="Projects"
            title="Here are some of my projects:"
            description="A selection of projects that I've built, contributed to, or find interesting."
            id="projects"
          >
            <Projects projects={portfolio.projects} />
          </Section>
          <Section
            eyebrow="Experience"
            title="Experience, coursework, and applied work."
            description="A timeline of my experience, including work, internships, and meaningful organizational involvement."
            id="experience"
          >
            <ExperienceTimeline items={portfolio.experience} />
          </Section>
          {/* <Section
            eyebrow="Writing"
            title="Notes, reflections, and technical thinking."
            description="Short-form writing gives projects context and makes the learning process visible."
            id="notes"
          >
            <Notes notes={portfolio.notes} />
          </Section> */}
          <Section
            eyebrow="Personal"
            title="Some of my hobbies:"
            // description="A professional portfolio can still feel human. These interests give the site some texture."
            id="hobbies"
          >
            <Hobbies hobbies={portfolio.hobbies} />
          </Section>
          <Contact links={portfolio.links} />
        </main>
        <Footer links={portfolio.links} />
      </div>
    </AnimatePresence>
  );
}

export default App;

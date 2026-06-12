import type { SocialLinks } from "../data/portfolio";

type FooterProps = {
  links: SocialLinks;
};

export function Footer({ links }: FooterProps) {
  return (
    <footer className="footer">
      <p>Adam Vasquez &copy; {new Date().getFullYear()}</p>
      <div>
        <a href={links.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={links.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={`mailto:${links.email}`}>Email</a>
      </div>
    </footer>
  );
}

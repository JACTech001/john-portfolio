import Link from "next/link";
import { ArrowDown, ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, ShieldCheck, Code2, GraduationCap, Menu } from "lucide-react";
import TechnologyOrbit from "@/components/TechnologyOrbit";

const projects = [
  {
    number: "01",
    name: "SACA-VS",
    category: "Blockchain · AI · Web application",
    description: "A secure academic certificate management and verification platform exploring blockchain-backed trust and AI-assisted workflows.",
    tags: ["React", "Node.js", "PostgreSQL", "Prisma"],
  },
  {
    number: "02",
    name: "Student Discussion Forum",
    category: "Community · Full-stack application",
    description: "A discussion and learning platform designed to bring conversations, study resources and student engagement into one place.",
    tags: ["React", "Firebase", "Firestore"],
  },
  {
    number: "03",
    name: "SOG",
    category: "Property discovery · Marketplace",
    description: "A marketplace concept focused on property discovery and pre-owned items, designed with room to grow beyond its initial market.",
    tags: ["Product design", "Web development"],
  },
];

const skillGroups = [
  { title: "Frontend", items: ["JavaScript", "React", "Next.js", "HTML", "CSS", "Tailwind CSS"] },
  { title: "Backend & data", items: ["Node.js", "Express", "PostgreSQL", "Prisma", "Firebase", "REST APIs"] },
  { title: "Tools & workflow", items: ["Git", "GitHub", "Postman", "VS Code", "Vercel"] },
  { title: "Security interests", items: ["Web application security", "Secure development", "Security fundamentals"] },
];

export default function Home() {
  return (
    <main>
      <div className="ambient-grid" aria-hidden="true" />
      <div className="portrait-backdrop" aria-hidden="true">
        <div className="portrait-backdrop__shade" />
        <div className="portrait-backdrop__glow" />
      </div>

      <header className="site-header">
        <Link className="brand" href="#home" aria-label="Abel John Chiemerie home">
          <span className="brand__mark">AJ.</span>
          <span className="brand__text">
            <strong>Abel John</strong>
            <small>Software Developer</small>
          </span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="#contact">Let’s talk <ArrowUpRight size={15} /></a>
        <button className="mobile-menu" aria-label="Navigation menu"><Menu size={22} /></button>
      </header>

      <section className="hero section-shell" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> COMPUTER SCIENCE GRADUATE</p>
          <h1>Building with <span>purpose.</span><br />Thinking about <span>security.</span></h1>
          <p className="hero-role">Software Developer <i /> Cybersecurity Enthusiast</p>
          <p className="hero-description">
            I build thoughtful digital experiences and practical software solutions,
            with a growing focus on the security behind the systems we depend on.
          </p>
          <div className="hero-actions">
            <a className="button button--primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
            <a className="text-link" href="#about">A little about me <ArrowDownRight size={17} /></a>
          </div>
          <div className="hero-socials" aria-label="Social links">
            <a href="https://github.com/JACTech001" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
            <a href="#contact" aria-label="LinkedIn details coming soon"><Linkedin size={18} /></a>
            <a href="#contact" aria-label="Contact"><Mail size={18} /></a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-visual__caption"><span>01 / 04</span><span>TECHNOLOGY ECOSYSTEM</span></div>
          <TechnologyOrbit />
          <p className="hero-visual__note">Curiosity keeps me building.</p>
        </div>
        <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
      </section>

      <section className="content-section section-shell about-section" id="about">
        <div className="section-kicker">01 — ABOUT</div>
        <div className="section-heading">
          <p className="eyebrow">A DEVELOPER WITH A SECURITY MINDSET</p>
          <h2>Technology should solve problems <span>and earn trust.</span></h2>
        </div>
        <div className="about-copy">
          <p>
            I’m Abel John Chiemerie, a Computer Science graduate interested in
            building useful, reliable and secure digital products. I enjoy taking
            ideas from a rough concept to a working application, learning how each
            layer fits together along the way.
          </p>
          <p>
            My development experience spans frontend interfaces, application
            logic, APIs and databases. I’m also actively growing my knowledge
            of cybersecurity and secure software practices.
          </p>
          <a className="text-link" href="#contact">Get in touch <ArrowUpRight size={16} /></a>
        </div>
      </section>

      <section className="content-section section-shell skills-section" id="skills">
        <div className="section-kicker">02 — TECHNOLOGY</div>
        <div className="section-heading section-heading--wide">
          <p className="eyebrow">TOOLS I BUILD WITH</p>
          <h2>A growing toolkit, <span>built through practice.</span></h2>
          <p className="section-intro">A selection of technologies I have used in projects and continue to develop my skills with.</p>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="skill-tags">
                {group.items.map((item) => <span key={item}>{item}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section section-shell projects-section" id="projects">
        <div className="section-kicker">03 — SELECTED WORK</div>
        <div className="section-heading section-heading--wide">
          <p className="eyebrow">IDEAS TURNED INTO SOFTWARE</p>
          <h2>Some things I’ve <span>worked on.</span></h2>
        </div>
        <div className="projects-list">
          {projects.map((project) => (
            <article className="project-row" key={project.number}>
              <span className="project-number">{project.number}</span>
              <div className="project-main">
                <p className="project-category">{project.category}</p>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="skill-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
              <span className="project-arrow" aria-hidden="true"><ArrowUpRight size={22} /></span>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section section-shell approach-section" id="approach">
        <div className="section-kicker">04 — APPROACH</div>
        <div className="approach-card">
          <div className="approach-icon"><ShieldCheck size={25} /></div>
          <div>
            <p className="eyebrow">DEVELOPMENT × SECURITY</p>
            <h2>Build thoughtfully.<br /><span>Protect what matters.</span></h2>
            <p>I’m interested in the space where software engineering and cybersecurity meet: creating products that are useful, dependable and designed with safety in mind.</p>
          </div>
          <div className="approach-decoration"><Code2 size={90} strokeWidth={0.7} /><GraduationCap size={54} strokeWidth={0.8} /></div>
        </div>
      </section>

      <section className="contact-section section-shell" id="contact">
        <div className="section-kicker">05 — CONTACT</div>
        <p className="eyebrow">HAVE A PROJECT OR OPPORTUNITY?</p>
        <h2>Let’s make something <span>meaningful.</span></h2>
        <p className="contact-copy">I’m open to conversations, collaborations and opportunities to grow as a developer.</p>
        <a className="button button--primary" href="#contact">Start a conversation <ArrowUpRight size={17} /></a>
        <div className="contact-footer">
          <span>© {new Date().getFullYear()} Abel John Chiemerie</span>
          <span>Designed with intention.</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </section>
    </main>
  );
}

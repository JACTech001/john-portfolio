import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowDownRight, ArrowUpRight, Mail, ShieldCheck, Code2, GraduationCap } from "lucide-react";
import { cacheLife } from "next/cache";
import TechnologyOrbit from "@/components/TechnologyOrbit";
import MobileNavigation from "@/components/MobileNavigation";

const projects = [
  {
    number: "01",
    name: "SACA-VS",
    category: "Blockchain · AI · Web application",
    description: "A secure academic certificate management and verification platform exploring blockchain-backed trust and AI-assisted workflows.",
    tags: ["React", "Node.js", "PostgreSQL", "Prisma"],
    github: "https://github.com/JACTech001/SACA-VS",
    demo: "https://saca-vs.vercel.app/",
    screenshot: "/images/screenshots/Macbook-Air-saca-vs.vercel.app.png",
    additionalScreenshots: ["/images/screenshots/Macbook-Air-saca-vs.vercel.app-dashbaord.png"],
  },
  {
    number: "02",
    name: "Student Discussion Forum",
    category: "Community · Full-stack application",
    description: "A discussion and learning platform designed to bring conversations, study resources and student engagement into one place.",
    tags: ["React", "Firebase", "Firestore"],
    github: "https://github.com/JACTech001/student-discussion-forum",
    demo: "https://sd-forum.vercel.app/",
    screenshot: "/images/screenshots/Macbook-Air-sd-forum.vercel.app.png",
    additionalScreenshots: ["/images/screenshots/Macbook-Air-sd-forum.vercel.app-dashboard.png"],
  },
  {
    number: "03",
    name: "SOG",
    category: "Property discovery · Marketplace",
    description: "A marketplace concept focused on property discovery and pre-owned items, designed with room to grow beyond its initial market.",
    tags: ["Product design", "Web development"],
    github: "https://github.com/JACTech001/SOG",
  },
];

const skillGroups = [
  { title: "Frontend", items: ["JavaScript", "React", "Next.js", "HTML", "CSS", "Tailwind CSS"] },
  { title: "Backend & data", items: ["Node.js", "Express", "PostgreSQL", "Prisma", "Firebase", "REST APIs"] },
  { title: "Tools & workflow", items: ["Git", "GitHub", "Postman", "VS Code", "Vercel"] },
  { title: "Security interests", items: ["Web application security", "Secure development", "Security fundamentals"] },
];

function SocialIcon({ name }) {
  const common = { viewBox: "0 0 24 24", width: 20, height: 20, fill: "currentColor", "aria-hidden": true };
  const paths = {
    github: <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.61 5.23-5.1 5.51.4.35.76 1.03.76 2.08V22c0 .29.2.63.77.52A11.1 11.1 0 0 0 12 .9Z" />,
    whatsapp: <path d="M20.5 3.5A11.8 11.8 0 0 0 2 17.7L.5 23.2l5.7-1.5A11.8 11.8 0 0 0 20.5 3.5ZM12 21a9.7 9.7 0 0 1-4.9-1.3l-.4-.2-3.4.9.9-3.3-.2-.4A9.8 9.8 0 1 1 12 21Zm5.4-7.3c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.4-2.3-1.4-.9-.8-1.5-1.7-1.7-2-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.7-1.6-1-2.2c-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.1 3c.2.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.1-1.4-.1-.2-.3-.3-.6-.4Z" />,
    x: <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.8 5.7 22H2.5l7.3-8.4L2 2h6.5l4.5 6.7L18.9 2Zm-1.1 18h1.7L7.5 3.9H5.7L17.8 20Z" />,
    linkedin: <path d="M5.2 3.2a2.1 2.1 0 1 1 0 4.2 2.1 2.1 0 0 1 0-4.2ZM3.4 9h3.6v11.6H3.4V9Zm5.8 0h3.4v1.6h.1c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.5v6.4H17v-5.7c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1v5.8H9.2V9Z" />
  };
  return <svg {...common}>{paths[name]}</svg>;
}

async function CurrentYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

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
          <span className="brand__text">
            <strong>Abel John Chiemerie</strong>
            <small>Software Developer</small>
          </span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="#contact">Let’s talk <ArrowUpRight size={15} /></a>
        <MobileNavigation />
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
            <a className="social-icon social-icon--github" href="https://github.com/JACTech001" target="_blank" rel="noreferrer" aria-label="GitHub"><SocialIcon name="github" /></a>
            <a className="social-icon social-icon--whatsapp" href="https://wa.me/2349068417314" target="_blank" rel="noreferrer" aria-label="WhatsApp"><SocialIcon name="whatsapp" /></a>
            <a className="social-icon social-icon--x" href="https://x.com/JACTech001" target="_blank" rel="noreferrer" aria-label="X"><SocialIcon name="x" /></a>
            <a className="social-icon social-icon--linkedin" href="#contact" title="Add your LinkedIn profile URL" aria-label="LinkedIn profile link to be added"><SocialIcon name="linkedin" /></a>
            <a className="social-icon social-icon--email" href="mailto:abelchiemerie001@gmail.com" aria-label="Email"><Mail size={19} /></a>
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
                {project.screenshot && (
                  <div className="project-gallery" aria-label={`${project.name} screenshots`}>
                    <a
                      className="project-gallery__main"
                      href={project.screenshot}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open full-size ${project.name} main screenshot`}
                    >
                      <Image
                        src={project.screenshot}
                        alt={`${project.name} application main screen`}
                        width={1600}
                        height={900}
                        sizes="(max-width: 640px) 100vw, 850px"
                      />
                      <span>Main preview</span>
                    </a>
                    {project.additionalScreenshots?.length > 0 && (
                      <div className="project-gallery__additional">
                        {project.additionalScreenshots.map((screenshot, index) => (
                          <a
                            href={screenshot}
                            target="_blank"
                            rel="noreferrer"
                            key={screenshot}
                            aria-label={`Open full-size ${project.name} additional screenshot ${index + 1}`}
                          >
                            <Image
                              src={screenshot}
                              alt={`${project.name} additional application screen ${index + 1}`}
                              width={600}
                              height={338}
                              sizes="(max-width: 640px) 50vw, 190px"
                            />
                            <span>Dashboard</span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )}
                <div className="skill-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <div className="project-links">
                  {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live preview <ArrowUpRight size={14} /></a>}
                  <a href={project.github} target="_blank" rel="noreferrer">GitHub repository <ArrowUpRight size={14} /></a>
                  {!project.demo && <span className="project-status">In development · No live demo yet</span>}
                </div>
              </div>
              <span className="project-arrow" aria-hidden="true"><ArrowUpRight size={22} /></span>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section section-shell experience-section" id="experience">
        <div className="section-kicker">04 — BACKGROUND</div>
        <div className="section-heading section-heading--wide">
          <p className="eyebrow">WHERE I’VE LEARNED AND GROWN</p>
          <h2>My journey in <span>technology.</span></h2>
          <p className="section-intro">A foundation in computer science, supported by practical experience and a commitment to continuous learning.</p>
        </div>
        <div className="experience-grid">
          <article className="experience-card">
            <div className="experience-card__top">
              <span className="experience-card__label">EDUCATION</span>
              <span className="experience-card__date">2026</span>
            </div>
            <h3>B.Sc. Computer Science</h3>
            <p className="experience-card__place">University of Nigeria, Nsukka</p>
            <p>Built a foundation in computing, software development, data management and the principles behind designing technology solutions.</p>
            <div className="education-project">
              <span>FINAL-YEAR PROJECT</span>
              <h4>Secure Academic Certificate Management and Verification System Using Blockchain Technology and Artificial Intelligence</h4>
              <p>Designed and developed a certificate management and verification solution focused on improving the integrity and trustworthiness of academic credentials through blockchain technology and AI-assisted processes.</p>
            </div>
          </article>
          <article className="experience-card">
            <div className="experience-card__top">
              <span className="experience-card__label">INDUSTRIAL TRAINING</span>
              <span className="experience-card__date">6 months</span>
            </div>
            <h3>SIWES Trainee</h3>
            <p className="experience-card__place">ICT Centre, University of Nigeria, Nsukka · Digitalization Unit</p>
            <p>Completed a six-month industrial training placement, gaining practical exposure to ICT-centre workflows and digital operations.</p>
          </article>
          <article className="experience-card experience-card--learning">
            <div className="experience-card__top">
              <span className="experience-card__label">CURRENT LEARNING</span>
              <span className="experience-card__date">Ongoing</span>
            </div>
            <h3>Cybersecurity & secure development</h3>
            <p className="experience-card__place">Independent learning</p>
            <p>Continuously developing my understanding of web application security, secure coding practices and the fundamentals of protecting digital systems.</p>
          </article>
        </div>
      </section>

      <section className="content-section section-shell approach-section" id="approach">
        <div className="section-kicker">05 — APPROACH</div>
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
        <div className="section-kicker">06 — CONTACT</div>
        <p className="eyebrow">HAVE A PROJECT OR OPPORTUNITY?</p>
        <h2>Let’s make something <span>meaningful.</span></h2>
        <p className="contact-copy">I’m open to conversations, collaborations and opportunities to grow as a developer.</p>
        <a className="button button--primary" href="mailto:abelchiemerie001@gmail.com?subject=Portfolio%20Enquiry">Email me <ArrowUpRight size={17} /></a>
        <div className="contact-details">
          <a href="mailto:abelchiemerie001@gmail.com"><Mail size={16} /> abelchiemerie001@gmail.com</a>
          <a href="https://wa.me/2349068417314" target="_blank" rel="noreferrer">WhatsApp: +234 906 841 7314 <ArrowUpRight size={14} /></a>
        </div>
        <div className="contact-footer">
          <span>© <CurrentYear /> Abel John Chiemerie</span>
          <span>Designed with intention.</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </section>
    </main>
  );
}

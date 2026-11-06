"use client";

const technologies = [
  {
    name: "JavaScript",
    logo: "https://cdn.simpleicons.org/javascript/F7DF1E",
    className: "orbit-tech--javascript",
  },
  {
    name: "React",
    logo: "https://cdn.simpleicons.org/react/61DAFB",
    className: "orbit-tech--react",
  },
  {
    name: "Next.js",
    logo: "https://cdn.simpleicons.org/nextdotjs/FFFFFF",
    className: "orbit-tech--next",
  },
  {
    name: "Node.js",
    logo: "https://cdn.simpleicons.org/nodedotjs/5FA04E",
    className: "orbit-tech--node",
  },
  {
    name: "PostgreSQL",
    logo: "https://cdn.simpleicons.org/postgresql/4169E1",
    className: "orbit-tech--postgres",
  },
  {
    name: "GitHub",
    logo: "https://cdn.simpleicons.org/github/FFFFFF",
    className: "orbit-tech--github",
  },
];

export default function TechnologyOrbit() {
  return (
    <div className="technology-orbit" aria-label="Selected technologies">
      <div className="orbit-ring orbit-ring--outer" />
      <div className="orbit-ring orbit-ring--middle" />
      <div className="orbit-ring orbit-ring--inner" />
      <div className="orbit-core">
        <span className="orbit-core__monogram">JACTech</span>
        <span className="orbit-core__label">BUILD · SECURE · CREATE</span>
      </div>
      {technologies.map((technology, index) => (
        <div
          className={`orbit-track orbit-track--${index + 1}`}
          key={technology.name}
        >
          <span className={`orbit-tech ${technology.className}`} title={technology.name}>
            <img
              className="orbit-tech__logo"
              src={technology.logo}
              alt=""
              aria-hidden="true"
              loading="lazy"
            />
            <span className="orbit-tech__name">{technology.name}</span>
          </span>
        </div>
      ))}
    </div>
  );
}

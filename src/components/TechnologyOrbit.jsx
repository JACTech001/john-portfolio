"use client";

const technologies = [
  { name: "JavaScript", short: "JS", className: "orbit-tech--javascript" },
  { name: "React", short: "⚛", className: "orbit-tech--react" },
  { name: "Next.js", short: "N", className: "orbit-tech--next" },
  { name: "Node.js", short: "node", className: "orbit-tech--node" },
  { name: "PostgreSQL", short: "PG", className: "orbit-tech--postgres" },
  { name: "GitHub", short: "GH", className: "orbit-tech--github" },
];

export default function TechnologyOrbit() {
  return (
    <div className="technology-orbit" aria-label="Selected technologies">
      <div className="orbit-ring orbit-ring--outer" />
      <div className="orbit-ring orbit-ring--middle" />
      <div className="orbit-ring orbit-ring--inner" />
      <div className="orbit-core">
        <span className="orbit-core__monogram">AJ</span>
        <span className="orbit-core__label">BUILD · SECURE · CREATE</span>
      </div>
      {technologies.map((technology, index) => (
        <div
          className={`orbit-track orbit-track--${index + 1}`}
          key={technology.name}
        >
          <span className={`orbit-tech ${technology.className}`} title={technology.name}>
            <span className="orbit-tech__symbol">{technology.short}</span>
            <span className="orbit-tech__name">{technology.name}</span>
          </span>
        </div>
      ))}
    </div>
  );
}

"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  ["01", "About", "#about"],
  ["02", "Skills", "#skills"],
  ["03", "Projects", "#projects"],
  ["04", "Experience", "#experience"],
  ["05", "Contact", "#contact"],
];

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mobile-navigation">
      <button
        className={`mobile-navigation__toggle${isOpen ? " is-open" : ""}`}
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-panel"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span>{isOpen ? "CLOSE" : "MENU"}</span>
        {isOpen ? <X size={19} /> : <Menu size={20} />}
      </button>
      {isOpen && (
        <nav className="mobile-navigation__panel" id="mobile-navigation-panel" aria-label="Mobile navigation">
          <div className="mobile-navigation__heading">
            <span>JACTECH</span>
            <span>EXPLORE THE PORTFOLIO</span>
          </div>
          <div className="mobile-navigation__links">
            {links.map(([number, label, href]) => (
              <a href={href} key={href} onClick={() => setIsOpen(false)}>
                <span className="mobile-navigation__number">{number}</span>
                <span>{label}</span>
                <ArrowUpRight size={17} />
              </a>
            ))}
          </div>
          <p className="mobile-navigation__footer">Abel John Chiemerie <span>·</span> Software Developer</p>
        </nav>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Contact", "#contact"],
];

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mobile-navigation">
      <button
        className="mobile-navigation__toggle"
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-panel"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <X size={21} /> : <Menu size={21} />}
      </button>
      {isOpen && (
        <nav className="mobile-navigation__panel" id="mobile-navigation-panel" aria-label="Mobile navigation">
          {links.map(([label, href]) => (
            <a href={href} key={href} onClick={() => setIsOpen(false)}>{label}</a>
          ))}
        </nav>
      )}
    </div>
  );
}

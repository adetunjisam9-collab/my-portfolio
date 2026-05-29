"use client";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "about", label: "About" },
    { href: "services", label: "Services" },
    { href: "projects", label: "Projects" },
    { href: "contact", label: "Contact" },
  ];

  const scrollToSection = (id) => {
    setMenuOpen(false);
    const section = document.getElementById(id);
    if (section) {
      const navHeight = 72;
      const top = section.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="w-full max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="font-bold text-base text-gray-900 hover:text-blue-600 transition duration-200">
          <span className="hidden sm:inline">Adetunji</span>
          <span className="sm:hidden">AS</span>
          <span className="text-blue-600">.</span>
        </button>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button key={link.href} onClick={() => scrollToSection(link.href)} className="relative text-sm text-gray-600 hover:text-blue-600 transition duration-200 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">
              {link.label}
            </button>
          ))}
          <a href="mailto:adetunjisam9@gmail.com" className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 hover:scale-105 transition duration-200">Let's Build</a>
        </div>
        <button className="md:hidden text-gray-600 hover:text-blue-600 transition duration-200 p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} className="w-5 h-5" />
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden px-4 pb-6 pt-2 flex flex-col gap-4 bg-white border-t border-gray-100">
          {links.map((link) => (
            <button key={link.href} onClick={() => scrollToSection(link.href)} className="text-gray-600 hover:text-blue-600 active:text-blue-700 transition duration-200 text-sm font-medium py-1 text-left">
              {link.label}
            </button>
          ))}
          <a href="mailto:adetunjisam9@gmail.com" className="bg-blue-600 text-white px-5 py-3 rounded-lg text-sm font-medium hover:bg-blue-700 active:scale-95 transition duration-200 text-center">Let's Build</a>
        </div>
      )}
    </nav>
  );
}

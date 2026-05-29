"use client";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg text-gray-900 hover:text-blue-600 transition duration-200">
          Adetunji<span className="text-blue-600">.</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="relative text-sm text-gray-600 hover:text-blue-600 transition duration-200 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">
              {link.label}
            </Link>
          ))}
          <a href="mailto:adetunjisam9@gmail.com" className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 hover:scale-105 transition duration-200">Hire Me</a>
        </div>
        <button className="md:hidden text-gray-600 hover:text-blue-600 transition duration-200" onClick={() => setMenuOpen(!menuOpen)}>
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} className="w-5 h-5" />
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4 bg-white border-t border-gray-100">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-gray-600 hover:text-blue-600 transition duration-200 text-sm font-medium" onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
          <a href="mailto:adetunjisam9@gmail.com" className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition duration-200 text-center">Hire Me</a>
        </div>
      )}
    </nav>
  );
}

"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl text-gray-900">
          Adetunji Samuel Adedeji<span className="text-blue-600">.</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="#projects" className="text-gray-600 hover:text-gray-900 transition">Projects</Link>
          <Link href="#about" className="text-gray-600 hover:text-gray-900 transition">About</Link>
          <Link href="#stack" className="text-gray-600 hover:text-gray-900 transition">Stack</Link>
          <Link href="#contact" className="text-gray-600 hover:text-gray-900 transition">Contact</Link>
          <a href="mailto:adetunjisam9@gmail.com" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">Hire Me</a>
        </div>
        <button className="md:hidden text-gray-600" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "X" : "Menu"}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 bg-white border-t border-gray-100">
          <Link href="#projects" className="text-gray-600">Projects</Link>
          <Link href="#stack" className="text-gray-600">Stack</Link>
          <Link href="#contact" className="text-gray-600">Contact</Link>
          <a href="mailto:you@email.com" className="text-blue-600 font-medium">Hire Me</a>
        </div>
      )}
    </nav>
  );
}

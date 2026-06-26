"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faBrain, faMicrochip, faRocket } from "@fortawesome/free-solid-svg-icons";

export default function SammeyEngitechCaseStudy() {
  const [coverOpen, setCoverOpen] = useState(false);

  const highlights = [
    { icon: faGlobe, stat: "8+", label: "Sections Built", description: "Hero, Services, Why Us, Process, Vision, Projects, Team and Contact — a complete company website." },
    { icon: faRocket, stat: "∞", label: "Vision & Ambition", description: "From web apps to AI, neurolink and robotics — the site communicates a company thinking decades ahead." },
    { icon: faBrain, stat: "AI", label: "Future-Forward Brand", description: "Sammey Engitech positions itself at the frontier of AI, embedded systems and brain-computer interfaces." },
    { icon: faMicrochip, stat: "100%", label: "Custom Built", description: "Every section, animation and interaction was designed and built from scratch — no templates used." },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition duration-200 text-sm">Back to Portfolio</Link>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-blue-50 text-blue-600 text-xs font-medium px-3 py-1 rounded-full">Company Website</span>
          <span className="bg-purple-50 text-purple-600 text-xs font-medium px-3 py-1 rounded-full">Next.js</span>
          <span className="bg-teal-50 text-teal-600 text-xs font-medium px-3 py-1 rounded-full">Dark Theme</span>
        </div>

        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">Sammey Engitech</h1>
        <p className="text-xl font-medium mb-8" style={{ color: "#00FFC6" }}>Building the future, one technology at a time.</p>

        <div className="flex gap-4 mb-12">
          <a href="https://sammey-engitech.vercel.app" target="_blank" className="text-white px-6 py-3 rounded-lg text-sm font-medium hover:opacity-90 active:scale-95 transition duration-200" style={{ background: "#00FFC6", color: "#030712" }}>Live Site</a>
          <a href="https://github.com/adetunjisam9-collab/sammey-engitech" target="_blank" className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 px-6 py-3 rounded-lg text-sm font-medium hover:border-blue-400 hover:text-blue-600 transition duration-200">View Code</a>
        </div>

        <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 mb-4 cursor-zoom-in" onClick={() => setCoverOpen(true)}>
          <Image src="/images/sammey/cover.png" alt="Sammey Engitech" width={800} height={500} className="w-full object-cover hover:scale-105 transition duration-300" />
        </div>
        <p className="text-gray-500 text-sm mb-16">Click image to expand</p>

        {coverOpen && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setCoverOpen(false)}>
            <div className="relative max-w-5xl w-full">
              <button className="absolute top-4 right-4 text-white text-2xl font-bold z-10" onClick={() => setCoverOpen(false)}>X</button>
              <Image src="/images/sammey/cover.png" alt="Sammey Engitech" width={1200} height={800} className="w-full rounded-xl object-contain" />
            </div>
          </div>
        )}

        <div className="flex flex-col gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Brief</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Sammey Engitech needed a company website that matched its ambition — bold, dark, alive with motion and instantly communicating that this is not just another tech company. The site needed to position the company at the frontier of technology while being clean and professional enough for serious clients and partners.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Approach</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">I chose a dark theme with electric teal (#00FFC6) as the accent color — immediately differentiating the site from typical agency websites that default to white and blue. The particle canvas animation in the hero creates a sense of a living, breathing technology company. The typing animation cycles through the company's core offerings — Web Applications, Mobile Apps, AI Systems, Embedded Chips, Robotics, The Future.</p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Every section was designed to tell a story — from current services to the bold Vision section that talks about neurolink and robotics, to the Process section that builds client trust. The scrolling marquee banner between sections reinforces the brand constantly.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Highlights</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 hover:border-teal-200 hover:shadow-sm transition duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(0,255,198,0.1)" }}>
                      <FontAwesomeIcon icon={item.icon} style={{ color: "#00FFC6", width: "14px", height: "14px" }} />
                    </div>
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">{item.stat}</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">{item.label}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Key Features</h2>
            <ul className="flex flex-col gap-3">
              {[
                "Particle canvas animation in the hero — 60 floating particles with teal connecting lines",
                "Typing animation cycling through all company offerings",
                "Scrolling marquee banner reinforcing the brand between sections",
                "Services grid with Font Awesome icons and teal glow on hover",
                "Why Us section with bold stats and trust-building copy",
                "Our Process section — Discover, Design, Build, Deploy",
                "Vision section covering AI, Neurolink, Robotics and Embedded Systems",
                "Team section with founder spotlight",
                "Rich footer with Company, Services and Connect columns",
                "WhatsApp floating button for instant client contact",
                "Fully mobile responsive with smooth scroll navigation",
                "AOS scroll animations throughout all sections",
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-300 text-sm">
                  <span className="w-2 h-2 rounded-full mt-1.5 shrink-0" style={{ background: "#00FFC6" }}></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "TypeScript", "Tailwind CSS", "Font Awesome", "AOS", "Canvas API", "Vercel"].map((tech, i) => (
                <span key={i} className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm px-4 py-2 rounded-lg font-medium hover:text-teal-600 transition duration-200" style={{ cursor: "default" }}>{tech}</span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What I Learned</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">Building Sammey Engitech taught me how to think like a brand designer, not just a developer. Every color choice, animation speed and copy decision was intentional — aimed at creating a specific feeling in the visitor. The particle canvas animation was my first deep dive into the HTML5 Canvas API and requestAnimationFrame loops.</p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Working with TypeScript on a Next.js project also sharpened my understanding of type safety in React — properly typing component props, refs and event handlers made the codebase more robust and easier to maintain as the site grew section by section.</p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800">
          <Link href="/" className="text-blue-600 hover:underline text-sm">Back to Portfolio</Link>
        </div>
      </div>
    </main>
  );
}

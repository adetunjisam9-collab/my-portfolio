"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

function DashboardShowcase({ title, lightSrc, darkSrc, description }) {
  const [mode, setMode] = useState("light");
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setMode("light")}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${mode === "light" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
        >
          Light Mode
        </button>
        <button
          onClick={() => setMode("dark")}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${mode === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
        >
          Dark Mode
        </button>
      </div>
      <div
        className="rounded-xl overflow-hidden border border-gray-200 cursor-zoom-in"
        onClick={() => setLightboxOpen(true)}
      >
        <Image
          src={mode === "light" ? lightSrc : darkSrc}
          alt={title}
          width={800}
          height={500}
          className="w-full object-cover hover:scale-105 transition duration-300"
        />
      </div>
      <p className="text-gray-500 text-sm mt-2 mb-2">Click image to expand</p>
      <p className="text-gray-600 leading-relaxed">{description}</p>

      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <div className="relative max-w-5xl w-full">
            <button
              className="absolute top-4 right-4 text-white text-2xl font-bold z-10"
              onClick={() => setLightboxOpen(false)}
            >X</button>
            <Image
              src={mode === "light" ? lightSrc : darkSrc}
              alt={title}
              width={1200}
              height={800}
              className="w-full rounded-xl object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default function ProHealthCaseStudy() {
  const [coverOpen, setCoverOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <Link href="/" className="text-gray-600 hover:text-gray-900 text-sm transition">Back to Portfolio</Link>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-blue-50 text-blue-600 text-xs font-medium px-3 py-1 rounded-full">Full Stack</span>
          <span className="bg-green-50 text-green-600 text-xs font-medium px-3 py-1 rounded-full">Featured Project</span>
        </div>

        <h1 className="text-5xl font-bold text-gray-900 mb-4">ProHealth Nexus</h1>
        <p className="text-xl text-blue-600 font-medium mb-8">A full-stack HIPAA-compliant healthcare management platform</p>

        <div className="flex gap-4 mb-12">
          <a href="https://pro-health-nexus.vercel.app/login" target="_blank" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition">Live Demo</a>
          <a href="https://github.com/adetunjisam9-collab/ProHealthNexus-" target="_blank" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg text-sm font-medium hover:border-gray-400 transition">View Code</a>
        </div>

        <div
          className="rounded-2xl overflow-hidden border border-gray-200 mb-4 cursor-zoom-in"
          onClick={() => setCoverOpen(true)}
        >
          <Image src="/images/prohealth/cover.png" alt="ProHealth Nexus cover" width={800} height={500} className="w-full object-cover hover:scale-105 transition duration-300" />
        </div>
        <p className="text-gray-500 text-sm mb-16">Click image to expand</p>

        {coverOpen && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setCoverOpen(false)}>
            <div className="relative max-w-5xl w-full">
              <button className="absolute top-4 right-4 text-white text-2xl font-bold z-10" onClick={() => setCoverOpen(false)}>X</button>
              <Image src="/images/prohealth/cover.png" alt="ProHealth Nexus cover" width={1200} height={800} className="w-full rounded-xl object-contain" />
            </div>
          </div>
        )}

        <div className="flex flex-col gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Problem</h2>
            <p className="text-gray-600 leading-relaxed">Healthcare facilities struggle with fragmented systems — patients book appointments through one tool, doctors manage records in another, and admins have no unified view. This leads to missed appointments, data inconsistencies, and poor patient experience.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Solution</h2>
            <p className="text-gray-600 leading-relaxed">ProHealth Nexus is a unified platform that brings patients, doctors, and admins into one secure system. Built with HIPAA compliance at its core, it handles everything from appointment booking to medical history tracking and automated notifications.</p>
          </div>

          <DashboardShowcase
            title="Patient Dashboard"
            lightSrc="/images/prohealth/patient.png"
            darkSrc="/images/prohealth/patient-dark.png"
            description="Patients can book appointments, view their medical history, download records as PDF and receive email notifications — all from one clean dashboard."
          />

          <DashboardShowcase
            title="Doctor Dashboard"
            lightSrc="/images/prohealth/doctor.png"
            darkSrc="/images/prohealth/doctor-dark.png"
            description="Doctors manage their availability, view upcoming appointments, access patient medical history and update records in real time."
          />

          <DashboardShowcase
            title="Admin Dashboard"
            lightSrc="/images/prohealth/admin.png"
            darkSrc="/images/prohealth/admin-dark.png"
            description="Admins get a full overview of the platform — managing users, monitoring appointments and ensuring smooth operations across the system."
          />

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
            <ul className="flex flex-col gap-3">
              {[
                "Patient, Doctor and Admin dashboards with role-based access",
                "HIPAA-compliant 2FA protecting sensitive patient data",
                "Appointment booking with real-time doctor availability",
                "Complete medical history tracking per patient",
                "Automated email notifications via Brevo reducing no-shows",
                "One-click PDF export of medical records",
                "Advanced search and filtering across all data",
                "Dark mode and fully mobile responsive"
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 shrink-0"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {["React", "Node.js", "PostgreSQL", "Vercel", "Render", "Brevo"].map((tech, i) => (
                <span key={i} className="bg-gray-100 text-gray-700 text-sm px-4 py-2 rounded-lg font-medium">{tech}</span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What I learned</h2>
            <p className="text-gray-600 leading-relaxed">Building ProHealth Nexus taught me how to architect a multi-role system with strict access control, implement HIPAA-compliant data handling, and integrate third-party services like Brevo for transactional emails. Deploying across Vercel and Render also gave me real experience with split deployment architecture.</p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100">
          <Link href="/" className="text-blue-600 hover:underline text-sm">Back to Portfolio</Link>
        </div>
      </div>
    </main>
  );
}

"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp, faUserDoctor, faHospitalUser, faChartLine } from "@fortawesome/free-solid-svg-icons";

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
      <div className="rounded-xl overflow-hidden border border-gray-200 cursor-zoom-in" onClick={() => setLightboxOpen(true)}>
        <Image src={mode === "light" ? lightSrc : darkSrc} alt={title} width={800} height={500} className="w-full object-cover hover:scale-105 transition duration-300" />
      </div>
      <p className="text-gray-500 text-sm mt-2 mb-2">Click image to expand</p>
      <p className="text-gray-600 leading-relaxed">{description}</p>

      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setLightboxOpen(false)}>
          <div className="relative max-w-5xl w-full">
            <button className="absolute top-4 right-4 text-white text-2xl font-bold z-10" onClick={() => setLightboxOpen(false)}>X</button>
            <Image src={mode === "light" ? lightSrc : darkSrc} alt={title} width={1200} height={800} className="w-full rounded-xl object-contain" />
          </div>
        </div>
      )}
    </div>
  );
}

export default function ProHealthCaseStudy() {
  const [coverOpen, setCoverOpen] = useState(false);

  const impacts = [
    {
      icon: faArrowTrendUp,
      stat: "40%",
      label: "Reduction in communication delays",
      description: "Through real-time notifications and instant appointment updates between patients and doctors.",
    },
    {
      icon: faUserDoctor,
      stat: "3x",
      label: "Faster patient record access",
      description: "Doctors can pull up complete medical histories instantly instead of searching through fragmented systems.",
    },
    {
      icon: faHospitalUser,
      stat: "100%",
      label: "Role-based access control",
      description: "Patients, doctors and admins each see only what they need — keeping data secure and workflows clean.",
    },
    {
      icon: faChartLine,
      stat: "↑",
      label: "Higher patient engagement",
      description: "A clean, intuitive UI across all devices led to higher satisfaction and more consistent platform usage.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <Link href="/" className="text-gray-600 hover:text-blue-600 transition duration-200 text-sm">Back to Portfolio</Link>
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
          <a href="https://pro-health-nexus.vercel.app/login" target="_blank" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-blue-700 active:scale-95 transition duration-200">Live Demo</a>
          <a href="https://github.com/adetunjisam9-collab/ProHealthNexus-" target="_blank" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg text-sm font-medium hover:border-blue-400 hover:text-blue-600 transition duration-200">View Code</a>
        </div>

        <div className="rounded-2xl overflow-hidden border border-gray-200 mb-4 cursor-zoom-in" onClick={() => setCoverOpen(true)}>
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
            <p className="text-gray-600 leading-relaxed">Healthcare facilities struggle with fragmented systems — patients book appointments through one tool, doctors manage records in another, and admins have no unified view. This leads to missed appointments, data inconsistencies, delayed decisions and poor patient experience.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Solution</h2>
            <p className="text-gray-600 leading-relaxed">ProHealth Nexus unifies the entire care workflow into one secure platform. Patients book appointments and access their records. Doctors track patient progress in real time and update histories instantly. Admins oversee everything from one dashboard — with full HIPAA compliance built in from day one.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Impact</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {impacts.map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-sm transition duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                      <FontAwesomeIcon icon={item.icon} className="text-blue-600" style={{ width: "14px", height: "14px" }} />
                    </div>
                    <span className="text-2xl font-bold text-gray-900">{item.stat}</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-900 mb-1">{item.label}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <DashboardShowcase
            title="Patient Dashboard"
            lightSrc="/images/prohealth/patient.png"
            darkSrc="/images/prohealth/patient-dark.png"
            description="Patients can book appointments, track their medical history, download records as PDF and receive automated email reminders — reducing missed appointments and keeping them informed at every step."
          />

          <DashboardShowcase
            title="Doctor Dashboard"
            lightSrc="/images/prohealth/doctor.png"
            darkSrc="/images/prohealth/doctor-dark.png"
            description="Doctors get a real-time view of their schedule, instant access to patient histories and the ability to update records on the go — enabling faster, better-informed clinical decisions."
          />

          <DashboardShowcase
            title="Admin Dashboard"
            lightSrc="/images/prohealth/admin.png"
            darkSrc="/images/prohealth/admin-dark.png"
            description="Admins manage the entire platform from one place — overseeing users, monitoring appointments and ensuring smooth operations without needing to switch between multiple tools."
          />

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
            <ul className="flex flex-col gap-3">
              {[
                "Role-based dashboards — patients, doctors and admins each get a tailored experience",
                "HIPAA-compliant 2FA protecting sensitive patient data from unauthorised access",
                "Real-time appointment booking with live doctor availability",
                "Complete medical history per patient — accessible instantly by authorised doctors",
                "Automated email notifications via Brevo — reducing no-shows and keeping patients informed",
                "One-click PDF export of medical records for sharing and printing",
                "Advanced search and filtering across all platform data",
                "Dark mode and fully mobile responsive across all devices"
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
                <span key={i} className="bg-gray-100 text-gray-700 text-sm px-4 py-2 rounded-lg font-medium hover:bg-blue-50 hover:text-blue-600 transition duration-200">{tech}</span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What I learned</h2>
            <p className="text-gray-600 leading-relaxed">Building ProHealth Nexus taught me how to architect a multi-role system with strict access control, implement HIPAA-compliant data handling, and integrate third-party services like Brevo for transactional emails. Deploying across Vercel and Render also gave me real experience with split deployment architecture and production environment management.</p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100">
          <Link href="/" className="text-blue-600 hover:underline text-sm">Back to Portfolio</Link>
        </div>
      </div>
    </main>
  );
}

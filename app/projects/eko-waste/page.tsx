"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp, faUsers, faTrophy, faMapLocationDot, faServer, faDatabase, faCode } from "@fortawesome/free-solid-svg-icons";

function DashboardShowcase({ title, src, description }: { title: string; src: string; description: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{title}</h2>
      <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 cursor-zoom-in mb-3" onClick={() => setOpen(true)}>
        <Image src={src} alt={title} width={800} height={500} className="w-full object-cover hover:scale-105 transition duration-300" />
      </div>
      <p className="text-gray-500 dark:text-gray-400 text-xs mb-2">Click image to expand</p>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">{description}</p>
      {open && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setOpen(false)}>
          <div className="relative max-w-5xl w-full">
            <button className="absolute top-4 right-4 text-white text-2xl font-bold z-10" onClick={() => setOpen(false)}>X</button>
            <Image src={src} alt={title} width={1200} height={800} className="w-full rounded-xl object-contain" />
          </div>
        </div>
      )}
    </div>
  );
}

export default function EkoWasteCaseStudy() {
  const [coverOpen, setCoverOpen] = useState(false);

  const impacts = [
    { icon: faMapLocationDot, stat: "20", label: "LGAs Covered in Lagos", description: "EKO WASTE serves all 20 Local Government Areas across Lagos State — reaching residents citywide." },
    { icon: faUsers, stat: "3", label: "User Roles Supported", description: "Residents, Collectors and Admins each get a tailored dashboard with role-specific features and access control." },
   { icon: faTrophy, stat: "#1", label: "Gamified Clean Lagos", description: "Residents earn coins for every pickup — creating healthy competition and incentivizing responsible waste disposal." },
    { icon: faArrowTrendUp, stat: "100%", label: "Real-time Tracking", description: "Collectors mark pickups complete in real time — residents and admins see updates instantly without page reload." },
  ];

  const stack = [
    { icon: faCode, label: "Frontend", items: ["React", "Vite", "Tailwind CSS", "React Router", "Axios"] },
    { icon: faServer, label: "Backend", items: ["Node.js", "Express.js", "JWT Auth", "Role-based Middleware", "Render"] },
    { icon: faDatabase, label: "Database", items: ["PostgreSQL", "Prisma ORM", "Supabase", "7 data models", "Auto migrations"] },
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
          <span className="bg-green-50 text-green-600 text-xs font-medium px-3 py-1 rounded-full">Civic Tech</span>
          <span className="bg-blue-50 text-blue-600 text-xs font-medium px-3 py-1 rounded-full">Featured</span>
          <span className="bg-yellow-50 text-yellow-600 text-xs font-medium px-3 py-1 rounded-full">Lagos, Nigeria</span>
        </div>

        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-2">EKO WASTE</h1>
        <p className="text-sm text-gray-400 dark:text-gray-500 mb-4 uppercase tracking-widest">Clean Lagos, Tracked.</p>
        <p className="text-xl text-green-600 font-medium mb-8">Gamified waste management platform connecting Lagos residents, collectors and admins</p>

        <div className="flex gap-4 mb-12">
          <a href="https://eko-waste.vercel.app/" target="_blank" className="bg-green-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-green-700 active:scale-95 transition duration-200">Live Demo</a>
          <a href="https://github.com/adetunjisam9-collab/eko-waste" target="_blank" className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 px-6 py-3 rounded-lg text-sm font-medium hover:border-green-400 hover:text-green-600 transition duration-200">View Code</a>
        </div>

        <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 mb-4 cursor-zoom-in" onClick={() => setCoverOpen(true)}>
          <Image src="/images/eko-waste/cover.png" alt="EKO WASTE landing page" width={800} height={500} className="w-full object-cover hover:scale-105 transition duration-300" />
        </div>
        <p className="text-gray-500 text-sm mb-16">Click image to expand</p>

        {coverOpen && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setCoverOpen(false)}>
            <div className="relative max-w-5xl w-full">
              <button className="absolute top-4 right-4 text-white text-2xl font-bold z-10" onClick={() => setCoverOpen(false)}>X</button>
              <Image src="/images/eko-waste/cover.png" alt="EKO WASTE cover" width={1200} height={800} className="w-full rounded-xl object-contain" />
            </div>
          </div>
        )}

        <div className="flex flex-col gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Problem</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Waste management in Lagos is a critical public health challenge. Residents have no reliable way to schedule pickups, waste collectors operate without coordination or accountability, and there is no system to track whether waste was actually collected. The result is overflowing streets, frustrated residents, and a disconnected chain between the people who need waste removed and the people responsible for removing it.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Solution</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">EKO WASTE is a smart, gamified three-tier waste management platform that connects residents, collectors and admins in one unified system. The platform brings accountability, transparency and incentive to the waste collection process across all 20 LGAs in Lagos.</p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Residents book pickup appointments and earn coins for every successful collection. Admins receive notifications and assign the right collector to each job. Collectors view their assigned jobs, update statuses in real time, and mark pickups complete — triggering instant coin rewards and notifications for the resident. The resident with the most coins is crowned Lagos's cleanest resident.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Impact</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {impacts.map((item, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 hover:border-green-200 hover:shadow-sm transition duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-green-50 dark:bg-green-900 rounded-lg flex items-center justify-center">
                      <FontAwesomeIcon icon={item.icon} className="text-green-600 dark:text-green-400" style={{ width: "14px", height: "14px" }} />
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
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How It Works</h2>
            <div className="flex flex-col gap-4">
              {[
                { step: "01", title: "Resident books a pickup", desc: "Resident selects waste type, date, time slot, address and LGA zone — booked in under a minute." },
                { step: "02", title: "Admin assigns a collector", desc: "Admin receives a notification, reviews the booking and assigns the most suitable collector for that LGA." },
                { step: "03", title: "Collector marks job complete", desc: "Collector views assigned jobs, goes to the location and marks the pickup as collected in real time." },
                { step: "04", title: "Resident earns reward coins", desc: "The system automatically awards coins to the resident, updates the leaderboard and sends a notification." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                  <span className="text-2xl font-bold text-green-600 opacity-40 shrink-0">{item.step}</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{item.title}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <DashboardShowcase
            title="Landing Page"
            src="/images/eko-waste/landing2.png"
            description="The EKO WASTE landing page clearly communicates the value proposition — book pickups, track collectors and earn rewards. Clean, green and instantly trustworthy."
          />

          <DashboardShowcase
            title="Resident Dashboard"
            src="/images/eko-waste/resident.png"
            description="Residents see their active pickups, appointment statuses and current reward coin balance — all in one clean dashboard. One click to book a new pickup."
          />

          <DashboardShowcase
            title="Resident Profile"
            src="/images/eko-waste/resident-profile.png"
            description="Residents can view and update their profile details, LGA zone and see their total reward points — gamifying responsible waste disposal."
          />

          <DashboardShowcase
            title="Book a Pickup"
            src="/images/eko-waste/booking.png"
            description="The booking form lets residents select waste type (General, Recyclable, Organic, Electronic), date, time slot, address and LGA zone in seconds."
          />

          <DashboardShowcase
            title="Admin Dashboard"
            src="/images/eko-waste/admin.png"
            description="Admins get a full overview of all bookings — filterable by status (Pending, Scheduled, En Route, Collected, Missed, Cancelled). They assign collectors directly from this view."
          />

          <DashboardShowcase
            title="Admin Profile"
            src="/images/eko-waste/admin-profile.png"
            description="Admin profile management with full details, LGA zone assignment and password change — keeping admin accounts secure and up to date."
          />

          <DashboardShowcase
            title="Collector Dashboard"
            src="/images/eko-waste/collector.png"
            description="Collectors see all their assigned pickup jobs with resident details, addresses, time slots and current status — enabling efficient route planning and real-time status updates."
          />

          <DashboardShowcase
            title="Collector Profile"
            src="/images/eko-waste/collector-profile.png"
            description="Collectors manage their own profiles and LGA zone assignments — ensuring they are always matched to the right area for pickups."
          />

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">System Architecture</h2>
            <div className="p-6 rounded-2xl border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 mb-6">
              <p className="text-sm font-mono text-gray-600 dark:text-gray-300 leading-relaxed">
                [ Frontend: React + Vite ] &lt;-- HTTPS / JWT --&gt; [ Backend: Node.js + Express ] &lt;-- Prisma --&gt; [ Database: PostgreSQL ]<br />
                &nbsp;&nbsp;&nbsp;&nbsp;Vercel&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Render&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Supabase
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {stack.map((layer, i) => (
                <div key={i} className="p-5 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900">
                  <div className="flex items-center gap-2 mb-3">
                    <FontAwesomeIcon icon={layer.icon} className="text-green-600 w-4 h-4" />
                    <p className="text-sm font-bold text-gray-900 dark:text-white">{layer.label}</p>
                  </div>
                  <ul className="flex flex-col gap-1">
                    {layer.items.map((item, j) => (
                      <li key={j} className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-2">
                        <span className="w-1 h-1 bg-green-600 rounded-full shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Key Features</h2>
            <ul className="flex flex-col gap-3">
              {[
                "Three role-based dashboards — Resident, Collector and Admin with strict JWT middleware access control",
                "Pickup appointment booking with waste type, date, time slot, address and LGA zone selection",
                "Real-time admin notification on every new booking — instant collector assignment workflow",
                "Collector status updates (Pending → Scheduled → En Route → Collected) with no page reload",
                "Coin reward system — residents earn points per pickup, calculated by waste weight × 2",
                "Cleanest resident leaderboard — gamifying responsible waste disposal across Lagos",
                "Waste logs per appointment — tracking actual weight collected and points awarded",
                "Notification system — in-app alerts sent to residents on pickup completion",
                "Covers all 20 LGAs across Lagos State",
                "Full profile management for all three user roles",
                "Mobile responsive across all devices",
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-300 text-sm">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-1.5 shrink-0"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What I Learned</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">EKO WASTE pushed me to think beyond just building features — I had to think about how a real civic system works end to end. Designing role-based access control with JWT middleware taught me how to architect secure multi-user systems where each role sees only what they need.</p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">Using Prisma as an ORM gave me a new perspective on database management — writing type-safe database queries and managing migrations with schema changes was a significant upgrade from raw SQL. The seven-table relational schema (User, Collector, LgaZone, Appointment, WasteLog, DumpReport, Notification) taught me how to design for real-world complexity.</p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">The gamification aspect — designing the coin reward system and leaderboard — pushed me to think about behavioral design and user engagement, not just functionality. Building something that could genuinely help Lagos became a strong personal motivation throughout the project.</p>
          </div>

          <div className="p-6 rounded-2xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950">
            <p className="text-sm font-semibold text-green-700 dark:text-green-400 mb-2">Future Roadmap</p>
            <ul className="flex flex-col gap-2">
              {[
                "Illegal dumping report system with geolocation (schema already modeled)",
                "Live collector map with Leaflet.js",
                "LAWMA Government Dashboard for Lagos State waste authority",
                "Analytics charts with Chart.js for admin insights",
                "Push notifications for mobile users",
              ].map((item, i) => (
                <li key={i} className="text-sm text-green-700 dark:text-green-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800">
          <Link href="/" className="text-blue-600 hover:underline text-sm">Back to Portfolio</Link>
        </div>
      </div>
    </main>
  );
}

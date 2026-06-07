import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faHospital, faChartBar, faLink, faRocket, faLock } from "@fortawesome/free-solid-svg-icons";
import RippleButton from "./RippleButton";

export default function Services() {
  const services = [
    { icon: faGlobe, title: "Full Stack Web Apps", description: "End-to-end web applications built with React, Node.js and PostgreSQL. From database design to deployment — I handle everything." },
    { icon: faHospital, title: "Healthcare Software", description: "HIPAA-compliant platforms for hospitals, clinics and health startups. Patient management, appointment booking, medical records and more." },
    { icon: faChartBar, title: "Admin Dashboards", description: "Clean, powerful dashboards that give businesses full visibility and control over their data, users and operations." },
    { icon: faLink, title: "API Development", description: "Secure and scalable REST APIs that power your frontend, mobile app or third-party integrations." },
    { icon: faRocket, title: "Deployment & DevOps", description: "I deploy and maintain your app on Vercel, Render or any cloud platform — with proper environment setup and monitoring." },
    { icon: faLock, title: "Authentication & Security", description: "Secure login systems with 2FA, role-based access control and industry-standard security practices built in from day one." },
  ];

  return (
    <section id="services" className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <div data-aos="fade-up">
          <div className="section-divider"></div>
          <p className="text-blue-600 font-medium text-xs uppercase tracking-wide mb-1">What I offer</p>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Services</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-10 max-w-xl text-sm">Everything you need to take your idea from concept to a live, production-ready product.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5 hover:border-blue-300 hover:shadow-md transition duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-blue-50 dark:bg-blue-900 rounded-lg flex items-center justify-center shrink-0">
                  <FontAwesomeIcon icon={service.icon} className="text-blue-600 dark:text-blue-400" style={{ width: "14px", height: "14px" }} />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{service.title}</h3>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
        <div data-aos="fade-up" className="mt-10 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">Have something specific in mind?</p>
          <RippleButton href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition inline-block">Discuss your project</RippleButton>
        </div>
      </div>
    </section>
  );
}

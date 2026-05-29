import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faGraduationCap, faLaptopCode, faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right" className="flex flex-col items-center md:items-start">
            <div className="w-48 h-48 rounded-2xl bg-blue-600 flex items-center justify-center mb-6">
              <span className="text-white text-6xl font-bold">AS</span>
            </div>
            <div className="flex flex-col gap-3 w-full">
              <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3">
                <FontAwesomeIcon icon={faLocationDot} className="text-blue-600 w-4" />
                <span className="text-gray-700 text-sm">Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3">
                <FontAwesomeIcon icon={faGraduationCap} className="text-blue-600 w-4" />
                <span className="text-gray-700 text-sm">B.Sc Computer Science, LASU</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3">
                <FontAwesomeIcon icon={faLaptopCode} className="text-blue-600 w-4" />
                <span className="text-gray-700 text-sm">2 years coding experience</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3">
                <FontAwesomeIcon icon={faCircleCheck} className="text-green-500 w-4" />
                <span className="text-gray-700 text-sm">Available for freelance work</span>
              </div>
            </div>
          </div>
          <div data-aos="fade-left">
            <p className="text-blue-600 font-medium text-sm uppercase tracking-wide mb-2">About Me</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Turning ideas into real digital products</h2>
            <p className="text-gray-600 leading-relaxed mb-4">I am a Full-Stack Developer based in Lagos, Nigeria, specializing in building high-performance, secure, and scalable enterprise web applications. With a rigorous background in Computer Science from Lagos State University, I bridge the gap between complex software architecture and seamless user experiences.</p>
            <p className="text-gray-600 leading-relaxed mb-4">My core expertise lies in the PERN Stack (PostgreSQL, Express.js, React, Node.js). I specialize in designing robust relational database schemas, building optimized SQL queries, and architecting clean, secure APIs tailored to handle complex, multi-user logic.</p>
            <p className="text-gray-600 leading-relaxed mb-4">Flagship Project:
ProHealth Nexus; An enterprise-grade, secure healthcare management ecosystem that orchestrates data flow between patients, medical practitioners, and administrative teams. Built entirely from scratch, this application demonstrates my ability to deliver multi-tier platforms that prioritize ironclad data compliance and relational database efficiency
.</p>
            <p className="text-gray-600 leading-relaxed mb-8">Whether you are a startup launching a disruptive product, a small business scaling operations, or an organization looking to automate your workflow, I deliver reliable digital infrastructure engineered to solve real business problems. Let’s build something built to last.</p>
            <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition inline-block">Work with me</a>
          </div>
        </div>
      </div>
    </section>
  );
}

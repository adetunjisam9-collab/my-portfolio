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
            <p className="text-gray-600 leading-relaxed mb-4">I am Adetunji Samuel Adedeji, a full stack developer based in Lagos, Nigeria. I studied Computer Science at Lagos State University and have spent the last 2 years building real-world web applications from the ground up.</p>
            <p className="text-gray-600 leading-relaxed mb-4">I specialise in building scalable, secure and user-friendly web apps using React, Node.js and PostgreSQL. My most recent project, ProHealth Nexus, is a HIPAA-compliant healthcare management platform serving patients, doctors and admins — built and deployed entirely by me.</p>
            <p className="text-gray-600 leading-relaxed mb-8">I work with startups, small businesses, hospitals and established organisations who need reliable software built right. I care deeply about clean code, great user experience and delivering products that actually solve problems.</p>
            <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition inline-block">Work with me</a>
          </div>
        </div>
      </div>
    </section>
  );
}

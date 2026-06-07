import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faGraduationCap, faLaptopCode, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import RippleButton from "./RippleButton";

export default function About() {
  return (
    <section id="about" className="py-16 px-6 bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div data-aos="fade-right" className="flex flex-col items-center md:items-start">
            <div className="w-36 h-36 rounded-2xl bg-blue-600 flex items-center justify-center mb-5">
              <span className="text-white text-5xl font-bold">AS</span>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-xl px-4 py-2.5">
                <FontAwesomeIcon icon={faLocationDot} className="text-blue-600 w-4" />
                <span className="text-gray-700 dark:text-gray-200 text-sm">Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-xl px-4 py-2.5">
                <FontAwesomeIcon icon={faGraduationCap} className="text-blue-600 w-4" />
                <span className="text-gray-700 dark:text-gray-200 text-sm">B.Sc Computer Science, LASU</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-xl px-4 py-2.5">
                <FontAwesomeIcon icon={faLaptopCode} className="text-blue-600 w-4" />
                <span className="text-gray-700 dark:text-gray-200 text-sm">2 years coding experience</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-xl px-4 py-2.5">
                <FontAwesomeIcon icon={faCircleCheck} className="text-green-500 w-4" />
                <span className="text-gray-700 dark:text-gray-200 text-sm">Available for freelance work</span>
              </div>
            </div>
          </div>
          <div data-aos="fade-left">
            <div className="section-divider"></div>
            <p className="text-blue-600 font-medium text-xs uppercase tracking-wide mb-1">About Me</p>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Turning ideas into real digital products</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3 text-sm">I am Adetunji Samuel Adedeji, a full stack developer based in Lagos, Nigeria. I have always been a deeply creative person — someone who sees a problem and immediately starts thinking about how to solve it differently.</p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3 text-sm">Growing up in Nigeria, I watched foreign films and saw how far technology had transformed healthcare, education and transportation in other countries. It made me ask one question — why not here? Nigeria has the talent, the need and the potential. What it needs are builders willing to show up and do the work. As a Computer Science graduate from Lagos State University, I decided to be one of those builders.</p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3 text-sm">That is why I built ProHealth Nexus — not just as a project, but as proof that world-class healthcare software can be built right here in Nigeria, for Nigeria and beyond. I specialise in React, Node.js and PostgreSQL, and I bring both technical skill and creative problem-solving to everything I build.</p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-5 text-sm">Looking ahead, I am excited about AI, mobile apps, fintech and healthtech — areas where great software can change millions of lives. My mission is simple: use technology to help Nigeria and Africa close the gap with the rest of the world, one product at a time.</p>
            <RippleButton href="#contact" className="bg-blue-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition duration-200 inline-block">Let's Create Together</RippleButton>
          </div>
        </div>
      </div>
    </section>
  );
}

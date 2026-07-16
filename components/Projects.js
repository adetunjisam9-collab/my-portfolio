import projects from "@/data/projects";
import Link from "next/link";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-14 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <div data-aos="fade-up">
          <div className="section-divider"></div>
          <p className="text-blue-600 font-medium text-sm uppercase tracking-wide mb-2">My Work</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Projects</h2>
          <p className="text-gray-500 text-sm mb-8 max-w-xl">Real-world applications built from scratch and designed, developed and deployed.</p>
        </div>

        <div className="flex flex-col gap-6 mb-10">
          {featured.map((project) => (
            <div data-aos="fade-up" key={project.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-blue-200 hover:shadow-md transition duration-300">
              <div className="p-7">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-blue-50 text-blue-600 text-xs font-medium px-3 py-1 rounded-full">{project.category}</span>
                  <span className="bg-green-50 text-green-600 text-xs font-medium px-3 py-1 rounded-full">Featured</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{project.name}</h3>
                <p className="text-blue-600 font-medium mb-3 text-sm">{project.tagline}</p>
                <p className="text-gray-500 leading-relaxed mb-6 text-sm">{project.description}</p>
                <div className="mb-6">
                  <p className="text-sm font-medium text-gray-700 mb-2">Key Features</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                  <p className="text-sm font-medium text-gray-700 mb-2">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-lg font-medium hover:bg-blue-50 hover:text-blue-600 transition duration-200 cursor-default">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <a href={project.liveUrl} target="_blank" className="bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 hover:scale-105 transition duration-200">Live Demo</a>
                  <a href={project.githubUrl} target="_blank" className="border border-gray-300 text-gray-700 px-5 py-2.5 rounded-lg text-sm font-medium hover:border-blue-400 hover:text-blue-600 transition duration-200">View Code</a>
                  <Link href={"/projects/" + project.id} className="group flex items-center gap-1 text-blue-600 text-sm font-medium hover:gap-3 transition-all duration-300">
                    <span className="group-hover:tracking-wide transition-all duration-300">Case Study</span>
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {others.length > 0 && (
          <div>
            <h3 data-aos="fade-up" className="text-xl font-bold text-gray-900 mb-6">Other Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {others.map((project, i) => (
                <div data-aos="fade-up" data-aos-delay={i * 100} key={project.id} className="bg-white rounded-2xl border border-gray-200 p-5 hover:border-blue-200 hover:shadow-md transition duration-300 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-blue-50 text-blue-600 text-xs font-medium px-3 py-1 rounded-full">{project.category}</span>
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">{project.name}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.tagline}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.slice(0, 3).map((tech, i) => (
                        <span key={i} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-lg font-medium">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-4">
                    <a href={project.liveUrl} target="_blank" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-xs font-medium hover:bg-blue-700 transition duration-200">Live Demo</a>
                    <a href={project.githubUrl} target="_blank" className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-xs font-medium hover:border-blue-400 hover:text-blue-600 transition duration-200">View Code</a>
                    <Link href={"/projects/" + project.id} className="group flex items-center gap-1 text-blue-600 text-xs font-medium hover:gap-2 transition-all duration-300">
                      <span className="group-hover:tracking-wide transition-all duration-300">Case Study</span>
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

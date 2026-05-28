import projects from "@/data/projects";
import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <p className="text-blue-600 font-medium text-sm uppercase tracking-wide mb-2">My Work</p>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
        <p className="text-gray-500 text-lg mb-16 max-w-xl">Real-world applications built from scratch — designed, developed and deployed.</p>

        <div className="flex flex-col gap-12">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-blue-50 text-blue-600 text-xs font-medium px-3 py-1 rounded-full">{project.category}</span>
                  {project.featured && (
                    <span className="bg-green-50 text-green-600 text-xs font-medium px-3 py-1 rounded-full">Featured</span>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{project.tagline}</p>
                <p className="text-gray-500 leading-relaxed mb-8">{project.description}</p>

                <div className="mb-8">
                  <p className="text-sm font-medium text-gray-700 mb-3">Key Features</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <p className="text-sm font-medium text-gray-700 mb-3">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-lg font-medium">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <a href={project.liveUrl} target="_blank" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition">Live Demo</a>
                  <a href={project.githubUrl} target="_blank" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg text-sm font-medium hover:border-gray-400 transition">View Code</a>
                  <Link href={"/projects/" + project.id} className="text-blue-600 text-sm font-medium flex items-center gap-1 hover:underline">Case Study →</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

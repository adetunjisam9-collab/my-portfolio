export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-blue-600 font-medium mb-4 tracking-wide uppercase text-sm">
          Available for freelance work
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          I build full-stack
          <br />
          <span className="text-blue-600">web applications</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Hi, I am <span className="text-gray-900 font-medium">Adetunji Samuel Adedeji</span>. I design and build scalable web apps with React, Node.js and PostgreSQL.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition text-lg">View My Work</a>
          <a href="#contact" className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-medium hover:border-gray-400 transition text-lg">Get In Touch</a>
        </div>
        <div className="mt-16 flex items-center justify-center gap-10 text-center">
          <div>
            <p className="text-3xl font-bold text-gray-900">1+</p>
            <p className="text-gray-500 text-sm mt-1">1 year Experience</p>
          </div>
          <div className="w-px h-10 bg-gray-200"></div>
          <div>
            <p className="text-3xl font-bold text-gray-900">5+</p>
            <p className="text-gray-500 text-sm mt-1">Projects Built</p>
          </div>
          <div className="w-px h-10 bg-gray-200"></div>
          <div>
            <p className="text-3xl font-bold text-gray-900">100%</p>
            <p className="text-gray-500 text-sm mt-1">Client Focused</p>
          </div>
        </div>
      </div>
    </section>
  );
}

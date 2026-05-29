export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="w-full max-w-5xl mx-auto text-center">
        <p data-aos="fade-up" className="text-blue-600 font-medium mb-4 tracking-wide uppercase text-sm">
          Available for freelance work
        </p>
        <h1 data-aos="fade-up" data-aos-delay="100" className="text-4xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          I build full-stack
          <br />
          <span className="text-blue-600">web applications</span>
        </h1>
        <p data-aos="fade-up" data-aos-delay="200" className="text-base md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Hi, I am Adetunji Samuel Adedeji. I design and build scalable web apps with React, Node.js and PostgreSQL.
        </p>
        <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 active:scale-95 transition duration-200 text-base w-full sm:w-auto">View My Work</a>
          <a href="#contact" className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-medium hover:border-gray-400 active:scale-95 transition duration-200 text-base w-full sm:w-auto">Get In Touch</a>
        </div>
        <div data-aos="fade-up" data-aos-delay="400" className="mt-12 flex items-center justify-center gap-6 md:gap-10 text-center">
          <div>
            <p className="text-2xl md:text-3xl font-bold text-gray-900">1+</p>
            <p className="text-gray-500 text-xs md:text-sm mt-1">Years Experience</p>
          </div>
          <div className="w-px h-10 bg-gray-200"></div>
          <div>
            <p className="text-2xl md:text-3xl font-bold text-gray-900">5+</p>
            <p className="text-gray-500 text-xs md:text-sm mt-1">Projects Built</p>
          </div>
          <div className="w-px h-10 bg-gray-200"></div>
          <div>
            <p className="text-2xl md:text-3xl font-bold text-gray-900">100%</p>
            <p className="text-gray-500 text-xs md:text-sm mt-1">Client Focused</p>
          </div>
        </div>
      </div>
    </section>
  );
}

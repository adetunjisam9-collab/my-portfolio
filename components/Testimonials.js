import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "I was blown away — the UI, the responsiveness, the way everything just works. Samuel nailed it. This is the kind of ambition and execution I look for in someone I want to build with.",
      name: "Miracle",
      title: "Software Developer & Founder, MiraPay",
      initials: "M",
    },
  ];

  return (
    <section id="testimonials" className="py-16 px-6 bg-white">
      <div className="section-divider"></div>
      <div className="max-w-5xl mx-auto">
        <p data-aos="fade-up" className="text-blue-600 font-medium text-sm uppercase tracking-wide mb-2">Kind Words</p>
        <h2 data-aos="fade-up" data-aos-delay="100" className="text-4xl font-bold text-gray-900 mb-4">What people say</h2>
        <p data-aos="fade-up" data-aos-delay="200" className="text-gray-500 text-lg mb-16 max-w-xl">Feedback from developers and collaborators I have worked with.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="bg-gray-50 rounded-2xl border border-gray-100 p-8 hover:border-blue-200 hover:shadow-sm transition duration-300 flex flex-col justify-between"
            >
              <div>
                <FontAwesomeIcon icon={faQuoteLeft} className="text-blue-200 mb-4" style={{ width: "28px", height: "28px" }} />
                <p className="text-gray-700 leading-relaxed text-sm mb-6">"{t.quote}"</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                  <span className="text-white text-sm font-bold">{t.initials}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div data-aos="fade-up" className="mt-12 text-center">
          <p className="text-gray-400 text-sm">More testimonials coming soon as I collaborate with more clients and developers.</p>
        </div>
      </div>
    </section>
  );
}

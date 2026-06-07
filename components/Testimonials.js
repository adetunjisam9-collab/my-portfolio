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
    <section id="testimonials" className="py-16 px-6 bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto">
        <div data-aos="fade-up" className="mb-8">
          <div className="section-divider"></div>
          <p className="text-blue-600 font-medium text-xs uppercase tracking-wide mb-1">Kind Words</p>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">What people say</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xl">Feedback from developers and collaborators I have worked with.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-8 hover:border-blue-200 hover:shadow-sm transition duration-300 flex flex-col justify-between">
              <div>
                <FontAwesomeIcon icon={faQuoteLeft} className="text-blue-200 dark:text-blue-800 mb-4" style={{ width: "28px", height: "28px" }} />
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm mb-6">"{t.quote}"</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                  <span className="text-white text-sm font-bold">{t.initials}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">{t.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div data-aos="fade-up" className="mt-10 text-center">
          <p className="text-gray-400 dark:text-gray-500 text-sm">More testimonials coming soon as I collaborate with more clients and developers.</p>
        </div>
      </div>
    </section>
  );
}

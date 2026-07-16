import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "I was blown away. The UI, the responsiveness, the way everything just works. Samuel nailed it. This is the kind of ambition and execution I look for in someone I want to build with.",
      name: "Miracle",
      title: "Software Developer & Founder, MiraPay",
      initials: "M",
    },
    {
      quote: "This is good. Excellent job, keep up the good work.",
      name: "Mr. Shanu",
      title: "Senior Lecturer, Computer Science Department, LASU",
      initials: "S",
    },
    {
      quote: "You better don't stop here. This is just a stepping stone, continue passionately and you will achieve greatness. Well done.",
      name: "Mrs. Omoyeni Orioke",
      title: "Final Year Project Supervisor, LASU",
      initials: "O",
    },
    {
      quote: "I still can't believe you built this. Your apps are fire, start marketing it now so users can start experiencing it!",
      name: "Kennedy",
      title: "Software Enthusiast & Close Friend",
      initials: "K",
    },
  ];

  return (
    <section id="testimonials" className="py-16 px-6 bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto">
        <div data-aos="fade-up" className="mb-8">
          <div className="section-divider"></div>
          <p className="text-blue-600 font-medium text-xs uppercase tracking-wide mb-1">Kind Words</p>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">What people say</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xl">Feedback from developers, lecturers and collaborators I have worked with.</p>
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
      </div>
    </section>
  );
}

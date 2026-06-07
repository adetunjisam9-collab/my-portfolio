import RippleButton from "./RippleButton";

export default function Contact() {
  return (
    <section id="contact" className="py-12 px-6 bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto">
        <div data-aos="fade-up" className="mb-8">
          <div className="section-divider"></div>
          <p className="text-blue-600 font-medium text-xs uppercase tracking-wide mb-1">Contact</p>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Let us work together</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xl">Have a project in mind? I am available for freelance work. Send me a message and I will get back to you within 24 hours.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div data-aos="fade-right" className="flex flex-col gap-5">
            <div>
              <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-1">Email</p>
              <a href="mailto:adetunjisam9@gmail.com" className="text-blue-600 hover:underline text-sm">adetunjisam9@gmail.com</a>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-1">GitHub</p>
              <a href="https://github.com/adetunjisam9-collab" target="_blank" className="text-blue-600 hover:underline text-sm">github.com/adetunjisam9-collab</a>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-1">Availability</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Open to freelance projects</p>
            </div>
          </div>
          <div data-aos="fade-left" className="flex flex-col gap-3">
            <input type="text" placeholder="Your Name" className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-400 w-full" />
            <input type="email" placeholder="Your Email" className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-400 w-full" />
            <textarea placeholder="Tell me about your project..." rows={4} className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-400 w-full resize-none"></textarea>
            <RippleButton href="mailto:adetunjisam9@gmail.com" className="bg-blue-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition duration-200 text-center inline-block">Send Message</RippleButton>
          </div>
        </div>
      </div>
    </section>
  );
}

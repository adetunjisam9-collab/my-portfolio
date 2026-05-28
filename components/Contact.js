export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <p className="text-blue-600 font-medium text-sm uppercase tracking-wide mb-2">Contact</p>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Let us work together</h2>
        <p className="text-gray-500 text-lg mb-16 max-w-xl">Have a project in mind? I am available for freelance work. Send me a message and I will get back to you within 24 hours.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-sm font-medium text-gray-700 mb-1">Email</p>
              <a href="mailto:adetunjisam9@gmail.com" className="text-blue-600 hover:underline">adetunjisam9@gmail.com</a>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 mb-1">GitHub</p>
              <a href="https://github.com/adetunjisam9-collab" target="_blank" className="text-blue-600 hover:underline">github.com/adetunjisam9-collab</a>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 mb-1">Availability</p>
              <p className="text-gray-600">Open to freelance projects</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <input type="text" placeholder="Your Name" className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-400 w-full" />
            <input type="email" placeholder="Your Email" className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-400 w-full" />
            <textarea placeholder="Tell me about your project..." rows={5} className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-400 w-full resize-none"></textarea>
            <a href="mailto:adetunjisam9@gmail.com" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition text-center">Send Message</a>
          </div>
        </div>
      </div>
    </section>
  );
}

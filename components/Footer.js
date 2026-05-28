export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-gray-100 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-900 font-bold">Adetunji Samuel Adedeji<span className="text-blue-600">.</span></p>
        <p className="text-gray-400 text-sm">Built with Next.js and Tailwind CSS</p>
        <div className="flex items-center gap-6">
          <a href="https://github.com/adetunjisam9-collab" target="_blank" className="text-gray-500 hover:text-gray-900 text-sm transition">GitHub</a>
          <a href="mailto:adetunjisam9@gmail.com" className="text-gray-500 hover:text-gray-900 text-sm transition">Email</a>
        </div>
      </div>
    </footer>
  );
}

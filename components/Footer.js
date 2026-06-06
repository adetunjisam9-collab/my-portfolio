import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCode } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="py-6 px-6 border-t border-gray-100 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-gray-900 font-bold text-lg">Adetunji<span className="text-blue-600">.</span></p>
          <p className="text-gray-400 text-xs mt-1">Where logic meets imagination.</p>
        </div>

        <div className="flex items-center gap-5">
          <a href="https://github.com/adetunjisam9-collab" target="_blank" className="w-9 h-9 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-300 transition duration-200">
            <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
          </a>
          <a href="https://twitter.com/BIGSAMMEY9" target="_blank" className="w-9 h-9 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-300 transition duration-200">
            <FontAwesomeIcon icon={faXTwitter} className="w-4 h-4" />
          </a>
          <a href="mailto:adetunjisam9@gmail.com" className="w-9 h-9 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-300 transition duration-200">
            <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
          </a>
        </div>

        <div className="flex items-center gap-2 text-gray-400 text-xs">
          <FontAwesomeIcon icon={faCode} className="w-3 h-3" />
          <p>Built with Next.js and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}

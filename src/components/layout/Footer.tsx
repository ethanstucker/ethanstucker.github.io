import { Github, Linkedin, Mail } from 'lucide-react';
import { resumeData } from '../../data/resume';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Name */}
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold">{resumeData.personalInfo.name}</p>
            <p className="text-slate-400 text-sm">
              {resumeData.personalInfo.title} @ {resumeData.personalInfo.company}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/ethanstucker"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/ethanstucker"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#contact"
              className="p-2 text-slate-400 hover:text-white transition-colors"
              aria-label="Contact"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-400 text-sm">
            &copy; {currentYear} {resumeData.personalInfo.name}. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}

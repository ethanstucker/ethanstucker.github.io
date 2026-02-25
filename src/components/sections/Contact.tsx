import { Mail, MapPin, Github, Linkedin } from 'lucide-react';
import { Section } from '../layout/Section';
import { resumeData } from '../../data/resume';

export function Contact() {
  return (
    <Section id="contact" className="bg-slate-50">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="heading-2 text-slate-900 mb-4">Get In Touch</h2>
        <p className="text-slate-600 mb-8">
          I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
        </p>

        <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg">
              <div className="w-10 h-10 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center">
                <MapPin size={20} />
              </div>
              <div className="text-left">
                <p className="text-sm text-slate-500">Location</p>
                <p className="font-medium text-slate-900">{resumeData.personalInfo.location}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg">
              <div className="w-10 h-10 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center">
                <Mail size={20} />
              </div>
              <div className="text-left">
                <p className="text-sm text-slate-500">Email</p>
                <a
                  href={`mailto:${resumeData.personalInfo.email}`}
                  className="font-medium text-slate-900 hover:text-primary-600 transition-colors"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/ethanstucker"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              <Github size={20} />
              <span className="font-medium">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/ethanstucker"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 bg-[#0077b5] text-white rounded-lg hover:bg-[#006699] transition-colors"
            >
              <Linkedin size={20} />
              <span className="font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

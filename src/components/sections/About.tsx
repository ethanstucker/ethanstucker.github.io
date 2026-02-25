import { MapPin, Briefcase, GraduationCap } from 'lucide-react';
import { Section } from '../layout/Section';
import { resumeData } from '../../data/resume';

export function About() {
  return (
    <Section id="about" className="bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="heading-2 text-slate-900 mb-6">About Me</h2>
        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          I'm a recent Computer Science graduate from the University of Central Arkansas,
          now working full-time as an Associate Solution Developer at Acxiom. My journey from
          intern to full-time developer has given me hands-on experience in API development,
          quality assurance, and test automation.
        </p>

        {/* Quick Info Cards */}
        <div className="grid sm:grid-cols-3 gap-6 mt-12">
          <div className="p-6 bg-slate-50 rounded-xl">
            <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <MapPin size={24} />
            </div>
            <h3 className="font-semibold text-slate-900 mb-1">Location</h3>
            <p className="text-slate-500">{resumeData.personalInfo.location}</p>
          </div>

          <div className="p-6 bg-slate-50 rounded-xl">
            <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Briefcase size={24} />
            </div>
            <h3 className="font-semibold text-slate-900 mb-1">Current Role</h3>
            <p className="text-slate-500">{resumeData.personalInfo.title}</p>
          </div>

          <div className="p-6 bg-slate-50 rounded-xl">
            <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <GraduationCap size={24} />
            </div>
            <h3 className="font-semibold text-slate-900 mb-1">Education</h3>
            <p className="text-slate-500">BS in Computer Science</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

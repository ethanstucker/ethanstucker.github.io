import { GraduationCap, BookOpen } from 'lucide-react';
import { Section } from '../layout/Section';
import { resumeData } from '../../data/resume';

export function Education() {
  const { education } = resumeData;

  return (
    <Section id="education" className="bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 text-primary-600 rounded-xl mb-4">
            <GraduationCap size={28} />
          </div>
          <h2 className="heading-2 text-slate-900">Education</h2>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
            <div>
              <h3 className="heading-3 text-slate-900">{education.institution}</h3>
              <p className="text-primary-600 font-medium">
                {education.degree} in {education.major}
              </p>
            </div>
            <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full whitespace-nowrap">
              Graduated {education.graduationDate}
            </span>
          </div>

          <div className="border-t border-slate-100 pt-6">
            <div className="flex items-center gap-2 text-slate-700 mb-4">
              <BookOpen size={20} className="text-primary-500" />
              <h4 className="font-semibold">Relevant Coursework</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {education.relevantCoursework.map((course) => (
                <span
                  key={course}
                  className="px-3 py-1.5 bg-slate-100 text-slate-600 text-sm rounded-lg"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

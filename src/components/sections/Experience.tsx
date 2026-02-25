import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { Section } from '../layout/Section';
import { resumeData, Experience as ExperienceType } from '../../data/resume';

function TimelineItem({ experience, isLast, index }: { experience: ExperienceType; isLast: boolean; index: number }) {
  const isCurrent = experience.endDate === 'Present';

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[11px] top-8 bottom-0 w-0.5 bg-slate-200" />
      )}

      {/* Timeline dot */}
      <div
        className={`absolute left-0 top-1 w-6 h-6 rounded-full border-4 ${
          isCurrent
            ? 'bg-primary-500 border-primary-200'
            : 'bg-white border-slate-300'
        }`}
      />

      {/* Content */}
      <motion.div
        whileHover={{ scale: 1.01, boxShadow: '0 10px 40px -15px rgba(0,0,0,0.1)' }}
        transition={{ duration: 0.2 }}
        className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm"
      >
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <h3 className="heading-3 text-slate-900">{experience.title}</h3>
            <p className="text-primary-600 font-medium">{experience.company}</p>
          </div>
          <div className="text-right">
            <span
              className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                isCurrent
                  ? 'bg-green-100 text-green-700'
                  : 'bg-slate-100 text-slate-600'
              }`}
            >
              {isCurrent ? 'Current' : experience.type}
            </span>
          </div>
        </div>

        <p className="text-sm text-slate-500 mb-4">
          {experience.startDate} - {experience.endDate} | {experience.location}
        </p>

        <ul className="space-y-2 mb-4">
          {experience.highlights.map((highlight, idx) => (
            <li key={idx} className="flex items-start gap-2 text-slate-600">
              <span className="text-primary-500 mt-1.5">&#8226;</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        {experience.technologies && (
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export function Experience() {
  return (
    <Section id="experience" className="bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 text-primary-600 rounded-xl mb-4">
            <Briefcase size={28} />
          </div>
          <h2 className="heading-2 text-slate-900">Work Experience</h2>
        </div>

        <div>
          {resumeData.experience.map((exp, index) => (
            <TimelineItem
              key={exp.id}
              experience={exp}
              isLast={index === resumeData.experience.length - 1}
              index={index}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

import { motion } from 'framer-motion';
import { Code, Wrench, Users } from 'lucide-react';
import { Section } from '../layout/Section';
import { resumeData } from '../../data/resume';

const categoryConfig = {
  language: {
    title: 'Languages',
    icon: Code,
    color: 'bg-blue-100 text-blue-600',
  },
  tool: {
    title: 'Tools & Technologies',
    icon: Wrench,
    color: 'bg-purple-100 text-purple-600',
  },
  soft: {
    title: 'Soft Skills',
    icon: Users,
    color: 'bg-green-100 text-green-600',
  },
};

export function Skills() {
  const groupedSkills = resumeData.skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, typeof resumeData.skills>
  );

  return (
    <Section id="skills" className="bg-white">
      <div className="text-center mb-12">
        <h2 className="heading-2 text-slate-900">Skills & Expertise</h2>
        <p className="text-slate-500 mt-3 max-w-xl mx-auto">
          Technologies and skills I've developed through education and professional experience.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {(Object.keys(categoryConfig) as Array<keyof typeof categoryConfig>).map((category, categoryIndex) => {
          const config = categoryConfig[category];
          const skills = groupedSkills[category] || [];
          const Icon = config.icon;

          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="text-center"
            >
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 ${config.color}`}
              >
                <Icon size={28} />
              </div>
              <h3 className="heading-3 text-slate-900 mb-6">{config.title}</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05, backgroundColor: '#e2e8f0' }}
                    className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium cursor-default"
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

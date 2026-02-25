import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink, Github } from 'lucide-react';
import { Section } from '../layout/Section';
import { resumeData } from '../../data/resume';

export function Projects() {
  return (
    <Section id="projects" className="bg-white">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 text-primary-600 rounded-xl mb-4">
          <FolderGit2 size={28} />
        </div>
        <h2 className="heading-2 text-slate-900">Projects</h2>
        <p className="text-slate-500 mt-3 max-w-xl mx-auto">
          Check out some of my work and side projects.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {resumeData.projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="group bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-primary-200 transition-all"
          >
            <h3 className="heading-3 text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
              {project.name}
            </h3>
            <p className="text-slate-600 text-sm mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-slate-500 hover:text-primary-600 transition-colors"
                >
                  <Github size={16} />
                  <span>Code</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-slate-500 hover:text-primary-600 transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </motion.div>
        ))}

        {/* Placeholder for more projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: resumeData.projects.length * 0.1 }}
          className="border-2 border-dashed border-slate-200 rounded-xl p-6 flex flex-col items-center justify-center text-center"
        >
          <FolderGit2 className="text-slate-300 mb-3" size={40} />
          <p className="text-slate-400 text-sm">More projects coming soon</p>
          <a
            href="https://github.com/ethanstucker"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 text-primary-600 text-sm font-medium hover:underline"
          >
            View GitHub Profile
          </a>
        </motion.div>
      </div>
    </Section>
  );
}

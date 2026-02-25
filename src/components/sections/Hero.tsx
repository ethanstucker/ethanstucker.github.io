import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin } from 'lucide-react';
import { resumeData } from '../../data/resume';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-50 via-white to-primary-50">
      <div className="section-container text-center py-20">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-primary-600 font-medium mb-4"
          >
            Hello, I'm
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="heading-1 text-slate-900 mb-4"
          >
            {resumeData.personalInfo.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl sm:text-2xl text-slate-600 mb-6"
          >
            <span className="text-gradient font-semibold">{resumeData.personalInfo.title}</span>
            {' '}@ {resumeData.personalInfo.company}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-slate-500 max-w-xl mx-auto mb-8"
          >
            {resumeData.personalInfo.summary}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <a
              href="#experience"
              className="px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/25"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-white text-slate-700 font-medium rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex items-center justify-center gap-4"
          >
            <a
              href="https://github.com/ethanstucker"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-slate-400 hover:text-slate-600 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/ethanstucker"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-slate-400 hover:text-slate-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          aria-label="Scroll to about section"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="text-slate-400" size={32} />
        </motion.a>
      </motion.div>
    </section>
  );
}

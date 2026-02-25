import { useRef, ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

export function Section({ id, children, className = '', containerClassName = '' }: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id={id}
      ref={ref}
      className={`section-padding ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`section-container ${containerClassName}`}
      >
        {children}
      </motion.div>
    </section>
  );
}

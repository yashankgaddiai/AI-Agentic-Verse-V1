/**
 * @file SectionTransition.tsx
 * Gentle 800ms fade-in transition wrapper using framer-motion for viewport entry.
 */

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface SectionTransitionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const SectionTransition: React.FC<SectionTransitionProps> = ({
  children,
  className = '',
  delay = 0,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08, margin: '0px 0px -40px 0px' }}
      transition={{
        duration: 0.8, // Exact 800ms gentle fade-in transition
        delay,
        ease: [0.22, 1, 0.36, 1], // Smooth editorial easing
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

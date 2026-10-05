/**
 * @file ScrollReveal.tsx
 * Subtle 800ms scroll-reveal component using framer-motion with prefers-reduced-motion support.
 */

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay in milliseconds
  direction?: 'up' | 'none';
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}) => {
  const shouldReduceMotion = useReducedMotion();

  const initialY = direction === 'up' && !shouldReduceMotion ? 18 : 0;

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: initialY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1, margin: '0px 0px -40px 0px' }}
      transition={{
        duration: 0.8, // Exact 800ms gentle fade-in transition
        delay: delay / 1000,
        ease: [0.22, 1, 0.36, 1], // Smooth editorial easing
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

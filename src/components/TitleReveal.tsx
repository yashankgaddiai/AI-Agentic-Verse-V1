/**
 * @file TitleReveal.tsx
 * Subtle editorial text reveal animation for section headings.
 * - Mask-reveal effect with smooth upward glide (y: 24 -> 0) and fade-in
 * - Unified 800ms editorial easing [0.22, 1, 0.36, 1] consistent with all animations
 * - Full accessibility compliance with useReducedMotion
 */

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { EDITORIAL_EASING } from './SectionTransition';

interface TitleRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay in seconds (e.g. 0.08)
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'div';
}

export const TitleReveal: React.FC<TitleRevealProps> = ({
  children,
  className = '',
  delay = 0.08,
  as: Component = 'h2',
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <Component className={className}>{children}</Component>;
  }

  // The outer flow-root wrapper takes the parent's space-y margin; the inner mask's
  // negative margins only offset its descender padding and can't override that gap.
  return (
    <div className="flow-root">
    <div className="overflow-hidden py-1 -my-1">
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.15, margin: '0px 0px -40px 0px' }}
        transition={{
          duration: 0.8,
          delay,
          ease: EDITORIAL_EASING,
        }}
      >
        <Component className={className}>{children}</Component>
      </motion.div>
    </div>
    </div>
  );
};

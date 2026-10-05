/**
 * @file TitleReveal.tsx
 * Subtle editorial text reveal animation for section headings.
 * - Mask-reveal effect with smooth upward glide and micro blur-dissolve
 * - Apple/Linear style deceleration easing [0.16, 1, 0.3, 1]
 * - Full accessibility compliance with useReducedMotion
 */

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface TitleRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay in seconds (e.g. 0.08)
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'div';
}

export const TitleReveal: React.FC<TitleRevealProps> = ({
  children,
  className = '',
  delay = 0.05,
  as: Component = 'h2',
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <Component className={className}>{children}</Component>;
  }

  return (
    <div className="overflow-hidden py-1 -my-1">
      <motion.div
        initial={{ y: '40%', opacity: 0, filter: 'blur(4px)' }}
        whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
        viewport={{ once: true, amount: 0.15, margin: '0px 0px -40px 0px' }}
        transition={{
          duration: 0.85,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <Component className={className}>{children}</Component>
      </motion.div>
    </div>
  );
};

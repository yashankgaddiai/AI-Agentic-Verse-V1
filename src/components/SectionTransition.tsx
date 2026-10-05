/**
 * @file SectionTransition.tsx
 * Subtle slide-up and fade-in animation system powered by Framer Motion.
 * Features:
 * - Section-level smooth 800ms entry transition
 * - SectionHeadingReveal: Dedicated heading wrapper applying coordinated
 *   slide-up and fade-in reveal animations as titles enter the viewport
 * - Unified editorial easing [0.22, 1, 0.36, 1] consistent with site animations
 * - Full accessibility compliance via useReducedMotion
 */

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';

export const EDITORIAL_EASING: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const slideUpFadeVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: EDITORIAL_EASING,
    },
  }),
};

interface SectionTransitionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
}

export const SectionTransition: React.FC<SectionTransitionProps> = ({
  children,
  className = '',
  delay = 0,
  yOffset = 20,
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08, margin: '0px 0px -50px 0px' }}
      transition={{
        duration: 0.8,
        delay,
        ease: EDITORIAL_EASING,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface SectionHeadingRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
  as?: 'div' | 'header' | 'h1' | 'h2' | 'h3';
}

/**
 * Dedicated component to wrap section headings / title groups with a
 * refined slide-up and fade-in reveal animation as they scroll into view.
 */
export const SectionHeadingReveal: React.FC<SectionHeadingRevealProps> = ({
  children,
  className = '',
  delay = 0.05,
  yOffset = 22,
  as: Component = 'div',
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <Component className={className}>{children}</Component>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: '0px 0px -40px 0px' }}
      transition={{
        duration: 0.8,
        delay,
        ease: EDITORIAL_EASING,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Also attach as static property for intuitive SectionTransition.Heading usage
(SectionTransition as unknown as { Heading: typeof SectionHeadingReveal }).Heading = SectionHeadingReveal;

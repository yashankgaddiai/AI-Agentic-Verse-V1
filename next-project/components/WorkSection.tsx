/**
 * @file WorkSection.tsx
 * Work section strictly adhering to the STYLE SPEC:
 * - H2: 400, 38px, line-height 1.18, letter-spacing -0.02em, text-wrap: pretty, secondary in muted #6E685E
 * - Eyebrow label: 500, 11.5px, uppercase, letter-spacing 0.16em
 * - Grid of video cards: white, 1px border rgba(26,24,21,.14), 16px radius, shadow 0 12px 32px rgba(26,24,21,.07)
 * - 16:9 thumbnail, title, duration, round terracotta play trigger
 * - Desktop container padding 56px horizontal, 88px vertical padding
 * - Subtle staggered fade-in animation using Framer Motion when entering the viewport
 */

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { portfolioContent, VideoProject } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

interface WorkSectionProps {
  onSelectProject: (project: VideoProject) => void;
}

const gridContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12, // Subtle staggered delay per card
      delayChildren: 0.06,
    },
  },
};

const cardItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75, // Gentle, smooth fade-in
      ease: [0.22, 1, 0.36, 1], // Editorial easing
    },
  },
};

export const WorkSection: React.FC<WorkSectionProps> = ({ onSelectProject }) => {
  const { projects } = portfolioContent;
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="work"
      aria-label="Selected Works"
      className="py-16 md:py-[88px] border-b border-[rgba(26,24,21,0.12)]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-[56px]">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-2xl mb-12 md:mb-16 space-y-3">
            {/* Eyebrow Label: 500, 11.5px, uppercase, letter-spacing 0.16em */}
            <span className="block font-medium text-[11.5px] uppercase tracking-[0.16em] text-[#C25A3C]">
              Catalogue & Selected Archives
            </span>

            {/* H2: 400, 38px, line-height 1.18, letter-spacing -0.02em, text-wrap: pretty, secondary phrase in #6E685E */}
            <h2 className="font-normal text-[28px] sm:text-[34px] lg:text-[38px] leading-[1.18] tracking-[-0.02em] text-[#1A1815] [text-wrap:pretty]">
              Selected Animation Shorts{' '}
              <span className="text-[#6E685E]">
                and kinetic spatial experiments.
              </span>
            </h2>

            <p className="font-normal text-[16px] text-[#5F5A52] leading-[1.68]">
              Each piece is rendered through sovereign algorithmic pipelines paired with deliberate physical pacing.
            </p>
          </div>
        </ScrollReveal>

        {/* Video Cards Grid with Staggered Framer Motion Reveal */}
        <motion.div
          variants={shouldReduceMotion ? undefined : gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: '0px 0px -40px 0px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={shouldReduceMotion ? undefined : cardItemVariants}
              className="bg-[#FFFFFF] rounded-[16px] border border-[rgba(26,24,21,0.14)] overflow-hidden shadow-[0_12px_32px_rgba(26,24,21,0.07)] group flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-[#C25A3C]/40 hover:shadow-[0_20px_40px_rgba(26,24,21,0.1)] cursor-pointer"
              onClick={() => onSelectProject(project)}
            >
              {/* 16:9 Thumbnail with Terracotta Play Button */}
              <div className="relative aspect-video w-full overflow-hidden bg-[#F4F1EC]">
                <img
                  src={project.thumbnailUrl}
                  alt={`${project.title} animation frame`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />

                {/* Terracotta Play Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/15 group-hover:bg-black/30 transition-colors">
                  <div
                    aria-label={`Play ${project.title}`}
                    className="w-14 h-14 rounded-full bg-[#C25A3C] flex items-center justify-center shadow-md transform transition-all duration-200 group-hover:scale-110 group-hover:bg-[#A94B30]"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 fill-[#FBFAF8] translate-x-0.5"
                      aria-hidden="true"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-[4px] bg-black/75 backdrop-blur-xs text-[#FBFAF8] font-medium text-[12px] tabular-nums">
                  {project.duration}
                </div>
              </div>

              {/* Card Content Bar */}
              <div className="p-6 bg-[#FFFFFF] flex flex-col flex-1 justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[13.5px] font-medium text-[#857F74]">
                    <span className="text-[#C25A3C]">{project.category}</span>
                    <span className="tabular-nums text-[#8A8479]">{project.year}</span>
                  </div>

                  <h3 className="font-medium text-[20px] leading-[1.3] text-[#1A1815] group-hover:text-[#C25A3C] transition-colors">
                    {project.title}
                  </h3>

                  <p className="font-normal text-[15px] leading-[1.65] text-[#5F5A52]">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Bottom Action Row */}
                <div className="pt-4 border-t border-[rgba(26,24,21,0.08)] flex items-center justify-between font-medium text-[13.5px]">
                  <span className="text-[#857F74]">Watch Short</span>
                  <span className="inline-flex items-center gap-1 text-[#1A1815] group-hover:text-[#C25A3C] transition-colors">
                    Play Film
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

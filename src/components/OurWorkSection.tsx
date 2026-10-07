/**
 * @file OurWorkSection.tsx
 * Our Work section strictly matching the user's latest brief:
 * - Tag: Our Work
 * - Heading: Don't Take Our Word For It. Watch It.
 * - Subheading: Real Posts We Made For Real Clients. Same Voice. Same Face. None Of Their Time.
 * - Client Video 1, 2, 3 with captions [Client Name, What They Do]
 */

import React from 'react';
import { Play } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { siteContent, ShowcaseVideo } from '../data/portfolioData';
import { SectionHeadingReveal } from './SectionTransition';
import { TitleReveal } from './TitleReveal';

interface OurWorkSectionProps {
  onSelectVideo: (video: ShowcaseVideo) => void;
}

const gridContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const cardItemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const OurWorkSection: React.FC<OurWorkSectionProps> = ({ onSelectVideo }) => {
  const { ourWork } = siteContent;
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="our-work"
      aria-label="Our Work"
      className="py-16 md:py-24 border-b border-[rgba(26,24,21,0.12)] bg-[#FBFAF8] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-14 space-y-12 md:space-y-16">
        {/* Section Header */}
        <SectionHeadingReveal className="max-w-3xl space-y-4">
          <span className="block font-medium text-[11.5px] uppercase tracking-[0.16em] text-[#C25A3C]">
            {ourWork.tag}
          </span>

          <TitleReveal
            as="h2"
            delay={0.08}
            className="font-normal text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.15] tracking-[-0.02em] text-[#1A1815] [text-wrap:pretty]"
          >
            {ourWork.heading}
          </TitleReveal>

          <p className="font-normal text-[16px] text-[#5F5A52] leading-[1.68]">
            {ourWork.subheading}
          </p>
        </SectionHeadingReveal>

        {/* 3 Client Video Cards */}
        <motion.div
          variants={shouldReduceMotion ? undefined : gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {ourWork.videos.map((video) => (
            <motion.article
              key={video.id}
              variants={shouldReduceMotion ? undefined : cardItemVariants}
              onClick={() => onSelectVideo(video)}
              className="bg-[#FFFFFF] rounded-[16px] border border-[rgba(26,24,21,0.14)] overflow-hidden shadow-[0_12px_32px_rgba(26,24,21,0.06)] group flex flex-col justify-between cursor-pointer hover:border-[#C25A3C]/40 hover:-translate-y-1 transition-all duration-300"
            >
              {/* 16:9 Thumbnail Frame */}
              <div className="relative aspect-video w-full overflow-hidden bg-[#1A1815]">
                {/* Blurred fill so portrait thumbnails show in full; hidden behind widescreen ones */}
                <img
                  src={video.thumbnailUrl}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover scale-110 blur-xl opacity-70"
                />
                <img
                  src={video.thumbnailUrl}
                  alt={`${video.title} sample`}
                  className="relative w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                />

                {/* Terracotta Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/35 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-[#C25A3C] flex items-center justify-center shadow-md transform transition-transform group-hover:scale-110">
                    <Play className="w-5 h-5 fill-[#FBFAF8] text-[#FBFAF8] translate-x-0.5" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-4 right-4 px-2 py-0.5 rounded-[4px] bg-black/80 text-[#FBFAF8] font-medium text-[11.5px] tabular-nums">
                  {video.duration}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 bg-[#FFFFFF] flex flex-col flex-1 justify-between gap-4">
                <div className="space-y-4">
                  {/* Client Name & Role Caption specified in user prompt */}
                  <div className="inline-flex items-center px-2.5 py-1 rounded-[6px] bg-[#F4F1EC] border border-[rgba(26,24,21,0.08)] text-[12px] font-semibold text-[#1A1815]">
                    Caption: {video.captionPlaceholder}
                  </div>

                  <h3 className="font-semibold text-[19px] leading-[1.3] text-[#1A1815] group-hover:text-[#C25A3C] transition-colors">
                    {video.title}
                  </h3>

                  <p className="font-normal text-[14.5px] leading-[1.6] text-[#5F5A52]">
                    {video.description}
                  </p>
                </div>

                {/* Action Row */}
                <div className="pt-4 border-t border-[rgba(26,24,21,0.08)] flex items-center justify-between font-medium text-[13px]">
                  <span className="text-[#857F74] group-hover:text-[#C25A3C] transition-colors">Watch Client Post</span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

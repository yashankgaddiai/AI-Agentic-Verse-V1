/**
 * @file VideoShowcaseSection.tsx
 * Video Showcase section matching the brief:
 * - Heading: See The Content We Post
 * - Three Placeholders: Video 1, Video 2, Video 3
 * - Interactive playable modal triggers
 */

import React from 'react';
import { Play, ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { siteContent, ShowcaseVideo } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

interface VideoShowcaseProps {
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const VideoShowcaseSection: React.FC<VideoShowcaseProps> = ({ onSelectVideo }) => {
  const { videoShowcase } = siteContent;
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="showcase"
      aria-label="See The Content We Post"
      className="py-16 md:py-[88px] border-b border-[rgba(26,24,21,0.12)] bg-[#F4F1EC] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-[56px] space-y-12 md:space-y-16">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl space-y-3">
            <span className="block font-medium text-[11.5px] uppercase tracking-[0.16em] text-[#C25A3C]">
              Recent Client Deliverables
            </span>

            <h2 className="font-normal text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.15] tracking-[-0.02em] text-[#1A1815] [text-wrap:pretty]">
              {videoShowcase.heading}
            </h2>

            <p className="font-normal text-[16px] text-[#5F5A52] leading-[1.68]">
              {videoShowcase.subheading}
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Video Placeholders */}
        <motion.div
          variants={shouldReduceMotion ? undefined : gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {videoShowcase.videos.map((video) => (
            <motion.article
              key={video.id}
              variants={shouldReduceMotion ? undefined : cardItemVariants}
              onClick={() => onSelectVideo(video)}
              className="bg-[#FFFFFF] rounded-[16px] border border-[rgba(26,24,21,0.14)] overflow-hidden shadow-[0_12px_32px_rgba(26,24,21,0.06)] group flex flex-col justify-between cursor-pointer hover:border-[#C25A3C]/40 hover:-translate-y-1 transition-all duration-300"
            >
              {/* 16:9 Thumbnail Frame */}
              <div className="relative aspect-video w-full overflow-hidden bg-[#1A1815]">
                <img
                  src={video.thumbnailUrl}
                  alt={`${video.title} sample`}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 opacity-90"
                />

                {/* Terracotta Play Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/35 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-[#C25A3C] flex items-center justify-center shadow-md transform transition-transform group-hover:scale-110">
                    <Play className="w-5 h-5 fill-[#FBFAF8] text-[#FBFAF8] translate-x-0.5" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-[4px] bg-black/80 text-[#FBFAF8] font-medium text-[11.5px] tabular-nums">
                  {video.duration}
                </div>

                {/* Tag Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-[6px] bg-black/75 backdrop-blur-xs text-[#FBFAF8] font-semibold text-[10.5px] uppercase tracking-wider">
                  {video.tag}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 bg-[#FFFFFF] flex flex-col flex-1 justify-between gap-4">
                <div className="space-y-2">
                  <div className="text-[12px] font-semibold text-[#C25A3C] uppercase tracking-wider">
                    {video.category}
                  </div>
                  <h3 className="font-semibold text-[19px] leading-[1.3] text-[#1A1815] group-hover:text-[#C25A3C] transition-colors">
                    {video.title}
                  </h3>
                  <p className="font-normal text-[14.5px] leading-[1.6] text-[#5F5A52]">
                    {video.description}
                  </p>
                </div>

                {/* Card Action Row */}
                <div className="pt-4 border-t border-[rgba(26,24,21,0.08)] flex items-center justify-between font-medium text-[13px]">
                  <span className="text-[#857F74]">Preview Cut</span>
                  <span className="inline-flex items-center gap-1 text-[#1A1815] group-hover:text-[#C25A3C] transition-colors">
                    Watch Video
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

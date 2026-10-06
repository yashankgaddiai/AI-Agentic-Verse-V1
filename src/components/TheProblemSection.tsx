/**
 * @file TheProblemSection.tsx
 * The Problem section strictly matching the user's brief:
 * - Tag: The Problem
 * - Heading: The Best Expert Doesn't Win. The Most Visible One Does.
 * - Three narrative beats + high-contrast punchline callout
 */

import React from 'react';
import { siteContent } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';
import { SectionHeadingReveal } from './SectionTransition';
import { TitleReveal } from './TitleReveal';

export const TheProblemSection: React.FC = () => {
  const { problem } = siteContent;

  return (
    <section
      aria-label="The Problem"
      className="py-16 md:py-24 border-b border-[rgba(26,24,21,0.12)] bg-[#F4F1EC] relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 md:px-14 space-y-12 md:space-y-16">
        {/* Section Header */}
        <SectionHeadingReveal className="space-y-4 text-center max-w-3xl mx-auto">
          <span className="inline-block font-medium text-[11.5px] uppercase tracking-[0.16em] text-[#C25A3C]">
            {problem.tag}
          </span>

          <TitleReveal
            as="h2"
            delay={0.08}
            className="font-normal text-[30px] sm:text-[38px] lg:text-[44px] leading-[1.12] tracking-[-0.025em] text-[#1A1815] [text-wrap:pretty]"
          >
            The Best Expert Doesn't Win.{' '}
            <span className="text-[#6E685E]">
              The Most Visible One Does.
            </span>
          </TitleReveal>
        </SectionHeadingReveal>

        {/* Narrative Paragraphs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollReveal delay={100}>
            <div className="bg-[#FFFFFF] rounded-[16px] border border-[rgba(26,24,21,0.14)] p-8 shadow-[0_12px_32px_rgba(26,24,21,0.05)] space-y-4 h-full flex flex-col justify-between">
              <p className="font-normal text-[16.5px] leading-[1.72] text-[#37332C]">
                {problem.paragraphs[0]}
              </p>
              <div className="text-[12.5px] font-semibold text-[#857F74] uppercase tracking-wider">
                Attention Deficit
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="bg-[#FFFFFF] rounded-[16px] border border-[rgba(26,24,21,0.14)] p-8 shadow-[0_12px_32px_rgba(26,24,21,0.05)] space-y-4 h-full flex flex-col justify-between">
              <p className="font-normal text-[16.5px] leading-[1.72] text-[#37332C]">
                {problem.paragraphs[1]}
              </p>
              <div className="text-[12.5px] font-semibold text-[#857F74] uppercase tracking-wider">
                The Execution Trap
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* High-Impact Punchline Callout */}
        <ScrollReveal delay={300}>
          <div className="bg-[#1A1815] text-[#FBFAF8] rounded-[16px] p-8 md:p-12 shadow-lg text-center border border-black/10 space-y-4">
            <span className="inline-block text-[#C25A3C] font-semibold text-[12px] uppercase tracking-[0.16em]">
              The Harsh Reality
            </span>
            <blockquote className="font-normal text-[20px] sm:text-[24px] md:text-[28px] leading-[1.3] tracking-[-0.015em] max-w-3xl mx-auto [text-wrap:pretty]">
              “{problem.punchline}”
            </blockquote>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

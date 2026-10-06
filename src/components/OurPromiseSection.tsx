/**
 * @file OurPromiseSection.tsx
 * Our Promise section strictly matching the user's latest brief:
 * - Tag: Our Promise
 * - Heading: Live In 7 Days, Or Your First Month Is Free.
 * - Guarantee subtext and AI Avatar test video approval condition
 */

import React from 'react';
import { siteContent } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';
import { TitleReveal } from './TitleReveal';

export const OurPromiseSection: React.FC = () => {
  const { ourPromise } = siteContent;

  return (
    <section
      aria-label="Our Promise"
      className="py-16 md:py-24 border-b border-[rgba(26,24,21,0.12)] bg-[#FBFAF8] relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 md:px-14">
        <ScrollReveal>
          <div className="bg-[#FFFFFF] rounded-[20px] border-2 border-[#C25A3C]/30 p-8 md:p-12 shadow-[0_16px_40px_rgba(194,90,60,0.08)] relative overflow-hidden space-y-8">
            {/* Top Seal Badge */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[rgba(26,24,21,0.08)] pb-6">
              <div className="inline-flex self-start sm:self-auto px-3 py-1 rounded-full bg-[#C25A3C]/10 border border-[#C25A3C]/20 text-[#C25A3C] text-[12px] font-semibold uppercase tracking-[0.14em]">
                {ourPromise.tag}
              </div>
              <span className="text-[12.5px] font-semibold text-[#857F74] uppercase tracking-wider">
                100% Risk-Free Commitment
              </span>
            </div>

            {/* Heading */}
            <TitleReveal
              as="h2"
              delay={0.08}
              className="font-normal text-[28px] sm:text-[36px] lg:text-[42px] leading-[1.14] tracking-[-0.025em] text-[#1A1815] [text-wrap:pretty]"
            >
              {ourPromise.heading}
            </TitleReveal>

            {/* Two Guarantee Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#FBFAF8] rounded-[16px] p-6 border border-[rgba(26,24,21,0.08)] space-y-4">
                <h3 className="text-[#C25A3C] font-semibold text-[14.5px]">
                  The 7-Day Speed Guarantee
                </h3>
                <p className="font-normal text-[15.5px] leading-[1.65] text-[#37332C]">
                  {ourPromise.paragraphs[0]}
                </p>
              </div>

              <div className="bg-[#FBFAF8] rounded-[16px] p-6 border border-[rgba(26,24,21,0.08)] space-y-4">
                <h3 className="text-[#C25A3C] font-semibold text-[14.5px]">
                  The AI Avatar Quality Lock
                </h3>
                <p className="font-normal text-[15.5px] leading-[1.65] text-[#37332C]">
                  {ourPromise.paragraphs[1]}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

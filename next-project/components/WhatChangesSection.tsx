/**
 * @file WhatChangesSection.tsx
 * What Changes section matching the user's latest brief:
 * - Tag: What Changes
 * - Heading: You Get The Reach Of A Daily Creator. On The Schedule Of A Busy Expert.
 * - 4 Key Transformation Cards
 */

import React from 'react';
import { Compass, TrendingUp, Zap, Sparkles } from 'lucide-react';
import { siteContent } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';
import { SectionHeadingReveal } from './SectionTransition';
import { TitleReveal } from './TitleReveal';

export const WhatChangesSection: React.FC = () => {
  const { whatChanges } = siteContent;

  const icons = [
    <Compass className="w-5 h-5 text-[#C25A3C]" />,
    <TrendingUp className="w-5 h-5 text-[#C25A3C]" />,
    <Zap className="w-5 h-5 text-[#C25A3C]" />,
    <Sparkles className="w-5 h-5 text-[#C25A3C]" />,
  ];

  return (
    <section
      aria-label="What Changes"
      className="py-16 md:py-[88px] border-b border-[rgba(26,24,21,0.12)] bg-[#FBFAF8]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-[56px] space-y-12 md:space-y-16">
        {/* Section Header */}
        <SectionHeadingReveal className="max-w-3xl space-y-3">
          <span className="block font-medium text-[11.5px] uppercase tracking-[0.16em] text-[#C25A3C]">
            {whatChanges.tag}
          </span>

          <TitleReveal
            as="h2"
            delay={0.08}
            className="font-normal text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.15] tracking-[-0.02em] text-[#1A1815] [text-wrap:pretty]"
          >
            You Get The Reach Of A Daily Creator.{' '}
            <span className="text-[#6E685E]">
              On The Schedule Of A Busy Expert.
            </span>
          </TitleReveal>
        </SectionHeadingReveal>

        {/* 4 Transformation Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whatChanges.items.map((item, idx) => (
            <ScrollReveal key={item.title} delay={idx * 80}>
              <div className="bg-[#FFFFFF] rounded-[16px] border border-[rgba(26,24,21,0.14)] p-7 shadow-[0_12px_32px_rgba(26,24,21,0.06)] flex flex-col justify-between h-full hover:border-[#C25A3C]/40 hover:-translate-y-1 transition-all duration-200">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-[10px] bg-[#F4F1EC] flex items-center justify-center">
                    {icons[idx]}
                  </div>

                  <h3 className="font-semibold text-[20px] text-[#1A1815]">
                    {item.title}
                  </h3>

                  <p className="font-normal text-[15px] leading-[1.65] text-[#5F5A52]">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[rgba(26,24,21,0.08)] text-[12px] font-semibold text-[#C25A3C] uppercase tracking-wider">
                  Transformation 0{idx + 1}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

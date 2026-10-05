/**
 * @file WhatWeDoSection.tsx
 * What We Do section matching the user's brief:
 * - Tag: What We Do
 * - Heading: One Team For Everything Between Your Idea And Your Audience
 * - Strategy · Production · Growth pillars
 */

import React from 'react';
import { Target, Film, TrendingUp } from 'lucide-react';
import { siteContent } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const WhatWeDoSection: React.FC = () => {
  const { whatWeDo } = siteContent;

  const icons = [
    <Target className="w-5 h-5 text-[#C25A3C]" />,
    <Film className="w-5 h-5 text-[#C25A3C]" />,
    <TrendingUp className="w-5 h-5 text-[#C25A3C]" />,
  ];

  return (
    <section
      id="what-we-do"
      aria-label="What We Do"
      className="py-16 md:py-[88px] border-b border-[rgba(26,24,21,0.12)] bg-[#FBFAF8] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-[56px] space-y-12 md:space-y-16">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl space-y-3">
            <span className="block font-medium text-[11.5px] uppercase tracking-[0.16em] text-[#C25A3C]">
              {whatWeDo.tag}
            </span>

            <h2 className="font-normal text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.15] tracking-[-0.02em] text-[#1A1815] [text-wrap:pretty]">
              One Team For Everything{' '}
              <span className="text-[#6E685E]">
                Between Your Idea And Your Audience
              </span>
            </h2>
          </div>
        </ScrollReveal>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whatWeDo.services.map((service, idx) => (
            <ScrollReveal key={service.title} delay={idx * 100}>
              <div className="bg-[#FFFFFF] rounded-[16px] border border-[rgba(26,24,21,0.14)] p-8 shadow-[0_12px_32px_rgba(26,24,21,0.06)] flex flex-col justify-between h-full hover:border-[#C25A3C]/40 hover:-translate-y-1 transition-all duration-200">
                <div className="space-y-5">
                  {/* Icon badge */}
                  <div className="w-11 h-11 rounded-[10px] bg-[#F4F1EC] border border-[rgba(26,24,21,0.08)] flex items-center justify-center">
                    {icons[idx]}
                  </div>

                  <div className="space-y-2">
                    <span className="text-[12px] font-mono font-medium text-[#C25A3C]">
                      0{idx + 1}
                    </span>
                    <h3 className="font-semibold text-[22px] text-[#1A1815]">
                      {service.title}
                    </h3>
                  </div>

                  <p className="font-normal text-[15.5px] leading-[1.65] text-[#5F5A52]">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[rgba(26,24,21,0.08)] space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-[13px] text-[#6E685E]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C25A3C]" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

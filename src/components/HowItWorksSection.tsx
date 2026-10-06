/**
 * @file HowItWorksSection.tsx
 * How It Works section strictly matching the user's latest brief:
 * - Tag: How It Works
 * - Heading: From First Call To Daily Posts In Four Steps
 * - 4 Steps: Strategy Call · Your Content Blueprint · We Produce, You Approve · Double Down On Winners
 */

import React from 'react';
import { siteContent } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';
import { SectionHeadingReveal } from './SectionTransition';
import { TitleReveal } from './TitleReveal';

export const HowItWorksSection: React.FC = () => {
  const { howItWorks } = siteContent;

  return (
    <section
      id="how-it-works"
      aria-label="How It Works"
      className="py-16 md:py-24 border-b border-[rgba(26,24,21,0.12)] bg-[#F4F1EC] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-14 space-y-12 md:space-y-16">
        {/* Section Header */}
        <SectionHeadingReveal className="max-w-3xl space-y-4">
          <span className="block font-medium text-[11.5px] uppercase tracking-[0.16em] text-[#C25A3C]">
            {howItWorks.tag}
          </span>

          <TitleReveal
            as="h2"
            delay={0.08}
            className="font-normal text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.15] tracking-[-0.02em] text-[#1A1815] [text-wrap:pretty]"
          >
            From First Call To Daily Posts{' '}
            <span className="text-[#6E685E]">
              In Four Steps
            </span>
          </TitleReveal>
        </SectionHeadingReveal>

        {/* 4 Steps Sequential Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {howItWorks.steps.map((step, idx) => (
            <ScrollReveal key={step.number} delay={idx * 80}>
              <div className="bg-[#FFFFFF] rounded-[16px] border border-[rgba(26,24,21,0.14)] p-6 shadow-[0_12px_32px_rgba(26,24,21,0.06)] flex flex-col justify-between h-full hover:border-[#C25A3C]/40 hover:-translate-y-1 transition-all duration-200">
                <div className="space-y-4">
                  {/* Step Number */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[22px] font-semibold text-[#C25A3C]">
                      {step.number}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8A8479]">
                      Step {idx + 1}
                    </span>
                  </div>

                  <h3 className="font-semibold text-[20px] text-[#1A1815]">
                    {step.title}
                  </h3>

                  <p className="font-normal text-[15px] leading-[1.65] text-[#5F5A52]">
                    {step.description}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-[rgba(26,24,21,0.08)]">
                  <div className="text-[11.5px] font-medium uppercase tracking-wider text-[#857F74]">
                    Milestone:
                  </div>
                  <div className="text-[13px] font-semibold text-[#1A1815] mt-1">
                    {idx === 0 && 'Written Game Plan Delivered'}
                    {idx === 1 && 'Angles & Posting Volume Mapped'}
                    {idx === 2 && 'First Batch Produced & Approved'}
                    {idx === 3 && 'Weekly Reporting & Iteration'}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * @file HowWeWorkSection.tsx
 * How We Work section matching the user's brief:
 * - Tag: How We Work
 * - Heading: A Clear Path From First Call To Daily Posts
 * - 4 Steps: Strategy Call · Content Blueprint · Production, Handled · Double Down On Winners
 */

import React from 'react';
import { siteContent } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const HowWeWorkSection: React.FC = () => {
  const { howWeWork } = siteContent;

  return (
    <section
      id="how-we-work"
      aria-label="How We Work"
      className="py-16 md:py-[88px] border-b border-[rgba(26,24,21,0.12)] bg-[#F4F1EC] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-[56px] space-y-12 md:space-y-16">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl space-y-3">
            <span className="block font-medium text-[11.5px] uppercase tracking-[0.16em] text-[#C25A3C]">
              {howWeWork.tag}
            </span>

            <h2 className="font-normal text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.15] tracking-[-0.02em] text-[#1A1815] [text-wrap:pretty]">
              A Clear Path{' '}
              <span className="text-[#6E685E]">
                From First Call To Daily Posts
              </span>
            </h2>
          </div>
        </ScrollReveal>

        {/* 4 Steps Sequential Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {howWeWork.steps.map((step, idx) => (
            <ScrollReveal key={step.number} delay={idx * 80}>
              <div className="bg-[#FFFFFF] rounded-[16px] border border-[rgba(26,24,21,0.14)] p-7 shadow-[0_12px_32px_rgba(26,24,21,0.06)] flex flex-col justify-between h-full hover:border-[#C25A3C]/40 hover:-translate-y-1 transition-all duration-200">
                <div className="space-y-4">
                  {/* Step Number */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[22px] font-semibold text-[#C25A3C]">
                      {step.number}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8A8479]">
                      Stage {idx + 1}
                    </span>
                  </div>

                  <h3 className="font-semibold text-[20px] text-[#1A1815]">
                    {step.title}
                  </h3>

                  <p className="font-normal text-[15px] leading-[1.65] text-[#5F5A52]">
                    {step.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-[rgba(26,24,21,0.08)]">
                  <div className="text-[11.5px] font-medium uppercase tracking-wider text-[#857F74]">
                    Deliverable:
                  </div>
                  <div className="text-[13.5px] font-semibold text-[#1A1815] mt-1">
                    {step.deliverable}
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

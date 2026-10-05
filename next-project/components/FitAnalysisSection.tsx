/**
 * @file FitAnalysisSection.tsx
 * Fit / Not A Fit section matching the user's latest brief:
 * - We're A Fit If (3 points)
 * - We're Not A Fit If (3 points)
 */

import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import { siteContent } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';
import { SectionHeadingReveal } from './SectionTransition';
import { TitleReveal } from './TitleReveal';

export const FitAnalysisSection: React.FC = () => {
  const { fitAnalysis } = siteContent;

  return (
    <section
      aria-label="Fit / Not A Fit Analysis"
      className="py-16 md:py-[88px] border-b border-[rgba(26,24,21,0.12)] bg-[#FBFAF8]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-[56px] space-y-12 md:space-y-16">
        {/* Section Header */}
        <SectionHeadingReveal className="max-w-3xl space-y-3">
          <span className="block font-medium text-[11.5px] uppercase tracking-[0.16em] text-[#C25A3C]">
            Mutual Selection
          </span>

          <TitleReveal
            as="h2"
            delay={0.08}
            className="font-normal text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.15] tracking-[-0.02em] text-[#1A1815] [text-wrap:pretty]"
          >
            Fit / Not A Fit
          </TitleReveal>

          <p className="font-normal text-[16px] text-[#5F5A52] leading-[1.68]">
            We work with four clients per quarter. That requires complete alignment on standards, goals, and communication.
          </p>
        </SectionHeadingReveal>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* Card 1: We're A Fit If */}
          <ScrollReveal delay={100}>
            <div className="bg-[#FFFFFF] rounded-[16px] border border-emerald-500/30 p-8 shadow-[0_12px_32px_rgba(26,24,21,0.06)] h-full flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-[10px] bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-[22px] text-[#1A1815]">
                    {fitAnalysis.fit.title}
                  </h3>
                </div>

                <ul className="space-y-4 pt-2">
                  {fitAnalysis.fit.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                      <span className="font-medium text-[15.5px] leading-[1.5] text-[#1A1815]">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-[rgba(26,24,21,0.08)] text-[13px] text-emerald-700 font-medium">
                High-leverage partnership built for steady, compounded authority.
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: We're Not A Fit If */}
          <ScrollReveal delay={200}>
            <div className="bg-[#FFFFFF] rounded-[16px] border border-[rgba(26,24,21,0.14)] p-8 shadow-[0_12px_32px_rgba(26,24,21,0.06)] h-full flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-[10px] bg-[#F4F1EC] text-[#6E685E] flex items-center justify-center">
                    <XCircle className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-[22px] text-[#1A1815]">
                    {fitAnalysis.notFit.title}
                  </h3>
                </div>

                <ul className="space-y-4 pt-2">
                  {fitAnalysis.notFit.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-[#857F74] mt-0.5 shrink-0" />
                      <span className="font-medium text-[15.5px] leading-[1.5] text-[#5F5A52]">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-[rgba(26,24,21,0.08)] text-[13px] text-[#857F74]">
                We respect your time and ours. Integrity over volume, always.
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

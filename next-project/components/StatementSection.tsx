/**
 * @file StatementSection.tsx
 * High-impact editorial statement strictly matching the brief:
 * "Great Experts Stay Invisible For One Reason: Content Takes Time They Don't Have.
 *  We Exist To Remove That Cost, So Your Expertise Gets Seen Without Costing You Your Week."
 */

import React from 'react';
import { siteContent } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const StatementSection: React.FC = () => {
  const { statement } = siteContent;

  return (
    <section
      aria-label="Core Philosophy Statement"
      className="py-16 md:py-20 bg-[#F4F1EC] border-b border-[rgba(26,24,21,0.12)] relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 md:px-[56px] text-center">
        <ScrollReveal>
          <div className="space-y-4">
            {/* Subtle quotation glyph or label */}
            <span className="inline-block text-[#C25A3C] font-semibold text-[13px] uppercase tracking-[0.16em]">
              The Core Problem
            </span>

            {/* Statement block */}
            <blockquote className="font-normal text-[24px] sm:text-[32px] md:text-[38px] leading-[1.24] tracking-[-0.02em] text-[#1A1815] [text-wrap:pretty]">
              “Great experts stay invisible for one reason:{' '}
              <span className="text-[#6E685E]">
                content takes time they don’t have.
              </span>{' '}
              We exist to remove that cost, so your expertise gets seen without costing you your week.”
            </blockquote>

            <div className="pt-2 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#C25A3C]/40" />
              <span className="text-[13px] font-medium text-[#857F74] tracking-wide uppercase">
                AI Agentic Verse Principle
              </span>
              <span className="h-px w-10 bg-[#C25A3C]/40" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

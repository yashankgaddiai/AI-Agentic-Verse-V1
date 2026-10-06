/**
 * @file WhoWeServeSection.tsx
 * Who We Serve section strictly matching the user's latest brief:
 * - Tag: Who We Serve
 * - Heading: Two Kinds Of Experts. One Goal: Be The Obvious Choice.
 * - Coaches & Founders offers with links to coach.html and founder.html
 */

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { siteContent } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';
import { SectionHeadingReveal } from './SectionTransition';
import { TitleReveal } from './TitleReveal';

export const WhoWeServeSection: React.FC = () => {
  const { whoWeServe } = siteContent;

  return (
    <section
      id="who-we-serve"
      aria-label="Who We Serve"
      className="py-16 md:py-24 border-b border-[rgba(26,24,21,0.12)] bg-[#FBFAF8] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-14 space-y-12 md:space-y-16">
        {/* Section Header */}
        <SectionHeadingReveal className="max-w-3xl space-y-4">
          <span className="block font-medium text-[11.5px] uppercase tracking-[0.16em] text-[#C25A3C]">
            {whoWeServe.tag}
          </span>

          <TitleReveal
            as="h2"
            delay={0.08}
            className="font-normal text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.15] tracking-[-0.02em] text-[#1A1815] [text-wrap:pretty]"
          >
            Two Kinds Of Experts.{' '}
            <span className="text-[#6E685E]">
              One Goal: Be The Obvious Choice.
            </span>
          </TitleReveal>
        </SectionHeadingReveal>

        {/* 2 Audience Offer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Coaches */}
          <ScrollReveal delay={100}>
            <div className="bg-[#FFFFFF] rounded-[16px] border border-[rgba(26,24,21,0.14)] p-8 shadow-[0_12px_32px_rgba(26,24,21,0.06)] flex flex-col justify-between h-full hover:border-[#C25A3C]/40 hover:-translate-y-1 transition-all duration-200">
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-[12px] font-semibold uppercase tracking-wider text-[#C25A3C]">
                    For High-Ticket & Executive Mentors
                  </span>
                  <h3 className="font-semibold text-[26px] text-[#1A1815]">
                    Coaches
                  </h3>
                </div>

                <p className="font-normal text-[16px] leading-[1.68] text-[#5F5A52]">
                  {whoWeServe.audiences[0].description}
                </p>

                <div className="space-y-2">
                  <div className="text-[13px] font-semibold text-[#1A1815] uppercase tracking-wider">
                    Outcomes:
                  </div>
                  <ul className="text-[14px] text-[#6E685E] space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C25A3C] mt-2 shrink-0" />
                      <span>Prospects consume your frameworks before getting on calls</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C25A3C] mt-2 shrink-0" />
                      <span>All calendar coaching delivery hours are 100% protected</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Dedicated Offer Link: coach.html */}
              <div className="mt-6 pt-6 border-t border-[rgba(26,24,21,0.08)]">
                <a
                  href={whoWeServe.audiences[0].linkUrl}
                  className="inline-flex items-center gap-2 font-semibold text-[15px] text-[#1A1815] hover:text-[#C25A3C] transition-colors group"
                >
                  <span>{whoWeServe.audiences[0].linkText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Founders */}
          <ScrollReveal delay={200}>
            <div className="bg-[#FFFFFF] rounded-[16px] border border-[rgba(26,24,21,0.14)] p-8 shadow-[0_12px_32px_rgba(26,24,21,0.06)] flex flex-col justify-between h-full hover:border-[#C25A3C]/40 hover:-translate-y-1 transition-all duration-200">
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-[12px] font-semibold uppercase tracking-wider text-[#C25A3C]">
                    For B2B Operators, CEOs & Innovators
                  </span>
                  <h3 className="font-semibold text-[26px] text-[#1A1815]">
                    Founders
                  </h3>
                </div>

                <p className="font-normal text-[16px] leading-[1.68] text-[#5F5A52]">
                  {whoWeServe.audiences[1].description}
                </p>

                <div className="space-y-2">
                  <div className="text-[13px] font-semibold text-[#1A1815] uppercase tracking-wider">
                    Outcomes:
                  </div>
                  <ul className="text-[14px] text-[#6E685E] space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C25A3C] mt-2 shrink-0" />
                      <span>Consistent executive presence attracting talent, funds, and deals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C25A3C] mt-2 shrink-0" />
                      <span>Zero evenings spent writing social drafts or reviewing timelines</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Dedicated Offer Link: founder.html */}
              <div className="mt-6 pt-6 border-t border-[rgba(26,24,21,0.08)]">
                <a
                  href={whoWeServe.audiences[1].linkUrl}
                  className="inline-flex items-center gap-2 font-semibold text-[15px] text-[#1A1815] hover:text-[#C25A3C] transition-colors group"
                >
                  <span>{whoWeServe.audiences[1].linkText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

/**
 * @file WhoWeServeSection.tsx
 * Who We Serve section matching the user's brief:
 * - Tag: Who We Serve
 * - Heading: Built For People Who Sell On Trust
 * - Coaches & Founders offers with links to coach.html and founder.html
 */

import React from 'react';
import { ArrowRight, UserCheck, Briefcase } from 'lucide-react';
import { siteContent } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const WhoWeServeSection: React.FC = () => {
  const { whoWeServe } = siteContent;

  return (
    <section
      id="who-we-serve"
      aria-label="Who We Serve"
      className="py-16 md:py-[88px] border-b border-[rgba(26,24,21,0.12)] bg-[#FBFAF8] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-[56px] space-y-12 md:space-y-16">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl space-y-3">
            <span className="block font-medium text-[11.5px] uppercase tracking-[0.16em] text-[#C25A3C]">
              {whoWeServe.tag}
            </span>

            <h2 className="font-normal text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.15] tracking-[-0.02em] text-[#1A1815] [text-wrap:pretty]">
              Built For People{' '}
              <span className="text-[#6E685E]">
                Who Sell On Trust
              </span>
            </h2>
          </div>
        </ScrollReveal>

        {/* 2 Audience Offer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* Card 1: Coaches */}
          <ScrollReveal delay={100}>
            <div className="bg-[#FFFFFF] rounded-[16px] border border-[rgba(26,24,21,0.14)] p-8 shadow-[0_12px_32px_rgba(26,24,21,0.06)] flex flex-col justify-between h-full hover:border-[#C25A3C]/40 hover:-translate-y-1 transition-all duration-200">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-[12px] bg-[#F4F1EC] border border-[rgba(26,24,21,0.08)] flex items-center justify-center">
                  <UserCheck className="w-6 h-6 text-[#C25A3C]" />
                </div>

                <div className="space-y-1.5">
                  <span className="text-[12px] font-semibold uppercase tracking-wider text-[#C25A3C]">
                    For Executive & High-Ticket
                  </span>
                  <h3 className="font-semibold text-[26px] text-[#1A1815]">
                    Coaches
                  </h3>
                </div>

                <p className="font-normal text-[16px] leading-[1.68] text-[#5F5A52]">
                  Stay visible every day without giving up your coaching hours. Choose the Content Engine, or the Full Growth Engine if you want content and ads working as one channel.
                </p>

                <div className="space-y-2 pt-2">
                  <div className="text-[13px] font-semibold text-[#1A1815] uppercase tracking-wider">
                    Core Benefits:
                  </div>
                  <ul className="text-[14px] text-[#6E685E] space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C25A3C] mt-2 shrink-0" />
                      <span>Zero interruption to your client coaching sessions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C25A3C] mt-2 shrink-0" />
                      <span>Consistent inbound authority attracting high-ticket retainers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C25A3C] mt-2 shrink-0" />
                      <span>Choice between Content Engine or Full Growth (with Ads)</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Dedicated Offer Link: coach.html */}
              <div className="pt-8 mt-6 border-t border-[rgba(26,24,21,0.08)]">
                <a
                  href="/coach.html"
                  className="inline-flex items-center gap-2 font-semibold text-[15px] text-[#1A1815] hover:text-[#C25A3C] transition-colors group"
                >
                  <span>See The Coach Offer →</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Founders */}
          <ScrollReveal delay={200}>
            <div className="bg-[#FFFFFF] rounded-[16px] border border-[rgba(26,24,21,0.14)] p-8 shadow-[0_12px_32px_rgba(26,24,21,0.06)] flex flex-col justify-between h-full hover:border-[#C25A3C]/40 hover:-translate-y-1 transition-all duration-200">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-[12px] bg-[#F4F1EC] border border-[rgba(26,24,21,0.08)] flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-[#C25A3C]" />
                </div>

                <div className="space-y-1.5">
                  <span className="text-[12px] font-semibold uppercase tracking-wider text-[#C25A3C]">
                    For B2B Operators & CEOs
                  </span>
                  <h3 className="font-semibold text-[26px] text-[#1A1815]">
                    Founders
                  </h3>
                </div>

                <p className="font-normal text-[16px] leading-[1.68] text-[#5F5A52]">
                  Build a following on LinkedIn and X in your own words, without spending your evenings writing and editing.
                </p>

                <div className="space-y-2 pt-2">
                  <div className="text-[13px] font-semibold text-[#1A1815] uppercase tracking-wider">
                    Core Benefits:
                  </div>
                  <ul className="text-[14px] text-[#6E685E] space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C25A3C] mt-2 shrink-0" />
                      <span>Executive presence that drives recruiting, investors and pipeline</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C25A3C] mt-2 shrink-0" />
                      <span>Zero hours spent writing drafts or editing video timelines</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C25A3C] mt-2 shrink-0" />
                      <span>Authentic tone captured from 30-minute monthly syncs or raw audio</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Dedicated Offer Link: founder.html */}
              <div className="pt-8 mt-6 border-t border-[rgba(26,24,21,0.08)]">
                <a
                  href="/founder.html"
                  className="inline-flex items-center gap-2 font-semibold text-[15px] text-[#1A1815] hover:text-[#C25A3C] transition-colors group"
                >
                  <span>See The Founder Offer →</span>
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

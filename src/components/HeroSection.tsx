/**
 * @file HeroSection.tsx
 * Hero section strictly matching the user's latest brief:
 * - Tag: For Coaches And Founders Who Sell On Trust
 * - Headline: Be The Expert Your Market Sees Every Day. Without Filming, Editing, Or Posting.
 * - Subtext: We Turn What You Already Know Into Daily Content, In Your Own Face And Voice...
 * - Button: Book A Strategy Call
 * - Scarcity Notice: We Take Four Clients A Quarter. Every Client Gets The Team That Sold Them.
 */

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { siteContent } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';
import { TitleReveal } from './TitleReveal';

export const HeroSection: React.FC = () => {
  const { hero } = siteContent;

  return (
    <section
      id="home"
      aria-label="Hero Introduction"
      className="relative overflow-hidden min-h-[calc(100svh-5rem)] flex items-center py-16 md:py-24 border-b border-[rgba(26,24,21,0.12)] scroll-mt-20"
    >
      {/* Soft terracotta radial glow behind top centre */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[760px] h-[380px] -z-0 opacity-70"
        style={{
          background: 'radial-gradient(ellipse 65% 55% at 50% 0%, rgba(194, 90, 60, 0.18) 0%, transparent 72%)',
        }}
      />

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-14 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <ScrollReveal>
            {/* Tag: For Coaches And Founders Who Sell On Trust */}
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-[rgba(194,90,60,0.4)] bg-[#C25A3C]/[0.06] text-[#C25A3C] text-[12.5px] font-medium tracking-wide">
              {hero.tag}
            </div>
          </ScrollReveal>

          {/* Headline with subtle TitleReveal */}
          <TitleReveal
            as="h1"
            delay={0.1}
            className="font-normal text-[40px] sm:text-[52px] lg:text-[68px] leading-[1.06] tracking-[-0.025em] text-[#1A1815] [text-wrap:pretty]"
          >
            Be The Expert Your Market Sees Every Day.{' '}
            <span className="text-[#6E685E]">
              Without Filming, Editing, Or Posting.
            </span>
          </TitleReveal>

          {/* Subtext */}
          <ScrollReveal delay={200}>
            <p className="font-normal text-[17px] sm:text-[19px] leading-[1.68] text-[#5F5A52] max-w-2xl mx-auto">
              {hero.subtext}
            </p>
          </ScrollReveal>

          {/* CTA Button & Scarcity Notice */}
          <ScrollReveal delay={300}>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={hero.ctaButton.href}
                  className="inline-flex items-center justify-center gap-2 font-semibold text-[15px] bg-[#C25A3C] text-[#FBFAF8] rounded-[8.5px] h-12 px-8 hover:bg-[#A94B30] transition-colors duration-150 shadow-xs group"
                >
                  <span>{hero.ctaButton.label}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                {/* Scarcity Notice */}
                <div className="inline-flex items-center gap-2 text-[13.5px] font-medium text-[#6E685E]">
                  <span className="w-2 h-2 rounded-full bg-[#C25A3C]" />
                  <span>{hero.scarcityNotice}</span>
                </div>
              </div>

              {/* Quick guarantees pill row */}
              <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-2 text-[13px] text-[#5F5A52]">
                <span>First Post Live In 7 Days</span>
                <span aria-hidden="true" className="text-[#A39C90]">·</span>
                <span>Or Month One Free</span>
                <span aria-hidden="true" className="text-[#A39C90]">·</span>
                <span>You Approve Everything</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

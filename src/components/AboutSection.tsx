/**
 * @file AboutSection.tsx
 * About section strictly matching the user's latest brief:
 * - Tag: About Us
 * - Heading: Small On Purpose
 * - Narrative paragraphs
 * - [Add Your Founder Story Here: Who You Are, Why You Started, And One Result You're Proud Of.]
 */

import React from 'react';
import { Users2, Award, HeartHandshake } from 'lucide-react';
import { siteContent } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';
import { TitleReveal } from './TitleReveal';

export const AboutSection: React.FC = () => {
  const { aboutUs } = siteContent;

  return (
    <section
      id="about"
      aria-label="About Us"
      className="py-16 md:py-[88px] border-b border-[rgba(26,24,21,0.12)] bg-[#F4F1EC] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-[56px] space-y-14 md:space-y-16">
        {/* Top Part: Heading & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-[56px] items-start">
          <div className="space-y-3">
            <ScrollReveal>
              <span className="block font-medium text-[11.5px] uppercase tracking-[0.16em] text-[#C25A3C]">
                {aboutUs.tag}
              </span>
            </ScrollReveal>

            <TitleReveal
              as="h2"
              delay={0.08}
              className="font-normal text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.15] tracking-[-0.02em] text-[#1A1815] [text-wrap:pretty]"
            >
              {aboutUs.heading}
            </TitleReveal>

            <ScrollReveal delay={120}>
              <p className="font-medium text-[16px] text-[#C25A3C] pt-2">
                Four Clients A Quarter. The Senior Team Runs Your Account.
              </p>
            </ScrollReveal>
          </div>

          <div className="space-y-5">
            {aboutUs.paragraphs.map((paragraph, idx) => (
              <ScrollReveal key={idx} delay={idx * 80}>
                <p className="font-normal text-[16px] sm:text-[17px] leading-[1.72] text-[#5F5A52]">
                  {paragraph}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Founder Story Callout Block (Clearly marked placeholder) */}
        <ScrollReveal delay={250}>
          <div className="bg-[#FFFFFF] rounded-[16px] border border-dashed border-[#C25A3C]/40 p-8 sm:p-10 shadow-xs relative">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C25A3C]/10 text-[#C25A3C] text-[11.5px] font-semibold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" />
                <span>Founder Narrative</span>
              </div>

              <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#1A1815]">
                {aboutUs.founderStoryPlaceholder}
              </h3>

              <p className="text-[14.5px] leading-[1.65] text-[#6E685E]">
                Placeholder note: Customize this card with your background, the turning point when you realized brilliant coaches and founders remained invisible, and a benchmark metric or client transformation.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

/**
 * @file AboutSection.tsx
 * About section strictly matching the user's latest brief:
 * - Tag: About Us
 * - Heading: Small On Purpose
 * - Narrative paragraphs
 * - [Add Your Founder Story Here: Who You Are, Why You Started, And One Result You're Proud Of.]
 */

import React from 'react';
import { siteContent } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';
import { TitleReveal } from './TitleReveal';

export const AboutSection: React.FC = () => {
  const { aboutUs } = siteContent;

  return (
    <section
      id="about"
      aria-label="About Us"
      className="py-16 md:py-24 border-b border-[rgba(26,24,21,0.12)] bg-[#F4F1EC] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-14">
        {/* Heading & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-14 items-start">
          <div className="space-y-4">
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
              <p className="font-medium text-[16px] text-[#C25A3C]">
                Four Clients A Quarter. The Senior Team Runs Your Account.
              </p>
            </ScrollReveal>
          </div>

          <div className="space-y-6">
            {aboutUs.paragraphs.map((paragraph, idx) => (
              <ScrollReveal key={idx} delay={idx * 80}>
                <p className="font-normal text-[16px] sm:text-[17px] leading-[1.72] text-[#5F5A52]">
                  {paragraph}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

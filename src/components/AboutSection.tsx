/**
 * @file AboutSection.tsx
 * About section strictly matching the user's brief:
 * - Tag: About Us
 * - Heading: Small On Purpose
 * - Narrative paragraphs & 3 core principles (Your Voice First, Fast To Start, Measured Weekly)
 */

import React from 'react';
import { Mic, Zap, BarChart3 } from 'lucide-react';
import { siteContent } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const AboutSection: React.FC = () => {
  const { aboutUs } = siteContent;

  const guaranteeIcons = [
    <Mic className="w-5 h-5 text-[#C25A3C]" />,
    <Zap className="w-5 h-5 text-[#C25A3C]" />,
    <BarChart3 className="w-5 h-5 text-[#C25A3C]" />,
  ];

  return (
    <section
      id="about"
      aria-label="About Us"
      className="py-16 md:py-[88px] border-b border-[rgba(26,24,21,0.12)] bg-[#FBFAF8] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-[56px] space-y-14 md:space-y-16">
        {/* Top Part: Heading & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-[56px] items-start">
          <ScrollReveal>
            <div className="space-y-3">
              <span className="block font-medium text-[11.5px] uppercase tracking-[0.16em] text-[#C25A3C]">
                {aboutUs.tag}
              </span>

              <h2 className="font-normal text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.15] tracking-[-0.02em] text-[#1A1815] [text-wrap:pretty]">
                Small On Purpose
              </h2>

              <p className="font-medium text-[16px] text-[#C25A3C] pt-2">
                Four Clients A Quarter. Direct Senior Attention.
              </p>
            </div>
          </ScrollReveal>

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

        {/* 3 Core Guarantees / Principles */}
        <div className="pt-8 border-t border-[rgba(26,24,21,0.1)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aboutUs.guarantees.map((item, idx) => (
              <ScrollReveal key={item.title} delay={idx * 100}>
                <div className="bg-[#FFFFFF] rounded-[16px] border border-[rgba(26,24,21,0.14)] p-7 shadow-[0_12px_32px_rgba(26,24,21,0.06)] flex flex-col justify-between h-full hover:border-[#C25A3C]/40 transition-colors">
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-[10px] bg-[#F4F1EC] flex items-center justify-center">
                      {guaranteeIcons[idx]}
                    </div>

                    <h3 className="font-semibold text-[20px] text-[#1A1815]">
                      {item.title}
                    </h3>

                    <p className="font-normal text-[15px] leading-[1.65] text-[#5F5A52]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

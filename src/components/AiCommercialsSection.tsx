/**
 * @file AiCommercialsSection.tsx
 * AI Commercials add-on offer, condensed from public/ai-commercials.html:
 * - Heading: Full ad creative, built without a camera crew, a studio, or a shoot day.
 * - Short-timeline use cases, What you get, How it fits with the engines
 * - Book a call (Calendly) + link to the full offer page
 */

import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { BOOKING_URL } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';
import { SectionHeadingReveal } from './SectionTransition';
import { TitleReveal } from './TitleReveal';

const useCases = [
  'Product launches',
  'Seasonal offers',
  'New landing pages',
  'Testing five ad angles in one week instead of one',
];

const deliverables = [
  'Ad script written to sell, not just describe the product',
  'AI generated presenter or voice, matched to your brand tone',
  'Full edit: pacing, captions, sound, platform-ready formatting',
  'Multiple angles tested at once, so you find the winning ad faster',
  'Delivered ready to upload to Meta, TikTok, or YouTube ads',
];

export const AiCommercialsSection: React.FC = () => {
  return (
    <section
      id="ai-commercials"
      aria-label="AI Commercials"
      className="py-16 md:py-24 border-b border-[rgba(26,24,21,0.12)] bg-[#1A1815] text-[#FBFAF8] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-14 space-y-12 md:space-y-16">
        {/* Section Header */}
        <SectionHeadingReveal className="max-w-3xl space-y-4">
          <span className="block font-medium text-[11.5px] uppercase tracking-[0.16em] text-[#E08A6D]">
            AI Commercials
          </span>

          <TitleReveal
            as="h2"
            delay={0.08}
            className="font-normal text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.15] tracking-[-0.02em] text-[#FBFAF8] [text-wrap:pretty]"
          >
            Full ad creative,{' '}
            <span className="text-white/60">
              built without a camera crew, a studio, or a shoot day.
            </span>
          </TitleReveal>

          <p className="font-normal text-[16px] leading-[1.68] text-white/70">
            We script, voice, and produce commercial-style video ads using AI generated actors and AI cloned voices. You get a finished ad ready to run. No film crew. No studio booking. No reshoots because one take was off.
          </p>
        </SectionHeadingReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Use cases + How it fits */}
          <ScrollReveal delay={100}>
            <div className="h-full bg-white/[0.04] rounded-[16px] border border-white/10 p-8 flex flex-col justify-between gap-6">
              <div className="space-y-6">
                <h3 className="font-semibold text-[20px] leading-[1.4] text-[#FBFAF8]">
                  This fits any business that needs ad creative on a short timeline.
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {useCases.map((useCase) => (
                    <li
                      key={useCase}
                      className="px-4 py-2 rounded-full border border-white/15 text-[14px] text-white/85"
                    >
                      {useCase}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-white/10 space-y-2">
                <p className="text-[15px] leading-[1.65] text-white/70">
                  If you are already on the Content Engine or the Full Growth Engine, this plugs right in. It uses the same AI avatar we already built for your organic content.
                </p>
                <p className="font-medium text-[17px] text-[#E08A6D]">
                  One avatar, two uses: daily content and paid ads.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* What you get */}
          <ScrollReveal delay={200}>
            <div className="h-full bg-white/[0.04] rounded-[16px] border border-white/10 p-8 space-y-6">
              <h3 className="font-semibold text-[20px] text-[#FBFAF8]">What you get</h3>
              <ul className="space-y-4">
                {deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-0.5 shrink-0 text-[#E08A6D]" />
                    <span className="text-[15.5px] leading-6 text-white/85">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* Actions */}
        <ScrollReveal delay={300}>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 h-14 px-10 rounded-[10px] bg-[#C25A3C] text-[#FBFAF8] font-semibold text-[16px] tracking-[-0.005em] shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_8px_20px_-6px_rgba(194,90,60,0.55)] transition-[background-color,box-shadow,translate] duration-200 ease-out hover:bg-[#A94B30] motion-safe:hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>See examples. Book a call.</span>
              <ArrowRight className="w-[18px] h-[18px] transition-transform duration-200 ease-out motion-safe:group-hover:translate-x-1" />
            </a>
            <a
              href="/ai-commercials.html"
              className="font-semibold text-[15px] text-white/80 hover:text-white underline underline-offset-4 decoration-white/30 hover:decoration-white transition-colors"
            >
              See the full AI Commercials offer
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

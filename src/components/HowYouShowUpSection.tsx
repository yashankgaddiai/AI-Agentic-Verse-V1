/**
 * @file HowYouShowUpSection.tsx
 * How You Show Up section strictly matching the user's latest brief:
 * - Tag: How You Show Up
 * - Heading: Film When You Want To. Or Never Film Again.
 * - Real You (Bullet points: Your Real Face And Energy, No Set, No Crew, No Editing)
 * - AI Avatar (Bullet points: You Never Film Again, You Approve A Test Video First, Or You Don't Pay)
 * - Switch note: Most Clients Start With Real You And Switch To The Avatar...
 */

import React from 'react';
import { Smartphone, Bot, Check, ArrowRight } from 'lucide-react';
import { siteContent } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';
import { SectionHeadingReveal } from './SectionTransition';
import { TitleReveal } from './TitleReveal';

export const HowYouShowUpSection: React.FC = () => {
  const { howYouShowUp } = siteContent;

  return (
    <section
      id="how-you-show-up"
      aria-label="How You Show Up"
      className="py-16 md:py-[88px] border-b border-[rgba(26,24,21,0.12)] bg-[#F4F1EC] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-[56px] space-y-12 md:space-y-16">
        {/* Section Header */}
        <SectionHeadingReveal className="max-w-3xl space-y-3">
          <span className="block font-medium text-[11.5px] uppercase tracking-[0.16em] text-[#C25A3C]">
            {howYouShowUp.tag}
          </span>

          <TitleReveal
            as="h2"
            delay={0.08}
            className="font-normal text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.15] tracking-[-0.02em] text-[#1A1815] [text-wrap:pretty]"
          >
            Film When You Want To.{' '}
            <span className="text-[#6E685E]">Or Never Film Again.</span>
          </TitleReveal>
        </SectionHeadingReveal>

        {/* Two Options Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* Card 1: Real You */}
          <ScrollReveal delay={100}>
            <div className="bg-[#FFFFFF] rounded-[16px] border border-[rgba(26,24,21,0.14)] p-8 shadow-[0_12px_32px_rgba(26,24,21,0.06)] flex flex-col justify-between h-full hover:border-[#C25A3C]/40 transition-colors">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-[12px] bg-[#FBFAF8] border border-[rgba(26,24,21,0.1)] flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-[#1A1815]" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11.5px] font-semibold uppercase tracking-wider bg-[#FBFAF8] border border-[rgba(26,24,21,0.12)] text-[#5F5A52]">
                    Option 01
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-[26px] text-[#1A1815]">
                    Real You
                  </h3>
                  <div className="text-[13px] font-medium text-[#C25A3C]">
                    Film on your phone whenever it fits your day
                  </div>
                </div>

                <p className="font-normal text-[16px] leading-[1.68] text-[#5F5A52]">
                  Film short clips on your phone, whenever it fits your day. We turn them into scripted, edited, captioned posts for every platform.
                </p>

                {/* Specified Bullet Points */}
                <div className="bg-[#FBFAF8] rounded-[12px] p-5 border border-[rgba(26,24,21,0.08)] space-y-3">
                  <div className="text-[12.5px] font-semibold text-[#1A1815] uppercase tracking-wider">
                    Core Attributes:
                  </div>
                  <ul className="text-[14px] text-[#37332C] space-y-2.5">
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#C25A3C] shrink-0" />
                      <span className="font-medium">Your Real Face And Energy</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#C25A3C] shrink-0" />
                      <span className="font-medium">No Set, No Crew, No Editing</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[rgba(26,24,21,0.08)] text-[13.5px] text-[#857F74]">
                Perfect for coaches and founders who love talking on camera without post-production friction.
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: AI Avatar */}
          <ScrollReveal delay={200}>
            <div className="bg-[#FFFFFF] rounded-[16px] border-2 border-[#C25A3C]/35 p-8 shadow-[0_12px_32px_rgba(194,90,60,0.08)] flex flex-col justify-between h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#C25A3C] text-white px-4 py-1 text-[11px] font-bold uppercase tracking-widest rounded-bl-[12px]">
                Autonomous System
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-[12px] bg-[#C25A3C]/10 border border-[#C25A3C]/20 flex items-center justify-center">
                    <Bot className="w-6 h-6 text-[#C25A3C]" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11.5px] font-semibold uppercase tracking-wider bg-[#C25A3C]/10 text-[#C25A3C]">
                    Option 02
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-[26px] text-[#1A1815]">
                    AI Avatar
                  </h3>
                  <div className="text-[13px] font-medium text-[#C25A3C]">
                    Film once, run forever
                  </div>
                </div>

                <p className="font-normal text-[16px] leading-[1.68] text-[#5F5A52]">
                  Send us one 5 minute HD video and one 10 to 15 minute voice recording. Once. We build a clone of your face and voice, and every post comes from it.
                </p>

                {/* Specified Bullet Points */}
                <div className="bg-[#FBFAF8] rounded-[12px] p-5 border border-[rgba(26,24,21,0.08)] space-y-3">
                  <div className="text-[12.5px] font-semibold text-[#1A1815] uppercase tracking-wider">
                    Core Attributes:
                  </div>
                  <ul className="text-[14px] text-[#37332C] space-y-2.5">
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#C25A3C] shrink-0" />
                      <span className="font-medium">You Never Film Again</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#C25A3C] shrink-0" />
                      <span className="font-medium">You Approve A Test Video First, Or You Don't Pay</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[rgba(26,24,21,0.08)] text-[13.5px] text-[#C25A3C] font-medium">
                Perfect for busy operators who want omnipresent reach with absolute zero weekly camera hours.
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Transition Guarantee Note */}
        <ScrollReveal delay={300}>
          <div className="bg-[#FFFFFF] rounded-[14px] border border-[rgba(26,24,21,0.12)] p-6 text-center max-w-4xl mx-auto shadow-xs">
            <p className="font-medium text-[15px] sm:text-[16px] text-[#1A1815]">
              {howYouShowUp.note}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

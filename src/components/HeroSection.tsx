/**
 * @file HeroSection.tsx
 * Hero section strictly matching the user's latest brief:
 * - Tag: For Coaches And Founders Who Sell On Trust
 * - Headline: Be The Expert Your Market Sees Every Day. Without Filming, Editing, Or Posting.
 * - Subtext: We Turn What You Already Know Into Daily Content, In Your Own Face And Voice...
 * - Button: Book A Strategy Call
 * - Scarcity Notice: We Take Four Clients A Quarter. Every Client Gets The Team That Sold Them.
 */

import React, { useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { siteContent } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';
import { TitleReveal } from './TitleReveal';

// YouTube ID of the intro video shown in the hero (https://youtu.be/MXbGyNJkQc4)
const HERO_VIDEO_ID = 'MXbGyNJkQc4';

interface HeroSectionProps {
  onOpenAudit: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAudit }) => {
  const { hero } = siteContent;
  const [playingVideo, setPlayingVideo] = useState(false);

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

          {/* Intro video: thumbnail first, YouTube player loads on click */}
          <ScrollReveal delay={250}>
            <div className="relative max-w-4xl mx-auto aspect-video rounded-[20px] overflow-hidden border border-[rgba(26,24,21,0.14)] bg-[#1A1815] shadow-[0_24px_60px_-20px_rgba(26,24,21,0.35)]">
              {playingVideo ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${HERO_VIDEO_ID}?autoplay=1&rel=0&playsinline=1`}
                  title="AI Agentic Verse intro video"
                  allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setPlayingVideo(true)}
                  aria-label="Play intro video"
                  className="group absolute inset-0 w-full h-full"
                >
                  <img
                    src="/images/hero-video.jpg"
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  />
                  <span className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-200" />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="w-20 h-20 rounded-full bg-[#C25A3C] flex items-center justify-center shadow-[0_12px_32px_-8px_rgba(194,90,60,0.7)] transition-transform duration-200 ease-out motion-safe:group-hover:scale-110">
                      <Play className="w-8 h-8 fill-[#FBFAF8] text-[#FBFAF8] translate-x-0.5" />
                    </span>
                  </span>
                </button>
              )}
            </div>
          </ScrollReveal>

          {/* CTA Button & Scarcity Notice */}
          <ScrollReveal delay={300}>
            <div className="flex flex-col items-center gap-4">
              <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={hero.ctaButton.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 h-14 px-10 rounded-[10px] bg-[#C25A3C] text-[#FBFAF8] font-semibold text-[16px] tracking-[-0.005em] shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_8px_20px_-6px_rgba(194,90,60,0.55)] transition-[background-color,box-shadow,translate] duration-200 ease-out hover:bg-[#A94B30] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_14px_28px_-8px_rgba(194,90,60,0.6)] motion-safe:hover:-translate-y-0.5 active:translate-y-0 active:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_4px_10px_-4px_rgba(194,90,60,0.5)]"
                >
                  <span>{hero.ctaButton.label}</span>
                  <ArrowRight className="w-[18px] h-[18px] transition-transform duration-200 ease-out motion-safe:group-hover:translate-x-1" />
                </a>

                {/* Free AI Marketing Audit (opens lead form popup) */}
                <button
                  type="button"
                  onClick={onOpenAudit}
                  className="w-full sm:w-auto inline-flex items-center justify-center h-14 px-8 rounded-[10px] border border-[rgba(26,24,21,0.18)] bg-white text-[#1A1815] font-semibold text-[16px] tracking-[-0.005em] transition-colors duration-200 hover:border-[#1A1815]"
                >
                  Get Your Free AI Marketing Audit
                </button>
              </div>

              {/* Scarcity Notice */}
              <div className="inline-flex items-center gap-2 text-[13.5px] font-medium text-[#6E685E]">
                <span className="w-2 h-2 rounded-full bg-[#C25A3C] shrink-0" />
                <span>{hero.scarcityNotice}</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

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
import { siteContent, ShowcaseVideo } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';
import { TitleReveal } from './TitleReveal';

interface HeroSectionProps {
  onPlayFeatured?: (video: ShowcaseVideo) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onPlayFeatured }) => {
  const { hero, ourWork } = siteContent;
  const [activeTab, setActiveTab] = useState<'real' | 'avatar'>('real');

  const sampleVideo = activeTab === 'real' ? ourWork.videos[0] : ourWork.videos[1];

  return (
    <section
      id="home"
      aria-label="Hero Introduction"
      className="relative overflow-hidden py-16 md:py-24 border-b border-[rgba(26,24,21,0.12)] scroll-mt-20"
    >
      {/* Soft terracotta radial glow behind top centre */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[760px] h-[380px] -z-0 opacity-70"
        style={{
          background: 'radial-gradient(ellipse 65% 55% at 50% 0%, rgba(194, 90, 60, 0.18) 0%, transparent 72%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-14 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-14 items-center">
          {/* Left Column: Brand copy and actions */}
          <div className="space-y-6">
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
              className="font-normal text-[36px] sm:text-[44px] lg:text-[50px] leading-[1.1] tracking-[-0.025em] text-[#1A1815] [text-wrap:pretty]"
            >
              Be The Expert Your Market Sees Every Day.{' '}
              <span className="text-[#6E685E]">
                Without Filming, Editing, Or Posting.
              </span>
            </TitleReveal>

            {/* Subtext */}
            <ScrollReveal delay={200}>
              <p className="font-normal text-[16px] sm:text-[17px] leading-[1.68] text-[#5F5A52] max-w-xl">
                {hero.subtext}
              </p>
            </ScrollReveal>

            {/* CTA Button & Scarcity Notice */}
            <ScrollReveal delay={300}>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
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
                <div className="flex flex-wrap items-center gap-y-2 gap-x-2 text-[13px] text-[#5F5A52]">
                  <span>First Post Live In 7 Days</span>
                  <span aria-hidden="true" className="text-[#A39C90]">·</span>
                  <span>Or Month One Free</span>
                  <span aria-hidden="true" className="text-[#A39C90]">·</span>
                  <span>You Approve Everything</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Visual Video Mode Preview */}
          <ScrollReveal delay={200}>
            <div className="bg-[#FFFFFF] rounded-[16px] border border-[rgba(26,24,21,0.14)] overflow-hidden shadow-[0_12px_32px_rgba(26,24,21,0.07)]">
              {/* Mode Switcher Tabs */}
              <div className="bg-[#F8F7F4] border-b border-[rgba(26,24,21,0.1)] p-2 flex items-center justify-between">
                <div className="flex items-center gap-1 bg-[#FFFFFF] rounded-[8px] p-1 border border-[rgba(26,24,21,0.08)]">
                  <button
                    onClick={() => setActiveTab('real')}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-[6px] text-[12.5px] font-semibold transition-all ${
                      activeTab === 'real'
                        ? 'bg-[#1A1815] text-[#FFFFFF] shadow-xs'
                        : 'text-[#5F5A52] hover:text-[#1A1815]'
                    }`}
                  >
                    <span>Real You</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('avatar')}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-[6px] text-[12.5px] font-semibold transition-all ${
                      activeTab === 'avatar'
                        ? 'bg-[#C25A3C] text-[#FFFFFF] shadow-xs'
                        : 'text-[#5F5A52] hover:text-[#1A1815]'
                    }`}
                  >
                    <span>AI Avatar</span>
                  </button>
                </div>

                <span className="text-[11px] font-bold uppercase tracking-wider text-[#C25A3C] bg-[#C25A3C]/10 px-2 py-0.5 rounded">
                  {activeTab === 'real' ? 'Phone Footage' : 'Zero Filming'}
                </span>
              </div>

              {/* Video Preview Frame */}
              <div
                className="relative aspect-video w-full bg-[#1A1815] cursor-pointer group overflow-hidden"
                onClick={() => onPlayFeatured?.(sampleVideo)}
              >
                <img
                  src={activeTab === 'real' ? '/images/work_chrono_pulse.jpg' : '/images/hero_verse_still.jpg'}
                  alt={activeTab === 'real' ? 'Real You Client Video' : 'AI Avatar Client Video'}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90"
                />

                {/* Status Overlay Badge */}
                <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-xs border border-white/10 text-white text-[11px] font-medium flex items-center">
                  <span>
                    {activeTab === 'real'
                      ? 'Client Video 1 · Murthy'
                      : 'Client Video 2 · Prithvi [Coach]'}
                  </span>
                </div>

                {/* Play Trigger */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/35 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-[#C25A3C] flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110">
                    <Play className="w-6 h-6 fill-[#FBFAF8] text-[#FBFAF8] translate-x-0.5" />
                  </div>
                </div>

                {/* Captions Preview Bar */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/75 backdrop-blur-md rounded-[8px] p-2 border border-white/10 text-[#FBFAF8] text-[12px] font-medium">
                  {activeTab === 'real'
                    ? '"How to sign 6-figure coaching retainers without losing 20 hours a week to content."'
                    : '"Autonomous video clone rendered from 1 HD recording. Zero days lost in a studio."'
                  }
                </div>
              </div>

              {/* Card Footer Details */}
              <div className="p-4 bg-[#FFFFFF] flex items-center justify-between border-t border-[rgba(26,24,21,0.08)]">
                <div>
                  <div className="text-[12px] font-medium text-[#C25A3C] uppercase tracking-wider">
                    {activeTab === 'real' ? 'Pathway 01: Real You' : 'Pathway 02: AI Avatar'}
                  </div>
                  <div className="text-[14px] font-semibold text-[#1A1815]">
                    {activeTab === 'real'
                      ? 'Film short phone clips when inspired. We handle the rest.'
                      : 'Never film again. Clone of your face and voice.'}
                  </div>
                </div>

                <a
                  href="#how-you-show-up"
                  className="shrink-0 text-[12.5px] font-semibold text-[#1A1815] hover:text-[#C25A3C] transition-colors underline underline-offset-4"
                >
                  Explore Both
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

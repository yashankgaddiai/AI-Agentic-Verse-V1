/**
 * @file HeroSection.tsx
 * Hero section strictly matching the user's specification:
 * - Tag: Content And Growth, Run For You
 * - Headline: Your Voice, Everywhere Your Clients Are Looking.
 * - Subtext: We Build And Run Your Content From Strategy To Daily Posts...
 * - Button: Book A Strategy Call
 * - Scarcity Notice: We Work With Four Clients A Quarter. Spots Are Limited.
 */

import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Video, Bot, Play } from 'lucide-react';
import { siteContent, ShowcaseVideo } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

interface HeroSectionProps {
  onPlayFeatured?: (video: ShowcaseVideo) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onPlayFeatured }) => {
  const { hero, videoShowcase } = siteContent;
  const [activeTab, setActiveTab] = useState<'real' | 'avatar'>('real');

  const sampleVideo = videoShowcase.videos[0];

  return (
    <section
      id="home"
      aria-label="Content And Growth Hero"
      className="relative overflow-hidden py-16 md:py-[88px] border-b border-[rgba(26,24,21,0.12)] scroll-mt-20"
    >
      {/* Soft terracotta radial glow behind top centre */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[760px] h-[380px] -z-0 opacity-70"
        style={{
          background: 'radial-gradient(ellipse 65% 55% at 50% 0%, rgba(194, 90, 60, 0.18) 0%, transparent 72%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-[56px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-[56px] items-center">
          {/* Left Column: Brand copy and actions */}
          <div className="space-y-6">
            <ScrollReveal>
              {/* Pill badge: Tag: Content And Growth, Run For You */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(194,90,60,0.4)] bg-[#C25A3C]/[0.06] text-[#C25A3C] text-[12.5px] font-medium tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C25A3C] animate-pulse" />
                <span>{hero.tag}</span>
              </div>
            </ScrollReveal>

            {/* Headline */}
            <ScrollReveal delay={100}>
              <h1 className="font-normal text-[36px] sm:text-[44px] lg:text-[52px] leading-[1.08] tracking-[-0.025em] text-[#1A1815] [text-wrap:pretty]">
                Your Voice, Everywhere{' '}
                <span className="text-[#6E685E]">
                  Your Clients Are Looking.
                </span>
              </h1>
            </ScrollReveal>

            {/* Subtext */}
            <ScrollReveal delay={200}>
              <p className="font-normal text-[16px] sm:text-[17px] leading-[1.68] text-[#5F5A52] max-w-xl">
                {hero.subtext}
              </p>
            </ScrollReveal>

            {/* CTA Button & Scarcity Notice */}
            <ScrollReveal delay={300}>
              <div className="pt-2 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <a
                    href={hero.ctaButton.href}
                    className="inline-flex items-center justify-center gap-2 font-semibold text-[15px] bg-[#C25A3C] text-[#FBFAF8] rounded-[8.5px] px-[28px] py-[15px] hover:bg-[#A94B30] transition-colors duration-150 shadow-xs group"
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
                <div className="pt-3 flex flex-wrap items-center gap-y-2 gap-x-6 text-[13px] text-[#5F5A52]">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C25A3C]" />
                    <span>First Post Live In 7 Days</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C25A3C]" />
                    <span>Zero Film Equipment Needed</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C25A3C]" />
                    <span>Switch Any Month</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Interactive Mode Visual (Real You vs AI Avatar) */}
          <ScrollReveal delay={200}>
            <div className="bg-[#FFFFFF] rounded-[16px] border border-[rgba(26,24,21,0.14)] overflow-hidden shadow-[0_12px_32px_rgba(26,24,21,0.07)]">
              {/* Mode Switcher Tabs */}
              <div className="bg-[#F8F7F4] border-b border-[rgba(26,24,21,0.1)] p-2.5 flex items-center justify-between">
                <div className="flex items-center gap-1 bg-[#FFFFFF] rounded-[8px] p-1 border border-[rgba(26,24,21,0.08)]">
                  <button
                    onClick={() => setActiveTab('real')}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-[6px] text-[12.5px] font-semibold transition-all ${
                      activeTab === 'real'
                        ? 'bg-[#1A1815] text-[#FFFFFF] shadow-xs'
                        : 'text-[#5F5A52] hover:text-[#1A1815]'
                    }`}
                  >
                    <Video className="w-3.5 h-3.5" />
                    <span>Real You (Phone)</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('avatar')}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-[6px] text-[12.5px] font-semibold transition-all ${
                      activeTab === 'avatar'
                        ? 'bg-[#C25A3C] text-[#FFFFFF] shadow-xs'
                        : 'text-[#5F5A52] hover:text-[#1A1815]'
                    }`}
                  >
                    <Bot className="w-3.5 h-3.5" />
                    <span>AI Avatar Twin</span>
                  </button>
                </div>

                <span className="text-[11.5px] font-medium uppercase tracking-[0.1em] text-[#857F74] hidden sm:inline">
                  Client Mode
                </span>
              </div>

              {/* Video Preview Frame */}
              <div
                className="relative aspect-video w-full bg-[#1A1815] cursor-pointer group overflow-hidden"
                onClick={() => onPlayFeatured?.(sampleVideo)}
              >
                <img
                  src={activeTab === 'real' ? '/images/work_chrono_pulse.jpg' : '/images/hero_verse_still.jpg'}
                  alt={activeTab === 'real' ? 'Real Founder Camera Reel' : 'AI Avatar Generated Presentation'}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90"
                />

                {/* Status Overlay Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-xs border border-white/10 text-white text-[11px] font-medium flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#C25A3C] animate-pulse" />
                  <span>
                    {activeTab === 'real' ? 'Daily Phone Clip' : 'Autonomous AI Avatar · Zero Filming'}
                  </span>
                </div>

                {/* Play Trigger */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/35 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-[#C25A3C] flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110">
                    <Play className="w-6 h-6 fill-[#FBFAF8] text-[#FBFAF8] translate-x-0.5" />
                  </div>
                </div>

                {/* Subtitle preview bar */}
                <div className="absolute bottom-3 left-3 right-3 bg-black/70 backdrop-blur-md rounded-[8px] p-2.5 border border-white/10 text-[#FBFAF8] text-[12px] font-medium">
                  {activeTab === 'real'
                    ? '"Here is how we close 6-figure coaching retainers without posting 10 times a day..."'
                    : '"Autonomous video clone rendered from 1 single HD recording. Ready for daily distribution."'}
                </div>
              </div>

              {/* Lower Details Bar */}
              <div className="p-5 bg-[#FFFFFF] flex items-center justify-between border-t border-[rgba(26,24,21,0.08)]">
                <div>
                  <div className="text-[12px] font-medium text-[#C25A3C] uppercase tracking-wider">
                    {activeTab === 'real' ? 'Option 01: On Camera' : 'Option 02: Synthetic Clone'}
                  </div>
                  <div className="text-[14.5px] font-semibold text-[#1A1815]">
                    {activeTab === 'real'
                      ? 'Film clips when it suits you. We edit and publish.'
                      : 'Never film again. Complete digital voice & face twin.'}
                  </div>
                </div>

                <a
                  href="#how-you-show-up"
                  className="shrink-0 text-[12.5px] font-semibold text-[#1A1815] hover:text-[#C25A3C] transition-colors underline underline-offset-4"
                >
                  Compare
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

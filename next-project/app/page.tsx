'use client';

import { useState } from 'react';
import { SEO } from '../components/SEO';
import { ScrollProgress } from '../components/ScrollProgress';
import { Navigation } from '../components/Navigation';
import { SectionTransition } from '../components/SectionTransition';
import { HeroSection } from '../components/HeroSection';
import { StatementSection } from '../components/StatementSection';
import { WhatWeDoSection } from '../components/WhatWeDoSection';
import { HowYouShowUpSection } from '../components/HowYouShowUpSection';
import { WhoWeServeSection } from '../components/WhoWeServeSection';
import { HowWeWorkSection } from '../components/HowWeWorkSection';
import { AboutSection } from '../components/AboutSection';
import { VideoShowcaseSection } from '../components/VideoShowcaseSection';
import { FinalCtaSection } from '../components/FinalCtaSection';
import { Footer } from '../components/Footer';
import { VideoModal } from '../components/VideoModal';
import { siteContent, ShowcaseVideo } from '../data/portfolioData';

export default function Home() {
  const [activeVideo, setActiveVideo] = useState<ShowcaseVideo | null>(null);
  const { meta } = siteContent;

  return (
    <div className="min-h-screen bg-[#FBFAF8] text-[#1A1815] flex flex-col antialiased selection:bg-[#C25A3C]/15 selection:text-[#C25A3C]">
      {/* Dynamic SEO & Head Tags */}
      <SEO
        title={
          activeVideo
            ? `${activeVideo.title} | AI Agentic Verse`
            : meta.title
        }
        description={
          activeVideo
            ? `${activeVideo.description} Built and run by AI Agentic Verse.`
            : meta.description
        }
        ogImage={activeVideo ? activeVideo.thumbnailUrl : meta.ogImage}
      />

      {/* Top viewport scroll progress indicator */}
      <ScrollProgress />

      {/* Navigation Top Bar */}
      <Navigation />

      {/* Main Flow with 800ms framer-motion transitions */}
      <main className="flex-1">
        {/* 1. Hero */}
        <SectionTransition>
          <HeroSection onPlayFeatured={(video) => setActiveVideo(video)} />
        </SectionTransition>

        {/* 2. Core Statement */}
        <SectionTransition>
          <StatementSection />
        </SectionTransition>

        {/* 3. What We Do */}
        <SectionTransition>
          <WhatWeDoSection />
        </SectionTransition>

        {/* 4. How You Show Up */}
        <SectionTransition>
          <HowYouShowUpSection />
        </SectionTransition>

        {/* 5. Who We Serve */}
        <SectionTransition>
          <WhoWeServeSection />
        </SectionTransition>

        {/* 6. How We Work */}
        <SectionTransition>
          <HowWeWorkSection />
        </SectionTransition>

        {/* 7. About Us */}
        <SectionTransition>
          <AboutSection />
        </SectionTransition>

        {/* 8. Video Showcase */}
        <SectionTransition>
          <VideoShowcaseSection onSelectVideo={(video) => setActiveVideo(video)} />
        </SectionTransition>

        {/* 9. Final Call To Action (#book) */}
        <SectionTransition>
          <FinalCtaSection />
        </SectionTransition>
      </main>

      {/* Minimalist Footer */}
      <Footer />

      {/* Video Modal Theatre */}
      <VideoModal
        project={activeVideo}
        onClose={() => setActiveVideo(null)}
      />
    </div>
  );
}

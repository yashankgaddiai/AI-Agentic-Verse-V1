/**
 * @file App.tsx
 * AI Agentic Verse — Be The Expert Your Market Sees Every Day
 * Minimalist website strictly matching the user's latest specification.
 */

import { useState } from 'react';
import { SEO } from './components/SEO';
import { ScrollProgress } from './components/ScrollProgress';
import { Navigation } from './components/Navigation';
import { SectionTransition } from './components/SectionTransition';
import { HeroSection } from './components/HeroSection';
import { OurWorkSection } from './components/OurWorkSection';
import { TheProblemSection } from './components/TheProblemSection';
import { WhatChangesSection } from './components/WhatChangesSection';
import { HowYouShowUpSection } from './components/HowYouShowUpSection';
import { WhoWeServeSection } from './components/WhoWeServeSection';
import { AiCommercialsSection } from './components/AiCommercialsSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { OurPromiseSection } from './components/OurPromiseSection';
import { AboutSection } from './components/AboutSection';
import { FitAnalysisSection } from './components/FitAnalysisSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { AuditModal } from './components/AuditModal';
import { siteContent, ShowcaseVideo } from './data/portfolioData';

export default function App() {
  const [activeVideo, setActiveVideo] = useState<ShowcaseVideo | null>(null);
  const [auditOpen, setAuditOpen] = useState(false);
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
            ? `${activeVideo.description || `${activeVideo.title}.`} Built and run by AI Agentic Verse.`
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
          <HeroSection onOpenAudit={() => setAuditOpen(true)} />
        </SectionTransition>

        {/* 2. Our Work (#our-work) */}
        <SectionTransition>
          <OurWorkSection onSelectVideo={(video) => setActiveVideo(video)} />
        </SectionTransition>

        {/* 3. The Problem */}
        <SectionTransition>
          <TheProblemSection />
        </SectionTransition>

        {/* 4. What Changes */}
        <SectionTransition>
          <WhatChangesSection />
        </SectionTransition>

        {/* 5. How You Show Up */}
        <SectionTransition>
          <HowYouShowUpSection />
        </SectionTransition>

        {/* 6. Who We Serve (#who-we-serve) */}
        <SectionTransition>
          <WhoWeServeSection />
        </SectionTransition>

        {/* 6b. AI Commercials (#ai-commercials) */}
        <SectionTransition>
          <AiCommercialsSection onSelectVideo={(video) => setActiveVideo(video)} />
        </SectionTransition>

        {/* 7. How It Works (#how-it-works) */}
        <SectionTransition>
          <HowItWorksSection />
        </SectionTransition>

        {/* 8. Our Promise */}
        <SectionTransition>
          <OurPromiseSection />
        </SectionTransition>

        {/* 9. About Us (#about) */}
        <SectionTransition>
          <AboutSection />
        </SectionTransition>

        {/* 10. Fit / Not A Fit */}
        <SectionTransition>
          <FitAnalysisSection />
        </SectionTransition>

        {/* 11. Final Call To Action (#book) */}
        <SectionTransition>
          <FinalCtaSection onOpenAudit={() => setAuditOpen(true)} />
        </SectionTransition>
      </main>

      {/* Minimalist Footer */}
      <Footer />

      {/* Video Modal Theatre */}
      <VideoModal
        project={activeVideo}
        onClose={() => setActiveVideo(null)}
      />

      {/* Free AI Marketing Audit lead form */}
      <AuditModal open={auditOpen} onClose={() => setAuditOpen(false)} />
    </div>
  );
}

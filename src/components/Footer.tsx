/**
 * @file Footer.tsx
 * Minimalist footer strictly matching the user's brief:
 * - Coaches | Founders (Links to coach.html and founder.html)
 * - © [Current Year, Auto-Filled] AI Agentic Verse. All Rights Reserved.
 */

import React from 'react';
import { siteContent } from '../data/portfolioData';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-[#FBFAF8] border-t border-[rgba(26,24,21,0.12)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-14 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand logo & name */}
        <div className="flex items-center gap-3">
          <BrandLogo size={24} />
          <span className="font-semibold text-[13.5px] uppercase tracking-[0.14em] text-[#1A1815]">
            AI Agentic Verse
          </span>
        </div>

        {/* Center: Offer Links (Coaches | Founders) */}
        <div className="flex items-center gap-3 text-[14px] font-semibold text-[#1A1815]">
          <a
            href="/coach.html"
            className="hover:text-[#C25A3C] transition-colors py-1"
          >
            Coaches
          </a>
          <span className="text-[#857F74]">|</span>
          <a
            href="/founder.html"
            className="hover:text-[#C25A3C] transition-colors py-1"
          >
            Founders
          </a>
        </div>

        {/* Right: Copyright */}
        <div className="text-[13px] text-[#857F74]">
          © {currentYear} AI Agentic Verse. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

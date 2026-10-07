/**
 * @file Navigation.tsx
 * Top navigation component matching the latest brief:
 * - Logo: AI Agentic Verse
 * - Links: Our Work · How It Works · Who We Serve · About
 * - Button: Book A Call
 */

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { siteContent } from '../data/portfolioData';
import { BrandLogo } from './BrandLogo';

export const Navigation: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('our-work');
  const { navigation } = siteContent;

  const navLinks = navigation.links;

  // Active section scroll-spy
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;

      const sections = navLinks
        .map((link) => {
          const el = document.querySelector(link.href);
          return el ? { href: link.href, top: el.getBoundingClientRect().top + window.scrollY } : null;
        })
        .filter(Boolean) as { href: string; top: number }[];

      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPosition >= sections[i].top) {
          setActiveSection(sections[i].href);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  const handleNavClick = (href: string) => {
    setActiveSection(href);
    setMobileOpen(false);

    const targetEl = document.querySelector(href);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FBFAF8]/95 backdrop-blur-md border-b border-[rgba(26,24,21,0.12)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-14 h-20 flex items-center justify-between">
        {/* Left: Logo mark + Wordmark */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 group shrink-0"
        >
          <BrandLogo size={28} className="group-hover:border-[#C25A3C]" />
          <span className="font-semibold text-[14px] uppercase tracking-[0.14em] text-[#1A1815] group-hover:text-[#C25A3C] transition-colors whitespace-nowrap">
            {navigation.logo}
          </span>
        </a>

        {/* Center / Right: Nav links & Book A Call Button */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          <nav aria-label="Main Navigation" className="flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative py-1.5 font-bold text-[13px] tracking-[0.04em] uppercase transition-colors duration-150 ${
                    isActive ? 'text-[#1A1815]' : 'text-[#5F5A52] hover:text-[#1A1815]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavUnderline"
                      className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-[#1A1815] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Book A Call (Button) */}
          <a
            href={navigation.ctaButton.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 bg-[#0D0D0D] hover:bg-[#262626] text-[#FFFFFF] rounded-full h-10 px-6 font-semibold text-[12.5px] tracking-[0.06em] uppercase transition-all duration-200 shadow-xs hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
          >
            <span>{navigation.ctaButton.label}</span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="md:hidden p-2 text-[#1A1815] hover:text-[#C25A3C] transition-colors"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-b border-[rgba(26,24,21,0.12)] bg-[#FBFAF8] px-6 py-6 space-y-6 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`flex items-center justify-between font-bold text-[14px] tracking-[0.05em] uppercase py-2 border-b border-[rgba(26,24,21,0.06)] ${
                    isActive ? 'text-[#1A1815]' : 'text-[#5F5A52] hover:text-[#1A1815]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#1A1815]" />}
                </a>
              );
            })}

            {/* Mobile Book A Call Button */}
            <div className="pt-2">
              <a
                href={navigation.ctaButton.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#0D0D0D] text-[#FFFFFF] rounded-full h-12 px-6 font-semibold text-[13px] tracking-[0.06em] uppercase hover:bg-[#262626] transition-colors shadow-xs"
              >
                <span>{navigation.ctaButton.label}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

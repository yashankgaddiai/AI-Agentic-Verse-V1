/**
 * @file FinalCtaSection.tsx
 * Final Call To Action section strictly matching the user's latest brief:
 * - Tag: Four Clients A Quarter
 * - Heading: Three Months From Now, You'll Either Be Posting Every Day Or Still Planning To.
 * - Subtext: Book A 30 Minute Strategy Call. You Leave With A Written Game Plan, Even If We Never Work Together.
 * - Button: Book A Strategy Call (Link: YOUR_BOOKING_LINK)
 * - Guarantee notice: First Post Live In 7 Days, Or Your First Month Is Free.
 */

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { siteContent } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';
import { TitleReveal } from './TitleReveal';

export const FinalCtaSection: React.FC = () => {
  const { finalCta } = siteContent;
  const [showModal, setShowModal] = useState(false);

  const handleBookingClick = (e: React.MouseEvent) => {
    // If developer/user has not replaced YOUR_BOOKING_LINK with an external URL, open modal scheduler
    if (finalCta.ctaButton.url === 'YOUR_BOOKING_LINK' || !finalCta.ctaButton.url.startsWith('http')) {
      e.preventDefault();
      setShowModal(true);
    }
  };

  return (
    <section
      id="book"
      aria-label="Final Strategy Call Booking"
      className="py-16 md:py-24 border-b border-[rgba(26,24,21,0.12)] bg-[#FBFAF8] relative overflow-hidden scroll-mt-20"
    >
      {/* Background glow accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[340px] -z-0 opacity-60"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 100%, rgba(194, 90, 60, 0.16) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 md:px-14 text-center relative z-10 space-y-8">
        <ScrollReveal>
          {/* Tag: Four Clients A Quarter */}
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-[rgba(194,90,60,0.4)] bg-[#C25A3C]/[0.08] text-[#C25A3C] text-[12px] font-semibold uppercase tracking-[0.14em]">
            {finalCta.tag}
          </div>
        </ScrollReveal>

        {/* Heading with subtle TitleReveal */}
        <TitleReveal
          as="h2"
          delay={0.08}
          className="font-normal text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.12] tracking-[-0.025em] text-[#1A1815] [text-wrap:pretty]"
        >
          {finalCta.heading}
        </TitleReveal>

        <ScrollReveal delay={200}>
          {/* Subtext */}
          <p className="font-normal text-[16px] sm:text-[18px] leading-[1.68] text-[#5F5A52] max-w-2xl mx-auto">
            {finalCta.subtext}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary Booking Button */}
            <a
              href={finalCta.ctaButton.url}
              onClick={handleBookingClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-semibold text-[15px] bg-[#C25A3C] text-[#FBFAF8] rounded-[8.5px] h-12 px-8 hover:bg-[#A94B30] transition-colors duration-150 shadow-md group"
            >
              <span>{finalCta.ctaButton.label}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Guarantee notice row */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-2 text-[13px] text-[#6E685E]">
            <span className="font-medium text-[#C25A3C]">{finalCta.guaranteeNotice}</span>
            <span aria-hidden="true" className="text-[#A39C90]">·</span>
            <span>30-Minute Written Game Plan</span>
          </div>
        </ScrollReveal>
      </div>

      {/* Fallback Strategy Call Intake Modal */}
      {showModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-[#FFFFFF] rounded-[16px] border border-[rgba(26,24,21,0.14)] p-8 max-w-lg w-full space-y-6 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-2">
              <span className="text-[12px] font-semibold uppercase tracking-wider text-[#C25A3C]">
                30-Minute Strategy Session
              </span>
              <h3 className="text-[24px] font-semibold text-[#1A1815]">
                Book Your Strategy Call
              </h3>
              <p className="text-[14.5px] text-[#5F5A52]">
                Leave with a written game plan, even if we never work together.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you! Strategy call request received. Our senior team will reach out within 24 hours with your invite.');
                setShowModal(false);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-[13px] font-medium text-[#1A1815] mb-2">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Alex Sterling"
                  className="w-full h-10 px-4 rounded-[8px] border border-[rgba(26,24,21,0.18)] bg-[#FBFAF8] text-[14px] text-[#1A1815] focus:outline-none focus:border-[#C25A3C]"
                />
              </div>

              <div>
                <label className="block text-[13px] font-medium text-[#1A1815] mb-2">
                  Work Email
                </label>
                <input
                  required
                  type="email"
                  placeholder="alex@company.com"
                  className="w-full h-10 px-4 rounded-[8px] border border-[rgba(26,24,21,0.18)] bg-[#FBFAF8] text-[14px] text-[#1A1815] focus:outline-none focus:border-[#C25A3C]"
                />
              </div>

              <div>
                <label className="block text-[13px] font-medium text-[#1A1815] mb-2">
                  I am a...
                </label>
                <select className="w-full h-10 px-4 rounded-[8px] border border-[rgba(26,24,21,0.18)] bg-[#FBFAF8] text-[14px] text-[#1A1815] focus:outline-none focus:border-[#C25A3C]">
                  <option value="coach">High-Ticket / Executive Coach</option>
                  <option value="founder">Company Founder / CEO</option>
                  <option value="other">Advisory Partner</option>
                </select>
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="h-10 px-4 rounded-[8px] text-[14px] font-medium text-[#5F5A52] hover:text-[#1A1815]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="h-10 px-6 rounded-[8px] text-[14px] font-semibold bg-[#C25A3C] text-white hover:bg-[#A94B30] transition-colors"
                >
                  Confirm Strategy Call
                </button>
              </div>
            </form>

            <div className="pt-2 text-center text-[12px] text-[#857F74]">
              Developer Note: Set <code className="bg-[#F4F1EC] px-1 py-0.5 rounded text-[#C25A3C]">finalCta.ctaButton.url</code> in <code className="bg-[#F4F1EC] px-1 py-0.5 rounded text-[#1A1815]">portfolioData.ts</code> to link directly to your Calendly or Cal.com.
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

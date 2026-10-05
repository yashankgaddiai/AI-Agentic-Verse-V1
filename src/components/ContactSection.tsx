/**
 * @file ContactSection.tsx
 * Contact section strictly matching the STYLE SPEC:
 * - H2: 400, 38px, line-height 1.18, letter-spacing -0.02em, text-wrap: pretty, secondary in #6E685E
 * - Eyebrow label: 500, 11.5px, uppercase, letter-spacing 0.16em
 * - Desktop container padding 56px horizontal; sections 88px vertical
 * - Email, social links, and terracotta CTA button (600, 15px, 8-9px radius, padding 15px 28px)
 * - Placeholders clearly marked
 */

import React, { useState } from 'react';
import { Copy, Check, ArrowUpRight } from 'lucide-react';
import { portfolioContent } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const ContactSection: React.FC = () => {
  const { contact } = portfolioContent;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      aria-label="Contact and Inquiries"
      className="py-16 md:py-[88px] border-b border-[rgba(26,24,21,0.12)] bg-[#FBFAF8]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-[56px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-[56px] items-start">
          {/* Left Column: Heading & Call to Dialogue */}
          <div className="space-y-6">
            <ScrollReveal>
              <span className="block font-medium text-[11.5px] uppercase tracking-[0.16em] text-[#C25A3C]">
                Inquiries & Co-Productions
              </span>

              <h2 className="font-normal text-[28px] sm:text-[34px] lg:text-[38px] leading-[1.18] tracking-[-0.02em] text-[#1A1815] [text-wrap:pretty]">
                Initiate a Conversation{' '}
                <span className="text-[#6E685E]">
                  on upcoming animation commissions.
                </span>
              </h2>

              <p className="font-normal text-[16px] sm:text-[17px] leading-[1.68] text-[#5F5A52] max-w-lg">
                We accept select narrative shorts, visual identity installations, and procedural worldbuilding collaborations.
              </p>
            </ScrollReveal>

            {/* Response time note */}
            <ScrollReveal delay={150}>
              <div className="flex items-center gap-2 text-[13.5px] font-medium text-[#857F74]">
                <span className="w-2 h-2 rounded-full bg-[#C25A3C] animate-pulse" />
                <span>{contact.responseWindow}</span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Contact Panel & Channels */}
          <ScrollReveal delay={100}>
            <div className="bg-[#FFFFFF] rounded-[16px] p-8 md:p-10 border border-[rgba(26,24,21,0.14)] shadow-[0_12px_32px_rgba(26,24,21,0.07)] space-y-8">
              {/* Email direct line */}
              <div className="space-y-3">
                <span className="block font-medium text-[11.5px] uppercase tracking-[0.16em] text-[#857F74]">
                  Direct Studio Email
                </span>

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <a
                    href={`mailto:${contact.email}`}
                    className="font-normal text-[22px] sm:text-[26px] text-[#1A1815] hover:text-[#C25A3C] transition-colors break-all"
                  >
                    {contact.email}
                  </a>

                  <button
                    onClick={handleCopy}
                    aria-label="Copy email address"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] text-[13.5px] font-medium text-[#5F5A52] bg-[#F4F1EC] hover:text-[#1A1815] hover:bg-[#FDF3EE] transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#C25A3C]" />
                        <span className="text-[#C25A3C]">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Social Channels */}
              <div className="space-y-3 pt-6 border-t border-[rgba(26,24,21,0.08)]">
                <span className="block font-medium text-[11.5px] uppercase tracking-[0.16em] text-[#857F74]">
                  Social & Repositories
                </span>

                <div className="grid grid-cols-2 gap-3">
                  {contact.socialLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-[8px] bg-[#F4F1EC] hover:bg-[#FDF3EE] transition-colors flex items-center justify-between group"
                    >
                      <div>
                        <span className="block font-medium text-[13.5px] text-[#1A1815] group-hover:text-[#C25A3C] transition-colors">
                          {item.label}
                        </span>
                        <span className="block font-medium text-[12px] text-[#8A8479]">
                          {item.handle}
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-[#857F74] group-hover:text-[#C25A3C] transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Terracotta CTA Button */}
              <div className="pt-2">
                <a
                  href={`mailto:${contact.email}?subject=Collaboration%20Inquiry%20-%20AI%20Agentic%20Verse`}
                  className="w-full inline-flex items-center justify-center font-semibold text-[15px] bg-[#C25A3C] text-[#FBFAF8] rounded-[8.5px] px-[28px] py-[15px] hover:bg-[#A94B30] transition-colors duration-150 shadow-xs"
                >
                  Send Inquiry Email
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

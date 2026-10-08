/**
 * @file AuditModal.tsx
 * Free AI Marketing Audit lead form popup.
 * Submissions are sent to Web3Forms (https://web3forms.com), which emails each lead.
 */

import React, { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { WEB3FORMS_ACCESS_KEY } from '../data/portfolioData';

interface AuditModalProps {
  open: boolean;
  onClose: () => void;
  // False when the popup opens by itself, so phones don't raise the keyboard uninvited
  focusFirstField?: boolean;
}

type Status = 'idle' | 'sending' | 'success' | 'error';

const COMPANY_SIZES = ['Just me', '2-10', '11-50', '50+'];

const inputClass =
  'w-full h-12 px-4 rounded-[10px] border border-[rgba(26,24,21,0.18)] bg-[#FBFAF8] text-[15px] text-[#1A1815] placeholder:text-[#A39C90] transition-colors focus:outline-none focus:border-[#C25A3C] focus:bg-white';

export const AuditModal: React.FC<AuditModalProps> = ({ open, onClose, focusFirstField = true }) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  // Focus the first field on open, lock page scroll, close on Escape, restore focus on close
  useEffect(() => {
    if (!open) return;
    returnFocusRef.current = document.activeElement as HTMLElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    if (focusFirstField) {
      firstFieldRef.current?.focus();
    } else {
      dialogRef.current?.focus();
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCloseRef.current();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      returnFocusRef.current?.focus();
    };
  }, [open]);

  // Reset to a fresh form each time the popup is reopened
  useEffect(() => {
    if (open) {
      setStatus('idle');
      setErrorMessage('');
    }
  }, [open]);

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    // Honeypot: real visitors never tick the hidden box
    if (data.botcheck) return;

    if (WEB3FORMS_ACCESS_KEY.startsWith('YOUR_')) {
      setStatus('error');
      setErrorMessage('This form is not connected yet. Please book a call instead.');
      return;
    }

    setStatus('sending');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New AI Marketing Audit request: ${data.company}`,
          from_name: 'AI Agentic Verse website',
          ...data,
        }),
      });
      const result = await response.json();
      if (!result.success) throw new Error(result.message);
      setStatus('success');
      try {
        localStorage.setItem('auditSubmitted', '1');
      } catch {}
      form.reset();
    } catch {
      setStatus('error');
      setErrorMessage('Something went wrong sending your request. Please try again.');
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        tabIndex={-1}
        style={{ outline: 'none' }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="audit-modal-title"
        className="relative w-full max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto bg-white rounded-[16px] border border-[rgba(26,24,21,0.14)] p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 p-2 rounded-[8px] text-[#857F74] hover:text-[#1A1815] hover:bg-[#F4F1EC] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {status === 'success' ? (
          <div className="space-y-4 py-8 text-center" aria-live="polite">
            <h2 id="audit-modal-title" className="text-[24px] font-semibold text-[#1A1815]">
              Request received
            </h2>
            <p className="text-[15px] leading-[1.65] text-[#5F5A52]">
              Thanks. We'll review your business and email you about your free AI marketing audit.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center h-12 px-8 rounded-[10px] bg-[#1A1815] text-white font-semibold text-[15px] hover:bg-[#37332C] transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2 pr-8">
              <span className="block text-[12px] font-semibold uppercase tracking-wider text-[#C25A3C]">
                Free AI Marketing Audit
              </span>
              <h2 id="audit-modal-title" className="text-[24px] font-semibold leading-[1.3] text-[#1A1815]">
                Get Your Free AI Marketing Audit
              </h2>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="audit-name" className="block text-[13px] font-medium text-[#1A1815]">Name</label>
                <input ref={firstFieldRef} id="audit-name" name="name" type="text" required autoComplete="name" placeholder="Your full name" className={inputClass} />
              </div>
              <div className="space-y-2">
                <label htmlFor="audit-email" className="block text-[13px] font-medium text-[#1A1815]">Email</label>
                <input id="audit-email" name="email" type="email" required autoComplete="email" placeholder="Your work email" className={inputClass} />
              </div>
              <div className="space-y-2">
                <label htmlFor="audit-company" className="block text-[13px] font-medium text-[#1A1815]">Company name</label>
                <input id="audit-company" name="company" type="text" required autoComplete="organization" placeholder="Your company name" className={inputClass} />
              </div>
              <div className="space-y-2">
                <label htmlFor="audit-niche" className="block text-[13px] font-medium text-[#1A1815]">Niche / industry</label>
                <input id="audit-niche" name="niche" type="text" required placeholder="What does your business do? (e.g. coaching, SaaS, ecommerce)" className={inputClass} />
              </div>
              <div className="space-y-2">
                <label htmlFor="audit-size" className="block text-[13px] font-medium text-[#1A1815]">Company size</label>
                <select id="audit-size" name="company_size" required defaultValue="" className={`${inputClass} invalid:text-[#A39C90]`}>
                  <option value="" disabled>Select</option>
                  {COMPANY_SIZES.map((size) => (
                    <option key={size} value={size} className="text-[#1A1815]">{size}</option>
                  ))}
                </select>
              </div>

              {/* Honeypot field, hidden from people */}
              <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
            </div>

            {status === 'error' && (
              <p role="alert" className="text-[14px] text-[#B42318]">{errorMessage}</p>
            )}

            <div className="space-y-3">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full inline-flex items-center justify-center h-14 px-8 rounded-[10px] bg-[#C25A3C] text-[#FBFAF8] font-semibold text-[16px] shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_8px_20px_-6px_rgba(194,90,60,0.55)] hover:bg-[#A94B30] transition-colors disabled:opacity-70 disabled:cursor-wait"
              >
                {status === 'sending' ? 'Sending…' : 'Get Your Free AI Marketing Audit'}
              </button>
              <p className="text-center text-[13px] text-[#857F74]">
                No cost. No obligation. Takes 2 minutes.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

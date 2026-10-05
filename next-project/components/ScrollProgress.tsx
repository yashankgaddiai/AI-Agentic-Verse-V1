/**
 * @file ScrollProgress.tsx
 * Subtle 2px terracotta scroll depth progress bar pinned to the very top of the viewport.
 * Uses compositor-only scaleX transformation for ultra-smooth rendering.
 */

import React, { useEffect, useState } from 'react';

export const ScrollProgress: React.FC = () => {
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) {
        setScale(0);
        return;
      }
      const scrollPosition = window.scrollY;
      const progressRatio = Math.min(1, Math.max(0, scrollPosition / scrollHeight));
      setScale(progressRatio);
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    updateScrollProgress(); // Initial calculation

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2px] z-50 pointer-events-none"
    >
      <div
        className="h-full w-full bg-[#C25A3C] origin-left will-change-transform transition-transform duration-100 ease-out"
        style={{ transform: `scaleX(${scale})` }}
      />
    </div>
  );
};

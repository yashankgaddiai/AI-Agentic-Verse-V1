/**
 * @file BrandLogo.tsx
 * Brand logo emblem component displaying the AI Agentic Verse logo.
 * Imports directly from src/assets/images/logo.png.
 */

import React from 'react';
import logoSrc from '../assets/images/logo.png';

interface BrandLogoProps {
  size?: number;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ size = 26, className = '' }) => {
  return (
    <div
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`relative shrink-0 rounded-[6px] border border-[rgba(26,24,21,0.14)] bg-[#FFFFFF] p-0.5 flex items-center justify-center overflow-hidden shadow-xs transition-colors ${className}`}
    >
      <img
        src={logoSrc}
        alt="AI Agentic Verse Logo"
        className="w-full h-full object-contain"
      />
    </div>
  );
};

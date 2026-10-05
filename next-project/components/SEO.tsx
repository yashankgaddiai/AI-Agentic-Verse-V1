/**
 * @file SEO.tsx
 * Reusable SEO component managing document head tags dynamically.
 * Handles <title>, <meta name="description">, OpenGraph, Twitter Cards, Canonical URL, and JSON-LD structured data.
 */

import React, { useEffect } from 'react';

export interface SEOProps {
  title?: string;
  description?: string;
  ogImage?: string;
  canonicalUrl?: string;
  type?: 'website' | 'article' | 'profile';
  siteName?: string;
  author?: string;
  structuredData?: Record<string, unknown>;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'AI Agentic Verse – Animation Creator Studio',
  description = 'AI Agentic Verse is an animation creator brand crafting cinematic synthetic worlds, spatial choreography, and autonomous visual narratives.',
  ogImage = '/images/hero_verse_still.jpg',
  canonicalUrl,
  type = 'website',
  siteName = 'AI Agentic Verse',
  author = 'AI Agentic Verse Studio',
  structuredData,
}) => {
  useEffect(() => {
    // 1. Dynamic document title
    if (title) {
      document.title = title;
    }

    // Helper: Find or create meta tag by attribute
    const setMetaTag = (attrName: 'name' | 'property', attrValue: string, content: string) => {
      if (!content) return;
      let meta = document.querySelector(`meta[${attrName}="${attrValue}"]`) as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attrName, attrValue);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Helper: Find or create link tag
    const setLinkTag = (rel: string, href: string) => {
      if (!href) return;
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement('link');
        link.setAttribute(rel, rel);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };

    // 2. Standard Meta Tags
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'author', author);

    // Dynamic resolution of absolute URLs for social scrapers
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    const currentPath = typeof window !== 'undefined' ? window.location.href : '';
    const resolvedUrl = canonicalUrl || currentPath;
    const resolvedOgImage = ogImage.startsWith('http')
      ? ogImage
      : origin
      ? `${origin}${ogImage.startsWith('/') ? '' : '/'}${ogImage}`
      : ogImage;

    // 3. OpenGraph Social Share Card Tags
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:image', resolvedOgImage);
    setMetaTag('property', 'og:site_name', siteName);
    if (resolvedUrl) {
      setMetaTag('property', 'og:url', resolvedUrl);
    }

    // 4. Twitter / X Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', resolvedOgImage);

    // 5. Canonical Link
    if (resolvedUrl) {
      setLinkTag('canonical', resolvedUrl);
    }

    // 6. Schema.org JSON-LD Structured Data
    const jsonLdData = structuredData || {
      '@context': 'https://schema.org',
      '@type': 'VisualArtwork',
      name: title,
      creator: {
        '@type': 'Organization',
        name: siteName,
        logo: origin ? `${origin}/images/logo.png` : '/images/logo.png',
      },
      description,
      genre: 'Cinematic Synthetic Animation & Media',
      image: resolvedOgImage,
    };

    let scriptTag = document.getElementById('dynamic-seo-jsonld') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'dynamic-seo-jsonld';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.text = JSON.stringify(jsonLdData);
  }, [title, description, ogImage, canonicalUrl, type, siteName, author, structuredData]);

  return null;
};

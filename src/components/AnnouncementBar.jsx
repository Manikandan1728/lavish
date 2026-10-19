import React from 'react';
import { Phone } from 'lucide-react';
import siteConfig from '../data/siteConfig';

/**
 * AnnouncementBar — Slim charcoal bar with business info
 * Wraps cleanly and stays centered on all screens
 */
export default function AnnouncementBar() {
  return (
    <div className="bg-charcoal text-white/90 text-[11px] sm:text-xs py-1 px-3 text-center font-sans border-b border-charcoal/20">
      <div className="flex items-center justify-center gap-x-2 gap-y-0.5 flex-wrap leading-tight">
        <span className="font-medium text-white/95">Open today until 9 PM</span>
        <span className="text-gold">·</span>
        <span className="text-white/80">Free delivery in Coimbatore</span>
        <span className="text-gold hidden sm:inline">·</span>
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="hidden sm:inline-flex items-center gap-1.5 text-gold hover:text-white font-medium py-0.5 px-1 rounded transition-colors"
          aria-label={`Call Lavish Furniture at ${siteConfig.phone}`}
        >
          <Phone size={11} className="flex-shrink-0" />
          <span>Call {siteConfig.phone}</span>
        </a>
      </div>
    </div>
  );
}

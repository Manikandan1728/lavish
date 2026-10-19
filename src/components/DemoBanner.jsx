import React, { useState, useEffect } from 'react';
import { Sparkles, X, ExternalLink } from 'lucide-react';
import siteConfig from '../data/siteConfig';

export default function DemoBanner({ onDismiss }) {
  const [visible, setVisible] = useState(() => {
    try {
      return localStorage.getItem('lavish-demo-dismissed') !== 'true';
    } catch {
      return true;
    }
  });

  const handleDismiss = () => {
    setVisible(false);
    try {
      localStorage.setItem('lavish-demo-dismissed', 'true');
    } catch (e) {
      console.warn('Could not save banner preference:', e);
    }
    if (onDismiss) {
      onDismiss();
    }
  };

  if (!visible) return null;

  return (
    <div className="bg-gradient-to-r from-charcoal via-charcoal-light to-charcoal text-white text-[11px] sm:text-[13px] border-b border-gold/30">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 flex items-center justify-between gap-2 py-1 sm:py-2">
        {/* Banner content */}
        <div className="flex-1 min-w-0 pr-1 leading-snug truncate sm:whitespace-normal">
          <span className="text-white/90">
            <Sparkles size={13} className="inline text-gold mr-1 align-text-bottom flex-shrink-0" />
            <strong className="font-semibold text-white">Showroom Concept:</strong>{' '}
            <span className="hidden sm:inline">Modern web catalog & WhatsApp ordering demo for </span>
            <strong className="text-gold-light">Lavish Furniture, Coimbatore</strong>
          </span>
          <span className="hidden md:inline-block ml-2 text-xs text-gold/90 hover:text-gold hover:underline whitespace-nowrap">
            <a
              href={siteConfig.address.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1"
            >
              <span>Avinashi Rd Showroom</span>
              <ExternalLink size={11} />
            </a>
          </span>
        </div>

        {/* Dismiss button */}
        <button
          onClick={handleDismiss}
          className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-white/70 hover:text-white rounded-lg transition-colors flex-shrink-0 -mr-1"
          aria-label="Dismiss demo banner"
        >
          <X size={15} />
        </button>
      </div>
    </div>
  );
}

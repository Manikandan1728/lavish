import React from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import siteConfig from '../data/siteConfig';
import { useScrollPosition } from '../hooks/useUtils';

/**
 * FloatingElements — WhatsApp chat button & Back-to-top trigger
 * Stacked vertically: WhatsApp at bottom 16px (52px size), Back-to-top at bottom 76px (44px size)
 * Auto-hides when any modal/drawer/menu is open.
 */
export default function FloatingElements({ isHidden = false }) {
  const scrollY = useScrollPosition();

  // If any modal, cart drawer, search overlay, or mobile menu is active, hide completely
  if (isHidden) return null;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Only show back to top after scrolling past hero (~500px)
  const showBackToTop = scrollY > 500;

  return (
    <aside
      className="fixed z-50 pointer-events-none"
      style={{
        right: '16px',
        bottom: 'calc(16px + env(safe-area-inset-bottom, 0px))',
      }}
      aria-label="Floating quick actions"
    >
      <div className="relative flex flex-col items-end gap-2.5">
        {/* Back to Top button — 44x44px accessible size, placed directly above WhatsApp */}
        <button
          onClick={scrollToTop}
          className={`w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-white text-charcoal shadow-lg border border-charcoal/15 hover:bg-gold hover:text-white transition-all duration-300 pointer-events-auto flex items-center justify-center ${
            showBackToTop
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-4 scale-75 pointer-events-none'
          }`}
          aria-label="Scroll back to top"
        >
          <ArrowUp size={18} />
        </button>

        {/* WhatsApp Floating Button — 52x52px circular button */}
        <div className="relative pointer-events-auto">
          {/* Subtle pulse ring */}
          <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />

          <a
            href={siteConfig.whatsappEnquiryUrl('Hello Lavish Furniture! I am browsing your showroom website and have an enquiry.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[52px] h-[52px] min-w-[52px] min-h-[52px] rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl shadow-emerald-900/25 flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
            aria-label="Chat with Lavish Furniture showroom on WhatsApp"
          >
            <MessageCircle size={26} className="fill-white/20" />
          </a>
        </div>
      </div>
    </aside>
  );
}

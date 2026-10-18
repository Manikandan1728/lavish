import React from 'react';
import { Check, Sparkles } from 'lucide-react';

export default function Toast({ toast }) {
  if (!toast) return null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[70] pointer-events-none animate-slide-up">
      <div className="flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-charcoal/95 text-white shadow-2xl border border-gold/30 backdrop-blur-md">
        <span className="w-5 h-5 rounded-full bg-gold/20 text-gold flex items-center justify-center text-xs font-bold">
          {toast.icon || '✓'}
        </span>
        <span className="text-xs sm:text-sm font-medium tracking-wide">
          {toast.message}
        </span>
      </div>
    </div>
  );
}

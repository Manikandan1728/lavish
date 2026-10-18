import React from 'react';
import { ArrowRight, MapPin, Star } from 'lucide-react';
import { useInView } from '../hooks/useUtils';
import siteConfig from '../data/siteConfig';

/**
 * Hero — Premium full-viewport hero section
 * Scaled for 360-412px mobile viewports (100dvh minus header), stacked 52px CTAs,
 * non-overlapping flow-based rating card, and high-contrast accessible gradient overlay.
 */
export default function Hero() {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      className="relative min-h-[calc(100dvh-var(--header-height,120px))] flex flex-col justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80"
          alt="Lavish furniture living room showcase in Coimbatore"
          className="w-full h-full object-cover object-center"
          loading="eager"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.style.background = '#2B231D';
          }}
        />

        {/* Strengthened multi-layer gradient overlays for AA text contrast over light furniture */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(31,29,27,0.92) 0%, rgba(31,29,27,0.65) 45%, rgba(31,29,27,0.25) 100%)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/50 to-transparent" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 section-container w-full py-8 sm:py-12 md:py-16 flex flex-col justify-center">
        <div className="max-w-2xl">
          {/* Eyebrow Label */}
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/20 border border-gold/40 text-gold-light text-xs font-semibold uppercase tracking-wider mb-3.5 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span>Coimbatore's Premier Furniture Atelier</span>
          </div>

          {/* Headline — Scaled to clamp(2.25rem, 9vw, 3.25rem) on mobile */}
          <h1
            className={`font-serif font-medium text-white text-[clamp(2.25rem,9vw,3.75rem)] leading-[1.05] tracking-tight mb-4 transition-all duration-700 delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Furniture That Makes Every Home Feel{' '}
            <span className="text-gold italic font-normal">Lavish.</span>
          </h1>

          {/* Sub-headline — High-contrast readable text */}
          <p
            className={`text-white/90 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed mb-6 sm:mb-8 transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {siteConfig.subHeadline}
          </p>

          {/* CTAs — Stacked full-width on mobile with equal 52px height and 12px gap */}
          <div
            className={`flex flex-col sm:flex-row gap-3 w-full sm:w-auto transition-all duration-700 delay-300 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <a
              href="#collections"
              className="btn-gold !h-[52px] !min-h-[52px] w-full sm:w-auto flex items-center justify-center gap-2 !px-6 !text-xs sm:!text-sm !rounded-xl shadow-lg shadow-gold/20 hover:shadow-gold/40"
            >
              <span>Explore Collections</span>
              <ArrowRight size={16} />
            </a>

            <a
              href="#visit-us"
              className="btn-outline !h-[52px] !min-h-[52px] w-full sm:w-auto flex items-center justify-center gap-2 !px-6 !text-xs sm:!text-sm !rounded-xl !border-white/40 hover:!border-white hover:!bg-white/10"
            >
              <MapPin size={16} className="text-gold" />
              <span>Visit Our Showroom</span>
            </a>
          </div>

          {/* Google Rating Card — Normal flow on mobile (below CTAs), absolute in corner only at md+ */}
          <div
            className={`mt-6 md:mt-0 md:absolute md:bottom-10 md:right-10 transition-all duration-700 delay-500 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="glass-card px-4 py-3 sm:px-5 sm:py-3.5 w-full sm:w-auto max-w-xs rounded-2xl border border-white/20 bg-charcoal/60 backdrop-blur-md shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center text-gold flex-shrink-0">
                  <Star size={20} className="fill-gold text-gold" />
                </div>
                <div className="min-w-0">
                  <p className="text-white font-semibold text-sm leading-tight">
                    ★ {siteConfig.rating} on Google
                  </p>
                  <p className="text-white/70 text-xs mt-0.5 leading-snug whitespace-normal">
                    {siteConfig.reviewCount}+ verified reviews in Coimbatore
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

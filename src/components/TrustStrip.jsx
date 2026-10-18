import React from 'react';
import { Star, Truck, Sofa, BadgeIndianRupee } from 'lucide-react';
import { useInView } from '../hooks/useUtils';
import siteConfig from '../data/siteConfig';

const trustItems = [
  {
    icon: Star,
    label: `${siteConfig.rating} Google Rating`,
    sub: `${siteConfig.reviewCount} reviews`,
  },
  {
    icon: Sofa,
    label: 'Wide Range',
    sub: 'Sofas, dining & more',
  },
  {
    icon: Truck,
    label: 'Timely Delivery',
    sub: 'Right to your doorstep',
  },
  {
    icon: BadgeIndianRupee,
    label: 'Affordable Pricing',
    sub: 'Quality at fair prices',
  },
];

/**
 * TrustStrip — 4-item trust bar below the hero
 */
export default function TrustStrip() {
  const [ref, isInView] = useInView();

  return (
    <div ref={ref} className="bg-white border-b border-gold/10">
      <div className="section-container py-6 md:py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {trustItems.map((item, i) => (
            <div
              key={item.label}
              className={`flex items-center gap-3 justify-center md:justify-start transition-all duration-600 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <item.icon size={18} className="text-gold" />
              </div>
              <div>
                <p className="text-sm font-semibold text-charcoal">{item.label}</p>
                <p className="text-xs text-charcoal/50">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

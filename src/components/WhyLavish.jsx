import React from 'react';
import {
  Sofa, BadgeIndianRupee, Users, Truck,
  RefreshCw, HeadphonesIcon
} from 'lucide-react';
import { useInView } from '../hooks/useUtils';

const valuePoints = [
  {
    icon: Sofa,
    title: 'Wide Variety of Stylish Furniture',
    desc: 'From plush sofas to solid-wood dining sets — explore a curated range that fits every room and every budget.',
  },
  {
    icon: BadgeIndianRupee,
    title: 'Quality at Affordable Prices',
    desc: 'Premium materials and craftsmanship at prices that make sense. No hidden costs, no surprises.',
  },
  {
    icon: Users,
    title: 'Friendly, Expert Guidance',
    desc: 'Our showroom staff (ask for Jayakumar!) help you find exactly what works for your space and style.',
  },
  {
    icon: Truck,
    title: 'Timely Delivery to Your Doorstep',
    desc: 'We deliver and install across Coimbatore on schedule — because your time matters as much as your furniture.',
  },
  {
    icon: RefreshCw,
    title: 'Easy Exchange & Quality Assurance',
    desc: 'Not satisfied? Our 7-day exchange policy and quality checks mean you can buy with full confidence.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Dedicated After-Sales Support',
    desc: 'Our new after-sales care desk: raise a request in under 2 minutes. We\'re here long after your purchase.',
  },
];

/**
 * WhyLavish — Dark charcoal section with gold icons and value props
 */
export default function WhyLavish() {
  const [ref, isInView] = useInView();

  return (
    <div ref={ref} className="bg-charcoal py-20 md:py-28 overflow-hidden">
      <div className="section-container">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="section-label mb-3">The Lavish Difference</p>
          <h2 className="font-serif text-3xl md:text-5xl text-white">
            Why Choose Lavish
          </h2>
          <div className="divider-gold" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {valuePoints.map((point, i) => (
            <div
              key={point.title}
              className={`flex gap-4 transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center flex-shrink-0">
                <point.icon size={22} className="text-gold" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-base mb-1.5">
                  {point.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {point.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

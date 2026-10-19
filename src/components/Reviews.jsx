import React, { useState } from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';
import siteConfig from '../data/siteConfig';
import { useInView } from '../hooks/useUtils';

const reviewsData = [
  {
    id: 1,
    name: 'Karthik Subramanian',
    location: 'RS Puram, Coimbatore',
    item: 'Malabar Solid Teak Dining Set (6-Seater)',
    rating: 5,
    date: '3 weeks ago',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    category: 'Dining',
    text: 'Visited their showroom after finding them on Avinashi Road. The teak finish on our 6-seater dining table is absolute perfection. They even customized the chair fabric to match our curtain palette. Delivered right on schedule without a scratch!',
  },
  {
    id: 2,
    name: 'Priya & Vignesh Anand',
    location: 'Peelamedu, Coimbatore',
    item: 'The Chesterfield Royal 3-Seater Velvet Sofa',
    rating: 5,
    date: '1 month ago',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    category: 'Living Room',
    text: 'We were looking for a regal emerald velvet Chesterfield and big branded stores were asking astronomical prices. Lavish offered supreme build quality, pocket springs, and handcrafted button tufting at almost half the price. Everyone asks where we got it!',
  },
  {
    id: 3,
    name: 'Dr. Ramesh Sundaram',
    location: 'Saibaba Colony, Coimbatore',
    item: 'Serenity King Size Storage Bed',
    rating: 5,
    date: '2 months ago',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    category: 'Bedroom',
    text: 'The hydraulic lift mechanism is very smooth and effortless. Sturdy Sheesham wood with zero squeaks. The delivery crew installed it carefully within an hour. Highly recommend Lavish for honest craftsmanship.',
  },
  {
    id: 4,
    name: 'Deepika Mohan',
    location: 'Chinniyampalayam, Coimbatore',
    item: 'Cloud Haven Modular L-Shaped Sectional',
    rating: 5,
    date: '2 weeks ago',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    category: 'Living Room',
    text: 'Since we live right near Chinniyampalayam, we walked in on a Sunday. The showroom team was warm, patient, and not pushy at all. They allowed us to test sitting angles and fabric swatches. The sofa is plush and stain-resistant.',
  },
  {
    id: 5,
    name: 'Suresh Kumar',
    location: 'Gandhipuram, Coimbatore',
    item: 'Nordic Minimalist Teak Bed & Side Tables',
    rating: 4,
    date: '2 months ago',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80',
    category: 'Bedroom',
    text: 'Crisp Japanese-Scandinavian aesthetics, natural matte polish, solid joinery. Was delivered on day 6 as promised. Friendly installation staff who also cleaned up packaging debris.',
  },
  {
    id: 6,
    name: 'Ananya Rajendran',
    location: 'Saravanampatti, Coimbatore',
    item: 'Artisan Live-Edge Acacia Coffee Table',
    rating: 5,
    date: '3 weeks ago',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
    category: 'Custom Work',
    text: 'A true conversation centerpiece! The natural grain of the acacia wood is breathtaking and the brass hairpin legs give it such an airy look. Exactly what our living room needed.',
  },
];

export default function Reviews() {
  const [filter, setFilter] = useState('All');
  const [containerRef, inView] = useInView();

  const categories = ['All', 'Living Room', 'Dining', 'Bedroom', 'Custom Work'];

  const filtered = filter === 'All'
    ? reviewsData
    : reviewsData.filter(r => r.category === filter);

  return (
    <section ref={containerRef} className="py-20 bg-cream/40 border-y border-charcoal/5 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sand/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Google Rating Badge */}
        <div className={`text-center max-w-3xl mx-auto mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 text-gold-dark text-xs font-semibold uppercase tracking-wider mb-4 border border-gold/20">
            <Star size={14} className="fill-gold text-gold" />
            Loved by Coimbatore Homes
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-charcoal mb-4">
            Real Stories, Genuine Comfort
          </h2>
          <p className="text-charcoal/70 text-base md:text-lg">
            See why homeowners across Coimbatore choose Lavish Furniture for timeless craftsmanship, honest pricing, and white-glove delivery.
          </p>

          {/* Google Rating Trust Badge */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-4 py-2.5 px-6 rounded-2xl bg-white shadow-sm border border-charcoal/10">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-charcoal text-lg">{siteConfig.rating}</span>
              <div className="flex text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < Math.floor(siteConfig.rating) ? 'fill-gold text-gold' : 'fill-gold/40 text-gold'}
                  />
                ))}
              </div>
            </div>
            <span className="text-charcoal/30">|</span>
            <span className="text-xs sm:text-sm font-medium text-charcoal/80">
              Based on <strong className="text-charcoal">{siteConfig.reviewCount}+ Google Reviews</strong>
            </span>
            <span className="text-charcoal/30">|</span>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
              <CheckCircle size={12} /> 100% Verified Customers
            </span>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                filter === cat
                  ? 'bg-charcoal text-white shadow-md'
                  : 'bg-white text-charcoal/70 hover:bg-sand/40 border border-charcoal/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, idx) => (
            <div
              key={item.id}
              className={`bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-charcoal/8 hover:shadow-md hover:border-gold/30 transition-all duration-300 flex flex-col justify-between group ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <div>
                {/* Header: Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-gold">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={15} className="fill-gold text-gold" />
                    ))}
                  </div>
                  <Quote size={24} className="text-gold/20 group-hover:text-gold/40 transition-colors" />
                </div>

                {/* Review Text */}
                <p className="text-charcoal/80 text-sm leading-relaxed mb-5 italic">
                  "{item.text}"
                </p>

                {/* Purchased product tag */}
                <div className="mb-5 inline-block text-xs font-medium text-gold-dark bg-gold/5 px-2.5 py-1 rounded-md border border-gold/15">
                  Purchased: {item.item}
                </div>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-charcoal/5 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border border-sand"
                  loading="lazy"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-semibold text-charcoal text-sm truncate">{item.name}</h3>
                    <CheckCircle size={13} className="text-emerald-600 flex-shrink-0" title="Verified Purchase" />
                  </div>
                  <p className="text-xs text-charcoal/50 truncate">{item.location} • {item.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to Google Maps review */}
        <div className="mt-12 text-center">
          <a
            href={siteConfig.address.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-charcoal hover:text-gold transition-colors underline underline-offset-4"
          >
            Read all {siteConfig.reviewCount}+ reviews on Google Maps →
          </a>
        </div>
      </div>
    </section>
  );
}

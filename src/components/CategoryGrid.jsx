import React from 'react';
import { ArrowRight } from 'lucide-react';
import products, { categories } from '../data/products';
import { useInView } from '../hooks/useUtils';

/**
 * CategoryGrid — Asymmetric grid of category tiles
 * Clicking a tile filters the product section
 */
export default function CategoryGrid({ onCategoryClick }) {
  const [ref, isInView] = useInView();

  return (
    <div ref={ref} className="bg-ivory py-20 md:py-28">
      <div className="section-container">
        {/* Section heading */}
        <div className="text-center mb-14">
          <p className="section-label mb-3">Browse Our Range</p>
          <h2 className="font-serif text-3xl md:text-5xl text-charcoal">
            Shop by Collection
          </h2>
          <div className="divider-gold" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {categories.map((cat, i) => {
            // Make first two tiles span more for asymmetry
            const isLarge = i < 2;
            const count = products.filter(p => p.category === cat.name).length;
            return (
              <button
                key={cat.name}
                onClick={() => onCategoryClick(cat.name)}
                className={`group relative overflow-hidden rounded-card cursor-pointer text-left ${
                  isLarge ? 'md:col-span-2 aspect-[16/10]' : 'aspect-square'
                } transition-all duration-600 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
                aria-label={`Browse ${cat.name} collection (${count} pieces)`}
              >
                {/* Image */}
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.style.background = '#EFE7DB';
                  }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent group-hover:from-charcoal/90 transition-all duration-500" />
                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6">
                  <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-gold/90 block mb-0.5">
                    {count} Pieces
                  </span>
                  <h3 className="font-serif text-white text-lg sm:text-xl md:text-2xl mb-1">
                    {cat.name}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-gold text-xs sm:text-sm font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                    Explore <ArrowRight size={14} />
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

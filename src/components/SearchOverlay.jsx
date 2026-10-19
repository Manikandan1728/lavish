import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Star, ArrowRight, Tag } from 'lucide-react';
import products from '../data/products';
import siteConfig from '../data/siteConfig';
import { formatPrice } from '../hooks/useUtils';

export default function SearchOverlay({ onClose, onProductClick }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  const popularSearches = [
    'Sofa Set',
    'Teak Dining',
    'King Bed',
    'Recliner',
    'Coffee Table',
    'Orthopedic Mattress',
  ];

  // Auto focus input on mount & Escape to close
  useEffect(() => {
    inputRef.current?.focus();
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  // Filter products based on search terms (matches across name, category, descriptions, specs, colors, tags)
  const trimmed = query.trim().toLowerCase();
  const searchTerms = trimmed.split(/\s+/).filter(Boolean);
  const results = trimmed
    ? products.filter((p) => {
        const searchableFields = [
          p.name,
          p.category,
          p.shortDescription,
          p.longDescription,
          p.specs?.material,
          p.specs?.upholstery,
          ...(p.colors ? p.colors.map((c) => c.name) : []),
          ...(p.tags || []),
        ]
          .filter(Boolean)
          .join(' ')
          .toLowerCase();

        return searchTerms.every((term) => searchableFields.includes(term));
      })
    : [];

  return (
    <div className="fixed inset-0 z-[60] flex flex-col justify-start bg-charcoal/80 backdrop-blur-md transition-all duration-300">
      <div className="w-full max-w-4xl mx-auto px-4 pt-10 pb-8 flex-1 flex flex-col">
        {/* Search Bar Input Container */}
        <div className="relative bg-white rounded-2xl shadow-2xl border border-white/20 p-2 sm:p-3 flex items-center gap-3">
          <Search size={22} className="text-charcoal/40 ml-3 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search sofas, teak dining, beds, recliners, wood finishes..."
            className="w-full py-2.5 text-base sm:text-lg text-charcoal placeholder-charcoal/40 bg-transparent outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center text-charcoal/40 hover:text-charcoal rounded-full transition-colors"
              aria-label="Clear search"
            >
              <X size={18} />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-4 py-2 min-h-[44px] flex items-center justify-center rounded-xl bg-charcoal/5 hover:bg-charcoal/10 text-charcoal text-xs font-semibold uppercase tracking-wider transition-colors"
            aria-label="Close search overlay"
          >
            ESC
          </button>
        </div>

        {/* Popular Tags */}
        <div className="mt-4 flex flex-wrap items-center gap-2 px-2">
          <span className="text-xs text-white/50 flex items-center gap-1">
            <Tag size={12} /> Popular:
          </span>
          {popularSearches.map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="text-xs px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white/80 transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results Area */}
        <div className="mt-6 flex-1 overflow-y-auto bg-white/95 rounded-2xl p-4 sm:p-6 shadow-2xl border border-white/20 divide-y divide-charcoal/5">
          {trimmed === '' ? (
            <div className="py-12 text-center text-charcoal/50">
              <Search size={36} className="mx-auto mb-3 opacity-30" />
              <p className="text-sm font-medium">Type a product name or category to search</p>
              <p className="text-xs text-charcoal/40 mt-1">
                Explore our full range of solid wood living, dining, and bedroom furniture
              </p>
            </div>
          ) : results.length === 0 ? (
            <div className="py-12 text-center text-charcoal/60">
              <p className="text-base font-semibold text-charcoal mb-1">No exact products found for "{query}"</p>
              <p className="text-xs text-charcoal/50 max-w-sm mx-auto mb-5">
                We craft bespoke custom furniture! Ask our Coimbatore showroom specialists if we can build or customize this for you.
              </p>
              <a
                href={siteConfig.whatsappEnquiryUrl(`Hi Lavish Furniture, I am looking for ${query}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors"
              >
                Inquire on WhatsApp about "{query}"
              </a>
            </div>
          ) : (
            <div>
              <div className="pb-3 text-xs font-semibold uppercase tracking-wider text-charcoal/40 flex justify-between">
                <span>{results.length} Products Found</span>
                <span>Click item for quick view</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                {results.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => onProductClick(product)}
                    className="flex gap-4 p-3 rounded-xl hover:bg-sand/30 border border-transparent hover:border-charcoal/10 cursor-pointer transition-all duration-200 group"
                  >
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-20 h-20 object-cover rounded-xl border border-charcoal/10 flex-shrink-0 group-hover:scale-105 transition-transform"
                    />
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-gold-dark">
                          {product.category}
                        </span>
                        <h4 className="font-serif font-bold text-sm text-charcoal truncate group-hover:text-gold-dark transition-colors">
                          {product.name}
                        </h4>
                        <div className="flex items-center gap-1 text-[11px] text-charcoal/60 mt-0.5">
                          <Star size={11} className="fill-gold text-gold" />
                          <span>{product.rating}</span>
                          <span>({product.reviewCount})</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-charcoal">
                            {formatPrice(product.price)}
                          </span>
                          {product.mrp && product.mrp > product.price && (
                            <span className="text-xs text-charcoal/40 line-through">
                              {formatPrice(product.mrp)}
                            </span>
                          )}
                        </div>
                        <span className="text-xs font-semibold text-gold-dark flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          View Details <ArrowRight size={12} />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

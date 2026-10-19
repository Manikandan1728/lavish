import React, { useState, useMemo } from 'react';
import { Heart, Eye, ShoppingBag } from 'lucide-react';
import products, { categories } from '../data/products';
import { formatPrice, useInView } from '../hooks/useUtils';

/**
 * ProductCard — Individual product card with hover image swap
 */
function ProductCard({ product, isWished, onWishlist, onAddToCart, onQuickView, index }) {
  const [imgHover, setImgHover] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div
      onClick={() => onQuickView(product)}
      className="card group cursor-pointer flex flex-col h-full"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Image */}
      <div
        className="relative aspect-[4/3] overflow-hidden bg-sand flex-shrink-0"
        onMouseEnter={() => setImgHover(true)}
        onMouseLeave={() => setImgHover(false)}
      >
        {/* Shimmer placeholder */}
        {!imgLoaded && (
          <div className="absolute inset-0 shimmer" />
        )}

        <img
          src={imgHover && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-700 ${
            imgHover ? 'scale-105' : 'scale-100'
          } ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
          onError={(e) => {
            e.target.style.display = 'none';
            setImgLoaded(true);
          }}
        />

        {/* Discount badge */}
        {product.discountPercent > 0 && (
          <span className="absolute top-3 left-3 badge-discount">
            {product.discountPercent}% OFF
          </span>
        )}

        {/* Wishlist heart */}
        <button
          onClick={(e) => { e.stopPropagation(); onWishlist(product.id); }}
          className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 z-10 ${
            isWished
              ? 'bg-gold text-white shadow-md'
              : 'bg-white/90 text-charcoal/60 hover:bg-gold hover:text-white shadow-sm'
          }`}
          aria-label={isWished ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart size={16} fill={isWished ? 'currentColor' : 'none'} />
        </button>

        {/* Quick actions overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 flex gap-1.5 sm:gap-2 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-300 z-10">
          <button
            onClick={(e) => { e.stopPropagation(); onQuickView(product); }}
            className="flex-1 flex items-center justify-center gap-1 bg-white/95 backdrop-blur-sm text-charcoal text-[11px] sm:text-xs font-semibold py-2 sm:py-2.5 rounded-lg hover:bg-gold hover:text-white transition-colors shadow-sm"
            aria-label={`Quick view ${product.name}`}
          >
            <Eye size={13} /> Quick View
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
            className="flex-1 flex items-center justify-center gap-1 bg-charcoal/90 backdrop-blur-sm text-white text-[11px] sm:text-xs font-semibold py-2 sm:py-2.5 rounded-lg hover:bg-gold hover:text-charcoal transition-colors shadow-sm"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingBag size={13} /> Add to Cart
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-4 md:p-5 flex flex-col justify-between flex-1">
        <div>
          {/* Category label */}
          <p className="text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-gold/80 mb-1">
            {product.category}
          </p>
          {/* Name */}
          <h3 className="font-serif text-base sm:text-lg text-charcoal leading-snug mb-1 line-clamp-2 min-h-[2.8rem] sm:min-h-[3.2rem] group-hover:text-gold-dark transition-colors">
            {product.name}
          </h3>
          {/* Material */}
          <p className="text-xs text-charcoal/50 mb-3 line-clamp-1">
            {product.specs?.material || 'Solid Wood & Premium Finish'}
          </p>
        </div>

        <div>
          {/* Price row */}
          <div className="flex items-baseline gap-2 flex-wrap">
            <span className="text-base sm:text-lg font-bold text-charcoal font-sans">
              {formatPrice(product.price)}
            </span>
            {product.mrp > product.price && (
              <span className="price-mrp">{formatPrice(product.mrp)}</span>
            )}
          </div>
          {/* Stock badge */}
          <div className="mt-2.5">
            <span className="badge-stock">{product.stock}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * FeaturedProducts — Product grid with category tabs, sort, price filter
 */
export default function FeaturedProducts({
  activeCategory,
  setActiveCategory,
  wishlist,
  toggleWishlist,
  addToCart,
  onQuickView,
}) {
  const [ref, isInView] = useInView();
  const [sortBy, setSortBy] = useState('popular');
  const [priceRange, setPriceRange] = useState([0, 100000]);

  // Filter tabs
  const allCategories = ['All', ...categories.map(c => c.name)];

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Category filter
    if (activeCategory !== 'All') {
      filtered = filtered.filter(p => p.category === activeCategory);
    }

    // Price filter
    filtered = filtered.filter(
      p => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case 'popular':
      default:
        filtered = [...filtered].sort((a, b) => b.reviewCount - a.reviewCount);
        break;
    }

    return filtered;
  }, [activeCategory, sortBy, priceRange]);

  return (
    <div ref={ref} className="bg-sand/50 py-20 md:py-28">
      <div className="section-container">
        {/* Section heading */}
        <div className="text-center mb-10">
          <p className="section-label mb-3">Handpicked for You</p>
          <h2 className="font-serif text-3xl md:text-5xl text-charcoal">
            Our Signature Pieces
          </h2>
          <div className="divider-gold" />
        </div>

        {/* Filters bar */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-6">
          {/* Category tabs with live counts */}
          <div className="flex flex-wrap gap-2">
            {allCategories.map(cat => {
              const count = cat === 'All' ? products.length : products.filter(p => p.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-semibold tracking-wide uppercase rounded-full transition-all duration-300 flex items-center gap-1.5 ${
                    activeCategory === cat
                      ? 'bg-charcoal text-white shadow-sm'
                      : 'bg-white text-charcoal/60 hover:bg-gold/10 hover:text-gold shadow-sm'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-sans ${
                    activeCategory === cat ? 'bg-white/20 text-white' : 'bg-charcoal/5 text-charcoal/60'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Sort & price filter */}
          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            {/* Price range */}
            <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm">
              <label className="text-xs text-charcoal/50 whitespace-nowrap">Max ₹</label>
              <input
                type="range"
                min="5000"
                max="100000"
                step="1000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                className="w-24 accent-gold cursor-pointer"
                aria-label="Maximum price filter"
              />
              <span className="text-xs font-semibold text-charcoal min-w-[4rem]">
                {formatPrice(priceRange[1])}
              </span>
            </div>

            {/* Sort dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white text-xs font-semibold text-charcoal/70 px-3 py-2.5 rounded-lg border-0 appearance-none cursor-pointer pr-8 focus:ring-2 focus:ring-gold shadow-sm"
              aria-label="Sort products"
              style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%231F1D1B' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center' }}
            >
              <option value="popular">Popular (Most Reviewed)</option>
              <option value="price-low">Price: Low → High</option>
              <option value="price-high">Price: High → Low</option>
            </select>
          </div>
        </div>

        {/* Live count summary */}
        <div className="flex items-center justify-between text-xs text-charcoal/50 mb-6 px-1">
          <span>Showing <strong>{filteredProducts.length}</strong> {filteredProducts.length === 1 ? 'piece' : 'pieces'} {activeCategory === 'All' ? 'across all collections' : `in ${activeCategory}`}</span>
        </div>

        {/* Product grid */}
        {filteredProducts.length > 0 ? (
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6 transition-all duration-600 ${
            isInView ? 'opacity-100' : 'opacity-0'
          }`}>
            {filteredProducts.map((product, i) => (
              <ProductCard
                key={product.id}
                product={product}
                index={i}
                isWished={wishlist.includes(product.id)}
                onWishlist={toggleWishlist}
                onAddToCart={addToCart}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        ) : (
          /* Empty state */
          <div className="text-center py-20">
            <p className="text-5xl mb-4">🔍</p>
            <h3 className="font-serif text-2xl text-charcoal mb-2">No products found</h3>
            <p className="text-charcoal/50 mb-6">Try adjusting your filters or browse all collections.</p>
            <button
              onClick={() => { setActiveCategory('All'); setPriceRange([0, 100000]); }}
              className="btn-gold !rounded-full"
            >
              View All Products
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

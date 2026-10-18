import React, { useState } from 'react';
import {
  X, Star, Heart, ShoppingBag, MessageCircle,
  Minus, Plus, ChevronDown, Truck, Shield, RotateCcw, Package
} from 'lucide-react';
import { formatPrice, calculateEMI, buildProductWhatsAppUrl } from '../hooks/useUtils';
import siteConfig from '../data/siteConfig';

/**
 * Accordion component for product detail tabs
 */
function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-charcoal/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-sm font-semibold text-charcoal hover:text-gold transition-colors"
        aria-expanded={open}
      >
        {title}
        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div className={`accordion-content ${open ? 'open' : ''}`}>
        <div className="pb-4 text-sm text-charcoal/70 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

/**
 * ProductModal — Full product detail overlay
 */
export default function ProductModal({ product, onClose, addToCart, wishlist, toggleWishlist }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || null);
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || null);
  const [quantity, setQuantity] = useState(1);
  const isWished = wishlist.includes(product.id);

  const emi = calculateEMI(product.price);
  const savings = product.mrp - product.price;

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor, selectedSize);
    onClose();
  };

  const handleWhatsApp = () => {
    const variant = [selectedColor, selectedSize].filter(Boolean).join(', ');
    const url = buildProductWhatsAppUrl(siteConfig.whatsappNumber, product, variant, quantity);
    window.open(url, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label={`Product details: ${product.name}`}
    >
      <div className="bg-white rounded-2xl w-full max-w-5xl max-h-[92vh] overflow-y-auto relative animate-fade-up shadow-2xl">
        {/* Close button — min 44x44px accessible tap target */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-charcoal/5 hover:bg-charcoal/15 flex items-center justify-center text-charcoal transition-colors"
          aria-label="Close product details"
        >
          <X size={20} />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left — Image gallery */}
          <div className="p-6 lg:p-8">
            {/* Main image */}
            <div className="aspect-square rounded-xl overflow-hidden bg-sand mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.slice(0, 4).map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === i ? 'border-gold' : 'border-transparent hover:border-gold/30'
                  }`}
                  aria-label={`View image ${i + 1}`}
                >
                  <img
                    src={img}
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right — Product info */}
          <div className="p-6 lg:p-8 lg:border-l border-charcoal/5">
            {/* Category & SKU */}
            <div className="flex items-center gap-3 mb-2">
              <span className="section-label">{product.category}</span>
              <span className="text-xs text-charcoal/30">SKU: {product.sku}</span>
            </div>

            {/* Name */}
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-2">
              {product.name}
            </h2>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star
                    key={star}
                    size={14}
                    className={star <= Math.round(product.rating) ? 'text-gold fill-gold' : 'text-charcoal/20'}
                  />
                ))}
              </div>
              <span className="text-sm text-charcoal/60">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Short description */}
            <p className="text-sm text-charcoal/70 leading-relaxed mb-5">
              {product.shortDescription}
            </p>

            {/* Price block */}
            <div className="bg-ivory rounded-xl p-4 mb-5">
              <div className="flex items-baseline gap-3 mb-1">
                <span className="price-current">{formatPrice(product.price)}</span>
                {product.mrp > product.price && (
                  <>
                    <span className="price-mrp">{formatPrice(product.mrp)}</span>
                    <span className="badge-discount">{product.discountPercent}% OFF</span>
                  </>
                )}
              </div>
              <p className="text-xs text-charcoal/50 mb-1">
                You save {formatPrice(savings)} · Inclusive of GST
              </p>
              <p className="text-xs text-gold font-medium">
                EMI from {formatPrice(emi)}/month
              </p>
            </div>

            {/* Color swatches */}
            {product.colors.length > 0 && (
              <div className="mb-5">
                <p className="text-xs font-semibold text-charcoal/70 mb-2 uppercase tracking-wider">
                  Colour: <span className="text-charcoal">{selectedColor}</span>
                </p>
                <div className="flex gap-2">
                  {product.colors.map(color => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-9 h-9 rounded-full border-2 transition-all ${
                        selectedColor === color.name
                          ? 'border-gold scale-110 shadow-md'
                          : 'border-charcoal/10 hover:border-gold/50'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      aria-label={`Select ${color.name}`}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Size / Config selector */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-5">
                <p className="text-xs font-semibold text-charcoal/70 mb-2 uppercase tracking-wider">
                  Configuration
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 text-xs font-medium rounded-lg border transition-all ${
                        selectedSize === size
                          ? 'border-gold bg-gold/10 text-gold'
                          : 'border-charcoal/10 text-charcoal/60 hover:border-gold/30'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-xs font-semibold text-charcoal/70 mb-2 uppercase tracking-wider">
                Quantity
              </p>
              <div className="inline-flex items-center border border-charcoal/10 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2.5 hover:bg-sand transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="px-5 py-2 text-sm font-semibold min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2.5 hover:bg-sand transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 mb-6">
              <button
                onClick={handleAddToCart}
                className="btn-gold flex-1 !rounded-xl"
              >
                <ShoppingBag size={16} />
                Add to Cart
              </button>
              <button
                onClick={handleWhatsApp}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#25D366] text-white font-semibold text-sm rounded-xl hover:bg-[#1DA851] transition-colors"
              >
                <MessageCircle size={16} />
                Order on WhatsApp
              </button>
              <button
                onClick={() => toggleWishlist(product.id)}
                className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all ${
                  isWished
                    ? 'border-gold bg-gold/10 text-gold'
                    : 'border-charcoal/10 text-charcoal/40 hover:border-gold hover:text-gold'
                }`}
                aria-label={isWished ? 'Remove from wishlist' : 'Add to wishlist'}
              >
                <Heart size={18} fill={isWished ? 'currentColor' : 'none'} />
              </button>
            </div>

            {/* Delivery & service info */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="flex items-center gap-2 bg-ivory rounded-lg p-3">
                <Truck size={16} className="text-gold flex-shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-charcoal">{product.delivery.timeline}</p>
                  <p className="text-[10px] text-charcoal/50">Free in {product.delivery.freeDeliveryZone}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-ivory rounded-lg p-3">
                <Package size={16} className="text-gold flex-shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-charcoal">{product.delivery.installation}</p>
                  <p className="text-[10px] text-charcoal/50">By our team</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-ivory rounded-lg p-3">
                <Shield size={16} className="text-gold flex-shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-charcoal">{product.specs.warranty}</p>
                  <p className="text-[10px] text-charcoal/50">Manufacturing warranty</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-ivory rounded-lg p-3">
                <RotateCcw size={16} className="text-gold flex-shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-charcoal">Easy Exchange</p>
                  <p className="text-[10px] text-charcoal/50">7-day policy</p>
                </div>
              </div>
            </div>

            {/* Accordion tabs */}
            <div>
              <Accordion title="Description" defaultOpen>
                <p>{product.longDescription}</p>
              </Accordion>

              <Accordion title="Specifications">
                <table className="w-full">
                  <tbody>
                    {Object.entries(product.specs).map(([key, value]) => (
                      <tr key={key} className="border-b border-charcoal/5 last:border-0">
                        <td className="py-2 pr-4 text-charcoal/50 capitalize whitespace-nowrap">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </td>
                        <td className="py-2 text-charcoal">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Accordion>

              <Accordion title="Care Instructions">
                <ul className="space-y-1.5">
                  {product.care.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-gold mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Accordion>

              <Accordion title="Delivery & Warranty">
                <div className="space-y-2">
                  <p><strong>Delivery:</strong> {product.delivery.timeline}</p>
                  <p><strong>Free delivery:</strong> Within {product.delivery.freeDeliveryZone}</p>
                  <p><strong>Installation:</strong> {product.delivery.installation}</p>
                  <p><strong>Warranty:</strong> {product.specs.warranty}</p>
                  <p><strong>Assembly:</strong> {product.specs.assembly}</p>
                  <p className="text-charcoal/40 text-xs mt-3">
                    Exchange within 7 days of delivery for manufacturing defects. Contact us via WhatsApp for quick resolution.
                  </p>
                </div>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

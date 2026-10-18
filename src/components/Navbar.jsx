import React, { useState, useEffect } from 'react';
import { Search, Heart, ShoppingBag, Menu, X, MessageCircle, Phone, ArrowRight } from 'lucide-react';
import siteConfig from '../data/siteConfig';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Collections', href: '#collections' },
  { label: 'Bestsellers', href: '#products' },
  { label: 'Why Lavish', href: '#why-lavish' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Visit Us', href: '#visit-us' },
];

/**
 * Navbar — Rendered inside the single sticky header wrapper
 * Zero horizontal overflow at 360px, accessible 44px tap targets, full-screen mobile drawer
 */
export default function Navbar({
  cartCount = 0,
  wishlistCount = 0,
  onCartClick,
  onSearchClick,
  onMobileMenuToggle,
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Lock body scroll and notify parent
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    if (onMobileMenuToggle) {
      onMobileMenuToggle(mobileOpen);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen, onMobileMenuToggle]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const closeMenu = () => setMobileOpen(false);

  return (
    <nav
      className="bg-ivory/95 backdrop-blur-md border-b border-sand/70 transition-colors"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-2.5 sm:py-3.5">
        {/* Logo — Scaled to fit without wrapping */}
        <a
          href="#home"
          className="flex flex-col items-start min-w-0 pr-2 group"
          aria-label="Lavish Furniture Home"
          onClick={closeMenu}
        >
          <span className="font-serif font-semibold text-[clamp(1.25rem,5vw,1.75rem)] tracking-[0.2em] text-charcoal leading-none group-hover:text-gold transition-colors">
            LAVISH
          </span>
          <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-sans font-medium text-walnut mt-0.5 whitespace-nowrap">
            Furniture · Coimbatore
          </span>
        </a>

        {/* Desktop Navigation Links (>=1024px) */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium tracking-wide text-charcoal/80 hover:text-gold transition-colors underline-grow"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action icons row */}
        <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
          {/* Search button — min 44x44px tap target */}
          <button
            onClick={onSearchClick}
            className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full flex items-center justify-center text-charcoal/80 hover:text-charcoal hover:bg-sand/60 transition-colors"
            aria-label="Search products"
          >
            <Search size={20} />
          </button>

          {/* Wishlist — Desktop only (moved to mobile menu below 1024px to prevent horizontal overflow) */}
          <a
            href="#products"
            className="hidden lg:flex w-11 h-11 min-w-[44px] min-h-[44px] relative rounded-full items-center justify-center text-charcoal/80 hover:text-charcoal hover:bg-sand/60 transition-colors"
            aria-label={`Wishlist: ${wishlistCount} items`}
          >
            <Heart size={20} />
            {wishlistCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-gold text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </a>

          {/* Cart button — min 44x44px tap target */}
          <button
            onClick={onCartClick}
            className="w-11 h-11 min-w-[44px] min-h-[44px] relative rounded-full flex items-center justify-center text-charcoal/80 hover:text-charcoal hover:bg-sand/60 transition-colors"
            aria-label={`Cart: ${cartCount} items`}
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-gold text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Desktop WhatsApp CTA (>=1024px only) */}
          <a
            href={siteConfig.whatsappEnquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 btn-gold !py-2.5 !px-5 !text-xs !rounded-full ml-1"
            aria-label="Enquire on WhatsApp"
          >
            <MessageCircle size={15} />
            <span>WhatsApp</span>
          </a>

          {/* Mobile hamburger menu button (<1024px) — min 44x44px tap target */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden w-11 h-11 min-w-[44px] min-h-[44px] rounded-full flex items-center justify-center text-charcoal hover:bg-sand/60 transition-colors"
            aria-label="Open mobile menu"
            aria-expanded={mobileOpen}
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Full-Screen Mobile Drawer (<1024px) */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[60] bg-ivory flex flex-col justify-between p-6 overflow-y-auto animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          {/* Top header row inside drawer */}
          <div className="flex items-center justify-between pb-4 border-b border-sand/80">
            <div className="flex flex-col">
              <span className="font-serif font-semibold text-2xl tracking-[0.2em] text-charcoal">
                LAVISH
              </span>
              <span className="text-[9px] tracking-[0.2em] uppercase font-sans font-medium text-walnut">
                Furniture · Coimbatore
              </span>
            </div>

            {/* 44x44px close button */}
            <button
              onClick={closeMenu}
              className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full text-charcoal hover:bg-sand/60 transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation Links list */}
          <div className="flex flex-col py-8 gap-5 items-start">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="font-serif text-2xl sm:text-3xl text-charcoal hover:text-gold transition-colors flex items-center justify-between w-full py-1 border-b border-sand/40"
              >
                <span>{link.label}</span>
                <ArrowRight size={18} className="text-sand-dark" />
              </a>
            ))}

            {/* Wishlist Link inside mobile drawer */}
            <a
              href="#products"
              onClick={closeMenu}
              className="font-serif text-2xl sm:text-3xl text-charcoal hover:text-gold transition-colors flex items-center justify-between w-full py-1 border-b border-sand/40"
            >
              <span className="flex items-center gap-2">
                <Heart size={20} className="text-gold" />
                Wishlist
              </span>
              <span className="text-sm font-sans font-semibold px-2.5 py-0.5 rounded-full bg-sand text-charcoal">
                {wishlistCount} saved
              </span>
            </a>
          </div>

          {/* Bottom Actions inside drawer */}
          <div className="space-y-3 pt-4 border-t border-sand/80">
            {/* Full-width gold WhatsApp button */}
            <a
              href={siteConfig.whatsappEnquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="w-full h-[52px] min-h-[52px] btn-gold flex items-center justify-center gap-2.5 !text-sm !rounded-xl shadow-md"
            >
              <MessageCircle size={18} />
              <span>Enquire on WhatsApp</span>
            </a>

            {/* Direct phone call button */}
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="w-full h-[52px] min-h-[52px] flex items-center justify-center gap-2 rounded-xl border border-charcoal/20 text-charcoal text-sm font-semibold hover:bg-sand/50 transition-colors"
            >
              <Phone size={16} className="text-gold" />
              <span>Call Showroom ({siteConfig.phone})</span>
            </a>

            <p className="text-[11px] text-charcoal/50 text-center pt-2">
              Avinashi Rd, Chinniyampalayam · Open daily until 9 PM
            </p>
          </div>
        </div>
      )}
    </nav>
  );
}

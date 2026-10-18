import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Heart, ArrowUp, Shield, Sparkles } from 'lucide-react';
import siteConfig from '../data/siteConfig';

export default function Footer() {
  const [lookbookPhone, setLookbookPhone] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLookbookSubmit = (e) => {
    e.preventDefault();
    if (!lookbookPhone) return;
    const url = siteConfig.whatsappEnquiryUrl(
      `Hello Lavish Furniture! Please send the 2025 Furniture Lookbook & Price List to my WhatsApp (${lookbookPhone}).`
    );
    window.open(url, '_blank');
    setSubscribed(true);
  };

  return (
    <footer className="bg-charcoal text-white/80 pt-16 pb-[88px] md:pb-12 border-t border-charcoal-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Lookbook strip */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-10 mb-16 backdrop-blur-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-gold text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 justify-center md:justify-start">
              <Sparkles size={14} /> 2025 Coimbatore Living Collection
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
              Download our Premium Lookbook
            </h3>
            <p className="text-white/60 text-xs sm:text-sm mt-2">
              Receive high-resolution interior setups, wood finishes, fabric catalogs, and promotional showroom prices directly on WhatsApp.
            </p>
          </div>

          <form onSubmit={handleLookbookSubmit} className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
            <input
              type="tel"
              required
              placeholder="Your WhatsApp number"
              value={lookbookPhone}
              onChange={(e) => setLookbookPhone(e.target.value)}
              className="px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-base sm:text-sm focus:outline-none focus:border-gold w-full sm:w-64"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-gold hover:bg-gold-light text-charcoal font-semibold text-sm transition-all flex items-center justify-center gap-2 flex-shrink-0"
            >
              <MessageCircle size={16} />
              <span>{subscribed ? 'Sent on WhatsApp!' : 'Get Free Lookbook'}</span>
            </button>
          </form>
        </div>

        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-2xl tracking-wider text-white">
                LAVISH<span className="text-gold">.</span>
              </span>
              <span className="text-[10px] tracking-widest text-gold uppercase px-2 py-0.5 rounded bg-gold/10 border border-gold/20 font-semibold">
                Coimbatore
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              Crafting heirloom-grade solid wood furniture, bespoke sofas, and luxury bedroom suites for Coimbatore homes. Honest local pricing, premium materials, and white-glove setup.
            </p>

            <div className="pt-2 text-xs text-white/50 space-y-1.5">
              <p>📍 {siteConfig.address.full}</p>
              <p>⏰ {siteConfig.hours.display} ({siteConfig.hours.openTime} AM – {siteConfig.hours.closeTime} PM)</p>
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-white font-semibold mb-4">
              Collections
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#products" className="hover:text-gold transition-colors">Living Room Sofas</a>
              </li>
              <li>
                <a href="#products" className="hover:text-gold transition-colors">Solid Teak Dining</a>
              </li>
              <li>
                <a href="#products" className="hover:text-gold transition-colors">Storage King Beds</a>
              </li>
              <li>
                <a href="#products" className="hover:text-gold transition-colors">Luxury Recliners</a>
              </li>
              <li>
                <a href="#products" className="hover:text-gold transition-colors">Accent Coffee Tables</a>
              </li>
              <li>
                <a href="#products" className="hover:text-gold transition-colors">Orthopedic Mattresses</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-white font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#collections" className="hover:text-gold transition-colors">Shop by Room</a>
              </li>
              <li>
                <a href="#why-lavish" className="hover:text-gold transition-colors">Why Choose Lavish</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-gold transition-colors">Customer Reviews ({siteConfig.rating}★)</a>
              </li>
              <li>
                <a href="#visit-us" className="hover:text-gold transition-colors">Showroom Location & Hours</a>
              </li>
              <li>
                <a href="#order" className="hover:text-gold transition-colors">Custom Order Inquiry</a>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-white font-semibold mb-4">
              Showroom Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="flex items-center gap-2 hover:text-gold transition-colors"
                >
                  <Phone size={14} className="text-gold" />
                  <span>{siteConfig.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.whatsappBaseUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-gold transition-colors"
                >
                  <MessageCircle size={14} className="text-emerald-400" />
                  <span>WhatsApp Chat</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 hover:text-gold transition-colors"
                >
                  <Mail size={14} className="text-gold" />
                  <span>{siteConfig.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-gold transition-colors text-xs text-gold/90 font-medium"
                >
                  <MapPin size={14} className="text-gold" />
                  <span>Avinashi Rd, Chinniyampalayam</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Lavish Furniture, Coimbatore. All rights reserved.</p>

          <p className="text-center sm:text-right">
            Curated presentation demo for showroom digital presence upgrade · Built with React & Tailwind CSS
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
            title="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}

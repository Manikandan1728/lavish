import React, { useState } from 'react';
import { MessageCircle, Send, CheckCircle2, ShoppingBag, Clock, MapPin, Sparkles, PhoneCall } from 'lucide-react';
import siteConfig from '../data/siteConfig';
import { formatPrice, buildWhatsAppUrl, useInView } from '../hooks/useUtils';

export default function OrderForm({ cart = [], showToast }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    pincode: '',
    date: '',
    notes: '',
    inquiryType: 'order', // 'order' | 'custom' | 'visit'
  });

  const [containerRef, inView] = useInView();

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim()) {
      if (showToast) showToast('Please enter your name and phone number', '⚠️');
      return;
    }

    if (formData.inquiryType === 'order' && cart.length > 0) {
      // Cart WhatsApp Order
      const url = buildWhatsAppUrl(siteConfig.whatsappNumber, cart, {
        name: formData.name,
        phone: formData.phone,
        address: formData.address,
        pincode: formData.pincode,
        date: formData.date,
        notes: formData.notes,
      });
      window.open(url, '_blank');
      if (showToast) showToast('Opening WhatsApp with your order details!');
    } else {
      // Custom Consultation / Showroom Visit Inquiry
      let message = `Hello Lavish Furniture 👋\n`;
      message += `I'd like to schedule a ${
        formData.inquiryType === 'custom' ? 'Custom Furniture Consultation' : 'Showroom Visit'
      }.\n\n`;
      message += `Name: ${formData.name}\n`;
      message += `Phone: ${formData.phone}\n`;
      if (formData.address) message += `Locality: ${formData.address}\n`;
      if (formData.date) message += `Preferred Date/Time: ${formData.date}\n`;
      if (formData.notes) message += `Requirement/Notes: ${formData.notes}\n`;

      const url = `${siteConfig.whatsappBaseUrl()}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
      if (showToast) showToast('Opening WhatsApp with your inquiry!');
    }
  };

  return (
    <section ref={containerRef} className="py-20 bg-gradient-to-b from-white via-cream/30 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 text-gold-dark text-xs font-semibold uppercase tracking-wider mb-4 border border-gold/20">
            <MessageCircle size={14} className="text-gold" />
            Direct WhatsApp Assistance
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-charcoal mb-4">
            Order or Customize in One Tap
          </h2>
          <p className="text-charcoal/70 text-base md:text-lg">
            No complicated checkouts or hidden fees. We verify stock, confirm fabric swatches, and calculate delivery discounts directly over WhatsApp with our showroom team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-10 rounded-3xl border border-charcoal/10 shadow-xl shadow-charcoal/5">
            {/* Inquiry Tabs */}
            <div className="flex gap-2 p-1.5 bg-cream/70 rounded-2xl mb-8 border border-charcoal/5">
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, inquiryType: 'order' }))}
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  formData.inquiryType === 'order'
                    ? 'bg-charcoal text-white shadow-sm'
                    : 'text-charcoal/70 hover:text-charcoal'
                }`}
              >
                {cart.length > 0 ? `Order Cart (${cart.length})` : 'Product Order'}
              </button>
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, inquiryType: 'custom' }))}
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  formData.inquiryType === 'custom'
                    ? 'bg-charcoal text-white shadow-sm'
                    : 'text-charcoal/70 hover:text-charcoal'
                }`}
              >
                Custom Design
              </button>
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, inquiryType: 'visit' }))}
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  formData.inquiryType === 'visit'
                    ? 'bg-charcoal text-white shadow-sm'
                    : 'text-charcoal/70 hover:text-charcoal'
                }`}
              >
                Showroom Visit
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal/70 mb-2">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Ramesh Krishnan"
                    className="w-full px-4 py-3 rounded-xl border border-charcoal/20 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-base sm:text-sm text-charcoal bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal/70 mb-2">
                    WhatsApp / Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 98422 12345"
                    className="w-full px-4 py-3 rounded-xl border border-charcoal/20 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-base sm:text-sm text-charcoal bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal/70 mb-2">
                    Delivery Locality / Area
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="e.g. Chinniyampalayam / Peelamedu / RS Puram"
                    className="w-full px-4 py-3 rounded-xl border border-charcoal/20 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-base sm:text-sm text-charcoal bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal/70 mb-2">
                    Pincode
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    placeholder="e.g. 641062"
                    className="w-full px-4 py-3 rounded-xl border border-charcoal/20 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-base sm:text-sm text-charcoal bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal/70 mb-2">
                  Preferred Delivery or Consultation Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-charcoal/20 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-base sm:text-sm text-charcoal bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal/70 mb-2">
                  {formData.inquiryType === 'custom'
                    ? 'Custom Specifications (Wood type, fabric color, room size)'
                    : 'Notes or Special Requests'}
                </label>
                <textarea
                  name="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder={
                    formData.inquiryType === 'custom'
                      ? 'e.g. Looking for a 6-seater solid teak dining table in walnut matte finish, matching our 12x14 dining room...'
                      : 'e.g. Please bring wood swatches, or call after 5 PM...'
                  }
                  className="w-full px-4 py-3 rounded-xl border border-charcoal/20 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-base sm:text-sm text-charcoal bg-white resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-base flex items-center justify-center gap-3 shadow-lg shadow-emerald-600/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <MessageCircle size={22} className="fill-white/20" />
                <span>
                  {formData.inquiryType === 'order' && cart.length > 0
                    ? `Order via WhatsApp (${formatPrice(cartTotal)})`
                    : 'Send Details via WhatsApp'}
                </span>
                <Send size={18} />
              </button>

              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-charcoal/60 pt-2 text-center">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-emerald-600" /> Free delivery in Coimbatore
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-emerald-600" /> 5-Year Craftsmanship Warranty
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-emerald-600" /> Pay after inspection
                </span>
              </div>
            </form>
          </div>

          {/* Cart / Inquiry Summary Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-cream/60 p-7 sm:p-8 rounded-3xl border border-charcoal/10 relative overflow-hidden">
              <h3 className="font-serif font-bold text-xl text-charcoal mb-4 flex items-center gap-2">
                <ShoppingBag size={20} className="text-gold" />
                Selected Items Summary
              </h3>

              {cart.length === 0 ? (
                <div className="py-8 text-center text-charcoal/60">
                  <p className="text-sm mb-3">Your cart is currently empty.</p>
                  <p className="text-xs text-charcoal/50">
                    You can browse our collections above to add items, or submit a custom inquiry directly!
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="max-h-64 overflow-y-auto space-y-3 pr-2 divide-y divide-charcoal/5">
                    {cart.map((item, idx) => (
                      <div key={idx} className="pt-3 first:pt-0 flex items-center gap-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-14 h-14 object-cover rounded-xl border border-charcoal/10"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-xs text-charcoal truncate">{item.name}</h4>
                          <p className="text-xs text-charcoal/50">
                            {item.selectedColor || item.selectedSize || 'Standard'} • Qty: {item.quantity}
                          </p>
                          <span className="text-xs font-bold text-gold-dark">
                            {formatPrice(item.price * item.quantity)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-charcoal/10 space-y-2 text-sm">
                    <div className="flex justify-between text-charcoal/70">
                      <span>Subtotal ({cart.reduce((s, i) => s + i.quantity, 0)} items)</span>
                      <span>{formatPrice(cartTotal)}</span>
                    </div>
                    <div className="flex justify-between text-charcoal/70">
                      <span>Coimbatore Delivery</span>
                      <span className="text-emerald-600 font-semibold">FREE</span>
                    </div>
                    <div className="flex justify-between text-charcoal/70">
                      <span>Installation & Setup</span>
                      <span className="text-emerald-600 font-semibold">Complimentary</span>
                    </div>
                    <div className="pt-2 border-t border-charcoal/10 flex justify-between font-bold text-base text-charcoal">
                      <span>Estimated Total</span>
                      <span className="text-gold-dark">{formatPrice(cartTotal)}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Direct Call / Showroom Visit Box */}
            <div className="bg-charcoal text-white p-7 rounded-3xl relative overflow-hidden shadow-lg">
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 rounded-full bg-gold/20 text-gold text-xs font-semibold tracking-wider uppercase mb-3">
                  Prefer Calling?
                </span>
                <h4 className="text-xl font-serif font-bold mb-2">Speak With Our Furniture Specialist</h4>
                <p className="text-white/70 text-xs sm:text-sm mb-5 leading-relaxed">
                  Call our Avinashi Road showroom directly for custom floor plans, bulk quotes, or immediate delivery checks.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={`tel:${siteConfig.phoneRaw}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gold hover:bg-gold-light text-charcoal font-semibold text-xs sm:text-sm transition-all"
                  >
                    <PhoneCall size={16} />
                    Call {siteConfig.phone}
                  </a>
                  <a
                    href={siteConfig.whatsappEnquiryUrl('Hi, I would like to speak with a showroom manager.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm transition-all"
                  >
                    <MessageCircle size={16} />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useEffect } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, MessageCircle, ShieldCheck, Truck } from 'lucide-react';
import siteConfig from '../data/siteConfig';
import { formatPrice, buildWhatsAppUrl } from '../hooks/useUtils';

export default function CartDrawer({
  cart = [],
  cartTotal = 0,
  updateQuantity,
  removeItem,
  onClose,
}) {
  // Close drawer on Escape key
  useEffect(() => {
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

  const handleCheckoutWhatsApp = () => {
    const url = buildWhatsAppUrl(siteConfig.whatsappNumber, cart, null);
    window.open(url, '_blank');
  };

  const handleScrollToOrder = () => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById('order');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10 transform transition-transform duration-300 ease-out">
        {/* Header */}
        <div className="p-5 border-b border-charcoal/10 flex items-center justify-between bg-cream/40">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} className="text-gold" />
            <h3 className="font-serif font-bold text-lg text-charcoal">Your Shopping Cart</h3>
            <span className="text-xs px-2 py-0.5 rounded-full bg-gold/15 text-gold-dark font-semibold">
              {totalItems} {totalItems === 1 ? 'item' : 'items'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-charcoal/60 hover:text-charcoal hover:bg-black/5 transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Free Delivery Banner */}
        <div className="bg-emerald-50 border-b border-emerald-100 px-5 py-2.5 flex items-center gap-2 text-xs text-emerald-800">
          <Truck size={15} className="text-emerald-600 flex-shrink-0" />
          <span>
            <strong>Free White-Glove Delivery & Assembly</strong> included for all Coimbatore orders!
          </span>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 divide-y divide-charcoal/5">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-charcoal/60">
              <div className="w-16 h-16 rounded-full bg-sand/40 flex items-center justify-center text-charcoal/30 mb-4">
                <ShoppingBag size={32} />
              </div>
              <h4 className="font-serif font-bold text-charcoal text-lg mb-1">Your cart is empty</h4>
              <p className="text-xs text-charcoal/60 max-w-xs mb-6">
                Discover our handcrafted solid wood sofas, teak dining tables, and plush beds.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-charcoal text-white text-xs font-semibold hover:bg-gold hover:text-charcoal transition-colors"
              >
                Browse Collections
              </button>
            </div>
          ) : (
            cart.map((item, index) => (
              <div key={`${item.id}-${item.selectedColor}-${item.selectedSize}-${index}`} className="pt-4 first:pt-0 flex gap-4">
                {/* Thumbnail */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-xl border border-charcoal/10 flex-shrink-0"
                />

                {/* Details */}
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-serif font-bold text-sm text-charcoal truncate">{item.name}</h4>
                      <button
                        onClick={() => removeItem(item.id, item.selectedColor, item.selectedSize)}
                        className="text-charcoal/40 hover:text-red-500 p-1 transition-colors"
                        title="Remove item"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>

                    {(item.selectedColor || item.selectedSize) && (
                      <p className="text-xs text-charcoal/50 mt-0.5">
                        {[item.selectedColor, item.selectedSize].filter(Boolean).join(' • ')}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    {/* Quantity controls */}
                    <div className="inline-flex items-center border border-charcoal/20 rounded-lg overflow-hidden bg-white">
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.selectedColor,
                            item.selectedSize,
                            item.quantity - 1
                          )
                        }
                        className="p-1 px-2 text-charcoal/70 hover:bg-black/5"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={13} />
                      </button>
                      <span className="px-2 text-xs font-semibold text-charcoal min-w-[1.5rem] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.selectedColor,
                            item.selectedSize,
                            item.quantity + 1
                          )
                        }
                        className="p-1 px-2 text-charcoal/70 hover:bg-black/5"
                        aria-label="Increase quantity"
                      >
                        <Plus size={13} />
                      </button>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                      <span className="text-sm font-bold text-charcoal">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                      {item.mrp && item.mrp > item.price && (
                        <span className="block text-[11px] text-charcoal/40 line-through">
                          {formatPrice(item.mrp * item.quantity)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer with Totals and CTA */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-charcoal/10 bg-cream/30 space-y-4">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-charcoal/70">
                <span>Subtotal ({totalItems} items)</span>
                <span className="font-medium text-charcoal">{formatPrice(cartTotal)}</span>
              </div>
              <div className="flex justify-between text-charcoal/70">
                <span>Delivery (Coimbatore)</span>
                <span className="text-emerald-600 font-semibold">FREE</span>
              </div>
              <div className="pt-2 border-t border-charcoal/10 flex justify-between font-bold text-base text-charcoal">
                <span>Total Amount</span>
                <span className="text-gold-dark text-lg font-serif">{formatPrice(cartTotal)}</span>
              </div>
            </div>

            <div className="space-y-2.5 pt-1">
              <button
                onClick={handleCheckoutWhatsApp}
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 hover:shadow-lg transition-all"
              >
                <MessageCircle size={18} className="fill-white/20" />
                <span>Instant Checkout via WhatsApp</span>
              </button>

              <button
                onClick={handleScrollToOrder}
                className="w-full py-2.5 px-4 rounded-xl border border-charcoal/20 hover:bg-charcoal hover:text-white text-charcoal font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Or Fill Custom Order Form</span>
                <ArrowRight size={14} />
              </button>
            </div>

            <div className="flex items-center justify-center gap-4 text-[11px] text-charcoal/50 pt-1">
              <span className="flex items-center gap-1">
                <ShieldCheck size={13} className="text-gold" /> 5-Yr Warranty
              </span>
              <span>•</span>
              <span>Pay After Delivery Option</span>
              <span>•</span>
              <span>100% Genuine Wood</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

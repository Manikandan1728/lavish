import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * Format number as Indian Rupee (₹1,23,456)
 */
export function formatPrice(num) {
  if (!num && num !== 0) return '₹0';
  return '₹' + num.toLocaleString('en-IN');
}

/**
 * Calculate EMI (rough estimate for display)
 */
export function calculateEMI(price, months = 12) {
  const monthlyRate = 0.01; // ~12% p.a. demo
  const emi = (price * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);
  return Math.round(emi);
}

/**
 * Build a WhatsApp order URL
 */
export function buildWhatsAppUrl(whatsappNumber, cartItems, customerDetails) {
  let message = 'Hello Lavish Furniture 👋\n';
  message += "I'd like to order:\n";

  let total = 0;
  cartItems.forEach(item => {
    const lineTotal = item.price * item.quantity;
    total += lineTotal;
    const variant = item.selectedColor || item.selectedSize || '';
    message += `- ${item.name}${variant ? ` (${variant})` : ''} × ${item.quantity} = ${formatPrice(lineTotal)}\n`;
  });

  message += `\nTotal: ${formatPrice(total)}\n`;

  if (customerDetails) {
    if (customerDetails.name) message += `Name: ${customerDetails.name}\n`;
    if (customerDetails.phone) message += `Phone: ${customerDetails.phone}\n`;
    if (customerDetails.address) message += `Delivery address: ${customerDetails.address}`;
    if (customerDetails.pincode) message += `, ${customerDetails.pincode}`;
    message += '\n';
    if (customerDetails.date) message += `Preferred delivery: ${customerDetails.date}\n`;
    if (customerDetails.notes) message += `Notes: ${customerDetails.notes}\n`;
  }

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Build WhatsApp URL for single product enquiry
 */
export function buildProductWhatsAppUrl(whatsappNumber, product, variant, quantity) {
  const total = product.price * quantity;
  let message = `Hello Lavish Furniture 👋\nI'd like to order:\n`;
  message += `- ${product.name}${variant ? ` (${variant})` : ''} × ${quantity} = ${formatPrice(total)}\n`;
  message += `\nTotal: ${formatPrice(total)}\n`;
  message += `\nPlease share delivery details. Thank you!`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * useLocalStorage — Persist state in localStorage
 */
export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = useCallback((value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (e) {
      console.warn('Error saving to localStorage:', e);
    }
  }, [key, storedValue]);

  return [storedValue, setValue];
}

/**
 * useInView — Intersection Observer hook for reveal animations
 */
export function useInView(options = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(el); // Only animate once
        }
      },
      { threshold: 0.1, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, isInView];
}

/**
 * useScrollPosition — Track scroll position for navbar, back-to-top
 */
export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handler = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return scrollY;
}

/**
 * Toast notification system
 */
export function useToast() {
  const [toast, setToast] = useState(null);
  const timeoutRef = useRef(null);

  const showToast = useCallback((message, icon = '✓') => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setToast({ message, icon });
    timeoutRef.current = setTimeout(() => setToast(null), 3000);
  }, []);

  return { toast, showToast };
}

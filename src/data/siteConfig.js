/**
 * Site Configuration — Single source of truth for all business details.
 * =====================================================================
 * Replace the placeholder values below with actual business information.
 * All components reference this file, so changes propagate site-wide.
 */

const siteConfig = {
  // Business Identity
  businessName: 'Lavish Furniture',
  tagline: 'Furniture That Makes Every Home Feel Lavish.',
  subHeadline:
    'Handpicked sofas, dining sets, beds and recliners — crafted for comfort, priced fairly, delivered on time. Visit our Avinashi Road showroom in Coimbatore.',

  // Contact — REPLACE WITH REAL NUMBERS
  phone: '+91 98765 43210', // Placeholder — replace with actual number
  phoneRaw: '919876543210', // For tel: links (no spaces or +)
  whatsappNumber: '919876543210', // For wa.me links — replace with actual
  email: 'hello@lavishfurniture.in', // Placeholder

  // Address
  address: {
    line1: 'Door No 137A/B, Avinashi Rd',
    line2: 'PL Subbhaiya Nagar, Chinniyampalayam',
    city: 'Coimbatore',
    state: 'Tamil Nadu',
    pincode: '641062',
    full: 'Door No 137A/B, Avinashi Rd, PL Subbhaiya Nagar, Chinniyampalayam, Coimbatore, Tamil Nadu 641062',
    googleMapsUrl:
      'https://www.google.com/maps/place/Lavish+Furniture/@11.0254,76.9800,17z',
    embedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.0!2d76.98!3d11.025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sLavish+Furniture!5e0!3m2!1sen!2sin!4v1',
  },

  // Hours
  hours: {
    display: 'Open daily · Closes 9 PM',
    openTime: '10:00',
    closeTime: '21:00',
    note: 'Confirm opening hours by phone before visiting.',
  },

  // Ratings (from Google)
  rating: 4.4,
  reviewCount: 157,

  // Social Links — REPLACE WITH REAL URLS
  social: {
    instagram: '#',
    facebook: '#',
    youtube: '#',
  },

  // Delivery
  freeDeliveryZone: 'Coimbatore city',
  deliveryTimeline: '5–10 business days',

  // WhatsApp message helpers
  whatsappBaseUrl() {
    return `https://wa.me/${this.whatsappNumber}`;
  },
  whatsappEnquiryUrl(message = 'Hi, I\'d like to know more about your furniture collection.') {
    return `${this.whatsappBaseUrl()}?text=${encodeURIComponent(message)}`;
  },
};

export default siteConfig;

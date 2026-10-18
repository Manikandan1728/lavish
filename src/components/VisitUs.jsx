import React from 'react';
import { MapPin, Clock, Phone, Navigation, Car, Sparkles, Coffee, ShieldCheck, Check } from 'lucide-react';
import siteConfig from '../data/siteConfig';
import { useInView } from '../hooks/useUtils';

export default function VisitUs() {
  const [containerRef, inView] = useInView();

  const amenities = [
    { icon: Car, label: 'Free Customer Parking on Avinashi Rd' },
    { icon: Sparkles, label: 'Live Fabric & Leather Swatch Studio' },
    { icon: Coffee, label: 'Complimentary South Indian Filter Coffee' },
    { icon: ShieldCheck, label: '1-on-1 Interior Design Consultation' },
  ];

  return (
    <section ref={containerRef} className="py-20 bg-charcoal text-white relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-sand/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-gold text-xs font-semibold uppercase tracking-wider mb-4 border border-gold/30">
            <MapPin size={14} className="text-gold" />
            Coimbatore Flagship Showroom
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
            Experience the Craft in Person
          </h2>
          <p className="text-white/70 text-base md:text-lg">
            Feel the natural grain of seasoned teak, test cushion densities, and explore hundreds of custom fabrics before making your decision.
          </p>
        </div>

        {/* Showroom Details + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Information Card */}
          <div className="lg:col-span-5 bg-white/5 border border-white/10 p-7 sm:p-9 rounded-3xl backdrop-blur-md flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-gold text-xs uppercase tracking-wider font-semibold">Our Showroom</span>
                <h3 className="text-2xl font-serif font-bold text-white mt-1">Lavish Furniture</h3>
                <p className="text-white/80 text-sm mt-2 leading-relaxed">
                  {siteConfig.address.full}
                </p>
                <p className="text-xs text-gold/80 mt-1 font-medium">
                  (Near Chinniyampalayam bypass, easily accessible from Coimbatore Airport & Peelamedu)
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-4">
                {/* Timings */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-gold/15 text-gold flex-shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-white/50 font-semibold">Showroom Timings</h4>
                    <p className="text-sm font-medium text-white mt-0.5">{siteConfig.hours.display}</p>
                    <p className="text-xs text-white/50">{siteConfig.hours.openTime} AM – {siteConfig.hours.closeTime} PM · All 7 Days</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-gold/15 text-gold flex-shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-white/50 font-semibold">Direct Enquiries</h4>
                    <a
                      href={`tel:${siteConfig.phoneRaw}`}
                      className="text-sm font-medium text-white hover:text-gold transition-colors block mt-0.5"
                    >
                      {siteConfig.phone}
                    </a>
                    <p className="text-xs text-white/50">Showroom Desk & WhatsApp Assistance</p>
                  </div>
                </div>
              </div>

              {/* Showroom Amenities */}
              <div className="pt-4 border-t border-white/10">
                <h4 className="text-xs uppercase tracking-wider text-gold font-semibold mb-3">Showroom Amenities</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {amenities.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="flex items-center gap-2 text-xs text-white/80">
                        <Icon size={14} className="text-gold flex-shrink-0" />
                        <span>{item.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 mt-6 border-t border-white/10 flex flex-wrap gap-3">
              <a
                href={siteConfig.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-gold hover:bg-gold-light text-charcoal font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
              >
                <Navigation size={16} />
                <span>Get Driving Directions</span>
              </a>
              <a
                href={siteConfig.whatsappEnquiryUrl('Hi! I am planning to visit the Lavish Furniture showroom today. Could you share your location map?')}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
              >
                Send Location on WhatsApp
              </a>
            </div>
          </div>

          {/* Interactive Google Map embed */}
          <div className="lg:col-span-7 bg-charcoal-light/60 rounded-3xl overflow-hidden border border-white/10 relative min-h-[420px] flex flex-col">
            <div className="relative w-full flex-1">
              <iframe
                title="Lavish Furniture Coimbatore Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.0356555122114!2d77.065842!3d11.036035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8ff56a29d5b41%3A0x673a9eb6cf390234!2sChinniyampalayam%2C%20Coimbatore!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full min-h-[400px] border-0 filter grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Pin Card on Map */}
              <div className="absolute top-4 left-4 bg-charcoal/90 backdrop-blur-md border border-white/15 p-3.5 rounded-2xl shadow-xl max-w-xs pointer-events-none">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-semibold text-white">Showroom Open Today</span>
                </div>
                <p className="text-xs text-white/70 mt-1">Avinashi Road, Chinniyampalayam</p>
              </div>
            </div>

            {/* Bottom quick navigation hint */}
            <div className="bg-charcoal/90 p-4 border-t border-white/10 flex items-center justify-between text-xs text-white/70">
              <span>Located right along Avinashi Main Road opposite Chinniyampalayam</span>
              <a
                href={siteConfig.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold font-semibold hover:underline inline-flex items-center gap-1"
              >
                Open in Google Maps App →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { ShoppingBag, X } from 'lucide-react';
import { formatPrice, useInView } from '../hooks/useUtils';
import products from '../data/products';

/**
 * Room Inspiration — Shop the Look section
 * Full-width styled room image with clickable hotspot pins
 */

const rooms = [
  {
    name: 'Living Room',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1400&q=80',
    hotspots: [
      { id: 1, x: '28%', y: '55%', productId: 1 },   // Sofa
      { id: 2, x: '62%', y: '70%', productId: 11 },  // Coffee table
      { id: 3, x: '80%', y: '40%', productId: 10 },  // TV unit
    ],
  },
  {
    name: 'Dining Room',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=1400&q=80',
    hotspots: [
      { id: 4, x: '45%', y: '50%', productId: 5 },   // Dining set
      { id: 5, x: '15%', y: '60%', productId: 6 },   // Aria dining
      { id: 6, x: '75%', y: '35%', productId: 9 },   // Wardrobe
    ],
  },
];

function HotspotPin({ hotspot, onClick, isActive, onAddToCart }) {
  const product = products.find(p => p.id === hotspot.productId);
  if (!product) return null;

  return (
    <div
      className="absolute z-10"
      style={{ left: hotspot.x, top: hotspot.y }}
    >
      {/* Pin */}
      <button
        onClick={() => onClick(hotspot.id)}
        className={`hotspot-pin ${isActive ? 'scale-125 bg-white !border-gold' : ''}`}
        aria-label={`View ${product.name}`}
        style={isActive ? { background: 'white' } : {}}
      >
        {isActive && <span className="text-gold text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">×</span>}
      </button>

      {/* Mini product card */}
      {isActive && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-52 bg-white rounded-xl shadow-hover p-3 animate-fade-up">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-24 object-cover rounded-lg mb-2"
            loading="lazy"
          />
          <p className="text-xs font-semibold text-charcoal truncate">{product.name}</p>
          <p className="text-sm font-bold text-charcoal">{formatPrice(product.price)}</p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (onAddToCart) onAddToCart(product);
            }}
            className="w-full mt-2 flex items-center justify-center gap-1.5 bg-gold text-white text-xs font-semibold py-2 rounded-lg hover:bg-walnut transition-colors"
          >
            <ShoppingBag size={12} /> Add to Cart
          </button>
        </div>
      )}
    </div>
  );
}

export default function RoomInspiration({ addToCart }) {
  const [ref, isInView] = useInView();
  const [activeRoom, setActiveRoom] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState(null);

  const room = rooms[activeRoom];

  const handleHotspotClick = (id) => {
    setActiveHotspot(activeHotspot === id ? null : id);
  };

  return (
    <div ref={ref} className="bg-ivory py-20 md:py-28">
      <div className="section-container">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="section-label mb-3">Get Inspired</p>
          <h2 className="font-serif text-3xl md:text-5xl text-charcoal">
            Shop the Look
          </h2>
          <div className="divider-gold" />
          <p className="text-charcoal/50 text-sm mt-3">
            Click the pins to discover products used in these styled rooms.
          </p>
        </div>

        {/* Room tabs */}
        <div className="flex justify-center gap-3 mb-8">
          {rooms.map((r, i) => (
            <button
              key={r.name}
              onClick={() => { setActiveRoom(i); setActiveHotspot(null); }}
              className={`px-5 py-2.5 text-sm font-semibold rounded-full transition-all ${
                activeRoom === i
                  ? 'bg-charcoal text-white'
                  : 'bg-white text-charcoal/60 hover:bg-gold/10'
              }`}
            >
              {r.name}
            </button>
          ))}
        </div>

        {/* Room image with hotspots */}
        <div
          className={`relative rounded-2xl overflow-hidden aspect-[16/9] md:aspect-[21/9] transition-all duration-700 ${
            isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <img
            src={room.image}
            alt={`${room.name} inspiration`}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.style.background = '#EFE7DB';
            }}
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-charcoal/10" />

          {/* Hotspots */}
          {room.hotspots.map(hotspot => (
            <HotspotPin
              key={hotspot.id}
              hotspot={hotspot}
              onClick={handleHotspotClick}
              isActive={activeHotspot === hotspot.id}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

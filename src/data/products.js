/**
 * Product Catalog — Lavish Furniture Coimbatore
 * =============================================
 * Curated product catalog covering all major furniture categories:
 * - Sofas (7 items)
 * - Recliners (7 items)
 * - Dining (7 items)
 * - Beds (7 items)
 * - Wardrobes (6 items)
 * - TV Units (6 items)
 * - Tables (6 items)
 * - Study (6 items)
 * Total: 52 distinct products.
 */

const products = [
  {
    "id": 1,
    "sku": "LF-SOF-001",
    "name": "Regal 3+2 Fabric Sofa Set",
    "category": "Sofas",
    "price": 42990,
    "mrp": 54990,
    "discountPercent": 22,
    "rating": 4.5,
    "reviewCount": 34,
    "images": [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
      "https://images.unsplash.com/photo-1550254478-ead40cc54513?w=800&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80",
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80"
    ],
    "colors": [
      {
        "name": "Teal Blue",
        "hex": "#3B8EA5"
      },
      {
        "name": "Warm Grey",
        "hex": "#9B9B9B"
      },
      {
        "name": "Olive Green",
        "hex": "#6B7F4E"
      },
      {
        "name": "Rust Orange",
        "hex": "#C45B28"
      }
    ],
    "sizes": [
      "3+2 Set",
      "3+1+1 Set",
      "3-Seater Only"
    ],
    "shortDescription": "A roomy 3+2 sofa set in premium fabric with high-resilience foam cushions. Perfect for large living rooms.",
    "longDescription": "The Regal sofa set combines classic lines with everyday comfort. The solid sal-wood frame is built to last for years, while the high-density HR foam cushioning keeps its shape even after extended use. The fabric is easy to clean and available in four sophisticated colourways. Ideal for families who want style without compromise.",
    "specs": {
      "dimensions": "3-Seater: 84 × 34 × 33 in (213 × 86 × 84 cm) · 2-Seater: 60 × 34 × 33 in (152 × 86 × 84 cm)",
      "material": "Solid sal wood frame, engineered wood base",
      "upholstery": "Premium woven polyester fabric",
      "weight": "85 kg (set)",
      "seating": "5 persons",
      "warranty": "3 years on frame · 1 year on upholstery & foam",
      "assembly": "Pre-assembled — no assembly required"
    },
    "delivery": {
      "timeline": "7–12 business days",
      "freeDeliveryZone": "Coimbatore city",
      "installation": "Free installation included"
    },
    "care": [
      "Vacuum upholstery weekly to prevent dust build-up.",
      "Blot spills immediately with a dry cloth — do not rub.",
      "Rotate cushions monthly for even wear.",
      "Keep away from direct sunlight to prevent fading."
    ],
    "stock": "In Stock",
    "tags": [
      "bestseller",
      "family"
    ]
  },
  {
    "id": 2,
    "sku": "LF-SOF-002",
    "name": "Milano L-Shape Corner Sofa",
    "category": "Sofas",
    "price": 58500,
    "mrp": 72000,
    "discountPercent": 19,
    "rating": 4.6,
    "reviewCount": 21,
    "images": [
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&q=80",
      "https://images.unsplash.com/photo-1558211583-d26f610c1eb1?w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&q=80"
    ],
    "colors": [
      {
        "name": "Charcoal",
        "hex": "#3C3C3C"
      },
      {
        "name": "Beige",
        "hex": "#D4C5A9"
      },
      {
        "name": "Navy Blue",
        "hex": "#1B3A5C"
      }
    ],
    "sizes": [
      "Left-Facing L",
      "Right-Facing L",
      "U-Shape (add ₹12,000)"
    ],
    "shortDescription": "A spacious L-shape sectional sofa with adjustable headrests and a chaise lounge. Seats up to 6 comfortably.",
    "longDescription": "The Milano transforms your living room into a lounge-worthy retreat. Its generous L-shape layout provides ample seating for the whole family, while the adjustable headrests let each person find their perfect angle. The solid wood frame ensures durability, and the high-resilience foam keeps you comfortable for hours. Available in three sophisticated colorways to match any décor.",
    "specs": {
      "dimensions": "110 × 72 × 34 in (280 × 183 × 86 cm)",
      "material": "Solid wood frame, plywood & particle board base",
      "upholstery": "Leatherette with fabric blend on sides",
      "weight": "110 kg",
      "seating": "6 persons",
      "warranty": "3 years on frame · 1 year on upholstery",
      "assembly": "Modular — easy two-part assembly (included)"
    },
    "delivery": {
      "timeline": "10–15 business days",
      "freeDeliveryZone": "Coimbatore city",
      "installation": "Free installation included"
    },
    "care": [
      "Wipe leatherette surfaces with a damp cloth weekly.",
      "Condition leatherette every 6 months to prevent cracking.",
      "Avoid sharp objects near the upholstery.",
      "Keep away from heat sources and direct sunlight."
    ],
    "stock": "In Stock",
    "tags": [
      "premium",
      "new-arrival"
    ]
  },
  {
    "id": 3,
    "sku": "LF-SOF-003",
    "name": "Duke 3-Seater Leatherette Sofa",
    "category": "Sofas",
    "price": 29900,
    "mrp": 38500,
    "discountPercent": 22,
    "rating": 4.3,
    "reviewCount": 42,
    "images": [
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80"
    ],
    "colors": [
      {
        "name": "Dark Brown",
        "hex": "#4A2C17"
      },
      {
        "name": "Black",
        "hex": "#1A1A1A"
      },
      {
        "name": "Tan",
        "hex": "#C29A6E"
      }
    ],
    "sizes": [
      "3-Seater",
      "2-Seater (₹22,900)"
    ],
    "shortDescription": "A sleek leatherette sofa with chrome legs and generous padding. Great value for modern living rooms.",
    "longDescription": "The Duke brings contemporary elegance at an accessible price. The high-quality leatherette upholstery is stain-resistant and easy to maintain, while the chrome-finished legs add a modern flair. Pocket-spring cushions provide firm support without feeling stiff. A smart choice for apartments and compact homes.",
    "specs": {
      "dimensions": "82 × 33 × 32 in (208 × 84 × 81 cm)",
      "material": "Engineered wood frame with metal legs",
      "upholstery": "Premium PU leatherette",
      "weight": "48 kg",
      "seating": "3 persons",
      "warranty": "2 years on frame · 1 year on leatherette",
      "assembly": "Pre-assembled — just attach legs (5 min)"
    },
    "delivery": {
      "timeline": "5–8 business days",
      "freeDeliveryZone": "Coimbatore city",
      "installation": "Free installation included"
    },
    "care": [
      "Wipe with a soft damp cloth regularly.",
      "Use mild soap for stubborn stains — no harsh chemicals.",
      "Avoid prolonged exposure to sunlight.",
      "Apply leather conditioner every 3 months."
    ],
    "stock": "In Stock",
    "tags": [
      "value-pick",
      "bestseller"
    ]
  },
  {
    "id": 4,
    "sku": "LF-REC-001",
    "name": "Comfort Plus Motorized Recliner",
    "category": "Recliners",
    "price": 24990,
    "mrp": 32000,
    "discountPercent": 22,
    "rating": 4.7,
    "reviewCount": 28,
    "images": [
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80",
      "https://images.unsplash.com/photo-1550254478-ead40cc54513?w=800&q=80"
    ],
    "colors": [
      {
        "name": "Chocolate Brown",
        "hex": "#5C3317"
      },
      {
        "name": "Grey",
        "hex": "#7A7A7A"
      },
      {
        "name": "Burgundy",
        "hex": "#722F37"
      }
    ],
    "sizes": [
      "Single Recliner",
      "With Ottoman (add ₹3,000)"
    ],
    "shortDescription": "One-touch motorized recliner with USB charging, lumbar support and an extendable footrest. Your personal relaxation station.",
    "longDescription": "The Comfort Plus is our top-rated recliner for a reason. At the press of a button, it smoothly reclines to your preferred angle while the built-in lumbar support keeps your spine happy. The side pocket holds your remote, and the USB port charges your phone. Thick padded armrests and a plush headrest complete the experience.",
    "specs": {
      "dimensions": "36 × 34 × 40 in (91 × 86 × 102 cm)",
      "material": "Metal frame with hardwood arms",
      "upholstery": "Air-leather (breathable PU)",
      "weight": "42 kg",
      "seating": "1 person (capacity up to 120 kg)",
      "warranty": "2 years on motor · 1 year on upholstery",
      "assembly": "Pre-assembled — plug in and recline"
    },
    "delivery": {
      "timeline": "5–7 business days",
      "freeDeliveryZone": "Coimbatore city",
      "installation": "Free installation included"
    },
    "care": [
      "Wipe with a soft cloth after use.",
      "Do not exceed the weight capacity (120 kg).",
      "Check power cable monthly for wear.",
      "Lubricate reclining mechanism annually."
    ],
    "stock": "In Stock",
    "tags": [
      "bestseller",
      "comfort"
    ]
  },
  {
    "id": 5,
    "sku": "LF-DIN-001",
    "name": "Heritage 6-Seater Solid Wood Dining Set",
    "category": "Dining",
    "price": 46500,
    "mrp": 59000,
    "discountPercent": 21,
    "rating": 4.5,
    "reviewCount": 18,
    "images": [
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80",
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80",
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&q=80"
    ],
    "colors": [
      {
        "name": "Honey Oak",
        "hex": "#C08B3E"
      },
      {
        "name": "Dark Walnut",
        "hex": "#4A3728"
      },
      {
        "name": "Natural Teak",
        "hex": "#B8860B"
      }
    ],
    "sizes": [
      "6-Seater",
      "8-Seater (add ₹8,000)",
      "4-Seater (₹38,500)"
    ],
    "shortDescription": "A stunning 6-seater dining table in solid sheesham wood with cushioned chairs. Built to last generations.",
    "longDescription": "The Heritage dining set is the heart of family gatherings. Crafted from solid sheesham (Indian rosewood), each piece showcases the wood's natural grain. The six chairs feature padded seats with fabric upholstery for long, comfortable meals. The table's thick legs and cross-brace design ensure rock-solid stability. A timeless heirloom piece.",
    "specs": {
      "dimensions": "Table: 72 × 36 × 30 in (183 × 91 × 76 cm) · Chair: 18 × 18 × 38 in",
      "material": "Solid sheesham wood",
      "upholstery": "Chair seats: cotton-polyester blend fabric",
      "weight": "95 kg (set)",
      "seating": "6 persons",
      "warranty": "5 years on wood · 1 year on chair upholstery",
      "assembly": "Minor assembly — attach chair legs (tools included)"
    },
    "delivery": {
      "timeline": "10–14 business days",
      "freeDeliveryZone": "Coimbatore city",
      "installation": "Free installation included"
    },
    "care": [
      "Wipe table surface after meals with a dry cloth.",
      "Use coasters under hot dishes and glasses.",
      "Polish wood with furniture wax every 3 months.",
      "Keep away from excessive moisture."
    ],
    "stock": "In Stock",
    "tags": [
      "premium",
      "heirloom"
    ]
  },
  {
    "id": 6,
    "sku": "LF-DIN-002",
    "name": "Aria 4-Seater Glass-Top Dining Set",
    "category": "Dining",
    "price": 21900,
    "mrp": 28500,
    "discountPercent": 23,
    "rating": 4.2,
    "reviewCount": 15,
    "images": [
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80",
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80",
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&q=80"
    ],
    "colors": [
      {
        "name": "Black Metal",
        "hex": "#1C1C1C"
      },
      {
        "name": "Rose Gold",
        "hex": "#B76E79"
      }
    ],
    "sizes": [
      "4-Seater",
      "6-Seater (add ₹5,500)"
    ],
    "shortDescription": "A contemporary glass-top dining table with powder-coated metal legs and matching upholstered chairs.",
    "longDescription": "The Aria brings a modern, airy aesthetic to your dining space. The 8mm tempered-glass top is scratch-resistant and easy to clean, while the sleek metal frame keeps the profile slim. The four chairs feature foam-padded leatherette seats for casual comfort. An excellent choice for apartments and compact dining areas.",
    "specs": {
      "dimensions": "Table: 48 × 30 × 30 in (122 × 76 × 76 cm) · Chair: 17 × 17 × 35 in",
      "material": "8mm tempered glass top, powder-coated metal frame",
      "upholstery": "Chair seats: PU leatherette",
      "weight": "52 kg (set)",
      "seating": "4 persons",
      "warranty": "2 years on frame · 1 year on glass (manufacturing defects)",
      "assembly": "Easy assembly — 20 minutes"
    },
    "delivery": {
      "timeline": "5–8 business days",
      "freeDeliveryZone": "Coimbatore city",
      "installation": "Free installation included"
    },
    "care": [
      "Clean glass top with a glass cleaner weekly.",
      "Avoid placing heavy objects on glass edges.",
      "Wipe metal legs to prevent dust accumulation.",
      "Use placemats to prevent scratches."
    ],
    "stock": "In Stock",
    "tags": [
      "compact",
      "modern"
    ]
  },
  {
    "id": 7,
    "sku": "LF-BED-001",
    "name": "Royal King-Size Upholstered Bed with Storage",
    "category": "Beds",
    "price": 38900,
    "mrp": 49500,
    "discountPercent": 21,
    "rating": 4.6,
    "reviewCount": 24,
    "images": [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
      "https://images.unsplash.com/photo-1616627561839-074385245ff6?w=800&q=80",
      "https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?w=800&q=80"
    ],
    "colors": [
      {
        "name": "Pearl White",
        "hex": "#E8E0D5"
      },
      {
        "name": "Slate Grey",
        "hex": "#5E5E5E"
      },
      {
        "name": "Blush Pink",
        "hex": "#D4A5A5"
      }
    ],
    "sizes": [
      "King (78×72 in)",
      "Queen (75×60 in) — ₹34,900"
    ],
    "shortDescription": "A luxurious king-size bed with a tall tufted headboard and hydraulic under-bed storage. Elegance meets practicality.",
    "longDescription": "The Royal bed redefines bedroom luxury. The tall, channel-tufted headboard adds a boutique-hotel feel, while the hydraulic lift-up storage underneath hides away bedding and seasonal items. The solid engineered-wood frame supports mattresses up to 10 inches thick. Pairs beautifully with our bedside tables (sold separately).",
    "specs": {
      "dimensions": "80 × 76 × 48 in (203 × 193 × 122 cm) including headboard",
      "material": "Engineered wood with solid wood legs",
      "upholstery": "Velvet fabric on headboard",
      "weight": "90 kg",
      "seating": "King size — fits 78×72 in mattress",
      "warranty": "5 years on frame · 2 years on hydraulic mechanism",
      "assembly": "Professional assembly included with delivery"
    },
    "delivery": {
      "timeline": "10–15 business days",
      "freeDeliveryZone": "Coimbatore city",
      "installation": "Free installation included"
    },
    "care": [
      "Vacuum headboard fabric monthly.",
      "Operate hydraulic storage gently — do not slam.",
      "Use a mattress protector to avoid stains.",
      "Tighten bolts every 6 months."
    ],
    "stock": "In Stock",
    "tags": [
      "premium",
      "storage"
    ]
  },
  {
    "id": 8,
    "sku": "LF-BED-002",
    "name": "Serene Queen Bed (Sheesham Wood)",
    "category": "Beds",
    "price": 27500,
    "mrp": 34000,
    "discountPercent": 19,
    "rating": 4.4,
    "reviewCount": 31,
    "images": [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
      "https://images.unsplash.com/photo-1616627561839-074385245ff6?w=800&q=80",
      "https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?w=800&q=80"
    ],
    "colors": [
      {
        "name": "Provincial Teak",
        "hex": "#8B5E3C"
      },
      {
        "name": "Mahogany",
        "hex": "#5C2E00"
      }
    ],
    "sizes": [
      "Queen (75×60 in)",
      "King (78×72 in) — ₹32,500"
    ],
    "shortDescription": "A minimalist queen bed crafted entirely from solid sheesham wood with a slatted headboard. Timeless and sturdy.",
    "longDescription": "The Serene bed celebrates the beauty of natural wood. Made entirely from solid sheesham, it ages gracefully, developing a richer patina over the years. The slatted headboard allows airflow and adds a modern-rustic touch. No MDF, no particle board — just real wood craftsmanship.",
    "specs": {
      "dimensions": "79 × 64 × 36 in (201 × 163 × 91 cm) including headboard",
      "material": "100% solid sheesham (Indian rosewood)",
      "upholstery": "N/A — solid wood finish",
      "weight": "75 kg",
      "seating": "Queen size — fits 75×60 in mattress",
      "warranty": "8 years on frame",
      "assembly": "Minor assembly — attach headboard (tools included)"
    },
    "delivery": {
      "timeline": "7–12 business days",
      "freeDeliveryZone": "Coimbatore city",
      "installation": "Free installation included"
    },
    "care": [
      "Dust with a dry soft cloth regularly.",
      "Apply teak oil every 6 months for a rich finish.",
      "Avoid placing near heat sources or AC vents.",
      "Use felt pads under objects placed on surfaces."
    ],
    "stock": "In Stock",
    "tags": [
      "solid-wood",
      "eco-friendly"
    ]
  },
  {
    "id": 9,
    "sku": "LF-WRD-001",
    "name": "Orion 3-Door Wardrobe with Mirror",
    "category": "Wardrobes",
    "price": 32800,
    "mrp": 41000,
    "discountPercent": 20,
    "rating": 4.3,
    "reviewCount": 16,
    "images": [
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&q=80",
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&q=80",
      "https://images.unsplash.com/photo-1616627561839-074385245ff6?w=800&q=80"
    ],
    "colors": [
      {
        "name": "Classic Walnut",
        "hex": "#5A3E2B"
      },
      {
        "name": "White & Oak",
        "hex": "#F5E6C8"
      }
    ],
    "sizes": [
      "3-Door",
      "2-Door (₹24,800)",
      "4-Door (₹42,000)"
    ],
    "shortDescription": "A spacious 3-door wardrobe with a full-length mirror, hanging rods, shelves, and a lock. Smart bedroom storage.",
    "longDescription": "The Orion wardrobe offers organized storage for the whole family. The three-door design includes a centre section with a full-length mirror, while the interior features adjustable shelves, a hanging rail, a top loft, and a small lockable drawer for valuables. Made from high-grade engineered wood with a laminated finish that resists scratches and moisture.",
    "specs": {
      "dimensions": "63 × 21 × 78 in (160 × 53 × 198 cm)",
      "material": "High-density engineered wood with laminate finish",
      "upholstery": "N/A",
      "weight": "85 kg",
      "seating": "N/A",
      "warranty": "3 years on structure · 1 year on hardware (hinges, locks)",
      "assembly": "Professional assembly included with delivery"
    },
    "delivery": {
      "timeline": "10–15 business days",
      "freeDeliveryZone": "Coimbatore city",
      "installation": "Free installation included"
    },
    "care": [
      "Wipe surfaces with a dry cloth regularly.",
      "Do not overload shelves beyond rated capacity.",
      "Oil hinges every 6 months for smooth operation.",
      "Keep the wardrobe away from damp walls."
    ],
    "stock": "In Stock",
    "tags": [
      "storage",
      "family"
    ]
  },
  {
    "id": 10,
    "sku": "LF-TVU-001",
    "name": "Linea Wall-Mount TV Unit (55″ ready)",
    "category": "TV Units",
    "price": 14990,
    "mrp": 19500,
    "discountPercent": 23,
    "rating": 4.4,
    "reviewCount": 38,
    "images": [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80",
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80"
    ],
    "colors": [
      {
        "name": "Walnut & White",
        "hex": "#5A3E2B"
      },
      {
        "name": "All White",
        "hex": "#FAFAFA"
      },
      {
        "name": "Charcoal Oak",
        "hex": "#3C3C3C"
      }
    ],
    "sizes": [
      "55″ (55 in wide)",
      "65″ (65 in wide) — ₹18,990"
    ],
    "shortDescription": "A sleek wall-mounted TV unit with cable management, open shelves and a closed cabinet. Supports TVs up to 55 inches.",
    "longDescription": "The Linea TV unit keeps your entertainment area clutter-free with its smart cable management channels and a mix of open and closed storage. The wall-mount design creates a floating effect that makes rooms look larger. Finished in a dual-tone laminate that is both stylish and easy to maintain.",
    "specs": {
      "dimensions": "55 × 12 × 16 in (140 × 30 × 41 cm)",
      "material": "Engineered wood with laminate finish",
      "upholstery": "N/A",
      "weight": "22 kg",
      "seating": "N/A — supports TVs up to 30 kg",
      "warranty": "2 years on structure",
      "assembly": "Wall-mount installation included"
    },
    "delivery": {
      "timeline": "5–7 business days",
      "freeDeliveryZone": "Coimbatore city",
      "installation": "Free wall-mount installation included"
    },
    "care": [
      "Dust with a microfibre cloth weekly.",
      "Avoid placing hot objects directly on the surface.",
      "Check wall mounts periodically for tightness.",
      "Keep cable channels organized for airflow."
    ],
    "stock": "In Stock",
    "tags": [
      "bestseller",
      "compact"
    ]
  },
  {
    "id": 11,
    "sku": "LF-TBL-001",
    "name": "Opal Nested Coffee Table Set",
    "category": "Tables",
    "price": 8990,
    "mrp": 12000,
    "discountPercent": 25,
    "rating": 4.5,
    "reviewCount": 45,
    "images": [
      "https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=800&q=80",
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80"
    ],
    "colors": [
      {
        "name": "Gold & White Marble",
        "hex": "#B8924A"
      },
      {
        "name": "Black & Rose Gold",
        "hex": "#1A1A1A"
      }
    ],
    "sizes": [
      "Set of 3 (nested)",
      "Single Large Table — ₹4,990"
    ],
    "shortDescription": "A set of three nesting coffee tables with a marble-look top and slender gold-finish legs. Elegant and space-saving.",
    "longDescription": "The Opal nested set is the perfect accent for any living room. When you need extra surface area, pull out the smaller tables; when you don't, they tuck neatly away. The marble-effect engineered-stone tops are heat-resistant and easy to wipe, while the powder-coated metal legs add a touch of glamour.",
    "specs": {
      "dimensions": "Large: 30 × 18 × 18 in · Medium: 24 × 16 × 16 in · Small: 18 × 14 × 14 in",
      "material": "Engineered stone top, powder-coated metal legs",
      "upholstery": "N/A",
      "weight": "18 kg (set)",
      "seating": "N/A",
      "warranty": "1 year on structure",
      "assembly": "No assembly required"
    },
    "delivery": {
      "timeline": "3–5 business days",
      "freeDeliveryZone": "Coimbatore city",
      "installation": "Not required"
    },
    "care": [
      "Wipe with a damp cloth after use.",
      "Use coasters to prevent ring marks.",
      "Avoid dragging on floors — lift to move.",
      "Check leg levellers on uneven surfaces."
    ],
    "stock": "In Stock",
    "tags": [
      "bestseller",
      "accent"
    ]
  },
  {
    "id": 12,
    "sku": "LF-STD-001",
    "name": "Scholar Study Desk with Bookshelf",
    "category": "Study",
    "price": 11500,
    "mrp": 15000,
    "discountPercent": 23,
    "rating": 4.3,
    "reviewCount": 22,
    "images": [
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&q=80",
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80"
    ],
    "colors": [
      {
        "name": "Natural Oak",
        "hex": "#C09A6B"
      },
      {
        "name": "White & Walnut",
        "hex": "#FAFAFA"
      }
    ],
    "sizes": [
      "Standard (48 in)",
      "Compact (36 in) — ₹9,500"
    ],
    "shortDescription": "A versatile study desk with an integrated bookshelf, cable grommets and a keyboard tray. Ideal for work-from-home setups.",
    "longDescription": "The Scholar desk makes working from home comfortable and organized. The attached bookshelf keeps references and décor within arm's reach, while the built-in cable grommets hide messy wires. The pull-out keyboard tray saves desk space, and the sturdy engineered-wood construction supports dual monitors with ease.",
    "specs": {
      "dimensions": "48 × 24 × 60 in (122 × 61 × 152 cm) including shelf",
      "material": "Engineered wood with melamine laminate",
      "upholstery": "N/A",
      "weight": "35 kg",
      "seating": "N/A — pair with any office chair",
      "warranty": "2 years on structure",
      "assembly": "Assembly required — hardware and instructions included (45 min)"
    },
    "delivery": {
      "timeline": "5–7 business days",
      "freeDeliveryZone": "Coimbatore city",
      "installation": "Free assembly included on request"
    },
    "care": [
      "Clean with a dry or slightly damp cloth.",
      "Avoid placing hot cups directly on the surface.",
      "Do not exceed shelf weight limits (5 kg per shelf).",
      "Secure to the wall if in an earthquake-prone area."
    ],
    "stock": "In Stock",
    "tags": [
      "wfh",
      "value-pick"
    ]
  },
  {
    "id": 13,
    "sku": "LF-REC-002",
    "name": "Verona Single-Seater Manual Glider Recliner",
    "category": "Recliners",
    "price": 18990,
    "mrp": 24990,
    "discountPercent": 24,
    "rating": 4.4,
    "reviewCount": 19,
    "images": [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&q=80",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80",
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80"
    ],
    "colors": [
      {
        "name": "Oatmeal Cream",
        "hex": "#E3DAC9"
      },
      {
        "name": "Slate Grey",
        "hex": "#708090"
      },
      {
        "name": "Warm Taupe",
        "hex": "#B38B6D"
      }
    ],
    "sizes": [
      "Standard Recliner",
      "Wide Seat (+₹2,500)"
    ],
    "shortDescription": "Smooth 360-degree swivel and gentle gliding motion with pull-latch recline. Ideal for living rooms and nursery corners.",
    "longDescription": "The Verona Glider Recliner is designed for pure tranquility. Featuring a concealed manual latch release, heavy-gauge steel glider tracks, and a 360-degree rotating base, it provides silent and effortless relaxation. The breathable linen-blend upholstery stays cool in Coimbatore weather, while pocket-coil seat springs maintain resilient support.",
    "specs": {
      "dimensions": "34 × 36 × 41 in (86 × 91 × 104 cm)",
      "material": "Kiln-dried hardwood frame, heavy-duty alloy glider base",
      "upholstery": "Breathable woven linen-blend fabric",
      "weight": "38 kg",
      "seating": "1 person (up to 125 kg)",
      "warranty": "3 years on mechanism · 1 year on fabric",
      "assembly": "Tool-free quick slot-in assembly (5 minutes)"
    },
    "delivery": {
      "timeline": "5–8 business days",
      "freeDeliveryZone": "Coimbatore city",
      "installation": "Free doorstep assembly included"
    },
    "care": [
      "Vacuum with soft brush attachment weekly.",
      "Spot clean spills with mild fabric shampoo.",
      "Keep 12 inches away from radiators or heat sources."
    ],
    "stock": "In Stock",
    "tags": [
      "swivel",
      "lounge",
      "glider",
      "manual"
    ]
  },
  {
    "id": 14,
    "sku": "LF-REC-003",
    "name": "Royale Dual-Motor Power Lift & Tilt Recliner",
    "category": "Recliners",
    "price": 34500,
    "mrp": 45000,
    "discountPercent": 23,
    "rating": 4.8,
    "reviewCount": 31,
    "images": [
      "https://images.unsplash.com/photo-1541558869434-2840d308329a?w=800&q=80",
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80",
      "https://images.unsplash.com/photo-1549497538-303791108f95?w=800&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80"
    ],
    "colors": [
      {
        "name": "Mocha Brown",
        "hex": "#4B3621"
      },
      {
        "name": "Charcoal Black",
        "hex": "#232B2B"
      },
      {
        "name": "Navy Mist",
        "hex": "#2C3E50"
      }
    ],
    "sizes": [
      "Standard Power Lift",
      "Large Heavy-Duty (+₹4,000)"
    ],
    "shortDescription": "Dual-motor motorized power recliner with gentle lift-assist technology for effortless standing and reclining.",
    "longDescription": "The Royale Power Lift Recliner combines luxury comfort with assistive engineering. Dual German-engineered OKIN actuators allow the backrest and footrest to adjust completely independently to infinite positions, including flat sleeping and standing lift assist. Includes an intuitive handheld remote with built-in USB charging.",
    "specs": {
      "dimensions": "37 × 38 × 42 in (94 × 97 × 107 cm)",
      "material": "Reinforced tubular alloy steel with solid sal wood core",
      "upholstery": "High-density ultra-soft faux suede fabric",
      "weight": "49 kg",
      "seating": "1 person (up to 140 kg)",
      "warranty": "3 years on dual motors · 2 years on frame",
      "assembly": "Pre-assembled — plug into standard 230V socket"
    },
    "delivery": {
      "timeline": "5–7 business days",
      "freeDeliveryZone": "Coimbatore city",
      "installation": "Free demonstration and setup included"
    },
    "care": [
      "Wipe with a clean dry microfiber cloth.",
      "Check power adapter and cord periodically.",
      "Do not operate while child or pet is under footrest."
    ],
    "stock": "In Stock",
    "tags": [
      "power",
      "motorized",
      "lift-assist",
      "bestseller"
    ]
  },
  {
    "id": 15,
    "sku": "LF-REC-004",
    "name": "Nordic Minimalist Fabric Lounge Recliner with Ottoman",
    "category": "Recliners",
    "price": 21500,
    "mrp": 28000,
    "discountPercent": 23,
    "rating": 4.6,
    "reviewCount": 14,
    "images": [
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&q=80",
      "https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=800&q=80"
    ],
    "colors": [
      {
        "name": "Ivory White",
        "hex": "#FFFFF0"
      },
      {
        "name": "Forest Green",
        "hex": "#228B22"
      },
      {
        "name": "Amber Mustard",
        "hex": "#FFBF00"
      }
    ],
    "sizes": [
      "Recliner + Matching Ottoman Set"
    ],
    "shortDescription": "Scandinavian bentwood silhouette with ergonomic reclining backrest and dedicated footrest ottoman.",
    "longDescription": "Crafted with continuous laminated bent birch wood, the Nordic Lounge Recliner flexes subtly with your body movement for an organic floating comfort. The angle-adjustable recliner knob lets you lock your preferred reading or resting pitch, while the matching angled ottoman supports natural leg circulation.",
    "specs": {
      "dimensions": "Chair: 31 × 33 × 39 in · Ottoman: 21 × 18 × 16 in",
      "material": "Layer-glued bent birch wood with steel support core",
      "upholstery": "High-resilience textured bouclé fabric",
      "weight": "24 kg (set)",
      "seating": "1 person (up to 110 kg)",
      "warranty": "2 years on wooden frame and structure",
      "assembly": "Simple bolt assembly (tools included, 15 min)"
    },
    "delivery": {
      "timeline": "4–6 business days",
      "freeDeliveryZone": "Coimbatore city",
      "installation": "Free delivery and assembly included"
    },
    "care": [
      "Gently brush bouclé fabric with a soft lint brush.",
      "Avoid placing in direct tropical sunlight."
    ],
    "stock": "In Stock",
    "tags": [
      "scandinavian",
      "bouclé",
      "ottoman",
      "lounge"
    ]
  },
  {
    "id": 16,
    "sku": "LF-REC-005",
    "name": "Belmont Top-Grain Italian Leather Power Recliner",
    "category": "Recliners",
    "price": 48900,
    "mrp": 62000,
    "discountPercent": 21,
    "rating": 4.9,
    "reviewCount": 24,
    "images": [
      "https://images.unsplash.com/photo-1549497538-303791108f95?w=800&q=80",
      "https://images.unsplash.com/photo-1582533561751-ef6f6ab93a2e?w=800&q=80",
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80"
    ],
    "colors": [
      {
        "name": "Cognac Tan",
        "hex": "#9E4714"
      },
      {
        "name": "Espresso Brown",
        "hex": "#362B28"
      },
      {
        "name": "Onyx Black",
        "hex": "#1B1B1B"
      }
    ],
    "sizes": [
      "Single Luxury Recliner",
      "Wide Executive (+₹5,000)"
    ],
    "shortDescription": "Mastercrafted in genuine Italian top-grain leather with hidden touch controls, power headrest and USB-C port.",
    "longDescription": "The Belmont is our pinnacle luxury power recliner. Upholstered in buttery-soft full top-grain Italian leather that patinas beautifully with age. A hidden capacitive touch sensor smoothly reclines the backrest while extending a padded chaise footrest. Equipped with independent motorized headrest articulation and fast USB-C device charging.",
    "specs": {
      "dimensions": "39 × 39 × 41 in (99 × 99 × 104 cm)",
      "material": "Solid beechwood frame with powder-coated alloy steel",
      "upholstery": "100% Genuine Italian Top-Grain Leather",
      "weight": "52 kg",
      "seating": "1 person (up to 150 kg)",
      "warranty": "5 years on frame · 3 years on motor · 2 years on leather",
      "assembly": "White glove delivery — pre-assembled"
    },
    "delivery": {
      "timeline": "7–10 business days",
      "freeDeliveryZone": "Coimbatore city",
      "installation": "White-glove room-of-choice placement included"
    },
    "care": [
      "Condition with premium leather cream every 6 months.",
      "Wipe dust with a dry soft cloth."
    ],
    "stock": "In Stock",
    "tags": [
      "luxury",
      "leather",
      "power",
      "premium"
    ]
  },
  {
    "id": 17,
    "sku": "LF-REC-006",
    "name": "Haven Zero-Gravity Wall-Hugger Recliner",
    "category": "Recliners",
    "price": 27800,
    "mrp": 36000,
    "discountPercent": 23,
    "rating": 4.5,
    "reviewCount": 17,
    "images": [
      "https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=800&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&q=80",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80"
    ],
    "colors": [
      {
        "name": "Steel Grey",
        "hex": "#4682B4"
      },
      {
        "name": "Sand Beige",
        "hex": "#D2B48C"
      },
      {
        "name": "Dusty Rose",
        "hex": "#DCAE96"
      }
    ],
    "sizes": [
      "Single Wall-Hugger"
    ],
    "shortDescription": "Space-saving zero-gravity recliner requiring only 4 inches wall clearance with spine-decompressing tilt.",
    "longDescription": "Specially engineered for modern Coimbatore apartments where space is premium. The Haven moves forward on tracks as it reclines, allowing placement virtually flush against the wall. Its NASA-inspired zero-gravity elevation lifts knees slightly above the heart, taking pressure off the lower spine and improving circulation.",
    "specs": {
      "dimensions": "35 × 36 × 40 in (89 × 91 × 102 cm)",
      "material": "Engineered steel track mechanism & solid sal wood frame",
      "upholstery": "Stain-resistant performance microfiber",
      "weight": "41 kg",
      "seating": "1 person (up to 130 kg)",
      "warranty": "3 years on mechanism · 1 year on upholstery",
      "assembly": "Pre-assembled — attach backrest slide-in"
    },
    "delivery": {
      "timeline": "5–8 business days",
      "freeDeliveryZone": "Coimbatore city",
      "installation": "Free installation included"
    },
    "care": [
      "Blot water-based spills with paper towel immediately.",
      "Vacuum seams monthly."
    ],
    "stock": "In Stock",
    "tags": [
      "wall-hugger",
      "zero-gravity",
      "compact",
      "comfort"
    ]
  },
  {
    "id": 18,
    "sku": "LF-REC-007",
    "name": "Chesterfield Luxury Wingback Rocker Recliner",
    "category": "Recliners",
    "price": 32900,
    "mrp": 42500,
    "discountPercent": 23,
    "rating": 4.7,
    "reviewCount": 22,
    "images": [
      "https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=800&q=80",
      "https://images.unsplash.com/photo-1549497538-303791108f95?w=800&q=80",
      "https://images.unsplash.com/photo-1582533561751-ef6f6ab93a2e?w=800&q=80",
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80"
    ],
    "colors": [
      {
        "name": "Antique Oxblood",
        "hex": "#4A0E17"
      },
      {
        "name": "Saddle Brown",
        "hex": "#583A20"
      },
      {
        "name": "Deep Forest",
        "hex": "#1B3520"
      }
    ],
    "sizes": [
      "Single Wingback Recliner"
    ],
    "shortDescription": "Classic British wingback styling with deep diamond tufting, antique brass nailheads and concealed kickout footrest.",
    "longDescription": "A showstopping statement armchair that hides a full-length recline mechanism inside traditional wingback elegance. Hand-applied brass nailhead trim outlines the rolled arms and crest, while individual diamond tufting provides ergonomic lumbar contouring. Delivers gentle rocking motion when upright and relaxes smoothly into three reclining positions.",
    "specs": {
      "dimensions": "38 × 37 × 43 in (97 × 94 × 109 cm)",
      "material": "Solid teakwood turned front feet, seasoned hardwood frame",
      "upholstery": "Vintage distressed vegan leather",
      "weight": "44 kg",
      "seating": "1 person (up to 135 kg)",
      "warranty": "5 years on frame · 2 years on reclining gear",
      "assembly": "Pre-assembled — attach front legs"
    },
    "delivery": {
      "timeline": "6–9 business days",
      "freeDeliveryZone": "Coimbatore city",
      "installation": "Free delivery and positioning"
    },
    "care": [
      "Wipe with mild soap solution and dry cloth.",
      "Avoid harsh chemical abrasives."
    ],
    "stock": "In Stock",
    "tags": [
      "chesterfield",
      "wingback",
      "vintage",
      "rocker"
    ]
  },
  {
    "id": 19,
    "sku": "LF-SOF-004",
    "name": "Cambridge Chesterfield 3-Seater Velvet Sofa",
    "category": "Sofas",
    "price": 49990,
    "mrp": 64990,
    "discountPercent": 23,
    "rating": 4.8,
    "reviewCount": 29,
    "images": [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80",
      "https://images.unsplash.com/photo-1550254478-ead40cc54513?w=800&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80"
    ],
    "colors": [
      {
        "name": "Emerald Green",
        "hex": "#097969"
      },
      {
        "name": "Royal Sapphire",
        "hex": "#0F52BA"
      },
      {
        "name": "Champagne Gold",
        "hex": "#F7E7CE"
      }
    ],
    "sizes": [
      "3-Seater (88 in)",
      "2-Seater Loveseat (64 in) — ₹39,900"
    ],
    "shortDescription": "Aristocratic British deep-buttoned roll-arm sofa enveloped in luxurious jewel-toned performance velvet.",
    "longDescription": "The Cambridge is the quintessential centerpiece for refined living rooms. Every button is individually hand-tufted into high-density foam across the back and deep rolled arms. Supported by turned solid wood legs with antiqued brass castors. The stain-resistant velvet fabric combines opulent sheen with family-friendly durability.",
    "specs": {
      "dimensions": "88 × 37 × 31 in (224 × 94 × 79 cm)",
      "material": "Solid sal wood frame with turned hardwood legs and brass castors",
      "upholstery": "High-Martindale stain-resistant performance velvet",
      "weight": "68 kg",
      "seating": "3–4 persons",
      "warranty": "5 years on frame · 2 years on foam & velvet",
      "assembly": "Pre-assembled — screw on legs"
    },
    "delivery": {
      "timeline": "8–12 business days",
      "freeDeliveryZone": "Coimbatore city",
      "installation": "Free delivery & unboxing included"
    },
    "care": [
      "Vacuum with velvet brush in direction of pile.",
      "Gently steam to remove surface creases."
    ],
    "stock": "In Stock",
    "tags": [
      "chesterfield",
      "velvet",
      "luxury",
      "bestseller"
    ]
  },
  {
    "id": 20,
    "sku": "LF-SOF-005",
    "name": "Oslo 2-Seater Compact Apartment Loveseat",
    "category": "Sofas",
    "price": 22500,
    "mrp": 28900,
    "discountPercent": 22,
    "rating": 4.4,
    "reviewCount": 38,
    "images": [
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
      "https://images.unsplash.com/photo-1550254478-ead40cc54513?w=800&q=80",
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&q=80"
    ],
    "colors": [
      {
        "name": "Ash Grey",
        "hex": "#B2BEB5"
      },
      {
        "name": "Mustard Yellow",
        "hex": "#E1AD01"
      },
      {
        "name": "Soft Mint",
        "hex": "#98FF98"
      }
    ],
    "sizes": [
      "2-Seater (58 in)",
      "Single Armchair (34 in) — ₹14,500"
    ],
    "shortDescription": "Mid-century Scandinavian 2-seater with splayed oak legs and tailored silhouette, perfect for urban flats.",
    "longDescription": "Engineered specifically for apartments, compact living rooms, and office reception spaces. The Oslo loveseat delivers cheerful Nordic charm without crowding floor area. Features pocket-spring seat cushions topped with memory foam, a supportive gently curved back, and solid natural oak legs.",
    "specs": {
      "dimensions": "58 × 32 × 33 in (147 × 81 × 84 cm)",
      "material": "Solid rubberwood & engineered frame, solid oak legs",
      "upholstery": "Breathable woven cotton-polyester blend",
      "weight": "34 kg",
      "seating": "2 persons",
      "warranty": "3 years on frame · 1 year on fabric",
      "assembly": "Screw in 4 legs — ready in 3 minutes"
    },
    "delivery": {
      "timeline": "4–7 business days",
      "freeDeliveryZone": "Coimbatore city",
      "installation": "Free delivery included"
    },
    "care": [
      "Vacuum weekly to maintain crisp weave.",
      "Rotate reversible seat cushions monthly."
    ],
    "stock": "In Stock",
    "tags": [
      "scandinavian",
      "apartment",
      "loveseat",
      "compact"
    ]
  },
  {
    "id": 21,
    "sku": "LF-SOF-006",
    "name": "Florence Modular 5-Piece Sectional Sofa with Chaise",
    "category": "Sofas",
    "price": 74900,
    "mrp": 96000,
    "discountPercent": 22,
    "rating": 4.7,
    "reviewCount": 16,
    "images": [
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&q=80",
      "https://images.unsplash.com/photo-1558211583-d26f610c1eb1?w=800&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80"
    ],
    "colors": [
      {
        "name": "Cloud Grey",
        "hex": "#DCDCDC"
      },
      {
        "name": "Sandstone",
        "hex": "#D6C6B2"
      },
      {
        "name": "Ink Blue",
        "hex": "#1C39BB"
      }
    ],
    "sizes": [
      "5-Piece Modular Set (126 in)",
      "4-Piece Set (100 in) — ₹62,000"
    ],
    "shortDescription": "Infinite modular flexibility with deep feather-blend seats, reversible chaise and spill-proof chenille fabric.",
    "longDescription": "The Florence allows you to customize your seating configuration whenever you desire. The 5 independent modules (2 corner pieces, 2 armless centers, and 1 oversized ottoman) connect securely with heavy-duty alligator clips underneath. Extra-deep 40-inch seating filled with dual-layer HR foam and down-alternative microfibers gives that sink-in luxury feeling.",
    "specs": {
      "dimensions": "126 × 84 × 34 in (320 × 213 × 86 cm)",
      "material": "Solid kiln-dried pine wood frame & steel sinuous springs",
      "upholstery": "Spill-resistant textured chenille fabric",
      "weight": "125 kg (total modular set)",
      "seating": "6–7 persons",
      "warranty": "5 years on frame · 2 years on cushioning",
      "assembly": "Modular clip assembly — included with delivery"
    },
    "delivery": {
      "timeline": "10–14 business days",
      "freeDeliveryZone": "Coimbatore city",
      "installation": "Free modular assembly & layout styling"
    },
    "care": [
      "Removable cushion covers are machine washable on cold gentle cycle.",
      "Fluff feather-blend back pillows weekly."
    ],
    "stock": "In Stock",
    "tags": [
      "modular",
      "sectional",
      "l-shape",
      "luxury"
    ]
  },
  {
    "id": 22,
    "sku": "LF-SOF-007",
    "name": "Windsor Curved Bouclé Luxury Lounge Sofa",
    "category": "Sofas",
    "price": 62000,
    "mrp": 79000,
    "discountPercent": 22,
    "rating": 4.9,
    "reviewCount": 12,
    "images": [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80"
    ],
    "colors": [
      {
        "name": "Warm Ivory",
        "hex": "#FDFBF7"
      },
      {
        "name": "Soft Camel",
        "hex": "#C19A6B"
      },
      {
        "name": "Pearl Grey",
        "hex": "#EAE6E1"
      }
    ],
    "sizes": [
      "3-Seater Curved (92 in)",
      "2-Seater Petite (70 in) — ₹48,000"
    ],
    "shortDescription": "Sculptural organic curved silhouette draped in plush teddy bouclé fabric for high-end designer spaces.",
    "longDescription": "An architectural masterwork that softens any modern living area with its gentle arc and seamless curvature. Upholstered in heavy-weight curly bouclé that feels sensational to the touch. Reinforced with a multi-density contour molded foam core over seasoned sal hardwood, creating a comfortable sitting posture with striking contemporary presence.",
    "specs": {
      "dimensions": "92 × 42 × 31 in (234 × 107 × 79 cm)",
      "material": "Internal reinforced kiln-dried hardwood structure with webbed suspension",
      "upholstery": "High-grade textured teddy bouclé fabric",
      "weight": "72 kg",
      "seating": "3–4 persons",
      "warranty": "5 years on structural frame · 2 years on fabric",
      "assembly": "Fully assembled 1-piece unit"
    },
    "delivery": {
      "timeline": "8–12 business days",
      "freeDeliveryZone": "Coimbatore city",
      "installation": "Free white-glove placement"
    },
    "care": [
      "Use soft bristle brush or handheld vacuum.",
      "Professional dry cleaning recommended for stubborn stains."
    ],
    "stock": "In Stock",
    "tags": [
      "bouclé",
      "curved",
      "designer",
      "luxury"
    ]
  },
  {
    "id": 23,
    "sku": "LF-BED-003",
    "name": "Grandeur Hydraulic Storage King Bed with Tufted Headboard",
    "category": "Beds",
    "price": 54900,
    "mrp": 69900,
    "discountPercent": 21,
    "rating": 4.8,
    "reviewCount": 27,
    "images": [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80"
    ],
    "colors": [
      {
        "name": "Charcoal Slate",
        "hex": "#3B3C36"
      },
      {
        "name": "Warm Oatmeal",
        "hex": "#D8C7B5"
      },
      {
        "name": "Royal Navy",
        "hex": "#002366"
      }
    ],
    "sizes": [
      "King Size (78 × 72 in)",
      "Queen Size (78 × 60 in) — ₹48,500"
    ],
    "shortDescription": "Gas-lift German hydraulic storage bed with 850L capacity and plush diamond-quilted wingback headboard.",
    "longDescription": "The Grandeur provides expansive concealed bedroom organization with its heavy-duty dual hydraulic lift struts that effortlessly raise your mattress with one hand. Features a fully enclosed dust-proof laminated storage box and a 54-inch tall cushioned wingback headboard designed for comfortable upright bedtime reading.",
    "specs": {
      "dimensions": "84 × 78 × 54 in (213 × 198 × 137 cm)",
      "material": "BWR marine grade plywood, solid hardwood internal reinforcement",
      "upholstery": "Stain-resistant linen-textured woven upholstery",
      "weight": "115 kg",
      "seating": "2–3 persons (supports up to 450 kg distributed)",
      "warranty": "5 years on hydraulic lift & frame · 2 years on fabric",
      "assembly": "Free professional assembly in your bedroom (45 min)"
    },
    "delivery": {
      "timeline": "7–10 business days",
      "freeDeliveryZone": "Coimbatore city",
      "installation": "Free assembly and mattress fit verification"
    },
    "care": [
      "Lubricate hydraulic pistons once every 18 months.",
      "Vacuum upholstered headboard monthly."
    ],
    "stock": "In Stock",
    "tags": [
      "hydraulic",
      "storage",
      "king-bed",
      "bestseller"
    ]
  },
  {
    "id": 24,
    "sku": "LF-BED-004",
    "name": "Kyoto Japanese Low-Platform Queen Bed with Floating Tables",
    "category": "Beds",
    "price": 38500,
    "mrp": 49000,
    "discountPercent": 21,
    "rating": 4.6,
    "reviewCount": 19,
    "images": [
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800&q=80"
    ],
    "colors": [
      {
        "name": "Natural Sheesham",
        "hex": "#7D4128"
      },
      {
        "name": "Teak Finish",
        "hex": "#B8860B"
      },
      {
        "name": "Dark Walnut",
        "hex": "#3F2A1D"
      }
    ],
    "sizes": [
      "Queen Size (78 × 60 in)",
      "King Size (78 × 72 in) — ₹44,000"
    ],
    "shortDescription": "Zen-inspired minimalist low-profile bed in solid sheesham wood with cantilevered floating nightstands.",
    "longDescription": "Bring calming Japanese aesthetic to your sanctuary. Crafted from seasoned solid Indian Sheesham wood, the Kyoto features a low platform height that makes bedroom ceilings feel taller and rooms more spacious. Includes two detachable floating side ledges for nighttime books and lamps, and solid wooden slats for ideal mattress airflow.",
    "specs": {
      "dimensions": "82 × 72 × 32 in (including perimeter ledge)",
      "material": "100% Solid Seasoned Sheesham Wood",
      "upholstery": "Solid Wood finish (No fabric)",
      "weight": "82 kg",
      "seating": "2 persons",
      "warranty": "5 years against termite & wood warping",
      "assembly": "Interlocking joint assembly with bolts (included)"
    },
    "delivery": {
      "timeline": "8–12 business days",
      "freeDeliveryZone": "Coimbatore city",
      "installation": "Free assembly included"
    },
    "care": [
      "Clean wood surface with a dry lint-free cloth.",
      "Apply teak oil or beeswax every 6 months to preserve sheen."
    ],
    "stock": "In Stock",
    "tags": [
      "solid-wood",
      "sheesham",
      "platform",
      "minimalist"
    ]
  },
  {
    "id": 25,
    "sku": "LF-BED-005",
    "name": "Valencia Solid Teak Wood Four-Poster Bed",
    "category": "Beds",
    "price": 68000,
    "mrp": 86000,
    "discountPercent": 21,
    "rating": 4.9,
    "reviewCount": 15,
    "images": [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80"
    ],
    "colors": [
      {
        "name": "Heritage Teak",
        "hex": "#966F33"
      },
      {
        "name": "Antique Brown",
        "hex": "#4A2511"
      },
      {
        "name": "Honey Gloss",
        "hex": "#D4A359"
      }
    ],
    "sizes": [
      "King Size (78 × 72 in)",
      "Queen Size (78 × 60 in) — ₹59,000"
    ],
    "shortDescription": "Regal four-poster canopy bed handcrafted from genuine solid Nilambur teakwood with hand-turned pillars.",
    "longDescription": "An heirloom bedstead built to be handed down through generations. Crafted by master wood artisans from solid seasoned teak wood known for extraordinary density and natural insect resistance. The four hand-turned pillars connect at the top with a sturdy canopy frame suitable for light draping drapes or open architectural splendor.",
    "specs": {
      "dimensions": "86 × 76 × 84 in (218 × 193 × 213 cm)",
      "material": "100% Solid Seasoned Teak Wood (Nilambur origin)",
      "upholstery": "Solid Wood Craft",
      "weight": "98 kg",
      "seating": "2 persons (supports up to 500 kg)",
      "warranty": "10 years on wood & structural integrity",
      "assembly": "Professional multi-point bolt assembly included"
    },
    "delivery": {
      "timeline": "12–16 business days",
      "freeDeliveryZone": "Coimbatore city",
      "installation": "Complimentary master carpenter setup"
    },
    "care": [
      "Polish with wood wax every 4–6 months.",
      "Protect from prolonged exposure to wet mops."
    ],
    "stock": "In Stock",
    "tags": [
      "teak",
      "canopy",
      "four-poster",
      "heirloom"
    ]
  },
  {
    "id": 26,
    "sku": "LF-BED-006",
    "name": "Aero Queen Platform Bed with Integrated LED Headboard",
    "category": "Beds",
    "price": 32900,
    "mrp": 42000,
    "discountPercent": 22,
    "rating": 4.4,
    "reviewCount": 23,
    "images": [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800&q=80"
    ],
    "colors": [
      {
        "name": "Smoky Oak & Matte Charcoal",
        "hex": "#4A4A4A"
      },
      {
        "name": "Frost White & Walnut",
        "hex": "#F5F5F5"
      }
    ],
    "sizes": [
      "Queen Size (78 × 60 in)",
      "King Size (78 × 72 in) — ₹37,500"
    ],
    "shortDescription": "Modern cantilevered bed featuring warm-white ambient LED backlighting, dual USB charging, and padded headrest.",
    "longDescription": "The Aero infuses contemporary boutique hotel atmosphere into your home. The headboard integrates a warm 3000K indirect LED illumination channel with a touch dimmer switch and bilateral fast-charging ports for phones and smartwatches. Recessed platform base gives a dramatic floating effect while preventing accidental toe stubs.",
    "specs": {
      "dimensions": "82 × 66 × 44 in (208 × 168 × 112 cm)",
      "material": "Engineered wood with European thermal-fused laminate & steel sub-rails",
      "upholstery": "Cushioned leatherette headrest insert",
      "weight": "76 kg",
      "seating": "2 persons",
      "warranty": "3 years on frame · 1 year on LED electricals",
      "assembly": "Assembly included on delivery (30 min)"
    },
    "delivery": {
      "timeline": "5–8 business days",
      "freeDeliveryZone": "Coimbatore city",
      "installation": "Free delivery and electrical connection check"
    },
    "care": [
      "Wipe laminate surfaces with slightly damp cloth.",
      "Unplug power cord during severe electrical thunderstorms."
    ],
    "stock": "In Stock",
    "tags": [
      "modern",
      "led",
      "floating",
      "platform"
    ]
  },
  {
    "id": 27,
    "sku": "LF-BED-007",
    "name": "Solace Orthopedic Velvet Upholstered King Bed",
    "category": "Beds",
    "price": 46500,
    "mrp": 58000,
    "discountPercent": 20,
    "rating": 4.7,
    "reviewCount": 18,
    "images": [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&q=80"
    ],
    "colors": [
      {
        "name": "Dusty Rose",
        "hex": "#BA7A7A"
      },
      {
        "name": "Midnight Navy",
        "hex": "#191970"
      },
      {
        "name": "Dove Grey",
        "hex": "#8B8C89"
      }
    ],
    "sizes": [
      "King Size (78 × 72 in)",
      "Queen Size (78 × 60 in) — ₹41,000"
    ],
    "shortDescription": "Tall channel-tufted velvet bed with flexible beech sprung slats for advanced orthopedic spinal support.",
    "longDescription": "Designed for restorative sleep. The Solace features 28 curved flexible beechwood posture slats mounted on dual rubber shock absorbers that adapt actively to your body weight, pressure points, and sleep movements. Surrounded by a 50-inch vertical fluted headboard wrapped in velvety plush upholstery.",
    "specs": {
      "dimensions": "84 × 77 × 50 in (213 × 196 × 127 cm)",
      "material": "Hardwood perimeter, steam-bent beech sprung posture slats",
      "upholstery": "Stain-resistant crushed velvet fabric",
      "weight": "84 kg",
      "seating": "2 persons",
      "warranty": "5 years on slats & frame · 2 years on fabric",
      "assembly": "Professional assembly included"
    },
    "delivery": {
      "timeline": "7–10 business days",
      "freeDeliveryZone": "Coimbatore city",
      "installation": "Free delivery and setup"
    },
    "care": [
      "Brush velvet with soft cloth periodically.",
      "Check slat retention caps once a year."
    ],
    "stock": "In Stock",
    "tags": [
      "orthopedic",
      "velvet",
      "slats",
      "king-bed"
    ]
  },
  {
    "id": 28,
    "sku": "LF-DIN-003",
    "name": "Monarch 8-Seater Solid Teak Wood Dining Set with Carved Chairs",
    "category": "Dining",
    "price": 78500,
    "mrp": 99000,
    "discountPercent": 21,
    "rating": 4.9,
    "reviewCount": 21,
    "images": [
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80",
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=800&q=80",
      "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=800&q=80",
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80"
    ],
    "colors": [
      {
        "name": "Golden Teak",
        "hex": "#B8860B"
      },
      {
        "name": "Dark Walnut",
        "hex": "#4A3728"
      },
      {
        "name": "Rosewood Polish",
        "hex": "#65000B"
      }
    ],
    "sizes": [
      "8-Seater (Table + 8 Chairs)",
      "6-Seater Variant (₹62,000)"
    ],
    "shortDescription": "Grand 8-seater dining table sculpted from 100% seasoned solid teak wood with handcrafted chair backs.",
    "longDescription": "The pinnacle of traditional Indian hospitality. This imposing 8-seater dining ensemble is constructed entirely from high-grade seasoned teakwood with thick 4-inch legs and subtle hand-carved edge profiles. Includes 8 matching high-back chairs with cushioned jacquard fabric seats designed for lengthy multi-course feasts.",
    "specs": {
      "dimensions": "Table: 96 × 42 × 30 in (244 × 107 × 76 cm) · Chairs: 19 × 20 × 40 in",
      "material": "100% Seasoned Nilambur Solid Teak Wood",
      "upholstery": "High-density foam with heritage jacquard weave seats",
      "weight": "140 kg (table + 8 chairs)",
      "seating": "8 persons comfortably",
      "warranty": "10 years against wood borers & structural defects",
      "assembly": "Carpenter assembly of table legs included"
    },
    "delivery": {
      "timeline": "10–15 business days",
      "freeDeliveryZone": "Coimbatore city",
      "installation": "Free delivery and dining placement included"
    },
    "care": [
      "Always use heat pads under sizzling hot cookware.",
      "Wipe spills promptly with a dry cotton cloth."
    ],
    "stock": "In Stock",
    "tags": [
      "teak",
      "8-seater",
      "grand",
      "solid-wood",
      "bestseller"
    ]
  },
  {
    "id": 29,
    "sku": "LF-DIN-004",
    "name": "Artisan Round 4-Seater Italian Marble Dining Set with Brass Accents",
    "category": "Dining",
    "price": 52000,
    "mrp": 66000,
    "discountPercent": 21,
    "rating": 4.7,
    "reviewCount": 16,
    "images": [
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=800&q=80",
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80",
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80",
      "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=800&q=80"
    ],
    "colors": [
      {
        "name": "White Marble & Brass",
        "hex": "#F0E68C"
      },
      {
        "name": "Black Marquina & Gold",
        "hex": "#2C3539"
      }
    ],
    "sizes": [
      "48 in Round (4 Chairs)",
      "54 in Round (6 Chairs) — ₹64,000"
    ],
    "shortDescription": "Polished 48-inch round Carrara composite marble tabletop with electroplated champagne gold pedestal base.",
    "longDescription": "Foster intimate dinner conversation with the Artisan round marble dining set. The smooth circular top encourages eye contact among all guests and eliminates sharp corners in compact dining spaces. Supported by a heavy trumpet pedestal in anti-corrosive brass finish. Comes with 4 ergonomically curved dining chairs in wipe-clean faux leather.",
    "specs": {
      "dimensions": "Table: 48 in dia × 30 in H (122 × 76 cm) · Chairs: 20 × 21 × 33 in",
      "material": "18mm polished composite marble slab, electroplated steel trumpet base",
      "upholstery": "Chair seats & backs: Premium PU leatherette",
      "weight": "88 kg (set)",
      "seating": "4 persons",
      "warranty": "3 years on structure and base · 1 year on marble finish",
      "assembly": "Assembly included (heavy marble placement)"
    },
    "delivery": {
      "timeline": "7–12 business days",
      "freeDeliveryZone": "Coimbatore city",
      "installation": "Free installation and leveling included"
    },
    "care": [
      "Clean marble surface with pH-neutral stone cleaner.",
      "Avoid acidic substances (lemon juice, vinegar) sitting on top."
    ],
    "stock": "In Stock",
    "tags": [
      "marble",
      "round-table",
      "brass",
      "luxury"
    ]
  },
  {
    "id": 30,
    "sku": "LF-DIN-005",
    "name": "Oslo Scandinavian 6-Seater Extendable Dining Table Set",
    "category": "Dining",
    "price": 39900,
    "mrp": 51000,
    "discountPercent": 22,
    "rating": 4.5,
    "reviewCount": 25,
    "images": [
      "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=800&q=80",
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80",
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80",
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=800&q=80"
    ],
    "colors": [
      {
        "name": "Natural Oak",
        "hex": "#D2B48C"
      },
      {
        "name": "Warm Honey",
        "hex": "#C68E17"
      },
      {
        "name": "Walnut Tint",
        "hex": "#5C4033"
      }
    ],
    "sizes": [
      "6-Seater (Extends 54 to 72 in)",
      "8-Seater (Extends 64 to 86 in) — ₹48,000"
    ],
    "shortDescription": "Clever butterfly leaf mechanism expands effortlessly from 4-seater to 6-seater when guests arrive.",
    "longDescription": "The perfect dining solution for modern entertaining. The hidden internal butterfly extension smoothly unfolds in under 30 seconds without requiring external storage panels. Built with sturdy solid rubberwood framing and natural white oak veneer top, paired with 6 curved Nordic spindle-back dining chairs with padded cushions.",
    "specs": {
      "dimensions": "Table: 54–72 × 36 × 30 in · Chairs: 18 × 19 × 34 in",
      "material": "Solid rubberwood base with European oak veneer top",
      "upholstery": "Breathable cotton-polyester blend cushions",
      "weight": "68 kg (set)",
      "seating": "4 to 6 persons",
      "warranty": "3 years on extension mechanism and frame",
      "assembly": "Assembly included on delivery"
    },
    "delivery": {
      "timeline": "6–9 business days",
      "freeDeliveryZone": "Coimbatore city",
      "installation": "Free assembly and extension mechanism demonstration"
    },
    "care": [
      "Keep extension tracks clean of breadcrumbs and dust.",
      "Wipe with a damp cloth."
    ],
    "stock": "In Stock",
    "tags": [
      "extendable",
      "scandinavian",
      "butterfly-leaf",
      "space-saving"
    ]
  },
  {
    "id": 31,
    "sku": "LF-DIN-006",
    "name": "Tuscany 6-Seater Farmhouse Dining Set with Upholstered Bench",
    "category": "Dining",
    "price": 43500,
    "mrp": 55000,
    "discountPercent": 21,
    "rating": 4.6,
    "reviewCount": 19,
    "images": [
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800&q=80",
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80",
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80",
      "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=800&q=80"
    ],
    "colors": [
      {
        "name": "Rustic Sheesham",
        "hex": "#6E473B"
      },
      {
        "name": "Provincial Teak",
        "hex": "#8C6239"
      }
    ],
    "sizes": [
      "Table + 4 Chairs + 1 Bench (6-Seater)"
    ],
    "shortDescription": "Rustic farmhouse trestle table with 4 cross-back chairs and a generous upholstered dining bench.",
    "longDescription": "Casual, welcoming, and built for bustling family homes. The Tuscany dining table features an architectural trestle base with exposed mortise-and-tenon details. The included upholstered bench easily seats 2 to 3 kids or adults, and tucks completely underneath the table when not in use to open up room walkway space.",
    "specs": {
      "dimensions": "Table: 70 × 36 × 30 in · Bench: 54 × 15 × 18 in · Chairs: 18 × 19 × 38 in",
      "material": "100% Solid Indian Sheesham Wood with matte protective sealer",
      "upholstery": "Bench & chair cushions: Washable oatmeal fabric",
      "weight": "86 kg (set)",
      "seating": "6 persons",
      "warranty": "5 years on solid wood frame",
      "assembly": "Assembly included with delivery"
    },
    "delivery": {
      "timeline": "8–12 business days",
      "freeDeliveryZone": "Coimbatore city",
      "installation": "Free doorstep setup"
    },
    "care": [
      "Clean wood with soft dry cloth.",
      "Removable bench cushion cover can be hand-washed."
    ],
    "stock": "In Stock",
    "tags": [
      "farmhouse",
      "bench",
      "sheesham",
      "family"
    ]
  },
  {
    "id": 32,
    "sku": "LF-DIN-007",
    "name": "Compact Bistro 2-Seater Balcony Dining Set",
    "category": "Dining",
    "price": 14990,
    "mrp": 19500,
    "discountPercent": 23,
    "rating": 4.3,
    "reviewCount": 33,
    "images": [
      "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?w=800&q=80",
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80",
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80",
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=800&q=80"
    ],
    "colors": [
      {
        "name": "Natural Teak & Matte Black",
        "hex": "#1C1C1C"
      },
      {
        "name": "Honey Teak & Forest Green",
        "hex": "#2D4B39"
      }
    ],
    "sizes": [
      "Bistro Table + 2 Foldable Chairs"
    ],
    "shortDescription": "Space-conscious 2-seater cafe table with foldable ergonomic chairs, suited for apartments and sit-outs.",
    "longDescription": "Created for Coimbatore morning coffees and evening breezes. Features weather-resistant solid teakwood slats treated with water-repellent protective oil on a sturdy powder-coated anti-rust iron framework. Both chairs fold flat in seconds for effortless balcony storage when raining.",
    "specs": {
      "dimensions": "Table: 26 × 26 × 29 in · Chairs: 16 × 18 × 33 in",
      "material": "Powder-coated rustproof iron frame with solid teakwood slats",
      "upholstery": "Solid Wood Slats (No fabric)",
      "weight": "18 kg (set)",
      "seating": "2 persons",
      "warranty": "2 years on iron frame & teak slats",
      "assembly": "Pre-assembled — unfold and enjoy"
    },
    "delivery": {
      "timeline": "3–5 business days",
      "freeDeliveryZone": "Coimbatore city",
      "installation": "No assembly required"
    },
    "care": [
      "Reapply teak oil once a year if kept outdoors.",
      "Wipe metal framework after heavy monsoon showers."
    ],
    "stock": "In Stock",
    "tags": [
      "balcony",
      "bistro",
      "compact",
      "foldable",
      "teak"
    ]
  },
  {
    "id": 33,
    "sku": "LF-WAR-002",
    "name": "Versailles 4-Door Sliding Wardrobe with Lacquered Glass",
    "category": "Wardrobes",
    "price": 62000,
    "mrp": 78000,
    "discountPercent": 21,
    "rating": 4.7,
    "reviewCount": 14,
    "images": [
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80",
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&q=80"
    ],
    "colors": [
      {
        "name": "Champagne & Bronze Glass",
        "hex": "#B39F7A"
      },
      {
        "name": "Frost White & Slate Glass",
        "hex": "#EAEAEA"
      }
    ],
    "sizes": [
      "8 × 7 ft (4-Door Slider)",
      "6 × 7 ft (3-Door Slider) — ₹49,000"
    ],
    "shortDescription": "German soft-close floor-to-ceiling sliding wardrobe with bronze lacquered glass panels and full-height mirrors.",
    "longDescription": "Maximize bedroom floor space with effortless sliding doors that require zero swing clearance. Features whisper-quiet heavy-duty Hafele rollers with hydraulic soft-closing dampers. Interior boasts 8 wide shelving bays, 3 chrome hanging rails for sarees and suits, 2 digital locker compartments, and automatic motion-sensor LED strip lights.",
    "specs": {
      "dimensions": "96 × 24 × 84 in (244 × 61 × 213 cm)",
      "material": "18mm BWR marine plywood frame with lacquered glass & anodized aluminum trims",
      "upholstery": "N/A",
      "weight": "160 kg",
      "seating": "N/A",
      "warranty": "5 years on sliding track & frame",
      "assembly": "Master carpenter installation included (3 hours)"
    },
    "delivery": {
      "timeline": "10–14 business days",
      "freeDeliveryZone": "Coimbatore city",
      "installation": "Free full bedroom wardrobe assembly included"
    },
    "care": [
      "Clean glass panels with glass cleaner.",
      "Keep bottom track free of debris with vacuum nozzle."
    ],
    "stock": "In Stock",
    "tags": [
      "sliding",
      "mirrored",
      "lacquered-glass",
      "storage"
    ]
  },
  {
    "id": 34,
    "sku": "LF-WAR-003",
    "name": "Heritage 2-Door Solid Sheesham Armoire Wardrobe",
    "category": "Wardrobes",
    "price": 38900,
    "mrp": 49000,
    "discountPercent": 21,
    "rating": 4.8,
    "reviewCount": 19,
    "images": [
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=800&q=80",
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&q=80",
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80",
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&q=80"
    ],
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#A86538"
      },
      {
        "name": "Dark Walnut",
        "hex": "#442D1C"
      }
    ],
    "sizes": [
      "2-Door Standard (42 in width)",
      "2-Door Tall with Top Cabinet (42 in × 84 in) — ₹45,000"
    ],
    "shortDescription": "Traditional solid wood armoire with handcrafted louvre accents, solid brass hardware, and dual bottom drawers.",
    "longDescription": "Crafted from solid seasoned Sheesham wood displaying rich natural grain striations. Features 2 sturdy hinged doors equipped with authentic antiqued brass handles and lock-and-key security. Inside, find an overhead hat shelf, a solid brass garment hanging rod, and two deep bottom drawers for linens and woolens.",
    "specs": {
      "dimensions": "42 × 22 × 76 in (107 × 56 × 193 cm)",
      "material": "100% Solid Indian Sheesham Wood with solid brass hardware",
      "upholstery": "N/A",
      "weight": "85 kg",
      "seating": "N/A",
      "warranty": "7 years against termite and structural failure",
      "assembly": "Delivered pre-assembled — leveling included"
    },
    "delivery": {
      "timeline": "8–12 business days",
      "freeDeliveryZone": "Coimbatore city",
      "installation": "Free positioning and leveling included"
    },
    "care": [
      "Polish with wood wax every 6 months.",
      "Place camphor or cedar balls on shelves for natural freshness."
    ],
    "stock": "In Stock",
    "tags": [
      "armoire",
      "sheesham",
      "solid-wood",
      "classic"
    ]
  },
  {
    "id": 35,
    "sku": "LF-WAR-004",
    "name": "Loft 3-Door Modular Wardrobe with Internal Chest Drawers",
    "category": "Wardrobes",
    "price": 29500,
    "mrp": 38000,
    "discountPercent": 22,
    "rating": 4.4,
    "reviewCount": 22,
    "images": [
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80",
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&q=80"
    ],
    "colors": [
      {
        "name": "Wenge & Natural Oak",
        "hex": "#3B2F2F"
      },
      {
        "name": "All White Matte",
        "hex": "#FFFFFF"
      }
    ],
    "sizes": [
      "3-Door Standard (54 × 78 in)",
      "3-Door with Loft Unit — ₹36,000"
    ],
    "shortDescription": "Contemporary 3-door wardrobe with 3 built-in organizer drawers, full-length mirror and soft-close European hinges.",
    "longDescription": "An affordable, high-utility storage powerhouse designed for modern bedrooms. The center door features an edge-to-edge bevelled dressing mirror. Inside, the 3-section layout divides seamlessly between his-and-hers hanging zones, five adjustable cubbies, and three smooth-sliding internal drawers with key locks for jewelry and valuables.",
    "specs": {
      "dimensions": "54 × 22 × 78 in (137 × 56 × 198 cm)",
      "material": "Engineered wood with scratch-proof melamine laminate and PVC edge banding",
      "upholstery": "N/A",
      "weight": "92 kg",
      "seating": "N/A",
      "warranty": "3 years on structure and hinges",
      "assembly": "Assembly included on delivery (60 min)"
    },
    "delivery": {
      "timeline": "5–8 business days",
      "freeDeliveryZone": "Coimbatore city",
      "installation": "Free assembly and door alignment"
    },
    "care": [
      "Wipe clean with a damp cloth and mild cleaner.",
      "Avoid loading more than 15 kg per shelf."
    ],
    "stock": "In Stock",
    "tags": [
      "modular",
      "mirror",
      "drawers",
      "value-pick"
    ]
  },
  {
    "id": 36,
    "sku": "LF-WAR-005",
    "name": "Celeste Walk-In Style Open Wardrobe System with LED Rails",
    "category": "Wardrobes",
    "price": 45000,
    "mrp": 57000,
    "discountPercent": 21,
    "rating": 4.6,
    "reviewCount": 11,
    "images": [
      "https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?w=800&q=80",
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&q=80",
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80",
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&q=80"
    ],
    "colors": [
      {
        "name": "Gunmetal & Smoked Oak",
        "hex": "#2F353B"
      },
      {
        "name": "Gold Champagne & Marble Finish",
        "hex": "#D4AF37"
      }
    ],
    "sizes": [
      "6 ft Modular Unit",
      "8 ft Extended Master Suite Unit — ₹58,000"
    ],
    "shortDescription": "Boutique-hotel style open modular closet with illuminated hanging rods, angled shoe shelves and drawer islands.",
    "longDescription": "Turn your dressing room into a high-fashion boutique. The Celeste modular system mounts cleanly to walls with architectural anodized aluminum uprights. Every hanging rod is equipped with integrated diffuse warm LED lighting that casts an elegant spotlight on your garments. Includes slanted shoe racks with brass retaining lip.",
    "specs": {
      "dimensions": "72 × 20 × 84 in (183 × 51 × 213 cm)",
      "material": "Anodized aluminum structural framework with textured engineered wood shelves",
      "upholstery": "N/A",
      "weight": "75 kg",
      "seating": "N/A",
      "warranty": "5 years on aluminum frames · 2 years on LED fittings",
      "assembly": "Wall-anchored assembly included"
    },
    "delivery": {
      "timeline": "8–12 business days",
      "freeDeliveryZone": "Coimbatore city",
      "installation": "Free precision wall anchoring and setup"
    },
    "care": [
      "Dust shelves with microfiber duster.",
      "Avoid hanging damp garments directly on rails."
    ],
    "stock": "In Stock",
    "tags": [
      "walk-in",
      "open-wardrobe",
      "led",
      "luxury"
    ]
  },
  {
    "id": 37,
    "sku": "LF-WAR-006",
    "name": "Studio Single-Door Mirrored Corner Wardrobe",
    "category": "Wardrobes",
    "price": 18500,
    "mrp": 24000,
    "discountPercent": 23,
    "rating": 4.3,
    "reviewCount": 17,
    "images": [
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80",
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&q=80"
    ],
    "colors": [
      {
        "name": "Urban Grey",
        "hex": "#63666A"
      },
      {
        "name": "Classic Walnut",
        "hex": "#533E2D"
      },
      {
        "name": "Matte Ivory",
        "hex": "#FDFBF7"
      }
    ],
    "sizes": [
      "Corner Unit (36 × 36 × 78 in)"
    ],
    "shortDescription": "Space-optimizing 90-degree corner wardrobe transforming awkward bedroom corners into functional vertical storage.",
    "longDescription": "Corners are often wasted square footage. The Studio Corner Wardrobe turns that dead angle into a cavernous closet featuring wraparound hanging racks and four triangular corner shelves. The front door is surfaced with a distortion-free dressing mirror that bounces natural light across the bedroom.",
    "specs": {
      "dimensions": "36 × 36 × 78 in (91 × 91 × 198 cm)",
      "material": "Engineered wood with scratch-resistant melamine and 4mm silvered mirror",
      "upholstery": "N/A",
      "weight": "62 kg",
      "seating": "N/A",
      "warranty": "2 years on structure and hinges",
      "assembly": "Assembly included on delivery"
    },
    "delivery": {
      "timeline": "4–7 business days",
      "freeDeliveryZone": "Coimbatore city",
      "installation": "Free assembly and wall safety strapping"
    },
    "care": [
      "Clean mirror with microfiber cloth and glass spray.",
      "Check wall anchors periodically."
    ],
    "stock": "In Stock",
    "tags": [
      "corner",
      "compact",
      "mirror",
      "space-saving"
    ]
  },
  {
    "id": 38,
    "sku": "LF-TVU-002",
    "name": "Aura Floating Entertainment Center with Fluted Panels & LED",
    "category": "TV Units",
    "price": 22500,
    "mrp": 29000,
    "discountPercent": 22,
    "rating": 4.7,
    "reviewCount": 26,
    "images": [
      "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=800&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80"
    ],
    "colors": [
      {
        "name": "Charcoal Slate & Brass",
        "hex": "#2F353B"
      },
      {
        "name": "Warm Beige & Natural Wood",
        "hex": "#E6D7C3"
      }
    ],
    "sizes": [
      "60 in (Up to 65″ TV)",
      "72 in (Up to 75″ TV) — ₹26,500"
    ],
    "shortDescription": "Wall-mounted floating media console featuring CNC-fluted drop-down cabinet doors and concealed cable pathways.",
    "longDescription": "Elevate your television wall with clean floating architecture that keeps floors clear for robot vacuum cleaners. The Aura features hand-milled fluted acoustic panel fronts that allow remote control IR signals to pass through while keeping media boxes and game consoles hidden. Lower perimeter glow with warm LED strip lights.",
    "specs": {
      "dimensions": "60 × 14 × 12 in (152 × 36 × 30 cm)",
      "material": "High-density moisture-resistant MDF with thermal foil finish & metal brackets",
      "upholstery": "N/A",
      "weight": "28 kg",
      "seating": "N/A",
      "warranty": "3 years on wall brackets & wood structure",
      "assembly": "Professional wall-mounting included (drilling + leveling)"
    },
    "delivery": {
      "timeline": "5–8 business days",
      "freeDeliveryZone": "Coimbatore city",
      "installation": "Free wall-mount drilling and installation included"
    },
    "care": [
      "Dust fluted grooves with soft paint brush.",
      "Ensure cables do not pull tightly on wall sockets."
    ],
    "stock": "In Stock",
    "tags": [
      "floating",
      "fluted",
      "wall-mount",
      "led",
      "modern"
    ]
  },
  {
    "id": 39,
    "sku": "LF-TVU-003",
    "name": "Grand Central Solid Sheesham Floor-Standing TV Console",
    "category": "TV Units",
    "price": 31000,
    "mrp": 39500,
    "discountPercent": 22,
    "rating": 4.8,
    "reviewCount": 18,
    "images": [
      "https://images.unsplash.com/photo-1618221381711-42ca8ab6e908?w=800&q=80",
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=800&q=80",
      "https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=800&q=80"
    ],
    "colors": [
      {
        "name": "Natural Teak Glow",
        "hex": "#B57D3E"
      },
      {
        "name": "Rich Walnut",
        "hex": "#4A3525"
      }
    ],
    "sizes": [
      "70 in Floor Console (Holds up to 75″ TV)",
      "55 in Console — ₹25,500"
    ],
    "shortDescription": "Sturdy 70-inch solid Sheesham wood credenza with 4 deep storage bays, brass accents, and cable cutouts.",
    "longDescription": "Crafted from solid Indian Rosewood (Sheesham), the Grand Central offers substantial heft and heirloom presence. Can easily support even the largest 75-inch TVs on its thick 1.25-inch solid wood top. Features two soft-close central drawers and two side cabinet doors fitted with brass wire-mesh inserts for ventilation of AV receivers and gaming consoles.",
    "specs": {
      "dimensions": "70 × 18 × 22 in (178 × 46 × 56 cm)",
      "material": "100% Solid Indian Sheesham Wood with protective satin lacquer",
      "upholstery": "N/A",
      "weight": "52 kg",
      "seating": "N/A (Supports up to 100 kg on top surface)",
      "warranty": "5 years against termite & structural failure",
      "assembly": "Pre-assembled — ready out of the box"
    },
    "delivery": {
      "timeline": "7–10 business days",
      "freeDeliveryZone": "Coimbatore city",
      "installation": "Free positioning and leveling included"
    },
    "care": [
      "Wipe with dry microfiber cloth.",
      "Use coasters under heavy decorative vases."
    ],
    "stock": "In Stock",
    "tags": [
      "sheesham",
      "solid-wood",
      "floor-standing",
      "bestseller"
    ]
  },
  {
    "id": 40,
    "sku": "LF-TVU-004",
    "name": "Nordik Mid-Century Modern Lowline TV Unit with Rattan Doors",
    "category": "TV Units",
    "price": 19900,
    "mrp": 25500,
    "discountPercent": 22,
    "rating": 4.5,
    "reviewCount": 21,
    "images": [
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=800&q=80",
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80"
    ],
    "colors": [
      {
        "name": "Natural Birch & Cane",
        "hex": "#D6C5A9"
      },
      {
        "name": "Walnut Brown & Cane",
        "hex": "#58402D"
      }
    ],
    "sizes": [
      "58 in Unit (Up to 55″ TV)"
    ],
    "shortDescription": "Retro Scandinavian console featuring hand-woven natural cane webbing doors and splayed solid oak legs.",
    "longDescription": "Infuse warm organic texture into your living room with the Nordik TV unit. Hand-woven natural rattan cane door inserts allow soundbar acoustic dispersion and ventilation for electronics while obscuring clutter. Supported by tapered cylindrical solid oak legs with brass tips.",
    "specs": {
      "dimensions": "58 × 16 × 20 in (147 × 41 × 51 cm)",
      "material": "Solid rubberwood legs, natural cane rattan weave, engineered oak veneer body",
      "upholstery": "N/A",
      "weight": "32 kg",
      "seating": "N/A",
      "warranty": "2 years on frame and hinges",
      "assembly": "Screw in 4 legs (5 min)"
    },
    "delivery": {
      "timeline": "5–8 business days",
      "freeDeliveryZone": "Coimbatore city",
      "installation": "Free delivery and leg attachment"
    },
    "care": [
      "Gently vacuum cane webbing with brush attachment.",
      "Do not expose cane to excessive humidity."
    ],
    "stock": "In Stock",
    "tags": [
      "rattan",
      "scandinavian",
      "cane",
      "mid-century"
    ]
  },
  {
    "id": 41,
    "sku": "LF-TVU-005",
    "name": "Elite Marble-Top TV Console with Gold PVD Stainless Steel Trim",
    "category": "TV Units",
    "price": 38000,
    "mrp": 48000,
    "discountPercent": 21,
    "rating": 4.9,
    "reviewCount": 13,
    "images": [
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=800&q=80",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&q=80"
    ],
    "colors": [
      {
        "name": "Calacatta White & Gold",
        "hex": "#EFEBD9"
      },
      {
        "name": "Marquina Black & Gold",
        "hex": "#1C1C1C"
      }
    ],
    "sizes": [
      "72 in Console (Up to 75″ TV)",
      "80 in Grand Console — ₹44,000"
    ],
    "shortDescription": "Opulent entertainment credenza topped with heat-resistant sintered stone marble slab and brushed gold trim.",
    "longDescription": "Created for Coimbatore residences that demand high glamour. The top is crowned with a 12mm sintered stone marble slab that is 100% scratch-resistant, stain-proof, and impervious to hot cups or electronics heat. Features push-to-open soft-closing drawers lined with velvet and framed by titanium-coated PVD gold stainless steel legs.",
    "specs": {
      "dimensions": "72 × 16 × 21 in (183 × 41 × 53 cm)",
      "material": "Sintered stone top, titanium PVD stainless steel base & lacquered cabinet",
      "upholstery": "N/A",
      "weight": "64 kg",
      "seating": "N/A",
      "warranty": "5 years on stone top & PVD gold coating",
      "assembly": "Pre-assembled white-glove setup"
    },
    "delivery": {
      "timeline": "7–11 business days",
      "freeDeliveryZone": "Coimbatore city",
      "installation": "Free white glove positioning and unboxing"
    },
    "care": [
      "Clean sintered stone top with any mild glass or stone cleaner.",
      "Wipe PVD gold metal with a dry microfiber cloth."
    ],
    "stock": "In Stock",
    "tags": [
      "luxury",
      "marble",
      "gold",
      "sintered-stone"
    ]
  },
  {
    "id": 42,
    "sku": "LF-TVU-006",
    "name": "Compact Corner TV Stand with Cable Management",
    "category": "TV Units",
    "price": 11990,
    "mrp": 15500,
    "discountPercent": 23,
    "rating": 4.2,
    "reviewCount": 28,
    "images": [
      "https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&q=80",
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=800&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80"
    ],
    "colors": [
      {
        "name": "Warm Mahogany",
        "hex": "#4A1521"
      },
      {
        "name": "Dark Espresso",
        "hex": "#2B1B17"
      },
      {
        "name": "Nordic White",
        "hex": "#FAFAFA"
      }
    ],
    "sizes": [
      "42 in Corner Stand (Up to 43″ TV)"
    ],
    "shortDescription": "Angled corner entertainment unit engineered to nestle cleanly into bedroom or compact living room corners.",
    "longDescription": "Solve awkward TV placement in smaller apartments. The angled rear corners fit snugly into any 90-degree corner wall, saving valuable floor space. Includes an open shelf for setup boxes and gaming consoles with rear cable access port, and two lower cupboard doors for movie collections and cables.",
    "specs": {
      "dimensions": "42 × 20 × 24 in (107 × 51 × 61 cm)",
      "material": "Engineered wood with scratch-resistant European melamine laminate",
      "upholstery": "N/A",
      "weight": "24 kg",
      "seating": "N/A",
      "warranty": "2 years on structure",
      "assembly": "Assembly included on delivery"
    },
    "delivery": {
      "timeline": "3–6 business days",
      "freeDeliveryZone": "Coimbatore city",
      "installation": "Free assembly and corner placement"
    },
    "care": [
      "Wipe clean with a damp cloth.",
      "Do not exceed 40 kg load capacity on top surface."
    ],
    "stock": "In Stock",
    "tags": [
      "corner",
      "compact",
      "apartment",
      "value-pick"
    ]
  },
  {
    "id": 43,
    "sku": "LF-TAB-002",
    "name": "Verona Italian White Marble Center Table with Fluted Wood Base",
    "category": "Tables",
    "price": 24500,
    "mrp": 32000,
    "discountPercent": 23,
    "rating": 4.8,
    "reviewCount": 22,
    "images": [
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&q=80",
      "https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=800&q=80",
      "https://images.unsplash.com/photo-1565183997392-2f6f122e5912?w=800&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80"
    ],
    "colors": [
      {
        "name": "White Marble & Natural Oak",
        "hex": "#EAE5D9"
      },
      {
        "name": "White Marble & Walnut",
        "hex": "#533C2D"
      }
    ],
    "sizes": [
      "36 in Round (Standard)",
      "42 in Round (Large) — ₹29,500"
    ],
    "shortDescription": "Round 36-inch centerpiece coffee table pairing bevelled Carrara marble with a cylindrical fluted oak pedestal.",
    "longDescription": "The Verona coffee table brings sculptural organic modernism to your sofa setup. A solid 18mm honed Italian Carrara marble disc sits atop a solid fluted oak column pedestal. Its round form eliminates sharp corners for child safety while making movement around living room seating comfortable.",
    "specs": {
      "dimensions": "36 in dia × 18 in H (91 × 46 cm)",
      "material": "Polished natural composite marble top & solid fluted oak base",
      "upholstery": "N/A",
      "weight": "42 kg",
      "seating": "N/A",
      "warranty": "3 years on structure · 1 year on stone polish",
      "assembly": "Pre-assembled — stone placement included"
    },
    "delivery": {
      "timeline": "5–8 business days",
      "freeDeliveryZone": "Coimbatore city",
      "installation": "Free delivery and positioning"
    },
    "care": [
      "Use coasters under coffee mugs and glasses.",
      "Wipe surface with mild stone cleaner."
    ],
    "stock": "In Stock",
    "tags": [
      "marble",
      "round-table",
      "fluted",
      "coffee-table",
      "luxury"
    ]
  },
  {
    "id": 44,
    "sku": "LF-TAB-003",
    "name": "Rustic Live-Edge Sheesham Wood Coffee Table",
    "category": "Tables",
    "price": 18500,
    "mrp": 24000,
    "discountPercent": 23,
    "rating": 4.7,
    "reviewCount": 31,
    "images": [
      "https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=800&q=80",
      "https://images.unsplash.com/photo-1565183997392-2f6f122e5912?w=800&q=80",
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80"
    ],
    "colors": [
      {
        "name": "Natural Grain & Black Iron",
        "hex": "#633A19"
      }
    ],
    "sizes": [
      "48 × 24 in (Approx. due to natural edge)"
    ],
    "shortDescription": "One-of-a-kind solid hardwood table preserving natural raw live bark contours on heavy-duty iron hairpin legs.",
    "longDescription": "Every single piece is unique. Handcrafted from a thick cross-section slab of solid Indian Sheesham wood preserving the organic contours, fissures, and rich grain swirls shaped by nature. Sanded to a silky touch and sealed with durable matte polyurethane that resists tea and beverage rings.",
    "specs": {
      "dimensions": "48 × 24 × 17 in (approximate organic contour)",
      "material": "Solid Indian Sheesham trunk slab & heavy gauge steel hairpin legs",
      "upholstery": "N/A",
      "weight": "34 kg",
      "seating": "N/A",
      "warranty": "5 years on solid wood and joints",
      "assembly": "Screw in 4 hairpin legs (5 min, bolts included)"
    },
    "delivery": {
      "timeline": "6–9 business days",
      "freeDeliveryZone": "Coimbatore city",
      "installation": "Free delivery & assembly"
    },
    "care": [
      "Dust with soft cotton cloth.",
      "Feed with natural beeswax once every 6 months."
    ],
    "stock": "In Stock",
    "tags": [
      "live-edge",
      "sheesham",
      "hairpin-legs",
      "rustic"
    ]
  },
  {
    "id": 45,
    "sku": "LF-TAB-004",
    "name": "Solstice Geometric Brass & Smoked Glass Accent Side Table",
    "category": "Tables",
    "price": 8990,
    "mrp": 12000,
    "discountPercent": 25,
    "rating": 4.4,
    "reviewCount": 19,
    "images": [
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&q=80",
      "https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=800&q=80",
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80"
    ],
    "colors": [
      {
        "name": "Brushed Brass",
        "hex": "#D4AF37"
      },
      {
        "name": "Matte Black",
        "hex": "#1C1C1C"
      },
      {
        "name": "Rose Gold",
        "hex": "#B76E79"
      }
    ],
    "sizes": [
      "20 in dia × 22 in H"
    ],
    "shortDescription": "Modern geometric wireframe accent table with 8mm tempered smoked charcoal glass tabletop.",
    "longDescription": "The Solstice adds an airy, reflective jewel-box accent next to any sofa arm or recliner. Features a rhythmic geometric wireframe cage forged from electroplated stainless steel, capped with an 8mm tempered smoked safety glass round top that resists scratches and thermal shocks.",
    "specs": {
      "dimensions": "20 in dia × 22 in H (51 × 56 cm)",
      "material": "Electroplated stainless steel wire cage & 8mm tempered safety glass",
      "upholstery": "N/A",
      "weight": "9 kg",
      "seating": "N/A",
      "warranty": "2 years on frame & plating",
      "assembly": "Pre-assembled — place glass on silicone pads"
    },
    "delivery": {
      "timeline": "3–5 business days",
      "freeDeliveryZone": "Coimbatore city",
      "installation": "Free delivery included"
    },
    "care": [
      "Clean glass with glass spray.",
      "Wipe brass wireframe with dry microfiber cloth."
    ],
    "stock": "In Stock",
    "tags": [
      "side-table",
      "accent-table",
      "brass",
      "smoked-glass"
    ]
  },
  {
    "id": 46,
    "sku": "LF-TAB-005",
    "name": "Artisan Lift-Top Coffee Table with Hidden Storage Compartment",
    "category": "Tables",
    "price": 16900,
    "mrp": 22000,
    "discountPercent": 23,
    "rating": 4.6,
    "reviewCount": 27,
    "images": [
      "https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=800&q=80",
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&q=80",
      "https://images.unsplash.com/photo-1565183997392-2f6f122e5912?w=800&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80"
    ],
    "colors": [
      {
        "name": "Rustic Barnwood",
        "hex": "#8B5A2B"
      },
      {
        "name": "Dark Walnut",
        "hex": "#3E2723"
      },
      {
        "name": "Nordic Grey",
        "hex": "#757575"
      }
    ],
    "sizes": [
      "44 × 22 in (Lifts to 25 in H)"
    ],
    "shortDescription": "Gas-strut lift tabletop elevates smoothly to dining or work height with concealed interior storage chest.",
    "longDescription": "Transform couch time into a functional home workstation or casual dinner lounge. The heavy-duty gas strut mechanism lifts the tabletop forward and up to standard desk height. Below the surface lies a huge hidden storage compartment for laptops, remotes, and board games, complemented by two lower open cubbies.",
    "specs": {
      "dimensions": "44 × 22 × 18 in (lifts to 25 in H)",
      "material": "Engineered wood with high-pressure melamine finish & heavy-gauge steel lift mechanism",
      "upholstery": "N/A",
      "weight": "29 kg",
      "seating": "N/A",
      "warranty": "3 years on lift mechanism and structure",
      "assembly": "Assembly included on delivery"
    },
    "delivery": {
      "timeline": "4–7 business days",
      "freeDeliveryZone": "Coimbatore city",
      "installation": "Free assembly and mechanism test"
    },
    "care": [
      "Avoid placing heavy weights on extended tabletop (>15 kg).",
      "Wipe laminate with damp cloth."
    ],
    "stock": "In Stock",
    "tags": [
      "lift-top",
      "storage",
      "coffee-table",
      "wfh",
      "smart-furniture"
    ]
  },
  {
    "id": 47,
    "sku": "LF-TAB-006",
    "name": "Oslo Dual-Tier Round Minimalist Oak Coffee Table",
    "category": "Tables",
    "price": 13500,
    "mrp": 17500,
    "discountPercent": 23,
    "rating": 4.5,
    "reviewCount": 15,
    "images": [
      "https://images.unsplash.com/photo-1565183997392-2f6f122e5912?w=800&q=80",
      "https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=800&q=80",
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80"
    ],
    "colors": [
      {
        "name": "Natural Oak",
        "hex": "#C8A882"
      },
      {
        "name": "Weathered Ash",
        "hex": "#A89F91"
      },
      {
        "name": "Black Ash",
        "hex": "#232323"
      }
    ],
    "sizes": [
      "32 in dia × 18 in H"
    ],
    "shortDescription": "Nordic circular coffee table with a lower cane-slatted shelf for books, magazines, and living room essentials.",
    "longDescription": "Simplicity and utility blended effortlessly. Features smooth bevelled circular oak tabletop supported by three rounded legs and an airy slatted lower tier. Keeps the top clear for coffee cups and decor while offering instant access to your reading materials below.",
    "specs": {
      "dimensions": "32 in dia × 18 in H (81 × 46 cm)",
      "material": "Solid Malaysian oak legs and rim with natural oak veneer top",
      "upholstery": "N/A",
      "weight": "16 kg",
      "seating": "N/A",
      "warranty": "2 years on structure",
      "assembly": "Screw in 3 legs (3 min)"
    },
    "delivery": {
      "timeline": "4–6 business days",
      "freeDeliveryZone": "Coimbatore city",
      "installation": "Free delivery included"
    },
    "care": [
      "Wipe clean with a damp cloth.",
      "Use coasters for hot beverage mugs."
    ],
    "stock": "In Stock",
    "tags": [
      "round",
      "scandinavian",
      "oak",
      "dual-tier"
    ]
  },
  {
    "id": 48,
    "sku": "LF-STU-002",
    "name": "Apex Dual-Motor Electric Height-Adjustable Standing Desk",
    "category": "Study",
    "price": 28900,
    "mrp": 38000,
    "discountPercent": 24,
    "rating": 4.9,
    "reviewCount": 42,
    "images": [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&q=80",
      "https://images.unsplash.com/photo-1505797149-43b0069ec26b?w=800&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80"
    ],
    "colors": [
      {
        "name": "Walnut Top & Black Frame",
        "hex": "#4A3525"
      },
      {
        "name": "Oak Top & White Frame",
        "hex": "#D2B48C"
      },
      {
        "name": "All Matte Black",
        "hex": "#1C1C1C"
      }
    ],
    "sizes": [
      "55 × 28 in Desktop",
      "63 × 30 in Executive Desktop — ₹33,500"
    ],
    "shortDescription": "Dual-motor motorized standing desk with digital memory controller, anti-collision sensor, and bevelled edge.",
    "longDescription": "Upgrade your workday health and ergonomics. Equipped with dual synchronized whisper-quiet electric motors (<45dB) that adjust height smoothly from 28 inches (sitting) to 48 inches (standing) in seconds. Features 4 customizable memory presets, gyroscopic anti-collision obstacle detection, and an integrated wire management cable tray.",
    "specs": {
      "dimensions": "55 × 28 × 28–48 in (140 × 71 × 71–122 cm)",
      "material": "Industrial cold-rolled steel dual-stage legs & 25mm scratch-resistant desktop",
      "upholstery": "N/A",
      "weight": "44 kg (Supports up to 120 kg lifting capacity)",
      "seating": "N/A",
      "warranty": "5 years on dual motors & frame · 2 years on electronics",
      "assembly": "Assembly included on delivery (30 min)"
    },
    "delivery": {
      "timeline": "4–7 business days",
      "freeDeliveryZone": "Coimbatore city",
      "installation": "Free assembly and height memory programming"
    },
    "care": [
      "Do not overload beyond 120 kg capacity.",
      "Wipe desktop surface with soft damp cloth."
    ],
    "stock": "In Stock",
    "tags": [
      "standing-desk",
      "electric",
      "dual-motor",
      "ergonomic",
      "bestseller"
    ]
  },
  {
    "id": 49,
    "sku": "LF-STU-003",
    "name": "Executive Solid Sheesham Writing Desk with Brass Knobs",
    "category": "Study",
    "price": 24500,
    "mrp": 32000,
    "discountPercent": 23,
    "rating": 4.7,
    "reviewCount": 20,
    "images": [
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
      "https://images.unsplash.com/photo-1505797149-43b0069ec26b?w=800&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80"
    ],
    "colors": [
      {
        "name": "Honey Teak Finish",
        "hex": "#B8860B"
      },
      {
        "name": "Dark Walnut",
        "hex": "#4A3525"
      }
    ],
    "sizes": [
      "54 × 26 in Desk"
    ],
    "shortDescription": "Heirloom writing desk in solid Indian Rosewood with 3 stationery drawers and chamfered edges.",
    "longDescription": "Bring classic intellectual prestige to your study or home library. Handcrafted from solid seasoned Sheesham wood displaying rich natural grain. Features three smooth-sliding front drawers fitted with solid antique brass drop knobs, and a discrete concealed cable passage slot at the back for modern laptop chargers.",
    "specs": {
      "dimensions": "54 × 26 × 30 in (137 × 66 × 76 cm)",
      "material": "100% Solid Indian Sheesham Wood with solid brass hardware",
      "upholstery": "N/A",
      "weight": "48 kg",
      "seating": "N/A",
      "warranty": "5 years against termite and wood defects",
      "assembly": "Attach 4 solid wood legs (tools included, 10 min)"
    },
    "delivery": {
      "timeline": "6–9 business days",
      "freeDeliveryZone": "Coimbatore city",
      "installation": "Free assembly and setup"
    },
    "care": [
      "Wax wood with natural beeswax twice a year.",
      "Use a desk pad under writing pens to prevent pressure indentations."
    ],
    "stock": "In Stock",
    "tags": [
      "sheesham",
      "solid-wood",
      "executive",
      "writing-desk"
    ]
  },
  {
    "id": 50,
    "sku": "LF-STU-004",
    "name": "ErgoPro High-Back Mesh Ergonomic Office Chair with Lumbar Support",
    "category": "Study",
    "price": 13990,
    "mrp": 18500,
    "discountPercent": 24,
    "rating": 4.8,
    "reviewCount": 56,
    "images": [
      "https://images.unsplash.com/photo-1505797149-43b0069ec26b?w=800&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&q=80",
      "https://images.unsplash.com/photo-1505797149-43b0069ec26b?w=800&q=80"
    ],
    "colors": [
      {
        "name": "All Black",
        "hex": "#1A1A1A"
      },
      {
        "name": "Slate Grey & White Frame",
        "hex": "#708090"
      }
    ],
    "sizes": [
      "Standard Ergonomic (Adjustable)"
    ],
    "shortDescription": "BIFMA-certified ergonomic task chair with dynamic 2D lumbar support, 3D armrests, and breathable Korean mesh.",
    "longDescription": "Say goodbye to workday back fatigue. The ErgoPro is engineered for 10+ hour seating comfort. The breathable Korean mesh back keeps you sweat-free in tropical weather, while the dynamic lumbar pad self-adjusts to your spine curvature. Features 3D height-and-angle adjustable armrests, synchronized 135-degree tilt with lock, and a Class-4 heavy-duty gas cylinder.",
    "specs": {
      "dimensions": "26 × 26 × 46–50 in (Seat height: 18–22 in)",
      "material": "Reinforced nylon fiber frame, Class-4 gas lift, high-tensile breathable Korean mesh",
      "upholstery": "High-density molded foam seat cushion with water-repellent fabric cover",
      "weight": "17 kg (Supports up to 140 kg)",
      "seating": "1 person",
      "warranty": "3 years comprehensive warranty on mechanism and gas lift",
      "assembly": "Tool-free quick assembly (10 minutes)"
    },
    "delivery": {
      "timeline": "3–6 business days",
      "freeDeliveryZone": "Coimbatore city",
      "installation": "Free doorstep assembly"
    },
    "care": [
      "Vacuum mesh back with soft brush attachment.",
      "Clean polyurethane arm pads with damp cloth."
    ],
    "stock": "In Stock",
    "tags": [
      "ergonomic",
      "office-chair",
      "mesh",
      "bestseller",
      "wfh"
    ]
  },
  {
    "id": 51,
    "sku": "LF-STU-005",
    "name": "Studio Compact Wall-Mounted Floating Work Desk",
    "category": "Study",
    "price": 7990,
    "mrp": 10500,
    "discountPercent": 24,
    "rating": 4.3,
    "reviewCount": 23,
    "images": [
      "https://images.unsplash.com/photo-1505797149-43b0069ec26b?w=800&q=80",
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80"
    ],
    "colors": [
      {
        "name": "Crisp White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Natural Oak",
        "hex": "#D2B48C"
      },
      {
        "name": "Espresso",
        "hex": "#3B2F2F"
      }
    ],
    "sizes": [
      "36 × 18 in Fold-Down Desk"
    ],
    "shortDescription": "Fold-down wall-mounted space-saver desk that tucks away flat, with interior organizer cubbies for laptops.",
    "longDescription": "The ultimate space-saver for bedrooms, studio flats, and small home offices. When closed, it hangs flush against the wall like a slim floating cabinet. Fold down the front panel to reveal a sturdy laptop work desk, interior organizer pigeonholes for stationery and notepads, and top shelf for books.",
    "specs": {
      "dimensions": "36 × 8 × 24 in (closed) · 36 × 26 × 24 in (open desk depth)",
      "material": "Pre-laminated engineered wood with heavy-duty folding steel brackets",
      "upholstery": "N/A",
      "weight": "19 kg (Holds up to 30 kg working weight)",
      "seating": "N/A",
      "warranty": "2 years on hinges & structure",
      "assembly": "Wall mounting included"
    },
    "delivery": {
      "timeline": "4–7 business days",
      "freeDeliveryZone": "Coimbatore city",
      "installation": "Free wall-mount drilling and installation included"
    },
    "care": [
      "Do not lean or place more than 30 kg on folding leaf.",
      "Wipe with a clean dry microfiber cloth."
    ],
    "stock": "In Stock",
    "tags": [
      "floating",
      "fold-down",
      "wall-mount",
      "compact",
      "space-saving"
    ]
  },
  {
    "id": 52,
    "sku": "LF-STU-006",
    "name": "Cambridge Vintage Leather Director's Study Chair",
    "category": "Study",
    "price": 22000,
    "mrp": 28500,
    "discountPercent": 23,
    "rating": 4.6,
    "reviewCount": 17,
    "images": [
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80",
      "https://images.unsplash.com/photo-1580481077190-7361346d1800?w=800&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&q=80"
    ],
    "colors": [
      {
        "name": "Vintage Cigar Brown",
        "hex": "#583A20"
      },
      {
        "name": "British Racing Green",
        "hex": "#004225"
      },
      {
        "name": "Classic Black",
        "hex": "#1C1C1C"
      }
    ],
    "sizes": [
      "Executive Director Chair (Swivel & Tilt)"
    ],
    "shortDescription": "Classic button-tufted executive chair with antiqued leatherette, brass nailhead trim and solid mahogany base caps.",
    "longDescription": "Bring timeless boardroom majesty to your home study. Featuring hand-tufted diamond buttons across the high-backrest and generous padded armrests with brass stud accents. Heavy-duty cast iron tilt-lock mechanism with pneumatic height adjustment and five solid mahogany-capped caster legs for smooth gliding.",
    "specs": {
      "dimensions": "27 × 28 × 42–46 in (Seat height: 19–23 in)",
      "material": "Internal steel & hardwood frame, solid mahogany wood base caps, cast brass nailheads",
      "upholstery": "High-grade antiqued distressed PU leatherette",
      "weight": "23 kg (Holds up to 135 kg)",
      "seating": "1 person",
      "warranty": "3 years on mechanism & frame · 1 year on leatherette",
      "assembly": "Pre-assembled — slot cylinder into base"
    },
    "delivery": {
      "timeline": "5–8 business days",
      "freeDeliveryZone": "Coimbatore city",
      "installation": "Free delivery and unboxing"
    },
    "care": [
      "Wipe with damp cloth and leather conditioner every 4 months.",
      "Avoid sharp metal buttons or belt buckles scratching surface."
    ],
    "stock": "In Stock",
    "tags": [
      "vintage",
      "leather",
      "executive",
      "director-chair"
    ]
  }
];

export default products;

export const categories = [
  {
    "name": "Sofas",
    "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80"
  },
  {
    "name": "Recliners",
    "image": "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&q=80"
  },
  {
    "name": "Dining",
    "image": "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&q=80"
  },
  {
    "name": "Beds",
    "image": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80"
  },
  {
    "name": "Wardrobes",
    "image": "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=600&q=80"
  },
  {
    "name": "TV Units",
    "image": "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&q=80"
  },
  {
    "name": "Tables",
    "image": "https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=600&q=80"
  },
  {
    "name": "Study",
    "image": "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&q=80"
  }
];

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useLocalStorage, useToast } from './hooks/useUtils';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import CategoryGrid from './components/CategoryGrid';
import FeaturedProducts from './components/FeaturedProducts';
import ProductModal from './components/ProductModal';
import WhyLavish from './components/WhyLavish';
import RoomInspiration from './components/RoomInspiration';
import Reviews from './components/Reviews';
import OrderForm from './components/OrderForm';
import CartDrawer from './components/CartDrawer';
import VisitUs from './components/VisitUs';
import Footer from './components/Footer';
import FloatingElements from './components/FloatingElements';
import SearchOverlay from './components/SearchOverlay';
import DemoBanner from './components/DemoBanner';
import Toast from './components/Toast';

/**
 * App — Root component for Lavish Furniture
 * Manages global state: cart, wishlist, modals, search, and unified sticky header
 */
export default function App() {
  // Cart state (persisted)
  const [cart, setCart] = useLocalStorage('lavish-cart', []);
  // Wishlist state (persisted)
  const [wishlist, setWishlist] = useLocalStorage('lavish-wishlist', []);
  // UI states
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  // Toast
  const { toast, showToast } = useToast();

  // Header height tracking
  const headerRef = useRef(null);

  useEffect(() => {
    if (!headerRef.current) return;
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        document.documentElement.style.setProperty('--header-height', `${height}px`);
      }
    };

    updateHeaderHeight();

    const resizeObserver = new ResizeObserver(updateHeaderHeight);
    resizeObserver.observe(headerRef.current);
    window.addEventListener('resize', updateHeaderHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, []);

  // --- Cart actions ---
  const addToCart = useCallback((product, quantity = 1, selectedColor = null, selectedSize = null) => {
    setCart(prev => {
      const existing = prev.find(
        item => item.id === product.id &&
          item.selectedColor === selectedColor &&
          item.selectedSize === selectedSize
      );
      if (existing) {
        return prev.map(item =>
          item.id === product.id &&
          item.selectedColor === selectedColor &&
          item.selectedSize === selectedSize
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, {
        id: product.id,
        name: product.name,
        price: product.price,
        mrp: product.mrp,
        image: product.images[0],
        category: product.category,
        quantity,
        selectedColor,
        selectedSize,
      }];
    });
    showToast(`${product.name} added to cart`);
  }, [setCart, showToast]);

  const updateCartQuantity = useCallback((id, selectedColor, selectedSize, quantity) => {
    if (quantity < 1) {
      removeFromCart(id, selectedColor, selectedSize);
      return;
    }
    setCart(prev => prev.map(item =>
      item.id === id &&
      item.selectedColor === selectedColor &&
      item.selectedSize === selectedSize
        ? { ...item, quantity }
        : item
    ));
  }, [setCart]);

  const removeFromCart = useCallback((id, selectedColor, selectedSize) => {
    setCart(prev => prev.filter(item =>
      !(item.id === id &&
        item.selectedColor === selectedColor &&
        item.selectedSize === selectedSize)
    ));
    showToast('Item removed from cart');
  }, [setCart, showToast]);

  // --- Wishlist actions ---
  const toggleWishlist = useCallback((productId) => {
    setWishlist(prev => {
      if (prev.includes(productId)) {
        showToast('Removed from wishlist');
        return prev.filter(id => id !== productId);
      }
      showToast('Added to wishlist ♡');
      return [...prev, productId];
    });
  }, [setWishlist, showToast]);

  // --- Category filter ---
  const handleCategoryClick = useCallback((category) => {
    setActiveCategory(category);
    const el = document.getElementById('products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  // Cart totals
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Check if any modal or drawer is open
  const isAnyModalOpen = cartOpen || Boolean(selectedProduct) || searchOpen || mobileMenuOpen;

  return (
    <div className="min-h-screen bg-ivory text-charcoal flex flex-col">
      {/* 
        ONE unified sticky header: DemoBanner -> AnnouncementBar -> Navbar
        Stacked in normal flow inside the sticky header wrapper.
        Navbar never overlaps the banner or bar!
      */}
      <header
        ref={headerRef}
        className="sticky top-0 z-40 bg-ivory shadow-sm transition-all"
        role="banner"
      >
        <DemoBanner />
        <AnnouncementBar />
        <Navbar
          cartCount={cartCount}
          wishlistCount={wishlist.length}
          onCartClick={() => setCartOpen(true)}
          onSearchClick={() => setSearchOpen(true)}
          onMobileMenuToggle={setMobileMenuOpen}
        />
      </header>

      {/* Main Content — Flows naturally below the header */}
      <main className="flex-1">
        {/* Hero */}
        <section id="home">
          <Hero />
        </section>

        {/* Trust strip */}
        <TrustStrip />

        {/* Shop by Collection */}
        <section id="collections">
          <CategoryGrid onCategoryClick={handleCategoryClick} />
        </section>

        {/* Featured Products */}
        <section id="products">
          <FeaturedProducts
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            wishlist={wishlist}
            toggleWishlist={toggleWishlist}
            addToCart={addToCart}
            onQuickView={setSelectedProduct}
          />
        </section>

        {/* Why Choose Lavish */}
        <section id="why-lavish">
          <WhyLavish />
        </section>

        {/* Room Inspiration */}
        <RoomInspiration addToCart={addToCart} />

        {/* Reviews */}
        <section id="reviews">
          <Reviews />
        </section>

        {/* Order Form */}
        <section id="order">
          <OrderForm cart={cart} showToast={showToast} />
        </section>

        {/* Visit Us */}
        <section id="visit-us">
          <VisitUs />
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating elements — hidden whenever any modal/drawer is active */}
      <FloatingElements isHidden={isAnyModalOpen} />

      {/* Cart Drawer */}
      {cartOpen && (
        <CartDrawer
          cart={cart}
          cartTotal={cartTotal}
          updateQuantity={updateCartQuantity}
          removeItem={removeFromCart}
          onClose={() => setCartOpen(false)}
        />
      )}

      {/* Product Quick View Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          addToCart={addToCart}
          wishlist={wishlist}
          toggleWishlist={toggleWishlist}
        />
      )}

      {/* Search Overlay */}
      {searchOpen && (
        <SearchOverlay
          onClose={() => setSearchOpen(false)}
          onProductClick={(product) => {
            setSearchOpen(false);
            setSelectedProduct(product);
          }}
        />
      )}

      {/* Toast */}
      <Toast toast={toast} />
    </div>
  );
}

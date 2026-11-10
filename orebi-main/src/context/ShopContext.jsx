import React, { useState, useEffect, useCallback } from 'react';
import { ShopContext } from './ShopContextInstance';
import { OREBI_PRODUCTS } from '../data/products';

export const ShopProvider = ({ children }) => {
  const [products] = useState(OREBI_PRODUCTS);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Cart state persisted in localStorage
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('orebi_cart');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {
      // fallback
    }
    return [
      {
        ...OREBI_PRODUCTS[0],
        quantity: 1,
      },
      {
        ...OREBI_PRODUCTS[1],
        quantity: 1,
      },
    ];
  });

  // Wishlist state persisted in localStorage
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('orebi_wishlist');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch {
      // fallback
    }
    return ['orb-1'];
  });

  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toast, setToast] = useState({ visible: false, message: '', type: 'success' });

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('orebi_cart', JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  // Sync wishlist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('orebi_wishlist', JSON.stringify(wishlist));
    } catch {
      // ignore
    }
  }, [wishlist]);

  const showToast = useCallback((message, type = 'success') => {
    setToast({ visible: true, message, type });
    const timer = setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const openCart = useCallback(() => setIsCartOpen(true), []);
  const closeCart = useCallback(() => setIsCartOpen(false), []);

  const openQuickView = useCallback((product) => setQuickViewProduct(product), []);
  const closeQuickView = useCallback(() => setQuickViewProduct(null), []);

  const addToCart = useCallback((product, quantity = 1, openDrawer = true) => {
    if (!product || !product.id) return;
    const qty = Math.max(1, Number(quantity) || 1);

    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => String(item.id) === String(product.id));
      if (existingIndex > -1) {
        return prevCart.map((item, idx) =>
          idx === existingIndex
            ? { ...item, quantity: item.quantity + qty }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: qty }];
    });

    showToast(`Added "${product.title || product.ProductTittle || 'Product'}" to cart!`);
    if (openDrawer) {
      setIsCartOpen(true);
    }
  }, [showToast]);

  const removeFromCart = useCallback((productId) => {
    setCart((prevCart) => prevCart.filter((item) => String(item.id) !== String(productId)));
    showToast('Item removed from cart', 'info');
  }, [showToast]);

  const updateCartQuantity = useCallback((productId, quantity) => {
    const numQty = Number(quantity);
    if (numQty <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        String(item.id) === String(productId)
          ? { ...item, quantity: numQty }
          : item
      )
    );
  }, [removeFromCart]);

  const clearCart = useCallback(() => {
    setCart([]);
    showToast('Cart cleared', 'info');
  }, [showToast]);

  const toggleWishlist = useCallback((productOrId) => {
    if (!productOrId) return;
    const id = String(typeof productOrId === 'object' ? productOrId.id : productOrId);
    setWishlist((prev) => {
      const exists = prev.includes(id);
      if (exists) {
        showToast('Removed from Wishlist', 'info');
        return prev.filter((item) => item !== id);
      } else {
        showToast('Added to Wishlist!', 'success');
        return [...prev, id];
      }
    });
  }, [showToast]);

  const isInWishlist = useCallback((productId) => {
    if (!productId) return false;
    return wishlist.includes(String(productId));
  }, [wishlist]);

  const cartTotalItems = cart.reduce((sum, item) => sum + (Number(item.quantity) || 0), 0);
  const cartSubtotal = cart.reduce(
    (sum, item) => sum + (Number(item.price) || 0) * (Number(item.quantity) || 0),
    0
  );

  return (
    <ShopContext.Provider
      value={{
        products,
        cart,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        cartTotalItems,
        cartSubtotal,
        wishlist,
        toggleWishlist,
        isInWishlist,
        quickViewProduct,
        openQuickView,
        closeQuickView,
        isCartOpen,
        openCart,
        closeCart,
        toast,
        showToast,
        activeCategory,
        setActiveCategory,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;

import React, { useState, useEffect } from 'react';
import { useShop } from '../../context/useShop';
import { IoCloseOutline, IoHeart, IoHeartOutline } from 'react-icons/io5';
import { FaCartShopping } from 'react-icons/fa6';
import { FaStar } from 'react-icons/fa';

const QuickViewModal = () => {
  const {
    quickViewProduct,
    closeQuickView,
    addToCart,
    toggleWishlist,
    isInWishlist,
  } = useShop();

  const [quantity, setQuantity] = useState(1);

  // Reset quantity whenever quickViewProduct changes
  useEffect(() => {
    setQuantity(1);
  }, [quickViewProduct?.id]);

  // Handle escape key and lock body scroll
  useEffect(() => {
    if (!quickViewProduct) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeQuickView();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [quickViewProduct, closeQuickView]);

  if (!quickViewProduct) return null;

  const isWish = isInWishlist(quickViewProduct.id);
  const title = quickViewProduct.title || quickViewProduct.ProductTittle || 'Product Details';
  const price = Number(quickViewProduct.price || 44);
  const image = quickViewProduct.image || quickViewProduct.ProductImg;
  const badge = quickViewProduct.badge || quickViewProduct.BT || 'New';
  const color = quickViewProduct.color || quickViewProduct.ProductColor || 'Black';
  const rating = quickViewProduct.rating || 4.8;
  const description =
    quickViewProduct.description ||
    'Crafted with premium materials and designed for everyday elegance. Experience signature Orebi styling and lasting comfort.';

  const handleAddToCart = () => {
    addToCart(quickViewProduct, quantity);
    closeQuickView();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto font-dm">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={closeQuickView}
      />

      <div className="flex min-h-full items-center justify-center p-4 sm:p-6">
        <div className="relative w-full max-w-2xl bg-white shadow-2xl rounded-2xl overflow-hidden p-6 sm:p-8 animate-fade-in z-10">
          {/* Close button */}
          <button
            onClick={closeQuickView}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-black rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <IoCloseOutline size={26} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Product Image */}
            <div className="relative bg-[#F5F5F3] p-8 rounded-xl flex items-center justify-center min-h-72">
              <span className="absolute top-4 left-4 bg-[#262626] text-white text-[12px] font-bold px-3 py-1">
                {badge}
              </span>
              <img
                src={image}
                alt={title}
                className="max-h-64 max-w-full object-contain"
              />
            </div>

            {/* Product Info */}
            <div className="space-y-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#767676] font-bold">
                  {quickViewProduct.category || 'Collection'}
                </span>
                <h2 className="text-2xl font-bold text-[#262626] mt-1">{title}</h2>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex text-[#FFB800] text-sm">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      className={star <= Math.round(rating) ? 'text-[#FFB800]' : 'text-gray-200'}
                    />
                  ))}
                </div>
                <span className="text-xs text-[#767676]">({quickViewProduct.reviews || 24} reviews)</span>
              </div>

              {/* Pricing */}
              <div className="flex items-baseline gap-3">
                <span className="text-2xl font-bold text-[#262626]">${price.toFixed(2)}</span>
                {quickViewProduct.oldPrice && (
                  <span className="text-base text-[#767676] line-through">
                    ${Number(quickViewProduct.oldPrice).toFixed(2)}
                  </span>
                )}
              </div>

              {/* Color & Availability */}
              <div className="flex items-center gap-4 text-xs">
                <span className="text-[#767676]">Color: <strong className="text-[#262626]">{color}</strong></span>
                <span className="text-[#767676]">•</span>
                <span className="text-emerald-600 font-bold">In Stock ({quickViewProduct.stock || 20} available)</span>
              </div>

              {/* Description */}
              <p className="text-xs text-[#767676] leading-relaxed">
                {description}
              </p>

              {/* Quantity and Actions */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <div className="flex items-center border border-gray-300 rounded px-2 py-1">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-2 py-1 text-sm text-gray-600 hover:text-black font-bold cursor-pointer"
                  >
                    -
                  </button>
                  <span className="px-3 text-sm font-bold text-[#262626]">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-2 py-1 text-sm text-gray-600 hover:text-black font-bold cursor-pointer"
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3 px-6 bg-[#262626] hover:bg-black text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <FaCartShopping /> Add to Cart
                </button>

                <button
                  type="button"
                  onClick={() => toggleWishlist(quickViewProduct.id)}
                  className={`p-3 border rounded transition-colors cursor-pointer ${
                    isWish
                      ? 'border-red-300 bg-red-50 text-red-500'
                      : 'border-gray-300 text-gray-600 hover:text-black hover:border-black'
                  }`}
                  title="Wishlist"
                >
                  {isWish ? <IoHeart size={18} /> : <IoHeartOutline size={18} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;

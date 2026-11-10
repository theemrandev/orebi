import React, { useEffect } from 'react';
import { useShop } from '../../context/useShop';
import { IoCloseOutline } from 'react-icons/io5';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateCartQuantity,
    cartTotalItems,
    cartSubtotal,
  } = useShop();

  // Close on Escape key press and prevent body scroll
  useEffect(() => {
    if (!isCartOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeCart();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isCartOpen, closeCart]);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-dm">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col pointer-events-auto">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
            <div>
              <h2 className="text-lg font-bold text-[#262626]">Shopping Cart</h2>
              <p className="text-xs text-[#767676]">{cartTotalItems} item{cartTotalItems !== 1 ? 's' : ''}</p>
            </div>
            <button
              onClick={closeCart}
              className="p-2 text-gray-400 hover:text-[#262626] transition-colors rounded-full hover:bg-gray-100 cursor-pointer"
              aria-label="Close cart"
            >
              <IoCloseOutline size={24} />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-gray-100">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-[#767676] text-2xl">
                  🛒
                </div>
                <h3 className="text-base font-bold text-[#262626]">Your cart is empty</h3>
                <p className="text-xs text-[#767676] mt-1 max-w-xs">
                  Discover our new arrivals and special offers to add items to your cart.
                </p>
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="mt-6 px-8 py-3 bg-[#262626] text-white text-xs font-bold uppercase tracking-wider hover:bg-black transition-colors rounded-none"
                >
                  Explore Shop
                </Link>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="py-4 flex gap-4 items-center">
                  <div className="w-20 h-20 bg-gray-50 flex items-center justify-center p-2 rounded shrink-0 border border-gray-100">
                    <img
                      src={item.image || item.ProductImg}
                      alt={item.title || item.ProductTittle}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-[#262626] truncate">
                      {item.title || item.ProductTittle}
                    </h4>
                    <p className="text-xs text-[#767676] mt-0.5">
                      ${Number(item.price || 44).toFixed(2)}
                    </p>

                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center border border-gray-300 rounded">
                        <button
                          type="button"
                          onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-0.5 text-xs text-gray-600 hover:bg-gray-100 transition cursor-pointer"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs font-bold text-[#262626]">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-0.5 text-xs text-gray-600 hover:bg-gray-100 transition cursor-pointer"
                        >
                          +
                        </button>
                      </div>

                      <span className="text-xs font-bold text-[#262626] ml-auto">
                        ${(Number(item.price || 44) * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                    className="p-1.5 text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
                    title="Remove item"
                  >
                    <FaTrashAlt size={14} />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer Subtotal & Action Buttons */}
          {cart.length > 0 && (
            <div className="border-t border-gray-200 px-6 py-5 bg-gray-50 space-y-4">
              <div className="flex items-center justify-between text-base">
                <span className="text-[#767676]">Subtotal:</span>
                <span className="font-bold text-xl text-[#262626]">${cartSubtotal.toFixed(2)}</span>
              </div>
              <p className="text-[11px] text-[#767676]">Taxes and shipping calculated at checkout.</p>

              <div className="flex flex-col gap-2 pt-2">
                <Link
                  to="/cart"
                  onClick={closeCart}
                  className="w-full py-3.5 bg-[#262626] hover:bg-black text-white text-center text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  View Cart
                </Link>
                <Link
                  to="/cart"
                  onClick={closeCart}
                  className="w-full py-3.5 bg-white border border-[#262626] text-[#262626] hover:bg-gray-100 text-center text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Checkout
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;

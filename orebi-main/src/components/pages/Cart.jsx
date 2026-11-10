import React, { useState } from 'react';
import Container from '../../common/Container';
import { useShop } from '../../context/useShop';
import { Link } from 'react-router-dom';
import { FaTrashAlt, FaCheckCircle } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa6';

const Cart = () => {
  const { cart, removeFromCart, updateCartQuantity, clearCart, cartSubtotal } = useShop();
  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [couponMessage, setCouponMessage] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    const code = couponCode.trim().toUpperCase();
    if (code === 'OREBI10' || code === 'SAVE10') {
      setDiscountPercent(0.1);
      setCouponMessage('Coupon OREBI10 applied! 10% discount deducted.');
    } else if (code) {
      setCouponMessage('Invalid coupon code. Try OREBI10 for 10% discount.');
    }
  };

  const discountAmount = cartSubtotal * discountPercent;
  const grandTotal = Math.max(0, cartSubtotal - discountAmount);

  const handleCheckout = () => {
    if (cart.length === 0) return;
    setOrderPlaced(true);
    setTimeout(() => {
      clearCart();
    }, 1500);
  };

  return (
    <div className="bg-white min-h-screen font-dm pb-24">
      {/* Breadcrumb Header */}
      <div className="py-12 bg-[#F5F5F3] border-b border-gray-200">
        <Container>
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#262626]">Shopping Cart</h1>
            <div className="flex items-center gap-2 text-xs text-[#767676]">
              <Link to="/" className="hover:text-black transition-colors">Home</Link>
              <FaAngleRight size={10} />
              <span className="text-[#262626] font-bold">Cart</span>
            </div>
          </div>
        </Container>
      </div>

      <Container className="pt-12">
        {orderPlaced ? (
          <div className="max-w-lg mx-auto text-center py-16 px-6 bg-white border border-gray-200 rounded-2xl shadow-xl space-y-4">
            <FaCheckCircle className="text-emerald-500 text-6xl mx-auto" />
            <h2 className="text-2xl font-bold text-[#262626]">Thank You for Your Order!</h2>
            <p className="text-xs text-[#767676] leading-relaxed">
              Your Orebi order #ORB-98432 has been received and is now being processed. A confirmation has been sent to your email.
            </p>
            <div className="pt-4">
              <Link
                to="/shop"
                className="inline-block px-8 py-3 bg-[#262626] text-white text-xs font-bold uppercase tracking-wider hover:bg-black transition-colors rounded"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        ) : cart.length === 0 ? (
          <div className="text-center py-20 bg-gray-50 border border-dashed border-gray-300 rounded-2xl p-8">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-[#767676] text-3xl">
              🛒
            </div>
            <h2 className="text-xl font-bold text-[#262626]">Your shopping cart is empty</h2>
            <p className="text-xs text-[#767676] mt-1 max-w-sm mx-auto">
              You have no items in your cart. Check out our latest products to start shopping.
            </p>
            <Link
              to="/shop"
              className="mt-6 inline-block px-8 py-3 bg-[#262626] text-white text-xs font-bold uppercase tracking-wider hover:bg-black transition-colors rounded"
            >
              Return to Shop
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Table Area */}
            <div className="lg:col-span-2 space-y-8">
              <div className="overflow-x-auto border border-gray-200 rounded-xl bg-white shadow-xs">
                <table className="w-full text-left text-sm">
                  <thead className="bg-[#F5F5F3] text-[#262626] font-bold text-xs uppercase border-b border-gray-200">
                    <tr>
                      <th className="py-4 px-6">Product</th>
                      <th className="py-4 px-4">Price</th>
                      <th className="py-4 px-4">Quantity</th>
                      <th className="py-4 px-4">Total</th>
                      <th className="py-4 px-4 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {cart.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-[#F5F5F3] rounded p-1 shrink-0 flex items-center justify-center">
                              <img
                                src={item.image || item.ProductImg}
                                alt={item.title || item.ProductTittle}
                                className="max-h-full max-w-full object-contain"
                              />
                            </div>
                            <span className="font-bold text-[#262626] truncate max-w-xs">
                              {item.title || item.ProductTittle}
                            </span>
                          </div>
                        </td>

                        <td className="py-4 px-4 font-semibold text-[#767676]">
                          ${Number(item.price || 44).toFixed(2)}
                        </td>

                        <td className="py-4 px-4">
                          <div className="flex items-center border border-gray-300 rounded w-24">
                            <button
                              type="button"
                              onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                              className="px-2 py-1 text-xs text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
                            >
                              -
                            </button>
                            <span className="flex-1 text-center font-bold text-xs text-[#262626]">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                              className="px-2 py-1 text-xs text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
                            >
                              +
                            </button>
                          </div>
                        </td>

                        <td className="py-4 px-4 font-bold text-[#262626]">
                          ${(Number(item.price || 44) * item.quantity).toFixed(2)}
                        </td>

                        <td className="py-4 px-4 text-center">
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.id)}
                            className="p-2 text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
                            title="Remove product"
                          >
                            <FaTrashAlt size={14} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Table Action Controls */}
              <div className="flex flex-wrap justify-between items-center gap-4 pt-2">
                <Link
                  to="/shop"
                  className="px-6 py-3 border border-[#262626] text-[#262626] hover:bg-[#262626] hover:text-white transition-colors text-xs font-bold uppercase tracking-wider rounded"
                >
                  Continue Shopping
                </Link>

                <button
                  type="button"
                  onClick={clearCart}
                  className="px-6 py-3 bg-red-50 text-red-600 hover:bg-red-100 transition-colors text-xs font-bold uppercase tracking-wider rounded cursor-pointer"
                >
                  Clear Cart
                </button>
              </div>

              {/* Coupon Form */}
              <div className="bg-[#F5F5F3] p-6 rounded-xl space-y-3">
                <h3 className="text-sm font-bold text-[#262626]">Have a Coupon?</h3>
                <form onSubmit={handleApplyCoupon} className="flex gap-2 max-w-md">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Enter coupon code (e.g. OREBI10)"
                    className="flex-1 px-4 py-2.5 bg-white border border-gray-300 rounded text-xs outline-none focus:border-[#262626]"
                  />
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-[#262626] text-white hover:bg-black transition-colors text-xs font-bold uppercase tracking-wider rounded cursor-pointer"
                  >
                    Apply
                  </button>
                </form>
                {couponMessage && (
                  <p className={`text-xs font-semibold ${discountPercent > 0 ? 'text-emerald-600' : 'text-amber-600'}`}>
                    {couponMessage}
                  </p>
                )}
              </div>
            </div>

            {/* Cart Totals Summary */}
            <div className="bg-[#F5F5F3] p-6 sm:p-8 rounded-xl space-y-6 h-fit border border-gray-200">
              <h2 className="text-xl font-bold text-[#262626] pb-3 border-b border-gray-200">
                Cart Totals
              </h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-[#767676]">
                  <span>Subtotal:</span>
                  <span className="font-bold text-[#262626]">${cartSubtotal.toFixed(2)}</span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-semibold">
                    <span>Discount (10%):</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between text-[#767676]">
                  <span>Shipping:</span>
                  <span className="font-bold text-[#262626]">Free</span>
                </div>

                <div className="border-t border-gray-200 pt-3 flex justify-between text-base font-bold text-[#262626]">
                  <span>Total:</span>
                  <span className="text-2xl">${grandTotal.toFixed(2)}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCheckout}
                className="w-full py-4 bg-[#262626] hover:bg-black text-white text-xs font-bold uppercase tracking-wider transition-colors rounded shadow-lg cursor-pointer"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Cart;

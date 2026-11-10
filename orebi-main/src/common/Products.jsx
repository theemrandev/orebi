import React from 'react';
import Badge from './Badge';
import Flex from './Flex';
import Images from './Images';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import { FaCartShopping, FaEye } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useShop } from '../context/useShop';

const Products = ({
  id,
  ProductImg,
  BT,
  ProductTittle,
  ProductPrice,
  ProductColor,
  location,
  product: productProp,
  className = '',
}) => {
  const { addToCart, toggleWishlist, isInWishlist, openQuickView } = useShop();

  // Support both full product prop and individual props
  const product = productProp || {
    id: id || `prod-${ProductTittle || 'item'}`,
    title: ProductTittle || 'Basic Crew Neck Tee',
    price: typeof ProductPrice === 'number' ? ProductPrice : parseFloat(String(ProductPrice || '44').replace(/[^0-9.]/g, '') || 44),
    badge: BT || 'New',
    color: ProductColor || 'Black',
    image: ProductImg,
    location: location || '/shop',
  };

  const productId = String(product.id);
  const isWish = isInWishlist(productId);
  const displayImage = product.image || ProductImg;
  const displayBadge = product.badge || BT || 'New';
  const displayTitle = product.title || ProductTittle || 'Product';
  const displayPrice = typeof product.price === 'number' ? `$${product.price.toFixed(2)}` : (ProductPrice || '$44.00');
  const displayColor = product.color || ProductColor || 'Black';
  const targetLocation = location || `/shop?search=${encodeURIComponent(displayTitle)}`;

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  const handleToggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  const handleQuickView = (e) => {
    e.preventDefault();
    e.stopPropagation();
    openQuickView(product);
  };

  return (
    <div className={`relative group w-full max-w-[370px] mx-auto flex flex-col font-dm ${className}`}>
      {/* Product Image and Overlay */}
      <div className="relative overflow-hidden bg-[#F5F5F3] flex items-center justify-center p-6 min-h-[300px]">
        <Link to={targetLocation} className="w-full flex items-center justify-center">
          <Images
            imgSrc={displayImage}
            imgAlt={displayTitle}
            className="max-h-[260px] max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        {displayBadge && (
          <Badge badge={displayBadge} className="absolute left-5 top-5 z-10" />
        )}

        {/* Hover Actions Menu */}
        <div className="py-4 px-6 bg-white/95 backdrop-blur-xs absolute left-0 bottom-0 w-full translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-md">
          <ul className="flex flex-col gap-y-2 text-[#767676]">
            <li>
              <button
                type="button"
                onClick={handleToggleWishlist}
                className="w-full flex justify-end items-center gap-x-3 text-[14px] hover:font-bold hover:text-[#262626] transition-colors cursor-pointer text-right"
              >
                <span>Add to Wish List</span>
                {isWish ? (
                  <IoHeart className="text-red-500 text-base" />
                ) : (
                  <IoHeartOutline className="text-base" />
                )}
              </button>
            </li>

            <li>
              <button
                type="button"
                onClick={handleQuickView}
                className="w-full flex justify-end items-center gap-x-3 text-[14px] hover:font-bold hover:text-[#262626] transition-colors cursor-pointer text-right"
              >
                <span>Quick View</span>
                <FaEye className="text-sm" />
              </button>
            </li>

            <li>
              <button
                type="button"
                onClick={handleAddToCart}
                className="w-full flex justify-end items-center gap-x-3 text-[14px] hover:font-bold hover:text-[#262626] transition-colors cursor-pointer text-right font-medium"
              >
                <span>Add to Cart</span>
                <FaCartShopping className="text-sm text-[#262626]" />
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Product Information */}
      <div className="pt-4 flex flex-col justify-between flex-1">
        <Flex className="justify-between items-baseline gap-2">
          <Link
            to={targetLocation}
            className="text-[18px] font-bold text-[#262626] hover:underline truncate"
            title={displayTitle}
          >
            {displayTitle}
          </Link>
          <p className="text-[16px] text-[#767676] font-normal shrink-0">{displayPrice}</p>
        </Flex>
        <p className="text-[14px] text-[#767676] mt-1">{displayColor}</p>
      </div>
    </div>
  );
};

export default Products;

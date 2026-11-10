import React from 'react';
import Products from '../../common/Products';
import Container from '../../common/Container';
import { useShop } from '../../context/useShop';
import { Link } from 'react-router-dom';

const SpecialOffers = () => {
  const { products } = useShop();
  // Select products with discounts / special offers
  const specialOffers = products.slice(8, 12);

  return (
    <Container className="my-16 sm:my-20">
      <div className="flex justify-between items-center pb-6 sm:pb-8 border-b border-gray-100 mb-8">
        <h2 className="font-bold text-[28px] sm:text-[34px] lg:text-[39px] font-dm text-[#262626]">
          Special Offers
        </h2>
        <Link
          to="/shop"
          className="text-xs font-bold text-[#767676] hover:text-[#262626] uppercase tracking-wider transition-colors"
        >
          View All →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pb-12 sm:pb-16">
        {specialOffers.map((product) => (
          <Products key={product.id} product={product} />
        ))}
      </div>
    </Container>
  );
};

export default SpecialOffers;

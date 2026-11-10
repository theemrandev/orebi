import React from 'react';
import Container from './Container';
import { Link } from 'react-router-dom';
import Images from './Images';
import addone from '../assets/addone.png';
import addtwo from '../assets/addtwo.png';
import addthree from '../assets/addthree.jpg';

const Add = () => {
  return (
    <Container className="my-12 sm:my-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
        {/* Large Promo Card */}
        <div className="relative overflow-hidden min-h-[360px] sm:min-h-[420px] lg:min-h-full bg-gray-100 flex flex-col justify-end">
          <Images imgSrc={addone} imgAlt="Phones Sale" className="absolute inset-0 w-full h-full object-cover" />
          <div className="relative z-10 p-6 sm:p-10 lg:p-12 space-y-3 max-w-sm">
            <h2 className="font-bold font-dm text-[28px] sm:text-[34px] lg:text-[39px] text-[#262626] leading-tight">
              Phones Sale
            </h2>
            <p className="text-[13px] sm:text-[16px] text-[#6D6D6D] font-dm flex flex-wrap items-center gap-2">
              Up to{' '}
              <span className="text-[28px] sm:text-[36px] lg:text-[40px] text-[#262626] font-dm font-bold">
                30%
              </span>{' '}
              sale for all phones!
            </p>
            <div className="pt-2 sm:pt-3">
              <Link to="/shop?category=gadgets">
                <button
                  type="button"
                  className="py-3 sm:py-3.5 px-8 sm:px-10 bg-[#262626] hover:bg-black font-bold font-dm text-[13px] sm:text-[14px] text-white transition-colors cursor-pointer"
                >
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Stack of 2 Promo Cards */}
        <div className="flex flex-col gap-6 lg:gap-8">
          {/* Top Right Card */}
          <div className="relative overflow-hidden min-h-[200px] sm:min-h-[220px] bg-gray-100 flex flex-col justify-center">
            <Images imgSrc={addtwo} imgAlt="Electronics Sale" className="absolute inset-0 w-full h-full object-cover" />
            <div className="relative z-10 p-6 sm:p-8 space-y-2 max-w-xs">
              <h2 className="font-bold font-dm text-[24px] sm:text-[28px] lg:text-[32px] text-[#262626] leading-tight">
                Electronics Sale
              </h2>
              <p className="text-[13px] sm:text-[15px] text-[#6D6D6D] font-dm flex flex-wrap items-center gap-2">
                Up to{' '}
                <span className="text-[24px] sm:text-[28px] lg:text-[32px] text-[#262626] font-dm font-bold">
                  70%
                </span>{' '}
                off audio & accessories!
              </p>
              <div className="pt-2">
                <Link to="/shop?category=electronics">
                  <button
                    type="button"
                    className="py-2.5 px-6 sm:px-8 bg-[#262626] hover:bg-black font-bold font-dm text-[13px] text-white transition-colors cursor-pointer"
                  >
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Right Card */}
          <div className="relative overflow-hidden min-h-[200px] sm:min-h-[220px] bg-gray-100 flex flex-col justify-center">
            <Images imgSrc={addthree} imgAlt="Furniture Offer" className="absolute inset-0 w-full h-full object-cover" />
            <div className="relative z-10 p-6 sm:p-8 space-y-2 max-w-xs">
              <h2 className="font-bold font-dm text-[24px] sm:text-[28px] lg:text-[32px] text-[#262626] leading-tight">
                Furniture Offer
              </h2>
              <p className="text-[13px] sm:text-[15px] text-[#6D6D6D] font-dm flex flex-wrap items-center gap-2">
                Up to{' '}
                <span className="text-[24px] sm:text-[28px] lg:text-[32px] text-[#262626] font-dm font-bold">
                  50%
                </span>{' '}
                off modern living items!
              </p>
              <div className="pt-2">
                <Link to="/shop?category=home-appliances">
                  <button
                    type="button"
                    className="py-2.5 px-6 sm:px-8 bg-[#262626] hover:bg-black font-bold font-dm text-[13px] text-white transition-colors cursor-pointer"
                  >
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Add;

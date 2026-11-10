import React from 'react';
import Container from '../../common/Container';
import { Link } from 'react-router-dom';

const ClockBanner = () => {
  return (
    <Container className="pb-16 sm:pb-28">
      <div className="bg-[url(/src/assets/clock.png)] min-h-[340px] sm:h-[370px] bg-no-repeat bg-cover bg-center relative overflow-hidden">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md absolute right-4 sm:right-12 md:right-24 top-1/2 -translate-y-1/2 space-y-4 sm:space-y-6 px-4 sm:px-0">
          <h2 className="text-[28px] sm:text-[34px] lg:text-[39px] font-bold font-dm text-[#262626] leading-tight">
            Phone of the year
          </h2>
          <p className="text-[13px] sm:text-[16px] font-normal font-dm text-[#262626] leading-relaxed">
            Experience next-generation performance and sleek minimalist craftmanship with Orebi's flagship tech collection.
          </p>
          <div>
            <Link to="/shop?category=gadgets">
              <button
                type="button"
                className="py-3 sm:py-3.5 px-8 sm:px-12 bg-[#262626] hover:bg-black text-[13px] sm:text-[14px] font-bold font-dm text-white transition-colors cursor-pointer"
              >
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ClockBanner;

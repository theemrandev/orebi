import React from 'react';
import Container from './Container';
import { Link } from 'react-router-dom';
import { RotateCcw } from 'lucide-react';
import { FaCarSide } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Banner = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="w-full"
      >
        <SwiperSlide key="slide-1">
          <div className="bg-[url(/src/assets/banar.png)] h-95 sm:h-120 lg:h-145 bg-no-repeat bg-cover bg-center relative">
            <Container className="h-full relative flex items-center">
              <div className="max-w-md ml-4 sm:ml-12 lg:ml-20 space-y-3 sm:space-y-4">
                <h1 className="font-bold font-dm text-[30px] sm:text-[42px] lg:text-[49px] text-[#262626] leading-tight">
                  Final Offer
                </h1>
                <p className="text-[13px] sm:text-[16px] text-[#6D6D6D] font-dm flex flex-wrap items-center gap-2">
                  Up to{' '}
                  <span className="text-[28px] sm:text-[36px] lg:text-[40px] text-[#262626] font-dm font-bold">
                    50%
                  </span>{' '}
                  sale for all furniture items!
                </p>
                <div className="pt-2 sm:pt-4">
                  <Link to="/shop?category=home-appliances">
                    <button
                      type="button"
                      className="py-3 sm:py-4 px-8 sm:px-12 bg-[#262626] hover:bg-black font-bold font-dm text-[13px] sm:text-[14px] text-white transition-colors cursor-pointer"
                    >
                      Shop Now
                    </button>
                  </Link>
                </div>
              </div>
            </Container>
          </div>
        </SwiperSlide>

        <SwiperSlide key="slide-2">
          <div className="bg-[url(/src/assets/clock.png)] h-95 sm:h-120 lg:h-145 bg-no-repeat bg-cover bg-center relative">
            <Container className="h-full relative flex items-center">
              <div className="max-w-md ml-4 sm:ml-12 lg:ml-20 space-y-3 sm:space-y-4">
                <h1 className="font-bold font-dm text-[30px] sm:text-[42px] lg:text-[49px] text-[#262626] leading-tight">
                  Special Edition
                </h1>
                <p className="text-[13px] sm:text-[16px] text-[#6D6D6D] font-dm flex flex-wrap items-center gap-2">
                  Up to{' '}
                  <span className="text-[28px] sm:text-[36px] lg:text-[40px] text-[#262626] font-dm font-bold">
                    30%
                  </span>{' '}
                  off minimalist tech accessories!
                </p>
                <div className="pt-2 sm:pt-4">
                  <Link to="/shop?category=gadgets">
                    <button
                      type="button"
                      className="py-3 sm:py-4 px-8 sm:px-12 bg-[#262626] hover:bg-black font-bold font-dm text-[13px] sm:text-[14px] text-white transition-colors cursor-pointer"
                    >
                      Shop Now
                    </button>
                  </Link>
                </div>
              </div>
            </Container>
          </div>
        </SwiperSlide>

        <SwiperSlide key="slide-3">
          <div className="bg-[url(/src/assets/banar.png)] h-95 sm:h-120 lg:h-145 bg-no-repeat bg-cover bg-center relative">
            <Container className="h-full relative flex items-center">
              <div className="max-w-md ml-4 sm:ml-12 lg:ml-20 space-y-3 sm:space-y-4">
                <h1 className="font-bold font-dm text-[30px] sm:text-[42px] lg:text-[49px] text-[#262626] leading-tight">
                  Summer Collection
                </h1>
                <p className="text-[13px] sm:text-[16px] text-[#6D6D6D] font-dm flex flex-wrap items-center gap-2">
                  Up to{' '}
                  <span className="text-[28px] sm:text-[36px] lg:text-[40px] text-[#262626] font-dm font-bold">
                    40%
                  </span>{' '}
                  off timeless streetwear apparel!
                </p>
                <div className="pt-2 sm:pt-4">
                  <Link to="/shop?category=clothes">
                    <button
                      type="button"
                      className="py-3 sm:py-4 px-8 sm:px-12 bg-[#262626] hover:bg-black font-bold font-dm text-[13px] sm:text-[14px] text-white transition-colors cursor-pointer"
                    >
                      Shop Now
                    </button>
                  </Link>
                </div>
              </div>
            </Container>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Services and Guarantee Badges */}
      <div className="py-7 bg-white border-b border-gray-100">
        <Container>
          <ul className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
            <li>
              <Link to="/about" className="flex items-center text-[#6D6D6D] hover:text-[#262626] transition-colors">
                <span className="font-bold text-base mr-3 text-[#262626]">2</span>
                <span className="font-dm">Two years warranty</span>
              </Link>
            </li>

            <li>
              <Link to="/about" className="flex items-center text-[#6D6D6D] hover:text-[#262626] transition-colors">
                <FaCarSide className="font-bold text-lg mr-3 text-[#262626]" />
                <span className="font-dm">Free shipping on all orders</span>
              </Link>
            </li>

            <li>
              <Link to="/about" className="flex items-center text-[#6D6D6D] hover:text-[#262626] transition-colors">
                <RotateCcw className="font-bold text-base mr-3 text-[#262626]" />
                <span className="font-dm">Return policy in 30 days</span>
              </Link>
            </li>
          </ul>
        </Container>
      </div>
    </>
  );
};

export default Banner;

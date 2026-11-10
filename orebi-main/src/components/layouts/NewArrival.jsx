import React from 'react';
import Products from '../../common/Products';
import Container from '../../common/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import { useShop } from '../../context/useShop';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const NewArrival = () => {
  const { products } = useShop();

  const newArrivals = products.filter((p) => p.newArrival);
  const bestSellers = products.filter((p) => p.bestSeller);

  return (
    <>
      {/* New Arrivals Section */}
      <Container className="my-12 sm:my-16">
        <div className="flex justify-between items-center pb-6 sm:pb-8 border-b border-gray-100 mb-8">
          <h2 className="font-bold text-[28px] sm:text-[34px] lg:text-[39px] font-dm text-[#262626]">
            New Arrivals
          </h2>
          <Link
            to="/shop"
            className="text-xs font-bold text-[#767676] hover:text-[#262626] uppercase tracking-wider transition-colors"
          >
            View All →
          </Link>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            type="button"
            className="new-arrival-prev hidden sm:flex h-12 w-12 bg-[#979797] hover:bg-black rounded-full z-20 absolute -left-4 top-1/2 -translate-y-1/2 items-center justify-center text-white transition-colors cursor-pointer shadow-md"
            aria-label="Previous slide"
          >
            <FaArrowLeft />
          </button>

          <button
            type="button"
            className="new-arrival-next hidden sm:flex h-12 w-12 bg-[#979797] hover:bg-black rounded-full z-20 absolute -right-4 top-1/2 -translate-y-1/2 items-center justify-center text-white transition-colors cursor-pointer shadow-md"
            aria-label="Next slide"
          >
            <FaArrowRight />
          </button>

          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: '.new-arrival-prev',
              nextEl: '.new-arrival-next',
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 4, spaceBetween: 30 },
            }}
            className="px-2"
          >
            {newArrivals.map((product) => (
              <SwiperSlide key={product.id}>
                <Products product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>

      {/* Our Bestsellers Section */}
      <Container className="my-16 sm:my-20">
        <div className="flex justify-between items-center pb-6 sm:pb-8 border-b border-gray-100 mb-8">
          <h2 className="font-bold text-[28px] sm:text-[34px] lg:text-[39px] font-dm text-[#262626]">
            Our Bestsellers
          </h2>
          <Link
            to="/shop"
            className="text-xs font-bold text-[#767676] hover:text-[#262626] uppercase tracking-wider transition-colors"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {bestSellers.map((product) => (
            <Products key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default NewArrival;

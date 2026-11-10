import React from 'react';
import Banner from '../../common/Banner';
import Add from '../../common/Add';
import NewArrival from '../layouts/NewArrival';
import ClockBanner from '../layouts/ClockBanner';
import SpecialOffers from '../layouts/SpecialOffers';

const Home = () => {
  return (
    <>
      {/* Hero Banner Slider */}
      <Banner />

      {/* Promo Offers & Categories */}
      <Add />

      {/* New Arrivals Slider & Bestsellers */}
      <NewArrival />

      {/* Phone of the Year Highlight Banner */}
      <ClockBanner />

      {/* Special Offers Grid */}
      <SpecialOffers />
    </>
  );
};

export default Home;

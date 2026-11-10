import React from 'react';
import Container from '../../common/Container';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa6';

const About = () => {
  return (
    <div className="bg-white min-h-screen font-dm pb-24">
      {/* Breadcrumb Header */}
      <div className="py-12 bg-[#F5F5F3] border-b border-gray-200">
        <Container>
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#262626]">About Orebi</h1>
            <div className="flex items-center gap-2 text-xs text-[#767676]">
              <Link to="/" className="hover:text-black transition-colors">Home</Link>
              <FaAngleRight size={10} />
              <span className="text-[#262626] font-bold">About</span>
            </div>
          </div>
        </Container>
      </div>

      <Container className="pt-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Main Story */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#262626]">
              Orebi is one of the world's leading ecommerce brands and is internationally recognized for celebrating the essence of classic worldwide cool style.
            </h2>
            <p className="text-[#767676] text-base leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>

          {/* Three pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-gray-100">
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-[#262626]">Our Vision</h3>
              <p className="text-xs text-[#767676] leading-relaxed">
                Empowering modern living through minimalist design, sustainable production, and uncompromising craftmanship in every product we curate.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold text-[#262626]">Our Story</h3>
              <p className="text-xs text-[#767676] leading-relaxed">
                Founded with a passion for timeless aesthetics, Orebi has grown from an independent boutique studio into a global lifestyle destination.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold text-[#262626]">Our Brands</h3>
              <p className="text-xs text-[#767676] leading-relaxed">
                We partner with certified manufacturers and artisans worldwide to guarantee durable, sustainable, and ethically produced collections.
              </p>
            </div>
          </div>

          {/* Call to action */}
          <div className="pt-8 text-center sm:text-left">
            <Link
              to="/shop"
              className="inline-block px-8 py-3.5 bg-[#262626] hover:bg-black text-white text-xs font-bold uppercase tracking-wider transition-colors rounded"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;

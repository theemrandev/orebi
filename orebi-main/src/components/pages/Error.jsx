import React from 'react';
import Container from '../../common/Container';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa6';

const Error = () => {
  return (
    <div className="bg-white min-h-screen font-dm pb-24">
      {/* Breadcrumb */}
      <div className="py-12 bg-[#F5F5F3] border-b border-gray-200">
        <Container>
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#262626]">404 Error</h1>
            <div className="flex items-center gap-2 text-xs text-[#767676]">
              <Link to="/" className="hover:text-black transition-colors">Home</Link>
              <FaAngleRight size={10} />
              <span className="text-[#262626] font-bold">404</span>
            </div>
          </div>
        </Container>
      </div>

      <Container className="pt-20 text-center">
        <div className="max-w-md mx-auto space-y-6">
          <h2 className="text-8xl sm:text-9xl font-bold text-[#262626]">404</h2>
          <h3 className="text-xl sm:text-2xl font-bold text-[#262626]">
            The page you were looking for couldn't be found.
          </h3>
          <p className="text-xs text-[#767676] leading-relaxed">
            The page might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div className="pt-4">
            <Link
              to="/"
              className="inline-block px-10 py-3.5 bg-[#262626] hover:bg-black text-white text-xs font-bold uppercase tracking-wider transition-colors rounded"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Error;

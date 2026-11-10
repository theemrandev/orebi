import React from 'react';
import Container from '../../common/Container';
import Flex from '../../common/Flex';
import { Link } from 'react-router-dom';
import Images from '../../common/Images';
import Logo from '../../assets/logo.png';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';

const Footer = () => {
  return (
    <footer className="w-full bg-[#F5F5F3] font-dm pt-16 pb-12 border-t border-gray-200">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 pb-14 border-b border-gray-200">
          {/* MENU */}
          <div className="space-y-4">
            <h3 className="text-[#262626] font-bold text-[16px] tracking-wider uppercase">
              Menu
            </h3>
            <ul className="text-[#6D6D6D] text-[14px] space-y-2.5">
              <li>
                <Link to="/" className="hover:text-[#262626] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-[#262626] transition-colors">Shop</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#262626] transition-colors">About</Link>
              </li>
              <li>
                <Link to="/contacts" className="hover:text-[#262626] transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#262626] transition-colors">Journal</Link>
              </li>
            </ul>
          </div>

          {/* SHOP */}
          <div className="space-y-4">
            <h3 className="text-[#262626] font-bold text-[16px] tracking-wider uppercase">
              Shop
            </h3>
            <ul className="text-[#6D6D6D] text-[14px] space-y-2.5">
              <li>
                <Link to="/shop?category=accessories" className="hover:text-[#262626] transition-colors">Accessories</Link>
              </li>
              <li>
                <Link to="/shop?category=clothes" className="hover:text-[#262626] transition-colors">Clothes</Link>
              </li>
              <li>
                <Link to="/shop?category=electronics" className="hover:text-[#262626] transition-colors">Electronics</Link>
              </li>
              <li>
                <Link to="/shop?category=bags" className="hover:text-[#262626] transition-colors">Bags</Link>
              </li>
              <li>
                <Link to="/shop?category=home-appliances" className="hover:text-[#262626] transition-colors">Home Appliances</Link>
              </li>
            </ul>
          </div>

          {/* HELP */}
          <div className="space-y-4">
            <h3 className="text-[#262626] font-bold text-[16px] tracking-wider uppercase">
              Help
            </h3>
            <ul className="text-[#6D6D6D] text-[14px] space-y-2.5">
              <li>
                <Link to="/about" className="hover:text-[#262626] transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#262626] transition-colors">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-[#262626] transition-colors">Special E-shop</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#262626] transition-colors">Shipping & Returns</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#262626] transition-colors">Secure Payments</Link>
              </li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div className="space-y-3 sm:col-span-2 lg:col-span-2">
            <h3 className="text-[#262626] font-bold text-[16px]">
              (052) 611-5711 • company@domain.com
            </h3>
            <p className="text-[#6D6D6D] text-[14px] leading-relaxed">
              575 Crescent Ave. Quakertown, PA 18951, United States
            </p>
          </div>

          {/* LOGO */}
          <div className="flex sm:justify-end items-start">
            <Link to="/" className="w-32 inline-block">
              <Images imgSrc={Logo} imgAlt="Orebi Logo" className="w-full h-auto object-contain" />
            </Link>
          </div>
        </div>

        {/* Bottom Socials & Copyright */}
        <div className="pt-8">
          <Flex className="flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <ul className="text-[#262626] flex items-center gap-x-6">
                <li>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#262626] hover:text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#262626] hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#262626] hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <GrInstagram />
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-[#6D6D6D] text-[14px] text-center sm:text-right">
                2026 Orebi Minimal eCommerce • Designed for Modern Living
              </p>
            </div>
          </Flex>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

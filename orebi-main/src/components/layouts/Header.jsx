import React, { useState, useRef, useEffect } from 'react';
import Container from '../../common/Container';
import Flex from '../../common/Flex';
import Images from '../../common/Images';
import Logo from '../../assets/logo.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa6';
import { useShop } from '../../context/useShop';
import { CATEGORIES, getCategoryItemCount } from '../../data/products';

const Header = () => {
  const { cartTotalItems, openCart, products } = useShop();
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  const categoryRef = useRef(null);
  const userRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (categoryRef.current && !categoryRef.current.contains(e.target)) {
        setIsCategoryOpen(false);
      }
      if (userRef.current && !userRef.current.contains(e.target)) {
        setIsUserOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchInput.trim())}`);
    } else {
      navigate('/shop');
    }
  };

  const handleCategoryClick = (slug) => {
    setIsCategoryOpen(false);
    navigate(`/shop?category=${encodeURIComponent(slug)}`);
  };

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.toLowerCase().startsWith(path.toLowerCase());
  };

  return (
    <header className="w-full font-dm bg-white select-none">
      {/* Top Navbar */}
      <div className="py-7 bg-white border-b border-gray-100">
        <Container>
          <div className="flex items-center justify-between relative">
            {/* Logo on Left */}
            <div className="w-24 sm:w-32 shrink-0">
              <Link to="/">
                <Images imgSrc={Logo} imgAlt="Orebi Logo" className="w-full h-auto object-contain" />
              </Link>
            </div>

            {/* Desktop Navigation Links - Centered Per Figma Design */}
            <nav className="hidden md:flex flex-1 justify-center">
              <ul className="flex items-center gap-x-10 text-[#767676] text-[14px] font-dm">
                <li>
                  <Link
                    to="/"
                    className={`transition-colors py-1 hover:text-[#262626] hover:font-bold ${
                      isActive('/') ? 'text-[#262626] font-bold' : ''
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shop"
                    className={`transition-colors py-1 hover:text-[#262626] hover:font-bold ${
                      isActive('/shop') ? 'text-[#262626] font-bold' : ''
                    }`}
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className={`transition-colors py-1 hover:text-[#262626] hover:font-bold ${
                      isActive('/about') ? 'text-[#262626] font-bold' : ''
                    }`}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contacts"
                    className={`transition-colors py-1 hover:text-[#262626] hover:font-bold ${
                      isActive('/contacts') ? 'text-[#262626] font-bold' : ''
                    }`}
                  >
                    Contacts
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className={`transition-colors py-1 hover:text-[#262626] hover:font-bold ${
                      isActive('/journal') ? 'text-[#262626] font-bold' : ''
                    }`}
                  >
                    Journal
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Right Spacer on Desktop to keep Nav perfectly centered / Mobile Hamburger */}
            <div className="w-24 sm:w-32 flex justify-end">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-[#262626] hover:text-black cursor-pointer"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden pt-4 pb-2 border-t border-gray-100 mt-4 animate-fade-in">
              <ul className="flex flex-col gap-y-3 text-[14px] text-[#767676]">
                <li>
                  <Link
                    to="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-1 ${isActive('/') ? 'text-[#262626] font-bold' : ''}`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shop"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-1 ${isActive('/shop') ? 'text-[#262626] font-bold' : ''}`}
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-1 ${isActive('/about') ? 'text-[#262626] font-bold' : ''}`}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contacts"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-1 ${isActive('/contacts') ? 'text-[#262626] font-bold' : ''}`}
                  >
                    Contacts
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-1 ${isActive('/journal') ? 'text-[#262626] font-bold' : ''}`}
                  >
                    Journal
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </Container>
      </div>

      {/* Category, Search & Action Bar */}
      <div className="py-6 sm:py-8 bg-[#F5F5F3] border-y border-[#E0E0E0]">
        <Container>
          <Flex className="justify-between items-center relative flex-wrap gap-4">
            {/* Shop by Category Trigger */}
            <div className="relative" ref={categoryRef}>
              <div
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className="flex items-center gap-x-2.5 py-3 cursor-pointer text-[#262626] hover:text-black transition-colors"
                role="button"
                tabIndex={0}
                aria-expanded={isCategoryOpen}
              >
                <BiMenuAltLeft className="text-xl" />
                <span className="text-[14px] font-dm font-bold">Shop by Category</span>
                <FaCaretDown className={`transition-transform duration-200 text-xs ml-1 ${isCategoryOpen ? 'rotate-180' : ''}`} />
              </div>

              {/* Category Dropdown Menu */}
              {isCategoryOpen && (
                <div className="py-2 w-64 bg-[#262626] absolute left-0 top-13 z-40 shadow-xl border border-[#333333] animate-fade-in">
                  <ul className="divide-y divide-[#333333] text-[14px]">
                    {CATEGORIES.map((cat) => {
                      const count = getCategoryItemCount(cat.slug, products);
                      return (
                        <li key={cat.slug}>
                          <button
                            type="button"
                            onClick={() => handleCategoryClick(cat.slug)}
                            className="w-full flex justify-between items-center py-3 px-5 text-white/70 hover:text-white hover:bg-black/40 hover:pl-6 transition-all duration-200 text-left group cursor-pointer"
                          >
                            <span className="font-medium group-hover:font-bold">{cat.name}</span>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-white/40">({count})</span>
                              <FaArrowRight className="text-xs text-white/50 group-hover:text-white transition-opacity" />
                            </div>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>

            {/* Search Input Bar */}
            <form onSubmit={handleSearchSubmit} className="relative flex-1 max-w-[600px] order-last sm:order-none w-full sm:w-auto">
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search Products"
                className="w-full h-12 py-3 pl-5 pr-12 bg-white text-[14px] font-dm text-[#262626] placeholder:text-[#C4C4C4] outline-none border border-transparent focus:border-[#262626] transition-all"
              />
              <button
                type="submit"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black transition-colors cursor-pointer"
                title="Search"
              >
                <FaSearch />
              </button>
            </form>

            {/* Account & Shopping Cart Controls */}
            <div className="flex items-center gap-x-8 sm:gap-x-10 text-[#262626]">
              {/* User Account Dropdown */}
              <div className="relative" ref={userRef}>
                <div
                  onClick={() => setIsUserOpen(!isUserOpen)}
                  className="flex items-center gap-x-1.5 cursor-pointer text-[#262626] hover:text-black transition-colors p-1"
                  role="button"
                  tabIndex={0}
                  title="My Account"
                  aria-expanded={isUserOpen}
                >
                  <FaUser className="text-base" />
                  <FaCaretDown className={`text-xs transition-transform duration-200 ${isUserOpen ? 'rotate-180' : ''}`} />
                </div>

                {isUserOpen && (
                  <div className="absolute right-0 top-11 z-40 w-48 bg-[#262626] text-white/80 py-2 text-xs shadow-xl border border-[#333333] animate-fade-in font-dm">
                    <Link
                      to="/about"
                      onClick={() => setIsUserOpen(false)}
                      className="block px-5 py-2.5 text-white/75 hover:bg-black/50 hover:text-white font-medium transition-colors"
                    >
                      My Profile
                    </Link>
                    <Link
                      to="/cart"
                      onClick={() => setIsUserOpen(false)}
                      className="block px-5 py-2.5 text-white/75 hover:bg-black/50 hover:text-white font-medium transition-colors"
                    >
                      Order History
                    </Link>
                    <Link
                      to="/shop"
                      onClick={() => setIsUserOpen(false)}
                      className="block px-5 py-2.5 text-white/75 hover:bg-black/50 hover:text-white font-medium transition-colors"
                    >
                      Browse Catalog
                    </Link>
                    <div className="border-t border-[#333333] my-1" />
                    <Link
                      to="/contacts"
                      onClick={() => setIsUserOpen(false)}
                      className="block px-5 py-2.5 text-white/75 hover:bg-black/50 hover:text-white font-medium transition-colors"
                    >
                      Customer Support
                    </Link>
                  </div>
                )}
              </div>

              {/* Cart Drawer Trigger */}
              <button
                type="button"
                onClick={openCart}
                className="relative p-1 text-[#262626] hover:text-black transition-colors cursor-pointer group"
                title="View Cart"
              >
                <FaShoppingCart className="text-lg group-hover:scale-110 transition-transform" />
                {cartTotalItems > 0 && (
                  <span className="absolute -top-1.5 -right-2 h-5 w-5 bg-[#262626] text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white shadow-xs">
                    {cartTotalItems}
                  </span>
                )}
              </button>
            </div>
          </Flex>
        </Container>
      </div>
    </header>
  );
};

export default Header;

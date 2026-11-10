import React, { useState, useMemo, useEffect } from 'react';
import Container from '../../common/Container';
import Products from '../../common/Products';
import { useShop } from '../../context/useShop';
import { useSearchParams, Link } from 'react-router-dom';
import { CATEGORIES, getCategoryItemCount, matchCategory, slugify } from '../../data/products';
import { FaAngleRight } from 'react-icons/fa6';
import { FaFilter, FaTimes, FaSortAmountDown } from 'react-icons/fa';

const Shop = () => {
  const { products } = useShop();
  const [searchParams, setSearchParams] = useSearchParams();

  // Read URL params
  const categoryParam = searchParams.get('category') || 'all';
  const searchParam = searchParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [selectedColor, setSelectedColor] = useState('All');
  const [maxPrice, setMaxPrice] = useState(150);
  const [sortBy, setSortBy] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Sync state when URL params change
  useEffect(() => {
    setSelectedCategory(categoryParam);
    setCurrentPage(1);
  }, [categoryParam]);

  // Extract unique colors available across all products
  const availableColors = useMemo(() => {
    const colors = new Set(products.map((p) => p.color).filter(Boolean));
    return ['All', ...Array.from(colors)];
  }, [products]);

  // Filter products logic
  const filteredProducts = useMemo(() => {
    return products
      .filter((item) => {
        // Category Filter
        if (selectedCategory && selectedCategory !== 'all') {
          if (!matchCategory(item.category, selectedCategory)) {
            return false;
          }
        }

        // Search Query Filter
        if (searchParam) {
          const query = searchParam.toLowerCase().trim();
          const matchTitle = item.title.toLowerCase().includes(query);
          const matchCategoryName = item.category.toLowerCase().includes(query);
          if (!matchTitle && !matchCategoryName) {
            return false;
          }
        }

        // Color Filter
        if (selectedColor !== 'All' && item.color !== selectedColor) {
          return false;
        }

        // Price Filter
        if (item.price > maxPrice) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return (b.rating || 0) - (a.rating || 0);
        if (sortBy === 'name') return a.title.localeCompare(b.title);
        return 0; // default
      });
  }, [products, selectedCategory, searchParam, selectedColor, maxPrice, sortBy]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage) || 1;
  const currentProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(start, start + itemsPerPage);
  }, [filteredProducts, currentPage, itemsPerPage]);

  const handleCategorySelect = (slug) => {
    setSelectedCategory(slug);
    setCurrentPage(1);
    const newParams = new URLSearchParams(searchParams);
    if (slug === 'all') {
      newParams.delete('category');
    } else {
      newParams.set('category', slug);
    }
    setSearchParams(newParams);
  };

  const handleClearSearch = () => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete('search');
    setSearchParams(newParams);
  };

  const handleResetAllFilters = () => {
    setSelectedCategory('all');
    setSelectedColor('All');
    setMaxPrice(150);
    setSortBy('default');
    setCurrentPage(1);
    setSearchParams({});
  };

  const hasActiveFilters =
    (selectedCategory && selectedCategory !== 'all') ||
    Boolean(searchParam) ||
    selectedColor !== 'All' ||
    maxPrice < 150;

  // Active category display name
  const activeCategoryObj = CATEGORIES.find(
    (c) => c.slug === selectedCategory || slugify(c.name) === selectedCategory
  );
  const activeCategoryTitle = activeCategoryObj ? activeCategoryObj.name : 'Products';

  return (
    <div className="bg-white min-h-screen font-dm pb-24">
      {/* Page Header Banner & Breadcrumb */}
      <div className="py-12 bg-[#F5F5F3] border-b border-gray-200">
        <Container>
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#262626] capitalize">
              {searchParam ? `Search: "${searchParam}"` : activeCategoryTitle}
            </h1>
            <div className="flex items-center gap-2 text-xs text-[#767676]">
              <Link to="/" className="hover:text-black transition-colors">Home</Link>
              <FaAngleRight size={10} />
              <Link
                to="/shop"
                onClick={() => handleCategorySelect('all')}
                className="hover:text-black transition-colors"
              >
                Shop
              </Link>
              {selectedCategory !== 'all' && (
                <>
                  <FaAngleRight size={10} />
                  <span className="text-[#262626] font-bold capitalize">
                    {activeCategoryTitle}
                  </span>
                </>
              )}
            </div>
          </div>
        </Container>
      </div>

      {/* Main Content Area */}
      <Container className="pt-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* SIDEBAR FILTERS */}
          <aside className="w-full lg:w-72 shrink-0 space-y-8">
            {/* Category Filter */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-xs">
              <h3 className="text-lg font-bold text-[#262626] pb-3 border-b border-gray-100 flex items-center justify-between">
                <span>Shop by Category</span>
                <FaFilter className="text-xs text-gray-400" />
              </h3>

              <ul className="space-y-1.5 pt-4 text-[14px]">
                <li>
                  <button
                    type="button"
                    onClick={() => handleCategorySelect('all')}
                    className={`w-full flex justify-between items-center py-2 px-3 rounded-lg transition-colors text-left cursor-pointer ${
                      selectedCategory === 'all'
                        ? 'bg-[#262626] text-white font-bold'
                        : 'text-[#767676] hover:bg-gray-100 hover:text-[#262626]'
                    }`}
                  >
                    <span>All Categories</span>
                    <span className="text-xs opacity-75">({products.length})</span>
                  </button>
                </li>

                {CATEGORIES.map((cat) => {
                  const count = getCategoryItemCount(cat.slug, products);
                  const isSelected = selectedCategory === cat.slug;
                  return (
                    <li key={cat.slug}>
                      <button
                        type="button"
                        onClick={() => handleCategorySelect(cat.slug)}
                        className={`w-full flex justify-between items-center py-2 px-3 rounded-lg transition-colors text-left cursor-pointer ${
                          isSelected
                            ? 'bg-[#262626] text-white font-bold'
                            : 'text-[#767676] hover:bg-gray-100 hover:text-[#262626]'
                        }`}
                      >
                        <span>{cat.name}</span>
                        <span className="text-xs opacity-75">({count})</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Price Filter */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-xs">
              <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                <h3 className="text-lg font-bold text-[#262626]">Filter by Price</h3>
                <span className="text-xs font-bold text-[#262626]">${maxPrice}</span>
              </div>

              <div className="pt-4 space-y-3">
                <input
                  type="range"
                  min="20"
                  max="150"
                  step="5"
                  value={maxPrice}
                  onChange={(e) => {
                    setMaxPrice(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="w-full accent-[#262626] cursor-pointer"
                />
                <div className="flex justify-between text-xs text-[#767676]">
                  <span>$20</span>
                  <span>Max: ${maxPrice}</span>
                </div>
              </div>
            </div>

            {/* Color Filter */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-xs">
              <h3 className="text-lg font-bold text-[#262626] pb-3 border-b border-gray-100">
                Filter by Color
              </h3>

              <div className="pt-4 flex flex-wrap gap-2">
                {availableColors.map((color) => {
                  const isSelected = selectedColor === color;
                  return (
                    <button
                      key={color}
                      type="button"
                      onClick={() => {
                        setSelectedColor(color);
                        setCurrentPage(1);
                      }}
                      className={`px-3 py-1.5 text-xs rounded-full border transition-colors cursor-pointer ${
                        isSelected
                          ? 'bg-[#262626] text-white border-[#262626] font-bold'
                          : 'bg-white text-[#767676] border-gray-200 hover:border-[#262626] hover:text-[#262626]'
                      }`}
                    >
                      {color}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Clear All Filters Button */}
            {hasActiveFilters && (
              <button
                type="button"
                onClick={handleResetAllFilters}
                className="w-full py-3 bg-red-50 text-red-600 hover:bg-red-100 border border-red-200 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
              >
                Clear All Filters
              </button>
            )}
          </aside>

          {/* MAIN PRODUCTS AREA */}
          <main className="flex-1">
            {/* Top Bar: Active Filter Pills, Results Count & Sorting */}
            <div className="bg-[#F5F5F3] p-4 rounded-xl mb-8 flex flex-wrap items-center justify-between gap-4">
              {/* Results Count & Active Pills */}
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-xs text-[#767676] font-medium">
                  Showing <strong className="text-[#262626]">{filteredProducts.length}</strong> product{filteredProducts.length !== 1 ? 's' : ''}
                </span>

                {/* Filter Pills */}
                {selectedCategory !== 'all' && (
                  <span className="inline-flex items-center gap-1.5 bg-[#262626] text-white text-xs px-3 py-1 rounded-full font-medium">
                    Category: {activeCategoryTitle}
                    <button
                      type="button"
                      onClick={() => handleCategorySelect('all')}
                      className="hover:opacity-75 cursor-pointer ml-1"
                    >
                      <FaTimes size={10} />
                    </button>
                  </span>
                )}

                {searchParam && (
                  <span className="inline-flex items-center gap-1.5 bg-[#262626] text-white text-xs px-3 py-1 rounded-full font-medium">
                    Search: "{searchParam}"
                    <button
                      type="button"
                      onClick={handleClearSearch}
                      className="hover:opacity-75 cursor-pointer ml-1"
                    >
                      <FaTimes size={10} />
                    </button>
                  </span>
                )}

                {selectedColor !== 'All' && (
                  <span className="inline-flex items-center gap-1.5 bg-[#262626] text-white text-xs px-3 py-1 rounded-full font-medium">
                    Color: {selectedColor}
                    <button
                      type="button"
                      onClick={() => setSelectedColor('All')}
                      className="hover:opacity-75 cursor-pointer ml-1"
                    >
                      <FaTimes size={10} />
                    </button>
                  </span>
                )}
              </div>

              {/* Sort By Dropdown */}
              <div className="flex items-center gap-2 text-xs text-[#767676]">
                <FaSortAmountDown />
                <span>Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white border border-gray-300 rounded px-3 py-1.5 text-xs text-[#262626] font-medium outline-none cursor-pointer focus:border-[#262626]"
                >
                  <option value="default">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rating</option>
                  <option value="name">Product Name (A-Z)</option>
                </select>
              </div>
            </div>

            {/* PRODUCT GRID */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20 bg-gray-50 border border-dashed border-gray-300 rounded-2xl p-8">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-[#767676] text-2xl">
                  🔍
                </div>
                <h3 className="text-lg font-bold text-[#262626]">No products found</h3>
                <p className="text-xs text-[#767676] mt-1 max-w-sm mx-auto">
                  We couldn't find any products matching your current filter selection. Try adjusting your price, category, or search term.
                </p>
                <button
                  type="button"
                  onClick={handleResetAllFilters}
                  className="mt-6 px-6 py-2.5 bg-[#262626] text-white rounded text-xs font-bold uppercase tracking-wider hover:bg-black transition-colors cursor-pointer"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentProducts.map((product) => (
                  <Products
                    key={product.id}
                    id={product.id}
                    product={product}
                    ProductImg={product.image}
                    BT={product.badge}
                    ProductTittle={product.title}
                    ProductPrice={`$${product.price.toFixed(2)}`}
                    ProductColor={product.color}
                    location={`/shop?search=${encodeURIComponent(product.title)}`}
                  />
                ))}
              </div>
            )}

            {/* PAGINATION CONTROLS */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 pt-14">
                <button
                  type="button"
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className={`w-10 h-10 border rounded flex items-center justify-center text-xs font-bold transition-colors ${
                    currentPage === 1
                      ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                      : 'border-gray-300 text-[#262626] hover:bg-gray-100 cursor-pointer'
                  }`}
                >
                  &lt;
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  const isActive = currentPage === page;
                  return (
                    <button
                      key={page}
                      type="button"
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded text-xs font-bold transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-[#262626] text-white shadow-xs'
                          : 'border border-gray-300 text-[#767676] hover:text-black hover:border-black'
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}

                <button
                  type="button"
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className={`w-10 h-10 border rounded flex items-center justify-center text-xs font-bold transition-colors ${
                    currentPage === totalPages
                      ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                      : 'border-gray-300 text-[#262626] hover:bg-gray-100 cursor-pointer'
                  }`}
                >
                  &gt;
                </button>
              </div>
            )}
          </main>
        </div>
      </Container>
    </div>
  );
};

export default Shop;

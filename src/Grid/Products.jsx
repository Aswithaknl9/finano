import React, { useState } from 'react';
import Gridd from './Gridd';
import { products } from '../Js/products';
import Find from '../pages/Find';
import productPageLeftBg from '../assets/productPageLeftBg.webp';
import solutionPageBgRight from '../assets/solutionPageBgRight.webp';

const Products = () => {
  // State for search query
  const [searchQuery, setSearchQuery] = useState('');

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="bg-[#f7f7f7] pt-52 relative">
        {/* Top Left Image */}
        <img
          alt="Background Image"
          loading="lazy"
          width="777"
          height="auto"
          decoding="async"
          className="absolute top-0 left-0 z-10 overflow-hidden hidden lg:block h-auto"
          src={productPageLeftBg}
          style={{ color: 'transparent' }}
        />

        {/* Top Right Image */}
        <img
          alt="Background Image"
          loading="lazy"
          width="558"
          height="auto"
          decoding="async"
          className="absolute top-[60px] right-0 z-10 overflow-hidden hidden lg:block h-auto"
          src={solutionPageBgRight}
          style={{ color: 'transparent' }}
        />

        {/* Content Section */}
        <div className="xl:max-w-[1280px] container mx-auto px-4 relative z-20 h-full">
          <div className="section_header mb-14">
            <div className="md:max-w-[850px] w-full mx-auto text-center">
              <span className="text-[12px] font-semibold text-[#115E59] bg-[#CCFBF1] rounded-full py-1 px-3 mb-6">
                OUR PRODUCTS
              </span>
              <h1 className="text-[24px] sm:text-[28px] md:text-[38px] lg:text-[48px] font-semibold leading-tight mb-6">
                Explore All Our <span className="text-[#7c3aed] inline">Premium FinTech</span> Products
              </h1>
              <span className="leading-[26px] text-[#6b7280]">
                Explore our top-performing FinTech solutions, designed to revolutionize digital finance. Built with cutting-edge technologies like{' '}
                <span className="text-black font-semibold inline">PHP Laravel, Flutter, Next.js, and WordPress</span>, these products are trusted by businesses worldwide for their reliability, scalability, and innovative features.
              </span>
            </div>
          </div>

          {/* Products Count and Filters */}
          <div className="flex sm:flex-row flex-col lg:gap-0 gap-3 mx-auto items-center justify-between mb-8">
            <div className="sm:w-[40%] font-semibold text-[16px] sm:text-[18px] lg:text-[24px]">
              <h4>Total {filteredProducts.length} Products</h4>
            </div>
            <div className="flex items-end justify-between gap-3">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="example: QRPay"
                  className="primary__input !ps-10 py-3 px-5 rounded-md"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)} // Capture search input
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 16"
                  stroke="#7c3aed"
                  className="w-4 h-auto text-secondary__color absolute top-1/2 translate-y-[-50%] left-4"
                >
                  <path
                    d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.0005 14L11.1338 11.1333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <Gridd products={filteredProducts} /> {/* Pass filtered products to Gridd */}
        </div>
        
      </div>

      
    </>
  );
};

export default Products;

import React from 'react';
import Gridd from './Gridd';
import { products } from '../Js/products';

const Products = () => {
  return (
    <div className="bg-[#f7f7f7] pt-52 relative">
      {/* Top Left Image */}
      <img
        src="https://appdevs.net/_next/static/media/productPageLeftBg.321a9e4d.webp"
        alt="Left Background"
        className="absolute top-0 left-0 w-[500px] h-auto z-10"
      />
      
      {/* Top Right Image */}
      <img
        src="https://appdevs.net/_next/static/media/solutionPageBgRight.e134874f.webp"
        alt="Right Background"
        className="absolute top-0 right-0 w-[500px] h-auto z-10"
      />

      {/* Content Section */}
      <div className="relative flex items-center justify-center p-6 min-h-screen">
        <div className="xl:max-w-[1280px] container mx-auto px-4 relative z-20">
          {/* Section Header */}
          <div className="section_header mb-14 text-center">
            <div className="md:max-w-[850px] w-full mx-auto">
              <span className="text-[12px] font-semibold text-[#115e59] bg-[#ccfbf1] rounded-full py-1 px-3 mb-6 inline-block">
                OUR PRODUCTS
              </span>
              <h1 className="font-semibold mb-6 text-[48px]">
                Explore All Our 
                <span className="text-[#7c3aed]"> Premium FinTech </span> Products
              </h1>
              <p className="text-[#6b7280] text-[16px]">
                Explore our top-performing FinTech solutions, designed to revolutionize digital finance. Built with cutting-edge technologies like{' '}
                <span className="text-black font-semibold">PHP Laravel, Flutter, Next.js, and WordPress,</span>{' '}
                these products are trusted by businesses worldwide for their reliability, scalability, and innovative features.
              </p>
            </div>
          </div>

          {/* Products Count and Filters */}
          <div className="flex sm:flex-row flex-col lg:gap-0 gap-3 items-center justify-between mb-8 mx-16">
            <div className="sm:w-[40%]">
              <h4 className="text-[24px] font-semibold">
                Total {products.length} Products
              </h4>
            </div>

            <div className="flex items-center justify-end gap-3">
              <div className="relative w-full">
                <input
                  type="search"
                  placeholder="example: QRPay"
                  className="primary__input ps-10 p-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 16"
                  stroke="currentColor"
                  className="w-4 h-auto text-secondary__color absolute top-1/2 left-4 transform -translate-y-1/2"
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

              <div className="w-[230px]">
                <div className="basic-single w-full">
                  <select className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]">
                    <option value="best-selling">Best Selling</option>
                    <option value="new-arrivals">New Arrivals</option>
                    <option value="most-popular">Most Popular</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <Gridd />
        </div>
      </div>
    </div>
  );
};

export default Products;

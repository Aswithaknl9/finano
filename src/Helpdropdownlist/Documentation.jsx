import React from 'react';
import SearchInput from './SearchInput';
import ProductGrid from '../DocPages/ProductGrid';
import DocumentationCards from '../DocPages/DocumentationCards';

const Documentation = () => {
  return (
    <section className="pt-[180px] relative">
      {/* Background Images */}
      <img
        alt="Background Image"
        loading="lazy"
        width="795"
        height="777"
        decoding="async"
        className="absolute top-0 left-0 z-[-2] 2xl:block"
        src="https://appdevs.net/_next/static/media/calendlyPageBgLeft.ccdb273e.webp"
        style={{ color: 'transparent' }}
      />
      <img
        alt="Background Image"
        loading="lazy"
        width="558"
        height="799"
        decoding="async"
        className="absolute top-[60px] right-0 z-[-2] 2xl:block"
        src="https://appdevs.net/_next/static/media/calendlyPageBgRight.31f2046c.webp"
        style={{ color: 'transparent' }}
      />

      <div className="xl:max-w-[1280px] container mx-auto px-4">
        <div className="section_header mb-7 lg:mb-14">
          <div className="max-w-[850px] mx-auto text-center">
            <div className='mb-6'>
            <span className="text-[12px]  font-semibold text-[#115E59] bg-[#CCFBF1] rounded-full py-1 px-3">
              Documentation
            </span>
            </div>
            <div className="text-center">
              <h1 className="sm:text-[48px] leading-tight font-semibold ">Explore Our Products <br /> Documentation</h1>
            </div>
          </div>
        </div>
      </div>
      <SearchInput />
      <ProductGrid />
      <DocumentationCards />
    </section>
  );
};

export default Documentation;

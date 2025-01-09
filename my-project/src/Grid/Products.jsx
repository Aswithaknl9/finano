import React from 'react';
import solutionpap from '../assets/solutionPap.png';
import product from '../assets/product.png';
import Gridd from './Gridd';

const Products = () => {
  return (
    <div className="flex items-center justify-center p-6">
      <div className="flex items-center justify-between w-full max-w-6xl">
        
        <div className="flex flex-col items-center text-center mx-6 flex-grow">
          <h1 className="text-black font-semibold text-[40px] mb-4">
            Explore All Our <span className="text-[#7C3AED]">Premium FinTech</span> Products
          </h1>
          <p className="text-[#6B7280] max-w-3xl">
            Explore our top-performing FinTech solutions, designed to revolutionize digital finance. Built with cutting-edge technologies like <span className="text-black font-bold">PHP Laravel, Flutter, Next.js, and WordPress,</span> these products are trusted by businesses worldwide for their reliability, scalability, and innovative features.
          </p>
          <Gridd />
        </div>
        
      </div>
    </div>
  );
};

export default Products;

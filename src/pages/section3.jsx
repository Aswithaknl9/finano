import React from 'react';
import ProductGrid from './ProductGrid'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import ReviewSection from './ReviewSection'; 

const Section3 = () => {
  return (
    <div className="pb-40">
      <div className="flex flex-col items-center justify-center bg-gray-100 h-auto">
        <div className="mt-20 sm:mt-32 lg:mt-40">
          <h2 className="text-center text-xl sm:text-3xl lg:text-5xl font-semibold mb-8">
            Proud to Be an
            <span className="text-[#2974E7]"> Envato Elite Author.</span>
            <br />
            Discover Our Top <span className="text-[#7C3AED]">Products</span>
          </h2>
        </div>
        <ProductGrid />
        <div className="text-center mt-16">
          <Link to="/products" className="bg-[#2974E7] text-white py-2 px-5 lg:px-5 lg:py-3  rounded-lg text-lg font-semibold hover:bg-[#255ec3] transition">
            Explore More Products
            <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
          </Link>
          <div className="max-w-2xl mx-auto pt-20">
            <h2 className="text-center text-[24px]  sm:text-[28px] md:text-[30px] lg:text-[38px]  xl:text-[48px] font-semibold mb-8">
              Trusted by
              <span className="text-[#2974E7]"> 3500+ Clients </span>
              See What People Are Saying About Us
            </h2>
          </div>
          <ReviewSection />
        </div>

        {/* Updated Background Image Section */}
        <div 
          id="services" 
          className="relative px-6 sm:px-10 lg:px-20 py-12 sm:py-16 lg:py-20 rounded-[30px] z-10 text-center mt-[60px] bg-cover bg-center bg-backgroundimg"
          style={{ marginBottom: '-300px' }} 
        >

          {/* Second Background Image (Top-Left Corner) */}
          <div className="absolute inset-0 z-[-1]">
            <img 
              alt="call-to-action" 
              loading="lazy" 
              width="1248" 
              height="398" 
              decoding="async" 
              className="absolute top-0 left-0 object-cover w-full h-full opacity-70" 
              style={{ color: "transparent" }} 
              src="https://appdevs.net/_next/static/media/call-to-action-bg.c8db122f.webp"
            />
          </div>

          <div className="absolute top-0 right-0 z-[-1]">
            <img 
              alt="call-to-action" 
              loading="lazy" 
              width="417" 
              height="415" 
              decoding="async" 
              className="object-cover opacity-70" 
              style={{ color: "transparent" }} 
              src="https://appdevs.net/_next/static/media/call-to-action-element.251891da.webp"
            />
          </div>

          <div>
            <h2 className="xl:text-5xl md:text-4xl sm:leading-[85px] text-white lg:w-[70%] mx-auto mb-6 font-semibold">
              Turn Your FinTech App Idea Into Reality
            </h2>
            <div className="flex justify-center items-center">
              <a 
                className="bg-blue-600 hover:bg-blue-700 transition text-white py-3 px-6 rounded-lg font-medium shadow-md"
                href="/contact"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;

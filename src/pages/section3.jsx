import React from 'react';
import ProductGrid from './ProductGrid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Section3 = () => {
  return (
    <div className="pb-40">
      <div className="flex flex-col items-center justify-center bg-gray-100 h-auto">
        <div className="mt-40">
          <h2 className="text-center text-[45px] font-semibold mb-8">
            Proud to Be an
            <span className="text-[#2974E7]"> Envato Elite Author.</span>
            <br />
            Discover Our Top <span className="text-[#7C3AED]">Products</span>
          </h2>
        </div>
        <ProductGrid />
        <div className="text-center mt-16">
          <Link to="/products" className="bg-[#2974E7] text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-[#255ec3] transition">
            Explore More Products
            <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
          </Link>
          <div className="max-w-2xl mx-auto pt-10">
            <h2 className="text-center text-[36px] font-semibold mb-8">
              Trusted by
              <span className="text-[#2974E7]"> 3500+ Clients </span>
              See What People Are Saying About Us
            </h2>
          </div>
        </div>

        {/* Updated Background Image Section */}
        <div 
          id="services" 
          className="relative px-12 py-20 rounded-[30px] z-10 text-center mt-[60px] bg-cover bg-center bg-backgroundimg"
          style={{ marginBottom: '-300px' }} 
        >
          <h1 className="text-white lg:w-[900px] h-[140px] font-semibold text-[65px] mx-11 mb-6 mx-auto">
            Turn Your FinTech App <br /> Idea Into Reality
          </h1>

          {/* Second Background Image (Top-Left Corner) */}
          <div className="absolute top-0 left-0 z-[-1]">
            <img
              alt="call-to-action"
              loading="lazy"
              width="1248"
              height="398"
              decoding="async"
              className="object-cover"
              src="https://appdevs.net/_next/static/media/call-to-action-bg.c8db122f.webp"
            />
          </div>

          {/* Third Background Image (Top-Right Corner) */}
          <div className="absolute top-0 right-0 z-[-1]">
            <img
              alt="call-to-action-element"
              loading="lazy"
              width="417"
              height="415"
              decoding="async"
              className="object-cover"
              src="https://appdevs.net/_next/static/media/call-to-action-element.251891da.webp"
            />
          </div>

          {/* Contact Us Button */}
          <div className="flex justify-center items-center pt-14">
            <a className="primary__btn" href="/contact">
              <span className="py-3 inline-block border-box text-white bg-[#2974E7] rounded-md px-3 font-semibold">
                Contact Us
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;

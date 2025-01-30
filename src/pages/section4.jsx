import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Section4 = () => {
  return (
    <div className="m-6 sm:m-12 lg:m-16 pt-56">
      <div className="flex flex-col lg:flex-row gap-6 items-center">
        {/* Text Section */}
        <div className="lg:w-1/2 gap-6 text-center lg:text-left">
          <h1 className="text-[24px]  sm:text-[28px] md:text-[30px] lg:text-[38px]  xl:text-[48px] font-bold mb-4">
            Skilled <span className="text-[#2974E7]">Mobile App Developers</span> with a Passion for <span className="text-[#7c3aed]"> FinTech </span> Innovation
          </h1>
          <p className="text-[#6B7280] text-[14px] sm:text-[16px] lg:text-[16px] mb-8">
            Our team of skilled mobile app developers is dedicated to creating innovative FinTech solutions tailored to your needs. With expertise in secure, user-friendly financial applications, we help bring your vision to life.
          </p>
          <div className="text-left mt-6 sm:mt-8">
            <Link to="/about-us" className="bg-[#2974e7] text-white py-3 px-6 rounded-lg text-[16px] sm:text-[18px] font-semibold hover:bg-[#255ec3] transition">
              About Us
              <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center gap-6 relative mt-8 lg:mt-0">
          <svg width="152" height="152" viewBox="0 0 152 152" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[152px] h-[152px] text-primary__color absolute lg:right-[42%] sm:right-[40%] right-[5%] sm:top-5 top-[-15px] z-[-1]">
            <circle cx="76" cy="76" r="74.5" stroke="#8B5CF6" strokeWidth="3" />
          </svg>
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[52px] h-[52px] text-primary__color absolute lg:bottom-14 bottom-[-20px] end-1/4">
            <rect width="52" height="52" rx="14" fill="#2563EB" />
          </svg>

          {/* Desktop image (hidden on mobile) */}
          <img alt="About Image" className="mt-[80px] xl:w-[50%] lg:w-[250px] lg:block hidden mb-6" src="https://appdevs.net/_next/static/media/aboutSection.846d64c5.png" style={{ color: 'transparent' }} />

          {/* Mobile and Tablet Image (responsive to screen sizes) */}
          <img alt="About Image" className="lg:mb-[80px] xl:w-[50%] lg:w-[250px]  sm:w-full w-auto h-auto" src="https://appdevs.net/_next/static/media/aboutSection2.95dac0c4.png" style={{ color: 'transparent' }} />
        </div>
      </div>
    </div>
  );
};

export default Section4;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Section from './section';
import LogoImg from './logoimg';
import Section1 from './section1';

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen relative flex-col">
      <div>
        <img
          alt="Background Image"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover z-[-1]"
          src="https://appdevs.net/_next/static/media/bannerBg.787073cc.webp"
          style={{ color: 'transparent' }}
        />
        <div className="text-center max-w-2xl p-8 relative z-10">
          <span className="text-lg text-[#0E7490] bg-[#0E74901A] font-bold mb-12 rounded-lg text-[18px] px-3 py-1">
            Looking to Build FinTech Applications?
          </span>
          <h1 className="text-[60px] font-bold my-4">
            We Develop Next-Gen <span className="text-[#7C3AED]">FinTech Applications</span> for Business Growth
          </h1>
          <p className="text-gray-700 text-[20px] mb-6">
            AppDevs is a leading FinTech software development company specializing in building cutting-edge financial applications designed to drive business growth.
          </p>
          <a
            className="primary_btn inline-flex items-center justify-center bg-[#2974E7] text-white px-[12px] py-[10px] font-bold transition-all hover:bg-[#1d4ed8] rounded-lg"
            href="/consultation"
          >
            <span>Get Free Consultation</span>
            <div className="icon ml-[10px] stroke-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </a>
          <div className="mt-5 flex justify-center items-center space-x-2">
            <div className="w-9 h-9 rounded-full inline-flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.2" fill="none" viewBox="0 0 266 376" className="fill-[#87e64b] w-5 h-5">
                <path d="M150.3 375.8c9.3 0 16.8-7.5 16.8-16.8 0-9.3-7.5-16.8-16.8-16.8-9.3 0-16.8 7.5-16.8 16.8 0 9.3 7.5 16.8 16.8 16.8z" />
                <path d="M246.8 244.6l-94.6 10.1c-1.7 0.2-2.6-2-1.2-3.1l92.6-72.1c6-4.9 9.8-12.6 8.2-20.8-1.6-12.6-12-20.8-25.1-19.1l-100.6 14.7c-1.8 0.3-2.7-2-1.3-3.1l99.7-76.2c19.7-15.3 21.3-45.4 3.3-62.9-16.4-16.4-42.6-15.9-59 0.5l-160.9 163.7c-6 6.6-8.7 15.3-7.1 24.6 2.7 14.8 17.5 24.6 32.3 21.9l86.6-17.7c1.9-0.4 2.9 2.1 1.3 3.2l-96.1 61.5c-12 7.7-17.5 21.3-13.7 35 3.8 18 21.9 28.4 39.4 24.1l143.7-35.4c1.6-0.4 2.8 1.5 1.8 2.8l-22.4 27.7c-6 7.7 3.8 18 12 12l73.8-60.7c13.1-10.9 4.4-32.3-12.6-30.6z" />
              </svg>
            </div>
            <FontAwesomeIcon icon={faStar} style={{ color: "#f59e0b" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#f59e0b" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#f59e0b" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#f59e0b" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#f59e0b" }} />
            <span className="text-small__font text-color__heading font-bold">150+</span>
            <span className="text-small__font text-color__text">5 Stars</span>
          </div>
        </div>
      </div>
       <Section />

       <LogoImg />
       
       <Section1 />
    </div>
  );
};

export default Home;

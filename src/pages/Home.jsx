import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Section from './section';
import LogoImg from './logoimg';
import Section1 from './section1';
import Section2 from './section2';
import Section4 from './section4';
import Section5 from './section5';
import Section6 from './section6';
import Ection3 from './Ection3';
import { products } from '../Js/PPP';
import google from '../assets/Google_Icons.webp';
import Find from './Find';
import Lottie from 'lottie-react';
import wave from '../assets/waves.json';
import JumpingIcons from '../Animation/Newfile';
import JumpingIcons1 from '../Animation/Newfile2';

const Home = () => {
  return (
    <div>
      {/* Hero Section with Background Animation */}
      <div className="relative flex items-center justify-center min-h-screen flex-col pt-[10vh]">
        
        {/* Lottie Animation in the Background */}
        <div className="absolute inset-0 w-full h-full top-[-100px] flex items-center justify-between px-4 sm:px-10">
          <Lottie animationData={wave} loop={true} className="w-full h-full object-cover opacity-10 " />
          
          {/* Left Jumping Icon - Hidden on Mobile */}
          <div className="hidden sm:block absolute left-4 sm:left-10 top-1/2 transform -translate-y-1/2 z-10">
            <JumpingIcons />
          </div>

          {/* Right Jumping Icon - Hidden on Mobile */}
          <div className="hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
            <JumpingIcons1 />
          </div>

        </div>


        {/* Content Section on Top */}
        <div className="text-center sm:px-[16px] sm:max-w-2xl mx-auto relative z-10 bg-opacity-75 rounded-lg">
          <span className="text-[11px] sm:text-base text-[#0E7490] shadow-sm bg-[#0E74901A] font-medium mb-2 rounded-xl px-6 py-2 inline-block">
            Looking to Build Mobile Applications?
          </span>

          <h1 className="text-[30px] sm:text-[50px] lg:text-[55px] font-semibold leading-tight mb-5">
            We Develop Next-Gen <span className="text-[#7c3aed]">Mobile Applications</span> for Business Growth
          </h1>

          <p className="text-gray-700 text-sm sm:text-lg mb-6 tracking-normal">
            AppDevs is a leading FinTech software development company specializing in building cutting-edge financial applications designed to drive business growth.
          </p>

          {/* Call to Action Button */}
          <a
            className="inline-flex items-center justify-center bg-[#2974E7] text-white px-4 py-3 lg:py-3 sm:px-6 sm:py-2 font-bold transition-all hover:bg-[#1d4ed8] rounded-md text-sm sm:text-base"
            href="/consultation"
          >
            <span>Get Started Now</span>
            <div className="icon ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 sm:w-6 h-5 sm:h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </a>

          {/* Ratings Section */}
          <div className="mt-5 flex justify-center items-center space-x-1 text-[12px]">
            <div className="w-8 h-8 rounded-full flex justify-center bg-white items-center">
              <img src={google} alt="Google Logo" className="w-6 h-6" />
            </div>
            <FontAwesomeIcon icon={faStar} style={{ color: "#f59e0b" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#f59e0b" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#f59e0b" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#f59e0b" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#f59e0b" }} />
            <span className="text-xs sm:text-sm font-bold">80+</span>
            <span className="text-xs sm:text-sm text-gray-500">5 Stars</span>
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <Section />
      <LogoImg />
      <Section1 />
      <Section2 />
      <div>
        <Ection3 title="Proud to Be an" subtitle="Products" products={products} />
      </div>
      <Find />
      <Section4 />
      <Section5 />
      <Section6 />
    </div>
  );
};

export default Home;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import banner from '../assets/bannerBg.png'
import Section from './section';
import LogoImg from './logoimg';
import Section1 from './section1';
import Section2 from './section2';
import Section4 from './section4';
import Section5 from './section5';
import Section6 from './section6';
import Ection3 from './Ection3';
import { products } from '../Js/PPP';



const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="flex items-center justify-center min-h-screen relative flex-col pt-[10vh] bg-cover bg-center "
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="text-center  sm:px-[16px]  sm:max-w-2xl  mx-auto relative z-10 bg-opacity-75 rounded-lg">
         
          <span className="text-[11px] sm:text-base text-[#0E7490] shadow-sm  bg-[#0E74901A] font-medium mb-2 rounded-xl px-6 py-2 inline-block">
            Looking to Build FinTech Applications?
          </span>

         
          <h1 className="text-[30px] sm:text-[50px]  lg:text-[55px] font-semibold leading-tight mb-5">
            We Develop Next-Gen <span className="text-[#7c3aed]">FinTech Applications</span> for Business Growth
          </h1>

          
          <p className="text-gray-700 text-sm sm:text-lg mb-6 tracking-normal">
            AppDevs is a leading FinTech software development company specializing in building cutting-edge financial applications designed to drive business growth.
          </p>

          {/* Call to Action Button */}
          <a
            className="inline-flex items-center justify-center bg-[#2974E7] text-white px-4 py-3 lg:py-3 sm:px-6 sm:py-2 font-bold transition-all hover:bg-[#1d4ed8] rounded-md text-sm sm:text-base"
            href="/consultation"
          >
            <span>Get Free Consultation</span>
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
          <div className="mt-5 flex justify-center items-center space-x-1 text-[12px] ">
            <div className="w-8 h-8 rounded-full flex justify-center  bg-white items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 266 376"
                className="fill-[#87e64b] w-4 sm:w-5 h-4 sm:h-5"
              >
                <path d="M150.3 375.8c9.3 0 16.8-7.5 16.8-16.8 0-9.3-7.5-16.8-16.8-16.8-9.3 0-16.8 7.5-16.8 16.8 0 9.3 7.5 16.8 16.8 16.8z" />
                <path d="M246.8 244.6l-94.6 10.1c-1.7 0.2-2.6-2-1.2-3.1l92.6-72.1c6-4.9 9.8-12.6 8.2-20.8-1.6-12.6-12-20.8-25.1-19.1l-100.6 14.7c-1.8 0.3-2.7-2-1.3-3.1l99.7-76.2c19.7-15.3 21.3-45.4 3.3-62.9-16.4-16.4-42.6-15.9-59 0.5l-160.9 163.7c-6 6.6-8.7 15.3-7.1 24.6 2.7 14.8 17.5 24.6 32.3 21.9l86.6-17.7c1.9-0.4 2.9 2.1 1.3 3.2l-96.1 61.5c-12 7.7-17.5 21.3-13.7 35 3.8 18 21.9 28.4 39.4 24.1l143.7-35.4c1.6-0.4 2.8 1.5 1.8 2.8l-22.4 27.7c-6 7.7 3.8 18 12 12l73.8-60.7c13.1-10.9 4.4-32.3-12.6-30.6z" />
              </svg>
            </div>
            <FontAwesomeIcon icon={faStar} style={{ color: "#f59e0b" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#f59e0b" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#f59e0b" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#f59e0b" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#f59e0b" }} />
            <span className="text-xs sm:text-sm font-bold">150+</span>
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
      <Ection3
        title="Proud to Be an"
        subtitle="Products"
        products={products} 
      />
    </div>
      <Section4 />
      <Section5 />
      <Section6 />
    </div>
  );
};

export default Home;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import SolutionsFin1 from '../WebPages/SolutionsFin1';
import FinTechInnovation2 from '../WebPages/FinTechInnovation2';
import Startbusiness112 from '../WebPages/Startbusiness112';
import MobileAppDevelopment1 from '../WebPages/MobileAppDevelopment1';
import Questions2 from '../WebPages/Questions2';

const WebDevelopment = () => {
  return (
    <section className="relative pt-[50px]">
      <div
        className="bg-cover bg-no-repeat bg-left-top flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://appdevs.net/_next/static/media/servicePageBgLeft.292df356.webp), url(https://appdevs.net/_next/static/media/servicePageBgRight.e134874f.webp)',
          backgroundPosition: 'left top, right top',
          backgroundSize: 'contain',
          height: '600px',
        }}
      >
        <div className="text-center max-w-[1200px] mx-auto p-8 z-10">
          <span className="text-[#115E59] bg-[#CCFBF1] rounded-full shadow-sm text-xs px-3 py-1 font-semibold mb-6 inline-block">
          Web Development
          </span>
          <h1 className="text-xl md:text-5xl font-semibold text-gray-900 mb-6">
          Web Development Services to Build High-Performing Digital Solutions
          </h1>
          <p className="text-gray-600 text-sm md:text-base mb-6">
          Transform your business with cutting-edge web development services tailored to meet your specific needs. Our expertise ensures scalable, secure, and user-friendly websites and applications that drive growth and deliver exceptional user experiences.
          </p>
          <div className="flex justify-center">
            <a
              className="bg-[#2974E7] text-white font-semibold px-6 py-2 rounded-md flex items-center hover:bg-[#1E40AF] transition duration-300"
              href="/consultation"
              aria-label="Get Free Consultation"
            >
              Get Free Consultation
              <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-sm" />
            </a>
          </div>
        </div>
      </div>
      <SolutionsFin1 />
      <FinTechInnovation2 />
      <Startbusiness112 />
      <MobileAppDevelopment1 />
      <Questions2 />
    </section>
  );
};

export default WebDevelopment;

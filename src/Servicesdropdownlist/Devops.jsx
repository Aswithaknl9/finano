import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Startbusiness115 from '../CloudPages/Startbusiness115';
import SolutionsFin6 from '../DevopsPages/SolutionsFin6';
import FinTechInnovation6 from '../DevopsPages/FinTechInnovation6';
import MobileAppDevelopment5 from '../DevopsPages/MobileAppDevelopment5';
import Questions6 from '../DevopsPages/Questions6';

const Devops = () => {
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
          DevOps Services
          </span>
          <h1 className="text-xl md:text-5xl font-semibold text-gray-900 mb-6">
          DevOps Services to Accelerate Software Delivery and Enhance Operational Efficiency
          </h1>
          <p className="text-gray-600 text-sm md:text-base mb-6">
          Transform your development and operations processes with our expert DevOps solutions. We enable businesses to achieve seamless integration, faster delivery, and superior scalability while ensuring robust security and reliability.
          </p>
          <div className="flex justify-center">
            <a
              className="bg-[#2974E7] text-white font-semibold px-6 py-2 rounded-md flex items-center hover:bg-[#1E40AF] transition duration-300"
              href="/consultation"
              aria-label="Get Free Consultation"
            >
              Start Your DevOps Journey Today
              <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-sm" />
            </a>
          </div>
        </div>
      </div>
      <SolutionsFin6 />
      <FinTechInnovation6 />
      <Startbusiness115 />
      <MobileAppDevelopment5 />
      <Questions6 />
    </section>
  );
};

export default Devops;

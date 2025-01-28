import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import SolutionsFin34 from '../QualityPages/SolutionsFin34';
import FinTechInnovation4 from '../QualityPages/FinTechInnovation4';
import Startbusiness114 from '../QualityPages/Startbusiness114';
import MobileAppDevelopment3 from '../QualityPages/MobileAppDevelopment3';
import Questions4 from '../QualityPages/Questions4';

const Quality = () => {
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
          Quality Assurance Testing
          </span>
          <h1 className="text-xl md:text-5xl font-semibold text-gray-900 mb-6">
          Software Quality Assurance and Testing Services to Ensure Perfection
          </h1>
          <p className="text-gray-600 text-sm md:text-base mb-6">
          Deliver flawless software products with our comprehensive Quality Assurance (QA) and Testing services. We help you identify bugs, optimize performance, and enhance user experiences to ensure your software meets the highest quality standards.
          </p>
          <div className="flex justify-center">
            <a
              className="bg-[#2974E7] text-white font-semibold px-6 py-2 rounded-md flex items-center hover:bg-[#1E40AF] transition duration-300"
              href="/consultation"
              aria-label="Get Free Consultation"
            >
              Achieve Software Excellence with Expert QA Services
              <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-sm" />
            </a>
          </div>
        </div>
      </div>
      <SolutionsFin34 />
      <FinTechInnovation4 />
      <Startbusiness114 />
      <MobileAppDevelopment3 />
      <Questions4 />
    </section>
  );
};

export default Quality;

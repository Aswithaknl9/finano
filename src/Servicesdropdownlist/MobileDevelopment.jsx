import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Questions from '../ServicesPages/Questions';
import SolutionsFin from '../ServicesPages/SolutionsFin';
import FinTechInnovation1 from '../Mobiledevpages/FinTechInnovation1';
import MobileAppDevelopment from '../Mobiledevpages/MobileAppDevelopment';
import Startbusiness111 from '../Mobiledevpages/Startbusiness111';
import Questions1 from '../Mobiledevpages/Questions1';

const MobileDevelopment = () => {
  return (
    <section className="relative">
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
          Mobile App Development
          </span>
          <h1 className="text-xl md:text-6xl font-semibold text-gray-900 mb-6">
          Custom Mobile Application Development Services to Transform Your Business </h1>
          <p className="text-gray-600 text-sm md:text-base mb-6">
          Empower your business with innovative, user-friendly mobile applications tailored to your needs. We specialize in developing high-performance apps for iOS, Android, and cross-platform environments to help you stay ahead in the competitive mobile landscape.

          </p>
          <div className="flex justify-center">
            <a
              className="bg-[#2974E7] text-white font-semibold px-6 py-2 rounded-md flex items-center hover:bg-[#1E40AF] transition duration-300"
              href="/consultation"
              aria-label="Get Free Consultation"
            >
              Turn Your App Idea Into Reality
              <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-sm" />
            </a>
          </div>
        </div>
      </div>
      <SolutionsFin />
      <FinTechInnovation1 />
      <Startbusiness111 />
      <MobileAppDevelopment />
      <Questions1 />
    </section>
  );
};

export default MobileDevelopment;

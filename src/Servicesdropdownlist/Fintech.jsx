import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import FinTechSolutions from '../ServicesPages/FinTechSolutions';
import FinTechInnovation from '../ServicesPages/FinTechInnovation';
import Startbusineess from '../ServicesPages/Startbusineess';
import WhyPartnerWithUs from '../ServicesPages/WhyPartnerWithUs';
import Questions from '../ServicesPages/Questions';

const Fintech = () => {
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
        <div className="text-center max-w-[700px] mx-auto p-8 z-10">
          <span className="text-[#115E59] bg-[#CCFBF1] rounded-full shadow-sm text-xs px-3 py-1 font-semibold mb-6 inline-block">
          Custom FinTech Development
          </span>
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
          Custom FinTech Development to Optimize Financial Operations
          </h1>
          <p className="text-gray-600 text-sm md:text-base mb-6">
          Empowering businesses with custom-built FinTech development designed to streamline operations, enhance user experiences, and drive growth.
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
      <FinTechSolutions />
      <FinTechInnovation />
      <Startbusineess />
      <WhyPartnerWithUs />
      <Questions />
    </section>
  );
};

export default Fintech;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import SolutionsFin2 from '../UidesignPages/SolutinsFin2';
import FinTechInnovation3 from '../UidesignPages/FinTechInnovation3';
import Startbusiness113 from '../UidesignPages/Startbusiness113';
import MobileAppDevelopment2 from '../UidesignPages/MobileAppDevelopment2';
import Questions3 from '../UidesignPages/Question3';

const Uidesign = () => {
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
          UI/UX Design
          </span>
          <h1 className="text-xl md:text-5xl font-semibold text-gray-900 mb-6">
          UI/UX and SaaS Design Services to Transform Digital Experiences
          </h1>
          <p className="text-gray-600 text-sm md:text-base mb-6">
          Elevate your digital presence with intuitive and visually stunning designs. Our UI/UX and SaaS design services create user-centric interfaces that drive engagement, enhance usability, and deliver seamless experiences across platforms.
          </p>
          <div className="flex justify-center">
            <a
              className="bg-[#2974E7] text-white font-semibold px-6 py-2 rounded-md flex items-center hover:bg-[#1E40AF] transition duration-300"
              href="/consultation"
              aria-label="Get Free Consultation"
            >
              craft Exceptional Digital Experiences with Expert Design Solutions
              <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-sm" />
            </a>
          </div>
        </div>
      </div>
      <SolutionsFin2 />
      <FinTechInnovation3 />
      <Startbusiness113 />
      <MobileAppDevelopment2 />
      <Questions3 />
    </section>
  );
};

export default Uidesign;

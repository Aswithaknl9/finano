import React from 'react';
import FutsalSection from '../LifPages/FutsalSection';
import WorkFromTour from '../LifPages/WorkFromTour';
import CallToAction from '../LifPages/CallToAction';

const Lifeappdevs = () => {
  return (
    <section className="pt-[180px] relative">
      {/* Background Images */}
      <img
        alt="Background Image"
        loading="lazy"
        width="795"
        height="777"
        decoding="async"
        data-nimg="1"
        className="absolute top-0 left-0 z-[-2] 2xl:block"
        src="https://appdevs.net/_next/static/media/solutionPageBgLeft.292df356.webp"
        style={{ color: 'transparent' }}
      />
      <img
        alt="Background Image"
        loading="lazy"
        width="558"
        height="799"
        decoding="async"
        data-nimg="1"
        className="absolute top-[60px] right-0 z-[-2] 2xl:block"
        src="https://appdevs.net/_next/static/media/solutionPageBgRight.e134874f.webp"
        style={{ color: 'transparent' }}
      />

      <div className="xl:max-w-[1232px] container mx-auto text-center px-4">
        {/* Label */}
        <span className="text-[12px] font-semibold text-[#115E59] bg-[#CCFBF1] rounded-full py-1 px-3 mb-4 lg:mb-6">
          Life at AppDevs
        </span>

        {/* Heading */}
        <h1 className="mb-5 mt-7 font-bold text-5xl lg:mb-7">
          Code Hard, <span className="text-[#7c3aed] inline">Play Harder</span>
        </h1>

        {/* Description */}
        <span className="lg:w-[65%] heading-5 text-[#6b7280] leading-[28px]">
          At AppDevs, we believe in blending passion, work, and life experiences to create a unique and fulfilling journey for our team. From innovative work initiatives to bonding activities that bring everyone together, life here is more than just work—it’s about creating stories and memories that inspire.
        </span>

        {/* Button Centered */}
        <div className="flex justify-center mt-7 lg:mt-10">
          <a
            className="inline-flex items-center justify-center bg-[#2974E7] text-white px-4 py-2 sm:px-6 sm:py-3 font-bold transition-all hover:bg-[#1d4ed8] rounded-lg text-sm sm:text-base"
            href="/join-our-team"
          >
            <span>Join Our Team</span>
            <div className="icon ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 sm:w-6 h-5 sm:h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </a>
        </div>
      </div>
      <FutsalSection />
      <WorkFromTour />
      <CallToAction />
    </section>
  );
};

export default Lifeappdevs;

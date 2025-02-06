import React from 'react';
import TechnologyStack from '../mbsPages/TechnologyStack';
import BenefitsSection from '../mbsPages/BenefitsSection';
import CallToActionSection from '../mbsPages/CallToActionSection';
import Bankingcard3 from '../paymentPages/Bankingcard3';
import RevenueStrategies3 from '../paymentPages/RevenueStrategies3';
import StartBusiness3 from '../paymentPages/StartBusiness3';
import ProductSection3 from '../paymentPages/ProductSection3';
import RequirementsSection3 from '../paymentPages/RequriementsSection3';
import bgLeft from '../assets/solutionPageBgLeft.webp';
import bgRight from '../assets/solutionPageBgRight.webp';
import KeyFeatures from '../paymentPages/KeyFeatures';

const paymentgateway = () => {
  return (
    <section className="pt-[180px] relative">
      {/* Background Images */}
      <img
        alt="Background Image"
        loading="lazy"
        width="795"
        height="777"
        className="absolute top-0 left-0 z-[-2] lg:w-auto w-[50%] hidden lg:block"
        src={bgLeft}
      />
      <img
        alt="Background Image"
        loading="lazy"
        width="558"
        height="799"
        className="absolute top-[60px] right-0 z-[-2] lg:w-auto w-[30%] hidden lg:block"
        src={bgRight}
      />

      {/* Content Container */}
      <div className="xl:max-w-[1032px] container mx-auto px-4 text-center">
        
        {/* Tagline */}
        <span className="text-[12px] font-semibold text-[#115E59] bg-[#CCFBF1] rounded-full py-1 px-3 mb-6 inline-block">
          PAYMENT GATEWAY SOLUTIONS
        </span>

        {/* Heading */}
        <h1 className="mb-4 text-[30px] sm:text-[38px] md:text-[48px]  lg:text-[72px] font-semibold leading-tight">
          Secure and Scalable White-Label Payment Gateway Solutions
        </h1>

        {/* Description */}
        <p className="w-[80%] mx-auto lg:text-lg lg:leading-[30px] text-gray-700">
          Our Payment Gateway Solutions deliver reliable, secure, and efficient transaction processing 
          for businesses of all sizes. Designed to simplify online payments, it integrates with multiple 
          platforms, supports various payment methods, and ensures compliance with global standards. 
          Empower your business to accept payments worldwide, enhance customer trust, and maximize revenue effortlessly.
        </p>

        {/* CTA Buttons */}
        <div className="md:mt-10 mt-8 flex sm:flex-row flex-col items-center justify-center sm:space-x-3 sm:space-y-0 space-y-3">
          
          {/* Primary Button */}
          <a
            href="/consultation"
            className="bg-blue-600 hover:bg-blue-500 transition duration-300 px-6 py-3 text-white text-sm font-semibold rounded-lg flex items-center justify-center shadow-lg"
          >
            Get Free Consultation
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 ml-2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path>
            </svg>
          </a>

          {/* Secondary Button */}
          <a
            href="#product"
            className="border border-blue-600 text-blue-600 hover:bg-[#7c3aed] hover:border-transparent hover:text-white transition duration-300 px-6 py-3 text-sm font-medium rounded-lg flex items-center justify-center shadow-md"
          >
            See Product on Payment Gateway
          </a>

        </div>   
       </div>
      
        <Bankingcard3 />
      
      <KeyFeatures />

      <RevenueStrategies3 />
      <StartBusiness3 />
      <RequirementsSection3 />
      <TechnologyStack />
      <ProductSection3 />
      <BenefitsSection />
      <CallToActionSection />
    </section>
  );
};

export default paymentgateway;

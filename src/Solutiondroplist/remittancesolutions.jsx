import React from 'react';
import TechnologyStack from '../mbsPages/TechnologyStack';
import ProductSection1 from '../remitPages/ProductSection1';
import BenefitsSection from '../mbsPages/BenefitsSection';
import CallToActionSection from '../mbsPages/CallToActionSection';
import Bankingcard1 from '../remitPages/Bankingcard1';
import RevenueStrategies1 from '../remitPages/RevenueStrategies1';
import StartBusiness1 from '../remitPages/Startbusiness1';
import RequirementsSection1 from '../remitPages/RequirementsSection1';
import solutionPageBgLeft from '../assets/solutionPageBgLeft.webp';
import solutionPageBgRight from '../assets/solutionPageBgRight.webp';
import KeyFeatures from '../remitPages/KeyFeatures';

const remittancesolutions = () => {
  return (
    <section className="pt-[180px] relative">
      {/* Background Images */}
      <img 
        alt="Background Image" 
        loading="lazy" 
        width="795" 
        height="777" 
        className="absolute top-0 left-0 z-[-2] lg:w-auto w-[50%] hidden lg:block" 
        src={solutionPageBgLeft}
      />
      <img 
        alt="Background Image" 
        loading="lazy" 
        width="558" 
        height="799" 
        className="absolute top-[60px] right-0 z-[-2] lg:w-auto w-[30%] hidden lg:block" 
        src={solutionPageBgRight}
      />

      {/* Content Container */}
      <div className="xl:max-w-[1032px] container mx-auto px-4 text-center">
        
        {/* Badge */}
        <span className="text-[12px] font-semibold text-[#115E59] bg-[#CCFBF1] rounded-full py-1 px-3 mb-6 inline-block">
          REMITTANCE SOLUTIONS
        </span>

        {/* Title */}
        <h1 className="mb-4 text-[30px] sm:text-[38px] md:text-[48px]  lg:text-[72px] font-semibold leading-tight">
          Empowering Seamless Global Money Transfers
        </h1>

        {/* Description */}
        <p className="w-[80%] mx-auto text-[#6b7280] text-[14px] md:text-[16px] lg:text-[16px]">
          Unlock the future of international remittance with our cutting-edge Cross Border Remittance Solutions. 
          Designed to simplify global transactions, our solution ensures fast, secure, and cost-effective money transfers 
          for individuals, businesses, and financial institutions. Elevate your financial operations, meet compliance effortlessly, 
          and provide an unmatched experience to your users.
        </p>

        {/* Buttons */}
        <div className="md:mt-10 mt-8 flex sm:flex-row flex-col items-center justify-center sm:space-x-3 sm:space-y-0 space-y-3">
          
          {/* Primary Button */}
          <a 
            href="/consultation" 
            className="bg-blue-600 hover:bg-blue-500 transition duration-300 px-6 py-3 text-white text-sm font-medium rounded-lg flex items-center justify-center shadow-lg"
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
            See Product on Mobile Banking
          </a>

        </div>
      </div>
    
      <Bankingcard1 />
      <KeyFeatures />
      <RevenueStrategies1 />
      <StartBusiness1 />
      <RequirementsSection1 />
      <TechnologyStack />
      <ProductSection1 />
      <BenefitsSection />
      <CallToActionSection />
    </section>
  );
};

export default remittancesolutions;

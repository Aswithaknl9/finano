import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Bankingcard from '../mbsPages/Bankingcard';
import ForBankAdmins from '../mbsPages/ForBankAdmins';
import ForEndUsers from '../mbsPages/ForEndUsers';
import RevenueStrategies from '../mbsPages/RevenueStrategies';
import Startbusiness from '../mbsPages/startbusiness';
import RequirementsSection from '../mbsPages/RequirementsSection';
import TechnologyStack from '../mbsPages/TechnologyStack';
import ProductSection from '../mbsPages/ProductSection';
import BenefitsSection from '../mbsPages/BenefitsSection';
import CallToActionSection from '../mbsPages/CallToActionSection';
import solutionLeftPage from '../assets/solutionPageBgLeft.webp';
import solutionRightPage from '../assets/solutionPageBgRight.webp';

const MobileBankSolution = () => {
  return (
    <section class="pt-[180px] relative">
  
  <img 
    alt="Background Image Left" 
    loading="lazy" 
    width="795" 
    height="777" 
    decoding="async" 
    class="absolute top-0 left-0 z-[-2] hidden lg:block" 
    src={solutionLeftPage}
  />
  <img 
    alt="Background Image Right" 
    loading="lazy" 
    width="558" 
    height="799" 
    decoding="async" 
    class="absolute top-[60px] right-0 z-[-2] hidden lg:block" 
    src={solutionRightPage}
  />
  
  
  <div class="container mx-auto px-4 text-center xl:max-w-[1032px]">
    <span class="text-[12px] font-semibold text-[#115E59] bg-[#CCFBF1] rounded-full py-1 px-3 mb-6 inline-block">
      DIGITAL MOBILE BANKING SOLUTIONS
    </span>
    
    <h1 class="mb-4 text-[30px] md:text-[48px]  lg:text-[72px] font-semibold leading-tight">
      A Comprehensive Guide to Mobile Banking Solutions
    </h1>
    
    <p class="w-[90%] md:w-[80%] mx-auto text-[#6b7280] text-[14px] md:text-[16px] lg:text-[16px] leading-relaxed">
      This guide explores the fundamentals of mobile banking solutions, including their key features, the problems they solve, profitability strategies for banks and entrepreneurs, and the necessary steps for launching a mobile banking platform.
    </p>
    
   
    <div class="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-3">
      <a class="font-semibold bg-[#2974E7] text-white py-3 px-6 rounded-lg flex items-center space-x-2" href="/consultation">
        <span>Get Free Consultation</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path>
        </svg>
      </a>
      
      <a class="font-semibold border border-[#2974E7] text-[#2974E7] py-3 px-6 rounded-lg hover:bg-[#7c3aed] hover:text-white transition-all duration-300 hover:border-transparent" href="#product">
        See Product on Mobile Banking
      </a>
    </div>
    </div>
  
      {/* Problem Solution Section */}

        <Bankingcard />
      

      {/* Key Features Section */}
      <section className="pt-[130px]">
      <div className="xl:max-w-[1280px] container mx-auto px-4">
      <div className="section_header lg:mb-12 mb-8">
          <div className="max-w-[775px] mx-auto text-center">
            <h2 className="mb-4 text-[24px] sm:text-[28px] md:text-[38px]  lg:text-[48px] font-semibold leading-tight">
              Key Features of a Robust Mobile{" "}
              <span className="text-[#7c3aed] inline">Banking Solution</span>
            </h2>
            <p className='text-[14px] md:text-[16px] lg:text-[16px] text-[#6b7280]'>
              A comprehensive mobile banking platform should cater to both administrative
              needs for the bank and functional needs for the end users, ensuring a secure
              and user-friendly experience for all.
            </p>
          </div>
        </div>
        <div className="container mx-auto p-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <ForBankAdmins />
            <ForEndUsers />
          </div>
        </div>
        </div>
      </section>

      {/* Revenue Strategies Section */}
     
      <RevenueStrategies />

      <Startbusiness />
      <RequirementsSection />
      <TechnologyStack />
      <ProductSection />
      <BenefitsSection />
      <CallToActionSection />
    </section>
  );
};

export default MobileBankSolution;

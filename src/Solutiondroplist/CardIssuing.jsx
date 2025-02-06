import React from 'react';
import TechnologyStack from '../mbsPages/TechnologyStack';
import BenefitsSection from '../mbsPages/BenefitsSection';
import CallToActionSection from '../mbsPages/CallToActionSection';
import RevenueStrategies5 from '../Cardissuingpages/RevenueStrategies5';
import StartBusiness5 from '../Cardissuingpages/StartBusiness5';
import RequirementsSection5 from '../Cardissuingpages/RequirementsSection5';
import ProductSection5 from '../Cardissuingpages/ProductSection5';
import solutionPageBgLeft from '../assets/solutionPageBgLeft.webp';
import solutionPageBgRight from '../assets/solutionPageBgRight.webp';
import Bankingcard5 from '../Cardissuingpages/Bankingcard5';
import KeyFeatures from '../Cardissuingpages/KeyFeatures';

const CardIssuing = () => {
  return (
    <section className="pt-[180px] relative">
      <img
        alt="Background Image"
        loading="lazy"
        width="795"
        height="777"
        decoding="async"
        className="absolute top-0 left-0 z-[-2] lg:w-auto w-[50%] hidden lg:block"
        src={solutionPageBgLeft}
        style={{ color: "transparent" }}
      />
      <img
        alt="Background Image"
        loading="lazy"
        width="558"
        height="799"
        decoding="async"
        className="absolute top-[60px] right-0 z-[-2] lg:w-auto w-[30%] hidden lg:block"
        src={solutionPageBgRight}
        style={{ color: "transparent" }}
      />
      <div className="xl:max-w-[1200px] container mx-auto px-4 text-center">
        
        <span className="text-[12px] font-semibold text-[#115E59] bg-[#CCFBF1] rounded-full py-1 px-3 mb-6 inline-block">
        CARD ISSUING SOLUTIONS
        </span>

        <h1 className="mb-4 text-[30px] sm:text-[38px] md:text-[48px]  lg:text-[72px] font-semibold leading-tight">
        Empower Businesses with Secure and Advanced Card Issuing Solutions
        </h1>

        <span className="block mx-auto text-[#6b7280] lg:w-[80%] lg:text-heading__five lg:leading-[30px]">
        Provide customers with instant, secure, and customizable virtual cards for online and in-store transactions. Designed with cutting-edge technology, our Virtual Card Issuing Solution streamlines digital payments, enhances user control, and ensures robust security, helping financial institutions and businesses offer modern, convenient payment solutions.
        </span>

        <div className="md:mt-10 mt-8 flex sm:flex-row flex-col items-center justify-center sm:space-x-3 sm:space-y-0 space-y-3">
        {/* Primary Button - Blue Background */}
        <a className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-semibold rounded-md transition duration-300" href="/consultation">
          <span>Get Free Consultation</span>
          <div className="icon ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </a>

        {/* Secondary Button - Gray Background */}
        <a className=" border border-blue-600 hover:bg-[#7c3aed] hover:text-white text-blue-600 hover:border-transparent font-semibold  px-6 py-3 rounded-md transition duration-300" href="#product">
        See Product on Card Issuing
        </a>
      </div>

      </div>
     
     <Bankingcard5 />
      <KeyFeatures />
      <RevenueStrategies5 />
      <StartBusiness5 />
      <RequirementsSection5 />
      <TechnologyStack />
      <ProductSection5 />
      <BenefitsSection />
      <CallToActionSection />
    </section>
  );
};

export default CardIssuing;

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

const MobileBankSolution = () => {
  return (
    <section className="pt-24 relative">
      {/* Header Section */}
      <div
        className="bg-cover bg-no-repeat flex items-center justify-center px-6 md:px-12"
        style={{
          backgroundImage: 'url(https://appdevs.net/_next/static/media/servicePageBgLeft.292df356.webp), url(https://appdevs.net/_next/static/media/servicePageBgRight.e134874f.webp)',
          backgroundPosition: 'left top, right top',
          backgroundSize: 'contain',
          minHeight: '500px',
        }}
      >
        <div className="text-center max-w-2xl mx-auto p-6">
          <span className="text-[#115E59] bg-[#CCFBF1] rounded-full text-xs px-3 py-1 font-semibold mb-4 inline-block">
            DIGITAL MOBILE BANKING SOLUTIONS
          </span>
          <h1 className="text-3xl md:text-5xl font-semibold md:mb-6">
            A Comprehensive Guide to Mobile Banking Solutions
          </h1>
          <p className="text-[#6B7280] text-sm md:text-base mb-6">
            This guide explores the fundamentals of mobile banking solutions, including key features, profitability strategies for banks and entrepreneurs, and the necessary steps for launching a mobile banking platform.
          </p>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center">
            <a 
              className="bg-[#2974E7] text-white font-semibold px-6 py-2 rounded-md text-center hover:bg-[#1E40AF] transition duration-300 flex items-center justify-center"
              href="/consultation"
              aria-label="Get Free Consultation"
            >
              Get Free Consultation <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-sm" />
            </a>
            <a 
              className="border-2 border-[#2974E7] text-[#2974E7] font-semibold px-6 py-2 rounded-md text-center hover:bg-[#7C3AED] hover:border-[#7C3AED] hover:text-white transition duration-300" 
              href="#product"
              aria-label="See Product on Mobile Banking"
            >
              See Product on Mobile Banking
            </a>
          </div>
        </div>
      </div>

      {/* Problem Solution Section */}
      <section className="pt-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-semibold mb-4">
            What Problems Does a Mobile Banking Solution Solve?
          </h1>
        </div>
        <Bankingcard />
      </section>

      {/* Key Features Section */}
      <section className="pt-14 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-semibold mb-4">
            Key Features of a Robust <span className="text-[#7C3AED]">Banking Solution</span>
          </h1>
          <p className="text-[#6B7280] text-sm md:text-base">
            A comprehensive mobile banking platform should cater to both administrative needs for the bank and functional needs for the end users, ensuring a secure and user-friendly experience for all.
          </p>
        </div>
        <div className="container mx-auto p-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <ForBankAdmins />
            <ForEndUsers />
          </div>
        </div>
      </section>

      {/* Revenue Strategies Section */}
      <section className="pt-14 px-6">
        <div className="max-w-4xl mx-auto text-center bg-[#EBF2FD] rounded-3xl p-6">
          <h1 className="text-3xl md:text-5xl font-semibold mb-4">
            How Can Bank Owners Generate Profit from a <span className="text-[#7C3AED]">Mobile Banking Solution?</span>
          </h1>
          <RevenueStrategies />
        </div>
      </section>

      {/* Additional Sections */}
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

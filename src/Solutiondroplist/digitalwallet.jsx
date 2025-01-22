import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import TechnologyStack from '../mbsPages/TechnologyStack';
import ProductSection1 from '../remitPages/ProductSection1';
import BenefitsSection from '../mbsPages/BenefitsSection';
import CallToActionSection from '../mbsPages/CallToActionSection';
import Bankingcard2 from '../digitalPages/Bankingcard2';
import AdminsFeatures from '../remitPages/AdminsFeatures';
import UIFeatures from '../remitPages/UIFeatures';
import RevenueStrategies1 from '../remitPages/RevenueStrategies1';
import StartBusiness1 from '../remitPages/Startbusiness1';
import RequirementsSection1 from '../remitPages/RequirementsSection1';
import AdminsFeatures1 from '../digitalPages/AdminsFeatures1';
import RevenueStrategies2 from '../digitalPages/RevenueStrategies2';
import StartBusiness2 from '../digitalPages/StartBusiness2';
import RequirementsSection2 from '../digitalPages/RequirementsSection2';
import ProductSection2 from '../digitalPages/ProductSection2';
import UIFeatures1 from '../digitalPages/UIFeatures1';

const DigitalWallet = () => {
  return (
    <main className="pt-32 relative">
      {/* Hero Section */}
      <header
        className="bg-cover bg-no-repeat bg-left flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://appdevs.net/_next/static/media/servicePageBgLeft.292df356.webp), url(https://appdevs.net/_next/static/media/servicePageBgRight.e134874f.webp)',
          backgroundPosition: 'left top, right top',
          backgroundSize: 'contain',
          height: '600px',
        }}
      >
        <div className="text-center max-w-[700px] mx-auto p-8 z-10">
          <span className="text-[#115E59] bg-[#CCFBF1] rounded-full text-[10px] px-3 py-1 font-semibold mb-6">
            DIGITAL WALLET SOLUTIONS
          </span>
          <h1 className="text-5xl font-semibold md:mb-6">
            Transform Payments with Advanced E-Wallet Solutions
          </h1>
          <p className="text-[#6B7280] text-[15px] mb-6">
            Revolutionize the way users transact with our feature-rich E-Wallet Solutions. From secure online payments to seamless fund transfers, our solution empowers businesses, banks, and users to enjoy a cashless, hassle-free experience. Simplify money management, improve customer satisfaction, and enhance your financial ecosystem with our innovative digital wallet platform.
          </p>
          <div className="flex space-x-4 justify-center">
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
      </header>

      {/* Problem Solving Section */}
      <section className="pt-16 mx-6 px-4">
        <div className="max-w-4xl mx-auto text-center p-6">
          <h1 className="text-5xl font-semibold mb-4">
            What Problems Does an E-Wallet Solution Solve?
          </h1>
        </div>
        <Bankingcard2 />
      </section>

      {/* Key Features Section */}
      <section className="pt-14 mx-6 px-4">
        <div className="max-w-4xl mx-auto text-center p-6">
          <h1 className="text-5xl font-semibold mb-4">
            Key Features of an <span className="text-[#7C3AED]">E-Wallet Solution</span>
          </h1>
          <p className="text-[#6B7280]">
            A comprehensive e-wallet platform should cater to both administrative needs for the bank and functional needs for the end users, ensuring a secure and user-friendly experience for all.
          </p>
        </div>
        <div className="container mx-auto p-5">
          <div className="grid lg:grid-cols-2 grid-cols-1 mx-20 gap-5">
            <AdminsFeatures1 />
            <UIFeatures1 />
          </div>
        </div>
      </section>

      {/* Revenue Strategies Section */}
      <section className="pt-14 mx-40">
        <div className="text-center bg-[#EBF2FD] px-8 py-10 rounded-[50px] p-6">
          <h1 className="text-4xl font-semibold mb-2">
            How Can Bank Owners Generate Profit from a Cross Border <span className="text-[#7C3AED]">E-Wallet Solution?</span>
          </h1>
          <RevenueStrategies2 />
        </div>
      </section>

      {/* Additional Sections */}
      <StartBusiness2 />
      <RequirementsSection2 />
      <TechnologyStack />
      <ProductSection2 />
      <BenefitsSection />
      <CallToActionSection />
    </main>
  );
};

export default DigitalWallet;

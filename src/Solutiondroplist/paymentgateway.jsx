import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import TechnologyStack from '../mbsPages/TechnologyStack';
import BenefitsSection from '../mbsPages/BenefitsSection';
import CallToActionSection from '../mbsPages/CallToActionSection';
import Bankingcard3 from '../paymentPages/Bankingcard3';
import AdminsFeatures2 from '../paymentPages/AdminsFeatures2';
import UIFeatures2 from '../paymentPages/UIFeatures2';
import RevenueStrategies3 from '../paymentPages/RevenueStrategies3';
import StartBusiness3 from '../paymentPages/StartBusiness3';
import ProductSection3 from '../paymentPages/ProductSection3';
import RequirementsSection3 from '../paymentPages/RequriementsSection3';

const paymentgateway = () => {
  return (
    <section className='pt-32 relative'>
      <div
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
          PAYMENT GATEWAY SOLUTIONS
          </span>
          <h1 className="text-5xl font-semibold md:mb-6">
          Powering Secure and Seamless Digital Transactions
          </h1>
          <p className="text-[#6B7280] text-[15px] mb-6">
          Our Payment Gateway Solutions deliver reliable, secure, and efficient transaction processing for businesses of all sizes. Designed to simplify online payments, it integrates with multiple platforms, supports various payment methods, and ensures compliance with global standards. Empower your business to accept payments worldwide, enhance customer trust, and maximize revenue effortlessly.
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
      </div>
      <section className="pt-16 mx-6 px-4 ">
        <div className="max-w-4xl mx-auto text-center p-6">
          <h1 className="text-5xl font-semibold  mb-4">
          What Problems Does a Payment Gateway Solution Solve?
          </h1>
        </div>
        <Bankingcard3 />
      </section>
      <section className='pt-14 mx-6 px-4'>
        <div className="max-w-4xl mx-auto text-center p-6">
          <h1 className="text-5xl font-semibold  mb-4 " >Key Features of a <span className='text-[#7C3AED]'>Payment Gateway Solution?</span></h1>
          <p className='text-[#6B7280]'>A comprehensive payment gateway solutions platform should cater to both administrative needs for the bank and functional needs for the end users, ensuring a secure and user-friendly experience for all.</p>
        </div>
          <div className="container mx-auto p-5">
              <div className="grid lg:grid-cols-2 grid-cols-1 mx-20 gap-5">
              <AdminsFeatures2 />
              <UIFeatures2 />
            </div>
          </div>
      </section>
      <section className='pt-14 mx-40'>
        <div className=" text-center bg-[#EBF2FD] px-8 py-10 rounded-[50px] p-6">
          <h1 className="text-4xl tex-[48px] font-semibold  mb-2" >How Can Bank Owners Generate Profit from a Cross Border <span className='text-[#7C3AED]'>Payment Gateway Solution?</span></h1>
        <RevenueStrategies3 />
        </div>
      </section>
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

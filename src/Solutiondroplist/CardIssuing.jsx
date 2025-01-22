import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import TechnologyStack from '../mbsPages/TechnologyStack';
import BenefitsSection from '../mbsPages/BenefitsSection';
import CallToActionSection from '../mbsPages/CallToActionSection';
import Bankingcard4 from '../CurrencyPages/Bankingcard4';
import AdminsFeatures3 from '../CurrencyPages/AdminsFeatures3';
import UIFeatures3 from '../CurrencyPages/UIFeatures3';
import RevenueStrategies4 from '../CurrencyPages/RevenueStrategies4';
import StartBusiness4 from '../CurrencyPages/StartBusiness4';
import RequirementsSection4 from '../CurrencyPages/RequriementsSection4';
import ProductSection4 from '../CurrencyPages/ProductSection4';
import Bankingcard5 from '../Cardissuingpages/Bankingcard5';
import AdminsFeatures4 from '../Cardissuingpages/AdminsFeatures4';
import UIFeatures4 from '../Cardissuingpages/UIFeatures4';
import RevenueStrategies5 from '../Cardissuingpages/RevenueStrategies5';
import StartBusiness5 from '../Cardissuingpages/StartBusiness5';
import RequirementsSection5 from '../Cardissuingpages/RequirementsSection5';
import ProductSection5 from '../Cardissuingpages/ProductSection5';

const CardIssuing = () => {
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
          CARD ISSUING SOLUTIONS
          </span>
          <h1 className="text-7xl font-semibold md:mb-6">
            <span className="block">Empower Digital Transactions with Secure</span>
            <span className="block">Virtual Card Issuing</span>
            <span className="block">Solutions</span>
            </h1>

          <p className="text-[#6B7280] text-[15px] mb-6">
          Provide customers with instant, secure, and customizable virtual cards for online and in-store transactions. Designed with cutting-edge technology, our Virtual Card Issuing Solution streamlines digital payments, enhances user control, and ensures robust security, helping financial institutions and businesses offer modern, convenient payment solutions.
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
      <section className="pt-16 pb-16 mx-6 px-4 ">
        <div className="max-w-4xl mx-auto lg:mb-12 text-center p-6">
          <h1 className="text-5xl font-semibold  mb-4">
          What Problems Does a Virtual Card Issuing Solution Solve?
          </h1>
        </div>
        <Bankingcard5 />
      </section>
      <section className='pt-14 mx-6 px-4'>
        <div className="max-w-4xl mx-auto text-center p-6">
          <h1 className="text-5xl font-semibold  mb-4 " >Key Features of a Virtual <span className='text-[#7C3AED]'>Card Issuing Solution</span></h1>
          <p className='text-[#6B7280]'>A comprehensive card issuing platform should cater to both administrative needs for the bank and functional needs for the end users, ensuring a secure and user-friendly experience for all.</p>
        </div>
          <div className="container mx-auto p-5">
              <div className="grid lg:grid-cols-2 grid-cols-1 mx-20 gap-5">
              <AdminsFeatures4 />
              <UIFeatures4 />
            </div>
          </div>
      </section>
      <section className='pt-14 mx-40'>
        <div className=" text-center bg-[#EBF2FD] px-8 py-10 rounded-[50px] p-6">
          <h1 className="text-4xl tex-[48px] font-semibold  mb-2" >How Can Bank Owners Generate Profit from a Virtual <span className='text-[#7C3AED]'>Card Issuing Solution?</span></h1>
        <RevenueStrategies5 />
        </div>
      </section>
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

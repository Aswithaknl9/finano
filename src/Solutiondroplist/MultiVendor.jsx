import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import TechnologyStack from '../mbsPages/TechnologyStack';
import BenefitsSection from '../mbsPages/BenefitsSection';
import CallToActionSection from '../mbsPages/CallToActionSection';
import Bankingcard11 from '../MultiVendorPages/Bankingcard11';
import AdminsFeatures10 from '../MultiVendorPages/AdminsFeatures10';
import UIFeatures10 from '../MultiVendorPages/UIFeatures10';
import RevenueStrategies11 from '../MultiVendorPages/RevenueStrategies11';
import StartBusiness11 from '../MultiVendorPages/StartBusiness11';
import RequirementsSection11 from '../MultiVendorPages/RequirementsSection11';
import ProductSection11 from '../MultiVendorPages/ProductSection11';

const MultiVendor = () => {
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
          MULTI-VENDOR SOLUTIONS
          </span>
          <h1 className="text-5xl font-semibold md:mb-6">
          Revolutionize Your Marketplace with Our Multi-Vendor Solution
            </h1>

          <p className="text-[#6B7280] text-[15px] mb-6">
          Transform your eCommerce platform into a dynamic multi-vendor marketplace with AppDevs’ Multi-Vendor Solution. Empower vendors to manage their products, track sales, and process payments seamlessly while offering customers a diverse shopping experience—all from a single platform.
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
          What Problems Does a Multi-Vendor Solution Solve?
          </h1>
        </div>
        <Bankingcard11 />
      </section>
      <section className='pt-14 mx-6 px-4'>
        <div className="max-w-4xl mx-auto text-center p-6">
          <h1 className="text-5xl font-semibold  mb-4 " >Key Features of a <span className='text-[#7C3AED]'>Multi-Vendor Solution</span></h1>
          <p className='text-[#6B7280]'>A comprehensive multi-vendor platform should cater to both administrative needs for the bank and functional needs for the end users, ensuring a secure and user-friendly experience for all.</p>
        </div>
          <div className="container mx-auto p-5">
              <div className="grid lg:grid-cols-2 grid-cols-1 mx-20 gap-5">
              <AdminsFeatures10 />
              <UIFeatures10 />
            </div>
          </div>
      </section>
      <section className='pt-14 mx-40'>
        <div className=" text-center bg-[#EBF2FD] px-8 py-10 rounded-[50px] p-6">
          <h1 className="text-4xl tex-[48px] font-semibold  mb-2" >How Can Business Owners Generate Profit from a<span className='text-[#7C3AED]'>Multi-Vendor Solution?</span></h1>
        <RevenueStrategies11 />
        </div>
      </section>
      <StartBusiness11 />
      <RequirementsSection11 />
      <TechnologyStack />
      <ProductSection11 />
      <BenefitsSection />
      <CallToActionSection />
    </section>
  );
};

export default MultiVendor;
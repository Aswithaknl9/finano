import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Bankingcard from '../Home/Bankingcard';
import ForBankAdmins from '../Home/ForBankAdmins';
import ForEndUsers from '../Home/ForEndUsers';

const MobileBankSolution = () => {
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
            DIGITAL MOBILE BANKING SOLUTIONS
          </span>
          <h1 className="text-5xl font-semibold md:mb-6">
            A Comprehensive Guide to Mobile Banking Solutions
          </h1>
          <p className="text-[#6B7280] text-[15px] mb-6">
            This guide explores the fundamentals of mobile banking solutions, including their key features, the problems they solve, profitability strategies for banks and entrepreneurs, and the necessary steps for launching a mobile banking platform.
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
              href="/product"
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
            What Problems Does a Mobile Banking Solution Solve?
          </h1>
        </div>
        <Bankingcard />
      </section>
      <section className='pt-14 mx-6 px-4'>
        <div className="max-w-4xl mx-auto text-center p-6">
          <h1 className="text-5xl font-semibold  mb-4 " >Key Features of a Robust Mobile <span className='text-[#7C3AED]'>Banking Solution</span></h1>
          <p className='text-[#6B7280]'>A comprehensive mobile banking platform should cater to both administrative needs for the bank and functional needs for the end users, ensuring a secure and user-friendly experience for all.</p>
        </div>
          <div className="container mx-auto p-5">
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
              <ForBankAdmins />
              <ForEndUsers />
            </div>
          </div>
      </section>
      <section className='pt-14 mx-6 px-4'>
        <div className="max-w-4xl mx-auto text-center p-6">
          <h1 className="text-5xl font-semibold  mb-4 " >How Can Bank Owners Generate Profit from a  <span className='text-[#7C3AED]'>Mobile Banking Solution?</span></h1>
        </div>
      </section>
    </section>
  );
};

export default MobileBankSolution;

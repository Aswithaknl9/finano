import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const StartBusiness11 = () => {
  return (
    <div>
      <section className="py-[130px]">
        <div className="xl:max-w-[1280px] container mx-auto px-4">
          <div className="relative rounded-[30px] overflow-hidden z-10 xl:py-20 py-14 px-14 bg-[linear-gradient(90deg,#061A46_0%,#153885_100%)]">
            <div className="absolute top-0 left-0 z-[-1]">
              <img alt="process" src="https://appdevs.net/_next/static/media/process-bg.c4350ce0.webp" style={{ color: 'transparent' }} />
            </div>
            <div className="absolute top-0 left-0 z-[-1]">
              <img alt="process" src="https://appdevs.net/_next/static/media/process-element.f0d83ec5.webp" style={{ color: 'transparent' }} />
            </div>
            <div className="mb-8 lg:mb-10 grid grid-cols-12">
              <div className="text-center col-span-12 lg:col-span-8 lg:col-start-3">
                <h2 className="text-white font-semibold max-w-3xl text-5xl mb-4">Steps to Start a Multi-Vendor Business</h2>
                <p className="text-white lg:w-[80%] max-w-3xl mx-auto">
                Launching a multi-vendor solution involves several key steps to ensure smooth implementation and adoption.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5">
              {/* Step 1 */}
              <div className="text-center relative">
                <div className="w-12 h-12 flex justify-center items-center rounded-full text-2xl font-bold bg-[#DBEAFE] mx-auto mb-4">
                  <img alt="Service Scope" className="object-cover w-[70%]" src="https://appdevs.net/_next/static/media/buy.78ac122f.webp" style={{ color: 'transparent' }} />
                </div>
                <h4 className="text-white text-[15px] mb-2.5">Identify Your Niche</h4>
                <div className="arrow arrow-right"></div>
              </div>
              {/* Step 2 */}
              <div className="text-center relative">
                <div className="w-12 h-12 flex justify-center items-center rounded-full text-2xl font-bold bg-[#DBEAFE] mx-auto mb-4">
                  <img alt="Features and Packages" className="object-cover w-[70%]" src="https://appdevs.net/_next/static/media/customize.3899f146.webp" style={{ color: 'transparent' }} />
                </div>
                <h4 className="text-white text-[15px] mb-2.5">Choose a Platform</h4>
                <div className="arrow arrow-right"></div>
              </div>
              {/* Step 3 */}
              <div className="text-center relative">
                <div className="w-12 h-12 flex justify-center items-center rounded-full text-2xl font-bold bg-[#DBEAFE] mx-auto mb-4">
                  <img alt="Brand Customization" className="object-cover w-[70%]" src="https://appdevs.net/_next/static/media/customize.3899f146.webp" style={{ color: 'transparent' }} />
                </div>
                <h4 className="text-white text-[15px] mb-2.5">Vendor Onboarding</h4>
                <div className="arrow arrow-right"></div>
              </div>
              {/* Step 4 */}
              <div className="text-center relative">
                <div className="w-12 h-12 flex justify-center items-center rounded-full text-2xl font-bold bg-[#DBEAFE] mx-auto mb-4">
                  <img alt="Integration and Setup" className="object-cover w-[70%]" src="https://appdevs.net/_next/static/media/launch.20325f70.webp" style={{ color: 'transparent' }} />
                </div>
                <h4 className="text-white text-[15px] mb-2.5">Set Commission Rates and Payment Methods</h4>
                <div className="arrow arrow-right"></div>
              </div>
              <div className="text-center relative">
                <div className="w-12 h-12 flex justify-center items-center rounded-full text-2xl font-bold bg-[#DBEAFE] mx-auto mb-4">
                  <img alt="Integration and Setup" className="object-cover w-[70%]" src="https://appdevs.net/_next/static/media/launch.20325f70.webp" style={{ color: 'transparent' }} />
                </div>
                <h4 className="text-white text-[15px] mb-2.5">Marketing and Promotions</h4>
                <div className="arrow arrow-right"></div>
              </div>
              <div className="text-center relative">
                <div className="w-12 h-12 flex justify-center items-center rounded-full text-2xl font-bold bg-[#DBEAFE] mx-auto mb-4">
                  <img alt="Integration and Setup" className="object-cover w-[70%]" src="https://appdevs.net/_next/static/media/launch.20325f70.webp" style={{ color: 'transparent' }} />
                </div>
                <h4 className="text-white text-[15px] mb-2.5">Provide Customer Support</h4>
                <div className="arrow arrow-first"></div>
              </div>
            </div>
            <div className="mt-7 lg:mt-14 text-center">
            <a 
              className="bg-[#2974E7] text-white  font-semibold px-6 py-4 rounded-md text-center hover:bg-[#1E40AF] transition duration-300 items-center justify-center"
              href="/consultation"
              aria-label="Get Free Consultation"
            >
              Get Free Consultation <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-sm" />
            </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StartBusiness11;

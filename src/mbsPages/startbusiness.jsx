import React from "react";
import buy from "../assets/buy.png";
import customize from "../assets/customize.png";
import launch from "../assets/launch.png";

const MobileBankingSteps = () => {
  const steps = [
    {
      title: "Service Scope",
      imgSrc: buy,
    },
    {
      title: "Features and Packages",
      imgSrc: customize,
    },
    {
      title: "Brand Customization",
      imgSrc: customize,
    },
    {
      title: "Integration and Setup",
      imgSrc: launch,
    },
    {
      title: "Training Deployment",
      imgSrc: launch,
    },
    {
      title: "Launch and Market",
      imgSrc: launch,
    },
  ];

  return (
    <section className="py-[130px]">
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        <div className="relative rounded-[30px] overflow-hidden z-10 xl:py-20 py-14 px-14 bg-gradient-to-r from-[#061A46] to-[#153885]">

          {/* Background Images */}
          <img 
            alt="process" 
            loading="lazy" 
            className="absolute top-0 left-0 z-[-1] object-cover w-full h-full" 
            src="	https://appdevs.net/_next/static/media/process-bg.c4350ce0.webp" 
          />
          <img 
            alt="process" 
            loading="lazy" 
            className="absolute top-0 left-0 z-[-1] object-cover w-96" 
            src="https://appdevs.net/_next/static/media/process-element.f0d83ec5.webp" 
          />

          {/* Heading Section */}
          <div className="mb-8 lg:mb-10 text-center max-w-2xl mx-auto">
            <h2 className="text-white text-[24px] sm:text-[28px] md:text-[38px] lg:text-[48px] font-semibold mb-4 leading-tight">
              Steps to Start a Mobile Banking Business
            </h2>
            <p className="text-white text-[14px] lg:text-[16px]">
              Launching a mobile banking solution involves several key steps to ensure smooth implementation and adoption.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-14 h-14 flex justify-center items-center rounded-full bg-[#DBEAFE] mx-auto mb-4">
                  <img 
                    alt={step.title} 
                    loading="lazy" 
                    className="object-cover w-10" 
                    src={step.imgSrc} 
                  />
                </div>
                <h4 className="text-white text-sm lg:text-[15px] font-semibold">{step.title}</h4>
                
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-7 lg:mt-14 text-center">
            <a 
              href="/consultation" 
              className="bg-blue-600 hover:bg-blue-500 transition duration-300 px-6 py-3 text-white text-sm font-medium rounded-lg flex items-center justify-center mx-auto w-fit shadow-lg"
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
          </div>

        </div>
      </div>
    </section>
  );
};

export default MobileBankingSteps;

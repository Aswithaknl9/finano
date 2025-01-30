import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import CustomizationServices from "../CustomizationServices/CustomizationServices";
import IndustriesWeServe from "../CustomizationServices/IndustriesWeServe";
import CustomizationProcess from "../CustomizationServices/CustomizationProcess";

const Customization = () => {
  return (
    <section className="pt-[180px] relative">
      <img
        alt="Background Image"
        loading="lazy"
        width="1728"
        height="757"
        decoding="async"
        className="absolute top-0 left-0 w-full z-[-2] 2xl:block"
        src="https://appdevs.net/_next/static/media/customizationPageBg.549c9e0c.webp"
        style={{ color: "transparent" }}
      />
      <div className="xl:max-w-[1232px] container mx-auto text-center px-4">
        <div className="mb-4">
        <span className="text-[12px] font-semibold text-[#115E59] bg-[#CCFBF1] rounded-full py-1 px-3 lg:mb-6">
          Get customization
        </span>
        </div>
        <h1 className="mb-3 lg:mb-5 font-semibold lg:text-[48px] text-[12px]">
          Custom FinTech Solutions for Your Business Needs
        </h1>
        <span className="lg:w-[60%] text-heading__five  text-[#6b7280] leading-[28px]">
          Empower your financial operations with customized software solutions designed to meet your specific industry requirements. We provide end-to-end FinTech customization services that drive growth and efficiency.
        </span>
        <div className="flex space-x-4 justify-center mt-10">
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
              Request a Custom Quote
            </a>
          </div>
      </div>
      <CustomizationServices />
      <IndustriesWeServe />
      <CustomizationProcess />
    </section>
  );
};

export default Customization;

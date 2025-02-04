import React from "react";
import calendlyPageBgLeft from "../assets/solutionPageBgLeft.webp"
import calendlyPageBgRight from "../assets/solutionPageBgRight.webp"
import FAQSection from "../ConsultationPages/FAQSection";

const ConsultationSection = () => {
  return (
    <section className="pt-[120px] md:pt-[180px] pb-[100px] relative">
      {/* Background Images for Large Screens */}
      <img
        alt="Background Left"
        className="absolute top-0 left-0 z-[-2] hidden lg:block"
        src={calendlyPageBgLeft}
      />
      <img
        alt="Background Right"
        className="absolute top-[60px] right-0 z-[-2] hidden lg:block"
        src={calendlyPageBgRight}
      />

      {/* Content Wrapper */}
      <div className="max-w-[832px] px-6 sm:px-4 mx-auto text-center mb-10 md:mb-0">
        <span className="text-[12px] font-semibold text-[#115E59] bg-[#CCFBF1] rounded-full py-1 px-3">
          Consultation
        </span>
        <h1 className="text-[28px] sm:text-[36px] md:text-[48px] font-semibold mt-4">
          Book Your <span className="text-[#7c3aed]">Free Consultation</span>
        </h1>
        <p className="text-[#6b7280] text-[14px] sm:text-[16px]  mt-2">
          Our expert team is here to help! Whether you need assistance with
          product customization, have pre-sales inquiries, or want to explore
          options for developing a solution from scratch, this free 30-minute
          consultation is designed to give you the support you need. Book now to
          discuss how we can tailor our solutions to meet your unique business
          requirements.
        </p>
      </div>

      {/* Calendly Embed - Full Width on Mobile */}
      




      
    </section>
  );
};

export default ConsultationSection;

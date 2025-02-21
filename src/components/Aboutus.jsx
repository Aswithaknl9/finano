import React from "react";
import BannerSection from "../components/Banner";

const AboutUs = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row items-center bg-white pt-[85px] pb-[90px] lg:mx-[160px]">
      {/* Left Side - Heading */}
      <div className="md:w-1/2 border-l-4 border-red-500 pl-[20px]">
        <h5 className="text-red-500  text-sm font-semibold mb-3">I N T R O</h5>
        <h2 className="text-3xl font-semibold text-[46px] text-[#010101]">About us</h2>
      </div>

      {/* Right Side - Description */}
      <div className="md:w-1/2 mt-6 md:mt-0 font-sans">
        <p className="text-[#666666] text-base">
          The argument in favor of using filler text goes something like this:
          If you use real content in the design process, anytime you reach a
          review point you’ll end up reviewing and negotiating the content
          itself and not the design.
        </p>
      </div>
      
    </div>
    <div className="lg:mx-[140px]">
    <BannerSection />
    </div>
    </>
  );
};

export default AboutUs;

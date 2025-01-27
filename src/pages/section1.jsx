import React from "react";
import { Link } from "react-router-dom";
import Soluti from "./soluti";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Section1 = () => {
  return (
    <section className="relative  xl:pt-[330px] lg:pt-[280px] pt-[130px] mt-[80px] overflow-hidden h-auto bg-[#f3f4f6] py-14">
      {/* Background Image - Hidden on mobile */}
      <img
        src="https://appdevs.net/_next/static/media/solutionSectionBg.217c0940.webp"
        width="1728"
        height="1523"
        alt="Section Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-[-2] hidden md:block"
      />
      {/* Solution Element Image - Hidden on mobile */}
      <img
        alt="Solution Element"
        loading="lazy"
        width="200"
        height="200"
        decoding="async"
        className="xl:w-[200px] w-[150px] xl:h-[200px] h-[150px] absolute xl:top-10 top-24 left-1/2 transform -translate-x-1/2 lg:block hidden"
        src="https://appdevs.net/_next/static/media/solutionElement.b9eb1a7d.webp"
      />

      {/* Main Content Wrapper */}
      <div className="xl:max-w-[1280px] container mx-auto px-4 relative z-10">
        <div className="section_header mb-14">
          <div className="max-w-[730px] mx-auto text-center">
            <h2 className="mb-4 text-[32px] md:text-[40px] font-bold">
              Explore{" "}
              <span className="text-[#7C3AED]">Solutions</span> and Discover How
              They Work and Boost Your Business
            </h2>
            <p className="text-[#6B7280] text-sm md:text-base">
              Discover a wide range of solutions specifically designed to
              address your business challenges. Learn how our innovative
              offerings work to optimize processes and accelerate your business
              growth effectively.
            </p>
          </div>
        </div>

        <Soluti />
        {/* Show More Button */}
        <div className="text-center mt-10">
          <Link
            to="/solutions"
            className="bg-[#2974e7] text-white py-3 px-6 rounded-lg text-sm md:text-base font-semibold hover:bg-[#1f5bbd] transition"
          >
            Show More Solutions
            <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Section1;

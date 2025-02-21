import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import ServicesSection from "./Service";
import AboutUsSection from "./section";
import VideoSection from "./section2";
import WhyChooseUs from "./section3";
import Section33 from "./section33";

const About = () => {
  return (
    <>
    <div
      className="relative min-h-[40vh] flex items-center pl-[15px]"
      style={{
        backgroundImage: "url('https://demo.casethemes.net/finano/wp-content/themes/finano/assets/images/bg-page-title.jpg')",
        backgroundSize: "100%", // Background size set to 50%
        backgroundPosition: "50% 0%", 
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

      <div className="relative z-10 border-l-4 pl-[26px] border-blue-600">
        <h1 className="text-white text-[60px] font-semibold">
          About <span className="font-playfair">Us</span>
        </h1>
        <div className="flex items-center text-white mt-2 text-[14px] space-x-2">
          <p>Home</p>
          <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
          <p>About Us</p>
        </div>
      </div>
    </div>
    <ServicesSection />
    <AboutUsSection />
    <VideoSection />
    <Section33 />
    </>
  );
};

export default About;

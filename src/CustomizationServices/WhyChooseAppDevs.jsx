import React from "react";
import Team from "../assets/team.png";
import Saq from "../assets/sqa.png";
import Knowledge from "../assets/knowledge.png";

const reasons = [
  {
    title: "Experienced Team",
    description: "With a dedicated team of FinTech specialists, we bring your customization ideas to life.",
    imgSrc: Team,
  },
  {
    title: "Reliable Security",
    description: "Our solutions include industry-standard security features to safeguard sensitive financial data.",
    imgSrc: Saq,
  },
  {
    title: "Extensive Knowledge",
    description: "We understand the complex needs of financial institutions and tailor our services accordingly.",
    imgSrc: Knowledge,
  },
  {
    title: "End-to-End Support",
    description: "From initial consultation to post-launch assistance, we’re with you every step of the way.",
    imgSrc: Knowledge, 
  },
];

const WhyChooseAppDevs = () => {
  return (
    <section className="py-[130px]">
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        
        {/* Section Header */}
        <div className="section_header mb-7 lg:mb-12">
          <div className="max-w-[775px] mx-auto text-center">
            <h2 className="mb-3 text-[24px] sm:text-[28px] md:text-[38px] lg:text-[48px] font-semibold leading-tight ">Why Choose AppDevs for Your Customization Needs?</h2>
            <p className="sm:w-[70%] text-[#6b7280] mx-auto">
              We are committed to delivering excellence through our expertise in the FinTech domain.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white shadow-lg border border-white rounded-[20px] py-5 px-5 lg:px-8 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-12 h-12 bg-white shadow-lg rounded-full flex justify-center items-center mb-4">
                <img
                  alt={reason.title}
                  loading="lazy"
                  width="20"
                  height="20"
                  src={reason.imgSrc}
                  className="object-contain"
                />
              </div>
              <h5 className="text-[20px] lg:text-[20px] mb-3 font-semibold">{reason.title}</h5>
              <p className="text-[#6b7280] text-[14px]">{reason.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseAppDevs;

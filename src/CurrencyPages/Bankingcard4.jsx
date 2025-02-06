import React from "react";
import team from "../assets/team.png";
import sqa from "../assets/sqa.png";
import knowledge from "../assets/knowledge.png";

const problems = [
  {
    title: "Limited Access to Currency Conversion",
    description: "Provides instant access to a wide range of currencies for seamless transactions.",
    imgSrc: team,
  },
  {
    title: "High Conversion Fees",
    description: "Reduces costs with competitive exchange rates and transparent pricing.",
    imgSrc: sqa,
  },
  {
    title: "Inconsistent Exchange Rates",
    description: "Offers real-time updates to ensure accurate and fair conversions.",
    imgSrc: knowledge,
  },
  {
    title: "Security Risks",
    description: "Safeguards user transactions with encryption, KYC, and AML compliance.",
    imgSrc: knowledge,
  },
  {
    title: "Manual Processes",
    description: "Automates currency exchange operations to minimize errors and save time.",
    imgSrc: knowledge,
  },
  {
    title: "Customer Dissatisfaction",
    description: "Improves user experience with fast, reliable, and secure exchanges.",
    imgSrc: knowledge,
  },
];

const Bankingcard4 = () => {
  return (
    <section className="pt-[130px]">
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        {/* Section Header */}
        <div className="section_header mb-7 lg:mb-12">
          <div className="max-w-[775px] mx-auto text-center">
          <div className="max-w-[780px] mx-auto text-center mb-12">
            <h2 className="text-[24px] sm:text-[28px] md:text-[38px] lg:text-[48px] font-semibold leading-tight">
              What Problems Does a Currency Exchange Solution Solve?
            </h2>
          </div>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white shadow-lg border border-gray-200 rounded-[20px] py-6 px-6 lg:px-8"
            >
              <div className="w-12 h-12 bg-white shadow-md rounded-full flex justify-center items-center mb-4">
                <img src={problem.imgSrc} alt={problem.title} className="w-5 h-5 object-contain" />
              </div>
              <h5 className="text-[18px] lg:text-[20px] font-semibold mb-3">{problem.title}</h5>
              <p className="text-[#6b7280] text-sm">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bankingcard4;

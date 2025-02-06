import React from "react";
import team from "../assets/team.png";
import sqa from "../assets/sqa.png";
import knowledge from "../assets/knowledge.png";

const problems = [
  {
    title: "Limited Payment Options",
    description: "Enables users to transact securely in digital environments without relying on physical cards.",
    imgSrc: team,
  },
  {
    title: "Fraud and Security Risks",
    description: "Protects users with advanced security features like encryption, tokenization, and virtual card expiration.",
    imgSrc: sqa,
  },
  {
    title: "High Card Issuance Costs",
    description: "Reduces overheads by eliminating the need for physical card production.",
    imgSrc: knowledge,
  },
  {
    title: "Lack of Spending Control",
    description: "Offers users customizable limits, ensuring better financial management and control.",
    imgSrc: knowledge,
  },
  {
    title: "Inefficient Customer Experiences",
    description: "Provides instant card generation for seamless, on-demand use.",
    imgSrc: knowledge,
  },
  {
    title: "Inaccessibility to Global Markets",
    description: "Supports multi-currency and cross-border transactions, enabling global usability.",
    imgSrc: team,
  },
];

const Bankingcard5 = () => {
  return (
    <section className="pt-[130px]">
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        {/* Section Header */}
        <div className="section_header mb-7 lg:mb-12">
          <div className="max-w-[780px] mx-auto text-center mb-12">
            <h2 className="text-[24px] sm:text-[28px] md:text-[38px] lg:text-[48px] font-semibold leading-tight">
              What Problems Does a Virtual Card Issuing Solution Solve?
            </h2>
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

export default Bankingcard5;

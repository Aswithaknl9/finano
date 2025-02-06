import React from "react";
import cashDependency from "../assets/team.png";
import timeConsuming from "../assets/sqa.png";
import securityRisks from "../assets/knowledge.png";
import paymentMethods from "../assets/knowledge.png";
import bankingAccess from "../assets/knowledge.png";
import financialTransparency from "../assets/knowledge.png";

const problems = [
  {
    title: "Inefficient Portfolio Management",
    description: "Simplifies tracking and optimizing diverse investment portfolios for clients and institutions.",
    imgSrc: cashDependency,
  },
  {
    title: "Lack of Investor Insights",
    description: "Provides actionable analytics and reports, enabling informed decision-making for better returns.",
    imgSrc: timeConsuming,
  },
  {
    title: "Time-Consuming Manual Processes",
    description: "Automates routine tasks such as reporting, compliance checks, and transaction monitoring.",
    imgSrc: securityRisks,
  },
  {
    title: "Compliance Challenges",
    description: "Ensures adherence to financial regulations and guidelines with built-in compliance tools.",
    imgSrc: paymentMethods,
  },
  {
    title: "Limited Accessibility for Clients",
    description: "Offers a user-friendly interface for clients to access and manage their investments anytime.",
    imgSrc: bankingAccess,
  },
  {
    title: "High Operational Costs",
    description: "Reduces administrative overheads with streamlined processes and digital tools.",
    imgSrc: financialTransparency,
  },
];

const Bankingcard2 = () => {
  return (
    <section className="pt-[130px]">
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        
        {/* Section Header */}
        <div className="section_header mb-7 lg:mb-12 text-center">
        <div className="max-w-[780px] mx-auto text-center mb-12">
          <h2 className="text-[24px] sm:text-[28px] md:text-[38px] lg:text-[48px] font-semibold">
          What Problems Does an Investment Management Solution Solve?
          </h2>
          </div>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="bg-white shadow-lg border border-gray-200 rounded-[20px] py-6 px-6 lg:px-8 text-left"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-white shadow-md rounded-full flex items-center justify-center mb-4">
                <img 
                  alt={problem.title} 
                  loading="lazy" 
                  width="22" 
                  height="20" 
                  className="object-contain" 
                  src={problem.imgSrc} 
                />
              </div>

              {/* Title & Description (Now starts from a new line) */}
              <h5 className="text-lg lg:text-xl font-semibold mb-2">{problem.title}</h5>
              <p className="text-[#6b7280] text-sm">{problem.description}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Bankingcard2;

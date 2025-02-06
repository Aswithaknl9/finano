import React from "react";
import cashDependency from "../assets/team.png";
import timeConsuming from "../assets/sqa.png";
import securityRisks from "../assets/knowledge.png";
import paymentMethods from "../assets/knowledge.png";
import bankingAccess from "../assets/knowledge.png";
import financialTransparency from "../assets/knowledge.png";

const problems = [
  {
    title: "Cash Dependency",
    description: "Reduces reliance on cash by enabling secure digital transactions.",
    imgSrc: cashDependency,
  },
  {
    title: "Time-Consuming Payments",
    description: "Speeds up transactions with instant payments across platforms.",
    imgSrc: timeConsuming,
  },
  {
    title: "Security Risks",
    description: "Protects user data with encryption, 2FA, and fraud detection features.",
    imgSrc: securityRisks,
  },
  {
    title: "Limited Payment Methods",
    description: "Offers multiple payment options, including bank transfers, cards, and QR codes.",
    imgSrc: paymentMethods,
  },
  {
    title: "Inaccessible Banking Services",
    description: "Provides unbanked users with an easy-to-access financial tool.",
    imgSrc: bankingAccess,
  },
  {
    title: "Lack of Financial Transparency",
    description: "Enables detailed transaction history and spending analytics for better money management.",
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
            What Problems Does an E-Wallet Solution Solve?
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

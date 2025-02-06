import React from "react";
import paymentDelayImg from "../assets/team.png";
import paymentOptionsImg from "../assets/sqa.png";
import operationalCostImg from "../assets/knowledge.png";
import fraudRiskImg from "../assets/knowledge.png";
import integrationImg from "../assets/knowledge.png";
import crossBorderImg from "../assets/team.png";

const problems = [
  {
    title: "Payment Processing Delays",
    description: "Ensures quick and reliable transaction approvals to enhance user experience.",
    imgSrc: paymentDelayImg,
  },
  {
    title: "Limited Payment Options",
    description: "Supports multiple payment methods, including credit cards, e-wallets, and bank transfers.",
    imgSrc: paymentOptionsImg,
  },
  {
    title: "High Operational Costs",
    description: "Reduces costs by streamlining payment operations and automating processes.",
    imgSrc: operationalCostImg,
  },
  {
    title: "Fraud and Security Risks",
    description: "Safeguards transactions with encryption, fraud detection, and PCI DSS compliance.",
    imgSrc: fraudRiskImg,
  },
  {
    title: "Integration Challenges",
    description: "Offers easy-to-integrate APIs and plugins for websites and mobile apps.",
    imgSrc: integrationImg,
  },
  {
    title: "Lack of Cross-Border Payment Support",
    description: "Enables global payments with multi-currency and language support.",
    imgSrc: crossBorderImg,
  },
];

const Bankingcard3 = () => {
  return (
    <section className="pt-[130px]">
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        
        {/* Section Header */}
        <div className="section_header mb-7 lg:mb-12 text-center">
        <div className="max-w-[780px] mx-auto text-center mb-12">
          <h2 className="text-[24px] sm:text-[28px] md:text-[38px] lg:text-[48px] leading-tight font-semibold mb-3">
            What Problems Does a Payment Gateway Solution Solve?
          </h2>
          </div>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white shadow-lg border border-gray-200 rounded-[20px] p-6 flex flex-col items-start">
              
              {/* Image at the Start (Top) */}
              <div className="w-12 h-12 bg-white shadow-md rounded-full flex items-center justify-center mb-4">
                <img alt={problem.title} loading="lazy" width="25" height="25" src={problem.imgSrc} />
              </div>

              {/* Title & Description Below the Image */}
              <h5 className="text-lg lg:text-xl font-semibold mb-2">{problem.title}</h5>
              <p className="text-gray-600 text-sm">{problem.description}</p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bankingcard3;

import React from "react";
import userInterface from "../assets/userInterface.png";
import features from "../assets/features.png";
import responsiveness from "../assets/responsiveness.png";
import accessibilityFlow from "../assets/accessibilityFlow.png";
import functionality from "../assets/functionality.png";
import userManagementFlow from "../assets/userManagementFlow.png";
import securityControlsFlow from "../assets/securityControlsFlow.png";
import analyticsAndInsights from "../assets/analyticsAndInsights.png";

const adminFeatures = [
  {
    title: "Card Customization and Branding",
    description: "Allow businesses to design and issue virtual cards with custom branding.",
    imgSrc: userInterface,
  },
  {
    title: "Card Lifecycle Management",
    description: "Manage the creation, activation, suspension, and termination of virtual cards.",
    imgSrc: features,
  },
  {
    title: "Fraud Detection and Prevention",
    description: "Leverage AI-driven tools to monitor and prevent fraudulent activities.",
    imgSrc: responsiveness,
  },
  {
    title: "Multi-Currency Support",
    description: "Issue cards capable of transactions in various currencies for international users.",
    imgSrc: accessibilityFlow,
  },
  {
    title: "Detailed Reporting and Analytics",
    description: "Provide insights into card usage, transactions, and user behavior.",
    imgSrc: userInterface,
  },
  {
    title: "Integration Capabilities",
    description: "Seamlessly integrate with existing banking and payment systems.",
    imgSrc: features,
  },
];

const userFeatures = [
  {
    title: "Instant Virtual Card Generation",
    description: "Users can create virtual cards within seconds for immediate use.",
    imgSrc: userInterface,
  },
  {
    title: "Customizable Spending Limits",
    description: "Set transaction and usage limits to control spending.",
    imgSrc: functionality,
  },
  {
    title: "Real-Time Transaction Notifications",
    description: "Keep users informed with instant updates on their card activity.",
    imgSrc: userManagementFlow,
  },
  {
    title: "Secure Payment Options",
    description: "Ensure secure transactions through tokenization and encryption.",
    imgSrc: securityControlsFlow,
  },
  {
    title: "Card Management Dashboard",
    description: "Allow users to manage multiple cards, view balances, and monitor transactions.",
    imgSrc: analyticsAndInsights,
  },
  {
    title: "Multi-Platform Access",
    description: "Provide a unified experience across web and mobile platforms.",
    imgSrc: userInterface,
  },
];

const VirtualCardFeatures = () => {
  return (
    <section className="pt-[130px]">
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        {/* Section Header */}
        <div className="section_header lg:mb-12 mb-8 text-center">
          <div className="max-w-[775px] mx-auto">
            <h2 className="mb-4 text-[24px] sm:text-[28px] md:text-[38px] lg:text-[48px] font-semibold  leading-tight">
              Key Features of a <span className="text-[#7c3aed]">Virtual Card Issuing Solution</span>
            </h2>
            <p className="text-[#6b7280] text-sm">
              A comprehensive card issuing platform should cater to both administrative needs for the bank and functional needs for the end users, ensuring a secure and user-friendly experience for all.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
        <div>
            <div className="text-center rounded-[20px] px-3 lg:pt-12 pt-6 lg:pb-16 pb-12 mb-[-30px] bg-[#DBEAFE]">
              <h3 className="xl:text-[30px] lg:text-2xl md:text-xl text-lg text-[#213E65] font-semibold">
                Administrator Features
              </h3>
            </div>
            <div className="bg-gray-100 xl:py-8 py-5 xl:px-6 px-4 rounded-[20px]">
              <ul className="space-y-4">
                {adminFeatures.map((feature, index) => (
                  <li key={index} className="bg-white rounded-[20px] shadow-md p-5">
                    <div className="flex items-start space-x-4 mb-3">
                      <div className="w-[36px] h-[36px] flex items-center justify-center bg-white shadow-md rounded-full">
                        <img alt={feature.title} loading="lazy" width="20" height="20" src={feature.imgSrc} />
                      </div>
                      <h5 className="ms-2 font-semibold">{feature.title}</h5>
                    </div>
                    <p className="text-[#6b7280] text-sm">{feature.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* User Interface Features */}
          <div>
            <div className="text-center rounded-[20px] px-3 lg:pt-12 pt-6 lg:pb-16 pb-12 mb-[-30px] bg-[#EDE9FE]">
              <h3 className="xl:text-[30px] lg:text-2xl md:text-xl text-lg text-[#554693] font-semibold">
                User Interface Features
              </h3>
            </div>
            <div className="bg-gray-100 xl:py-8 py-5 xl:px-6 px-4 rounded-[20px]">
              <ul className="space-y-4">
                {userFeatures.map((feature, index) => (
                  <li key={index} className="bg-white rounded-[20px] shadow-md p-5">
                    <div className="flex items-start space-x-4 mb-3">
                      <div className="w-[36px] h-[36px] flex items-center justify-center bg-white shadow-md rounded-full">
                        <img alt={feature.title} loading="lazy" width="20" height="20" src={feature.imgSrc} />
                      </div>
                      <h5 className="ms-2 font-semibold">{feature.title}</h5>
                    </div>
                    <p className="text-[#6b7280] text-sm">{feature.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          </div>
      </div>
    </section>
  );
};

export default VirtualCardFeatures;

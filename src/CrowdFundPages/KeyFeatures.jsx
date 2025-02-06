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
    title: "Real-Time Exchange Rate Management",
    description: "Automatically update and manage currency rates for accuracy.",
    imgSrc: userInterface,
  },
  {
    title: "Transaction Monitoring",
    description: "Track and oversee all transactions for compliance and fraud prevention.",
    imgSrc: features,
  },
  {
    title: "Customizable Fees and Margins",
    description: "Set flexible fee structures to meet business goals.",
    imgSrc: responsiveness,
  },
  {
    title: "Reporting and Analytics",
    description: "Gain insights into transaction trends, revenue, and customer behavior.",
    imgSrc: accessibilityFlow,
  },
  {
    title: "Multi-Currency Support",
    description: "Handle transactions across various currencies with ease.",
    imgSrc: userInterface,
  },
  {
    title: "Regulatory Compliance Tools",
    description: "Automate KYC and AML processes for seamless adherence to regulations.",
    imgSrc: features,
  },
];

const userFeatures = [
  {
    title: "Instant Currency Conversion",
    description: "Enable users to convert currencies quickly and efficiently.",
    imgSrc: userInterface,
  },
  {
    title: "Multi-Language Support",
    description: "Localize interfaces for diverse user bases around the globe.",
    imgSrc: functionality,
  },
  {
    title: "Transaction History",
    description: "Provide users with detailed records of past exchanges for transparency.",
    imgSrc: userManagementFlow,
  },
  {
    title: "Mobile and Web Access",
    description: "Ensure accessibility across devices for added convenience.",
    imgSrc: securityControlsFlow,
  },
  {
    title: "Real-Time Notifications",
    description: "Notify users of rate changes and completed transactions.",
    imgSrc: analyticsAndInsights,
  },
  {
    title: "Secure User Authentication",
    description: "Protect accounts with advanced login and verification methods.",
    imgSrc: userInterface,
  },
];

const KeyFeatures = () => {
  return (
    <section className="pt-[130px]">
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        
        <div className="section_header lg:mb-12 mb-8 text-center">
          <div className="max-w-[775px] mx-auto">
            <h2 className="mb-4 text-[24px] sm:text-[28px] md:text-[38px] lg:text-[48px] font-semibold  leading-tight">
              Key Features of a <span className="text-[#7c3aed]">Currency Exchange Solution</span>
            </h2>
            <p className="text-[#6b7280] text-sm">
              A comprehensive currency exchange platform should cater to both administrative needs for the bank and functional needs for the end users, ensuring a secure and user-friendly experience for all.
            </p>
          </div>
        </div>

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

export default KeyFeatures;

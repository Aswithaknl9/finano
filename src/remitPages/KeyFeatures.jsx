import React from "react";
import userInterface from "../assets/userInterface.png";
import features from "../assets/features.png";
import responsiveness from "../assets/responsiveness.png";
import accessibilityFlow from "../assets/accessibilityFlow.png";
import functionality from "../assets/functionality.png";
import userManagementFlow from "../assets/userManagementFlow.png";
import securityControlsFlow from "../assets/securityControls.png";
import analyticsAndInsights from "../assets/analyticsAndInsights.png";


const adminFeatures = [
  {
    title: "Transaction Monitoring",
    description: "Real-time tracking of all inbound and outbound transfers.",
    imgSrc: userInterface,
  },
  {
    title: "Compliance Tools",
    description: "Automated KYC/AML verification and reporting tools.",
    imgSrc: features,
  },
  {
    title: "Exchange Rate Management",
    description: "Dynamic tools for setting and adjusting exchange rates.",
    imgSrc: responsiveness,
  },
  {
    title: "Revenue Analytics",
    description: "Dashboard for tracking income through fees and margins.",
    imgSrc: accessibilityFlow,
  },
  {
    title: "Customizable Fee Structures",
    description: "Flexible models for setting transaction fees and profit-sharing.",
    imgSrc: userInterface,
  },
  {
    title: "Support Management System",
    description: "Ticketing and live support tools for efficient issue resolution.",
    imgSrc: features,
  },
];

const userFeatures = [
  {
    title: "Simple Transfer Process",
    description: "Easy-to-use forms for sending money in minutes.",
    imgSrc: userInterface,
  },
  {
    title: "Currency Conversion",
    description: "Displays real-time exchange rates for transparency.",
    imgSrc: functionality,
  },
  {
    title: "Recipient Management",
    description: "Save recipient details for quicker future transfers.",
    imgSrc: userManagementFlow,
  },
  {
    title: "Transfer Tracking",
    description: "Notifications and updates for every transaction.",
    imgSrc: securityControlsFlow,
  },
  {
    title: "Multiple Payment Options",
    description: "Pay with bank accounts, cards, or digital wallets.",
    imgSrc: analyticsAndInsights,
  },
  {
    title: "Secure Login and Data Encryption",
    description: "Protects user data with 2FA and encryption protocols.",
    imgSrc: userInterface,
  },
];

const KeyFeatures = () => {
  return (
    <section className="pt-[130px]">
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        
        {/* Section Header */}
        <div className="section_header lg:mb-12 mb-8 text-center">
            <div className="max-w-[780px] mx-auto text-center">
                <h2 className="text-[24px] sm:text-[28px] md:text-[38px] lg:text-[48px] font-semibold mb-4 leading-tight">
                    Key Features of a Cross Border <span className="text-[#7c3aed]">Remittance Solution</span>
                </h2>
                <p className="text-lg text-[#6b7280] mx-auto">
                    A comprehensive remittance solutions platform should cater to both administrative needs for the bank and 
                    functional needs for the end users, ensuring a secure and user-friendly experience for all.
                </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
          
          {/* Administrator Features */}
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
                    <div className="flex items-center mb-3">
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
                    <div className="flex items-center mb-3">
                      <div className="w-[36px] h-[36px] flex items-center justify-center bg-white shadow-md rounded-full">
                        <img alt={feature.title} loading="lazy" width="20" height="20" src={feature.imgSrc} />
                      </div>
                      <h5 className="ms-2 font-semibold ">{feature.title}</h5>
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

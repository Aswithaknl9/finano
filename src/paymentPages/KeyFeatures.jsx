import React from "react";
import transactionManagement from "../assets/userInterface.png";
import fraudPrevention from "../assets/features.png";
import multiCurrency from "../assets/responsiveness.png";
import reportingAnalytics from "../assets/accessibilityFlow.png";
import feeStructures from "../assets/userInterface.png";
import complianceManagement from "../assets/features.png";
import fastCheckout from "../assets/userInterface.png";
import securePayment from "../assets/functionality.png";
import recurringPayments from "../assets/userManagementFlow.png";
import multiLanguage from "../assets/securityControlsFlow.png";
import mobileFriendly from "../assets/analyticsAndInsights.png";
import instantNotifications from "../assets/userInterface.png";

const adminFeatures = [
  {
    title: "Transaction Management Dashboard",
    description: "Monitor and manage all payment transactions in real time.",
    imgSrc: transactionManagement,
  },
  {
    title: "Fraud Prevention Tools",
    description: "Integrated fraud detection and risk assessment systems.",
    imgSrc: fraudPrevention,
  },
  {
    title: "Multi-Currency Support",
    description: "Handle transactions in different currencies effortlessly.",
    imgSrc: multiCurrency,
  },
  {
    title: "Reporting and Analytics",
    description: "Gain insights into transaction trends, revenues, and user behavior.",
    imgSrc: reportingAnalytics,
  },
  {
    title: "Customizable Fee Structures",
    description: "Adjust transaction fees and charges based on business needs.",
    imgSrc: feeStructures,
  },
  {
    title: "Compliance Management",
    description: "Automate compliance checks for PCI DSS, KYC, and AML requirements.",
    imgSrc: complianceManagement,
  },
];

const userFeatures = [
  {
    title: "Fast Checkout Process",
    description: "Enable users to complete payments quickly with intuitive interfaces.",
    imgSrc: fastCheckout,
  },
  {
    title: "Secure Payment Options",
    description: "Provide a variety of secure payment methods, including e-wallets, UPI, and cards.",
    imgSrc: securePayment,
  },
  {
    title: "Recurring Payment Support",
    description: "Simplify subscription-based models with automated recurring payments.",
    imgSrc: recurringPayments,
  },
  {
    title: "Multi-Language Support",
    description: "Cater to diverse customer bases with localized payment pages.",
    imgSrc: multiLanguage,
  },
  {
    title: "Mobile-Friendly Design",
    description: "Ensure seamless payment experiences on smartphones and tablets.",
    imgSrc: mobileFriendly,
  },
  {
    title: "Instant Payment Notifications",
    description: "Notify users of successful transactions in real time.",
    imgSrc: instantNotifications,
  },
];

const PaymentGatewayFeatures = () => {
  return (
    <section className="pt-[130px]">
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        
        {/* Section Header */}
        <div className="section_header lg:mb-12 mb-8 text-center">
        <div className="max-w-[775px] mx-auto text-center">
          <h2 className="text-[24px] sm:text-[28px] md:text-[38px] lg:text-[48px] font-semibold  leading-tight mb-4">
            Key Features of a <span className="text-[#7c3aed]">Payment Gateway Solution</span>
          </h2>
          <p className="text-[#6b7280] lg:w-[70%] mx-auto">
            A comprehensive payment gateway solutions platform should cater to both administrative 
            needs for the bank and functional needs for the end users, ensuring a secure and user-friendly experience for all.
          </p>
          </div>
        </div>

        {/* Feature Sections */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">

          {/* Administrator Features */}
          <div>
            <div className="text-center rounded-[20px] px-3 lg:pt-12 pt-6 lg:pb-16 pb-12 mb-[-30px] bg-[#DBEAFE]">
              <h3 className="xl:text-[30px] lg:text-2xl text-xl font-semibold text-[#213E65]">Administrator Features</h3>
            </div>
            <div className="bg-gray-100 xl:py-8 py-5 xl:px-6 px-4 rounded-[20px]">
              <ul className="space-y-4">
                {adminFeatures.map((feature, index) => (
                  <li key={index} className="bg-white rounded-[20px] shadow-lg p-5 flex items-start space-x-4">
                    <div className="w-[36px] h-[36px]  mb-2 flex items-center justify-center bg-gray-100 shadow-md rounded-full">
                      <img alt={feature.title} loading="lazy" width="20" height="20" src={feature.imgSrc} />
                    </div>
                    <div>
                      <h5 className="text-lg font-semibold mb-3">{feature.title}</h5>
                      <p className="text-[#6b7280] text-sm ">{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* User Interface Features */}
          <div>
            <div className="text-center rounded-[20px] px-3 lg:pt-12 pt-6 lg:pb-16 pb-12 mb-[-30px] bg-[#EDE9FE]">
              <h3 className="xl:text-[30px] lg:text-2xl text-xl font-semibold text-[#554693]">User Interface Features</h3>
            </div>
            <div className="bg-gray-100 xl:py-8 py-5 xl:px-6 px-4 rounded-[20px]">
              <ul className="space-y-4">
                {userFeatures.map((feature, index) => (
                  <li key={index} className="bg-white rounded-[20px] shadow-lg p-5 flex items-start space-x-4">
                    <div className="w-[36px]  mb-2 h-[36px] flex items-center justify-center bg-gray-100 shadow-md rounded-full">
                      <img alt={feature.title} loading="lazy" width="20" height="20" src={feature.imgSrc} />
                    </div>
                    <div>
                      <h5 className="text-lg  mb-2 font-semibold">{feature.title}</h5>
                      <p className="text-[#6b7280] text-sm">{feature.description}</p>
                    </div>
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

export default PaymentGatewayFeatures;

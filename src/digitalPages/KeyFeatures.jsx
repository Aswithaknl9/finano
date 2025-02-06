import React from "react";
import userManagement from "../assets/userInterface.png";
import transactionMonitoring from "../assets/features.png";
import complianceSecurity from "../assets/responsiveness.png";
import revenueAnalytics from "../assets/accessibilityFlow.png";
import feeSettings from "../assets/userInterface.png";
import supportTools from "../assets/features.png";
import instantTransfers from "../assets/userInterface.png";
import paymentOptions from "../assets/functionality.png";
import savingsGoals from "../assets/securityControlsFlow.png";
import fundManagement from "../assets/userManagementFlow.png";
import multiLanguage from "../assets/analyticsAndInsights.png";
import notifications from "../assets/userInterface.png";


const adminFeatures = [
  {
    title: "User Management Dashboard",
    description: "Control user accounts, profiles, and permissions seamlessly.",
    imgSrc: userManagement,
  },
  {
    title: "Transaction Monitoring",
    description: "Real-time insights into transactions for enhanced oversight.",
    imgSrc: transactionMonitoring,
  },
  {
    title: "Compliance and Security Tools",
    description: "Integrated KYC/AML processes to meet regulatory standards.",
    imgSrc: complianceSecurity,
  },
  {
    title: "Revenue and Analytics Dashboard",
    description: "Track earnings from transaction fees and user activity.",
    imgSrc: revenueAnalytics,
  },
  {
    title: "Customizable Fee Settings",
    description: "Flexibility to adjust transaction fees, subscription plans, and promotions.",
    imgSrc: feeSettings,
  },
  {
    title: "Support Tools",
    description: "Efficient ticketing and support system for resolving issues quickly.",
    imgSrc: supportTools,
  },
];

const userFeatures = [
  {
    title: "Instant Money Transfers",
    description: "Send and receive money instantly within the wallet ecosystem.",
    imgSrc: instantTransfers,
  },
  {
    title: "Payment Options",
    description: "Pay bills, shop online, or make in-store purchases with QR codes and NFC.",
    imgSrc: paymentOptions,
  },
  {
    title: "Fund Management",
    description: "Add money to the wallet or withdraw funds effortlessly.",
    imgSrc: fundManagement,
  },
  {
    title: "Savings and Goals",
    description: "Set financial goals and allocate funds for future use.",
    imgSrc: savingsGoals,
  },
  {
    title: "Multi-Language and Currency Support",
    description: "Cater to diverse user bases with global language and currency options.",
    imgSrc: multiLanguage,
  },
  {
    title: "Personalized Alerts and Notifications",
    description: "Stay updated with transaction notifications and spending insights.",
    imgSrc: notifications,
  },
];

const EWalletFeatures = () => {
  return (
    <section className="pt-[130px]">
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        
        {/* Section Header */}
        <div className="section_header lg:mb-12 mb-8 text-center">
        <div className="max-w-[780px] mx-auto text-center">
            <h2 className="text-[24px] sm:text-[28px] md:text-[38px] lg:text-[48px] font-semibold mb-4 leading-tight">
                Key Features of an <span className="text-[#7c3aed]">E-Wallet Solution</span>
            </h2>
            <p className="text-lg text-[#6b7280] mx-auto">
                A comprehensive e-wallet platform should cater to both administrative needs for the bank 
                and functional needs for the end users, ensuring a secure and user-friendly experience for all.
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

export default EWalletFeatures;

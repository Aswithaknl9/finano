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
    title: "Portfolio Analysis Tools",
    description: "Analyze performance across multiple portfolios with real-time data insights.",
    imgSrc: userManagement,
  },
  {
    title: "Risk Management",
    description: "Evaluate and mitigate risks with automated alerts and predictive analysis.",
    imgSrc: transactionMonitoring,
  },
  {
    title: "Regulatory Compliance Tracking",
    description: "Stay compliant with local and international financial regulations.",
    imgSrc: complianceSecurity,
  },
  {
    title: "Transaction Monitoring and Approval",
    description: "Track and approve transactions for enhanced security and accountability.",
    imgSrc: revenueAnalytics,
  },
  {
    title: "Customizable Reporting",
    description: "Generate detailed reports tailored to client or institutional requirements.",
    imgSrc: feeSettings,
  },
  {
    title: "Role-Based Access Control",
    description: "Define access levels for administrators, advisors, and clients to ensure data security.",
    imgSrc: supportTools,
  },
];

const userFeatures = [
  {
    title: "Dashboard with Real-Time Updates",
    description: "Offer a comprehensive overview of investment performance and market trends.",
    imgSrc: instantTransfers,
  },
  {
    title: "Investment Recommendations",
    description: "Provide AI-driven suggestions tailored to investor goals and risk appetite.",
    imgSrc: paymentOptions,
  },
  {
    title: "Transaction History and Tracking",
    description: "Allow users to view and monitor past and pending transactions.",
    imgSrc: fundManagement,
  },
  {
    title: "Goal-Based Planning Tools",
    description: "Help investors plan and achieve their financial objectives efficiently.",
    imgSrc: savingsGoals,
  },
  {
    title: "Multi-Currency Support",
    description: "Manage international investments with multi-currency tracking.",
    imgSrc: multiLanguage,
  },
  {
    title: "Mobile-Friendly Accessibility",
    description: "Ensure seamless management of investments across devices.",
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
                Key Features of an <span className="text-[#7c3aed]">Investment Management Solution</span>
            </h2>
            <p className="text-lg text-[#6b7280] mx-auto">
            A comprehensive investment management platform should cater to both administrative needs for the bank and functional needs for the end users, ensuring a secure and user-friendly experience for all.
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

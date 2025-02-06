import React from "react";
import issuanceFees from "../assets/streamlinedOperations.png";
import transactionFees from "../assets/userManagement.png";
import subscriptionPlans from "../assets/security.png";
import partnerships from "../assets/insightfulAnalytics.png";
import solutionBg from "../assets/solutionBg.png"; 

const profitMethods = [
  {
    title: "Platform Fees",
    description: "Charge a percentage of the funds raised by campaigns hosted on the platform.",
    imgSrc: issuanceFees,
  },
  {
    title: "Premium Campaign Features",
    description: "Offer additional services like enhanced visibility, analytics, or promotional tools for a fee.",
    imgSrc: transactionFees,
  },
  {
    title: "Third-Party Collaborations",
    description: "Partner with payment processors or sponsors for additional revenue streams.",
    imgSrc: subscriptionPlans,
  },
  {
    title: "Subscription Plans",
    description: "Introduce tiered plans with varying levels of access and support for campaign creators.",
    imgSrc: partnerships,
  },
];

const VirtualCardProfit = () => {
  return (
    <section className="pt-[130px]">
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        <div className="bg-[#EBF2FD] md:py-[40px] py-8 md:px-[30px] px-5 md:rounded-[50px] rounded-3xl">
          <div className="section_header mb-12">
            <div className="max-w-[900px] mx-auto text-center">
              <h2 className="mb-2 lg:text-[48px] font-semibold md:text-[38px] sm:text-[28px] text-[24px]">
              How Can Bank Owners Generate Profit from a <span className="text-[#7c3aed] inline">Crowdfunding Solution?</span>
              </h2>
            </div>
          </div>
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-5 gap-3 relative">
            <img
              alt="Background Image"
              loading="lazy"
              decoding="async"
              className="z-10"
              src={solutionBg}
              style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent' }}
            />
            {profitMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-[20px] shadow-md md:px-5 px-4 md:py-6 py-4 z-20">
                <div className="w-[48px] h-[48px] bg-white rounded-full shadow-md flex items-center justify-center mb-4">
                  <img alt="solution thumb" loading="lazy" width="25" height="24" src={method.imgSrc} style={{ color: 'transparent' }} />
                </div>
                <h5 className="md:text-[20px] font-semibold mb-3">{method.title}</h5>
                <p className="text-[#6B7280] text-[14px] ">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualCardProfit;

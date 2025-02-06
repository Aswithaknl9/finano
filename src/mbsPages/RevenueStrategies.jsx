import React from 'react';
import streamlined from '../assets/streamlinedOperations.png';
import userManagement from '../assets/userManagement.png';
import security from '../assets/security.png';
import insightfulAnalytics from '../assets/insightfulAnalytics.png';
import solutionBg  from '../assets/solutionBg.png';

const RevenueStrategies = () => {
  const strategies = [
    {
      icon: streamlined,
      title: "Transaction Fees",
      description: "Banks can earn revenue by charging small fees on transfers, bill payments, and other transactions, especially if these features are used frequently by customers."
    },
    {
      icon: userManagement,
      title: "Subscription Plans",
      description: "Offer tiered plans, where basic services are free, but premium features—such as higher transfer limits, advanced analytics, or exclusive financial products—are available through a subscription model."
    },
    {
      icon: security,
      title: "In-App Advertising",
      description: "Partner with relevant brands to display in-app advertisements or promotions for financial products, creating an additional revenue stream."
    },
    {
      icon: insightfulAnalytics,
      title: "Merchant Partnerships",
      description: "Establish partnerships with local merchants to earn a commission on transactions completed through the app’s QR code payment feature."
    }
  ];

  return (
    <section className="pt-[130px]">
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        <div className="bg-[#EBF2FD] md:py-[40px] py-8 md:px-[30px] px-5 md:rounded-[50px] rounded-3xl">
          <div className="section_header mb-12">
            <div className="max-w-[900px] mx-auto text-center">
              <h2 className="mb-2 lg:text-[48px] font-semibold md:text-[38px] sm:text-[28px] text-[24px]">
                How Can Bank Owners Generate Profit from a <span className="text-[#7c3aed] inline">Mobile Banking Solution?</span>
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
            {strategies.map((strategy, index) => (
              <div key={index} className="bg-white rounded-[20px] shadow-md md:px-5 px-4 md:py-6 py-4 z-20">
                <div className="w-[48px] h-[48px] bg-white rounded-full shadow-md flex items-center justify-center mb-4">
                  <img alt="solution thumb" loading="lazy" width="25" height="24" src={strategy.icon} style={{ color: 'transparent' }} />
                </div>
                <h5 className="md:text-[20px] font-semibold mb-3">{strategy.title}</h5>
                <p className="text-[#6B7280] text-[14px] ">{strategy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevenueStrategies;

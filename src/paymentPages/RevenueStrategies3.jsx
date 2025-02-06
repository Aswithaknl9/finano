import React from "react";
import transactionFees from "../assets/streamlinedOperations.png";
import subscriptionPlans from "../assets/userManagement.png";
import valueAddedServices from "../assets/security.png";
import crossBorderFees from "../assets/insightfulAnalytics.png";
import solutionBg from "../assets/solutionBg.png";

const profitMethods = [
  {
    title: "Transaction Fees",
    description: "Earn a percentage or fixed amount on every transaction processed through the gateway.",
    imgSrc: transactionFees,
  },
  {
    title: "Subscription Plans for Merchants",
    description: "Offer premium plans with added benefits like analytics and dedicated support.",
    imgSrc: subscriptionPlans,
  },
  {
    title: "Value-Added Services",
    description: "Provide services like fraud detection and chargeback management at additional costs.",
    imgSrc: valueAddedServices,
  },
  {
    title: "Cross-Border Transaction Fees",
    description: "Generate income by facilitating international payments with currency conversion.",
    imgSrc: crossBorderFees,
  },
];

const PaymentGatewayProfit = () => {
  return (
    <section className="pt-[130px] relative">
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        <div className="bg-[#EBF2FD] md:py-[40px] py-8 md:px-[30px] px-5 md:rounded-[50px] rounded-3xl relative overflow-hidden">
          
          {/* Background Image */}
          <img 
            alt="Background Image" 
            loading="lazy" 
            className="absolute inset-0 w-full h-full object-cover z-[-1]" 
            src={solutionBg} 
          />

          {/* Section Header */}
          <div className="section_header mb-12 text-center">
            <h2 className="mb-2 lg:text-[48px] font-semibold md:text-[38px] sm:text-[28px] text-[24px]">
            How Can Bank Owners Generate Profit from a
              <span className="text-[#7c3aed]"> Payment Gateway Solution? </span>
            </h2>
          </div>

          {/* Profit Methods Grid */}
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-5 gap-3 relative z-10">
            {profitMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-[20px] shadow-lg p-6 text-left">
                
                {/* Image at the Top */}
                <div className="w-[48px] h-[48px] bg-white shadow-md rounded-full flex items-center justify-center mb-4">
                  <img alt={method.title} loading="lazy" width="25" height="25" src={method.imgSrc} />
                </div>

                {/* Title & Description */}
                <h5 className="md:text-[20px] font-semibold mb-3">{method.title}</h5>
                <p className="text-gray-600 text-[14px]">{method.description}</p>
              
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default PaymentGatewayProfit;

import React, { useState } from "react";

const Pricing = () => {
  const [activeTab, setActiveTab] = useState("monthly");

  const plans = [
    {
      name: "Basic Plan",
      monthlyPrice: 29,
      yearlyPrice: 320,
      features: [
        "24/7 system monitoring",
        "Security management",
        "Secure finance backup",
        "Remote support",
      ],
      activeFeatures: ["Security management"],
    },
    {
      name: "Standard Plan",
      monthlyPrice: 49,
      yearlyPrice: 460,
      features: [
        "24/7 system monitoring",
        "Security management",
        "Secure finance backup",
        "Remote support",
      ],
      activeFeatures: ["24/7 system monitoring", "Security management"],
      recommended: true,
    },
    {
      name: "Extended Plan",
      monthlyPrice: 59,
      yearlyPrice: 640,
      features: [
        "24/7 system monitoring",
        "Security management",
        "Secure finance backup",
        "Remote support",
      ],
      activeFeatures: ["24/7 system monitoring", "Security management", "Remote support"],
    },
  ];

  return (
    <div className="pt-[85px] pb-[90px] px-[15px]">
      {/* Header Section */}
      <div className="w-full mx-auto p-6 flex flex-col items-center text-center">
        <span className="text-[#102068] uppercase mb-[15px]">Pricing</span>
        <h2 className="text-3xl font-semibold text-[#1a1e66]">Choose the Best Pricing Plan</h2>
        <p className="text-[16px] text-[#1a1e66] max-w-2xl">
          The argument in favor of using filler text goes something like this: If you use real content in the design process, anytime you reach a review point you’ll end up reviewing and negotiating the content itself and not the design.
        </p>
      </div>

      {/* Toggle Buttons */}
      <div className="w-full flex justify-center mb-8">
        <ul className="flex bg-gray-100 p-2 rounded-lg space-x-4">
          <li
            className={`px-6 py-2 rounded-lg font-medium cursor-pointer transition ${
              activeTab === "monthly" ? "bg-[#1a1e66] text-white" : "bg-white text-[#1a1e66]"
            }`}
            onClick={() => setActiveTab("monthly")}
          >
            Monthly
          </li>
          <li
            className={`px-6 py-2 rounded-lg font-medium cursor-pointer transition ${
              activeTab === "yearly" ? "bg-[#1a1e66] text-white" : "bg-white text-[#1a1e66]"
            }`}
            onClick={() => setActiveTab("yearly")}
          >
            Yearly <cite className="text-sm text-green-500 ml-2">Save 20%</cite>
          </li>
        </ul>
      </div>

      {/* Pricing Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`bg-white shadow-lg rounded-lg text-center border ${
              plan.recommended ? "border-[#1a1e66] border-2" : "border-gray-200"
            }`}
          >
            <div className="py-[23px] px-[26px]">
              <h3 className="text-xl font-semibold text-[#1a1e66] text-start">{plan.name}</h3>
              <p className="text-gray-500 text-sm mt-2 mb-4 text-start">
                The argument in favor of using filler text goes something.
              </p>
            </div>

            {/* Dynamic Pricing */}
            <p className="text-[36px] py-2 px-[30px] font-semibold text-white bg-gradient-to-b from-[#3140fc] to-[#091394]">
              ${activeTab === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
              <span className="text-sm text-white"> / {activeTab}</span>
            </p>

            {/* Features List */}
            <ul className="mt-4 space-y-2 px-[20px] pt-[16px] pb-[27px]">
              {plan.features.map((feature, idx) => (
                <li
                  key={idx}
                  className={`flex items-center justify-start px-[15px] py-[14px] rounded-md transition ${
                    plan.activeFeatures.includes(feature)
                      ? "bg-[#f2f2f2] text-[#1a1e66] font-semibold" // Active features with blue bg
                      : "text-gray-500"
                  }`}
                >
                  {plan.activeFeatures.includes(feature) ? "✔" : "✖"} {feature}
                </li>
              ))}
              {/* CTA Button */}
            <button className="mt-6 px-6 py-2 bg-[#1a1e66] text-white font-medium rounded-lg transition hover:bg-[#142355]">
              Get a Free Trial
            </button>
            </ul>

            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;

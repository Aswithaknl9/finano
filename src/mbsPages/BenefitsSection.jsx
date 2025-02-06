import React from "react";
import InsightfulAnalytics from "../assets/InsightfulAnalytics1.png";
import realTimeUpdates from "../assets/realTimeUpdates.png";
import securityControls from "../assets/securityControls.png";
const benefits = [
  {
    title: "Quick Deployment",
    description: "Our solutions are pre-built and customizable, allowing for rapid deployment to meet market demands.",
    imgSrc: InsightfulAnalytics,
  },
  {
    title: "Cost-Effective",
    description: "By choosing a ready-made product, businesses can save on development costs and focus their budgets on marketing and scaling.",
    imgSrc: realTimeUpdates,
  },
  {
    title: "Scalability",
    description: "Each solution is designed to scale with your business, whether you’re starting locally or expanding globally.",
    imgSrc: securityControls,
  },
];

const BenefitsSection = () => {
  return (
    <section className="pt-[130px]">
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
          
          {/* Left Content */}
          <div>
            <h2 className="text-2xl lg:text-[48px] md:text-[38px] sm:text-[28px] text-[24px] leading-tight font-semibold mb-3 lg:mb-6">
              Benefits of Choosing Our Ready-Made Products
            </h2>
            <p className="text-[16px] lg:text-[20px]  text-[#6b7280]">
              Our ready-made solutions are built by industry experts with years of experience, ensuring a reliable and professional product. 
              Our solutions are designed to meet industry standards and exceed your expectations by leveraging proven methodologies and advanced technologies.
            </p>
            <div className="mt-7 lg:mt-14">
              <a 
                href="/consultation" 
                className="bg-blue-600 hover:bg-blue-500 transition duration-300 px-6 py-3 text-white text-sm font-medium rounded-lg flex items-center justify-center w-fit shadow-lg"
              >
                Get Free Consultation
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth="1.5" 
                  stroke="currentColor" 
                  className="w-4 h-4 ml-2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Content - Benefits List */}
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li 
                key={index} 
                className="flex items-center rounded-[27px] p-6 lg:p-8 shadow-lg border border-gray-200 bg-white"
              >
                <img 
                  alt={benefit.title} 
                  loading="lazy" 
                  width="50" 
                  height="50" 
                  src={benefit.imgSrc} 
                  className="w-12 h-12 object-contain"
                />
                <div className="ms-5">
                  <h4 className="text-lg font-semibold lg:text-[24px] text-[16px] mb-2">{benefit.title}</h4>
                  <p className="text-[#6b7280] text-[14px] lg:text-[16px]">{benefit.description}</p>
                </div>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

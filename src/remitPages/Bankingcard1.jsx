import React from "react";
import team from "../assets/team.png";
import sqa from "../assets/sqa.png";
import knowledge from "../assets/knowledge.png";

const problems = [
  {
    title: "High Transaction Fees",
    description: "Reduces the cost of transferring money internationally, making it affordable for users.",
    imgSrc: team,
  },
  {
    title: "Delayed Transfers",
    description: "Speeds up transactions with instant or same-day transfers to recipients.",
    imgSrc: sqa,
  },
  {
    title: "Limited Accessibility",
    description: "Provides global reach, enabling access to remittance services even in remote areas.",
    imgSrc: knowledge,
  },
  {
    title: "Lack of Transparency",
    description: "Offers clear breakdowns of fees and exchange rates, ensuring users are informed.",
    imgSrc: knowledge,
  },
  {
    title: "Regulatory Compliance Challenges",
    description: "Incorporates compliance features for KYC and AML regulations, streamlining legal adherence.",
    imgSrc: knowledge,
  },
  {
    title: "User Trust Issues",
    description: "Builds trust with secure platforms and robust fraud prevention mechanisms.",
    imgSrc: knowledge,
  },
];

const Bankingcard1 = () => {
  return (
    <section className="pt-[130px]">
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        
        {/* Section Header */}
        <div className="section_header mb-7 lg:mb-12 text-center">
          <div className="max-w-[780px] mx-auto text-center mb-12">
            <h2 className="text-[24px] sm:text-[28px] md:text-[38px] lg:text-[48px] font-semibold">
              What Problems Does a Cross Border Remittance Solution Solve?
            </h2>
            </div>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="bg-white shadow-lg border border-gray-200 rounded-[20px] py-5 px-5 lg:px-8"
            >
              <div className="w-12 h-12 bg-white shadow-md rounded-full flex justify-center items-center mb-4">
                <img 
                  alt={problem.title} 
                  loading="lazy" 
                  width="22" 
                  height="22" 
                  className="object-contain" 
                  src={problem.imgSrc} 
                />
              </div>
              <h5 className="text-[18px] lg:text-[20px] font-semibold mb-3">{problem.title}</h5>
              <p className="text-[#6b7280] text-[14px] lg:text-[16px]">{problem.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Bankingcard1;

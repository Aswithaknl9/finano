import React from "react";
import Team from "../assets/team.png";
import Sqa from "../assets/sqa.png";
import knowledge from "../assets/knowledge.png";

const BankingSolutions = () => {
  const solutions = [
    {
      imgSrc: Team,
      title: "Limited Access to Banking Services",
      description:
        "Traditional banking services can be challenging for people in remote areas or those with busy lifestyles.",
    },
    {
      imgSrc: Sqa,
      title: "High Operating Costs",
      description:
        "Physical bank branches require considerable resources, from staff to facilities.",
    },
    {
      imgSrc: knowledge,
      title: "Enhanced Customer Engagement",
      description:
        "A mobile app can improve customer satisfaction by providing convenient, on-demand access to financial services.",
    },
    {
      imgSrc: knowledge,
      title: "Security Concerns",
      description:
        "Mobile banking solutions typically include advanced security features, such as multi-factor authentication.",
    },
    {
      imgSrc: knowledge,
      title: "Transaction Inefficiencies",
      description:
        "By digitizing routine banking processes, mobile banking minimizes errors, automates operations.",
    },
  ];

  return (
    <section className="pt-[130px]">
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        <div className="section_header mb-7 lg:mb-12">
          <div className="max-w-[775px] mx-auto text-center mb-12">
            <h2 className="text-[24px] sm:text-[28px] md:text-[38px] lg:text-[48px] font-semibold leading-tight ">What Problems Does a Mobile Banking Solution Solve?</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white shadow-md border border-gray-200 rounded-[20px] py-5 px-8 lg:px-8"
            >
              <div className="w-12 h-12 bg-white shadow-md rounded-full flex justify-center items-center mb-4">
                <img
                  alt={solution.title}
                  loading="lazy"
                  width="30"
                  height="30"
                  className="w-6 h-6"
                  src={solution.imgSrc}
                />
              </div>
              <h5 className="text-[18px] lg:text-[20px] font-semibold mb-3">{solution.title}</h5>
              <p className="text-[#6b7280] text-[16px]">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BankingSolutions;

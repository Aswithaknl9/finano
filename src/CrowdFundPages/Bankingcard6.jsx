import React from "react";
import accessToCapital from "../assets/team.png";
import projectVisibility from "../assets/sqa.png";
import adminCosts from "../assets/knowledge.png";
import donorEngagement from "../assets/knowledge.png";
import fundDistribution from "../assets/knowledge.png";
import complianceChallenges from "../assets/knowledge.png";

const crowdfundingProblems = [
  {
    title: "Access to Capital",
    description:
      "Simplifies the fundraising process, enabling startups and organizations to gather financial support from global backers.",
    imgSrc: accessToCapital,
  },
  {
    title: "Lack of Visibility for Projects",
    description:
      "Provides a platform to showcase projects, attracting potential investors and contributors.",
    imgSrc: projectVisibility,
  },
  {
    title: "High Administrative Costs",
    description:
      "Automates fund collection, reducing manual efforts and operational expenses.",
    imgSrc: adminCosts,
  },
  {
    title: "Limited Donor Engagement",
    description:
      "Offers features like live updates, backer communication, and social media integration to keep donors engaged.",
    imgSrc: donorEngagement,
  },
  {
    title: "Inefficient Fund Distribution",
    description:
      "Ensures transparent and timely disbursement of raised funds to project owners.",
    imgSrc: fundDistribution,
  },
  {
    title: "Regulatory and Compliance Challenges",
    description:
      "Integrates compliance tools to meet regional and global crowdfunding regulations.",
    imgSrc: complianceChallenges,
  },
];

const CrowdfundingProblems = () => {
  return (
    <section className="pt-[130px]">
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        {/* Section Header */}
        <div className="section_header mb-7 lg:mb-12 text-center">
          <div className="max-w-[775px] mx-auto">
            <h2 className="text-[24px] sm:text-[28px] md:text-[38px] lg:text-[48px] font-semibold leading-tight">
              What Problems Does a Crowdfunding Solution Solve?
            </h2>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {crowdfundingProblems.map((problem, index) => (
            <div
              key={index}
              className="bg-white shadow-lg border border-gray-200 rounded-[20px] py-6 px-6 lg:px-8 transition-transform transform hover:scale-105"
            >
              <div className="w-12 h-12 bg-white shadow-md rounded-full flex justify-center items-center mb-4">
                <img
                  src={problem.imgSrc}
                  alt={problem.title}
                  className="w-6 h-6 object-contain"
                />
              </div>
              <h5 className="text-[18px] lg:text-[20px] font-semibold mb-3">
                {problem.title}
              </h5>
              <p className="text-gray-600 text-sm">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CrowdfundingProblems;

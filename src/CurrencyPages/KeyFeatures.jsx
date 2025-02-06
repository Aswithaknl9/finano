import React from "react";
import userInterface from "../assets/userInterface.png";
import features from "../assets/features.png";
import responsiveness from "../assets/responsiveness.png";
import accessibilityFlow from "../assets/accessibilityFlow.png";
import functionality from "../assets/functionality.png";
import userManagementFlow from "../assets/userManagementFlow.png";
import securityControlsFlow from "../assets/securityControlsFlow.png";
import analyticsAndInsights from "../assets/analyticsAndInsights.png";

const adminFeatures = [
  {
    title: "Project Approval and Moderation",
    description: "Review and approve campaigns to maintain platform quality.",
    imgSrc: userInterface,
  },
  {
    title: "Secure Fund Management",
    description: "Manage funds with escrow features to ensure transparency and trust.",
    imgSrc: features,
  },
  {
    title: "Campaign Analytics and Reports",
    description: "Provide detailed insights into campaign performance and contributor demographics.",
    imgSrc: responsiveness,
  },
  {
    title: "Multi-Language and Multi-Currency Support",
    description: "Cater to a global audience with region-specific language and currency options.",
    imgSrc: accessibilityFlow,
  },
  {
    title: "Commission Management",
    description: "Automate fee deductions for platform usage from raised funds.",
    imgSrc: userInterface,
  },
  {
    title: "Customizable Platform Design",
    description: "Manage funds with escrow features to ensure transparency and trust.",
    imgSrc: features,
  },
];

const userFeatures = [
  {
    title: "Easy Campaign Creation",
    description: "Allow users to create and launch campaigns with guided templates and tools.",
    imgSrc: userInterface,
  },
  {
    title: "Contribution Tracking",
    description: "Enable donors to monitor their contributions and project updates in real-time.",
    imgSrc: functionality,
  },
  {
    title: "Social Media Integration",
    description: "Simplify sharing campaigns across platforms to increase visibility and reach.",
    imgSrc: userManagementFlow,
  },
  {
    title: "Reward Management",
    description: "Support reward-based crowdfunding by linking rewards to donation levels.",
    imgSrc: securityControlsFlow,
  },
  {
    title: "Instant Notifications",
    description: "Inform users of contributions, milestones, and updates promptly.",
    imgSrc: analyticsAndInsights,
  },
  {
    title: "Mobile-Friendly Platform",
    description: "Ensure accessibility and usability across devices.",
    imgSrc: userInterface,
  },
];

const KeyFeatures = () => {
  return (
    <section className="pt-[130px]">
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        
        <div className="section_header lg:mb-12 mb-8 text-center">
          <div className="max-w-[775px] mx-auto">
            <h2 className="mb-4 text-[24px] sm:text-[28px] md:text-[38px] lg:text-[48px] font-semibold  leading-tight">
              Key Features of a <span className="text-[#7c3aed]">Crowdfunding Solution</span>
            </h2>
            <p className="text-[#6b7280] text-sm">
            A comprehensive crowdfunding platform should cater to both administrative needs for the bank and functional needs for the end users, ensuring a secure and user-friendly experience for all.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
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

export default KeyFeatures;

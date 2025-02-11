import React from "react";
import policyPageBgLeft from "../assets/solutionPageBgLeft.webp";
import policyPageBgRight from "../assets/solutionPageBgRight.webp";
const InstallationPolicy = () => {
  return (
    <section className="relative py-[180px]">
      {/* Background Images */}
      <img
        alt="Background Image"
        loading="lazy"
        className="absolute top-0 left-0 z-[-2] hidden lg:block"
        src={policyPageBgLeft}
      />
      <img
        alt="Background Image"
        loading="lazy"
        className="absolute top-[60px] right-0 z-[-2] hidden lg:block"
        src={policyPageBgRight}
      />

      {/* Installation Policy Content */}
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        {/* Header */}
        <div className="section_header mb-7 lg:mb-12">
          <div className="max-w-[700px] mx-auto text-center">
            <div className="mb-6">
            <span className="text-[12px] font-semibold text-[#115E59] bg-[#CCFBF1] rounded-full py-1 px-3 mb-6">
              Installation Policy
            </span></div>
            <h1 className="text-[30px] md:text-[48px] lg:text-[48px] font-semibold">Installation Policy</h1>
          </div>
        </div>

        {/* Installation Policy Content */}
        <div className="bg-white shadow-lg border border-gray-300 py-8 sm:py-10 lg:py-14 px-5 sm:px-8 lg:px-10 rounded-[20px]">
          <h4 className="mb-3 text-lg font-semibold">
            Information of Installation Policy
          </h4>
          <p className="text-[#6b7280] text-sm">
            Thank you for choosing AppDevs for your software needs. To ensure a
            streamlined installation process and to provide you with the best
            possible service, we have established the following Installation
            Policy:
          </p>

          {/* Sections */}
          <div className="mt-5 space-y-5">
            {[
              {
                title: "Installation Service:",
                content:
                  "Upon purchasing our software, you have the option to avail our installation service. This service includes the installation of one specific version of the software.",
              },
              {
                title: "Updated Versions:",
                content:
                  "For installation of updated versions of the software in the future, a full installation charge will be applicable.",
              },
              {
                title: "Timely Information:",
                content:
                  "It is imperative that you supply us with all necessary information promptly. Failure to do so may result in delays in the installation process.",
              },
              {
                title: "Duration:",
                content:
                  "Our standard installation timeframe is 7-10 working days. However, please note that Google Play Store typically takes 3-7 days and Apple App Store takes 5-7 days for app approval. After 30 days, the installation process will be automatically closed.",
              },
              {
                title: "Additional Requests:",
                content:
                  "Any additional requests or customizations beyond the agreed scope may incur additional charges. We will provide a clear estimate for any additional work requested.",
              },
              {
                title: "Non-Refundable Amount:",
                content:
                  "Once the project has commenced and the agreed-upon sum has been paid, the amount paid for installation is non-refundable.",
              },
              {
                title: "Revisions:",
                content:
                  "We offer four revisions to ensure your satisfaction before the application is released. Once the application is released, no further revisions will be accepted. We are not responsible for issues arising from insufficient business information or documentation that may lead to app rejection.",
              },
              {
                title: "PlayStore & AppStore Compliance:",
                content:
                  "While we strive to ensure that our software complies with PlayStore and AppStore guidelines, we cannot be held responsible for any non-compliance issues.",
              },
              {
                title: "Copyright Infringement:",
                content:
                  "We disclaim all liability for any copyright infringement related to client-supplied content. It is the client’s responsibility to ensure they have the necessary rights and permissions for all content used in the software.",
              },
            ].map((section, index) => (
              <div key={index}>
                <h5 className="font-semibold text-[16px] my-3">{section.title}</h5>
                <p className="text-[14px] text-[#6b7280]">{section.content}</p>
              </div>
            ))}

            {/* Closing Statement */}
            <p className="text-[14px] text-[#6b7280] mt-3">
              We are dedicated to providing a seamless installation experience
              and delivering high-quality products. If you have any questions or
              concerns regarding our installation policy, please do not hesitate
              to contact our support team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallationPolicy;

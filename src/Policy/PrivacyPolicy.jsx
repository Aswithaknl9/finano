import React from "react";
import policyPageBgLeft from "../assets/solutionPageBgLeft.webp";
import policyPageBgRight from "../assets/solutionPageBgRight.webp";

const PrivacyPolicy = () => {
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
        className="absolute top-[8%] right-0 z-[-2] hidden lg:block"
        src={policyPageBgRight}
      />

      {/* Privacy Policy Content */}
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        {/* Header */}
        <div className="section_header mb-7 lg:mb-12">
          <div className="max-w-[700px] mx-auto text-center">
            <div className="mb-6">
            <span className="text-[12px] font-semibold text-[#115E59] bg-[#CCFBF1] rounded-full py-1 px-3">
              Privacy Policy
            </span></div>
            <h1 className="text-[30px] lg:text-[48px] font-semibold">Privacy Policy</h1>
          </div>
        </div>

        {/* Policy Content */}
        <div className="bg-white shadow-md border border-gray-300 py-8 sm:py-10 lg:py-14 px-5 sm:px-8 lg:px-10 rounded-[20px]">
          <h4 className="mb-3 font-semibold sm:text-[16px] lg:text-[24px]">Information Of Our Policy</h4>
          <p className="text-[#6b7280] text-[14px] lg:text-[16px]">
            At AppDevs, we are committed to protecting the privacy and security of our users' personal information. 
            This Privacy Policy outlines how we collect, use, and safeguard the information you provide when using our website and services.
          </p>

          {/* Sections */}
          <div className="mt-5 space-y-5">
            <div>
              <h5 className=" my-3 font-semibold lg:text-[18px] text-[16px]">1. Information We Collect</h5>
              <p className="text-[#6b7280] text-[14px] lg:text-[16px]">
                <strong>Personal Information:</strong> We may collect personal details such as your name, email, phone number, and billing information when you register, make a purchase, or contact us.
              </p>
              <p className="my-3 text-[#6b7280] text-[14px] lg:text-[16px]">
                <strong>Usage Information:</strong> We track interactions with our website, including IP addresses, browser types, device details, and visited pages.
              </p>
            </div>

            <div>
              <h5 className=" my-3 font-semibold lg:text-[18px] text-[16px]">2. How We Use Your Information</h5>
              <p className="text-[#6b7280] text-[14px] lg:text-[16px]">
                <strong>To Provide Services:</strong> We use collected information to process transactions, provide support, and manage user accounts.
              </p>
              <p className="text-[#6b7280] my-3 text-[14px] lg:text-[16px]">
                <strong>To Improve Our Services:</strong> We analyze trends and usage to enhance website functionality and performance.
              </p>
              <p className="text-[#6b7280] text-[14px] lg:text-[16px]">
                <strong>To Communicate With You:</strong> We send updates, notifications, and promotions. You can opt out of marketing communications anytime.
              </p>
            </div>

            <div>
              <h5 className=" my-3 font-semibold lg:text-[18px] text-[16px]">3. Information Sharing</h5>
              <p className="text-[#6b7280] text-[14px] lg:text-[16px]">
                <strong>Third-Party Service Providers:</strong> We may share data with trusted partners who help deliver our services. They are required to protect your information.
              </p>
              <p className="my-3 text-[#6b7280] text-[14px] lg:text-[16px]">
                <strong>Legal Compliance:</strong> Information may be disclosed to authorities when legally required.
              </p>
            </div>

            <div>
              <h5 className=" my-3 font-semibold lg:text-[18px] text-[16px]">4. Data Security</h5>
              <p className="text-[#6b7280] text-[14px] lg:text-[16px]">
                We use industry-standard security measures to protect your personal data from unauthorized access and threats.
              </p>
            </div>

            <div>
              <h5 className=" my-3 font-semibold lg:text-[18px] text-[16px]">5. Your Choices</h5>
              <p className="text-[#6b7280] text-[14px] lg:text-[16px]">
                You can access, update, or delete your personal data through account settings or by contacting support.
              </p>
            </div>

            <div>
              <h5 className=" my-3 font-semibold lg:text-[18px] text-[16px]">6. Children's Privacy</h5>
              <p className="text-[#6b7280] text-[14px] lg:text-[16px]">
                Our services are not intended for users under 18. We do not knowingly collect personal data from children without parental consent.
              </p>
            </div>

            <div>
              <h5 className=" my-3 font-semibold lg:text-[18px] text-[16px]">7. Changes to This Privacy Policy</h5>
              <p className="text-[#6b7280] text-[14px] lg:text-[16px]">
                We reserve the right to update this Privacy Policy. Any changes will be posted on our website.
              </p>
            </div>

            <div>
              <h5 className=" my-3 font-semibold lg:text-[18px] text-[16px]">8. Contact Us</h5>
              <p className="text-[#6b7280] text-[14px] lg:text-[16px]">
                If you have questions regarding this Privacy Policy, feel free to contact us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;

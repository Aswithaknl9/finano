import React from "react";
import policyPageBgLeft from "../assets/solutionPageBgLeft.webp";
import policyPageBgRight from "../assets/solutionPageBgRight.webp";

const RefundPolicy = () => {
  return (
    <section className="py-[180px] relative">
      {/* Background Images */}
      <img
        alt="Background Image"
        loading="lazy"
        width="795"
        height="777"
        className="absolute top-0 left-0 z-[-2] hidden lg:block"
        src={policyPageBgLeft}
      />
      <img
        alt="Background Image"
        loading="lazy"
        width="558"
        height="799"
        className="absolute top-[60px] right-0 z-[-2] hidden lg:block"
        src={policyPageBgRight}
      />

      {/* Container */}
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        {/* Section Header */}
        <div className="section_header mb-7 lg:mb-12 text-center">
          <div className="max-w-[700px] mx-auto">
            <span className="text-[12px] font-semibold text-[#115E59] bg-[#CCFBF1] rounded-full py-1 px-3 mb-6 inline-block">
              Refund Policy
            </span>
            <h1 className="sm:text-[30] lg:text-[48px] font-semibold">Refund Policy</h1>
          </div>
        </div>

        {/* Policy Content */}
        <div className="bg-white shadow-md border border-gray-300 py-8 sm:py-10 lg:py-14 px-5 sm:px-8 lg:px-10 rounded-[20px]">
          <h4 className="sm:text-[16px] md:text-[18px]  lg:text-[24px] font-semibold mb-3">Information Of Refund Policy</h4>
          <p className="text-[#6b7280] sm:text-[14px] lg:text-[16px]">
            At AppDevs, we strive to ensure the satisfaction of our valued customers. We understand that occasionally, 
            circumstances may arise that warrant a refund request. To maintain transparency and uphold our commitment to 
            customer service, we have formulated the following refund policy:
          </p>

          {/* Refund Eligibility */}
          <h5 className="my-3 text-[16px] lg:text-[18px] font-semibold">Eligibility for Refund:</h5>
          <ul className="list-disc pl-5 space-y-2 mb-4 text-[#6b7280]">
            <li>Refund requests must be submitted within 3 days of the purchase date.</li>
            <li>The software product must be deemed faulty or not as described to be eligible for a refund.</li>
            <li>Refunds will not be issued for change of mind or if the software has been modified or altered by the customer.</li>
          </ul>

          {/* Refund Process */}
          <h5 className="my-3 text-[16px] lg:text-[18px]  font-semibold">Refund Process:</h5>
          <ul className="list-disc pl-5 space-y-2 mb-4 text-[#6b7280]">
            <li>Customers must contact our support team to initiate a refund request.</li>
            <li>Upon receipt of the refund request, our team will assess the validity of the claim and investigate the reported issue.</li>
            <li>If the claim is valid and meets the eligibility criteria, a refund will be processed within 14 business days.</li>
          </ul>

          {/* Non-Refundable Items */}
          <h5 className="my-3 text-[16px] lg:text-[18px]  font-semibold">Non-Refundable Items:</h5>
          <ul className="list-disc pl-5 space-y-2 mb-4 text-[#6b7280]">
            <li>Customized or personalized software solutions are non-refundable.</li>
            <li>Services such as installation, customization, or consultancy fees are non-refundable once rendered.</li>
          </ul>

          {/* Chargebacks & Disputes */}
          <h5 className="my-3  text-[16px] lg:text-[18px]  font-semibold">Chargebacks and Disputes:</h5>
          <ul className="list-disc pl-5 space-y-2 mb-4 text-[#6b7280]">
            <li>Initiating a chargeback or dispute without contacting our support team first may result in suspension of services.</li>
            <li>We encourage customers to reach out to our support team to resolve any issues or concerns promptly.</li>
          </ul>

          {/* Communication */}
          <h5 className="my-3 text-[16px] lg:text-[18px]  font-semibold">Communication:</h5>
          <p className="text-[#6b7280]">
            Open communication is key to resolving any issues or concerns regarding our products or services. 
            Customers are encouraged to reach out to our support team for assistance.
          </p>

          {/* Exceptions */}
          <h5 className="my-3 text-[16px] lg:text-[18px]  font-semibold">Exceptions:</h5>
          <p className="text-[#6b7280]">
            Exceptions to this refund policy may be made at the discretion of AppDevs management in exceptional circumstances.
          </p>

          {/* Contact Us */}
          <h5 className="my-3  text-[16px] lg:text-[18px] font-semibold">Contact Us:</h5>
          <p className="text-[#6b7280]">
            If you have any questions or concerns regarding our refund policy, please don’t hesitate to contact our support team. 
            We appreciate your trust in AppDevs and are committed to providing high-quality software solutions and exceptional customer service. 
            Thank you for choosing AppDevs for your software needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RefundPolicy;

import React from "react";
import policyPageBgLeft from "../assets/solutionPageBgLeft.webp";
import policyPageBgRight from "../assets/solutionPageBgRight.webp";

const TermsAndConditions = () => {
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

      {/* Terms & Conditions Content */}
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        {/* Header */}
        <div className="section_header mb-7 lg:mb-12">
          <div className="max-w-[700px] mx-auto text-center">
          <div className="mb-6">
            <span className="text-[12px] font-semibold text-[#115E59] bg-[#CCFBF1] rounded-full py-1 px-3 mb-6">
              Terms Of Conditions
            </span></div>
            <h1 className="text-[30px] md:text-[48px] lg:text-[48px] font-semibold">Terms of Conditions</h1>
          </div>
        </div>

        {/* Terms & Conditions Content */}
        <div className="bg-white shadow-md border border-gray-300 py-8 sm:py-10 lg:py-14 px-5 sm:px-8 lg:px-10 rounded-[20px]">
          <h4 className="mb-3 font-semibold text-[16px] lg:text-[24px]">Terms of Conditions</h4>
          <p className="text-[#6b7280] text-[14px] ">
            Welcome to AppDevs Software LTD ("AppDevs," "we," "us," or "our"). These Terms and Conditions ("Terms") govern your access to and use of our website,{" "}
            <a href="https://appdevs.net" className="text-blue-600 hover:underline">https://appdevs.net</a>, and any related services, applications, and products.
            By accessing or using our Services, you agree to these Terms. If you do not agree, please refrain from using our Services.
          </p>

          {/* Sections */}
          <div className="mt-5 space-y-5">
            {[
              {
                title: "Acceptance of Terms",
                content:
                  "By using our Services, you confirm that you are at least 18 years old or have received parental or guardian permission if under 18. By accessing our Services, you agree to comply with these Terms and any changes we may implement. We reserve the right to update these Terms periodically.",
              },
              {
                title: "Use of Services",
                content:
                  "Our Services are intended for lawful and appropriate use only. You agree to not misuse or abuse the Services, including but not limited to unauthorized access to our systems, hacking, or any form of exploitation. You also agree not to use the Services in any manner that may cause harm to AppDevs, its users, or the general public.",
              },
              {
                title: "User Accounts and Security",
                content:
                  "To access certain features, you may be required to create an account. You agree to provide accurate and up-to-date information during registration and maintain the confidentiality of your account credentials. You are responsible for all actions performed under your account, and you agree to notify us of any unauthorized use.",
              },
              {
                title: "Intellectual Property Rights",
                content:
                  "All content, materials, software, trademarks, and other assets on our Services are the intellectual property of AppDevs or our licensors. You are granted limited access for personal, non-commercial use only. You may not reproduce, distribute, or create derivative works from any content on our Services without prior written consent from AppDevs.",
              },
              {
                title: "Payment Terms",
                content:
                  "Certain Services may require payment. By providing payment details, you confirm that you are authorized to use the provided payment method. All payments are subject to our pricing and payment terms at the time of transaction. We reserve the right to modify fees and will notify you of any changes that impact you.",
              },
              {
                title: "Termination of Service",
                content:
                  "We may suspend or terminate your account or access to our Services without notice if you violate these Terms or engage in harmful, illegal, or abusive behavior. You may terminate your account by contacting us, but any fees paid prior to termination are non-refundable, unless stated otherwise in specific terms.",
              },
              {
                title: "Disclaimer of Warranties",
                content:
                  'Our Services are provided "as-is" without warranties of any kind, whether express or implied. We do not guarantee that our Services will be error-free, uninterrupted, or free from security vulnerabilities. AppDevs disclaims any implied warranties of merchantability, fitness for a particular purpose, and non-infringement.',
              },
              {
                title: "Limitation of Liability",
                content:
                  "To the extent permitted by law, AppDevs and its affiliates, directors, employees, and agents will not be liable for any indirect, incidental, punitive, or consequential damages, including loss of profits, data, or goodwill, arising from your use or inability to use our Services.",
              },
              {
                title: "Privacy Policy",
                content:
                  "Your privacy is essential to us. Please review our Privacy Policy to understand how we collect, use, and protect your personal information. By using our Services, you agree to our privacy practices as outlined in our policy.",
              },
              {
                title: "Amendments and Updates",
                content:
                  "We may revise these Terms at any time. Any changes will be posted on this page, and we encourage you to review the Terms periodically. If the changes are substantial, we will notify users through our website or other communication methods. Continued use of the Services following any changes constitutes acceptance of the revised Terms.",
              },
              {
                title: "Governing Law and Jurisdiction",
                content:
                  "These Terms shall be governed by and construed in accordance with the laws of Bangladesh, without regard to its conflict of law principles. You agree that any disputes arising out of or in connection with these Terms or your use of our Services shall be subject to the exclusive jurisdiction of the courts located in Dhaka, Bangladesh. By accessing or using our Services, you consent to submit to the jurisdiction of these courts for such matters.",
              },
            ].map((section, index) => (
              <div key={index}>
                <h5 className="font-semibold my-3 text-[16px]">{section.title}</h5>
                <p className="text-[#6b7280] text-[14px]">{section.content}</p>
              </div>
            ))}

            {/* Contact Information */}
            <div>
              <h5 className="font-semibold my-3">Contact Information</h5>
              <p className="text-[#6b7280] text-[14px]">
                If you have any questions, please contact us at one of our offices:
              </p>
              <div className="mt-3 space-y-3 text-[14px] text-[#6b7280]">
                <p>
                  <strong>UK Office</strong>
                  <br />71-75 Shelton Street
                  <br />Covent Garden
                  <br />London - WC2H 9JQ
                  <br />London, United Kingdom
                </p>
                <p>
                  <strong>Bangladesh Office</strong>
                  <br />F # F1 (5th Floor), H # 1188
                  <br />Avenue # 11, Mirpur DOHS
                  <br />Dhaka, Bangladesh
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:contact@appdevs.net" className="text-blue-600 hover:underline">
                    contact@appdevs.net
                  </a>
                </p>
                <p>We are here to help and will respond to inquiries as promptly as possible.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;

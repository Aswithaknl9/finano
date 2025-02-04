import React, { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is a Product Key, and why is it necessary?",
      answer:
        "A Product Key is a unique code used to activate and verify the purchase of our application. It ensures that the software is genuine and legally acquired, preventing unauthorized use or piracy.",
    },
    {
      question: "How do I get my Product Key?",
      answer:
        "You can generate your Product Key by filling out the form on this page with accurate purchase and company information. Once all details are verified, your Product Key will be issued.",
    },
    {
      question: "Can I use one Product Key for multiple installations?",
      answer:
        "No, a Product Key is valid for a single deployment. For additional installations, you will need to purchase additional licenses.",
    },
    {
      question: "Are the Product Key and Purchase Code the same?",
      answer:
        "No, they are different. The Purchase Code is provided by CodeCanyon upon purchase, while the Product Key is generated by AppDevs. However, the Purchase Code is required to generate the Product Key.",
    },
    {
      question: "What happens if I lose my Product Key?",
      answer:
        "If you lose your Product Key, contact our support team with proof of purchase, and we will assist you in recovering it.",
    },
    {
      question: "Will my application stop working if I don’t activate it with a Product Key?",
      answer:
        "Yes, the application requires a valid Product Key for activation and operation. Without activation, certain features may be restricted or disabled.",
    },
    {
      question: "Does the Product Key feature protect against null scripts?",
      answer:
        "Yes, the Product Key ensures that only licensed users can activate the software, significantly reducing the risk of null scripts and unauthorized use.",
    },
    {
      question: "What should I do if my Product Key is not working?",
      answer:
        "Ensure that you have entered the correct details, including your purchase code and email. If the problem persists, contact our support team for assistance.",
    },
    {
      question: "Is my information secure during the Product Key generation process?",
      answer:
        "Yes, we prioritize your privacy and security. All submitted information is encrypted and used solely for generating your Product Key.",
    },
    {
      question: "Can I transfer my Product Key to another domain or server?",
      answer:
        "Product Key transfers may be allowed under certain conditions. Please contact our support team for further guidance on this process.",
    },
    {
      question: "Do I need to regenerate a Product Key after updating the software?",
      answer:
        "No, updates to the software do not require a new Product Key unless the installation is moved to a new domain or server.",
    },
  ];

  return (
    <section className="pb-[130px] relative">
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        <div className="section_header mb-7 lg:mb-12 text-center">
          <span className="text-[12px] font-semibold text-[#115E59] bg-[#CCFBF1] rounded-full py-1 px-3 mb-6">
            Questions
          </span>
          <h2 className="mb-0 text-[28px] lg:text-[48px] font-semibold">
            Frequently Asked Questions (FAQs)
          </h2>
        </div>
        <ul className="space-y-2">
          {faqs.map((faq, index) => (
            <li
              key={index}
              className="bg-white border border-[#E5E7EB] shadow-md py-4 lg:py-7 px-5 lg:px-14 rounded-[20px] cursor-pointer transition-all duration-300 ease-in-out hover:shadow-lg"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-center justify-between">
                <h4 className="font-semibold w-[90%] text-[16px] lg:text-[20px]">
                  {faq.question}
                </h4>
                <div
                  className={`relative transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 sm:w-7 stroke-gray-600"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.12549 15C1.12549 22.662 7.33699 28.875 15.0005 28.875C22.6625 28.875 28.8755 22.662 28.8755 15C28.8755 7.338 22.6625 1.125 15.0005 1.125C7.33699 1.125 1.12549 7.338 1.12549 15Z"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M9.79346 12.8364L15 18.0654L20.2065 12.8364"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-[500px] opacity-100 pt-3" : "max-h-0 opacity-0"
                }`}
              >
                <p className="w-full lg:w-[90%] text-[14px] lg:text-[16px] text-gray-600">
                  {faq.answer}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQSection;

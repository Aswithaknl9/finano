import React, { useState } from "react";

const faqs = [
  {
    question: "How do I schedule a consultation with an expert?",
    answer: "You can schedule a consultation by visiting the Talk to Expert section and booking a meeting through our Calendly link.",
  },
  {
    question: "What topics can be discussed during a consultation?",
    answer: "During the consultation, you can discuss customization requirements, integration options, business goals, and technical concerns related to your project.",
  },
  {
    question: "How much does customization cost?",
    answer: "The cost of customization depends on the complexity and scope of your requirements. After a consultation, we’ll provide a tailored proposal with a detailed cost estimate.",
  },
  {
    question: "How do I start the customization process?",
    answer: "Begin by submitting your project details on the Get Customization page. Our team will review the information, schedule a consultation, and prepare a proposal for your approval.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-[130px] bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-[24px] sm:text-[28px] md:text-[38px] lg:text-[48px] font-semibold">
            Here Are Some (FAQ) About <span className="text-blue-500">Our Customization</span>
          </h2>
        </div>

        {/* FAQ List */}
        <ul className="space-y-4">
          {faqs.map((faq, index) => (
            <li
              key={index}
              className="bg-white border border-gray-300 shadow-md  py-[28px] px-[56px] sm:px-10 lg:px-14 rounded-2xl cursor-pointer transition-all duration-300 ease-in-out hover:shadow-lg"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-center justify-between ">
                <h4 className="font-medium text-[16px] md:text-[18px] lg:text-[24px] w-[90%]">
                  {faq.question}
                </h4>
                <div
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 sm:w-7 stroke-gray-500"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.12549 15C1.12549 22.662 7.33699 28.875 15.0005 28.875C22.6625 28.875 28.8755 22.662 28.8755 15C28.8755 7.338 22.6625 1.125 15.0005 1.125C7.33699 1.125 1.12549 7.338 1.12549 15Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.79346 12.8364L15 18.0654L20.2065 12.8364"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              

              {/* Expandable Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-[#6b7280] text-[14px] lg:text-[16px]">{faq.answer}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQSection;

import React, { useState } from "react";

const Questions3 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqs = [
    {
      question: "What is UI/UX design?",
      answer:
        "UI (User Interface) focuses on the look and feel of your platform, while UX (User Experience) emphasizes ease of use and functionality.",
    },
    {
      question: "What industries do you cater to?",
      answer:
        "We design for various industries, including FinTech, SaaS, eCommerce, healthcare, and more.",
    },
    {
      question: "Do you provide SaaS-specific designs?",
      answer:
        "Yes, we specialize in creating sleek, functional designs tailored for SaaS platforms.",
    },
    {
      question: "How long does the design process take?",
      answer:
        "Timelines vary based on project complexity, but we ensure efficient delivery without compromising quality.",
    },
    {
      question: "Can you redesign my existing platform?",
      answer:
        "Absolutely! We offer redesign services to modernize your existing UI/UX for better performance.",
    },
  ];

  return (
    <section className="py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="section_header mb-8 lg:mb-12 text-center">
          <h2 className="font-semibold text-3xl lg:text-[40px]">
          Frequently Asked Questions About
            <span className="text-blue-600">UI/UX and SaaS Design Services</span>
          </h2>
        </div>
        <ul className="space-y-2">
          {faqs.map((faq, index) => (
            <li
              key={index}
              className="bg-white__color border border-[#E5E7EB] shadow-primary__shadow py-4 lg:py-7 px-5 lg:px-14 rounded-[20px] cursor-pointer transition-all duration-300 ease-in-out hover:shadow-lg"
            >
              <div
                className="flex items-center justify-between"
                onClick={() => toggleFAQ(index)}
              >
                <h4 className="font-semibold w-[90%]">{faq.question}</h4>
                <div
                  className={`relative right-[-10px] lg:right-[-30px] transform transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 sm:w-7 stroke-color__paragraph"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.12549 15C1.12549 22.662 7.33699 28.875 15.0005 28.875C22.6625 28.875 28.8755 22.662 28.8755 15C28.8755 7.338 22.6625 1.125 15.0005 1.125C7.33699 1.125 1.12549 7.338 1.12549 15Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M9.79346 12.8364L15 18.0654L20.2065 12.8364"
                      stroke="currentColor"
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
                <p className="w-full lg:w-[90%] text-[#6b7280]">{faq.answer}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Questions3;

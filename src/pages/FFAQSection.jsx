import React, { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What should I do if I’m unsure which solution will work best for my requirements?",
      answer: "If you’re unsure which solution fits your needs, contact our sales team for guidance. They’ll assess your business goals and recommend the most suitable product for your requirements.",
    },
    {
      question: "Who should I contact if I need to integrate a new payment gateway?",
      answer: "For payment gateway integration, please reach out to our WhatsApp, Telegram, or Skype.",
    },
    {
      question: "Is it possible to install your script on a local server for testing?",
      answer: "Since our scripts are fully functional and ready for production, we do not offer local host deployment.",
    },
    {
      question: "How do I submit a technical support ticket?",
      answer: "You can submit a technical support ticket by navigating to the Technical Support section on our Contact Us page. Provide details about the issue, and our support team will assist you.",
    },
    {
      question: "What are the support hours for technical assistance?",
      answer: "Our technical team is available Monday to Friday, 9:00 AM - 7:00 PM (GMT +6).",
    },
    {
      question: "How quickly can I expect a response after submitting a ticket?",
      answer: "Our technical team always strives to respond to every ticket as quickly as possible. However, during peak hours or periods of high demand, there may be slight delays.",
    },
  ];

  return (
    <section className="py-[100px] bg-white">
    <div className="max-w-[1248px] mx-auto px-6">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-[24px] sm:text-[28px] md:text-[38px] lg:text-[48px] font-semibold">
        Here Are Some (FAQ) About Our{" "}
          <span className="text-blue-500">Contact Us</span>
        </h2>
      </div>

      {/* FAQ List */}
      <ul className="space-y-4">
        {faqs.map((faq, index) => (
          <li
            key={index}
            className="bg-white border border-gray-300 shadow-md py-7 px-14 lg:px-8 rounded-2xl cursor-pointer transition-all duration-300 ease-in-out hover:shadow-lg"
            onClick={() => toggleFAQ(index)}
            aria-expanded={openIndex === index}
          >
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-[16px] md:text-[18px] lg:text-[20px] w-[90%]">
                {faq.question}
              </h4>

              {/* Icon - Rotate when expanded */}
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
                  className="w-5 lg:w-7 stroke-gray-500"
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

            {/* Expandable Answer */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-[#6b7280] text-[14px] lg:text-[16px]">
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

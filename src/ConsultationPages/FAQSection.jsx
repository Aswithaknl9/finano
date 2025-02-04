import React, { useState } from "react";

const faqs = [
  {
    question: "What topics can I discuss during the consultation?",
    answer:
      "During your consultation, you can ask about our product customization options, get answers to pre-sales questions, or discuss the requirements for custom development tailored to your business needs.",
  },
  {
    question: "Is this consultation really free?",
    answer:
      "Yes, your first 30-minute consultation is absolutely free. This session allows us to understand your goals and demonstrate how our solutions can add value to your business.",
  },
  {
    question: "How do I join the consultation meeting?",
    answer:
      "After booking, you’ll receive a confirmation email with a link to join the web conference at your chosen time, making it easy for you to connect with us.",
  },
  {
    question: "Can I reschedule or cancel the consultation?",
    answer:
      "Yes, you can reschedule or cancel your appointment via the confirmation email. To accommodate changes, please let us know at least 24 hours in advance.",
  },
  {
    question: "What should I prepare for the consultation?",
    answer:
      "To maximize the value of your session, come prepared with a list of your goals, any specific challenges, and questions related to customization or development. If applicable, bringing documents or previous setups can also be helpful.",
  },
  {
    question: "What should I expect after the consultation?",
    answer:
      "After the consultation, we’ll provide a detailed summary and recommended next steps. If you’re ready to proceed, we can discuss a personalized action plan, whether it’s for product customization or full-scale custom development.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-[100px] bg-white">
      <div className="max-w-[1248px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-[24px] sm:text-[28px] md:text-[38px] lg:text-[48px] font-semibold">
            Frequently Asked Questions (FAQs) About Our{" "}
            <span className="text-blue-500">Consultation Services</span>
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

import React, { useState } from "react";

const Questions6 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqs = [
    {
      question: "What are DevOps services?",
      answer:
        "DevOps services involve practices and tools that integrate development and IT operations to enhance collaboration, automate processes, and improve software delivery speed and quality.",
    },
    {
      question: "What industries benefit from DevOps?",
      answer:
        "DevOps is ideal for industries like FinTech, healthcare, e-commerce, IT, and any organization that prioritizes rapid and reliable software delivery.",
    },
    {
      question: "How can DevOps reduce costs?",
      answer:
        "By automating repetitive tasks, optimizing resource usage, and preventing downtime, DevOps minimizes operational costs.",
    },
    {
      question: "Do I need DevOps if I’m already using agile development?",
      answer:
        "Yes, DevOps complements agile development by focusing on the entire software lifecycle, from development to deployment and maintenance.",
    },
    {
      question: "How do I get started with DevOps?",
      answer:
        "Contact us to assess your current processes, and we’ll help you create a custom DevOps roadmap.",
    },
  ];

  return (
    <section className="py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="section_header mb-8 lg:mb-12 text-center">
          <h2 className="font-semibold text-3xl lg:text-[40px]">
          Common Questions About
            <span className="text-blue-600">DevOps Services</span>
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

export default Questions6;

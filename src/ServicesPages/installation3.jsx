import React, { useState } from "react";


const Installation3 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How long does the installation process take?",
      answer:
        "As soon as you provide all the required information and credentials, our team will begin the installation process. The entire setup, including app deployment, will be completed within 7-9 working days.",
    },
    {
      question: "What happens if I encounter issues after installation?",
      answer:
        "If you face any issues after installation, you can create a support ticket through our platform. Our technical team is always ready to assist and will resolve your issues promptly.",
    },
    {
      question: "Are there additional costs for installation beyond the package price?",
      answer:
        "No, there are no additional costs for the services included in the package. However, if you request services that are not listed in the package, additional charges will apply based on your requirements.",
    },
    {
      question: "How can I track the progress of my installation?",
      answer:
        "Once you’ve completed the payment, you will receive an Installation ID. Using this ID, you can initiate an installation conversation from the AppDevs.net dashboard. This allows you to communicate directly with our technical team and get updates on your installation status.",
    },
    {
      question: "What should I prepare before requesting an installation service?",
      answer:
        "To ensure a smooth installation process, you’ll need to provide the following: your business name, logo, server credentials, Play Store Console Account, and App Store Console Account. You will also receive a detailed Installation Requirements Document outlining everything needed for the process.",
    },
    {
      question: "Why should I choose the Premium Plan for my product installation?",
      answer:
        "You should choose the Premium plan to ensure your app stands out and succeeds on platforms like Google Play Store and Apple App Store. With the Premium plan, we provide comprehensive customizations, including web and app template updates, redesigned assets, new logo creation, and additional unique designs tailored to your branding.",
    },
  ];

  return (
    <section className="py-[130px] mx-40">
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        <div className="section_header mb-7 lg:mb-12">
          <div className="max-w-[775px] mx-auto text-center">
            <h2 className="mb-0 font-bold text-5xl">
            Here Are Some (FAQ) About 
              <span className="text-[#2974e7] inline">Installations Services</span>
            </h2>
          </div>
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

export default Installation3;

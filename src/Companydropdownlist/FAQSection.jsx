import React from 'react'
import { useState } from 'react';


const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqs = [
    {
      question: "What is the process of buying your products?",
      answer:
        "You can easily purchase our products from the CodeCanyon marketplace. Simply visit our portfolio, browse through our offerings, and follow the straightforward checkout process.",
    },
    {
      question: "How can I check out the demo before purchasing?",
      answer:
        "Visit our product demo showcase to find live demos. If you need additional access, contact our sales team to request a personalized demonstration.",
    },
    {
      question: "Can I purchase products for my clients?",
      answer:
        "Yes, you can purchase our solutions for your clients. We recommend buying an extended license if you are purchasing products for your clients.",
    },
    {
      question: "Are your scripts production ready?",
      answer:
        "Yes, all our scripts are production-ready and come with detailed documentation to facilitate deployment.",
    },
    {
      question: "What happens if my needs change over time? Can I upgrade or adjust my plan?",
      answer:
        "Absolutely! Our solutions are scalable. You can request an upgrade or customization to adapt the software to your changing needs.",
    },
    {
        question: "What to do after facing issues in my project?",
        answer:
          "Contact our technical support team and submit a ticket. Include details about the issue for faster resolution.",
    },
    {
        question: "Am I able to deploy the script myself?",
        answer:
          "Yes, our scripts are user-friendly and come with documentation for self-deployment. If you don't want any kind of deployment hassle then please check out our installation service.",
    },
    {
        question: "What should I do if I need help deploying the app on the Play Store or App Store?",
        answer:
          "All the steps for deploying the app on the Play Store or App Store are detailed in our documentation. However, as these platforms frequently update their terms and conditions, the process can sometimes be complex. If you prefer a hassle-free deployment, consider using our installation service for seamless deployment.",
    },
    {
        question: "Where is AppDevs located?",
        answer:
          "We are located in Bangladesh and the UK, but we provide our services to clients all over the world.",
    },
    {
        question: "How get updates with AppDev's latest updates?",
        answer:
          "Follow us on social media, subscribe to our newsletter, or check our blog for the latest updates and announcements.",
    },
  ];

  return (
    <section className="pt-[200px]">
        <img
        alt="Background Image"
        loading="lazy"
        width="795"
        height="777"
        decoding="async"
        className="absolute top-0 left-0 z-[-2]  2xl:block"
        src="https://appdevs.net/_next/static/media/calendlyPageBgLeft.ccdb273e.webp"
        style={{ color: 'transparent' }}
      />
      <img
        alt="Background Image"
        loading="lazy"
        width="558"
        height="799"
        decoding="async"
        className="absolute top-[60px] right-0 z-[-2] 2xl:block"
        src="https://appdevs.net/_next/static/media/calendlyPageBgRight.31f2046c.webp"
        style={{ color: 'transparent' }}
      />
      <div className="container mx-auto px-4">
        <div className="section_header mb-8 lg:mb-12 text-center">
            <span className="text-[12px] font-semibold text-[#115E59] bg-[#CCFBF1] uppercase rounded-full py-1 px-3 mb-6">
                Questions
            </span>
          <h2 className="font-semibold text-3xl mt-5 lg:text-[40px]">
          Frequently 
            <span className="text-blue-600"> Asked Questions</span>
          </h2>
        </div>
        <ul className="space-y-2">
          {faqs.map((faq, index) => (
            <li
              key={index}
              className="bg-white border border-[#E5E7EB] shadow-lg py-4 lg:py-7 px-5 lg:px-14 rounded-[20px] cursor-pointer transition-all duration-300 ease-in-out hover:shadow-lg"
            >
              <div
                className="flex items-center justify-between"
                onClick={() => toggleFAQ(index)}
              >
                <h4 className="font-semibold text-xl w-[90%]">{faq.question}</h4>
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

  )
}

export default FAQSection
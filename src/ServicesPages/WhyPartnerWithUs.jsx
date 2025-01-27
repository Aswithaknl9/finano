import React from "react";

const WhyPartnerWithUs = () => {
  const benefits = [
    {
      title: "Expert Knowledge in FinTech",
      description:
        "Our deep FinTech expertise guarantees tailored solutions with best practices.",
      icon: "https://appdevs.net/_next/static/media/convenience&InsightfulAnalytics.fd5da22b.png",
    },
    {
      title: "Security & Compliance",
      description:
        "We prioritize data security and adhere to global financial regulations.",
      icon: "https://appdevs.net/_next/static/media/realTimeUpdates&StreamlinedOperations.05dc30ca.png",
    },
    {
      title: "User-Centric Designs",
      description:
        "Our focus on UI/UX ensures a seamless user experience for end-users.",
      icon: "https://appdevs.net/_next/static/media/securityControls.0858e0b9.png",
    },
  ];

  return (
    <section className="pt-[130px] mx-32">
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
          {/* Left Section */}
          <div>
            <h2 className="mb-3 font-semibold text-5xl lg:mb-6">Why Partner with Us?</h2>
            <span className="text-[16px] lg:text-[20px]  text-[#6b7280] leading-[20px] lg:leading-[30px]">
              Our team includes former CTOs and senior developers from leading
              financial firms. Our team includes former CTOs and senior
              developers from leading financial firms.
            </span>
            <div className="mt-7 lg:mt-14">
              <a
                className="font-semibold inline-flex items-center justify-center px-5 py-3 bg-[#2974e7] text-white rounded-[5px] hover:bg-opacity-90"
                href="/consultation"
              >
                <span>Get Free Consultation</span>
                <div className="icon ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          {/* Right Section: Benefits List */}
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className="flex items-center rounded-[27px] p-6 lg:p-8 shadow-primary__shadow border border-primary_border_color"
              >
                <img
                  alt={benefit.title}
                  loading="lazy"
                  width="50"
                  height="50"
                  src={benefit.icon}
                  className="flex-shrink-0"
                  style={{ color: "transparent" }}
                />
                <div className="ms-5">
                  <h4 className="mb-2 text-[18px] font-semibold">
                    {benefit.title}
                  </h4>
                  <p className="text-[16px] text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyPartnerWithUs;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const features = [
    {
        title: 'Experienced Designers',
        description: 'Collaborate with skilled designers who understand the nuances of user behavior and industry trends.',
        iconSrc: 'https://appdevs.net/_next/static/media/convenience&InsightfulAnalytics.fd5da22b.png',
      },
      {
        title: 'User-Centric Approach',
        description: 'Prioritize the end-user experience to create designs that resonate with your audience.',
        iconSrc: 'https://appdevs.net/_next/static/media/realTimeUpdates&StreamlinedOperations.05dc30ca.png',
      },
      {
        title: 'Innovative Solutions',
        description: 'Leverage cutting-edge tools and methodologies to craft unique designs.',
        iconSrc: 'https://appdevs.net/_next/static/media/securityControls.0858e0b9.png',
      },
      {
        title: 'Focus on Conversion',
        description: 'Design interfaces optimized for improved engagement, retention, and conversions.',
        iconSrc: 'https://appdevs.net/_next/static/media/convenience&InsightfulAnalytics.fd5da22b.png',
      },
      {
        title: 'Rapid Turnaround',
        description: 'Deliver exceptional designs quickly without compromising quality.',
        iconSrc: 'https://appdevs.net/_next/static/media/realTimeUpdates&StreamlinedOperations.05dc30ca.png',
      },
      {
        title: 'Custom-Tailored Designs',
        description: 'Get solutions tailored to your specific business needs and objectives.',
        iconSrc: 'https://appdevs.net/_next/static/media/securityControls.0858e0b9.png',
      },
];

const MobileAppDevelopment2 = () => {
  return (
    <section className="pt-16 sm:pt-20 lg:pt-28">
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Section */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4">
              Why Choose Our Mobile App Development Services?
            </h2>
            <p className="text-sm sm:text-lg text-[#6b7280] leading-relaxed mb-8">
              Our team includes former CTOs and senior developers from leading
              financial firms.
            </p>
            <div>
              <a
                className="bg-[#2974E7] text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-md inline-flex items-center hover:bg-[#1E40AF] transition duration-300"
                href="/consultation"
                aria-label="Get Free Consultation"
              >
                Get Free Consultation{" "}
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="ml-2 text-sm"
                />
              </a>
            </div>
          </div>

          {/* Features Section */}
          <ul className="space-y-6">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start rounded-3xl p-6 lg:p-8 shadow-md border border-gray-100"
              >
                <img
                  alt={feature.title}
                  className="object-contain w-12 h-12"
                  src={feature.iconSrc}
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                  <p className="text-sm sm:text-base text-[#6b7280]">
                    {feature.description}
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

export default MobileAppDevelopment2;

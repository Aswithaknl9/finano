import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const features = [
    {
        title: 'Expert Team of DevOps Engineers',
        description: 'Our certified DevOps experts bring deep industry knowledge and hands-on expertise.',
        iconSrc: 'https://appdevs.net/_next/static/media/convenience&InsightfulAnalytics.fd5da22b.png',
      },
      {
        title: 'Scalable & Secure Solutions',
        description: 'We design DevOps pipelines that scale with your business while maintaining top security standards.',
        iconSrc: 'https://appdevs.net/_next/static/media/realTimeUpdates&StreamlinedOperations.05dc30ca.png',
      },
      {
        title: 'Reduced Time-to-Market',
        description: 'Streamline software development lifecycles with faster, more efficient delivery processes.',
        iconSrc: 'https://appdevs.net/_next/static/media/securityControls.0858e0b9.png',
      },
      {
        title: 'Cost Optimization',
        description: 'Improve operational efficiency while reducing infrastructure and maintenance costs.',
        iconSrc: 'https://appdevs.net/_next/static/media/convenience&InsightfulAnalytics.fd5da22b.png',
      },
];

const MobileAppDevelopment5 = () => {
  return (
    <section className="pt-16 sm:pt-20 lg:pt-28">
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Section */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4">
            Why Choose Our Cloud Services?
            </h2>
            <p className="text-sm sm:text-lg text-[#6b7280] leading-relaxed mb-8">
            Our team includes former CTOs and senior developers from leading financial firms. Our team includes former CTOs and senior developers from leading financial firms.
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

export default MobileAppDevelopment5;

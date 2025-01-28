import React from "react";

const FinTechInnovation2 = () => {
  const features = [
    "Custom Website Development",
    "Web Application Development",
    "eCommerce Development",
    "CMS Development",
    "Progressive Web Apps (PWAs)",
    "API Integration",
  ];

  return (
    <section className="pt-16 px-4 sm:px-8 lg:px-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 mb-4 lg:mb-6">
            Innovate Your Digital Presence with Advanced Web Development
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-6 lg:leading-8">
            Build scalable, secure, and dynamic websites that drive business growth.
            </p>
            <ul className="mt-6 space-y-4 lg:mt-8">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center text-sm sm:text-base lg:text-lg text-gray-600"
                >
                  <div className="w-5 h-5 flex justify-center items-center bg-blue-600 rounded-full">
                    <svg
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3"
                    >
                      <path
                        d="M1 7L5 11L15 1"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="ml-3">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="example-thumb">
            <img
              alt="example thumb"
              loading="lazy"
              width="450"
              height="450"
              src="https://appdevs.net/_next/static/media/example.816390f4.webp"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinTechInnovation2;

import React from "react";

const FinTechInnovation6 = () => {
  const features = [
    "Infrastructure as Code (IaC)",
    "Continuous Integration and Continuous Delivery (CI/CD)",
    "Cloud Integration and Management",
    "Containerization and Orchestration",
    "Monitoring and Incident Management",
    "DevOps Consulting",
  ];

  return (
    <section className="pt-16 px-4 sm:px-8 lg:px-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 mb-4 lg:mb-6">
            Streamline Your Operations with Expert DevOps Services
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-6 lg:leading-8">
            We enable businesses to bridge the gap between development and operations, ensuring seamless integration and deployment.
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

export default FinTechInnovation6;

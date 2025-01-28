import React from "react";

const FinTechInnovation1 = () => {
  const features = [
    "iOS App Development",
    "Android App Development",
    "Cross-Platform App Development",
    "Enterprise Mobile Solutions",
    "E-Commerce App Development",
    "Custom App Solutions",
  ];

  return (
    <section className="pt-[130px] mx-28">
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
          {/* Text Content */}
          <div>
            <h2 className="mb-3 text-5xl font-semibold lg:mb-6">
            Empower Your Vision with Innovative Mobile Application Development
            </h2>
            <span className="text-[16px] text-[#6b7280] lg:text-[20px] leading-[25px] lg:leading-[30px]">
            Bring your ideas to life with high-quality, user-focused mobile apps.
            </span>
            <ul className="mt-5 lg:mt-8 space-y-5">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center text-[16px] text-[#6b7280] lg:text-[18px]"
                >
                  <div className="w-[20px] h-[20px] flex justify-center items-center bg-[#2974e7] stroke-white rounded-full">
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
                  <span className="w-[calc(100%-20px)] ms-2">{feature}</span>
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
              className="w-full"
              style={{ color: "transparent" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinTechInnovation1;

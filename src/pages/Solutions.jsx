import React from "react";
import solutionimg from "../Js/solutionimg"; 

const SolutionsSection = () => {
  return (
    <section className="pt-[170px] pb-[130px] relative">
      {/* Background Images */}
      <img
        alt="Background Image"
        className="absolute top-0 left-0 z-[-2] hidden lg:block"
        src="https://appdevs.net/_next/static/media/solutionPageBgLeft.292df356.webp"
      />
      <img
        alt="Background Image"
        className="absolute top-[60px] right-0 z-[-2] hidden lg:block"
        src="https://appdevs.net/_next/static/media/solutionPageBgRight.e134874f.webp"
      />

      {/* Section Content */}
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        <div className="max-w-[650px] mb-14 text-center mx-auto">
          <div className="mb-6">
            <span className="text-[12px] font-semibold text-[#115E59] bg-[#CCFBF1] rounded-full py-1 px-3">
              Solutions
            </span>
          </div>
          <h1 className="mb-6 text-[24px] sm:text-[28px] md:text-[32px] lg:text-[48px] font-bold leading-[1.2]">
            Explore Solutions That Boost Your Business
          </h1>
          <p className="text-[#6b7280] text-[14px] md:text-[16px]">
            Discover a wide range of solutions specifically designed to address
            your business challenges. Learn how our innovative offerings work to
            optimize processes and accelerate your business growth effectively.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mx-12">
          {solutionimg.map((solution, index) => (
            <div
              key={index}
              className="bg-white rounded-[20px] p-[4px] border border-[#E5E7EB]"
            >
              {/* Image Section */}
              <div className="bg-gray-100 rounded-2xl rounded-b-none flex justify-center items-center lg:py-12 py-6 px-2">
                <img
                  alt={solution.title}
                  className={`${solution.width} ${solution.height} object-contain`}
                  src={solution.image}
                />
              </div>

              {/* Content Section */}
              <div className="xl:p-6 p-4">
                <h4 className="mb-3 text-[16px] lg:text-[20px] font-semibold">
                  {solution.title}
                </h4>
                <p className="text-sm leading-5 xl:w-[75%] text-[#6b7280] mb-5">
                  {solution.description}
                </p>

                {/* Features List */}
                <ul className="mb-7 space-y-1">
                  {[
                    "What is it?",
                    "How does it work?",
                    "How to generate profit?",
                    "How to get started?",
                  ].map((text, i) => (
                    <li key={i} className="flex items-center lg:text-sm font-bold text-gray-700">
                      <svg
                        width="16"
                        height="12"
                        viewBox="0 0 16 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-[10px] text-gray-700 mr-2"
                      >
                        <path
                          d="M1 7L5 11L15 1"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {text}
                    </li>
                  ))}
                </ul>

                <a className="flex items-center space-x-2 font-semibold" href={solution.link}>
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-blue-700 transition">
                    <span>Learn More</span>
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
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </span>
                </a>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;

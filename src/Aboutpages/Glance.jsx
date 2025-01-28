import React from "react";

const Glance = () => {
  const statistics = [
    {
      iconSrc: "https://appdevs.net/images/statistic/experience.png",
      value: "3+",
      description: "Years of experience",
    },
    {
      iconSrc: "https://appdevs.net/images/statistic/solutions.png",
      value: "26",
      description: "Total Team Members",
    },
    {
      iconSrc: "https://appdevs.net/images/statistic/developed.png",
      value: "8",
      description: "Back-End Developers",
    },
    {
      iconSrc: "https://appdevs.net/images/statistic/happy.png",
      value: "7",
      description: "App Developers",
    },
    {
      iconSrc: "https://appdevs.net/images/statistic/product.png",
      value: "4",
      description: "Designers",
    },
    {
      iconSrc: "https://appdevs.net/images/statistic/rating.png",
      value: "7",
      description: "Support & Others",
    },
  ];

  return (
    <section className="statistic_section py-[130px]">
      <div className="container mx-auto px-4 xl:max-w-[1280px]">
        <div className="grid grid-cols-12 gap-5 lg:gap-8 items-center">
          {/* Left Section */}
          <div className="col-span-12 lg:col-span-5">
            <h2 className="mb-4 text-[30px] md:text-[60px] font-semibold">
              <span className="text-[#7c3aed]">AppDevs</span> at A Glance
            </h2>
            <p>
              At AppDevs, our specialists are dedicated to crafting impactful
              solutions that drive success. Each team member brings a unique
              blend of technical expertise and innovative thinking, streamlining
              complex workflows to elevate the digital finance experience.
            </p>
          </div>

          {/* Right Section */}
          <div className="col-span-12 lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {statistics.map((stat, index) => (
                <div
                  key={index}
                  className="bg-[#f3f4f6] p-6 rounded-xl shadow-md"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                      <img
                        src={stat.iconSrc}
                        alt="icon"
                        className="object-cover w-5 h-5"
                      />
                    </div>
                    <h4 className="text-[#1f2937] font-extrabold ml-3">
                      {stat.value}
                    </h4>
                  </div>
                  <span className="text-[#000] font-medium mt-5 block">
                    {stat.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Glance;

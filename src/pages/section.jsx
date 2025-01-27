import React from "react";

const Section = () => {
  const stats = [
    {
      id: 1,
      value: "03+",
      label: "Years of Experience",
      imgSrc: "https://appdevs.net/_next/static/media/experience.86b08bd3.png",
    },
    {
      id: 2,
      value: "40+",
      label: "In-House Products",
      imgSrc: "https://appdevs.net/_next/static/media/solutions.4d17f075.png",
    },
    {
      id: 3,
      value: "3,100+",
      label: "Total Sales",
      imgSrc: "https://appdevs.net/_next/static/media/developed.884a7cf5.png",
    },
    {
      id: 4,
      value: "1,000+",
      label: "Happy Clients",
      imgSrc: "https://appdevs.net/_next/static/media/happy.62c7a8ec.png",
    },
    {
      id: 5,
      value: "2,700+",
      label: "Completed Installations",
      imgSrc: "https://appdevs.net/_next/static/media/product.88221c4c.png",
    },
    {
      id: 6,
      value: "2,000+",
      label: "Total Customizations",
      imgSrc: "https://appdevs.net/_next/static/media/rating.f97dca98.png",
    },
  ];

  return (
    <section className="mt-8">
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-10 md:gap-8 gap-5 items-center">
          {/* Left Content (Text and Stats) */}
          <div className="lg:col-span-6 col-span-10">
            <h2 className="mb-6 text-3xl lg:text-5xl font-semibold">
              Helping
              <span className="text-[#2974E7] inline"> Business Owners</span> Scale with
              <span className="text-[#7c3aed] inline"> Customized</span> and 
              <span className="text-[#2974E7] inline"> Ready-Made</span> solutions
            </h2>
            <p className="text-[#6b7280] text-sm mb-5">
              Our mission is to empower clients, entrepreneurs, and business owners to grow and succeed through a range of solutions, including tailored and ready-made options that meet their specific needs.
            </p>
            <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 gap-4 xl:me-10 p-4">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="bg-gray-100 lg:p-6 p-4 rounded-xl"
                >
                  <div className="flex items-center">
                    <div className="lg:w-10 w-8 lg:h-10 h-8 rounded-full bg-white flex items-center justify-center shadow-md">
                      <img
                        src={stat.imgSrc}
                        alt={stat.label}
                        className="lg:w-5 w-4 lg:h-5 h-4"
                      />
                    </div>
                    <h3 className="text-lg md:text-2xl font-extrabold text-gray-800 lg:ms-3 ms-2">
                      {stat.value}
                    </h3>
                  </div>
                  <span className="sm:text-sm text-xs text-gray-600 font-medium lg:mt-5 mt-3 block">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content (Image) */}
          <div className="lg:col-span-4 col-span-10 flex justify-center">
            <img
              src="https://appdevs.net/_next/static/media/sectionImg.3679fbca.webp"
              alt="Business Solutions"
              className="max-w-full lg:max-w-[400px] w-auto h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;

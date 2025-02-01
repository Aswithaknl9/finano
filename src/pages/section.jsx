import React from 'react';

const StatisticsSection = () => {
  const stats = [
    { value: "03+", label: "Years of Experience", icon: "https://appdevs.net/_next/static/media/experience.86b08bd3.png" },
    { value: "40+", label: "In-House Products", icon: "https://appdevs.net/_next/static/media/solutions.4d17f075.png" },
    { value: "3,100+", label: "Total Sales", icon: "https://appdevs.net/_next/static/media/developed.884a7cf5.png" },
    { value: "1,000+", label: "Happy Clients", icon: "https://appdevs.net/_next/static/media/happy.62c7a8ec.png" },
    { value: "2,700+", label: "Completed Installations", icon: "https://appdevs.net/_next/static/media/product.88221c4c.png" },
    { value: "2,000+", label: "Total Customizations", icon: "https://appdevs.net/_next/static/media/rating.f97dca98.png" },
  ];

  return (
    <section className="statistic_section mt-8">
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        <div className="grid grid-cols-10 md:gap-8 gap-5 items-center">
          
          {/* Left Text Content */}
          <div className="md:col-span-6 col-span-10">
            
            <h2 className="mb-6 text-2xl sm:text-4xl lg:text-[48px] font-semibold" style={{ lineHeight: '1.2' }}>
              Helping <span className="text-[#2974E7]"> Business Owners</span> Scale with 
              <span className="text-[#7c3aed]"> Customized</span> and 
              <span className="text-[#2974E7]"> Ready-Made</span> Solutions
            </h2>
           
            <p className="lg:mb-14 mb-5 text-[14px] text-[#6b7280]">
              Our mission is to empower clients, entrepreneurs, and business owners to grow and succeed through 
              a range of solutions, including tailored and ready-made options that meet their specific needs.
            </p>

            {/* Stats Grid */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-3 grid-cols-2 gap-4 xl:me-10">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-100 lg:p-6 p-4 rounded-xl shadow-sm">
                  <div className="flex items-center">
                    <div className="lg:w-10 w-8 lg:h-10 h-8 rounded-full bg-white flex items-center justify-center shadow-md">
                      <img 
                        alt={stat.label} 
                        src={stat.icon} 
                        className="lg:w-6 w-4 lg:h-6 h-4 object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-extrabold text-gray-800 lg:ms-3 ms-2">{stat.value}</h3>
                  </div>
                  <span className="text-sm text-black font-medium lg:mt-5 mt-3 block">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="md:col-span-4 col-span-10 flex justify-center">
            <img 
              alt="statistic" 
              src="https://appdevs.net/_next/static/media/sectionImg.3679fbca.webp" 
              className="md:w-[472px] w-[280px]" 
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;

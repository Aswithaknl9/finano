import React from 'react';
import experience from '../assets/experience.png';
import solutions from '../assets/solutions.png';
import developed from '../assets/developed.png';
import happy from '../assets/happy.png';
import product from '../assets/productw.png'; 
import rating from '../assets/rating.png';
import sectionimg from '../assets/sectionimg.webp';

const StatisticsSection = () => {
  const stats = [
    { value: "05+", label: "Years of Experience", icon: experience },
    { value: "60+", label: "In-House Products", icon: solutions },
    { value: "400+", label: "Total Sales", icon: developed },
    { value: "350+", label: "Happy Clients", icon: happy },
    { value: "2000+", label: "Cup of Coffee", icon: product },
    { value: "100+", label: "Total Customizations", icon: rating },
  ];

  return (
    <section className="statistic_section mt-8">
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        <div className="grid grid-cols-10 md:gap-8 gap-5 items-center">
          
          {/* Left Text Content */}
          <div className="md:col-span-6 col-span-10">
            <div className="leading-sung">
              <h2 className="mb-6 text-2xl sm:text-4xl lg:text-[48px] font-semibold leading-relaxed">
                Empowering <span className="text-[#2974E7]"> Business Owners </span> Scale with 
                <span className="text-[#7c3aed]">  Tailored </span> and 
                <span className="text-[#2974E7]"> Ready-Made </span> Solutions for seamless growth
              </h2>
            </div>

            <p className="lg:mb-14 mb-5 text-[14px] text-[#6b7280]">
            Our goal is to empower customers, business owners, and entrepreneurs by providing them with ready-made and customised solutions that promote success and growth.
            </p>

            {/* Stats Grid */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-3 grid-cols-2 gap-4 xl:mr-10">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-100 lg:p-6 p-4 rounded-xl shadow-sm">
                  <div className="flex items-center gap-2">
                    <div className="lg:w-10 w-8 lg:h-10 h-8 rounded-full bg-white flex items-center justify-center shadow-md">
                      <img 
                        alt={`${stat.label} Icon`} 
                        src={stat.icon} 
                        className="lg:w-5 w-3 lg:h-5 h-3 object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-extrabold text-gray-800">{stat.value}</h3>
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
              alt="Statistical Data Illustration" 
              src={sectionimg} 
              className="md:w-[472px] w-[280px]" 
            />
          </div>    

        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;

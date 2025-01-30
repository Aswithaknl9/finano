import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Custom Fintech Development",
    description: "Tailored FinTech software to streamline financial operations and innovation.",
    imgSrc: "https://appdevs.net/_next/static/media/customization.f7d38ed8.webp",
    link: "/services/fintech-software-development",
  },
  {
    title: "Mobile App Development",
    description: "Advanced mobile solutions crafted for the finance industry.",
    imgSrc: "https://appdevs.net/_next/static/media/onDemand.b7bc7309.webp",
    link: "/services/mobile-application-development",
  },
  {
    title: "Web Development",
    description: "Robust web solutions tailored for FinTech businesses.",
    imgSrc: "https://appdevs.net/_next/static/media/qualityAssurance.fec3c921.webp",
    link: "/services/web-development",
  },
  {
    title: "UI/UX Design",
    description: "User-focused design for engaging, efficient FinTech applications.",
    imgSrc: "https://appdevs.net/_next/static/media/customization.f7d38ed8.webp",
    link: "/services/ui-ux-design",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-[130px]">
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        {/* Section Header */}
        <div className="section_header mb-14 text-center max-w-[700px] mx-auto">
          <h2 className="mb-2 xl:text-[48px] lg:text-[38px] md:text-[28px] text-[24px] font-semibold">
            Dynamic <span className="text-[#7C3AED]">Services</span> to Meet Your Unique Business Needs
          </h2>
          <p className="text-gray-600 lg:text-[16px] text-[14px]">
            Our dynamic services are specifically designed to address your unique business challenges. We focus on delivering innovative solutions that drive growth and improve operational efficiency.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white shadow-md rounded-[30px] overflow-hidden p-1 flex lg:flex-row flex-col items-center text-center lg:text-left"
            >
              {/* Image on Top for Small/Tablet Screens & Left for Large Screens */}
              <div className="w-full lg:w-auto flex justify-start bg-gray-100 rounded-l-[30px]  p-6">
                <img 
                  alt={service.title} 
                  loading="lazy" 
                  width="200" 
                  height="200" 
                  className="w-40 h-auto"
                  src={service.imgSrc} 
                />
              </div>
              
              {/* Text Content */}
              <div className="p-5 flex flex-col items-start justify-start lg:items-start">
                <h3 className="text-xl mb-4 font-semibold">{service.title}</h3>
                <div className="text-start">
                <p className="text-gray-600 text-[14px]">{service.description}</p>
                </div>
                <Link 
                  to={service.link} 
                  className="text-blue-500 hover:text-purple-500 font-semibold text-[15px] flex items-start mt-6"
                >
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center mt-10">
          <Link to="/services" className="bg-blue-500 text-white px-5 py-2 lg:px-5 lg:py-3 lg:text-[18px] rounded-lg text-sm md:text-base font-semibold hover:bg-blue-700 transition">
            Show More Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

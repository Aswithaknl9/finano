import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Custom Fintech Development",
    description: "Tailored FinTech software to streamline financial operations and innovation.",
    imgSrc: "https://appdevs.net/_next/static/media/customization.f7d38ed8.webp",
    link: "/services/fintech-software-development",
    width: "w-[150px]",
    height: "h-[120px]",
  },
  {
    title: "Mobile App Development",
    description: "Advanced mobile solutions crafted for the finance industry.",
    imgSrc: "https://appdevs.net/_next/static/media/onDemand.b7bc7309.webp",
    link: "/services/mobile-application-development",
    width: "w-[150px]",
    height: "h-[130px]",
  },
  {
    title: "Web Development",
    description: "Robust web solutions tailored for FinTech businesses.",
    imgSrc: "https://appdevs.net/_next/static/media/qualityAssurance.fec3c921.webp",
    link: "/services/web-development",
    width: "w-[150px]",
    height: "h-[121px]",
  },
  {
    title: "UI/UX Design",
    description: "User-focused design for engaging, efficient FinTech applications.",
    imgSrc: "https://appdevs.net/_next/static/media/customization.f7d38ed8.webp",
    link: "/services/ui-ux-design",
    width: "w-[150px]",
    height: "h-[120px]",
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-[30px] overflow-hidden p-1 flex lg:flex-row flex-col items-center text-center lg:text-left"
            >
              
              <div className="w-full lg:w-auto flex justify-center bg-gray-100 rounded-l-[30px] p-6">
                <img
                  alt={service.title}
                  loading="lazy"
                  decoding="async"
                  className={`${service.width} ${service.height} object-contain`}
                  style={{ color: "transparent" }}
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
                  className="text-blue-500 hover:text-purple-500 font-semibold text-[15px] flex items-center mt-6"
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

        <div className="text-center pt-10">
  <a className="flex items-center justify-center" href="/services">
    <span className="flex items-center gap-3 text-white bg-blue-600 py-3 px-5 rounded-md">
      Show More Services
      <span className="border-l border-white h-5 pl-3 ml-2 flex items-center">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth="1.5" 
          stroke="currentColor" 
          className="w-5 h-5 text-white"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path>
        </svg>
      </span>
    </span>
  </a>
</div>
      </div>
    </section>
  );
};

export default ServicesSection;

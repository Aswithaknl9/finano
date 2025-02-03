import React from 'react';
import ServiceItems from './ServiceItems';
import serviceItems from '../Js/Serviceitem';
import servicePageBgLeft from '../assets/solutionPageBgLeft.webp';
import servicePageBgRight from '../assets/solutionPageBgRight.webp';

const Services = () => {
  return (
    <section className="service_section pt-[180px] pb-[130px] relative">
      {/* Background Images */}
      <img
        alt="Background Left"
        className="absolute top-0 left-0 z-[-2] hidden lg:block"
        src={servicePageBgLeft}
      />
      <img
        alt="Background Right"
        className="absolute top-[60px] right-0 z-[-2] hidden lg:block"
        src={servicePageBgRight}
      />

      {/* Section Header */}
      <div className="max-w-[700px] mx-auto text-center">

        <div className="mb-6">
          <span className="text-[12px] font-semibold text-[#115E59] bg-[#CCFBF1] rounded-full py-1 px-3">
            Our Services
          </span>
        </div>

        {/* Heading */}
        <h1 className="mb-3 md:mb-6 md:text-[38px] lg:text-[48px] font-semibold text-[24px] sm:text-[28px] leading-tight">
          Customized Services To Kick-start Your Business
        </h1>

        {/* Description */}
        <p className="text-[14px] md:text-[16px] lg:text-[16px] text-[#6b7280]">
          Our dynamic services are specifically designed to address your unique business challenges.
          We focus on delivering innovative solutions that drive growth and improve operational efficiency.
        </p>
      </div>

      {/* Services Grid */}
      <div className="xl:max-w-[1280px] container mx-auto px-4 mt-12 space-y-16">
        {serviceItems.map((item, index) => (
          <ServiceItems
            key={index}
            imgSrc={item.imgSrc}
            title={item.title}
            description={item.description}
            listItems={item.listItems}
            link={item.link}
            width={item.width}  
            height={item.height}         
            reverse={index % 2 !== 0} 
          />
        ))}
      </div>
    </section>
  );
};

export default Services;

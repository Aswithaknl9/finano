import React from 'react';
import ServiceItems from './ServiceItems';
import serviceItems from '../Js/Serviceitem'; 

const Services = () => {
  return (
    <div className="relative">
      <div 
        className="bg-cover bg-no-repeat bg-left flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://appdevs.net/_next/static/media/servicePageBgLeft.292df356.webp), url(https://appdevs.net/_next/static/media/servicePageBgRight.e134874f.webp)',
          backgroundPosition: 'left top, right top',
          backgroundSize: 'contain',
          height: '600px', 
        }}
      >
        <div className="text-center max-w-2xl mx-auto p-8 z-10">
          <span className="text-[#115E59] bg-[#CCFBF1] rounded-full text-[12px] px-3 py-1 font-semibold mb-6">
            Our Services
          </span>
          <h1 className="text-4xl font-bold mt-3 md:mb-6">
            Customized Services To Kick-Start Your Business
          </h1>
          <p className="text-gray-700 text-[15px] mb-6">
            Our dynamic services are specifically designed to address your unique business challenges. We focus on delivering innovative solutions that drive growth and improve operational efficiency.
          </p>
        </div>
      </div>
      <div 
        id="services" 
        className="flex flex-wrap gap-16 justify-center z-20 relative"
        style={{ transform: 'translateY(-170px)' }}  
      >
        {serviceItems.map((item, index) => (
          <ServiceItems
            key={index}
            imgSrc={item.imgSrc}
            title={item.title}
            description={item.description}
            listItems={item.listItems}
            link={item.link}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;

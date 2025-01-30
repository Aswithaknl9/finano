import React from 'react';

const CustomizationServices = () => {
  const services = [
    {
      title: 'UI Customization',
      description: 'Create a user interface that reflects your brand and ensures a seamless user experience.',
      icon: 'https://appdevs.net/_next/static/media/team.442e2e75.png',
    },
    {
      title: 'Security Customization',
      description: 'Integrate robust security features tailored to industry standards, including multi-factor authentication and data encryption.',
      icon: 'https://appdevs.net/_next/static/media/sqa.29e6cbd8.png',
    },
    {
      title: 'Workflow Customization',
      description: 'Align our software with your operational workflow for optimal efficiency.',
      icon: 'https://appdevs.net/_next/static/media/knowledge.0e41d61b.png',
    },
    {
      title: 'Localization & Language',
      description: 'Customize languages, currencies, and regional settings to cater to a global audience.',
      icon: 'https://appdevs.net/_next/static/media/knowledge.0e41d61b.png',
    },
    {
      title: 'Integration & Compatibility',
      description: 'Ensure compatibility with your existing systems, APIs, and other essential tools.',
      icon: 'https://appdevs.net/_next/static/media/knowledge.0e41d61b.png',
    },
    {
      title: 'Database Optimization',
      description: 'Enhance data handling and storage for a streamlined experience.',
      icon: 'https://appdevs.net/_next/static/media/knowledge.0e41d61b.png',
    },
  ];

  return (
    <section className="pt-[130px]">
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        <div className="bg-[#212237] rounded-[32px] py-8 lg:py-14 px-7 lg:px-12">
          <div className="grid grid-cols-12 items-center gap-5">
            <div className="col-span-12 lg:col-span-5 mr-0 lg:mr-10 mb-3 lg:mb-0">
              <h2 className="text-white mb-3 text-[40px]  font-semibold ">Explore Our Customization Services</h2>
              <p className="text-[#F8FAFC] text-[16px] lg:text-[20px]">
                We offer a wide range of customization options to make your financial software solution uniquely yours.
                Choose from the following tailored services:
              </p>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="flex">
                    <div className="w-12 h-12 bg-white shadow-primary__shadow rounded-full flex justify-center items-center mr-4">
                      <img src={service.icon} alt={service.title} width="22" height="20" />
                    </div>
                    <div className="w-[calc(100%-48px)]">
                      <h5 className="text-white text-[18px] font-medium mb-1">{service.title}</h5>
                      <p className="text-[#F3F4F6] text-[12px]">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizationServices;

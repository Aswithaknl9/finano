import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const features = [
  {
    title: 'Expert Team of Developers',
    description: 'Work with skilled professionals experienced in delivering scalable, secure, and feature-rich mobile apps.',
    iconSrc: 'https://appdevs.net/_next/static/media/convenience&InsightfulAnalytics.fd5da22b.png',
  },
  {
    title: 'Custom Solutions',
    description: 'Receive personalized mobile app solutions tailored to your business requirements.',
    iconSrc: 'https://appdevs.net/_next/static/media/realTimeUpdates&StreamlinedOperations.05dc30ca.png',
  },
  {
    title: 'Cutting-Edge Technologies',
    description: 'Stay ahead with apps developed using the latest frameworks, tools, and methodologies.',
    iconSrc: 'https://appdevs.net/_next/static/media/securityControls.0858e0b9.png',
  },
  {
    title: 'End-to-End Development',
    description: 'From ideation to deployment, we handle the entire app development process for you.',
    iconSrc: 'https://appdevs.net/_next/static/media/convenience&InsightfulAnalytics.fd5da22b.png',
  },
  {
    title: 'Timely Delivery',
    description: 'Launch your app on schedule with our agile development approach and commitment to deadlines.',
    iconSrc: 'https://appdevs.net/_next/static/media/realTimeUpdates&StreamlinedOperations.05dc30ca.png',
  },
  {
    title: 'Affordable Solutions',
    description: 'Enjoy competitive pricing without compromising on quality or functionality.',
    iconSrc: 'https://appdevs.net/_next/static/media/securityControls.0858e0b9.png',
  },
];

const MobileAppDevelopment = () => {
  return (
    <section className="pt-[130px]">
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
          <div>
            <h2 className="mb-3  text-5xl font-semibold lg:mb-6">Why Choose Our Mobile App Development Services?</h2>
            <span className="text-[16px] lg:text-[20px]  text-[#6b7280] leading-[20px] lg:leading-[25px]">
              Our team includes former CTOs and senior developers from leading financial firms.
            </span>
            <div className="mt-7 lg:mt-14">
            <a 
              className="bg-[#2974E7] text-white  font-semibold px-6 py-4 rounded-md text-center hover:bg-[#1E40AF] transition duration-300 items-center justify-center"
              href="/consultation"
              aria-label="Get Free Consultation"
            >
              Get Free Consultation <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-sm" />
            </a>
           
            </div>
          </div>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center rounded-[27px] p-6 lg:p-8 shadow-primary__shadow border border-primary_border_color"
              >
                <img
                  alt={feature.title}
                  className="object-contain"
                  src={feature.iconSrc}
                  width="50"
                  height="50"
                />
                <div className="ms-5">
                  <h4 className="mb-2 font-semibold text-xl">{feature.title}</h4>
                  <p className='text-[#6b7280]'>{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MobileAppDevelopment;

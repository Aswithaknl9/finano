import React from 'react';
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Section2 = () => {
  const services = [
    {
      title: 'Custom Fintech Development',
      description: 'Tailored FinTech software to streamline financial operations and innovation.',
      imgSrc: 'https://appdevs.net/_next/static/media/customization.f7d38ed8.webp',
      imgAlt: 'Custom Fintech Development',
      link: '/services/fintech-software-development',
    },
    {
      title: 'DevOps Services',
      description: 'Efficient DevOps solutions for faster, reliable software delivery.',
      imgSrc: 'https://appdevs.net/_next/static/media/onDemand.b7bc7309.webp',
      imgAlt: 'DevOps Services',
      link: '/services/devops-services',
    },
    {
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure for enhanced performance and security.',
      imgSrc: 'https://appdevs.net/_next/static/media/installation.c0e7bb4c.webp',
      imgAlt: 'Cloud Services',
      link: '/services/cloud-services',
    },
    {
      title: 'Maintenance and Support',
      description: 'Reliable maintenance to keep FinTech systems running smoothly.',
      imgSrc: 'https://appdevs.net/_next/static/media/customization.f7d38ed8.webp',
      imgAlt: 'Maintenance and Support',
      link: '/services/maintenance-and-support',
    },
  ];

  return (
    <div className="px-8 py-16 bg-white text-center mx-40">
      <div className="max-w-2xl mx-auto text-center mb-8">
        <h2 className="mb-2 text-5xl font-semibold">
          Dynamic <span className="text-purple-600 inline">Services</span> to Meet Your Unique Business Needs
        </h2>
        <p className="text-gray-500">
          Our dynamic services are specifically designed to address your unique business challenges. We focus on delivering innovative solutions that drive growth and improve operational efficiency.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        {services.map((service, index) => (
          <div
            key={index}
            className="service_item bg-white flex items-start p-4 rounded-lg shadow-md"
          >
            <div className="thumb flex-shrink-0">
              <img
                alt={service.imgAlt}
                className="rounded bg-gray-100 w-[120px] p-5"
                src={service.imgSrc}
              />
            </div>
            <div className="content ml-4 flex-grow text-left p-5">
              <h3 className="title text-lg md:text-xl font-semibold">{service.title}</h3>
              <p className="description text-gray-600">{service.description}</p>
              <a
                className="btn text-blue-500 font-semibold mt-2 inline-flex items-center"
                href={service.link}
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 ml-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link
          to="/services"
          className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
        >
          Show More Services
          <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
        </Link>
      </div>
    </div>
  );
};

export default Section2;

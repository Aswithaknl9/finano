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
    <div className="px-4 py-16 bg-white text-center lg:px-20 xl:px-40">
      {/* Heading Section */}
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-semibold">
          Dynamic <span className="text-purple-600">Services</span> to Meet Your Unique Business Needs
        </h2>
        <p className="text-gray-500 text-sm sm:text-base lg:text-lg">
          Our dynamic services are specifically designed to address your unique business challenges. 
          We focus on delivering innovative solutions that drive growth and improve operational efficiency.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white flex flex-col sm:flex-row items-start p-4 rounded-lg shadow-lg hover:shadow-xl transition"
          >
            {/* Image Section */}
            <div className="flex-shrink-0 mb-4 sm:mb-0">
              <img
                alt={service.imgAlt}
                loading="lazy"
                width="150"
                height="120"
                decoding="async"
                data-nimg="1"
                className="rounded bg-gray-100 w-full sm:w-28 p-5"
                src={service.imgSrc}
                style={{ color: 'transparent' }}
              />
            </div>

            {/* Content Section */}
            <div className="sm:ml-6 flex-grow text-left">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{service.description}</p>
              <a
                className="text-blue-500 font-semibold mt-3 inline-flex items-center"
                href={service.link}
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 ml-2"
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

      {/* Show More Button */}
      <div className="text-center mt-10">
        <Link
          to="/services"
          className="bg-blue-600 text-white py-3 px-6 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-700 transition"
        >
          Show More Services
          <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
        </Link>
      </div>
    </div>
  );
};

export default Section2;

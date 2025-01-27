import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ServiceItems = ({ imgSrc, title, description, listItems, link, reverse }) => {
  return (
    <div className={`flex flex-col sm:flex-row bg-white p-2 rounded-3xl gap-6 shadow-lg ${reverse ? 'sm:flex-row-reverse' : ''}`}>
      {/* Image Section (on mobile it's on top, on larger screens it's beside the content) */}
      <div className={`thumb flex-1 bg-[#F3F4F6] px-6 py-6 ${reverse ? 'rounded-r-3xl' : 'rounded-l-3xl'} sm:order-1`}>
        <img alt="solution thumb" data-nimg="1" src={imgSrc} className={`w-full ${reverse ? 'rounded-l-3xl' : 'rounded-r-3xl'}`} />
      </div>

      {/* Content Section */}
      <div className="content flex-1 p-6 sm:order-2">
        <div className="content_wrapper">
          <h3 className="text-[24px] sm:text-[36px] font-bold mb-4">{title}</h3>
          <p className="text-[14px] sm:text-[15px] leading-5 text-[#6B7280] mb-4">{description}</p>
          <ul className="mb-8 space-y-2">
            {listItems.map((item, index) => (
              <li key={index} className="flex items-center font-bold text-[#1F2937]">
                <FontAwesomeIcon icon={faCheck} className="mr-2 text-[#1F2937]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <a className="primary__btn flex items-center gap-2" href={link}>
            <span className="bg-[#2974E7] rounded-lg text-white inline-flex items-center font-bold py-3 px-3 gap-2 relative">
              Learn More
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceItems;

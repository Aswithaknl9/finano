import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ServiceItems = ({ imgSrc, title, description, listItems, link, reverse }) => {
  return (
    <div className={`flex bg-white p-6 rounded-3xl gap-6 shadow-lg ${reverse ? 'flex-row-reverse' : ''} w-[1100px] h-[500px]`}>
      {/* Content Section */}
      <div className="content flex-1 p-6">
        <div className="content_wrapper">
          <h3 className="mb-4 text-[36px] font-bold">{title}</h3>
          <p className="text-[14px] leading-5 text-[#6B7280] mb-4">{description}</p>
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

      {/* Image Section */}
      <div className={`thumb flex-1 bg-[#F3F4F6] px-6 py-6 ${reverse ? 'rounded-l-3xl' : 'rounded-r-3xl'}`}>
        <img alt="solution thumb" data-nimg="1" src={imgSrc} className={`w-full ${reverse ? 'rounded-l-3xl' : 'rounded-r-3xl'}`} />
      </div>
    </div>
  );
};

export default ServiceItems;

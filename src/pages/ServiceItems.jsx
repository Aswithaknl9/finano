import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ServiceItems = ({ imgSrc, title, description, listItems, link, width, height, reverse }) => {
  return (
    <div 
      className={`flex flex-col p-[5px] sm:flex-row items-center gap-8 bg-white rounded-3xl shadow-lg 
      ${reverse ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Image Section */}
      <div 
        className={`thumb flex-1 bg-[#F3F4F6] py-20 px-8 flex justify-center items-center 
        ${reverse ? 'sm:rounded-r-3xl sm:rounded-l-none' : 'sm:rounded-l-3xl sm:rounded-r-none'} 
        rounded-t-3xl sm:rounded-none`}
      >
        <img 
          alt="Service" 
          src={imgSrc} 
          className={`object-contain ${width} ${height} rounded-2xl`} 
        />
      </div>

      {/* Content Section */}
      <div className="content flex-1 p-10 sm:p-24">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-[14px] sm:text-[15px] leading-5 text-[#6B7280] mb-4">
          {description}
        </p>
        <ul className="mb-8 space-y-2">
          {listItems.map((item, index) => (
            <li key={index} className="flex items-center font-bold text-[#1F2937]">
              <FontAwesomeIcon icon={faCheck} className="mr-2 text-[#1F2937]" />
              {item}
            </li>
          ))}
        </ul>
        <a className="primary__btn flex items-center gap-2" href={link}>
          <span className="bg-[#2974E7] rounded-lg text-white inline-flex items-center font-bold py-3 px-4 gap-2">
            Learn More
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </a>
      </div>
    </div>
  );
};

export default ServiceItems;

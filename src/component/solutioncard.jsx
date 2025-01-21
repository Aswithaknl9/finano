import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const SolutionCard = ({ image, title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-1 max-w-[400px]">
      <div className="bg-white rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full p-5 h-50 bg-[#F3F4F6] object-cover rounded-t-lg"
        />
      </div>
      <div className="xl:p-6 p-4">
        <h3 className="text-2xl font-semibold text-black mb-3">{title}</h3>
        <p className="text-[#6B7280] text-sm mb-5">{description}</p>
        <div className="mt-4">
          <ul className="space-y-2 mt-1 font-bold text-[14px]">
            <li className="flex items-center">
              <FontAwesomeIcon icon={faCheck} className="mr-2" />
              What is it?
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faCheck} className="mr-2" />
              How does it work?
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faCheck} className="mr-2" />
              How to generate profit?
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faCheck} className="mr-2" />
              How to get started?
            </li>
          </ul>
        </div>
        <div className="mt-5 flex justify-start">
          <a
            href="#"
            className="flex items-center text-white bg-[#2974E7] px-6 py-2 rounded font-semibold text-sm hover:bg-[#1e5fb7] transition-all"
          >
            Learn More
            <span className="ml-2 text-xl">&#8594;</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SolutionCard;

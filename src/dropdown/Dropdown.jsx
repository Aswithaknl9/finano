import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import solutionff from '../assets/solutionff.webp';
import serviceImage from '../assets/service.webp';
import companyImage from '../assets/company.webp';
import helpImage from '../assets/help.webp';

const Dropdown = ({ title, links }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const getRightImage = () => {
    if (title.toLowerCase() === 'services') {
      return serviceImage;
    }
    if (title.toLowerCase() === 'company') {
      return companyImage;
    }
    if (title.toLowerCase() === 'help') {
      return helpImage;
    }
    return solutionff;
  };

  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center"
    >
      {/* Dropdown Trigger */}
      <NavLink
        to={`/${title.toLowerCase()}`}
        className={({ isActive }) => (isActive ? 'text-blue-700' : 'text-black')}
      >
        {title}
      </NavLink>
      <FontAwesomeIcon
        icon={faChevronDown}
        className={`ml-2 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'} text-sm`}
      />

      {/* Dropdown Content */}
      {isDropdownOpen && (
        <div
          className="absolute top-full mt-2 w-[1000px] bg-white border rounded-lg shadow-lg z-10"
        >
          <div className="flex">
            {/* List Items */}
            <ul className="grid grid-cols-3 gap-4 p-4 w-2/3">
              {links.map((link, index) => (
                <li
                  key={index}
                  className="flex items-start gap-x-4 p-2 hover:bg-gray-100 rounded-lg"
                >
                  <NavLink to={link.path} className="flex items-start text-left w-full">
                    {/* Image */}
                    <div className="flex w-24 h-24 justify-center items-center ">
                      <img
                        alt={link.label}
                        className="object-contain w-full h-full"
                        src={link.imgSrc}
                      />
                    </div>
                    {/* Text */}
                    <div className="flex flex-col ml-4">
                      <h4 className="text-sm font-bold">{link.label}</h4>
                      <p className="text-xs text-gray-500 mt-1">{link.description}</p>
                    </div>
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Right Image Section */}
            <div className="w-1/3">
              <img
                src={getRightImage()}
                alt="Right Section"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </li>
  );
};

export default Dropdown;

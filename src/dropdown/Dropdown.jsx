import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import solutionff from '../assets/solutionff.webp';
import serviceImage from '../assets/service.webp'; // Replace with your actual service image
import companyImage from '../assets/company.webp'; // Replace with your actual company image
import helpImage from '../assets/help.webp'; // Replace with your actual help image


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
      <NavLink
        to={`/${title.toLowerCase()}`}
        className={({ isActive }) => (isActive ? 'text-blue-700' : 'text-black')}
      >
        {title}
      </NavLink>
      <FontAwesomeIcon
        icon={faChevronDown}
        className={`ml-2 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
      />
      {isDropdownOpen && (
        <div className="absolute left-1/2 top-full mt-2 w-[1000px] bg-white border rounded-t shadow-lg transform -translate-x-1/2">
          <div className="flex justify-between">
            <ul className="grid grid-cols-3 gap-4 p-4 w-2/3">
              {links.map((link, index) => (
                <li key={index} className="flex items-start gap-x-4">
                  <NavLink to={link.path} className="flex items-start text-left">
                      <div className="flex w-20 h-20 justify-center items-center rounded-xl">
                        <img alt="Nav Icon" className="object-contain" src={link.imgSrc} />
                      </div>
                      <div className="flex flex-col ml-4">
                        <h4 className="text-sm font-bold">{link.label}</h4>
                        <p className="text-xs text-gray-500 mt-1">{link.description}</p>
                      </div>
                </NavLink>

                </li>
              ))}
            </ul>
            <div className="w-1/3">
              <img
                src={getRightImage()}
                alt="Right Section"
                className="object-cover w-full h-full rounded"
              />
            </div>
          </div>
        </div>
      )}
    </li>
  );
};

export default Dropdown;

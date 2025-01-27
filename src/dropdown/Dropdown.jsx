import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import solutionff from '../assets/solutionff.webp'; // Assuming this is the right image

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
    return solutionff; // Default image for other titles
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
        <div className="bg-white absolute w-[1000px] top-10 left-1/2 transform -translate-x-[40%]">
          {/* Flex Container for the Dropdown Content */}
          <div className="flex p-4">
            {/* Left-side content: Grid List */}
            <ul className="grid grid-cols-3 gap-4 p-3   flex-1">
              {links.map((link, index) => (
                <li key={index} className="hover:border hover:rounded-md hover:shadow-md">
                  <NavLink
                    to={link.path}
                    className="block text-sm text-gray-800"
                  >
                    <div className="flex items-center gap-4">
                      {/* Image on the left */}
                      <img
                        src={link.imgSrc}
                        alt={link.label}
                        className="w-8 h-8 rounded-lg p-2"
                        style={{ backgroundColor: link.bgColor }}
                      />
                      {/* Content on the left: Hide description and title on mobile */}
                      <div className="flex-col items-start hidden sm:block ">
                        <p className="font-semibold text-left">{link.label}</p>
                        <p className="text-xs text-[#6b7280]  text-left">
                          {link.description}
                        </p>
                      </div>
                    </div>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
};

export default Dropdown;

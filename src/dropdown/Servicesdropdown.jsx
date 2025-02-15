import React from 'react';
import { servicesdropdown } from '../Js/dropdown1';

const ServicesDropdown = ({ isOpen }) => {
  return (
    <div 
      className={`absolute top-[88%] lg:left-[150%] left-[50%] w-[90%] md:w-[1200px] bg-white shadow-md rounded-[15px] transform -translate-x-1/2 flex flex-col md:flex-row z-10 overflow-hidden transition-opacity duration-500 ease-in-out ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Left: Services List */}
      <ul className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-3 w-full md:w-3/4 p-4">
        {servicesdropdown.map((item, index) => (
          <li key={index} className="flex flex-row items-center gap-3 p-3 transition-all duration-300">
            {/* Image */}
            <div className="w-10 h-10 flex items-center justify-center rounded-md" style={{ backgroundColor: item.bgColor }}>
              <img src={item.imgSrc} alt={item.label} className="w-6 h-6 rounded-md" />
            </div>

            {/* Label & Description */}
            <div>
              <a href={item.path} className="text-gray-700 text-sm font-semibold">
                {item.label}
              </a>
              <p className="hidden md:block text-xs text-gray-500">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>

      {/* Right: Image Section (Hidden on Mobile) */}
      <div className="hidden md:flex w-1/4 justify-end ">
        <img 
          src="https://appdevs.net/_next/static/media/service.f736508e.webp" 
          alt="Services" 
          className="max-w-full h-auto rounded-md"
        />
      </div>
    </div>
  );
};

export default ServicesDropdown;

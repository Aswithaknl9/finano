import React from 'react';
import { helpdropdown } from '../Js/dropdown1';

const helpDropdown = ({ isOpen }) => {
  return (
    <div 
      className={`
        absolute top-[88%] left-1/2 lg:left-[-250px] w-[80%] max-w-[1200px] 
        bg-white shadow-md rounded-[15px] 
        transform -translate-x-1/2 flex items-center justify-between 
        z-10 overflow-hidden 
        transition-opacity duration-500 ease-in-out 
        md:w-[900px] lg:w-[1200px] xl:w-[1200px] 
        ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}
    >
      {/* Left: Company List */}
      <ul className="grid lg:grid-cols-3 lg:grid-rows-2 w-[calc(100%-312px)] p-8 gap-3">
        {helpdropdown.map((item, index) => (
          <li key={index} className="flex flex-row items-center gap-2 p-2 transition-all duration-300">
            {/* Image */}
            <div 
              className="w-10 h-10 lg:w-12 lg:h-12 flex justify-center items-center rounded-md lg:rounded-md"
              style={{ backgroundColor: item.bgColor }}
            >
              <img 
                src={item.imgSrc} 
                alt={item.label} 
                width="30" 
                height="30" 
                className="h-6 w-6"
              />
            </div>

            {/* Label (Only label on mobile, full details on larger screens) */}
            <div>
              <a href={item.path} className="text-gray-700 text-sm font-semibold">
                {item.label}
              </a>
              <p className="hidden lg:block text-xs text-gray-500">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>

      {/* Right: Image Section (Hidden on mobile) */}
      <div className="absolute top-0 right-0 w-[312px] h-full flex items-center hidden lg:flex lg:justify-end">
        <img 
          src="https://appdevs.net/_next/static/media/help.872b39ec.webp"
          alt="Company" 
          className="max-w-full h-auto rounded-md"
        />
      </div>
    </div>
  );
};

export default helpDropdown;

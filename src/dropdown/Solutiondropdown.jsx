import React from 'react';
import { solutionsdropdown } from '../Js/dropdown1';

const SolutionsDropdown = ({ isOpen }) => {
  return (
    <div
  className={`
    absolute top-[88%] left-1/2 lg:left-[250%] w-[80%] sm:w-[90%] md:w-[100%] lg:w-[1500%] 
    bg-white shadow-lg rounded-lg transform -translate-x-1/2 
    flex items-center justify-between z-10 overflow-hidden
    opacity-0 pointer-events-none transition-opacity duration-500 ease-in-out
    ${isOpen ? 'opacity-100 pointer-events-auto' : ''}
  `}
>
      {/* Left: Solutions List */}
      <ul className="grid lg:grid-cols-3 lg:grid-rows-2 w-[calc(100%-312px)] p-8 gap-3">
        {solutionsdropdown.map((item, index) => (
          <li key={index} className="flex flex-row items-center gap-2 p-3 transition-all duration-300">
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
          src="https://appdevs.net/_next/static/media/solution.f7885da2.webp" 
          alt="Solutions" 
          className="max-w-full h-auto rounded-md"
        />
      </div>
    </div>
  );
};

export default SolutionsDropdown;

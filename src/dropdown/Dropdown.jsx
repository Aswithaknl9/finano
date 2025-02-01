import React from "react";
import { NavLink } from "react-router-dom";

const Dropdown = ({ title, links, isOpen, onMouseEnter, onMouseLeave }) => {
  const isSolutions = title.toLowerCase() === "solutions"; // Check if it's "Solutions"
  const isServices = title.toLowerCase() === "services"; // Check if it's "Services"
  const isCompany = title.toLowerCase() === "company"; // Check if it's "Company"
  const isHelp = title.toLowerCase() === "help"; // Check if it's "Help"

  return (
    <li
      className="relative group lg:py-8 lg:px-0  py-2"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <a className="flex items-center text-black" href={`/${title.toLowerCase()}`}>
        {title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 text-color__heading ml-1 relative top-[1px] transition-transform duration-300 group-hover:rotate-180"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </a>

      {/* Dropdown Menu */}
      {isOpen && (
        <div 
          className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-lg rounded-lg z-50 w-[380px] sm:w-[500px] md:w-[650px] lg:w-[800px] xl:w-[900px] p-6 flex space-x-4"
        >
          {/* Left Side: Grid Layout */}
          <div className="w-2/3 pr-4">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {links.map((item, index) => (
                <li key={index} className="hover:bg-gray-100 p-3 rounded-md transition-all">
                  <NavLink className="flex items-start space-x-4" to={item.path}>
                    {/* Icon with Background */}
                    <div className="w-16 h-16 flex justify-center items-center overflow-hidden">
                      <img
                        alt={item.label}
                        loading="lazy"
                        width="60"
                        height="60"
                        className="w-full h-full object-cover"
                        src={item.imgSrc}
                      />
                    </div>
                    {/* Text Content */}
                    <div>
                      <h4 className="font-semibold text-black">{item.label}</h4>
                      <p className="text-xs text-gray-500">{item.description}</p>
                    </div>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side: Background Image */}
          {(isSolutions || isServices || isCompany || isHelp) && (
            <div
              className={`w-1/3 bg-cover bg-no-repeat rounded-r-lg ${isSolutions ? "bg-[url('https://appdevs.net/_next/static/media/solution.f7885da2.webp')]" : 
                isServices ? "bg-[url('https://appdevs.net/_next/static/media/service.f736508e.webp')]" : 
                isCompany ? "bg-[url('https://appdevs.net/_next/static/media/company.c78efb6d.webp')]" :
                isHelp ? "bg-[url('https://appdevs.net/_next/static/media/help.872b39ec.webp')]" : ""} bg-center`}
            />
          )}
        </div>
      )}
    </li>
  );
};

export default Dropdown;

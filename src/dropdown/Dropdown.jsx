import React from "react";
import { NavLink } from "react-router-dom";
import solutionff from "../assets/solutionff.webp";
import service from "../assets/service.webp";
import company from "../assets/company.webp";
import help from "../assets/help.webp";

const Dropdown = ({ title, links, isOpen, onMouseEnter, onMouseLeave }) => {
  const isSolutions = title.toLowerCase() === "solutions";
  const isServices = title.toLowerCase() === "services";
  const isCompany = title.toLowerCase() === "company";
  const isHelp = title.toLowerCase() === "help";

  {/*const backgroundImage = isSolutions
    ? solutionff
    : isServices
    ? service
    : isCompany
    ? company
    : isHelp
    ? help
    : "";
    */}

  return (
    <li
      className="relative group lg:py-8 lg:px-0 py-1"
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
          className="w-4 text-black ml-1 relative top-[1px] transition-transform duration-300 group-hover:rotate-180"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </a>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute  left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg w-[800px] p-6 z-50 flex items-start space-x-6"
        >
          {/* Left Side: Grid Layout */}
          <div className="flex-1 ">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {links.map((item, index) => (
                <li key={index} className="hover:bg-gray-100 p-3 rounded-md transition-all">
                  <NavLink className="flex items-start space-x-4" to={item.path}>
                    {/* Icon with Background */}
                    <div
                      className="w-12 h-12 flex justify-center items-center rounded-md p-2"
                      style={{ backgroundColor: item.bgColor }}
                    >
                      <img
                        alt={item.label}
                        loading="lazy"
                        width="30"
                        height="30"
                        className="h-6 w-auto"
                        src={item.imgSrc}
                      />
                    </div>
                    {/* Text Content */}
                    <div className="w-60">
                      <h4 className="font-semibold text-black text-lg">{item.label}</h4>
                      <p className="text-sm text-gray-500 hidden sm:block">{item.description}</p>
                    </div>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side Background Image 
          <div
            className="w-[200px] h-[150px] bg-cover bg-center rounded-md"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />

          */}
        </div>
      )}
    </li>
  );
};

export default Dropdown;

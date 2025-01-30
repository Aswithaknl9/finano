import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Dropdown = ({ title, links }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <li ref={dropdownRef} className="relative flex items-center group">
      <NavLink
        to={`/${title.toLowerCase()}`}
        className={({ isActive }) => (isActive ? "text-blue-700" : "text-black")}
      >
        {title}
      </NavLink>
      <FontAwesomeIcon
        icon={faChevronDown}
        className={`ml-2 transition-transform duration-300 ${
          isDropdownOpen ? "rotate-180" : "rotate-0"
        } text-sm`}
        onClick={handleDropdownToggle}
      />

      {isDropdownOpen && (
        <div>
        <div
          className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 top-10 bg-white shadow-lg lg:rounded-lg border z-[50] lg:w-[1100%] w-[500px] rounded-[30px] h-auto p-4"
        >
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {links.map((link, index) => (
              <li key={index} className="hover:bg-gray-100 p-2 rounded-md transition-all">
                <NavLink to={link.path} className="block text-sm text-gray-800">
                  <div className="flex items-center gap-3">
                    <img
                      src={link.imgSrc}
                      alt={link.label}
                      className="w-8 h-8 rounded-md"
                      style={{ backgroundColor: link.bgColor }}
                    />
                    <div>
                      <p className="font-semibold">{link.label}</p>
                      <p className="text-xs text-gray-500 hidden lg:block">
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

import React, { useState } from 'react';
import { dropdown } from '../Js/dropdown';  // Importing the dropdown data

const Header = () => {
  // Separate state for each menu to track visibility
  const [activeMenu, setActiveMenu] = useState(null);

  const renderMenuItems = (items) => {
    return items.map((item, index) => (
      <li key={index} className="hover:bg-gray-100 transition-all">
        <a className="flex items-start space-x-4 py-3 px-5 hover:text-blue-600" href={item.path}>
          <div
            className={`w-12 h-12 flex justify-center items-center rounded-full`}
            style={{ backgroundColor: item.bgColor }}
          >
            <img alt="Nav Icon" className="h-8 w-8 object-cover" src={item.imgSrc} />
          </div>
          <div className="text-left">
            <h4 className="text-lg font-semibold">{item.label}</h4>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        </a>
      </li>
    ));
  };

  const handleMenuMouseEnter = (menu) => {
    setActiveMenu(menu); // Set the active menu to the one being hovered
  };

  const handleMenuMouseLeave = () => {
    setActiveMenu(null); // Reset active menu when mouse leaves
  };

  return (
    <header className="header_section absolute top-0 left-0 z-50 w-full bg-white shadow-md">
      <div className="container xl:max-w-[1782px] px-4 mx-auto">
        <div className="header_wrapper flex justify-between items-center py-5">
          {/* Logo */}
          <a className="site_logo" href="/">
            <img
              alt="AppDevs Logo"
              fetchpriority="high"
              width="190"
              height="40"
              decoding="async"
              className="object-cover"
              src="/_next/static/media/logo.4d70d31c.png"
            />
          </a>

          {/* Navigation Links */}
          <ul className="nav_link lg:flex items-center xl:space-x-9 lg:space-x-5 hidden justify-center">
            {/* Solutions Link with Mega Menu */}
            <li
              className="relative group"
              onMouseEnter={() => handleMenuMouseEnter('solutions')}
              onMouseLeave={handleMenuMouseLeave}
            >
              <a className="flex items-center text-color__text font-medium" href="/solutions">
                Solutions
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 text-color__heading ms-1"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                </svg>
              </a>

              {activeMenu === 'solutions' && (
                <div className="mega_menu absolute left-1/2 transform -translate-x-1/2 top-full bg-white shadow-lg w-[600px] sm:w-[500px] md:w-[600px] lg:w-[700px] mt-4 rounded-lg z-10 max-h-96 overflow-y-auto">
                  <ul className="mega_menu_list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                    {renderMenuItems(dropdown.solutions)}  {/* Dynamically render solutions */}
                  </ul>
                </div>
              )}
            </li>

            {/* Services Link with Mega Menu */}
            <li
              className="relative group"
              onMouseEnter={() => handleMenuMouseEnter('services')}
              onMouseLeave={handleMenuMouseLeave}
            >
              <a className="flex items-center text-color__text font-medium" href="/services">
                Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 text-color__heading ms-1"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                </svg>
              </a>

              {activeMenu === 'services' && (
                <div className="mega_menu absolute left-1/2 transform -translate-x-1/2 top-full bg-white shadow-lg w-[600px] sm:w-[500px] md:w-[600px] lg:w-[700px] mt-4 rounded-lg z-10 max-h-96 overflow-y-auto">
                  <ul className="mega_menu_list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                    {renderMenuItems(dropdown.services)}  {/* Dynamically render services */}
                  </ul>
                </div>
              )}
            </li>
          </ul>

          {/* Action Button */}
          <div className="header_action_area flex items-center space-x-3">
            <a className="primary__btn bg-blue-600 text-white py-2 px-6 rounded-lg flex items-center space-x-2" href="/contact">
              <span>Let's Talk</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import one from '../assets/one.png';
import Dropdown from '../dropdown/Dropdown';
import { dropdown } from '../Js/dropdown';



const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); 

  const handleMouseEnter = (section) => setOpenDropdown(section); 
  const handleMouseLeave = () => setOpenDropdown(null); 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white bg-opacity-80 shadow-md" : "bg-transparent"}`}>
      <div className="w-full h-[9vh] flex justify-between items-center lg:py-5 px-4">
        
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={one} alt="logo" className="w-[120px]" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex-1 lg:flex justify-center">
          <ul className="flex gap-7 text-[16px] text-black">
            <li className="lg:py-8 lg:px-0 px-6 py-2">
              <NavLink to="/" className={({ isActive }) => (isActive ? 'text-blue-700' : 'text-black')}>Home</NavLink>
            </li>

            {/* Solutions Dropdown */}
            <Dropdown
              title="Solutions"
              links={dropdown.solutions}
              isOpen={openDropdown === 'solutions'}
              onMouseEnter={() => handleMouseEnter('solutions')}
              onMouseLeave={handleMouseLeave}
            />

            {/* Services Dropdown */}
            <Dropdown
              title="Services"
              links={dropdown.services}
              isOpen={openDropdown === 'services'}
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            />

            <li className="lg:py-8 lg:px-0 px-6 py-2">
              <NavLink to="/products" className={({ isActive }) => (isActive ? 'text-blue-700' : 'text-black')}>Products</NavLink>
            </li>

            <li className="lg:py-8 lg:px-0 px-6 py-2">
              <NavLink to="/blog" className={({ isActive }) => (isActive ? 'text-blue-700' : 'text-black')}>Blog</NavLink>
            </li>

            {/* Company Dropdown */}
            <Dropdown
              title="Company"
              links={dropdown.company}
              isOpen={openDropdown === 'company'}
              onMouseEnter={() => handleMouseEnter('company')}
              onMouseLeave={handleMouseLeave}
            />

            {/* Help Dropdown */}
            <Dropdown
              title="Help"
              links={dropdown.help}
              isOpen={openDropdown === 'help'}
              onMouseEnter={() => handleMouseEnter('help')}
              onMouseLeave={handleMouseLeave}
            />
          </ul>
        </div>

        {/* Desktop "Let's Talk" Button */}
        <div className="hidden lg:flex items-end lg:ml-auto">
          <a className="bg-[#2974E7] text-white rounded-[5px] py-2 px-5 flex items-end" href="/contact">
            <span className='text-sm font-semibold'>Let's Talk</span>
            <div className="icon ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </a>
        </div>

        {/* Mobile Section: "Let's Talk" Button + Menu Toggle */}
        <div className="lg:hidden flex items-center">
          <a className="bg-[#2974E7] text-white rounded-[5px] py-2 px-4 flex items-center mr-4" href="/contact">
            <span className="text-sm font-semibold">Let's Talk</span>
            <div className="icon ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button onClick={toggleMobileMenu} className="text-black border rounded-md p-2">
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Content */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-16 left-4 right-4 bg-white p-4 shadow-md rounded-md z-50">
            <ul className="flex flex-col gap-4 text-black">
              <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? 'text-blue-700' : 'text-black')}>Home</NavLink>
              </li>

              {/* Solutions Dropdown for Mobile */}
              <Dropdown
                title="Solutions"
                links={dropdown.solutions}
                isOpen={openDropdown === 'solutions'}
                onMouseEnter={() => handleMouseEnter('solutions')}
                onMouseLeave={handleMouseLeave}
              />

              {/* Services Dropdown for Mobile */}
              <Dropdown
                title="Services"
                links={dropdown.services}
                isOpen={openDropdown === 'services'}
                onMouseEnter={() => handleMouseEnter('services')}
                onMouseLeave={handleMouseLeave}
              />

              <li>
                <NavLink to="/products" className={({ isActive }) => (isActive ? 'text-blue-700' : 'text-black')}>Products</NavLink>
              </li>

              <li>
                <NavLink to="/blog" className={({ isActive }) => (isActive ? 'text-blue-700' : 'text-black')}>Blog</NavLink>
              </li>

              <Dropdown
              title="Company"
              links={dropdown.company}
              isOpen={openDropdown === 'company'}
              onMouseEnter={() => handleMouseEnter('company')}
              onMouseLeave={handleMouseLeave}
            />

              <Dropdown
                title="Help"
                links={dropdown.help}
                isOpen={openDropdown === 'help'}
                onMouseEnter={() => handleMouseEnter('help')}
                onMouseLeave={handleMouseLeave}
              />
              
              
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

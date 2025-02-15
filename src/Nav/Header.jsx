import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import one from '../assets/one.png';
import SolutionsDropdown from '../dropdown/Solutiondropdown';
import ServicesDropdown from '../dropdown/Servicesdropdown';
import CompanyDropdown from '../dropdown/Companydropdown';
import HelpDropdown from '../dropdown/Helpdropdown';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const handleMouseEnter = (section) => setOpenDropdown(section);
  const handleMouseLeave = () => setOpenDropdown(null);

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
            <li><NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-700' : 'text-black'}>Home</NavLink></li>

            {/* Solutions Dropdown */}
            <li 
                className="relative" 
                onMouseEnter={() => handleMouseEnter('solutions')} 
                onMouseLeave={handleMouseLeave}
              >
                <button className="text-black hover:text-blue-600">Solutions</button>
                <SolutionsDropdown isOpen={openDropdown === 'solutions'} />
              </li>

            {/* Services Dropdown */}
            <li className="relative" onMouseEnter={() => handleMouseEnter('services')} onMouseLeave={handleMouseLeave}>
              <button className="text-black hover:text-blue-600">Services</button>
              <ServicesDropdown isOpen={openDropdown === 'services'} />
            </li>

            


            <li><NavLink to="/products" className={({ isActive }) => isActive ? 'text-blue-700' : 'text-black'}>Products</NavLink></li>
            <li><NavLink to="/blog" className={({ isActive }) => isActive ? 'text-blue-700' : 'text-black'}>Blog</NavLink></li>



            <li className="relative" onMouseEnter={() => handleMouseEnter('company')} onMouseLeave={handleMouseLeave}>
              <button className="text-black hover:text-blue-600">Company</button>
              <CompanyDropdown isOpen={openDropdown === 'company'} />
            </li>


            <li className="relative" onMouseEnter={() => handleMouseEnter('help')} onMouseLeave={handleMouseLeave}>
              <button className="text-black hover:text-blue-600">help</button>
              <HelpDropdown isOpen={openDropdown === 'help'} />
            </li>
             
          </ul>
        </div>

        {/* "Let's Talk" Button */}
        <div className="hidden lg:flex">
          <a className="bg-[#2974E7] text-white rounded-md py-2 px-5 flex items-center" href="/contact">
            <span className="text-sm font-semibold">Let's Talk</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="ml-2 w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-black border rounded-md p-2">
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Content */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-16 left-4 right-4 bg-white p-4 shadow-md rounded-md z-50">
            <ul className="flex flex-col gap-4 text-black">
              <li><NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-700' : 'text-black'}>Home</NavLink></li>
              <li><NavLink to="/products" className={({ isActive }) => isActive ? 'text-blue-700' : 'text-black'}>Products</NavLink></li>
              <li><NavLink to="/blog" className={({ isActive }) => isActive ? 'text-blue-700' : 'text-black'}>Blog</NavLink></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;


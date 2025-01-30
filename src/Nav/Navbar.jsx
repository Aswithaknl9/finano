import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import one from '../assets/one.png';
import Dropdown from '../dropdown/Dropdown';
import { dropdown } from '../Js/dropdown'; 

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and update state
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false); 
  };

  return (
    <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white bg-opacity-80 shadow-md" : "bg-transparent"}`}>
      <div className="w-full h-[10vh] flex justify-between items-center lg:py-5 px-10">
        
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={one} alt="logo" className="w-[100px]" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex-1 lg:flex justify-center">
          <ul className="flex gap-7 text-[16px] text-black">
            <li><NavLink to="/" className={({ isActive }) => (isActive ? 'text-blue-700' : 'text-black')}>Home</NavLink></li>
            <Dropdown title="Solutions" links={dropdown.solutions} />
            <Dropdown title="Services" links={dropdown.services} />
            <li><NavLink to="/products" className={({ isActive }) => (isActive ? 'text-blue-700' : 'text-black')}>Products</NavLink></li>
            <li><NavLink to="/blog" className={({ isActive }) => (isActive ? 'text-blue-700' : 'text-black')}>Blog</NavLink></li>
            <Dropdown title="Company" links={dropdown.company} />
            <Dropdown title="Help" links={dropdown.help} />
          </ul>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-[10vh] left-4 right-4 rounded-[20px] bg-white shadow-md">
            <ul className="flex flex-col items-start px-4 py-4 gap-6 text-[16px] text-black">
              <li><NavLink to="/" className={({ isActive }) => (isActive ? 'text-blue-700' : 'text-black')}>Home</NavLink></li>
              <Dropdown title="Solutions" links={dropdown.solutions} />
              <Dropdown title="Services" links={dropdown.services} />
              <li><NavLink to="/products" className={({ isActive }) => (isActive ? 'text-blue-700' : 'text-black')}>Products</NavLink></li>
              <li><NavLink to="/blog" className={({ isActive }) => (isActive ? 'text-blue-700' : 'text-black')}>Blog</NavLink></li>
              <Dropdown title="Company" links={dropdown.company} />
              <Dropdown title="Help" links={dropdown.help} />
            </ul>
          </div>
        )}

        {/* Let's Talk Button */}
        <div className="hidden lg:flex items-end lg:ml-auto">
          <a className="bg-[#2974E7] text-white rounded-[5px] py-2 px-3 flex items-center" href="/contact">
            <span className='text-sm font-semibold'>Let's Talk</span>
            <div className="icon ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </a>
        </div>

        {/* Mobile Let's Talk Button */}
        <div className="lg:hidden flex justify-end w-full">
          <a className="bg-[#2974E7] text-white rounded-[5px] py-2 px-3 flex items-center" href="/contact">
            <span className='text-sm font-semibold'>Let's Talk</span>
            <div className="icon ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </a>
        </div>

        {/* Hamburger Menu */}
        <div className="lg:hidden flex items-center">
          {!isMobileMenuOpen ? (
            <button onClick={toggleMobileMenu} className="text-black border rounded-md ml-2 ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          ) : (
            <button onClick={closeMobileMenu} className="text-black border rounded-md ml-2 ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

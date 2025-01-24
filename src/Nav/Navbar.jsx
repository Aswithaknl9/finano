import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import one from '../assets/one.png';
import Dropdown from '../dropdown/Dropdown';
import { dropdown } from '../Js/dropdown'; 

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='z-50 fixed w-full'>
      <div className='top-0 left-0 w-full h-[10vh] flex justify-between items-center lg:py-5 px-10 py-20 bg-white bg-opacity-80'>
        <div className='flex items-center'>
          <img src={one} alt='logo' className='w-[100px]' />
        </div>

        
        <div className='hidden lg:flex-1 lg:flex justify-center'>
          <ul className='flex gap-8 text-[16px] text-black'>
            <li><NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-700' : 'text-black'}>Home</NavLink></li>
            <Dropdown title="Solutions" links={dropdown.solutions} />
            <Dropdown title="Services" links={dropdown.services} />
            <li><NavLink to="/products" className={({ isActive }) => isActive ? 'text-blue-700' : 'text-black'}>Products</NavLink></li>
            <li><NavLink to="/blog" className={({ isActive }) => isActive ? 'text-blue-700' : 'text-black'}>Blog</NavLink></li>
            <Dropdown title="Company" links={dropdown.company} />
            <Dropdown title="Help" links={dropdown.help} />
          </ul>
          
        </div>

        {isMobileMenuOpen && (
          <div className='lg:hidden absolute top-[10vh] left-0 w-full bg-white bg-opacity-80'>
            <ul className='flex flex-col items-center gap-8 text-[16px] text-black py-4'>
              <li><NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-700' : 'text-black'}>Home</NavLink></li>
              <Dropdown title="Solutions" links={dropdown.solutions} />
              <Dropdown title="Services" links={dropdown.services} />
              <li><NavLink to="/products" className={({ isActive }) => isActive ? 'text-blue-700' : 'text-black'}>Products</NavLink></li>
              <li><NavLink to="/blog" className={({ isActive }) => isActive ? 'text-blue-700' : 'text-black'}>Blog</NavLink></li>
              <Dropdown title="Company" links={dropdown.company} />
              <Dropdown title="Help" links={dropdown.help} />
            </ul>
          </div>
        )}

        <div className='flex items-center'>
          <a className="primary__btn bg-blue-500 text-white rounded-lg py-2 px-6 flex items-center" href="/contact">
            <span>Let's Talk</span>
            <div className="icon ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path>
              </svg>
            </div>
          </a>
        </div>
        <div className='lg:hidden flex items-center'>
          <button onClick={toggleMobileMenu} className='text-black'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

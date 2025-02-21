import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarker,
  faShoppingCart,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { FaSearch, FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom"; 

const Navbar = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // Get current path

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar with scroll effect */}
      <motion.div
        className={`w-full bg-white shadow-md transition-all duration-500 ${
          isScrolled ? "fixed top-0 left-0 w-full z-50" : "relative"
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="relative flex justify-between items-start mx-2.5">
          {/* Logo */}
          <div className="flex justify-start z-10">
            <img
              src="https://demo.casethemes.net/finano/wp-content/uploads/2019/01/h4-logo-1.png"
              alt="logo"
              className="max-h-[86px] m-2"
            />
          </div>

          {/* Contact Info - Hidden on Small Screens */}
          <div className="relative flex flex-col justify-between items-end z-10 w-full">
            <div className="hidden md:flex items-center gap-6 text-sm text-white bg-black font-semibold py-2 pl-[130px]">
              <a href="mailto:finano@gmail.com" className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                <span>finano@gmail.com</span>
              </a>
              <a href="tel:14015724423" className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                <span>+1 401 572 4423</span>
              </a>
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faMapMarker} className="mr-2" />
                <span>121 King Street, USA, New York</span>
              </div>

              {/* Shopping Cart */}
              <div className="header-topbar-icon relative ml-6">
                <span className="h-btn-cart flex items-center space-x-2 cursor-pointer" onClick={toggleCart}>
                  <FontAwesomeIcon icon={faShoppingCart} />
                  <span className="cart-counter">0</span>
                </span>
                <div
                  className={`widget_shopping_cart absolute right-0 mt-2 bg-white shadow-lg border p-4 rounded-lg w-64 transition-all duration-300 ease-in-out ${
                    isCartVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  <div className="widget_shopping_title flex justify-between items-center text-sm font-semibold">
                    <span>Shopping Cart</span>
                    <span className="cart-counter-items">(0 items)</span>
                  </div>
                  <div className="widget_shopping_cart_content mt-2">
                    <ul className="cart_list product_list_widget">
                      <li className="empty text-gray-500">No products in the cart.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="mt-2 items-center w-full flex justify-center">
  <ul className="flex space-x-6 text-[16px] font-semibold p-2 ml-10">
    {[
      { name: "Home", path: "/" },
      { name: "About us", path: "/aboutus" },
      { name: "Services", path: "/services" },
      { name: "Blog", path: "/blog" },
      { name: "Contact", path: "/contact" },
    ].map((item) => (
      <li key={item.path}>
        <Link
          to={item.path}
          className={`relative transition-all duration-300 ${
            location.pathname === item.path ? "underline decoration-red-600" : ""
          }`}
        >
          {item.name}{" "}
          <FontAwesomeIcon
            icon={faChevronDown}
            className="ml-1 text-xs align-middle -mt-1"
          />
        </Link>
      </li>
    ))}
  </ul>
</nav>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;

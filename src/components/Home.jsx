import React, { useState, useEffect } from "react";
import AboutUs from "./Aboutus";
import ServiceGrid from "./ServiceGrid";
import Tabcontent from "./Tabcontent";
import CounterSection from "./icon";
import TeamSection from "./Team";
import BlogCarousel from "./blog";
import ContactForm from "./blogs";
import { motion } from "framer-motion";
import Card from "./card";

const images = [
  "https://demo.casethemes.net/finano/wp-content/uploads/2019/01/h5-bg-slider2.jpg",
  "https://demo.casethemes.net/finano/wp-content/uploads/2019/01/h5-bg-slider3.jpg",
  "https://demo.casethemes.net/finano/wp-content/uploads/2019/01/h5-slider1.jpg",
];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Background Image Slider */}
      <motion.div
        key={currentImage} // Forces re-render when image changes
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full flex flex-col justify-center items-start text-start bg-cover bg-center"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      >
        {/* Black Overlay - Covers Half of the Screen */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 left-[8%] h-full w-[40%] bg-black/80"
        ></motion.div>

        {/* Content Section with Animation */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { staggerChildren: 0.3, ease: "easeInOut" },
            },
          }}
          className="relative z-10 max-w-[30%] left-[8%] pl-10 text-white flex flex-col justify-center h-[60vh]"
        >
          <div className="border-l-4 border-[#f91101] pl-4">
            <motion.span
              variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}
              transition={{ duration: 1 }}
              className="text-[#f91101] uppercase text-[18px] font-medium"
            >
              W e h o p e s u c c e s s
            </motion.span>

            <motion.h1
              variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-[60px] leading-tight font-semibold mt-2"
            >
              We build your best business
            </motion.h1>
          </div>

          {/* Animated Paragraph */}
          <motion.p
            variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-gray-300 text-[15px] mt-4"
          >
            The argument in favor of using filler text goes something like this: you use real content.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { staggerChildren: 0.3, ease: "easeInOut" },
              },
            }}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 gap-4 mt-6"
          >
            {/* First Button */}
            <motion.button
              variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}
              transition={{ duration: 1 }}
              className="bg-gradient-to-r from-red-600 to-red-800 font-poppins 
                        cursor-pointer outline-none shadow-none box-border 
                        text-center leading-[47px] tracking-normal font-bold text-sm 
                        border-transparent m-0 rounded-none px-[37px] text-white 
                        no-underline whitespace-nowrap w-auto h-auto min-h-0 min-w-0 
                        max-h-none max-w-none opacity-100 border-0 border-solid"
            >
              Let’s start now
            </motion.button>

            {/* Second Button */}
            <motion.button
              variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}
              transition={{ duration: 1, delay: 0.3 }} // Delayed animation for second button
              className="bg-white font-poppins 
                        cursor-pointer outline-none shadow-none box-border 
                        text-center leading-[47px] tracking-normal font-bold text-sm 
                        border-transparent m-0 rounded-none px-[37px] text-black
                        no-underline whitespace-nowrap w-auto h-auto min-h-0 min-w-0 
                        max-h-none max-w-none opacity-100 border-0 border-solid"
            >
              Let’s start now
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Other Sections */}
      <AboutUs />
      <ServiceGrid />
      <Tabcontent />
      <CounterSection />
      <TeamSection />
      <Card />
      <BlogCarousel />
      <ContactForm />
    </>
  );
};

export default Home;

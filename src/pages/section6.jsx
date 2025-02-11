import React from 'react';
import technologiesBg from '../assets/technologiesBg.png';
import TechnologyItem from './TechnologyItem';
import { technologies } from '../Js/technologies';

const Section6 = () => {
  return (
    <section className="relative  pb-[130px] flex flex-col items-center max-w-[1200px] mx-auto mt-14 py-[8px] ">
      {/* Title */}
      <div className="text-center mb-14">
        <h1 className="text-[24px] sm:text-[28px] md:text-[38px] lg:text-[48px] max-w-[587px] mx-auto px-4 text-center  leading-tight font-semibold ">
          Technologies used to develop our products.
        </h1>
      </div>

      {/* Technologies List with Background Image */}
      <div className="relative w-full font-medium">
        {/* Background Image */}
        <img 
          src={technologiesBg} 
          loading="lazy" 
          alt="Technologies Background" 
          className="absolute inset-0 w-full h-full object-contain z-0"
        />

        {/* Technologies Grid */}
        <div className="relative z-10 flex flex-col items-center  gap-4 text-[14px] lg:text-[18px] ">
          {/* First Line (6 items) */}
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.slice(0, 6).map((tech, index) => (
              <TechnologyItem key={index} imgSrc={tech.imgSrc} name={tech.name} />
            ))}
          </div>

          {/* Second Line (6 items) */}
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.slice(6, 12).map((tech, index) => (
              <TechnologyItem key={index + 6} imgSrc={tech.imgSrc} name={tech.name} />
            ))}
          </div>

          {/* Third Line (7 items) */}
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.slice(12, 19).map((tech, index) => (
              <TechnologyItem key={index + 12} imgSrc={tech.imgSrc} name={tech.name} />
            ))}
          </div>

          {/* Fourth Line (8 items) */}
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.slice(19, 27).map((tech, index) => (
              <TechnologyItem key={index + 19} imgSrc={tech.imgSrc} name={tech.name} />
            ))}
          </div>

          {/* Fifth Line (6 items) */}
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.slice(27, 33).map((tech, index) => (
              <TechnologyItem key={index + 27} imgSrc={tech.imgSrc} name={tech.name} />
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {technologies.slice(33, 39).map((tech, index) => (
              <TechnologyItem key={index + 33} imgSrc={tech.imgSrc} name={tech.name} />
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {technologies.slice(39, 45).map((tech, index) => (
              <TechnologyItem key={index + 39} imgSrc={tech.imgSrc} name={tech.name} />
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {technologies.slice(45, 49).map((tech, index) => (
              <TechnologyItem key={index + 45} imgSrc={tech.imgSrc} name={tech.name} />
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {technologies.slice(49, 54).map((tech, index) => (
              <TechnologyItem key={index + 49} imgSrc={tech.imgSrc} name={tech.name} />
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {technologies.slice(54, 59).map((tech, index) => (
              <TechnologyItem key={index + 54} imgSrc={tech.imgSrc} name={tech.name} />
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {technologies.slice(59, 64).map((tech, index) => (
              <TechnologyItem key={index + 59} imgSrc={tech.imgSrc} name={tech.name} />
            ))}
          </div>

          

        </div>
      </div>
    </section>
  );
};

export default Section6;

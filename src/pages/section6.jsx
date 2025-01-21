import React from 'react';
import TechnologyItem from './TechnologyItem'; 
import { technologies } from '../Js/technologies';

const Section6 = () => {
  return (
    <section className="relative max-w-[800px] mx-80 mt-14">
      <div className="max-w-[587px] mx-auto px-4 text-center">
        <h1 className="text-[40px] font-semibold">
          Technologies used to develop our products.
        </h1>
      </div
>
      {/* Technologies List with Background Image */}
      <div className="relative mt-8">
        <img 
          src="https://appdevs.net/_next/static/media/technologiesBg.a55292ec.png" 
          alt="Technologies Background" 
          className="absolute inset-0 object-contain"
        />
        
        {/* First Line (6 items) */}
        <div className="relative flex flex-wrap justify-center gap-3">
          {technologies.slice(0, 6).map((tech, index) => (
            <TechnologyItem key={index} imgSrc={tech.imgSrc} name={tech.name} />
          ))}
        </div>

        {/* Second Line (6 items) */}
        <div className="relative flex flex-wrap justify-center gap-3 mt-3">
          {technologies.slice(6, 12).map((tech, index) => (
            <TechnologyItem key={index + 6} imgSrc={tech.imgSrc} name={tech.name} />
          ))}
        </div>

        {/* Third Line (7 items) */}
        <div className="relative flex flex-wrap justify-center gap-3 mt-3">
          {technologies.slice(12, 19).map((tech, index) => (
            <TechnologyItem key={index + 12} imgSrc={tech.imgSrc} name={tech.name} />
          ))}
        </div>

        {/* Fourth Line (8 items) */}
        <div className="relative flex flex-wrap justify-center gap-3 mt-3">
          {technologies.slice(19, 27).map((tech, index) => (
            <TechnologyItem key={index + 19} imgSrc={tech.imgSrc} name={tech.name} />
          ))}
        </div>

        {/* Fifth Line (6 items) */}
        <div className="relative flex flex-wrap justify-center gap-3 mt-3">
          {technologies.slice(27, 33).map((tech, index) => (
            <TechnologyItem key={index + 27} imgSrc={tech.imgSrc} name={tech.name} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section6;

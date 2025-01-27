import React from "react";
import SolutionCard from "../component/solutioncard"; 
import solutionimg from "../Js/solutionimg"; 

const Solutions = () => {
  return (
    <div className="relative">
      <div 
        className="bg-cover bg-no-repeat bg-left flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://appdevs.net/_next/static/media/servicePageBgLeft.292df356.webp), url(https://appdevs.net/_next/static/media/servicePageBgRight.e134874f.webp)',
          backgroundPosition: 'left top, right top',
          backgroundSize: 'contain',
          height: '600px', 
        }}
      >
        <div className="text-center max-w-[700px] mx-auto p-4 z-10">
          <span className="text-[#115E59] bg-[#CCFBF1] rounded-full text-[10px] px-3 py-1 font-semibold mb-6">
            Solutions
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold md:mb-6">
            Explore Solutions That Boost Your Business
          </h1>
          <p className="text-[#6B7280] text-[14px] sm:text-[16px] mb-6">
            Discover a wide range of solutions specifically designed to address your business challenges. Learn how our innovative offerings work to optimize processes and accelerate your business growth effectively.
          </p>
        </div>
      </div>
      <div 
        id="services" 
        className="flex flex-wrap gap-16 justify-center z-20 relative"
        style={{ transform: 'translateY(-150px)' }}  
      >
        {/* Grid of Solution Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-9 px-6 py-6">
          {solutionimg.map((solution, index) => (
            <SolutionCard
              key={index}
              image={solution.image}
              title={solution.title}
              description={solution.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;

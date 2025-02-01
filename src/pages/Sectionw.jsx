import React from 'react';

const Sectionw = () => {
  return (
    <section className="pb-[130px]">
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        <div className="bg-backgroundimg relative rounded-[30px] overflow-hidden z-10 text-center md:py-20 py-12 md:px-12 px-5 mt-[-60px]">
          
          {/* Background Images */}
          <div className="absolute inset-0 z-[-1]">
            <img 
              alt="call-to-action" 
              loading="lazy" 
              width="1248" 
              height="398" 
              decoding="async" 
              className="absolute top-0 left-0 object-cover w-full h-full opacity-70" 
              style={{ color: "transparent" }} 
              src="https://appdevs.net/_next/static/media/call-to-action-bg.c8db122f.webp"
            />
          </div>
          
          <div className="absolute top-0 right-0 z-[-1]">
            <img 
              alt="call-to-action" 
              loading="lazy" 
              width="417" 
              height="415" 
              decoding="async" 
              className="object-cover opacity-70" 
              style={{ color: "transparent" }} 
              src="https://appdevs.net/_next/static/media/call-to-action-element.251891da.webp"
            />
          </div>

          {/* Call to Action Content */}
          <div>
            <h2 className="xl:text-5xl md:text-4xl sm:leading-[85px] text-white lg:w-[70%] mx-auto mb-6 font-semibold">
              Turn Your FinTech App Idea Into Reality
            </h2>
            <div className="flex justify-center items-center">
              <a 
                className="bg-blue-600 hover:bg-blue-700 transition text-white py-3 px-6 rounded-lg font-medium shadow-md"
                href="/contact"
              >
                Contact Us
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Sectionw;

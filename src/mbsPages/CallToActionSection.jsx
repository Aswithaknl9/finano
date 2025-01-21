import React from 'react';
import { Link } from 'react-router-dom';

const CallToActionSection = () => {
  return (
    <section className="py-[130px]">
      <div className="xl:max-w-[1100px] container mx-auto px-4">
        <div className="bg-backgroundimg relative rounded-[30px] overflow-hidden z-10 text-center md:py-20 py-12 md:px-12 px-5">
          <div className="absolute top-0 left-0 z-[-1]">
            <img
              alt="call-to-action"
              loading="lazy"
              width="1248"
              height="398"
              decoding="async"
              className="object-cover"
              src="https://appdevs.net/_next/static/media/call-to-action-bg.c8db122f.webp"
              style={{ color: 'transparent' }}
            />
          </div>
          <div className="absolute top-0 right-0 z-[-1]">
            <img
              alt="call-to-action"
              loading="lazy"
              width="417"
              height="415"
              decoding="async"
              className="object-cover"
              src="https://appdevs.net/_next/static/media/call-to-action-element.251891da.webp"
              style={{ color: 'transparent' }}
            />
          </div>
          <div>
            <h2 className="xl:text-7xl md:text-6xl sm:leading-[85px] text-white font-semibold lg:w-[60%] mx-auto mb-6">
              Why Late? Let’s Build Fintech App
            </h2>
            <div className="flex justify-center items-center">
              <Link to="/contact" className="primary__btn bg-blue-600 px-2 py-2 rounded-md font-semibold">
                <span className='text-white'>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;

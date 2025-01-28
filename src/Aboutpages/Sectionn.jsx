import React from 'react';

const Sectionn = () => {
  return (
    <section className="pb-[130px]">
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        <div className="bg-backgroundimg relative rounded-[30px] overflow-hidden z-10 text-center md:py-20 py-12 md:px-12 px-5 mt-[-60px]">
          {/* Background Images */}
          <div className="absolute top-0 left-0 z-[-1]">
            <img
              alt="Gradient background with abstract design elements"
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
              alt="Decorative call-to-action element with FinTech theme"
              loading="lazy"
              width="417"
              height="415"
              decoding="async"
              className="object-cover"
              src="https://appdevs.net/_next/static/media/call-to-action-element.251891da.webp"
              style={{ color: 'transparent' }}
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="xl:text-5xl md:text-3xl sm:leading-[85px] text-white font-semibold lg:w-[70%] mx-auto mb-6">
              Turn Your FinTech App Idea Into Reality
            </h2>
            <div className="flex justify-center items-center space-x-4">
              <a
                className="primary__btn transition transform hover:scale-105 hover:shadow-lg"
                href="/contact"
                data-analytics="cta-contact-us"
              >
                <span className='text-white bg-blue-600 font-semibold px-3 py-3 rounded-md'>Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sectionn;

import React from 'react';
import newsletterBg from '../assets/newsletterBg.webp';

const SubscribeSection = () => {
  return (
    <section className="pt-[130px] mb-[-118px] relative z-10" id="subscribe">
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        <div className="newsletter_wrapper relative bg-white lg:py-[100px] sm:py-16 py-8 md:px-20 px-6 rounded-[40px] lg:flex items-center justify-between">
          <img
            alt="Background Image"
            loading="lazy"
            width="1248"
            height="300"
            decoding="async"
            className="w-full h-auto absolute bottom-0 left-0 rounded-b-[40px]"
            src={newsletterBg}
          />
          <img
            alt="Avatar Element"
            loading="lazy"
            width="132"
            height="217"
            decoding="async"
            className="absolute lg:top-[-137px] top-[-95px] lg:right-[120px] right-20 lg:w-auto w-24"
            src="https://appdevs.net/_next/static/media/avatarElement.4e13ab9f.png"
          />
          <div className="sm:flex block items-center relative z-[1]">
          <div class="lg:w-[94px] lg:h-[94px] w-14 h-14 lg:rounded-[20px] rounded-xl flex items-center justify-center bg-backgroungdd sm:mb-0 mb-5">
            <img 
              alt="Background Image" 
              loading="lazy" 
              width="60" 
              height="42" 
              decoding="async" 
              class="lg:w-auto w-8"
              src="https://appdevs.net/_next/static/media/newsIcon.37e79141.png"
            />
          </div>
            <div className="lg:ms-6 sm:ms-4 lg:w-[370px]">
              <h3 className="lg:text-[30px] md:text-[24px] text-[18px] font-semibold mb-2">
                Subscribe to Newsletter
              </h3>
              <span className="text-gray-600 text-[16px]">
                Join our newsletter to stay up to date on features and releases.
              </span>
            </div>
          </div>
          <form className="relative z-[1] lg:mt-0 mt-6">
            <div className="relative">
              <input
                required
                className="md:h-[62px] h-12 lg:w-[375px] w-full py-2 ps-5 pe-16 rounded-lg border-[2px] border-gray-200 text-black font-semibold placeholder:text-gray-500 placeholder:font-normal focus:border-blue-600"
                placeholder="Enter your email address"
                type="email"
              />
              <button
                className="md:w-[47px] w-9 md:h-[46px] h-9 md:rounded-lg rounded-md flex items-center justify-center bg-blue-600 transition-all hover:opacity-85 absolute top-1/2 -translate-y-1/2 right-2"
              >
                <img
                  alt="Paper Plane"
                  loading="lazy"
                  width="26"
                  height="26"
                  decoding="async"
                  className="md:w-auto w-5"
                  src="https://appdevs.net/_next/static/media/paperPlane.6e86d059.png"
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;

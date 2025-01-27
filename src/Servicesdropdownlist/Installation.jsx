import React from 'react';
import Installation1 from '../ServicesPages/Installation1';
import Installation2 from '../ServicesPages/installation2';
import Installation3 from '../ServicesPages/installation3';


const Installation = () => {
  return (
    <section className='pt-44 relative'>
      <img 
        src='https://appdevs.net/_next/static/media/installationPageBg.e42eb887.png' 
        alt='right-img' 
        className='absolute top-0 right-0 w-[500px] h-auto z-10' 
      />
      <div className="section_header mb-14 text-center">
            <div className="md:max-w-[850px] w-full mx-auto">
              <span className="text-[12px] font-semibold text-[#115e59] bg-[#ccfbf1] rounded-full py-1 px-3 mb-4 inline-block">
              Installation Service
              </span>
              <h1 className="font-semibold mb-3 text-[45px]">
              Installation & Deployment
              </h1>
              <p className="text-[#6b7280] text-[16px]">
              Get professional installation services for seamless setup and configuration of our products, ensuring they are ready to support your business operations effectively.
              </p>
            </div>
        </div>

        <form class="max-w-md mx-auto">   
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" id="default-search" class="block w-full p-3 ps-10 text-sm text-black border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 placeholder:text-black dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Installation..." required />
            </div>
        </form>
        <Installation1 />
        <Installation2 />
        <Installation3 />
    </section>
  );
};

export default Installation;

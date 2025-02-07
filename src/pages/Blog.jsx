import React, { useState } from 'react';
import BlogSearch from '../BlogPage/BlogSearch';
import Right from './Right';
import { blogPosts } from '../Js/blogPosts';
import productPageLeftBg from '../assets/productPageLeftBg.webp';
import solutionPageBgRight from '../assets/solutionPageBgRight.webp';

const Blog = () => {
  const [activeButton, setActiveButton] = useState('All');
  const filteredPosts =
    activeButton === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeButton);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <section className="relative py-[180px]">
      {/* Top-Left Background Image */}
      <img alt="Background Image" loading="lazy" width="777" height="946" decoding="async" data-nimg="1" class="absolute top-0 left-0 z-10 overflow-hidden hidden lg:block" src={productPageLeftBg} />
      
      {/* Top Right Image */}
      <img alt="Background Image" loading="lazy" width="558" height="799" decoding="async" data-nimg="1" class="absolute top-0 right-0 z-10 overflow-hidden hidden lg:block" src={solutionPageBgRight} />

      {/* Blog Search */}
      
      <div className='xl:max-w-[1280px] container mx-auto px-4 relative z-20'>
      <div className="section_header mb-14">
      <div className="max-w-[750px] mx-auto text-center">
        <span className="text-[12px] font-semibold text-[#115E59] bg-[#CCFBF1] rounded-full py-1 px-3 mb-6 inline-block">
          Our Blog
        </span>
        <h1 className="md:text-[38px] text-[30px] lg:text-[48px] font-semibold leading-tight mb-3">
          Explore our insights and case studies
        </h1>
        <p className="text-[14px] text-[#6b7280]">
          Unlock the full potential of your platform with our step-by-step guides and expert advice. 
          Learn how to manage admin roles, customize branding, configure fees, set up push notifications, live chat, and more.
        </p>
      </div>
    </div>

      <div className="grid grid-cols-12 gap-5 pb-8">
        <div className="col-span-12 lg:col-span-9 lg:border-r border-[#E5E7EB] lg:pr-4">
          {/* Post Filter Buttons */}
          <div className="lg:flex items-center justify-center mb-10 space-x-4">
            <div className="flex flex-wrap justify-center gap-4 border-b border-[#E5E7EB]">
              {['All', 'Business', 'Technical', 'Tutorial', 'Deployment', 'FAQ', 'FinTech Solutions'].map((category) => (
                <button
                  key={category}
                  className={`text-[14px] font-semibold py-2 px-2 transition-all  ${
                    activeButton === category ? 'border-b-2 border-black text-black' : 'text-[#6b7280]'
                  }`}
                  onClick={() => handleButtonClick(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            <BlogSearch />
          </div>

          <div className="grid grid-cols-1 gap-4">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="pb-8 mb-3 border-b border-gray-200 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4"
                >
                  <div className="lg:w-2/3">
                    <h3 className="text-lg font-bold text-color__heading">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600">{post.description}</p>
                    <div className="flex items-center gap-4 text-sm mt-10 text-gray-500">
                      <span>{post.views}</span>

                      <span className="bg-[#f7f7f7] px-3 py-[2px] rounded-[8px]">
                        {post.category}
                      </span>

                      <span className="ml-auto">{post.date}</span>
                    </div>
                  </div>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="lg:w-1/3 w-full h-36 object-cover rounded"
                  />
                </div>
              ))
            ) : (
              <div className="text-center text-gray-400 py-10">
                No blog found.
              </div>
            )}
          </div>

        </div>
        <Right />
      </div>
      <div 
          id="services" 
          className="relative px-12  mx-40 py-20 rounded-[30px] z-10 text-center bg-cover bg-center bg-backgroundimg"
        >
          <h1 className="text-white lg:w-[900px] h-[140px] font-semibold text-[65px] mx-11 mb-6 mx-auto">
            Turn Your FinTech App <br /> Idea Into Reality
          </h1>

          {/* Second Background Image (Top-Left Corner) */}
          <div className="absolute top-0 left-0 z-[-1]">
            <img
              alt="call-to-action"
              loading="lazy"
              width="1248"
              height="398"
              decoding="async"
              className="object-cover"
              src="https://appdevs.net/_next/static/media/call-to-action-bg.c8db122f.webp"
            />
          </div>

          {/* Third Background Image (Top-Right Corner) */}
          <div className="absolute top-0 right-0 z-[-1]">
            <img
              alt="call-to-action-element"
              loading="lazy"
              width="417"
              height="415"
              decoding="async"
              className="object-cover"
              src="https://appdevs.net/_next/static/media/call-to-action-element.251891da.webp"
            />
          </div>

          {/* Contact Us Button */}
          <div className="flex justify-center items-center pt-14">
            <a className="primary__btn" href="/contact">
              <span className="py-3 inline-block border-box text-white bg-[#2974E7] rounded-md px-3 font-semibold">
                Contact Us
              </span>
            </a>
          </div>
        </div>
        </div>
    </section>
  );
};

export default Blog;

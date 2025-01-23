import React, { useState } from 'react';
import BlogSearch from '../BlogPage/BlogSearch';
import Right from './Right';
import { blogPosts } from '../Js/blogPosts';

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
    <section className="relative">
      {/* Background Images */}
      <img
        src="https://appdevs.net/_next/static/media/solutionPageBgRight.e134874f.webp"
        alt="Top Right Background"
        className="absolute right-0 w-[150px] lg:w-[500px]"
      />

      <div className="flex flex-col items-center">
        <div className="text-center max-w-2xl p-8 mt-24">
          <span className="text-[#115E59] bg-[#CCFBF1] rounded-full text-[10px] px-3 py-1 font-semibold mb-6">
            Our Blog
          </span>
          <h1 className="text-4xl font-bold text-[50px] my-4">
            Explore our insights and case studies
          </h1>
          <p className="text-gray-700 text-[15px] mb-6">
            Unlock the full potential of your platform with our step-by-step
            guides and expert advice. Learn how to manage admin roles,
            customize branding, configure fees, set up push notifications, live
            chat, and more.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 lg:col-span-9 lg:border-r border-[#E5E7EB] lg:pr-4">
          {/* Post Filter Buttons */}
          <div className="lg:flex items-center justify-center mb-10 space-x-4">
            <div className="flex flex-wrap justify-center gap-4 border-b border-[#E5E7EB]">
              {['All', 'Business', 'Technical', 'Tutorial', 'Deployment', 'FAQ', 'FinTech Solutions'].map((category) => (
                <button
                  key={category}
                  className={`text-[14px] font-semibold py-2 px-2 transition-all ${
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

          {/* Display Filtered Posts */}
          <div className="grid grid-cols-1 gap-4">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="p-4 border-b border-gray-200 flex flex-col lg:flex-row lg:items-start gap-4"
              >
              
                {/* Post Content */}
                <div>
                  <h3 className="text-lg font-bold text-color__heading">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600">{post.description}</p>
                  <div className="flex items-center justify-between mt-2 text-sm text-gray-500">
                    <span>{post.category}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full w-40 h-36 object-cover rounded justify-end"
                />
              </div>
            ))}
          </div>
        </div>
        <Right />
      </div>
    </section>
  );
};

export default Blog;

import React from 'react';
import businessPosts from '../Js/Blog';
import Blogg from './Blogg';

const Blog = () => {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="text-center max-w-2xl p-8 mt-24">
        <span className="text-lg text-green-800 bg-green-200 rounded-lg text-[10px] px-3 py-1">
          Our Blog
        </span>
        <h1 className="text-4xl font-bold my-4">Explore our insights and case studies</h1>
        <p className="text-gray-700 text-[15px] mb-6">
          Unlock the full potential of your platform with our step-by-step guides and expert advice. Learn how to manage admin roles, customize branding, configure fees, set up push notifications, live chat, and more.
        </p>
      </div>
      <div className="flex w-full max-w-5xl px-8 justify-between items-center">
        <div className="flex flex-wrap border-b border-[#E5E7EB] gap-2">
          <button className="text-[14px] font-semibold py-2 px-2 text-[#6B7280] transition-all hover:text-black">Business</button>
          <button className="text-[14px] font-semibold py-2 px-2 text-[#6B7280] transition-all hover:text-black">Technical</button>
          <button className="text-[14px] font-semibold py-2 px-2 text-[#6B7280] transition-all hover:text-black">Tutorial</button>
          <button className="text-[14px] font-semibold py-2 px-2 text-[#6B7280] transition-all hover:text-black">Deployment</button>
          <button className="text-[14px] font-semibold py-2 px-2 text-[#6B7280] transition-all hover:text-black">FAQ</button>
          <button className="text-[14px] font-semibold py-2 px-2 text-[#6B7280] transition-all hover:text-black">FinTech Solutions</button>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search Blog"
            className="border border-gray-300 px-4 py-2 rounded-md w-full lg:w-50 text-[12px] h-[40px] pl-10 pr-5 font-normal shadow-lg"
          />
        </div>
      </div>
      <Blogg posts={businessPosts} />
    </div>
  );
}

export default Blog;

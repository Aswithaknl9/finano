import React, { useState } from "react";
import BlogSearch from "../BlogPage/BlogSearch";
import Right from "./Right";
import { blogPosts } from "../Js/blogPosts";
import productPageLeftBg from "../assets/productPageLeftBg.webp";
import solutionPageBgRight from "../assets/solutionPageBgRight.webp";

const Blog = () => {
  const [activeButton, setActiveButton] = useState("All");

  // Filter Blog Posts
  const filteredPosts =
    activeButton === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeButton);

  return (
    <section className="relative py-[180px]">
      {/* Background Images */}
      <img
        alt="Background Image"
        className="absolute top-0 left-0 z-10 hidden lg:block"
        src={productPageLeftBg}
      />
      <img
        alt="Background Image"
        className="absolute top-0 right-0 z-10 hidden lg:block"
        src={solutionPageBgRight}
      />

      {/* Blog Page Content */}
      <div className="xl:max-w-[1280px] container mx-auto px-4 relative z-20">
        {/* Section Header */}
        <div className="section_header mb-14 text-center">
          <span className="text-[12px] font-semibold text-[#115E59] bg-[#CCFBF1] rounded-full py-1 px-3 mb-6 inline-block">
            Our Blog
          </span>
          <h1 className="md:text-[38px] text-[30px] lg:text-[48px] font-semibold leading-tight mb-3">
            Explore our insights and case studies
          </h1>
          <p className="text-[14px] text-[#6b7280] max-w-[750px] mx-auto">
            Unlock the full potential of your platform with expert advice. Learn how
            to manage admin roles, customize branding, configure fees, and more.
          </p>
        </div>

        {/* Blog Layout */}
        <div className="grid grid-cols-12 gap-5 pb-8">
          {/* Blog Posts Section */}
          <div className="col-span-12 lg:col-span-9 lg:border-r border-[#E5E7EB] lg:pr-4">
            {/* Category Filter & Search */}
            <div className="lg:flex items-center justify-center mb-10 space-x-4">
              <div className="flex flex-wrap justify-center gap-4 border-b border-[#E5E7EB]">
                {[
                  "All",
                  "Business",
                  "Technical",
                  "Tutorial",
                  "Deployment",
                  "FAQ",
                  "FinTech Solutions",
                ].map((category) => (
                  <button
                    key={category}
                    className={`text-[14px] font-semibold py-2 px-2 transition-all ${
                      activeButton === category
                        ? "border-b-2 border-black text-black"
                        : "text-[#6b7280] hover:text-black"
                    }`}
                    onClick={() => setActiveButton(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <BlogSearch />
            </div>

            {/* Blog Posts Listing */}
            <div className="grid grid-cols-1 gap-4">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <div
                    key={post.id}
                    className="pb-8 mb-3 border-b border-gray-200 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4"
                  >
                    {/* Blog Post Text */}
                    <div className="lg:w-2/3">
                      <h3 className="text-lg font-bold text-[#000000] transition-all hover:text-[#2974e7]">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-600">{post.description}</p>
                      <div className="flex items-center gap-4 text-sm mt-4 text-gray-500">
                        <span>{post.views} views</span>
                        <span className="bg-[#f7f7f7] px-3 py-[2px] rounded-[8px]">
                          {post.category}
                        </span>
                        <span className="ml-auto">{post.date}</span>
                      </div>
                    </div>

                    {/* Blog Thumbnail */}
                    <img
                      src={post.image}
                      alt={post.title}
                      className="lg:w-1/3 w-full h-36 object-cover rounded-md"
                    />
                  </div>
                ))
              ) : (
                <div className="text-center text-gray-400 py-10">No blog found.</div>
              )}
            </div>
          </div>

          {/* Right Sidebar */}
          <Right />
        </div>
      </div>
    </section>
  );
};

export default Blog;

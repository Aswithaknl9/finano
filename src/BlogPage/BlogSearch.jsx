import React from 'react';

const BlogSearch = () => {
  return (
    <div className="relative mt-4 lg:mt-0">
      <input
        type="search"
        placeholder="Search Blog"
        className="w-full h-10 pl-10 pr-4 rounded-lg border border-gray-300 text-gray-800 text-sm placeholder-gray-500 focus:outline-none  focus:to-blue-700 shadow-sm"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 16 16"
        stroke="currentColor"
        className="w-4 h-4 absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"
      >
        <path
          d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.0005 14L11.1338 11.1333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default BlogSearch;

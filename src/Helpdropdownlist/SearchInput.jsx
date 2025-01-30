import React, { useState } from "react";

const SearchInput = ({ placeholder = "Search Documentation..." }) => {
  const [query, setQuery] = useState("");

  return (
    <div className="flex justify-center items-center w-full px-4"> {/* Centering & Padding for Mobile */}
      <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"> 
        {/* Adjust width dynamically on different screen sizes */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="h-12 w-full py-2 ps-10 pe-5 rounded-lg border border-gray-300 text-black text-sm shadow-sm placeholder-gray-500 focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 16 16"
          stroke="currentColor"
          className="w-4 h-4 absolute top-1/2 transform -translate-y-1/2 left-4 text-gray-500"
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
    </div>
  );
};

export default SearchInput;

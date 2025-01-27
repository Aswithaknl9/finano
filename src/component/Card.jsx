import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ imgSrc, imgAlt, title, description, link }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-1 w-full max-w-[350px] h-full flex flex-col ">
      <div className="bg-gray-200 rounded-xl flex justify-center items-center py-4 ">
      <img
          alt={imgAlt}
          src={imgSrc}
          loading="lazy"
          width={148}
          height={130}
          className="object-cover rounded" 
        />
      </div>
      <div className="py-6 ps-5 pe-3 flex flex-col flex-grow">
        <h3 className="text-base font-semibold md:text-heading__five mb-3">{title}</h3>
        <p className="text-[#6b7280]  text-sm leading-5 pb-4">{description}</p>
        <Link
          to={link}
          className="flex items-center text-blue-600 hover:text-blue-500 transition text-[15px] font-bold leading-none"
        >
          Learn More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-3 ms-2 relative top-[1px]"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Card;

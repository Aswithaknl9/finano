import React from 'react';

const Card = ({ imgSrc, imgAlt, title, description, link }) => {
  return (
    <div className="bg-white shadow-lg rounded-[20px] p-4 w-full max-w-[350px] h-full">
      <div className="bg-gray-200 rounded-2xl flex justify-center items-center py-6">
        <img 
          alt={imgAlt} 
          src={imgSrc} 
          className="object-cover w-full h-[130px] rounded-xl" 
        />
      </div>
      <div className="py-6 px-3">
        <h3 className="text-lg font-semibold mb-3">{title}</h3>
        <p className="text-sm leading-5 pb-4">{description}</p>
        <a 
          href={`/${link}`} 
          className="flex items-center text-blue-500 hover:text-blue-700 transition text-[15px] font-bold"
        >
          Learn More
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-3 text-blue-500 ml-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Card;

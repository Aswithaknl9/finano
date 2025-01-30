import React from 'react';


const TechnologyItem = ({ imgSrc, name }) => {
  return (
    <div className="inline-flex items-center bg-white shadow-sm h-10 rounded-lg xl:px-5 px-5 py-3">
      <img src={imgSrc} alt={name} className="w-auto" />
      <span className='ml-3'>{name}</span>
    </div>
  );
};

export default TechnologyItem;

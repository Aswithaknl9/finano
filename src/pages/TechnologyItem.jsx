import React from 'react';


const TechnologyItem = ({ imgSrc, name }) => {
  return (
    <div className="inline-flex items-center bg-white shadow-sm h-9 rounded-md xl:px-5 px-3">
      <img src={imgSrc} alt={name} className="w-auto  mr-2" />
      <span>{name}</span>
    </div>
  );
};

export default TechnologyItem;

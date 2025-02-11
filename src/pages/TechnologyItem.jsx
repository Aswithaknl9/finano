import React from 'react';


const TechnologyItem = ({ imgSrc, name }) => {
  return (
    <div class="inline-flex items-center bg-white shadow-sm rounded-[10px] xl:py-3 py-2 xl:px-5 px-3">
      <div class="bg-[#f3f4f6] xl:w-8 w-7 xl:h-8 h-7 rounded-full flex items-center justify-center">
        <img src={imgSrc} alt={name} className="xl:h-auto h-4 w-auto" />
      </div>
      <span className='xl:text-[18px] text-black font-medium xl:ms-3 ms-2'>{name}</span>
    </div>
  );
};

export default TechnologyItem;

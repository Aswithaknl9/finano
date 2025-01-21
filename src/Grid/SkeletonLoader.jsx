import React from 'react';

const SkeletonLoader = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {[...Array(4)].map((_, index) => (
        <div key={index} className="bg-gray-200 p-4 rounded-lg shadow-lg animate-pulse">
          <div className="h-6 bg-gray-300 mb-4 rounded"></div>
          <div className="h-4 bg-gray-300 mb-2 rounded"></div>
          <div className="h-4 bg-gray-300 mb-2 rounded"></div>
          <div className="h-4 bg-gray-300 mb-2 rounded"></div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;

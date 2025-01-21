import React from 'react';
import { products } from '../Js/products';
import Button from './Button';

const GridTable = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Total {products.length} Products</h1>
      <div className="flex flex-wrap gap-6">
        {products.map((product, index) => (
          <div key={index} className="bg-white p-4 w-[300px] rounded-lg shadow-lg flex flex-col">
            <img 
              src={product.image} 
              className="w-full h-50 object-cover rounded-lg mb-4" 
              alt={product.name}
            />
            <p className="text-[#107231] bg-[#E4FFEF] text-[12px] rounded-[10px] px-2 py-[2px] text-start ">{product.category}</p>
            <h3 className="text-xl text-[16px] font-semibold text-start mt-2">{product.name}</h3>
            <p className="text-[#2974E7] text-[24px] font-bold text-start mt-2">{product.price}</p>
            <div className="flex items-center justify-between mt-4 text-start border-t border-gray-300 pt-4">
              <p className="text-gray-500 text-start text-[14px]">{product.sales}</p>
              <Button />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridTable;

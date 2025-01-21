import React from 'react';
import { products } from '../Js/products';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const GridTable = () => {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold text-left">Total {products.length} Products</h1>
        <div className="flex items-center relative">
          <input type="text" placeholder="example: QRPay" className="p-2 border rounded-lg w-64 pl-10"/>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" stroke="currentColor" className="w-4 h-auto text-secondary__color absolute top-1/2 translate-y-[-50%] left-4">
            <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.0005 14L11.1338 11.1333" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <div className="flex flex-wrap gap-6">
        {products.map((product, index) => (
          <div key={index} className="bg-white p-4 w-[300px] rounded-lg shadow-lg flex flex-col">
            <img 
              src={product.image} 
              className="w-full h-50 object-cover rounded-lg mb-4" 
              alt={product.name}
            />
            <p className="text-[#107231] bg-[#E4FFEF] font-semibold w-32 text-[12px] rounded-[10px] px-2 py-[2px] text-center">{product.category}</p>
            <h3 className="text-xl text-[16px] font-semibold text-start mt-2">{product.name}</h3>
            <p className="text-[#2974E7] text-[24px] font-bold text-start mt-2">{product.price}</p>
            <div className="flex items-center justify-between mt-4 text-start border-t border-gray-300 pt-4">
              <p className="text-gray-500 text-start text-[14px]">{product.sales}</p>
              {/* Shopping cart icon */}
              <FontAwesomeIcon icon={faCartShopping} className="text-[#7c3aed] w-5 h-5 ml-2" />
              <Button />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridTable;

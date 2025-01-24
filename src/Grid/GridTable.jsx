import React from 'react';
import { products } from '../Js/products'; 
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const GridTable = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white p-1 rounded-2xl shadow-lg flex flex-col justify-between"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-auto h-45 object-cover rounded-t-2xl mb-4"
            />
            <div className='p-5'>
              <p className="text-[#107231] bg-[#E4FFEF] font-small w-32 text-[10px] rounded-[10px] px-2 py-[2px] shadow-sm text-center">
                {product.category}
              </p>
              <h3 className="text-[16px] font-semibold text-start mt-2">{product.name}</h3>
              <p className="text-[#2974E7] text-[24px] font-bold text-start mt-2">
                {product.price}
              </p>
            </div>
            <div className="flex items-center justify-between text-start border-t border-gray-300 pt-3 p-3">
              <p className="text-gray-500 ml-3 text-start text-[14px]">{product.sales}</p>
              <a href='https://codecanyon.net/checkout/107256837/create_account'><FontAwesomeIcon
                icon={faCartShopping}
                className="text-[#7c3aed] w-5 h-5 ml-20"
              /></a>
              <Button />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridTable;

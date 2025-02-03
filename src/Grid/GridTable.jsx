import React from 'react';
import { products } from '../Js/products'; 
import Button from './Button'; // You can still keep Button or replace with cart button if needed

const GridTable = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
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
            <div className="p-5">
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

              {/* Cart Button */}
              <a
                className="cart_btn border p-2 justify-end  rounded-lg border-purple-600"
                href={product.cartLink}  // Make sure you add cartLink in the products data
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                >
                  <path
                    d="M4.66536 12.8334C4.98753 12.8334 5.2487 12.5722 5.2487 12.25C5.2487 11.9279 4.98753 11.6667 4.66536 11.6667C4.3432 11.6667 4.08203 11.9279 4.08203 12.25C4.08203 12.5722 4.3432 12.8334 4.66536 12.8334Z"
                    stroke="#7c3aed"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M11.0833 12.8334C11.4055 12.8334 11.6667 12.5722 11.6667 12.25C11.6667 11.9279 11.4055 11.6667 11.0833 11.6667C10.7612 11.6667 10.5 11.9279 10.5 12.25C10.5 12.5722 10.7612 12.8334 11.0833 12.8334Z"
                    stroke="#7c3aed"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M1.19531 1.19586H2.36198L3.91365 8.44086C3.97057 8.7062 4.1182 8.94339 4.33114 9.11161C4.54408 9.27984 4.80901 9.36857 5.08031 9.36253H10.7853C11.0508 9.3621 11.3083 9.27111 11.5151 9.1046C11.7219 8.93809 11.8657 8.706 11.9228 8.4467L12.8853 4.11253H2.98615"
                    stroke="#7c3aed"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </a>

              {/* Add to Cart Button */}
              <Button />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridTable;

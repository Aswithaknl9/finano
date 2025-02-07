import React from 'react';
import { products } from '../Js/products'; 

const GridTable = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 p-4">
      {products.map((product, index) => (
        <div key={index} className="product_item bg-white shadow-lg rounded-[20px] overflow-hidden flex flex-col">
          {/* Product Image */}
          <div className="w-full rounded-t-2xl overflow-hidden p-1">
            <img
              alt={product.name}
              loading="lazy"
              width="200"
              height="150"
              decoding="async"
              className="object-cover rounded-t-2xl w-full"
              src={product.image}
              style={{ color: "transparent" }}
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-between">
            <div className="lg:p-6 md:p-4 p-3">
              {/* Category Tag */}
              <div className="space-x-2 md:mb-4 mb-3">
                <span className="md:text-[12px] text-[10px] leading-none font-medium md:py-[6px] py-1 md:px-3 px-2 rounded-full bg-[#E4FFEF] text-[#107231]">
                  {product.category}
                </span>
              </div>

              {/* Product Title */}
              <h5 className="mb-4 leading-[26px]">
                <a href="/" className="text-black text-[16px] md:text-[18px] lg:text-[18px]  hover:text-[#7c3aed] font-semibold">
                  {product.name}
                </a>
              </h5>

              {/* Price */}
              <div className="flex items-center">
                <span className="text-[24px] font-semibold text-blue-600">{product.price}</span>
                <span className="text-[12px]  line-through ms-3"></span>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t-[1px] border-solid border-primary_border_color flex items-center justify-between p-3 sm:ps-6">
              <span className="sm:text-sm text-[#6b7280] text-[11px]">{product.sales}</span>
              <div className="flex items-center space-x-3">
                {/* Cart Button */}
                <a
                  className="cart_btn flex items-center justify-center text-[#7c3aed] border border-[#7c3aed]  py-2 px-2 rounded-md"
                  href="https://codecanyon.net/checkout/from_item/49356964?license=regular&size=source&ref=pds"
                  target="_blank"
                  rel="noopener noreferrer"
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
                    />
                    <path
                      d="M11.0833 12.8334C11.4055 12.8334 11.6667 12.5722 11.6667 12.25C11.6667 11.9279 11.4055 11.6667 11.0833 11.6667C10.7612 11.6667 10.5 11.9279 10.5 12.25C10.5 12.5722 10.7612 12.8334 11.0833 12.8334Z"
                      stroke="#7c3aed"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.19531 1.19586H2.36198L3.91365 8.44086C3.97057 8.7062 4.1182 8.94339 4.33114 9.11161C4.54408 9.27984 4.80901 9.36857 5.08031 9.36253H10.7853C11.0508 9.3621 11.3083 9.27111 11.5151 9.1046C11.7219 8.93809 11.8657 8.706 11.9228 8.4467L12.8853 4.11253H2.98615"
                      stroke="#7c3aed"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>

                

                {/* Live Preview Button */}
                <a
                  target="_blank"
                  className="preview_btn flex items-center bg-blue-100 text-blue-600 font-semibold text-[15px] px-5 py-2 rounded-lg hover:bg-blue-600 hover:text-white"
                  href={product.previewLink}
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="icon w-5 h-5 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    ></path>
                  </svg>
                  Live Preview
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridTable;

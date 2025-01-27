import React from "react";
import { product1 } from "../Js/Product1";

const Installation2 = () => {
  return (
    <div className="xl:max-w-[1280px] container mx-auto px-4 pt-20">
      <div className="border border-gray-300 shadow-lg rounded-[20px] overflow-hidden mx-16 p-6 md:p-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {product1.map((product, index) => (
            <div
              key={index}
              className="bg-[#f7f7f7] rounded-[15px] flex flex-col justify-between p-6 shadow-lg"
            >
              {/* Product Header */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 border border-gray-300 rounded-full flex justify-center items-center overflow-hidden mr-4">
                  <img
                    alt={product.title}
                    loading="lazy"
                    width="25"
                    height="25"
                    src={product.image}
                    className="object-cover"
                    style={{ color: "transparent" }}
                  />
                </div>
                <h5 className="font-medium text-[17px]">
                  <span className="font-bold text-[18px]">{product.title}</span>
                  <span> Installation Pricing</span>
                </h5>
              </div>

              {/* Features List */}
              <ul className="pricing-item-list space-y-3 mb-4">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center font-medium">
                    <div className="w-5 h-5 flex justify-center items-center rounded-full border-2 border-[#2974e7] mr-2">
                      <svg
                        width="16"
                        height="12"
                        viewBox="0 0 16 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-2.5 stroke-[#2974e7]"
                      >
                        <path
                          d="M1 7L5 11L15 1"
                          stroke="#2974e7"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="text-[15px] text-[#6b7280]">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Pricing and Link */}
              <div className="text-center mt-6">
                <a
                  className="text-[#2974e7] font-semibold text-sm w-full justify-center bg-white border border-[#2974e7] py-2 px-4 rounded hover:bg-[#2974e7] hover:text-white transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={product.link}
                >
                  {product.pricing}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Installation2;

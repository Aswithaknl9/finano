import React from 'react';
import Ee from './ee';



const Ection3 = ({ title, subtitle, products }) => {
  return (
    <section className=" bg-[#f3f4f6] pt-[130px]">
      <div className="xl:max-w-[1280px] container mx-auto  h-auto px-4">
        <div className="section_header mb-14">
          <div className="max-w-[840px] mx-auto text-center md:text-[38px] sm:text-[28px] text-[24px]  font-semibold lg:text-[48px]">
            <h2>
              {title} <span className="text-blue-600 inline">Envato Elite Author.</span>
              Discover Our Top
              {subtitle && (
                <>
                  <span className="text-purple-600 inline">{subtitle} </span> 
                </>
              )}
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4">
          {products.map((product, index) => (
            <div key={index} className="product_item bg-white shadow-lg rounded-[20px] relative overflow-hidden">
              <div className="w-full rounded-t-2xl overflow-hidden">
                <img
                  alt={product.title}
                  loading="lazy"
                  width="200"
                  height="150"
                  decoding="async"
                  className="object-cover rounded-t-2xl w-full"
                  src={product.imageUrl}
                  style={{ color: 'transparent' }}
                />
              </div>
              <div className="lg:p-6 md:p-4 p-3">
                <div className="flex items-center justify-between space-x-2 md:mb-4 mb-3">
                  <span className="md:text-[12px] text-[10px] leading-none font-medium md:py-[6px] py-1 md:px-3 px-2 rounded-full bg-[#E4FFEF] text-[#107231]">
                    {product.category}
                  </span>
                  {product.isFeatured && (
                    <div className="relative right-[-30px] py-[2px] px-6 bg-[#1a7c97] badge-shape text-white shadow-lg flex justify-center items-center text-[12px]">
                      Featured
                    </div>
                  )}
                </div>
                <a
                  className="md:text-heading__five xl:font-semibold md:font-semibold font-semibold text-[16px] md:text-[18px] lg:text-[18px] transition-all hover:text-color__paragraph mb-4"
                  href={product.previewLink}
                >
                  {product.title}
                </a>
                <div className="flex items-center">
                  <span className="lg:text-[24px] text-[16px] font-semibold text-blue-600 ">
                    {product.price}
                  </span>
                  
                </div>
              </div>
              <div className="border-t-[1px] border-solid border-primary_border_color flex items-center justify-between p-3">
                <span className="sm:text-small__font text-[#6b7280] text-[11px] sm:ms-5">{product.sales}</span>
                <div className="flex items-center space-x-4"> {/* Adjusted to make items inline with space */}
                  {/* Cart Icon */}
                  <a
                    className="cart_btn border p-3 rounded-lg  border-purple-600"
                    href={product.cartLink}
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

                  {/* Eye Icon and Live Preview */}
                  <a className="preview_btn flex items-center bg-blue-100 text-blue-600 font-semibold text-[15px] px-5 py-2 rounded-lg hover:bg-blue-600 hover:text-white" href={product.previewLink}>
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
          ))}
        </div>
      </div>
      <div className="text-center pt-10 pb-4">
  <a className="flex items-center justify-center" href="/products">
    <span className="flex items-center gap-3 text-white bg-blue-600 py-3 px-5 rounded-md">
      Show More Products
      <span className="border-l border-white h-5 pl-3 ml-2 flex items-center">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth="1.5" 
          stroke="currentColor" 
          className="w-5 h-5 text-white"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path>
        </svg>
      </span>
    </span>
  </a>
</div>
<Ee />



    </section>
  );
};

export default Ection3;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Productcf } from '../Js/Productcf';
import { Link } from 'react-router-dom';

const ProductSection6 = () => {
  return (
    <section className="py-[130px] bg-[#f3f4f6]" id="product">
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        <div className="section_header lg:mb-14 mb-8">
          <div className="max-w-[775px] mx-auto text-center">
            <h2 className="mb-4 text-black text-4xl font-semibold">
              Our Ready-Made Solutions for 
              <span className="text-[#7c3aed] inline">Crowdfunding Solutions</span>
            </h2>
            <p className="lg:w-[80%] mx-auto text-[#6b7280]">
              For businesses and entrepreneurs looking to launch a remittance solutions platform quickly and efficiently
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4">
          {Productcf.map((product, index) => (
            <div key={index} className="product_item bg-white shadow-lg rounded-[20px] overflow-hidden">
              <div className="w-full rounded-t-2xl">
                <img src={product.imgSrc} alt={product.title} className="object-cover rounded-t-2xl w-full" />
              </div>
              <div className="lg:p-6 md:p-4 p-3">
                <div className="space-x-2 md:mb-4 mb-3">
                  <span
                    className="md:text-[12px] text-[10px] leading-none font-medium md:py-[6px] py-1 md:px-3 px-2 rounded-full"
                    style={{ color: '#107231', backgroundColor: '#E4FFEF' }}
                  >
                    {product.label}
                  </span>
                </div>
                <a
                  href={product.productLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:text-heading__five md:font-bold font-semibold text-color__heading transition-all hover:text-color__paragraph mb-4"
                >
                  {product.title}
                </a>
                <div className="flex items-center justify-between">
                  <div className="flex items-center mt-4">
                    <span className="lg:text-heading__four text-heading__six font-semibold text-blue-600">{product.price}</span>
                  </div>
                  <div className="flex items-center mt-4 space-x-2">
                    <a
                      href={product.cartLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cart_btn flex items-center text-[#7c3aed] px-3 py-1 rounded"
                    >
                      <FontAwesomeIcon icon={faCartShopping} className="w-5 h-5 mr-2" />
                    </a>
                    <a
                      href={product.livePreviewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 text-white px-3 py-1 rounded"
                    >
                      Live Preview
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-12">
          <Link to="/products" className="bg-blue-500 text-white py-3 px-6 rounded-lg text-lg font-semibold flex items-center">
            Explore Our Products 
            <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductSection6;

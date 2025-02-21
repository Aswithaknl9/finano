import React from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa"; // Import Plus Icon

const data = [
  {
    imgSrc: "https://demo.casethemes.net/finano/wp-content/uploads/2018/12/blog5-600x430.jpg",
    name: "Riva Collins",
    date: "May 18, 2018",
    title: "Loft Office With Vintage Decor For Creative",
    path: "/",
  },
  {
    imgSrc: "https://demo.casethemes.net/finano/wp-content/uploads/2018/12/blog6-600x430.jpg",
    name: "Riva Collins",
    date: "April 18, 2018",
    title: "We are hiring many developer to develop",
    path: "/",
  },
  {
    imgSrc: "https://demo.casethemes.net/finano/wp-content/uploads/2018/12/blog1-600x430.jpg",
    name: "Riva Collins",
    date: "October 18, 2018",
    title: "Main reasons to explain fast business builder",
    path: "/",
  },
  {
    imgSrc: "https://demo.casethemes.net/finano/wp-content/uploads/2018/12/blog2-600x430.jpg",
    name: "Riva Collins",
    date: "May 18, 2018",
    title: "We are hiring many developer to develop",
    path: "/",
  },
  {
    imgSrc: "https://demo.casethemes.net/finano/wp-content/uploads/2018/12/blog3-600x430.jpg",
    name: "Riva Collins",
    date: "May 18, 2018",
    title: "We are hiring many developer to develop",
    path: "/",
  },
  {
    imgSrc: "https://demo.casethemes.net/finano/wp-content/uploads/2018/12/blog4-600x430.jpg",
    name: "Riva Collins",
    date: "May 18, 2018",
    title: "We are hiring many developer to develop",
    path: "/",
  },
];

const Card1 = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="grid md:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden group relative"
          >
            {/* Image Container with Hover Effects */}
            <div className="relative overflow-hidden">
              <img
                src={item.imgSrc}
                alt="card img"
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay with Fade Effect */}
              <div className="absolute inset-0 bg-[#ec0203] bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Plus Icon with Fade Down Effect */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <FaPlus className="text-black  text-6xl bg-white bg-opacity-100  p-6 rounded-full transform translate-y-[-20px] group-hover:translate-y-0 transition-transform duration-500" />
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6">
              <div className="flex items-center pb-2">
                <p className="text-gray-600 pr-4 text-sm">{item.date}</p>
                <p className="text-gray-600 text-sm">{item.name}</p>
              </div>
              {/* Title Appears on Hover */}
              <h3 className="text-lg font-semibold text-gray-900 mb-4 transition-opacity duration-500 group-hover:text-red-500">
                {item.title}
              </h3>
              {/* View More Button */}
              <Link
                to={item.path}
                className="inline-block bg-black text-white px-6 py-3 text-sm rounded hover:bg-gradient-to-r from-[#ec0203] to-[#b0180e] hover:opacity-90 transition-all duration-300"
              >
                View More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card1;

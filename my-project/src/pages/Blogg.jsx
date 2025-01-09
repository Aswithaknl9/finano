import React from 'react';

const Blogg = ({ posts }) => {
  return (
    <div className="w-full max-w-5xl px-8 mt-8">
      {posts.map((post, index) => (
        <div key={index} className="flex mb-6 border-b border-[#E5E7EB] pb-6">
          <div className="ml-6 w-2/3">
            <a href={post.link} className="text-xl font-bold hover:text-blue-500">
              {post.title}
            </a>
            <p className="text-gray-700 mt-2">{post.description}</p>
            <div className="flex items-center justify-between mt-10">
              <div className="flex items-center gap-3">
                <span className="text-[14px] font-medium flex text-[#6B7280] gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                  {post.Number}
                </span>
                <span className="text-[14px] bg-[#f7f7f7] rounded-[8px] py-[2px] px-3">{post.category}</span>
              </div>
              <span className="text-[14px] font-medium text-[#6B7280] flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                </svg>
                {post.date}
              </span>
            </div>
          </div>
          <img
            src={post.image}
            alt={post.title}
            className="w-1/3 rounded-md object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default Blogg;

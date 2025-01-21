import React from 'react';

const Button = () => {
  return (
    <a
      target="_blank"
      className="flex items-center gap-2 px-4 py-2 bg-[#2974E71A] text-[#2974E7] font-bold text-[15px] rounded-lg hover:bg-blue-600  hover:text-white font-bold transition duration-300"
      href="https://qrpay.agency" 
      rel="noopener noreferrer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </svg>
      Live Preview
    </a>
  );
};

export default Button;

import React from 'react';

const Items = ({ link, title }) => {
  return (
    <ul className='space-y-3'>
      <h1 className='mb-1 font-semibold'>{title}</h1>
      {link.map((item) => (
        <li key={item.name}>
          <a
            className='text-gray-400 hover:text-blue-500 duration-300  text-sm cursor-pointer leading-6'
            href={item.link}
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Items;

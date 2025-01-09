import React from 'react';
import Items from './Items';
import { Company, Solutions, Services, Products } from '../Js/Menu';

const ItemsContainer = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16'>
      <Items link={Company} title="Company" />
      <Items link={Solutions} title="Solutions" />
      <Items link={Services} title="Services" />
      <Items link={Products} title="Products" />
    </div>
  );
};

export default ItemsContainer;

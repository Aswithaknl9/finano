import React from 'react'
import Card1 from './card1'

const Card = () => {
  return (
    <div className='container mx-auto'>
        <div className='grid grid-cols-2 gap-4'>
        <div className='px-[15px] border-l-4 border-[#ec0203] pl-4'>
            <span className='text-[#ec0203] text-sm uppercase'>Some of our blog</span>
            <h1 className='text-[46px] font-semibold'>Our latest news</h1>
        </div>
        <div className='px-[15px] text-[#666666] tezt-[16px]'>
            <p>The argument in favor of using filler text goes something like this: If you use real content in the design process, anytime you reach a review point you’ll end up reviewing and negotiating the content itself and not the design.</p>
        </div>
        </div>
       <Card1 />
    </div>
  )
}

export default Card
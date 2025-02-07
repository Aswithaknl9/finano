import React from 'react'
import callbg from '../assets/call-to-action-bg.webp'
import callelement from '../assets/call-to-action.webp'

const Find = () => {
  return (
    <section class="pb-[130px]">
  <div class="xl:max-w-[1280px] container mx-auto px-4">
    <div class="bg-backgroundimg relative rounded-[30px] overflow-hidden z-10 text-center md:py-20 py-12 md:px-12 px-5 mt-[-60px]">
      
      
      <div class="absolute top-0 left-0 z-[-1]">
        <img 
          alt="call-to-action background" 
          loading="lazy" 
          width="1248" 
          height="398" 
          decoding="async" 
          class="object-cover" 
          src={callbg}
        />
      </div>
      <div class="absolute top-0 right-0 z-[-1]">
        <img 
          alt="decorative element" 
          loading="lazy" 
          width="417" 
          height="415" 
          decoding="async" 
          class="object-cover" 
          src={callelement}
        />
      </div>

     
      <div>
        <h2 class="sm:leading-[85px] text-white text-[24px] sm:text-[28px] md:text-[48px] lg:text-[72px] font-semibold lg:w-[70%] mx-auto mb-6">
          Turn Your FinTech App Idea Into Reality
        </h2>
        <div class="flex justify-center items-center">
          <a class="text-white font-semibold bg-blue-600 px-5 py-2 rounded-md" href="/contact">
            <span>Contact Us</span>
          </a>
        </div>
      </div>

    </div>
  </div>
</section>

  )
}

export default Find
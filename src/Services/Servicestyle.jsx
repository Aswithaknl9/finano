import React from 'react'
import Sectioncard from './Sectioncard'
import FinanoConsulting from './Finance'
import Pricing from './Plans'

const Servicestyle = () => {
  return (
    <>
    <div
  id="pagetitle"
  className="relative bg-[url('https://demo.casethemes.net/finano/wp-content/themes/finano/assets/images/bg-page-title.jpg')] bg-cover bg-center bg-fixed py-24"
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  {/* Content */}
  <div className='pl-[15px]'>
  <div className="container pl-[15px] relative z-10 text-start text-white border-l-4 border-[#3140fc]">
  <h1 className="text-[60px] font-semibold ">
    Services <cite className="text-white text-[60px] font-playfair">Style 1</cite>
  </h1>
  <ul className="flex justify-start space-x-2 text-sm mt-[14px] text-white">
    <li>
      <a href="https://demo.casethemes.net/finano/">
        Home
      </a>
    </li>
    <li>/</li>
    <li>
      <span>Services 1</span>
    </li>
  </ul>
</div>
</div>

</div>
<Sectioncard />
<FinanoConsulting />
<Pricing />
</>

  )
}

export default Servicestyle
import React from 'react';

const ContactOptions = () => {
  return (
    <div className="grid grid-cols-12 mx-44">
      <div className="col-span-12">
        <div className="bg-white shadow-primary__shadow border border-primary_border_color p-5 lg:p-10 rounded-[20px] relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* WhatsApp BD */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div>
                <img 
                  alt="WhatsApp BD" 
                  loading="lazy" 
                  width="80" 
                  height="80" 
                  className="mx-auto" 
                  src="https://appdevs.net/_next/static/media/whatsapp.2995284f.webp" 
                  style={{ color: 'transparent' }} 
                />
              </div>
              <div className="pt-4">
                <h4 className="text-[20px] font-semibold mb-6">WhatsApp BD</h4>
                <div className="flex flex-col">
                  <button className="outline__btn flex items-center small border border-blue-600  rounded-md px-5 py-[10px] justify-center w-full">
                    <div className="icon mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="blue" className="w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z"></path>
                      </svg>
                    </div>
                    <span className='text-blue-600 '>Scan to the QR Code</span>
                  </button>
                  <span className="font-medium text-[#6b7280] my-2">OR</span>
                  <a target="_blank" className="flex justify-center items-center text-small   hover:text-white hover:underline   font-medium" href="https://wa.me/+8801927033582">
                    <span className='text-blue-600'>Directly open the App here</span>
                    <div className="icon ml-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="blue" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp UK */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div>
                <img 
                  alt="WhatsApp UK" 
                  loading="lazy" 
                  width="80" 
                  height="80" 
                  className="mx-auto" 
                  src="https://appdevs.net/_next/static/media/whatsapp.2995284f.webp" 
                  style={{ color: 'transparent' }} 
                />
              </div>
              <div className="pt-4">
                <h4 className="text-[20px] font-semibold mb-6">WhatsApp UK</h4>
                <div className="flex flex-col">
                  <button className="outline__btn flex items-center small border border-blue-600  rounded-md px-5 py-[10px] justify-center w-full">
                    <div className="icon mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="blue" className="w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z"></path>
                      </svg>
                    </div>
                    <span className='text-blue-600'>Scan to the QR Code</span>
                  </button>
                  <span className="font-medium text-[#6b7280] my-2">OR</span>
                  <a target="_blank" className="flex justify-center items-center text-small__font text-primary__color underline hover:text-primary__color hover:underline font-medium" href="https://wa.me/+447462246814">
                    <span className='text-blue-600'>Directly open the App here</span>
                    <div className="icon ml-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="blue" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Skype */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div>
                <img 
                  alt="Skype" 
                  loading="lazy" 
                  width="80" 
                  height="80" 
                  className="mx-auto" 
                  src="https://appdevs.net/_next/static/media/skype.b24d7016.webp" 
                  style={{ color: 'transparent' }} 
                />
              </div>
              <div className="pt-4">
                <h4 className="text-[20px] font-semibold mb-6">Skype</h4>
                <div className="flex flex-col">
                  <button className="outline__btn flex items-center small  border border-blue-600  rounded-md px-5 py-[10px] justify-center w-full">
                    <div className="icon mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="blue" className="w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z"></path>
                      </svg>
                    </div>
                    <span className='text-blue-600'>Scan to the QR Code</span>
                  </button>
                  <span className="font-medium text-small text-[#6b7280] my-2">OR</span>
                  <a target="_blank" className="flex justify-center items-center text-small__font text-primary__color underline hover:text-primary__color hover:underline font-medium" href="https://join.skype.com/invite/3tkFmjDCjbzi">
                    <span className='text-blue-600'>Directly open the App here</span>
                    <div className="icon ml-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="blue" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div>
                <img 
                  alt="Telegram" 
                  loading="lazy" 
                  width="80" 
                  height="80" 
                  className="mx-auto" 
                  src="https://appdevs.net/_next/static/media/telegram.8a56d1f4.webp" 
                  style={{ color: 'transparent' }} 
                />
              </div>
              <div className="pt-4">
                <h4 className="text-[20px] font-semibold mb-6">Telegram</h4>
                <div className="flex flex-col">
                  <button className="outline__btn flex items-center small border border-blue-600  rounded-md px-5 py-[10px] justify-center w-full">
                    <div className="icon mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="blue" className="w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z"></path>
                      </svg>
                    </div>
                    <span className='text-blue-600'>Scan to the QR Code</span>
                  </button>
                  <span className="font-medium text-small text-[#6b7280] my-2">OR</span>
                  <a target="_blank" className="flex justify-center items-center text-small__font text-primary__color underline hover:text-primary__color hover:underline font-medium" href="https://t.me/+8801927033582">
                    <span className='text-blue-600'>Directly open the App here</span>
                    <div className="icon ml-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="blue" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Appointment */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center  hover:shadow-lg transition-shadow">
              <div className="pt-4">
                <h4 className="text-[20px] font-semibold mb-6">Appointment</h4>
                <a href="/appointment" className="outline__btn flex items-center border border-blue-600 rounded-md small justify-center w-full">
                  <span className='text-blue-600'>Get Free Consultation</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ContactOptions;

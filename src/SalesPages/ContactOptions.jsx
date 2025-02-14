import React from 'react';
import appointment from '../assets/appointment.webp'
import Note from './Note';

const ContactOptions = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12">
        <div className="bg-white shadow-md border border-primary_border_color  p-5 lg:p-10 rounded-[20px] relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div><img alt="WhatsApp BD" className="mx-auto" src="https://appdevs.net/_next/static/media/whatsapp.2995284f.webp" width="80" height="80" loading="lazy" /></div>
              <div className="pt-4">
                <h4 className="text-[20px] font-semibold mb-6">WhatsApp BD</h4>
                <div className="flex flex-col">
                  <button className="outline__btn hover:bg-[#7c3aed] hover:text-white hover:border-transparent border border-[#2974e7] px-5 py-[10px] rounded-md flex items-center small justify-center w-full text-[#2974e7]">
                    <div className="icon mr-2 ">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2974e7" className="w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z"></path>
                      </svg>
                    </div>
                    <span className='font-semibold text-sm'>Scan to the QR Code</span>
                  </button>
                  <span className="font-medium text-small__font my-2">OR</span>
                  <a target="_blank" href="https://wa.me/+8801927033582" className="flex justify-center items-center text-sm text-[#2974e7] underline hover:text-white hover:underline font-medium">
                    <span>Directly open the App here</span>
                    <div className="icon ml-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path>
                      </svg>
                    </div>
                  </a>
                </div>

              </div>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div>
                <img alt="WhatsApp UK" className="mx-auto" src="https://appdevs.net/_next/static/media/whatsapp.2995284f.webp" width="80" height="80" loading="lazy" />
              </div>
              <div className="pt-4">
                <h4 className="text-[20px] font-semibold mb-6">WhatsApp UK</h4>
                <div className="flex flex-col">
                  <button className="outline__btn hover:bg-[#7c3aed] hover:text-white hover:border-transparent border border-[#2974e7] px-5 py-[10px] rounded-md flex items-center justify-center w-full text-[#2974e7]">
                    <div className="icon mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2974e7" className="w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z"></path>
                      </svg>
                    </div>
                    <span className='font-semibold text-sm'>Scan to the QR Code</span>
                  </button>
                  <span className="font-medium text-small__font my-2">OR</span>
                  <a target="_blank" href="https://wa.me/+447462246814" className="flex justify-center items-center text-sm text-[#2974e7] underline hover:text-white hover:underline font-medium">
                    <span>Directly open the App here</span>
                    <div className="icon ml-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div>
                <img alt="WhatsApp UK" className="mx-auto" src="https://appdevs.net/_next/static/media/skype.b24d7016.webp" width="80" height="80" loading="lazy" />
              </div>
              <div className="pt-4">
                <h4 className="text-[20px] font-semibold mb-6">Skype</h4>
                <div className="flex flex-col">
                  <button className="outline__btn hover:bg-[#7c3aed] hover:text-white hover:border-transparent border border-[#2974e7] px-5 py-[10px] rounded-md flex items-center justify-center w-full text-[#2974e7]">
                    <div className="icon mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2974e7" className="w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z"></path>
                      </svg>
                    </div>
                    <span className='font-semibold text-sm'>Scan to the QR Code</span>
                  </button>
                  <span className="font-medium text-small__font my-2">OR</span>
                  <a target="_blank" href="https://wa.me/+447462246814" className="flex justify-center items-center text-sm text-[#2974e7] underline hover:text-white hover:underline font-medium">
                    <span>Directly open the App here</span>
                    <div className="icon ml-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div>
                <img alt="WhatsApp UK" className="mx-auto" src="https://appdevs.net/_next/static/media/telegram.8a56d1f4.webp" width="80" height="80" loading="lazy" />
              </div>
              <div className="pt-4">
                <h4 className="text-[20px] font-semibold mb-6">Telegram</h4>
                <div className="flex flex-col">
                  <button className="outline__btn hover:bg-[#7c3aed] hover:text-white hover:border-transparent border border-[#2974e7] px-5 py-[10px] rounded-md flex items-center justify-center w-full text-[#2974e7]">
                    <div className="icon mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2974e7" className="w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z"></path>
                      </svg>
                    </div>
                    <span className='font-semibold text-sm'>Scan to the QR Code</span>
                  </button>
                  <span className="font-medium text-small__font my-2">OR</span>
                  <a target="_blank" href="https://wa.me/+447462246814" className="flex justify-center items-center text-sm text-[#2974e7] underline hover:text-white hover:underline font-medium">
                    <span>Directly open the App here</span>
                    <div className="icon ml-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div><img alt="WhatsApp UK" className="mx-auto" src={appointment} width="80" height="80" loading="lazy" /></div>
              <div className="pt-4">
                <h4 className="text-[20px] font-semibold mb-6">Appointment</h4>
                <div className="flex flex-col">
                  <button className="outline__btn border border-[#2974e7] px-5 py-[10px] rounded-md flex items-center small justify-center w-full">
                    <span className='text-[#2974e7] font-semibold text-sm'>Get Free Consultation</span>
                    <div className="icon ml-2 font-semibold">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2974e7" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path>
                      </svg>
                    </div>
                  </button>
                
                </div>
              </div>
            </div>
          </div>
          <Note />
        </div>
      </div>

      
    </div>
  );
};

export default ContactOptions;

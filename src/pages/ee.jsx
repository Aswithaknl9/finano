import React, { useState } from 'react';


const ee = () => {
  const [showAll, setShowAll] = useState(false); 

  const testimonials = [
    {
      rating: 5,
      message: "Good services and support!!! I recommend it",
      userName: "wildjersonbouquet999",
      country: "Haiti, Member since May 2023",
      userImage: "https://appdevs.net/_next/static/media/user-1.d9b08a77.png"
    },
    {
      rating: 5,
      message: "QR Code Full Solution by AppDevsX. Customer support is excellent, and the software itself is reliable. However, there's room for improvement in terms of features and wider adoption.",
      userName: "starlordphemmy",
      country: "China, Member since September 2019",
      userImage: "https://appdevs.net/_next/static/media/user-1.d9b08a77.png"
    },
    {
      rating: 5,
      message: "Best clean source code for payment project on the web, beside the clean and well documented source code, i highly recommend this team for freelance and customization, i've requested several changes and they were very professional and even supported me to install and fix any issue i was facing after finishing the project.",
      userName: "mmoghrabi1",
      country: "United Arab Emirates, Member since October 2021",
      userImage: "https://appdevs.net/_next/static/media/user-1.d9b08a77.png"
    },
    {
      rating: 4,
      message: "I recently purchased QR Pay and I'm extremely satisfied with its top-notch software quality, impressive customizability, and exceptional customer care. The app's sleek user interface and comprehensive documentation make it the perfect tool to kickstart my payment journey. Highly recommended!",
      userName: "hungerun",
      country: "USA, Member since February 2022",
      userImage: "https://appdevs.net/_next/static/media/user-3.3abb81b0.png"
    },
    {
      rating: 4,
      message: "They helped me to support to install with some technical questions. Many thanks to Support. I recommend using Support.",
      userName: "UGONNAUGWAH",
      country: "India, Member since March 2020",
      userImage: "https://appdevs.net/_next/static/media/user-2.203d43c8.jpg"
    }
  ];

  const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, 3);

  return (
    <section className="pt-[130px] pb-[180px]">
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        <div className="section_header mb-14">
          <div className="max-w-[700px] xl:text-[48px] lg:text-[38px] md:text-[28px] text-[24px] font-semibold mx-auto text-center">
            <h2>
              Trusted by <span className="text-blue-600">3500+ Clients</span> – See What People Are Saying About Us
            </h2>
          </div>
        </div>

        <div className="testimonial_item_wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedTestimonials.map((testimonial, index) => (
            <div key={index} className="testimonial_item bg-white sm:py-9 py-4 sm:px-7 px-4 sm:rounded-[40px] rounded-3xl transform transition-all duration-700 ease-in-out opacity-100">
              <div className="flex items-start justify-between mb-6">
                <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-6 fill-blue-600">
                  <path d="M0 0V24L11.9689 12V0H0Z"></path>
                  <path d="M19.9492 0V24L31.9181 12V0H19.9492Z"></path>
                </svg>

                <ul className="flex space-x-[1px]">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <li key={i}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#F59E0B]">
                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd"></path>
                      </svg>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="font-medium text-small__font leading-[25px] text-black mb-8">
                {testimonial.message}
              </p>
              <div className="flex items-center">
                <div className="rounded-full overflow-hidden">
                  <img alt="User" loading="lazy" width="43" height="43" decoding="async" className="object-cover" style={{ color: 'transparent' }} src={testimonial.userImage} />
                </div>
                <div className="ms-4">
                  <span className="text-primary__font block font-semibold text-blue-600">{testimonial.userName}</span>
                  <span className="text-[#6b7280] opacity-80">{testimonial.country}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Grid Visibility */}
        <div className="testimonial-more-btn-area relative z-10 col-span-12 text-center mt-10">
          <button
            type="button"
            className={`font-semibold py-2 px-3 rounded-lg border-[2px] transition-all shadow-lg border-solid
              ${showAll ? 'bg-gray-100 text-blue-600 hover:bg-blue-600 hover:text-white' : 'bg-white text-blue-600 hover:bg-purple-600 hover:text-white'}`}
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </div>
     
    </section>
  );
};

export default ee;

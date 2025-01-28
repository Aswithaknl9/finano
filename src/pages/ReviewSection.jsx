import React, { useState } from 'react';
import StarRating from './StarRating';

const reviews = [
  {
    message: 'Good services and support!!! I recommend it',
    name: 'wildjersonbouquet999',
    location: 'Haiti, Member since May 2023',
    imageUrl: 'https://appdevs.net/_next/static/media/user-1.d9b08a77.png',
  },
  {
    message: 'Application theme gud & customer sport also very good..thanks for help us',
    name: 'aadityasinghchawla0002',
    location: 'India, Member since March 2022',
    imageUrl: 'https://appdevs.net/_next/static/media/user-1.d9b08a77.png',
  },
  {
    message: 'They helped me to support to install with some technical questions. Many thanks to Support. I recommend using Support.',
    name: 'johanvalera',
    location: 'Venezuela, Bolivarian Republic of, Member since October 2022',
    imageUrl: 'https://appdevs.net/_next/static/media/user-1.d9b08a77.png',
  },
  {
    message:
      'I had an amazing experience with this company. The customer service was outstanding, and the product was exactly what I was looking for, with perfect coding standards. I just love these guys and can recommend them without the slightest reservations. Keep up the good work.',
    name: 'hungerun',
    location: 'Member since June 2012',
    imageUrl: 'https://appdevs.net/_next/static/media/user-3.3abb81b0.png',
  },
  {
    message:
      'I recently purchased QR Pay and Im extremely satisfied with its top-notch software quality, impressive customizability, and exceptional customer care. The apps sleek user interface and comprehensive documentation make it the perfect tool to kickstart my payment journey. Highly recommended!',
    name: 'UGONNAUGWAH',
    location: 'United Arab Emirates, Member since October 2021',
    imageUrl: 'https://appdevs.net/_next/static/media/user-2.203d43c8.jpg',
  },
];

const ReviewSection = () => {
  const [visibleReviews, setVisibleReviews] = useState(3); 

  const handleShowMore = () => {
    setVisibleReviews(reviews.length); 
  };

  const handleShowLess = () => {
    setVisibleReviews(3); 
  };

  return (
    <div className="mx-4 sm:mx-12 lg:mx-48">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.slice(0, visibleReviews).map((review, index) => (
          <div
            key={index}
            className="testimonial_item bg-white sm:py-9 py-4 sm:px-7 px-4 sm:rounded-[40px] rounded-3xl mb-4 flex flex-col justify-between h-full"
          >
            <div className="flex items-start justify-between mb-6">
              <svg
                width="32"
                height="24"
                viewBox="0 0 32 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-6 fill-blue-600"
              >
                <path d="M0 0V24L11.9689 12V0H0Z"></path>
                <path d="M19.9492 0V24L31.9181 12V0H19.9492Z"></path>
              </svg>
              <StarRating />
            </div>

            <p className="font-medium text-justify leading-[25px] text-[#1F2937] mb-8 flex-grow">
              {review.message}
            </p>

            <div className="flex items-center">
              <div className="rounded-full overflow-hidden">
                <img
                  alt="User"
                  loading="lazy"
                  width="43"
                  height="43"
                  decoding="async"
                  className="object-cover"
                  src={review.imageUrl}
                />
              </div>
              <div className="ms-4 text-start">
                <span className="block font-semibold text-blue-500">{review.name}</span>
                <span className="text-[#6b7280] opacity-80">{review.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        {visibleReviews < reviews.length ? (
          <button
            type="button"
            onClick={handleShowMore}
            className="bg-white text-blue-600 px-4 py-2 rounded-md border border-blue-600 hover:bg-blue-600 hover:text-white transition-all"
          >
            Show More
          </button>
        ) : (
          <button
            type="button"
            onClick={handleShowLess}
            className="bg-blue-600 text-white px-4 py-2 rounded-md border border-blue-600 hover:bg-white hover:text-blue-600 transition-all"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default ReviewSection;

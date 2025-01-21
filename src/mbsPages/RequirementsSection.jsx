import React from 'react';

const RequirementsSection = () => {
  return (
    <section>
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        <div className="section_header lg:mb-12 mb-8">
          <div className="max-w-[775px] mx-auto text-center">
            <h2 className="mb-4 text-5xl font-semibold text-black">Requirements for Launching a Mobile Banking Solution</h2>
            <p className="lg:w-[80%] mx-auto text-base text-[#6B7280]">
              To successfully launch a mobile banking platform, consider these essential requirements.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 xl:gap-5 gap-4 mx-14">
          {/* Step 1 */}
          <div className="bg-gray-50 xl:rounded-[20px] rounded-3xl xl:py-5 py-4 xl:px-8 px-5">
            <div className="flex items-center mb-4">
              <div className="xl:w-12 w-8 xl:h-12 h-8 bg-white rounded-full flex justify-center items-center">
                <span className="text-blue-600 xl:text-[26px]  font-bold">1</span>
              </div>
              <h5 className="ms-3 xl:text-[20px] text-lg font-semibold">Regulatory Compliance</h5>
            </div>
            <p className="text-[#6B7280] text-[15px]">Obtain necessary licenses and ensure that your operations align with regional and global regulatory standards in the financial sector.</p>
          </div>
          {/* Step 2 */}
          <div className="bg-gray-50 xl:rounded-[20px] rounded-3xl xl:py-5 py-4 xl:px-8 px-5">
            <div className="flex items-center mb-4">
              <div className="xl:w-12 w-8 xl:h-12 h-8 bg-white rounded-full flex justify-center items-center">
                <span className="text-blue-600 xl:text-[26px]  font-bold">2</span>
              </div>
              <h5 className="ms-3 xl:text-[20px] text-lg font-semibold">Robust Security Measures</h5>
            </div>
            <p className="text-[#6B7280] text-[15px] ">Implement strong data protection protocols, such as encryption and multi-factor authentication, to safeguard user information and transactions.</p>
          </div>
          {/* Step 3 */}
          <div className="bg-gray-50 xl:rounded-[20px] rounded-3xl xl:py-5 py-4 xl:px-8 px-5">
            <div className="flex items-center mb-4">
              <div className="xl:w-12 w-8 xl:h-12 h-8 bg-white rounded-full flex justify-center items-center">
                <span className="text-blue-600 xl:text-[26px]  font-bold">3</span>
              </div>
              <h5 className="ms-3 xl:text-[20px] text-lg font-semibold">Cross-Platform Compatibility</h5>
            </div>
            <p className="text-[#6B7280] text-[15px]">Ensure that the app is compatible with both iOS and Android devices, providing a smooth experience across devices.</p>
          </div>
          {/* Step 4 */}
          <div className="bg-gray-50 xl:rounded-[20px] rounded-3xl xl:py-5 py-4 xl:px-8 px-5">
            <div className="flex items-center mb-4">
              <div className="xl:w-12 w-8 xl:h-12 h-8 bg-white rounded-full flex justify-center items-center">
                <span className="text-blue-600 xl:text-[26px] font-bold">4</span>
              </div>
              <h5 className="ms-3 xl:text-[20px] text-lg font-semibold">Customer Support Infrastructure</h5>
            </div>
            <p className="text-[#6B7280] text-[15px]">Establish a reliable support team to assist users with any issues and answer questions, maintaining high levels of customer satisfaction.</p>
          </div>
          {/* Step 5 */}
          <div className="bg-gray-50 xl:rounded-[20px] rounded-3xl xl:py-5 py-4 xl:px-8 px-5">
            <div className="flex items-center mb-4">
              <div className="xl:w-12 w-8 xl:h-12 h-8 bg-white rounded-full flex justify-center items-center">
                <span className="text-blue-600 xl:text-[26px]  font-bold">5</span>
              </div>
              <h5 className="ms-3 xl:text-[20px] text-lg font-semibold">Technical Setup and Maintenance</h5>
            </div>
            <p className="text-[#6B7280] text-[15px] ">Prepare your IT team for managing, monitoring, and maintaining the app after launch, ensuring system stability and performance.</p>
          </div>
          {/* Step 6 */}
          <div className="bg-gray-50 xl:rounded-[20px] rounded-3xl xl:py-5 py-4 xl:px-8 px-5">
            <div className="flex items-center mb-4">
              <div className="xl:w-12 w-8 xl:h-12 h-8 bg-white rounded-full flex justify-center items-center">
                <span className="text-blue-600 xl:text-[26px]  font-bold">6</span>
              </div>
              <h5 className="ms-3 xl:text-[20px] text-lg font-semibold">Marketing Strategy</h5>
            </div>
            <p className="text-[#6B7280] text-[15px] ">Develop a plan for user acquisition, including a budget for digital marketing, partnerships, or incentives to attract users.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequirementsSection;

import React, { useState } from "react";
import solutionPageBgLeft from "../assets/solutionPageBgLeft.webp";
import solutionPageBgRight from "../assets/solutionPageBgRight.webp";
import FAQSection from "../ProductKeyPages/FAQSection1";

const ProductKeyForm = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    contactNumber: "",
    purchaseCode: "",
    appName: "",
    websiteUrl: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };
  return (
    <>
    <section className="pt-[180px] pb-[130px] relative">
      {/* Background Images */}
      <img
        src={solutionPageBgLeft}
        alt="Background Left"
        className="absolute top-0 left-0 z-[-2] hidden lg:block"
      />
      <img
        src={solutionPageBgRight}
        alt="Background Right"
        className="absolute top-[60px] right-0 z-[-2] hidden lg:block"
      />

      <div className="max-w-[1248px] mx-auto px-6 relative z-20">
        <div className="section_header mb-7 lg:mb-10">
        <div className="text-center max-w-[950px] mx-auto">
          <span className="text-[12px] font-semibold text-[#115E59] bg-[#CCFBF1] uppercase rounded-full py-1 px-3">
            Product Key
          </span>
          <h1 className="text-[30px] md:text-[48px] lg:text-[48px] font-semibold mt-3">
            Generate a <span className="text-[#7c3aed]">Product Key Now</span>
          </h1>
          <p className="mt-3 text-[#6b7280] max-w-[75%] text-[14px] lg:text-[16px] mx-auto">
          A product key is essential to activate and install your application. Provide accurate purchase details to generate your unique product key. Once created, this key will enable you to complete the installation process securely and seamlessly.
          </p>
        </div>
        </div>

        <div className="grid grid-cols-12">
      <div className="col-span-12 lg:col-span-10 lg:col-start-2">
        <div className="bg-white border border-gray-300 shadow-md rounded-[10px] p-8">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Information Section */}
              <div>
                <h4 className="text-[20px] border-l-2 border-blue-500 pl-3 mb-6">
                  Personal Information
                </h4>
                <div className="grid grid-cols-2 gap-5">
                  <div className="col-span-2 lg:col-span-1">
                    <label className="font-semibold">First Name<span className="text-red-500">*</span></label>
                    <input
                      className="w-full p-3 border rounded-md"
                      placeholder="First Name"
                      required
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <label className="font-semibold">Last Name<span className="text-red-500">*</span></label>
                    <input
                      className="w-full p-3 border rounded-md"
                      placeholder="Last Name"
                      required
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <label className="font-semibold">Email<span className="text-red-500">*</span></label>
                    <input
                      className="w-full p-3 border rounded-md"
                      placeholder="you@email.com"
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <label className="font-semibold">Country<span className="text-red-500">*</span></label>
                    <input
                      className="w-full p-3 border rounded-md"
                      placeholder="Enter your country"
                      required
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="font-semibold">Contact Number<span className="text-red-500">*</span></label>
                    <input
                      className="w-full p-3 border rounded-md"
                      placeholder="Your Contact Number"
                      required
                      type="tel"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* Company Information Section */}
              <div>
                <h4 className="text-[20px] border-l-2 border-green-500 pl-3 mb-6">
                  Company Information
                </h4>
                <div className="grid grid-cols-2 gap-5">
                  <div className="col-span-2">
                    <label className="font-semibold">Purchase Code<span className="text-red-500">*</span></label>
                    <input
                      className="w-full p-3 border rounded-md"
                      placeholder="Purchase Code"
                      required
                      type="text"
                      name="purchaseCode"
                      value={formData.purchaseCode}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="font-semibold">App Name<span className="text-red-500">*</span></label>
                    <input
                      className="w-full p-3 border rounded-md"
                      placeholder="App Name"
                      required
                      type="text"
                      name="appName"
                      value={formData.appName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="font-semibold">Website Link<span className="text-red-500">*</span></label>
                    <input
                      className="w-full p-3 border rounded-md"
                      placeholder="https://website.com"
                      required
                      type="url"
                      name="websiteUrl"
                      value={formData.websiteUrl}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center mt-6">
              <button
                className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-all"
                type="submit"
              >
                Generate Key
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
        </div>
    </section>
    <section>
      <FAQSection />
    </section>
    </>
  );
};

export default ProductKeyForm;

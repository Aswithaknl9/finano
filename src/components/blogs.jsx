import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    businessType: "Business Type",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="relative bg-[url('https://demo.casethemes.net/finano/wp-content/uploads/2019/01/bg-parallax8.jpg')] bg-cover bg-center">
      {/* Transparent Black Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-90"></div>

      <div className="relative text-white pt-[66px] px-4 pb-[51px]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          {/* Left Section */}
          <div className="md:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="p-6"
            >
              <div className="grid md:grid-cols-2 gap-4">
                {/* Name Field */}
                <div>
                  <label className="block text-white font-medium mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border focus:ring focus:ring-red-300 bg-white text-black"
                    required
                  />
                </div>

                {/* Business Type Dropdown */}
                <div>
                  <label className="block text-white font-medium mb-1">Business Type</label>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full p-2 border focus:ring focus:ring-red-300 bg-white text-[#6b7280]"
                    required
                  >
                    <option value="Business Type">Business Type</option>
                    <option value="Sole Proprietorship">Sole Proprietorship</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Corporation">Corporation</option>
                  </select>
                </div>

                {/* Email Field */}
                <div className="mt-4">
                  <label className="block text-white font-medium mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border focus:ring focus:ring-red-300 bg-white text-black"
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="mt-4 pt-7">
                  <button
                    type="submit"
                    className="w-full bg-red-500 text-white py-2 hover:bg-red-600 transition"
                  >
                    Submit Now
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Right Section */}
          <div className="flex flex-col justify-center items-start h-full p-6">
            <h3 className="text-[30px] font-semibold mb-2">Request a Call Back</h3>
            <p className="text-white text-start mt-[26px]">
              If you want to discuss your business with our fine consultants, please schedule a meeting through this contact form.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

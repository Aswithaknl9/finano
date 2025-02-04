import React, { useState } from "react";
import Select from "react-select";
import countryOptions from "../Js/country"; 
import ReCAPTCHA from "react-google-recaptcha";

const budgetOptions = [
    { value: "Unsure", label: "Unsure" },
    { value: "<$5,000", label: "Less than $5,000" },
    { value: "$5,000 - $10,000", label: "$5,000 - $10,000" },
    { value: "$10,000 - $20,000", label: "$10,000 - $20,000" },
    { value: "$20,000 - $50,000", label: "$20,000 - $50,000" },
    { value: "$50,000+", label: "More than $50,000" }
  ];

const QuotationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: countryOptions[0], 
    phone: countryOptions[0].code + " ",
    companyName: "",
    budget: budgetOptions[0],
    projectDescription: "",
  });

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Select Change (for country dropdown)
  const handleSelectChange = (selectedOption) => {
    setFormData({
      ...formData,
      country: selectedOption,
      phone: selectedOption.code + " ", 
    });
  };


  const handleBudgetChange = (selectedOption) => {
    setFormData({ ...formData, budget: selectedOption });
  };


  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value); // Update reCAPTCHA value
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!recaptchaValue) {
      alert("Please verify the reCAPTCHA!");
      return;
    }

    if (!formData.fullName || !formData.email || !formData.phone || !formData.projectDescription) {
      alert("Please fill in all required fields.");
      return;
    }

    console.log("Form Submitted:", formData);
    alert("Quotation request submitted successfully!");
  };

  return (
    <section className="py-[130px] bg-[#f3f4f6]" id="quotation">
      <div className="xl:max-w-[1280px] container mx-auto px-4 relative z-20">
        
        {/* Section Header */}
        <div className="section_header mb-7 lg:mb-14">
          <div className="max-w-[730px] mx-auto text-center">
            <h1 className="text-[24px] sm:text-[28px] md:text-[38px] lg:text-[48px] font-semibold leading-tight mb-3">
              Get a Custom Solution Tailored to Your Needs
            </h1>
            <p className="text-[#6b7280] text-[14px]">
              Ready to take the next step? Fill out the form below to share your customization 
              requirements with us. We’ll get back to you with a tailored proposal.
            </p>
          </div>
        </div>

        {/* Form */}
        <form 
          onSubmit={handleSubmit} 
          className="bg-white border border-[#E5E7EB] shadow-primary__shadow rounded-[20px] px-5 lg:px-11 py-8 lg:py-14"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* Full Name with SVG */}
            <div className="relative">
              <label className="primary__label text-[14px] font-semibold">Full Name<span>*</span></label>
              <div className="relative">
                <svg 
                  className="w-5 absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="7" r="4"></circle>
                  <path d="M5.5 21a6.5 6.5 0 0 1 13 0"></path>
                </svg>
                <input 
                  className="primary__input w-full border rounded-lg text-sm font-semibold pl-12 pr-4 py-2" 
                  type="text" 
                  name="fullName"
                  placeholder="John Doe"
                  value={formData.fullName} 
                  onChange={handleChange} 
                  required
                />
              </div>
            </div>

            {/* Email with SVG */}
            <div className="relative">
              <label className="primary__label text-[14px] font-semibold">Email Address<span>*</span></label>
              <div className="relative">
                <svg 
                  className="w-5 absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
                  <path d="M2 4l10 8 10-8"></path>
                </svg>
                <input 
                  className="primary__input w-full border rounded-lg text-sm font-semibold pl-12 pr-4 py-2" 
                  type="email" 
                  name="email"
                  placeholder="john.doe@example.com"
                  value={formData.email} 
                  onChange={handleChange} 
                  required
                />
              </div>
            </div>

            {/* Country Dropdown with Flag */}
            <div>
              <label className="primary__label text-[14px] font-semibold">Country<span>*</span></label>
              <Select
                className="w-full"
                options={countryOptions}
                value={formData.country}
                onChange={handleSelectChange}
                getOptionLabel={(e) => (
                  <div className="flex items-center">
                    <img src={e.flag} alt={e.label} className="w-5 h-4 mr-2" />
                    {e.label}
                  </div>
                )}
                getOptionValue={(e) => e.value}
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="font-semibold">Phone Number (WhatsApp preferred)<span>*</span></label>
              <div className="flex items-center border rounded-lg">
                <span className="px-3 py-2 bg-gray-200 text-sm font-semibold">
                  {formData.country.code}
                </span>
                <input 
                  className="w-full px-4 py-2 text-sm" 
                  type="tel" 
                  name="phone"
                  placeholder="Enter phone number"
                  value={formData.phone} 
                  onChange={handleChange} 
                  required
                />
              </div>
            </div>

            {/* Company Name */}
            <div>
              <label className="primary__label text-[14px] font-semibold">Company Name <span>(Optional)</span></label>
              <div className="relative">
              <svg 
                  className="w-5 absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="7" r="4"></circle>
                  <path d="M5.5 21a6.5 6.5 0 0 1 13 0"></path>
                </svg>
              <input 
                className="primary__input w-full pl-11 border rounded-lg text-sm font-semibold px-4 py-2" 
                type="text" 
                name="companyName"
                placeholder="DoeTech Solutions"
                value={formData.companyName} 
                onChange={handleChange} 
              />
            </div>
            </div>

            {/* Estimated Budget */}
            <div>
                <label className="primary__label text-[14px] font-semibold">Estimated Budget<span>*</span></label>
                <Select
                    options={budgetOptions}
                    value={formData.budget}
                    onChange={handleBudgetChange}
                    className="w-full border rounded-lg text-sm font-semibold"
                    components={{
                    DropdownIndicator: () => (
                        <div className="p-2">
                        <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        className="text-gray-300 "
                        aria-hidden="true"
                        focusable="false"
                        >
                        <path
                            d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
                            fill="currentColor" className="p-2"
                        />
                        </svg>
                        </div>
                    ),
                    }}
                />
            </div>

            {/* Project Description */}
            <div className="sm:col-span-2">
              <label className="primary__label text-[14px] font-semibold">Project Description<span>*</span></label>
              <textarea 
                className="primary__textarea w-full border rounded-lg text-sm font-semibold px-4 py-2" 
                name="projectDescription"
                placeholder="Provide a detailed description of your project, including features, goals, and requirements."
                value={formData.projectDescription} 
                onChange={handleChange} 
                required
              />
            </div>


            <div className="sm:col-span-2 flex justify-start mt-4">
              <ReCAPTCHA
                sitekey="6Lc2hrIqAAAAAIbwgpwU5t8Ut9WADFmXaF6xD4eF"  // Replace with your actual Site Key
                onChange={handleRecaptchaChange}
              />
            </div>

            <div className="sm:col-span-2">
              <button type="submit" class="basic__btn px-10 py-[12px] rounded-md cursor-not-allowed text-gray-300 bg-blue-500" disabled=" ">Submit Quotation</button>
            </div>


          </div>
        </form>
      </div>
    </section>
  );
};

export default QuotationForm;

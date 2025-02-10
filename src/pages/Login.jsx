import React, { useState } from "react";
import { Link } from "react-router-dom";
import solutionPageBgLeft from "../assets/solutionPageBgLeft.webp";
import solutionPageBgRight from "../assets/solutionPageBgRight.webp";
import loginImage from "../assets/login.webp";

const AuthSection = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword((prevState) => !prevState);
    };
  return (
    <section className="auth_section pt-[250px] pb-[130px] relative">
      {/* Background Images */}
      <img
        alt="Background Image"
        loading="lazy"
        width="795"
        height="777"
        className="absolute top-0 left-0 z-[-2] hidden lg:block"
        src={solutionPageBgLeft}
      />
      <img
        alt="Background Image"
        loading="lazy"
        width="558"
        height="799"
        className="absolute top-[60px] right-0 z-[-2] hidden lg:block"
        src={solutionPageBgRight}
      />

      {/* Container */}
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        <div className="w-full flex items-center justify-center md:gap-5">
          {/* Left Side: Welcome Text & Image */}
          <div className="xl:w-2/5 lg:w-1/2 w-[40%] lg:pr-[5%] md:block hidden">
            <div className="mb-2">
              <img
                alt="Auth"
                loading="lazy"
                width="400"
                height="301"
                className="object-cover mb-2"
                src={loginImage}
              />
            </div>
            <h3 className="mb-3 sm:text-[24px]  font-semibold md:text-[28px] lg:text-[38px] leading-tight ">Welcome Back to AppDevs!</h3>
            <p className="text-sm text-gray-600">
              Log in to access your dashboard and chat directly with our technical team for personalized support tailored to your needs.
            </p>
          </div>

          {/* Right Side: Login Form */}
          <div className="xl:w-2/5 lg:w-1/2 md:w-[60%] sm:w-[80%]">
            <div className="bg-white rounded-lg shadow-md border border-gray-100 p-5">
              <h4 className="font-semibold  mb-4">Login</h4>
              <span className="text-sm text-gray-700 mb-6 block">
                Don’t have an account?{" "}
                <Link to="/register" className="font-semibold text-[#2974e7] hover:text-blue-700">
                  Register
                </Link>
              </span>

              {/* Login Form */}
              <form>
                <ul className="space-y-3">
                  {/* Email Input */}
                  <li>
                    <label className="block font-medium text-gray-700">Email</label>
                    <div className="relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 16 16"
                        strokeWidth="1.5"
                        stroke="#6b7280"
                        className="w-4 absolute top-1/2 transform -translate-y-1/2 left-4"
                      >
                        <path
                          d="M13.332 2.6665H2.66536C1.92898 2.6665 1.33203 3.26346 1.33203 3.99984V11.9998C1.33203 12.7362 1.92898 13.3332 2.66536 13.3332H13.332C14.0684 13.3332 14.6654 12.7362 14.6654 11.9998V3.99984C14.6654 3.26346 14.0684 2.6665 13.332 2.6665Z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M14.6654 4.6665L8.68536 8.4665C8.47955 8.59545 8.24158 8.66384 7.9987 8.66384C7.75582 8.66384 7.51785 8.59545 7.31203 8.4665L1.33203 4.6665"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <input
                        id="email"
                        className="w-full pl-11 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter Email"
                        type="email"
                        required
                      />
                    </div>
                  </li>

                  {/* Password Input */}
                  <li>
                  
                    <label className="block font-medium text-gray-700">Password</label>
                    <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" stroke-width="1.5" stroke="#6b7280" class="w-4 absolute top-1/2 translate-y-[-50%] left-4"><path d="M12.6667 7.3335H3.33333C2.59695 7.3335 2 7.93045 2 8.66683V13.3335C2 14.0699 2.59695 14.6668 3.33333 14.6668H12.6667C13.403 14.6668 14 14.0699 14 13.3335V8.66683C14 7.93045 13.403 7.3335 12.6667 7.3335Z" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.66797 7.3335V4.66683C4.66797 3.78277 5.01916 2.93493 5.64428 2.30981C6.2694 1.68469 7.11725 1.3335 8.0013 1.3335C8.88536 1.3335 9.7332 1.68469 10.3583 2.30981C10.9834 2.93493 11.3346 3.78277 11.3346 4.66683V7.3335" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                      <input
                        id="password"
                        className="w-full pl-11 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter Password"
                        type={showPassword ? "text" : "password"}
                        required
                      />

                      {/* Password Toggle Button */}
                      <button
                        type="button"
                        className="absolute top-1/2 right-3 transform -translate-y-1/2 transition-all hover:text-blue-500"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#6b7280"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3.98 8.5a10.477 10.477 0 0 1 8.02-3.5c4.243 0 7.928 2.466 9.518 6.122a1.002 1.002 0 0 1 0 .756c-1.59 3.656-5.275 6.122-9.518 6.122-4.243 0-7.928-2.466-9.518-6.122a1.002 1.002 0 0 1 0-.756z"
                            />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15V9m-3 3h6" />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#6b7280"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                            />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  
                  </li>

                  {/* Remember Me & Forgot Password */}
                  <li className="flex items-center justify-between">
                    <label className="inline-flex items-center">
                      <input className="form-checkbox h-4 w-4 text-blue-500" type="checkbox" />
                      <span className="ml-2 text-sm font-medium text-gray-700">Remember Me</span>
                    </label>
                    <Link to="/password/forgot" className="text-sm font-semibold text-blue-500 hover:text-blue-700">
                      Forgot Password?
                    </Link>
                  </li>

                  {/* Submit Button */}
                  <li>
                  <button type="submit" class="basic__btn w-full mt-8 cursor-not-allowed px-8 py-2 rounded-md !text-gray-300 !bg-blue-500" disabled="">Login</button>
                  </li>
                </ul>
              </form>

              {/* Divider */}
              <div className="border-b border-gray-300 mt-8 relative">
                <span className="absolute top-1/2 left-1/2 bg-white px-3 transform -translate-x-1/2 -translate-y-1/2 text-sm text-gray-600">
                  or
                </span>
              </div>

              {/* Social Login Buttons */}
              <div className="grid grid-cols-2 gap-5 mt-6">
                <button className="flex items-center justify-center border rounded-md py-2 transition hover:bg-blue-50 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" class="w-4 h-4 me-2"><path d="M15.999 8.18411C15.999 7.64031 15.954 7.09357 15.858 6.55859H8.16016V9.63914H12.5684C12.3854 10.6327 11.7977 11.5116 10.937 12.0701V14.0689H13.567C15.1113 12.6756 15.999 10.618 15.999 8.18411Z" fill="#1F7BF4"></path><path d="M8.16022 16C10.3613 16 12.2176 15.2916 13.57 14.0688L10.9401 12.07C10.2084 12.5579 9.26378 12.8342 8.16322 12.8342C6.03409 12.8342 4.22882 11.4262 3.58108 9.5332H0.867188V11.5938C2.25262 14.2951 5.07448 16 8.16022 16Z" fill="#0AA630"></path><path d="M3.57905 9.53314C3.23719 8.5396 3.23719 7.46376 3.57905 6.47023V4.40967H0.868147C-0.289382 6.67011 -0.289382 9.33326 0.868147 11.5937L3.57905 9.53314Z" fill="#FBBC04"></path><path d="M8.16022 3.16633C9.32375 3.1487 10.4483 3.57786 11.291 4.36563L13.621 2.08167C12.1456 0.723645 10.1874 -0.0229766 8.16022 0.000539093C5.07448 0.000539093 2.25262 1.70542 0.867188 4.40972L3.57809 6.47028C4.22282 4.57433 6.03109 3.16633 8.16022 3.16633Z" fill="#FE2C25"></path></svg>
                  Google
                </button>
                <button className="flex items-center justify-center border rounded-md py-2 transition hover:bg-blue-50">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.2" fill="none" viewBox="0 0 266 376" class="h-4 w-4 fill-[#87e64b] me-2"><path d="m150.3 375.8c9.3 0 16.8-7.5 16.8-16.8 0-9.3-7.5-16.8-16.8-16.8-9.3 0-16.8 7.5-16.8 16.8 0 9.3 7.5 16.8 16.8 16.8z"></path><path d="m246.8 244.6l-94.6 10.1c-1.7 0.2-2.6-2-1.2-3.1l92.6-72.1c6-4.9 9.8-12.6 8.2-20.8-1.6-12.6-12-20.8-25.1-19.1l-100.6 14.7c-1.8 0.3-2.7-2-1.3-3.1l99.7-76.2c19.7-15.3 21.3-45.4 3.3-62.9-16.4-16.4-42.6-15.9-59 0.5l-160.9 163.7c-6 6.6-8.7 15.3-7.1 24.6 2.7 14.8 17.5 24.6 32.3 21.9l86.6-17.7c1.9-0.4 2.9 2.1 1.3 3.2l-96.1 61.5c-12 7.7-17.5 21.3-13.7 35 3.8 18 21.9 28.4 39.4 24.1l143.7-35.4c1.6-0.4 2.8 1.5 1.8 2.8l-22.4 27.7c-6 7.7 3.8 18 12 12l73.8-60.7c13.1-10.9 4.4-32.3-12.6-30.6z"></path></svg>
                  Envato
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthSection;

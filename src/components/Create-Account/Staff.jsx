import { Link } from "react-router-dom";
import React, { useState } from "react";

const Staff = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
<div className="min-h-screen bg-white flex flex-col mx-auto px-4">
    <div className="w-[382px] mx-auto mt-[59px] ml-[23px] mb-8 px-4">
            <h1 className="text-[#710193] font-open-sans font-semibold text-24px leading-[30px]"> Create Account</h1>
    </div>

      {/* Form Container */}
      <div className="w-[87%] md:max-w-[500px] lg:max-w-[600px] mx-auto flex flex-col gap-6 mb-2.5">
        <div className="h-[77px]">
          <label className="text-[#87748C] text-sm">Email</label>
          <input type="email" className="w-full h-full p-3 rounded-sm border border-[#87748C] focus:outline-none mb-2 focus:border-[#710193]"/>
        </div>

        {/* First Name and Last Name Fields */}
        <div className="h-[77px] flex gap-4 mb-2">
          <div className="w-1/2">
            <label className="text-[#87748C] text-sm">First Name</label>
            <input
              type="text"
              className="w-full h-full p-3 rounded-sm border border-[#87748C] focus:outline-none focus:border-[#710193]"
            />
          </div>
          <div className="w-1/2">
            <label className="text-[#87748C] text-sm">Last Name</label>
            <input
              type="text"
              className="w-full h-full p-3 rounded-lg border border-[#87748C] focus:outline-none focus:border-[#710193]"
            />
          </div>
        </div>

        {/* Phone Number */}
        <div className="h-[77px] mb-2">
          <label className="text-[#87748C] text-sm">Phone Number</label>
          <input
            type="tel"
            placeholder="+234"
            className="w-full h-full p-3 rounded-lg border border-[#87748C] focus:outline-none focus:border-[#710193]"
          />
        </div>

        {/* Password Field */}
      <div className="h-[77px] relative mb-2">
         <label className="text-[#87748C] text-sm">Password</label>

  {/* Password Input Field */}
  <input
    type={showPassword ? "text" : "password"}
    className="w-full h-full p-3 rounded-lg border border-[#87748C] focus:outline-none focus:border-[#710193]"
  />

  {/* Toggle Password Visibility Button */}
  <button
    type="button"
    onClick={togglePasswordVisibility}
    className="absolute inset-y-4 right-2 pr-3 flex items-center justify-center h-full"
    aria-label={showPassword ? "Hide password" : "Show password"}
  >
    {/* Eye Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-5  text-[#87748C] hover:text-[#710193] transition-colors"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"
      />
    </svg>
  </button>
</div>
   {/* Confirm Password Field */}
        <div className="h-[77px] py-2 mb-5">
          <label className="text-[#87748C]">Confirm Password</label>
          <input
            type="password"
            className="w-full h-full p-3 rounded-lg border border-[#87748C] focus:outline-none focus:border-[#710193]"
          />
        </div>

        {/* Next Button */}
        <Link to='/otp' className='w-full bg-[#710193] text-center content-center text-white h-[56px] rounded-[10px] text-[16px] font-semibold '>
                                    Next
                                </Link>

        {/* Login Link */}
        <p className="text-center text-[#87748C]">
          Already have an account? {" "}
          <a href="#" className="text-[#c7cb09] hover:underline">
            Login
          </a> 
        </p>
    </div>
</div>
  );
};

export default Staff;

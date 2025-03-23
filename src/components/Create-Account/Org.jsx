import React, { useState } from "react";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#FFFCFD]">
      <div className="bg-white p-6 rounded-lg shadow-md w-[350px]">
        {/* Title */}
        <h2 className="text-center text-[#710193] text-xl font-semibold mb-4">Create Account</h2>

        {/* Email Input */}
        <label className="text-sm text-gray-700">Email</label>
        <input type="email" className="w-full border rounded-md p-2 mb-3 outline-none focus:ring-2 focus:ring-purple-400" />

        {/* Name Inputs */}
        <div className="flex gap-3">
          <div className="w-1/2">
            <label className="text-sm text-gray-700">First Name</label>
            <input type="text" className="w-full border rounded-md p-2 mb-3 outline-none focus:ring-2 focus:ring-purple-400" />
          </div>
          <div className="w-1/2">
            <label className="text-sm text-gray-700">Last Name</label>
            <input type="text" className="w-full border rounded-md p-2 mb-3 outline-none focus:ring-2 focus:ring-purple-400" />
          </div>
        </div>

        {/* Phone Number Input */}
        <label className="text-sm text-gray-700">Phone Number</label>
        <input type="tel" defaultValue="+234" className="w-full border rounded-md p-2 mb-3 outline-none focus:ring-2 focus:ring-purple-400" />

        {/* Password Input */}
        <label className="text-sm text-gray-700">Password</label>
        <div className="relative mb-3">
          <input
            type={showPassword ? "text" : "password"}
            className="w-full border rounded-md p-2 pr-10 outline-none focus:ring-2 focus:ring-purple-400"
          />
          <span
            className="absolute right-3 top-3 cursor-pointer text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>

        {/* Confirm Password Input */}
        <label className="text-sm text-gray-700">Confirm Password</label>
        <input type="password" className="w-full border rounded-md p-2 mb-5 outline-none focus:ring-2 focus:ring-purple-400" />

        {/* Next Button */}
        <button className="w-full bg-purple-700 text-white p-3 rounded-md hover:bg-purple-800 transition">
          Next
        </button>

        {/* Sign In Link */}
        <p className="text-center text-gray-600 text-sm mt-3">
          Already have an account?{" "}
          <a href="#" className="text-purple-700 font-medium">Sign in.</a>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;

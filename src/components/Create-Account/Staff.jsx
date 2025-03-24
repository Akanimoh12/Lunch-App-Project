import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Staff = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "+234",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!formData.email) {
      formErrors.email = "Email is required.";
      isValid = false;
    }

    if (!formData.firstName) {
      formErrors.firstName = "First name is required.";
      isValid = false;
    }

    if (!formData.lastName) {
      formErrors.lastName = "Last name is required.";
      isValid = false;
    }

    if (!formData.phone || formData.phone.length < 10) {
      formErrors.phone = "Please enter a valid phone number.";
      isValid = false;
    }

    if (!formData.password) {
      formErrors.password = "Password is required.";
      isValid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword = "Passwords do not match.";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      navigate("/otp");
    }
  };

  return (

    <div className="flex justify-center items-center min-h-screen bg-[#FFFCFD]">

      <div className="bg-white p-6 rounded-lg w-[350px]">

        <h2 className=" text-[#710193] text-[24px] font-semibold mb-10">Create Account</h2>

        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <label className="text-[14px] text-[#87748c]">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full h-[56px] rounded-md p-2 mb-3 border-[0.5px] border-[#87748C] outline-none focus:ring-2 focus:ring-purple-400"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          {/* Name Inputs */}
          <div className="flex gap-3">
            <div className="w-1/2">
              <label className="text-[14px] text-[#87748c]">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full h-[56px] rounded-[10px] p-2 mb-3 border-[0.5px] border-[#87748C] outline-none focus:ring-2 focus:ring-purple-400"
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
            </div>
            <div className="w-1/2">
              <label className="text-[14px] text-[#87748c]">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full h-[56px] rounded-[10px] p-2 mb-3 border-[0.5px] border-[#87748C] outline-none focus:ring-2 focus:ring-purple-400"
              />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
            </div>
          </div>

          {/* Phone Number Input */}
          <label className="text-[14px] text-[#87748c]">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full h-[56px] rounded-[10px] p-2 mb-3 border-[0.5px] border-[#87748C] outline-none focus:ring-2 focus:ring-purple-400"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

          {/* Password Input */}
          <label className="text-[14px] text-[#87748c]">Password</label>
          <div className="relative mb-3">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full h-[56px] rounded-[10px] p-2 pr-10 border-[0.5px] border-[#87748C] outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button
              type="button"
              className="absolute right-3 top-3 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#87748C] hover:text-[#710193] transition-colors"
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
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

          {/* Confirm Password Input */}
          <label className="text-[14px] text-[#87748C]">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full h-[56px] rounded-[10px] p-2 mb-5 border-[0.5px] border-[#87748C] outline-none focus:ring-2 focus:ring-purple-400"
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}

          {/* Next Button */}
          <button
            type="submit"
            className="w-full h-[56px] mt-12 font-semibold text-[14px] rounded-[10px] bg-purple-700 text-white p-3 hover:bg-purple-800 transition"
          >
            Next
          </button>
        </form>

        {/* Sign In Link */}
        <p className="text-center  text-[#87748C] text-sm mt-3">
          Already have an account?{" "}
          <a href="#" className="text-purple-700 font-medium">
            Sign in.
          </a>
        </p>

      </div>
    </div>
  );
};

export default Staff;
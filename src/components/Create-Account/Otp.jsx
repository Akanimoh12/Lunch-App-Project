import { Link } from 'react-router-dom';
import React from 'react';

const Otp = () => {
  return (

    <div className="flex flex-col justify-items-start min-h-screen bg-white mx-auto px-4">
      <div className="text-left mb-8 w-full max-w-md">
        <h1 className="text-2xl md:text-3xl font-bold ml-4 text-[#710193] mt-[59px]">OTP</h1>
        <p className="mt-2 text-sm text-[#87748C] mb-10">A 6 digit OTP code has been sent to your organization, kindly enter the code. </p>
      </div>


      <div className="flex justify-center space-x-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <input key={index} type="text" maxLength="1"
            className="w-[43.67px] h-[56px] border border-gray-300 rounded text-center text-xl focus:outline-none focus:border-[#710193]" />))}
      </div>
      <div className="flex-grow"></div>
      <div>

          {/* Next Button Link */}
        <div>
          <Link to='/home' className='w-full bg-[#710193] text-center content-center text-white h-[56px] rounded-[10px] text-[16px] font-semibold '>
            Continue
          </Link>
        </div>

        <div className="mb-16"> {/* Container for button and paragraph, with margin */}

          <p className="mt-2 text-center text-sm text-[#87748C]">
            Already have an account? <a href="/signin" className="text-[#c7cb09]] font-semibold">Sign In</a>
          </p>
        </div>

      </div>

      </div>

      );
};

      export default Otp;
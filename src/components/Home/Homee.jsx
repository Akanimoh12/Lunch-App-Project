import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import { UserGroupIcon, CogIcon, HomeIcon, UserIcon } from "@heroicons/react/24/outline";
import Home02 from "./Home02";


const Homee = () => {
  const [display, setDisplay] = useState('hidden');
  const [displayed, setDisplayed] = useState(false);

  const clickDisplay = () => {
    if (displayed === false) {
      setDisplayed(true)
      setDisplay('block')
    } else {
      setDisplayed(false)
      setDisplay('hidden')

    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-[#710193] font-sans">

      <div className="bg-[#FFFCFD] w-full max-w-[390px] h-[100vh] max-h-[844px] sm:rounded-2xl sm:shadow-lg p-4 flex flex-col justify-between overflow-hidden">

        {/* Profile Section */}
        <div className="flex items-center gap-2 mb-5">

          <Link to='/profile'>
            <img
              src="/images/Image (1).png"
              alt="Profile"
              className="w-[32px] h-[32px] rounded-full"
            />
          </Link>



          <div>
            <h2 className="text-[15px] text-[#710193]">Hi, Rebecca!</h2>
            <p className="text-[10px] text-[#AD99B2]">Lab Analyst</p>
          </div>

          <div className="flex ml-[170px] items-center ">

            <Link to='/notification'>
              <img src="/images/Bell.svg" alt="" className="w-[24px] h-[24px]" />
            </Link>

            <img src="/images/Subtract.png" alt="" className="w-[19px] h-[19px]" />
          </div>
        </div>
        <div className="text-[#FFA500] w-[219px] h-[38px] text-[10px]">
          <i>"your exceptional work deserves the word's
            applause and all the rewards it brings"</i>
        </div>

        {/* Lunch Card */}
        <div className="mb-10 ">
          <div className=" text-[#FFFCFD] rounded-lg py-3 text-center mb-3 items-center">
            <img src="/images/Frame 43.png" alt="" className="w-[100%] h-[130px] mb-5 " />
            <p className="text-[11px] w-full mt-2 text-gray-500 rounded-4px border border-dotted py-[12px] border-[#EABA00]">🎁 Congratulations! You received a free lunch. Great job!😍</p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-7">
            <button onClick={clickDisplay} className="flex-1 bg-[#7C149B]  text-white px-3 py-2 rounded-[10px] h-[56px] w-[163px]">
              Redeem Lunch
            </button>
            <button className="flex-1 bg-[#EABA00]  text-white p-[3px] rounded-[10px] h-[56px] w-[163px]">
              Send Lunch
            </button>
          </div>
        </div>

        {/* Lunch History */}
        <div className="flex-1 overflow-auto ">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-semibold text-gray-900">Lunch History</h4>
            <button className="text-[#FFA500] text-[14px]">Received ▼</button>
          </div>

          <div className="space-y-1">
            {[2, 1, 1, 2].map((count, index) => (
              <div
                key={index}
                className="bg-gray-50 p-2 flex justify-between "
              >
                <div className="h-[60px] w-[342px]">
                  <p className="text-[#87748C] font-medium text-sm">Lunch Received</p>
                  <p className="text-xs text-[#87748C]">From Jenny Wilson | May 18, 2023</p>
                </div>
                <p className="text-[10px] font-bold text-[#7C149B]">+ {count}</p>
                <hr className="border-b border-gray-300 my-3" />
              </div>

            ))}
          </div>
        </div>

        {/* Footer Navigation */}
        <footer className="flex justify-around pt-2 ">
          <Link to='/home'>
            <button className="flex flex-col items-center text-[#7C149B]">
              <HomeIcon className="h-6 w-6" /> {/* Home icon */}
              <span className="text-xs">Home</span>
            </button>
          </Link>


          <Link to=''>
            <button className="flex flex-col items-center text-gray-500">
              <UserGroupIcon className="h-6 w-6" /> {/* Employees icon */}
              <span className="text-xs">Employees</span>
            </button>
          </Link>



          <Link to='/profile'>
            <button className="flex flex-col items-center text-gray-500">
              <UserIcon className="h-6 w-6" /> {/* Profile icon */}
              <span className="text-xs">Profile</span>
            </button>
          </Link>


        </footer>

      </div>

      <div>

      </div>

      <div className={`bg-white sm:w-[390px] h-[530px] shadow-gray border-t-[0.5px] shadow bottom-0 absolute w-full sm:m-auto m-0 rounded-2xl p-[24px] sm:border-[1px] sm:border-[#F0E8F2] ${display}  `} >

        {/* Close Button */}
        <div className=" flex justify-end">
          <img src="/cancel.svg" alt="" onClick={clickDisplay} className="w-[12px] h-[12px]  " />
        </div>

        <Home02 />

      </div>

    </div>
  );
};

export default Homee;

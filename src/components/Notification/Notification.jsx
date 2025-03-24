import { Link } from 'react-router-dom';
import React from 'react';

export default function Notification() {
  return (
    <div className='w-full h-[100vh] flex sm:justify-center sm:content-center'>

    <div className="w-full sm:w-[390px] h-[100vh] sm:h-auto p-[24px]  ">

      {/* Header */}
      <div className="flex mt-5 ml-6 gap-2 items-center">

        <Link to='/home'>
        <svg width="24" height="29" viewBox="0 0 24 24" fill="none">
          <path
            d="M21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75H5.56032L11.0306 18.2194C11.1003 18.2891 11.1556 18.3718 11.1933 18.4628C11.231 18.5539 11.2504 18.6515 11.2504 18.75C11.2504 18.8486 11.231 18.9461 11.1933 19.0372C11.1556 19.1282 11.1003 19.2109 11.0306 19.2806C10.961 19.3503 10.8782 19.4056 10.7872 19.4433C10.6961 19.481 10.5986 19.5004 10.5 19.5004C10.4015 19.5004 10.3039 19.481 10.2128 19.4433C10.1218 19.4056 10.0391 19.3503 9.96939 19.2806L3.21939 12.5306C3.14965 12.461 3.09433 12.3783 3.05659 12.2872C3.01885 12.1962 2.99942 12.0986 2.99942 12C2.99942 11.9014 3.01885 11.8038 3.05659 11.7128C3.09433 11.6218 3.14965 11.539 3.21939 11.4694L9.96939 4.71938C10.1101 4.57865 10.301 4.49959 10.5 4.49959C10.699 4.49959 10.8899 4.57865 11.0306 4.71938C11.1714 4.86011 11.2504 5.05098 11.2504 5.25001C11.2504 5.44903 11.1714 5.6399 11.0306 5.78063L5.56032 11.25H20.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12Z"
            fill="#87748C"
          />
        </svg>
        </Link>

        

        <h2 className="text-[#710193] font-sans text-[24px] font-semibold">Notification</h2>
      </div>

      {/* Recent Notifications */}
      <p className="mt-5 ml-7 text-[#87748C]">Recent</p>
      <div className="w-[344px] h-[318px] rounded-[10px] border border-[#F4C6FF] bg-[#F0E8F2] p-4 ml-6 mt-5">
        <p className="text-[#FFA500]">You just received a free lunch!</p>

        <div className="mt-4 flex items-center gap-4">
          <img className="rounded-[15px]" src="Frame 73.jpg" alt="" width="50" height="50" />
          <div>
            <p className="text-[#110216]">Eleanor Pena</p>
            <p className="text-[#87748C] text-sm">Account</p>
          </div>
        </div>

        <p className="mt-4 text-sm text-[#110216]">
          Your dedication and hard work truly shine through in this outstanding accomplishment. Your attention to detail,
          creativity, and commitment to excellence are an inspiration to us all.
        </p>

        <p className="text-end text-[#87748C] text-sm">2 hours ago</p>

        <div className="w-full h-14 rounded-[10px] border border-[#7C149B] bg-[#7C149B] mt-2 flex justify-center items-center">
          <p className="text-[#FFFCFD]">Redeem</p>
        </div>
      </div>

      {/* Last Week Notifications */}
      <p className="mt-5 ml-7 text-[#87748C]">Last Week</p>

      {[...Array(2)].map((_, i) => (
        <div key={i} className="w-[342px] h-[181px] rounded-[10px] border border-[#F4C6FF] bg-[#F0E8F2] p-4 ml-6 mt-4">
          <div className="flex items-center gap-4">
            <img className="rounded-[15px]" src="Frame 73.jpg" alt="" width="50" height="50" />
            <div>
              <p className="text-[#110216]">Eleanor Pena</p>
              <p className="text-[#87748C] text-sm">Account</p>
            </div>
          </div>

          <p className="mt-4 text-xs text-[#110216]">
            Your dedication and hard work truly shine through in this outstanding accomplishment. Your attention to detail,
            creativity, and commitment to excellence are an inspiration to us all.
          </p>

          <p className="text-end text-[#87748C] text-sm">2 hours ago</p>
        </div>
      ))}
    </div>
    </div>
  );
}

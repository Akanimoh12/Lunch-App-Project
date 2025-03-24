import React from 'react'
import { Link } from 'react-router-dom'
import LunchSuccess from './LunchSuccess'
import Activity from '../Profile/Activity'

export default function Successfull() {
    return (


        <div className='w-full h-[100vh] sm:justify-center sm:content-center sm:bg-[#710193]  '>

            {/* CONTAINER */}
            <div className='sm:w-[390px] w-full h-[100vh] sm:h-auto sm:m-auto m-0 sm:rounded-2xl p-[24px] sm:border-[1px] sm:border-[#F0E8F2] bg-white '>

                <div className=''>
                    {/* Profile Section*/}
                    <div className='grid grid-cols-4 '>

                        {/* Profile details and image */}
                        <div className='col-span-3 justify-between '>

                            <img src="/RebPics.svg" className='w-[78px] h-[78px] ' />

                            <div className='mt-[8px]'>
                                <h1 className='text-[#710193] text-[15px] font-extrabold'>Rebecca Adeyoju</h1>
                                <p className='text-[#AD99B2] text-[10px]  '>Lab Analyst.</p>
                            </div>

                        </div>

                        {/* Settings Icon */}
                        <div className='justify-center w-full justify-items-end '>
                            <img src="/Vector.svg" className='w-[24px] h-[24px] hover:cursor-pointer  ' />
                        </div>

                    </div>
                    {/* End for Profile Section */}

                    {/* User Profile Review  */}
                    <div className='flex gap-6'>

                        {/* Total lunches received */}
                        <div className='mt-[19px]'>
                            <h1 className='font-extrabold text-[18px] '>87</h1>
                            <p className='text-[14px] text-[#AD99B2] font-medium '>
                                Total free <br />
                                lunches received
                            </p>
                        </div>

                        {/* Total lunches given */}
                        <div className='mt-[19px]'>
                            <h1 className='font-extrabold text-[18px] '>34</h1>
                            <p className='text-[14px] text-[#AD99B2] font-medium '>
                                Total free <br />
                                lunches given
                            </p>
                        </div>


                    </div>
                    {/* End for User Profile Review */}

                    {/* Lunch Available */}
                    <div className='bg-[#F0E8F2] rounded-[8px] p-[24px] mt-[24px] '>

                        <div className='flex gap-2'>

                            <img src="Plate.svg" alt="" className='w-[40px] h-[40px]' />

                            <p className='text-[14px] font-medium'>
                                Lunch <br />
                                Available
                            </p>
                        </div>

                        <h1 className='text-[32px] font-bold text-[#8524A1] mt-[8px] '>12</h1>

                    </div>

                    {/* Redeem Button */}
                    <button className='bg-[#7C149B] font-semibold text-[16px] text-white rounded-[10px] w-[159px] h-[56px] mt-6 hover:cursor-pointer '>Redeem</button>

                    {/* Activities Sections */}
                    <div className=''>

                        {/*  */}
                        <div className='flex justify-between text-[#87748C] mt-[24px] text-[16px] font-semibold  '>
                            <p>Activities</p>
                            <p className='hover:cursor-pointer '>View All</p>
                        </div>

                        {/* Content of Activity */}
                        <div className=''>
                            <Activity />

                        </div>

                    </div>
                </div>
                {/* End for Activities Section */}



                <div className=" absolute  bottom-10 sm:bottom-8 w-[90%] p-4 sm:w-auto m-auto justify-center flex bg-white">

                    {/* Card with Background Image */}
                    <div
                        className="w-full rounded-lg text-center"
                        style={{
                            backgroundImage: "url('/bg.svg')", // Use uploaded image
                            backgroundSize: "cover",
                            backgroundPosition: "top",
                            backgroundRepeat: "no-repeat",
                            backgroundColor: "white", // Fallback background
                        }}
                    >
                        {/* Icon Section (Replaces Large Checkmark Icon) */}
                        <div className="relative flex items-center justify-center w-[190px] h-[190px] mx-auto mt-8">
                            <img src="/images/Ellipse 7.png" alt="Ellipse" className="absolute w-full h-full" />
                            <img src="/images/Vector.png" alt="Vector" className="w-14 h-14 z-14" />
                        </div>

                        {/* Success Message */}
                        <h2 className="text-[24px] font-bold text-[#710193] mt-4">Lunch Redeemed!</h2>
                        <p className="text-[#87748C] text-[14px] mt-20 font-bold">You have successfully redeemed 2 free lunches.</p>
                        <p className="text-[#FFA500] font-bold text-[14px] mt-1">(₦4,400)</p>

                        {/* Button */}
                        <Link to='/home'>
                            <button className="w-full hover:cursor-pointer h-[56px] mt-6 bg-gray-100 text-[#710193] py-2 px-4 rounded-[10px] border border-purple-500">
                                Go to home page
                            </button>
                        </Link>

                    </div>

                </div>




            </div>
            {/* END FOR CONTAINER */}





        </div>





    )
}

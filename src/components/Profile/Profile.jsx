import React from 'react'
import { Link } from 'react-router-dom'
import { UserGroupIcon, CogIcon, HomeIcon, UserIcon } from "@heroicons/react/24/outline";
import Activity from './Activity'

export default function Profile() {
    return (
        <div className='w-full h-[100vh] sm:justify-center sm:content-center sm:bg-black '>

            {/* CONTAINER */}
            <div className='sm:w-[390px] w-full h-[100vh] sm:h-auto sm:m-auto m-0 bg-white rounded-2xl p-[24px] sm:border-[1px] sm:border-[#F0E8F2] '>

                {/* Profile Section*/}
                <div className='grid grid-cols-4'>

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
                {/* End for Activities Section */}


                {/* Footer Navigation */}
                <footer className="flex justify-around pt-2 my-4 text-gray-500 ">
                    <Link to='/home'>
                        <button className="flex flex-col items-center ">
                            <HomeIcon className="h-6 w-6" /> {/* Home icon */}
                            <span className="text-xs">Home</span>
                        </button>
                    </Link>


                    <Link to=''>
                        <button className="flex flex-col items-center ">
                            <UserGroupIcon className="h-6 w-6" /> {/* Employees icon */}
                            <span className="text-xs">Employees</span>
                        </button>
                    </Link>



                    <Link to='/profile'>
                        <button className="flex flex-col items-center text-[#7C149B]">
                            <UserIcon className="h-6 w-6" /> {/* Profile icon */}
                            <span className="text-xs">Profile</span>
                        </button>
                    </Link>


                </footer>



            </div>
            {/* END FOR CONTAINER */}


        </div>

    )
}

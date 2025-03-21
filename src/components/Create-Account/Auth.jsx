import { useState } from 'react';
import React from 'react'

export default function Auth() {

    const [display, setDisplay] = useState('hidden');
    const [displayed, setDisplayed] = useState(false);

    const clickDisplay = () => {
        if (displayed === false) {
            setDisplayed(true)
            setDisplay('block')
        } else{
            setDisplayed(false)
            setDisplayed('hidden')
            
        }
    }

    return (
        <div className='w-full h-[100vh] sm:justify-center sm:content-center bg-[#7C149B] '>

            {/* CONTAINER */}
            <div className='sm:w-[390px] w-full sm:m-auto m-0 rounded-2xl p-[24px] sm:border-[1px] sm:border-[#F0E8F2] '>

                {/* Logo */}
                <div className='w-full  justify-items-center mt-20'>
                    <img src="/logo.svg" className='w-[74px] h-[74px] ' />
                </div>
                
                {/* Free Lunch Word */}
                <div className=''>
                    <h1 className='text-center text-white font-bold text-[32px] mt-8'>Free Lunch!</h1>
                </div>

                {/* Buttons for Create Account And Login */}
                <div className='mt-12'>

                    {/* Create Account Button */}
                    <button className='bg-white text-[#7C149B] w-full h-[56px] rounded-[10px] text-[16px] font-semibold ' onClick={clickDisplay}>Create Account</button>

                    {/* Types of Account to create */}
                    <div className={`grid grid-cols-2 gap-3 mt-2 ${display} `}>
                        <button className='bg-[#EABA00] text-white h-[56px] rounded-[10px] text-[16px] font-semibold '>Organization</button>
                        <button className=' bg-[#EABA00] text-white w-full h-[56px] rounded-[10px] text-[16px] font-semibold '>Staff</button>
                    </div>

                    {/* Sign In Account Button */}
                    <button className='bg-white text-[#7C149B] w-full h-[56px] rounded-[10px] text-[16px] font-semibold mt-6 '>Sign In</button>

                </div>

            </div>
            {/* END FOR CONTAINER */}

        </div>


    )
}

import { Link } from 'react-router-dom';
import { useState } from 'react';
import React from 'react'
import Home02 from '../Home/Home02';
import LunchRedeemed from '../Lunch/LunchSuccess';
import Lunch from '../Lunch/Lunch';
import RedeemLunch from '../Lunch/RedeemLunch';
import LunchSuccess from '../Lunch/LunchSuccess';


export default function Auth() {

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
        <div className='w-full h-[100vh] sm:justify-center sm:content-center bg-[#7C149B] '>

            {/* CONTAINER */}
            <div className='sm:w-[390px] bg-[url(/dotted.svg)] sm:h-auto h-full w-full sm:m-auto m-0 rounded-2xl p-[24px] sm:border-[1px] sm:border-[#F0E8F2] '>

                {/* Logo */}
                <div className='w-full  justify-items-center mt-24'>
                    <img src="/logo.svg" className='w-[74px] h-[74px] ' />
                </div>

                {/* Free Lunch Word */}
                <div className=''>
                    <h1 className='text-center text-white font-bold text-[32px] mt-8'>Free Lunch!</h1>
                </div>

                {/* Buttons for Create Account And Login */}
                <div className='mt-16'>

                    {/* Create Account Button */}
                    <button className='bg-white text-[#7C149B] hover:cursor-pointer w-full h-[56px] rounded-[10px] text-[16px] font-semibold ' onClick={clickDisplay}>Create Account</button>

                    {/* Types of Account to create */}
                    <div className={`grid grid-cols-2 gap-3 mt-2 ${display}  transition-opacity duration-300 ${displayed ? 'opacity-100' : 'opacity-15'
                        } `}>

                        {/* Organization Button */}
                        <Link to='/organization' className='w-full bg-[#EABA00] text-center content-center text-white h-[56px] rounded-[10px] text-[16px] font-semibold '>
                            Organization
                        </Link>

                        {/* Staff Button */}
                        <Link to='/staff' className='w-full bg-[#EABA00] text-center content-center text-white h-[56px] rounded-[10px] text-[16px] font-semibold '>
                            Staff
                        </Link>

                    </div>

                    {/* Sign In Account Button */}
                    <Link to='/signin' >
                        <button className='bg-white text-[#7C149B] w-full hover:cursor-pointer h-[56px] rounded-[10px] text-[16px] font-semibold mt-6'>Sign In</button>
                    </Link>
                    

                </div>

            </div>
            {/* END FOR CONTAINER */}   

            


        </div>


    )
}

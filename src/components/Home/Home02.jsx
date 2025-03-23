
import React from 'react'

export default function Home02() {

    // const [display, setDisplay] = useState('hidden');
    // const [displayed, setDisplayed] = useState(false);

    // // const clickDisplay = () => {
    // //     if (displayed === false) {
    // //         setDisplayed(true)
    // //         setDisplay('block')
    // //     } else {
    // //         setDisplayed(false)
    // //         setDisplay('hidden')

    // //     }
    // // }


    return (

        < div  >

            {/* <div className='w-full h-[100vh] sm:justify-center sm:content-center sm:bg-black flex flex-col justify-end '>

            </div> */}

            <div>
                <h1 className='text-[#710193] font-semibold text-[24px]'>Received Lunch</h1>
                <p className='text-[#110216] font-semibold mt-2 text-[15px]'>Esther Howard</p>
                <p className='text-[#87748C] font-medium text-[14px]'>Store Manager </p>
            </div>

            <div className='border-y-[0.2px] border-[#87748C] my-[16px] py-[8px] '>
                <p className='text-[#87748C] font-normal text-[14px]'>
                    <span className='text-[#FFA500] font-semibold text-[16px]'>Note: </span>
                    Your recent achievements have not only impressed me but have also had a positive impact on our entire team.
                    <div className='mb-4 w-full'></div>
                    To show my appreciation and recognize your outstanding efforts, I'd like to treat you to a well-deserved 'free lunch.' It's a small token of my admiration for all that you do.

                </p>
            </div>

            {/* Date Section */}
            <div className='flex justify-between items-center'>
                <span className='text-[#FFA500] font-semibold text-[16px]'>Date: </span>
                <span className='text-[#87748C] font-semibold text-[14px]'>14 - 09 - 2023 by 11 : 50 AM </span>
            </div>

            {/* Redeem Button Section */}
            <div>
                <button className='bg-[#7C149B] mb-5 text-white w-full h-[56px] rounded-[10px] text-[16px] font-semibold mt-16 hover:cursor-pointer '>Redeem Lunch</button>
            </div>

        </div >


    )
}

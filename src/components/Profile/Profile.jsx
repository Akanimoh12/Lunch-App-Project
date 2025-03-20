import React from 'react'

export default function Profile() {
    return (
        <div className='w-full h-[100vh] justify-center content-center bg-black '>

            {/* CONTAINER */}
            <div className='sm:w-[390px] w-full sm:m-auto m-0 bg-white rounded-2xl p-[24px] '>
                
                {/* Profile Section*/}
                <div className='grid grid-cols-4'>
                    
                    {/* Profile details and image */}
                    <div className='col-span-3 '>

                        <img src="/rebecaPics.png" alt="" />

                        <div className='mt-[8px]'>
                            <h1 className='text-[#710193] text-[15px] font-extrabold'>Rebecca Adeyoju</h1>
                            <p className='text-[#AD99B2] text-[10px]  '>Lab Analyst.</p>
                        </div>

                    </div>
                    
                    {/* Settings Icon */}
                    <div>
                        <h2>Great</h2>
                    </div>

                </div>
                {/* End for Profile Section */}

            </div>
            {/* END FOR CONTAINER */}

        </div>

    )
}

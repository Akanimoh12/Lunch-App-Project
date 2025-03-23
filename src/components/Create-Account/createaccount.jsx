import React from 'react'

function createaccount() {
  return (
    <div className='flex justify-center items-center min-h-screen max-w-[390px]'>
        <div className='justify-center text-center h-[100vh] top-59px'>
            <p className='text-[#710193] text-2xl font-sans w-[178px] h-[30px] mt-[49px] ml-[24px] flex gap-[8px]'>Create Account</p>

          
          {/* input field for organization and lunch price */}
          <div className="flex flex-col gap-2 mt-[50px]">
   <div>
    <p className="text-[#87748C] w-[170px] h-[30px] font-sans mt-2">Organization Name</p>
    <input className="w-[342px] h-[56px] rounded-[10px] border-[0.5px] text-[#87748C] focus:outline-[#87748C]" type="text" placeholder="" />
   </div>

   <div>
    <p className="text-[#87748C] w-[130px] h-[30px] font-sans mt-2">Lunch Price</p>
    <input className="w-[342px] h-[56px] rounded-[10px] border-[0.5px] text-[#87748C] focus:outline-[#87748C]" type="text" placeholder="$" />
  </div>
   </div>

   {/* create account and sign in */}
   <div>

     <div className='w-[324px] h-[56px] mt-[404px] ml-[24px] rounded-[10px] bg-[#7C149B]'>
        <button className='mt-[14px] text-center text-[#FFFCFD]'>Create Account</button>
     </div>
     
     <div className='flex gap-1 text-sm ml-[80px] mt-[10px] h-[15px]'>
        <p className='text-center'>Already have an account?</p>
        <p className='text-[#FFA500]'>sign in.</p>
     </div>
    
     </div>

        </div>
      
        
    </div>
  )
}

export default createaccount
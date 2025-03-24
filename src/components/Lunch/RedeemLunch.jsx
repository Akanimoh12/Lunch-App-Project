import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RedeemLunch() {
  const navigate = useNavigate();

  // State only for fields that need to be changed
  const [bankName, setBankName] = useState("");
  const accountNumber = "0198945933"; // Static value, no need for state
  const [lunchCount, setLunchCount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!bankName || !lunchCount || parseInt(lunchCount) <= 0) {
      alert("Please fill in all fields correctly.");
      return;
    }

    navigate("/success"); // Navigate to confirmation page
  };

  return (
    <div className="min-h-screen bg-black p-4 flex flex-col items-center relative  ">

      {/* Background Overlay */}
      <div className="absolute inset-0 h-auto bg-opacity-50 bg-white"></div>

      {/* Profile Section */}
      <div className="relative w-full max-w-sm  bg-opacity-10 p-6 z-10">

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

      </div>

      {/* Redeem Lunch Modal */}
      <div className="absolute bottom-2 w-full max-w-[390px] h-[543px] bg-[#FFFCFD] rounded-lg p-6  z-20">
        <button
          onClick={() => navigate("/home")}
          className="absolute top-4 right-4 text-[#87748C] h-[18px] w-[18px]"
        >
          <img src="cancel.svg" alt="" />
        </button>

        <h2 className="text-[24px] font-semibold text-[#710193]">Redeem Lunch</h2>

        <form onSubmit={handleSubmit} className="mt-4">
          <label className="block text-left text-[14px] text-[#87748C]">Enter Bank Name</label>
          <select
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
            className="w-full h-[56px] mt-1 p-2 border rounded"
          >
            <option value="">Select Bank</option>
            <option value="GTBank">GTBank</option>
            <option value="Zenith Bank">Zenith Bank</option>
            <option value="First Bank">First Bank</option>
          </select>

          <label className="block text-left text-[14px] text-[#87748C] mt-3">Enter Account Number</label>
          <input
            type="text"
            value={accountNumber}
            readOnly
            className="w-full h-[56px] mt-1 p-2 border rounded bg-gray-100"
          />

          <label className="block text-left text-[14px] text-[#87748C] mt-3">Enter the number of lunch to redeem</label>
          <input
            type="number"
            value={lunchCount}
            onChange={(e) => setLunchCount(e.target.value)}
            className="w-full h-[56px] mt-1 p-2 border rounded"
            placeholder="1"
          />

          <p className="w-[120px] p-[2px] rounded-[10px] text-[10px] bg-[#FFF2C2] text-[#FFA500] mt-3">1 lunch gives you ₦4200</p>

          <button
            type="submit"
            className="mt-4 bg-[#7C149B] text-white py-2 px-6 rounded-md w-full h-[56px]"
          >
            Withdraw
          </button>
        </form>

      </div>
    </div>
  );
}

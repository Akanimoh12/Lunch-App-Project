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

    navigate("/confirmation"); // Navigate to confirmation page
  };

  return (
    <div className="min-h-screen bg-white p-4 flex flex-col items-center relative">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-50"></div>

      {/* Profile Section */}
      <div className="relative h-[220px] w-full max-w-sm bg-gray-200 bg-opacity-10 p-6 text-center z-10">
        <div className="flex items-center space-x-4">
          <img
            src="/images/Frame 80.png" 
            alt="Profile"
            className="w-[62.52px] h-[62.52px] rounded-full  border-pink-200 border-4"
          />
          <div>
            <h3 className="text-[15px] font-semibold text-[#710193]">Rebecca Adeyoju</h3>
            <p className="text-[#AD99B2] text-[10px]">Lab Analyst.</p>
          </div>
          <button className="ml-auto text-white w-[31px] h-[19.5px]">⚙</button>
        </div>
        <div className="flex space-x-3 tracking-tighter mt-4">
          <div className="w-[115px] h-[68px]">
            <h4 className="text-[14px] font-semibold text-[#87748C]">87</h4>
            <p className="text-[14px] font-semibold text-[#87748C]">Total free lunches received</p>
          </div>
          <div className="w-[115px] h-[68px]">
            <h4 className="text-[14px] font-semibold text-[#87748C]">34</h4>
            <p className="text-[14px] font-semibold text-[#87748C]">Total free lunches given</p>
          </div>
        </div>
      </div>

      {/* Redeem Lunch Modal */}
      <div className="relative w-full max-w-[390px] h-[543px] bg-[#FFFCFD] shadow-lg rounded-lg p-6  z-20">
        <button
          onClick={() => navigate("/home")}
          className="absolute top-4 right-4 text-[#87748C] h-[18px] w-[18px]"
        >
          ✖
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

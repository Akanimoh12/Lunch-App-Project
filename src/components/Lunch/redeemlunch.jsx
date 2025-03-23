import { useState } from "react";

export default function RedeemLunch() {
  const [accountNumber, setAccountNumber] = useState("");
  const [bank, setBank] = useState("");
  const [lunchCount, setLunchCount] = useState("");
  const [isOpen, setIsOpen] = useState(true); // Controls visibility

  if (!isOpen) return null; // If closed, don't render the component

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-[342px] h-[520px] bg-white shadow-lg rounded-lg p-6 relative">
        {/* Exit Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 text-[#87748C] w-[20px] h-[20px]"
        >
          &times;
        </button>

        <h2 className="text-[24px] font-semibold text-[#710193] mb-4 ">Redeem Lunch</h2>

        {/* Bank Name Dropdown */}
        <label className="block text-[14px] font-medium text-[#87748C] mb-1">Enter Bank Name</label>
        <select
          value={bank}
          onChange={(e) => setBank(e.target.value)}
          className="w-full p-2 border rounded-[10px] h-[56px] mb-3 focus:ring focus:ring-purple-200"
        >
          <option value="">Select Bank</option>
          <option value="bank1">Bank 1</option>
          <option value="bank2">Bank 2</option>
        </select>

        {/* Account Number Input */}
        <label className="block text-[14px] font-medium text-[#87748C] mb-1">Enter Account Number</label>
        <input
          type="text"
          placeholder="12345678"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          className="w-full p-2 border rounded-[10px] h-[56px] mb-3 focus:ring focus:ring-purple-200"
        />

        {/* Fixed Name Display */}
        <div className="flex items-center justify-between  px-3 py-2 rounded-md text-[#110216] mb-2">
          Rebecca Adeyoju
          <input type="checkbox" checked readOnly className="h-4 w-4 text-purple-600" />
        </div>

        {/* Number of Lunches Input */}
        <label className="block text-[14px] font-medium text-[#403f41] mb-1">
          Enter the number of lunch to redeem
        </label>
        <input
          type="number"
          placeholder="Enter amount"
          value={lunchCount}
          onChange={(e) => setLunchCount(e.target.value)}
          className="w-full p-2 border rounded-[10px] h-[56px] mb-3 focus:ring focus:ring-purple-200"
        />

        {/* Lunch Conversion Info */}
        <div className="text-[10px] w-[150px]  bg-yellow-100 text-[#FFA500] w- py-2 px-3 rounded-md mb-3">
          1 lunch gives you <span className="font-semibold">₦4200</span>
        </div>

        {/* Withdraw Button */}
        <button className="w-full bg-[#7C149B] h-[56px] text-white py-2 rounded-md hover:bg-purple-800 transition">
          Withdraw
        </button>
      </div>
    </div>
  );
}

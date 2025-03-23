import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline"; // Import exit icon

const Lunch = () => {
  // State for managing the textarea content
  const [textareaValue, setTextareaValue] = useState('');

  // Function to handle exit (navigate back or close)
  const handleExit = () => {
    window.history.back(); // Go back to the previous page
  };

  // Function to handle form submission and reset textarea
  const handleSubmit = () => {
    // You can perform your submit logic here
    console.log("Submitting the form...");

    // Reset the textarea content
    setTextareaValue('');
  };

  // Function to handle changes in the textarea
  const handleTextareaChange = (e) => {
    setTextareaValue(e.target.value); // Update the state when the user types
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#FFFCFD] font-sans p-4">
      {/* Form Container */}
      <div className="bg-[#FFFCFD] w-full max-w-[390px] p-4 rounded-lg shadow-lg relative">
        
        {/* Exit Button (Top Right) */}
        <button onClick={handleExit} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
          <XMarkIcon className="w-6 h-6" />
        </button>

        {/* Title */}
        <h3 className="text-[#710193] text-[24px] font-bold mb-3">Give free lunch</h3>

        {/* Profile Section */}
        <div className="flex items-center gap-2 mb-4">
          <img
            src="/images/Frame 80.png"
            alt="Esther Howard"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-[#110216] font-semibold text-[15px]">Esther Howard</p>
            <p className="text-[#87748C] text-[14px] font-bold">Account Department</p>
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="border-t border-gray-300 my-3" />

        {/* Text Area */}
        <p className="text-[14px] text-[#87748C] mb-2">Type the reason for free lunch</p>
        <textarea
          className="w-full p-3 rounded-[10px] bg-gray-100 outline-none h-[230px] resize-none"
          placeholder=""
          value={textareaValue} // Bind the state value to the textarea
          onChange={handleTextareaChange} // Update the state on input change
        ></textarea>

        {/* Submit Button */}
        <button 
          onClick={handleSubmit} 
          className="w-full bg-[#7C149B] text-white p-3 rounded-[10px] mt-4 h-[56px]"
        >
          Give free lunch
        </button>
      </div>
    </div>
  );
};

export default Lunch;

export default function LunchRedeemed() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-orange-100 p-4">
      {/* Card with Background Image */}
      <div
        className="w-full max-w-[390px] h-[555px] shadow-lg rounded-lg p-6 text-center relative"
        style={{
          backgroundImage: "url('/images/background.jpeg')", // Use uploaded image
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#FED7AA", // Fallback background
        }}
      >
        {/* Icon Section (Replaces Large Checkmark Icon) */}
        <div className="relative flex items-center justify-center w-[190px] h-[190px] mx-auto mt-8">
          <img src="/images/Ellipse 7.png" alt="Ellipse" className="absolute w-full h-full" />
          <img src="/images/Vector.png" alt="Vector" className="w-14 h-14 z-14" />
        </div>

        {/* Success Message */}
        <h2 className="text-[24px] font-bold text-[#710193] mt-4">Lunch Redeemed!</h2>
        <p className="text-[#87748C] text-[14px] mt-20 font-bold">You have successfully redeemed 2 free lunches.</p>
        <p className="text-[#FFA500] font-bold text-[14px] mt-1">(₦4,400)</p>

        {/* Button */}
        <button className="w-[342px] h-[56px] mt-6 bg-gray-100 text-[#710193] py-2 px-4 rounded-[10px] border border-purple-500">
          Go to home page
        </button>
      </div>
    </div>
  );
}

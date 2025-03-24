import { Link } from 'react-router-dom';

const Otp = () => {
  return (
    <div className='bg-[#710193] h-[100vh] sm:content-center'>
      <div className='w-full min-h-[90vh] smmin-h-[90vh] sm:rounded-[15px] flex flex-col max-w-[390px] pb-3.5 mx-auto overflow-hidden bg-white'>

        <div className="flex flex-col flex-grow items-start px-4 ">

          <div className="w-full text-left mb-8 mt-14">
            <h1 className="text-2xl md:text-3xl font-bold text-[#710193]">OTP</h1>
            <p className="mt-2 text-[14px] text-[#87748C] mb-10">
              A 6 digit OTP code has been sent to your organization, kindly enter the code.
            </p>
          </div>

          <div className="flex justify-center w-full">
            <div className='grid grid-cols-6  rounded-[10px] justify-center space-x-2 w-full'>
              {Array.from({ length: 6 }).map((_, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  className="w-[43.66666793823242px] shadow h-[56px] border border-gray-300 rounded text-center text-xl focus:outline-none focus:border-[#710193]"
                />
              ))}
            </div>
          </div>

        </div>

        <Link to='/home'>
          <div className="w-full px-3 mb-4">
            <button
              className="w-full h-[56px] bg-[#710193] text-center text-white rounded-[10px] text-[16px] font-semibold"
            >
              Continue
            </button>
            </div>

        </Link>


        <p className="mt-4 text-center text-sm text-[#87748C]">
          Already have an account?{' '}
          <a href="/signin" className="text-[#FFA500] font-semibold">
            Sign In
          </a>
        </p>
      </div>
    </div>

    
  );
};

export default Otp;
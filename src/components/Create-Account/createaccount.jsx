import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateAccount() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ organization: '', lunchPrice: '' });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    if (!formData.organization.trim()) {
      formErrors.organization = 'Organization name is required';
    }
    if (!formData.lunchPrice.trim()) {
      formErrors.lunchPrice = 'Lunch price is required';
    } else if (isNaN(formData.lunchPrice) || Number(formData.lunchPrice) <= 0) {
      formErrors.lunchPrice = 'Enter a valid price';
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate('/dashboard'); // Navigate to the required page
    }
  };

  return (
    <div className='w-full h-[100vh] sm:justify-center sm:content-center '>
    <div className='sm:w-[390px] bg-[url(/dotted.svg)] sm:h-auto h-full w-full sm:m-auto m-0 rounded-2xl p-[24px] sm:border-[1px] sm:border-[#F0E8F2]'>
      <p className='text-[#710193] text-2xl font-sans w-[178px] h-[30px] mt-[49px] flex gap-[8px]'>Sign In</p>

      <div className='flex flex-col gap-2 mt-[50px]'>
        <div>
          <p className='text-[#87748C] w-[170px] h-[30px] font-sans mt-2 '>Email</p>
          <input
            className='w-[342px] h-[56px] rounded-[10px] border-[0.5px] text-[#87748C] focus:outline-[#87748C]'
            type='text'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder=''
          />
          {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
        </div>

        <div>
          <p className='text-[#87748C] w-[130px] h-[30px] font-sans mt-2'>Password</p>
          <input
            className='w-[342px] h-[56px] rounded-[10px] border-[0.5px] text-[#87748C] focus:outline-[#87748C]'
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            placeholder=''
          />
          {errors.password && <p className='text-red-500 text-sm'>{errors.password}</p>}
        </div>
      </div>

      <div>
        <div className=' content-center text-center w-full h-[56px] mt-[404px]  rounded-[10px]  bg-[#7C149B]'>
          <button className='text-center  text-[#FFFCFD]' onClick={handleSubmit}>Create Account</button>
        </div>

        <div className='flex gap-1 text-sm ml-[80px] mt-[10px] h-[15px]'>
          <p className='text-center'>Don't have an account?</p>
          <p className='text-[#FFA500] cursor-pointer' onClick={() => navigate('/signup')}>Sign up</p>
        </div>
      </div>
    </div>
  </div>
  );
}

export default CreateAccount;
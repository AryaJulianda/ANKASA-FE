'use client'
import React from "react"
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/high-res.css'

const BiodataProfile = () => {
  return (
    <div className="bg-white w-full rounded-2xl shadow-xl px-7 py-8 h-fit // max-xl:p-6">
      <p className="text-primary font-semibold text-2xl mb-7">Profile</p>
      <div className="flex flex-row gap-7 w-full // max-xl:gap-5 // max-sm:flex-col max-sm:gap-10">
        {/* Contact */}
        <div className="flex flex-col  gap-6 w-full">
          <p className="font-semibold text-base">Contact</p>
          <div className="flex flex-col">
            <label className="px-4 text-sm text-41 // max-xl:px-2">Email</label>
            <input 
              type="email" name="name" placeholder='Email'
              className='border-b-2 border-gray-300 p-4 text-base focus:outline-none focus:border-primary // max-xl:p-2'
            /> 
          </div>
          <div>
            <label className="px-4 text-sm text-41 // max-xl:px-2">Phone Number</label>
            <PhoneInput
              country={'id'}
              containerClass='p-2 border-b-2 border-gray-300'
              inputStyle={{border:'none',width:'100%'}}
              buttonStyle={{border:'none',backgroundColor:'white'}}
            />      
          </div>
        </div>
        {/* Biodata */}
        <div className="flex flex-col  gap-6 w-full">
          <p className="font-semibold text-base">Biodata</p>
          <div className="flex flex-col">
            <label className="px-4 text-sm text-41 // max-xl:px-2">Fullname</label>
            <input 
              type="text" name="name" placeholder='Fullname' 
              className='border-b-2 border-gray-300 p-4 text-base focus:outline-none focus:border-primary // max-xl:p-2'
            /> 
          </div>
          <div className="flex flex-col">
            <label className="px-4 text-sm text-41 // max-xl:px-2">City</label>
            <input 
              type="text" name="city" placeholder='City' 
              className='border-b-2 border-gray-300 p-4 text-base focus:outline-none focus:border-primary // max-xl:p-2'
            /> 
          </div>
          <div className="flex flex-col">
            <label className="px-4 text-sm text-41 // max-xl:px-2">Address</label>
            <input 
              type="text" name="address" placeholder='Address'
              className='border-b-2 border-gray-300 p-4 text-base focus:outline-none focus:border-primary // max-xl:p-2'
            /> 
          </div>
          <div className="flex flex-col">
            <label className="px-4 text-sm text-41 // max-xl:px-2">Post Code</label>
            <input 
              type="number" name="postcode" placeholder='Post Code' 
              className='border-b-2 border-gray-300 p-4 text-base focus:outline-none focus:border-primary // max-xl:p-2 remove-arrow'
            /> 
          </div>

        </div>
      </div>
      <div className="w-full text-center mt-10">
        <button className="text-white px-10 py-4 bg-primary rounded-xl hover:shadow-lg hover:shadow-primary // max-xl:py-3">Save</button>
      </div>
    </div>
  )
};

export default BiodataProfile;
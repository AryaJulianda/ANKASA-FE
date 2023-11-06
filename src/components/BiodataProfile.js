'use client'
import React from "react"
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/high-res.css'

const BiodataProfile = () => {
  return (
    <div className="w-full py-8 bg-white shadow-xl rounded-2xl px-7 h-fit // max-xl:p-6">
      <p className="text-2xl font-semibold text-primary mb-7">Profile</p>
      <div className="flex flex-row w-full gap-7 // max-xl:gap-5 max-sm:flex-col max-sm:gap-10">
        {/* Contact */}
        <div className="flex flex-col w-full gap-6">
          <p className="text-base font-semibold">Contact</p>
          <div className="flex flex-col">
            <label className="px-4 text-sm text-41 // max-xl:px-2">Email</label>
            <input 
              type="email" name="name" placeholder='Email'
              className='p-4 text-base border-b-2 border-gray-300 focus:outline-none focus:border-primary // max-xl:p-2'
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
        <div className="flex flex-col w-full gap-6">
          <p className="text-base font-semibold">Biodata</p>
          <div className="flex flex-col">
            <label className="px-4 text-sm text-41 // max-xl:px-2">Fullname</label>
            <input 
              type="text" name="name" placeholder='Fullname' 
              className='p-4 text-base border-b-2 border-gray-300 focus:outline-none focus:border-primary // max-xl:p-2'
            /> 
          </div>
          <div className="flex flex-col">
            <label className="px-4 text-sm text-41 // max-xl:px-2">City</label>
            <input 
              type="text" name="city" placeholder='City' 
              className='p-4 text-base border-b-2 border-gray-300 focus:outline-none focus:border-primary // max-xl:p-2'
            /> 
          </div>
          <div className="flex flex-col">
            <label className="px-4 text-sm text-41 // max-xl:px-2">Address</label>
            <input 
              type="text" name="address" placeholder='Address'
              className='p-4 text-base border-b-2 border-gray-300 focus:outline-none focus:border-primary // max-xl:p-2'
            /> 
          </div>
          <div className="flex flex-col">
            <label className="px-4 text-sm text-41 // max-xl:px-2">Post Code</label>
            <input 
              type="number" name="postcode" placeholder='Post Code' 
              className='p-4 text-base border-b-2 border-gray-300 focus:outline-none focus:border-primary // max-xl:p-2 remove-arrow'
            /> 
          </div>

        </div>
      </div>
      <div className="w-full mt-10 text-center">
        <button className="px-10 py-4 text-white bg-primary rounded-xl hover:shadow-lg hover:shadow-primary // max-xl:py-3">Save</button>
      </div>
    </div>
  )
};

export default BiodataProfile;
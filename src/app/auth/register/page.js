'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


const Page = () => {

  const [showPassword,setShowPassword] = useState(false);

  const handleShowPassword = () => {
    showPassword ? setShowPassword(false) : setShowPassword(true)
  }

  return (
    <main className="flex min-h-screen flex-row">
      <hero className="w-3/5 max-xl:w-1/2 max-md:hidden min-h-full bg-primary flex justify-center items-center">
        <div className='relative'>
          <Image src="/cloud.svg" className="w-96" width={1} height={1} />
          <Image src='/logo-w4.svg' className='absolute top-12 right-28 w-10' width={1} height={1}/>
          <Image src='/logo-w1.svg' className='absolute top-36 right-28 w-52' width={1} height={1}/>
          <Image src='/logo-w2.svg' className='absolute top-40 right-4 w-16' width={1} height={1}/>
          <Image src='/logo-w3.svg' className='absolute bottom-4 left-10 w-16' width={1} height={1}/>
        </div>
      </hero>
      
      <div className='w-2/5 max-xl:w-1/2 max-md:w-full min-h-full flex flex-col justify-center relative px-10 max-sm:px-7 py-10'>
      <div className='flex flex-row max-sm:flex-col max-sm:py-5 py-10 items-center max-sm:justify-center gap-3'>
          <Image src="/logo-b.svg" alt="logo" className='w-10 h-10 mr-3 max-sm:mr-1' width={1} height={1}/>
          <h1 className='font-semibold text-2xl text-gray-700'>Ankasa</h1>
        </div>

        <div className=''>
          <h1 className='text-4xl max-sm:text-2xl max-sm:text-center font-semibold py-8 text-primary'>Register</h1>
          <form className='flex flex-col gap-5'>
            <input 
              type="text" name="name" placeholder='Full Name' 
              className='border-b-2 border-gray-300 p-4 text-base focus:outline-none focus:border-primary'
            />

            <input 
              type="text" name="email" placeholder='Email'
              className='border-b-2 border-gray-300 p-4 text-base focus:outline-none focus:border-primary'
            />         
          
            <div className='relative'>
              <input 
                type={showPassword ? "text" : "password"} name="password" placeholder='Password' 
                className='border-b-2 border-gray-300 p-4 text-base focus:outline-none focus:border-primary w-full'
              />
              <Image src='/see.svg' className='absolute top-0 right-0 p-4 w-14' width={1} height={1} onClick={handleShowPassword}/>
            </div>
          
            <button type="submit" className='bg-primary text-white py-4 font-bold rounded-xl mt-4 mb-0'>
              Sing Up
            </button>

            <div className="form-group form-check">
              <input name="acceptTerms" type="checkbox" className='mr-4 w-4 h-4 checked:bg-primary border-primary'/>
              <label htmlFor="acceptTerms" className="">Accept Terms & Conditions</label>
            </div>

            <div className='border-t-2 border-gray-300 text-center mx-5 py-4 mt-5'>
              <p>Already have an account</p>
            </div>

            <Link href="/auth/login" type="submit" className='text-primary bg-white py-4 font-bold rounded-xl border-2 border-primary text-center'>
              Sing In
            </Link>

          </form>
        </div>

      </div>
    </main>
  )
};

export default Page;

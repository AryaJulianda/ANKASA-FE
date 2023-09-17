"use client"

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'
import Image from 'next/image';
import Filter from '@/components/Filter';
import { useState } from 'react';

const Search = () => {

  const [showFilter,setShowFilter]= useState(true)

  const handleShowFilter = () => {
    setShowFilter(!showFilter)
    console.log('kons')
  }

  return (
    <div>
      <Navbar/>
      <main className='pt-28 / max-xl:pt-20 / max-sm:pt-16'>
        {/* bluebox */}
        <div className='bg-primary py-10 px-16 flex flex-row items-center rounded-b-3xl shadow-2xl / max-xl:py-5 max-xl:px-8 / max-sm:py-2 max-sm:px-4 max-sm:-mt-2'>
          {/* plane */}
          <Image src="/logo-w1.svg" width={50} height={50} className='mr-5 max-sm:hidden'></Image>
          {/* from to */}
          <div className='w-fit / max-sm:w-full'>
            <div className="flex flex-row justify-between py-3 gap-10 items-end / max-sm:gap-2 ">
              <div className="text-left">
                <p className="text-sm text-white mb-2">From</p>
                <h1 className="text-lg font-semibold text-white / max-sm:text-base">Medan ( IDN )</h1>
              </div>
              <Image src='/switch-w.svg' width={17} height={17} className='mb-2'/>
              <div className="text-right">
                <p className="text-sm text-white mb-2">To</p>
                <h1 className="text-lg font-semibold text-white / max-sm:text-base">Tokyo ( JPN )</h1>
              </div>
            </div>
            <p className='font-thin text-sm text-white / max-sm:text-xs max-sm:text-center max-sm:py-2 max-sm:border-t-2 border-white'>Monday, 20 July 2023 <span className='text-white mx-2'>●</span> 6 Passenger <span className='text-white mx-2'>●</span> Economy</p>
          </div>
          {/* change btn */}
          <button className='text-white text-base font-semibold ml-auto / max-sm:hidden'>Change Search</button>

        </div>

        {/* main */}
        <div className='bg-[#F5F6FA] w-full px-16 flex flex-row gap-6 / max-xl:px-8 max-xl:gap-4 / max-sm:px-4 max-sm:flex-col'>
          
          {/* filter */}
          <div className={showFilter ? 'w-[30%] py-5 / max-sm:w-full ' : 'hidden'}>
            <Filter />
          </div>

          {/* select ticket */}
          <div className='w-[70%] flex flex-col gap-5 py-5 // max-sm:w-full'>
            {/* head st */}
            <div className='flex flex-row justify-between'>
              <h2 className='font-semibold text-2xl / max-xl:text-xl'>Select Ticket</h2>
              <button className='text-base font-semibold / max-sm:hidden'>Sort By</button>
              <button className='text-base font-semibold hidden / max-sm:inline-block' onClick={handleShowFilter}>{showFilter ? `Hide Filter` : `Show Filter`}</button>
            </div>

            {/* list ticket */}
            <div className='bg-white p-7 rounded-2xl shadow-xl flex flex-col gap-2 w-full / max-sm:p-5 max-sm:gap-0'>

              {/* head */}
              <div className='w-full rounded-2xl flex flex-row items-center gap-7 // max-sm:gap-2'>
                <Image src='/garuda.jpg' width={100} height={100} className='max-sm:w-10'/>
                <p className='font-semibold text-base text-41 // max-sm:text-sm'>Garuda Indonesia</p>
              </div>


              {/* info */}
              <div className='flex flex-row justify-between items-center // max-sm:flex-wrap'>
                {/* from to */}
                <div className='w-fit '>
                  <div className="flex flex-row justify-between py-3 gap-10 items-center / max-xl:gap-4">
                    <div className="text-left">
                      <h1 className="text-xl font-medium text-black">IDN</h1>
                      <p className="text-xs font-extralight text-[#6B6B6B] mb-2">12.33</p>
                    </div>
                    <Image src='/plane.svg' width={20} height={20} className='mb-2'/>
                    <div className="text-right">
                      <h1 className="text-xl font-medium text-black">JPN</h1>
                      <p className="text-xs font-extralight text-[#6B6B6B] mb-2">15.21</p>
                    </div>
                  </div>
                </div>
                {/* times */}
                <p className='text-41 text-base text-center w-fit / max-xl:text-sm  / max-sm:mr-3'>3 hours 11 minutes<br/>
                <span className='text-41 text-sm text-center / max-xl:text-xs'>(1 transit)</span></p>
                {/* fasilitas */}
                <div className='flex flex-row gap-3 / max-xl:hidden'>
                  <Image src='/koper.svg' width={26} height={26} className='max-xl:w-5'/>
                  <Image src='/food.svg' width={26} height={26} className='max-xl:w-5'/>
                  <Image src='/wifi.svg' width={26} height={26} className='max-xl:w-5'/>
                </div>
                {/* cost */}
                <p className='text-primary text-base font-medium'>$ 214,00 <span className='text-41'>/ pax</span></p>
                {/* button */}
                <button className='bg-primary rounded-xl text-white font-bold text-base px-12 py-3 shadow-md shadow-primary'>Select</button>
              </div>

              {/* view detail */}
              <div className='flex flex-row justify-between items-center // max-sm:hidden'>
                {/* view button */}
                <button className='flex flex-row w-fit gap-4 items-center '>
                  <p className='text-primary font-semibold text-base'>View Detail</p>
                  <Image src='/arrow.svg' width={10} height={10} className='rotate-90'/>
                </button>

                {/* fasilitas */}
                <div className='hidden  max-xl:flex flex-row gap-3 / max-xl:gap-1'>
                  <Image src='/koper.svg' width={26} height={26} className='max-xl:w-5'/>
                  <Image src='/food.svg' width={26} height={26} className='max-xl:w-5'/>
                  <Image src='/wifi.svg' width={26} height={26} className='max-xl:w-5'/>
                </div>
              </div>
            </div>

            {/* list ticket */}
            <div className='bg-white p-7 rounded-2xl shadow-xl flex flex-col gap-2 w-full / max-sm:p-5 max-sm:gap-0'>

              {/* head */}
              <div className='w-full rounded-2xl flex flex-row items-center gap-7 // max-sm:gap-2'>
                <Image src='/garuda.jpg' width={100} height={100} className='max-sm:w-10'/>
                <p className='font-semibold text-base text-41 // max-sm:text-sm'>Garuda Indonesia</p>
              </div>


              {/* info */}
              <div className='flex flex-row justify-between items-center // max-sm:flex-wrap'>
                {/* from to */}
                <div className='w-fit '>
                  <div className="flex flex-row justify-between py-3 gap-10 items-center / max-xl:gap-4">
                    <div className="text-left">
                      <h1 className="text-xl font-medium text-black">IDN</h1>
                      <p className="text-xs font-extralight text-[#6B6B6B] mb-2">12.33</p>
                    </div>
                    <Image src='/plane.svg' width={20} height={20} className='mb-2'/>
                    <div className="text-right">
                      <h1 className="text-xl font-medium text-black">JPN</h1>
                      <p className="text-xs font-extralight text-[#6B6B6B] mb-2">15.21</p>
                    </div>
                  </div>
                </div>
                {/* times */}
                <p className='text-41 text-base text-center w-fit / max-xl:text-sm  / max-sm:mr-3'>3 hours 11 minutes<br/>
                <span className='text-41 text-sm text-center / max-xl:text-xs'>(1 transit)</span></p>
                {/* fasilitas */}
                <div className='flex flex-row gap-3 / max-xl:hidden'>
                  <Image src='/koper.svg' width={26} height={26} className='max-xl:w-5'/>
                  <Image src='/food.svg' width={26} height={26} className='max-xl:w-5'/>
                  <Image src='/wifi.svg' width={26} height={26} className='max-xl:w-5'/>
                </div>
                {/* cost */}
                <p className='text-primary text-base font-medium'>$ 214,00 <span className='text-41'>/ pax</span></p>
                {/* button */}
                <button className='bg-primary rounded-xl text-white font-bold text-base px-12 py-3 shadow-md shadow-primary'>Select</button>
              </div>

              {/* view detail */}
              <div className='flex flex-row justify-between items-center // max-sm:hidden'>
                {/* view button */}
                <button className='flex flex-row w-fit gap-4 items-center '>
                  <p className='text-primary font-semibold text-base'>View Detail</p>
                  <Image src='/arrow.svg' width={10} height={10} className='rotate-90'/>
                </button>

                {/* fasilitas */}
                <div className='hidden  max-xl:flex flex-row gap-3 / max-xl:gap-1'>
                  <Image src='/koper.svg' width={26} height={26} className='max-xl:w-5'/>
                  <Image src='/food.svg' width={26} height={26} className='max-xl:w-5'/>
                  <Image src='/wifi.svg' width={26} height={26} className='max-xl:w-5'/>
                </div>
              </div>
            </div>

            {/* list ticket */}
            <div className='bg-white p-7 rounded-2xl shadow-xl flex flex-col gap-2 w-full / max-sm:p-5 max-sm:gap-0'>

              {/* head */}
              <div className='w-full rounded-2xl flex flex-row items-center gap-7 // max-sm:gap-2'>
                <Image src='/garuda.jpg' width={100} height={100} className='max-sm:w-10'/>
                <p className='font-semibold text-base text-41 // max-sm:text-sm'>Garuda Indonesia</p>
              </div>


              {/* info */}
              <div className='flex flex-row justify-between items-center // max-sm:flex-wrap'>
                {/* from to */}
                <div className='w-fit '>
                  <div className="flex flex-row justify-between py-3 gap-10 items-center / max-xl:gap-4">
                    <div className="text-left">
                      <h1 className="text-xl font-medium text-black">IDN</h1>
                      <p className="text-xs font-extralight text-[#6B6B6B] mb-2">12.33</p>
                    </div>
                    <Image src='/plane.svg' width={20} height={20} className='mb-2'/>
                    <div className="text-right">
                      <h1 className="text-xl font-medium text-black">JPN</h1>
                      <p className="text-xs font-extralight text-[#6B6B6B] mb-2">15.21</p>
                    </div>
                  </div>
                </div>
                {/* times */}
                <p className='text-41 text-base text-center w-fit / max-xl:text-sm  / max-sm:mr-3'>3 hours 11 minutes<br/>
                <span className='text-41 text-sm text-center / max-xl:text-xs'>(1 transit)</span></p>
                {/* fasilitas */}
                <div className='flex flex-row gap-3 / max-xl:hidden'>
                  <Image src='/koper.svg' width={26} height={26} className='max-xl:w-5'/>
                  <Image src='/food.svg' width={26} height={26} className='max-xl:w-5'/>
                  <Image src='/wifi.svg' width={26} height={26} className='max-xl:w-5'/>
                </div>
                {/* cost */}
                <p className='text-primary text-base font-medium'>$ 214,00 <span className='text-41'>/ pax</span></p>
                {/* button */}
                <button className='bg-primary rounded-xl text-white font-bold text-base px-12 py-3 shadow-md shadow-primary'>Select</button>
              </div>

              {/* view detail */}
              <div className='flex flex-row justify-between items-center // max-sm:hidden'>
                {/* view button */}
                <button className='flex flex-row w-fit gap-4 items-center '>
                  <p className='text-primary font-semibold text-base'>View Detail</p>
                  <Image src='/arrow.svg' width={10} height={10} className='rotate-90'/>
                </button>

                {/* fasilitas */}
                <div className='hidden  max-xl:flex flex-row gap-3 / max-xl:gap-1'>
                  <Image src='/koper.svg' width={26} height={26} className='max-xl:w-5'/>
                  <Image src='/food.svg' width={26} height={26} className='max-xl:w-5'/>
                  <Image src='/wifi.svg' width={26} height={26} className='max-xl:w-5'/>
                </div>
              </div>
            </div>


          </div>


        </div>
      </main>
      <Footer/>
    </div>
  )
};

export default Search;

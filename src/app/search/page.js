"use client"

import Footer from '@/components/Footer';
import MultiRangeSlider from '@/components/MultiRangeSlider';
import Navbar from '@/components/Navbar'
import Image from 'next/image';
import { useState } from 'react';

const Search = () => {

  const [openTransit,setOpenTransit] = useState(false)
  const [openFacilities,setOpenFacilities] = useState(false)
  const [openDepTime,setOpenDepTime] = useState(false)
  const [openAriveTime,setOpenAriveTime] = useState(false)
  const [openAirlines,setOpenAirlines] = useState(false)
  const [openTicketPrice,setOpenTicketPrice] = useState(false)

  const handleOpenDropdown = (state,setState) => {
    setState(!state)
  }

  return (
    <div>
      <Navbar/>
      <main className='pt-28 '>
        {/* bluebox */}
        <div className='bg-primary py-10 px-16 flex flex-row items-center rounded-b-3xl shadow-2xl'>
          {/* plane */}
          <Image src="/logo-w1.svg" width={50} height={50} className='mr-5'></Image>
          {/* from to */}
          <div className='w-fit'>
            <div className="flex flex-row justify-between py-3 gap-10 items-end">
              <div className="text-left">
                <p className="text-sm text-white mb-2">From</p>
                <h1 className="text-lg font-semibold text-white">Medan ( IDN )</h1>
              </div>
              <Image src='/switch-w.svg' width={17} height={17} className='mb-2'/>
              <div className="text-right">
                <p className="text-sm text-white mb-2">To</p>
                <h1 className="text-lg font-semibold text-white">Tokyo ( JPN )</h1>
              </div>
            </div>
            <p className='font-thin text-sm text-white'>Monday, 20 July 2023 <span className='text-white mx-2'>●</span> 6 Passenger <span className='text-white mx-2'>●</span> Economy</p>
          </div>
          {/* change btn */}
          <button className='text-white text-base font-semibold ml-auto'>Change Search</button>

        </div>

        {/* main */}
        <div className='bg-[#F5F6FA] w-full px-16 flex flex-row gap-6'>
          
          {/* filter */}
          <div className=' w-[30%] py-5'>
            {/* head filter */}
            <div className='flex flex-row justify-between'>
              <h2 className='font-semibold text-2xl'>Filter</h2>
              <button className='text-primary text-base font-semibold'>Reset</button>
            </div> 
            {/* filter column */}
            <div className='w-full px-7 my-5 bg-white rounded-xl shadow-xl'>
              
              <div className='border-b'>{/* transit */}
                <button className='flex flex-row justify-between w-full py-5 pr-[3px]' onClick={()=>handleOpenDropdown(openTransit,setOpenTransit)}>
                  <p className='text-base font-semibold'>Transit</p>
                  <Image src='/arrow.svg' width={10} height={10} className={openTransit ? '-rotate-90' : 'rotate-90'}></Image>
                </button>
                {openTransit && 
                <div className='flex flex-col'>
                  <div className='flex flex-row justify-between w-full items-center mb-5'>
                    <label className='text-sm' htmlFor='direct' >Direct</label><input type="checkbox" name="" id="direct" className='w-4 h-4'/>
                  </div>
                  <div className='flex flex-row justify-between w-full items-center mb-5'>
                    <label className='text-sm' htmlFor='transit' >Transit</label><input type="checkbox" name="" id="transit" className='w-4 h-4'/>
                  </div>
                  <div className='flex flex-row justify-between w-full items-center mb-5'>
                    <label className='text-sm' htmlFor='transit2' >Transit 2+</label><input type="checkbox" name="" id="transit2" className='w-4 h-4'/>
                  </div>
                </div>}
              </div>
              
              <div className='border-b'>{/* Facilities */}
                <button className='flex flex-row justify-between w-full py-5 pr-[3px]' onClick={()=>handleOpenDropdown(openFacilities,setOpenFacilities)}>
                  <p className='text-base font-semibold'>Facilities</p>
                  <Image src='/arrow.svg' width={10} height={10} className={openFacilities ? '-rotate-90' : 'rotate-90'}></Image>
                </button>
                {openFacilities && 
                <div className='flex flex-col'>
                  <div className='flex flex-row justify-between w-full items-center mb-5'>
                    <label className='text-sm' htmlFor='luggage' >Luggage</label><input type="checkbox" name="" id="luggage" className='w-4 h-4'/>
                  </div>
                  <div className='flex flex-row justify-between w-full items-center mb-5'>
                    <label className='text-sm' htmlFor='meal' >In-Flight Meal</label><input type="checkbox" name="" id="meal" className='w-4 h-4'/>
                  </div>
                  <div className='flex flex-row justify-between w-full items-center mb-5'>
                    <label className='text-sm' htmlFor='wifi' >Wi-fi</label><input type="checkbox" name="" id="wifi" className='w-4 h-4'/>
                  </div>
                </div>}
              </div>
              
              <div className='border-b'>{/* Departure Time */}
                <button className='flex flex-row justify-between w-full py-5 pr-[3px]' onClick={()=>handleOpenDropdown(openDepTime,setOpenDepTime)}>
                  <p className='text-base font-semibold'>Departure Time</p>
                  <Image src='/arrow.svg' width={10} height={10} className={openDepTime ? '-rotate-90' : 'rotate-90'}></Image>
                </button>
                {openDepTime && 
                <div className='flex flex-col'>
                  <div className='flex flex-row justify-between w-full items-center mb-5'>
                    <label className='text-sm' htmlFor='0-6' >00:00 - 06:00</label><input type="checkbox" name="" id="0-6" className='w-4 h-4'/>
                  </div>
                  <div className='flex flex-row justify-between w-full items-center mb-5'>
                    <label className='text-sm' htmlFor='6-12' >06:00 - 12:00</label><input type="checkbox" name="" id="6-12" className='w-4 h-4'/>
                  </div>
                  <div className='flex flex-row justify-between w-full items-center mb-5'>
                    <label className='text-sm' htmlFor='12-18' >12:00 - 18:00</label><input type="checkbox" name="" id="12-18" className='w-4 h-4'/>
                  </div>
                  <div className='flex flex-row justify-between w-full items-center mb-5'>
                    <label className='text-sm' htmlFor='18-24' >18:00 - 24:00</label><input type="checkbox" name="" id="18-24" className='w-4 h-4'/>
                  </div>
                </div>}
              </div>
              
              <div className='border-b'>{/* Time Arrived */}
                <button className='flex flex-row justify-between w-full py-5 pr-[3px]' onClick={()=>handleOpenDropdown(openAriveTime,setOpenAriveTime)}>
                  <p className='text-base font-semibold'>Time Arrived</p>
                  <Image src='/arrow.svg' width={10} height={10} className={openAriveTime ? '-rotate-90' : 'rotate-90'}></Image>
                </button>
                {openAriveTime && 
                <div className='flex flex-col'>
                  <div className='flex flex-row justify-between w-full items-center mb-5'>
                    <label className='text-sm' htmlFor='0-6' >00:00 - 06:00</label><input type="checkbox" name="" id="0-6" className='w-4 h-4'/>
                  </div>
                  <div className='flex flex-row justify-between w-full items-center mb-5'>
                    <label className='text-sm' htmlFor='6-12' >06:00 - 12:00</label><input type="checkbox" name="" id="6-12" className='w-4 h-4'/>
                  </div>
                  <div className='flex flex-row justify-between w-full items-center mb-5'>
                    <label className='text-sm' htmlFor='12-18' >12:00 - 18:00</label><input type="checkbox" name="" id="12-18" className='w-4 h-4'/>
                  </div>
                  <div className='flex flex-row justify-between w-full items-center mb-5'>
                    <label className='text-sm' htmlFor='18-24' >18:00 - 24:00</label><input type="checkbox" name="" id="18-24" className='w-4 h-4'/>
                  </div>
                </div>}
              </div>

              <div className='border-b'>{/* Airlines */}
                <button className='flex flex-row justify-between w-full py-5 pr-[3px]' onClick={()=>handleOpenDropdown(openAirlines,setOpenAirlines)}>
                  <p className='text-base font-semibold'>Airlines</p>
                  <Image src='/arrow.svg' width={10} height={10} className={openAirlines ? '-rotate-90' : 'rotate-90'}></Image>
                </button>
                {openAirlines && 
                <div className='flex flex-col'>
                  <div className='flex flex-row justify-between w-full items-center mb-5'>
                    <label className='text-sm' htmlFor='garudaId' >Garuda Indonesia</label><input type="checkbox" name="" id="garudaId" className='w-4 h-4'/>
                  </div>
                  <div className='flex flex-row justify-between w-full items-center mb-5'>
                    <label className='text-sm' htmlFor='airAsia' >Air Asia</label><input type="checkbox" name="" id="airAsia" className='w-4 h-4'/>
                  </div>
                  <div className='flex flex-row justify-between w-full items-center mb-5'>
                    <label className='text-sm' htmlFor='lionAir' >Lion Air</label><input type="checkbox" name="" id="lionAir" className='w-4 h-4'/>
                  </div>
                </div>}
              </div>

              <div className='border-b'>{/* Ticket Price */}
                <button className='flex flex-row justify-between w-full py-5 pr-[3px]' onClick={()=>handleOpenDropdown(openTicketPrice,setOpenTicketPrice)}>
                  <p className='text-base font-semibold'>Ticket Price</p>
                  <Image src='/arrow.svg' width={10} height={10} className={openTicketPrice ? '-rotate-90' : 'rotate-90'}></Image>
                </button>
                {openTicketPrice && 
                <div className='flex flex-col'>
                  <div className='flex flex-row justify-between'>
                    <p className='color-41 text-xs'>Lowest</p>
                    <p className='color-41 text-xs'>Highest</p>
                  </div>
                  <MultiRangeSlider
                    min={0}
                    max={1000}
                    onChange={({ min, max }) => {return {min,max}}}
                  />
                </div>}
              </div>

            </div>
          </div>



          {/* select ticket */}
          <div className='w-[70%] flex flex-col gap-5 py-5'>
            {/* head st */}
            <div className='flex flex-row justify-between'>
              <h2 className='font-semibold text-2xl'>Select Ticket</h2>
              <button className='text-base font-semibold'>Sort By</button>
            </div>

            {/* list ticket */}
            <div className='bg-white p-7 rounded-2xl shadow-xl flex flex-col gap-2 w-full'>

              {/* head */}
              <div className='w-full rounded-2xl flex flex-row items-center gap-7'>
                <Image src='/garuda.jpg' width={100} height={100}/>
                <p className='font-semibold text-base text-41'>Garuda Indonesia</p>
              </div>


              {/* info */}
              <div className='flex flex-row justify-between items-center'>
                {/* from to */}
                <div className='w-fit'>
                  <div className="flex flex-row justify-between py-3 gap-10 items-center">
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
                <p className='text-41 text-base text-center w-fit'>3 hours 11 minutes<br/>
                <span className='text-41 text-sm text-center'>(1 transit)</span></p>
                {/* fasilitas */}
                <div className='flex flex-row gap-3'>
                  <Image src='/koper.svg' width={26} height={26} />
                  <Image src='/food.svg' width={26} height={26} />
                  <Image src='/wifi.svg' width={26} height={26} />
                </div>
                {/* cost */}
                <p className='text-primary text-base font-medium'>$ 214,00 <span className='text-41'>/ pax</span></p>
                {/* button */}
                <button className='bg-primary rounded-xl text-white font-bold text-base px-12 py-3 shadow-md shadow-primary'>Select</button>
              </div>

              {/* view detail */}
              <button className='flex flex-row w-fit gap-4 items-center'>
                <p className='text-primary font-semibold text-base'>View Detail</p>
                <Image src='/arrow.svg' width={10} height={10} className='rotate-90'/>
              </button>
            </div>

            {/* list ticket */}
            <div className='bg-white p-7 rounded-2xl shadow-xl flex flex-col gap-2 w-full'>

              {/* head */}
              <div className='w-full rounded-2xl flex flex-row items-center gap-7'>
                <Image src='/garuda.jpg' width={100} height={100}/>
                <p className='font-semibold text-base text-41'>Garuda Indonesia</p>
              </div>


              {/* info */}
              <div className='flex flex-row justify-between items-center'>
                {/* from to */}
                <div className='w-fit'>
                  <div className="flex flex-row justify-between py-3 gap-10 items-center">
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
                <p className='text-41 text-base text-center w-fit'>3 hours 11 minutes<br/>
                <span className='text-41 text-sm text-center'>(1 transit)</span></p>
                {/* fasilitas */}
                <div className='flex flex-row gap-3'>
                  <Image src='/koper.svg' width={26} height={26} />
                  <Image src='/food.svg' width={26} height={26} />
                  <Image src='/wifi.svg' width={26} height={26} />
                </div>
                {/* cost */}
                <p className='text-primary text-base font-medium'>$ 214,00 <span className='text-41'>/ pax</span></p>
                {/* button */}
                <button className='bg-primary rounded-xl text-white font-bold text-base px-12 py-3 shadow-md shadow-primary'>Select</button>
              </div>

              {/* view detail */}
              <button className='flex flex-row w-fit gap-4 items-center'>
                <p className='text-primary font-semibold text-base'>View Detail</p>
                <Image src='/arrow.svg' width={10} height={10} className='rotate-90'/>
              </button>
            </div>

            {/* list ticket */}
            <div className='bg-white p-7 rounded-2xl shadow-xl flex flex-col gap-2 w-full'>

              {/* head */}
              <div className='w-full rounded-2xl flex flex-row items-center gap-7'>
                <Image src='/garuda.jpg' width={100} height={100}/>
                <p className='font-semibold text-base text-41'>Garuda Indonesia</p>
              </div>


              {/* info */}
              <div className='flex flex-row justify-between items-center'>
                {/* from to */}
                <div className='w-fit'>
                  <div className="flex flex-row justify-between py-3 gap-10 items-center">
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
                <p className='text-41 text-base text-center w-fit'>3 hours 11 minutes<br/>
                <span className='text-41 text-sm text-center'>(1 transit)</span></p>
                {/* fasilitas */}
                <div className='flex flex-row gap-3'>
                  <Image src='/koper.svg' width={26} height={26} />
                  <Image src='/food.svg' width={26} height={26} />
                  <Image src='/wifi.svg' width={26} height={26} />
                </div>
                {/* cost */}
                <p className='text-primary text-base font-medium'>$ 214,00 <span className='text-41'>/ pax</span></p>
                {/* button */}
                <button className='bg-primary rounded-xl text-white font-bold text-base px-12 py-3 shadow-md shadow-primary'>Select</button>
              </div>

              {/* view detail */}
              <button className='flex flex-row w-fit gap-4 items-center'>
                <p className='text-primary font-semibold text-base'>View Detail</p>
                <Image src='/arrow.svg' width={10} height={10} className='rotate-90'/>
              </button>
            </div>

          </div>


        </div>
      </main>
      <Footer/>
    </div>
  )
};

export default Search;

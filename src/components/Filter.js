"use client"

import MultiRangeSlider from '@/components/MultiRangeSlider';
import Image from 'next/image';
import { useState } from 'react';

const Filter = () => {

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
      {/* head filter */}
      <div className='flex flex-row justify-between'>
        <h2 className='font-semibold text-2xl / max-xl:text-xl'>Filter</h2>
        <button className='text-primary text-base font-semibold'>Reset</button>
      </div> 
      {/* filter column */}
      <div className='w-full px-7 my-5 bg-white rounded-xl shadow-xl / max-xl:px-5 max-xl:my-3'>
        
        <div className='border-b'>{/* transit */}
          <button className='flex flex-row justify-between w-full py-5 pr-[3px] / max-xl:py-4' onClick={()=>handleOpenDropdown(openTransit,setOpenTransit)}>
            <p className='text-base font-semibold'>Transit</p>
            <Image alt='' src='/arrow.svg' width={10} height={10} className={openTransit ? '-rotate-90 w-2.5' : 'rotate-90 w-2.5'}></Image>
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
          <button className='flex flex-row justify-between w-full py-5 pr-[3px] / max-xl:py-4' onClick={()=>handleOpenDropdown(openFacilities,setOpenFacilities)}>
            <p className='text-base font-semibold'>Facilities</p>
            <Image alt='' src='/arrow.svg' width={10} height={10} className={openFacilities ? '-rotate-90 w-2.5' : 'rotate-90 w-2.5'}></Image>
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
          <button className='flex flex-row justify-between w-full py-5 pr-[3px] / max-xl:py-4' onClick={()=>handleOpenDropdown(openDepTime,setOpenDepTime)}>
            <p className='text-base font-semibold'>Departure Time</p>
            <Image alt='' src='/arrow.svg' width={10} height={10} className={openDepTime ? '-rotate-90 w-2.5' : 'rotate-90 w-2.5'}></Image>
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
          <button className='flex flex-row justify-between w-full py-5 pr-[3px] / max-xl:py-4' onClick={()=>handleOpenDropdown(openAriveTime,setOpenAriveTime)}>
            <p className='text-base font-semibold'>Time Arrived</p>
            <Image alt='' src='/arrow.svg' width={10} height={10} className={openAriveTime ? '-rotate-90 w-2.5' : 'rotate-90 w-2.5'}></Image>
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
          <button className='flex flex-row justify-between w-full py-5 pr-[3px] / max-xl:py-4' onClick={()=>handleOpenDropdown(openAirlines,setOpenAirlines)}>
            <p className='text-base font-semibold'>Airlines</p>
            <Image alt='' src='/arrow.svg' width={10} height={10} className={openAirlines ? '-rotate-90 w-2.5' : 'rotate-90 w-2.5'}></Image>
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
          <button className='flex flex-row justify-between w-full py-5 pr-[3px] / max-xl:py-4' onClick={()=>handleOpenDropdown(openTicketPrice,setOpenTicketPrice)}>
            <p className='text-base font-semibold'>Ticket Price</p>
            <Image alt='' src='/arrow.svg' width={10} height={10} className={openTicketPrice ? '-rotate-90 w-2.5' : 'rotate-90 w-2.5'}></Image>
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
  )
};

export default Filter;

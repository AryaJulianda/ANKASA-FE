"use client"

import MultiRangeSlider from '@/components/MultiRangeSlider';
import Image from 'next/image';
import { useState } from 'react';

const Filter = ({fetchFilteredData}) => {

  const [openTransit,setOpenTransit] = useState(false)
  const [openFacilities,setOpenFacilities] = useState(false)
  const [openDepTime,setOpenDepTime] = useState(false)
  const [openAriveTime,setOpenAriveTime] = useState(false)
  const [openAirlines,setOpenAirlines] = useState(false)
  const [openTicketPrice,setOpenTicketPrice] = useState(false)
  const handleOpenDropdown = (state,setState) => {
    setState(!state)
  }

  const [facilities, setFacilities] = useState('');
  const [airlineId,setAirlineId] = useState('');
  const [maxPrice,setMaxPrice]= useState(1000)
  const [minPrice,setMinPrice]= useState(0)

  const handleChangeFacilities = (event) => {
    const { value, checked } = event.target;
    const previousFacilities = facilities.split(',');
    const updatedFacilities = checked
      ? [...previousFacilities, value]
      : previousFacilities.filter((facility) => facility !== value);
    const updatedFacilitiesString = updatedFacilities.join(',');
    const result = updatedFacilitiesString.startsWith(',') ? updatedFacilitiesString.substring(1) : updatedFacilitiesString
    setFacilities(result);
  };

  const handleChangeAirlineId = (event) => {
    const { value, checked } = event.target;
    const previousAirlineId = airlineId.split(',');
    const updatedAirlineId = checked
      ? [...previousAirlineId, value]
      : previousAirlineId.filter((airlineId) => airlineId !== value);
    const updatedAirlineIdString = updatedAirlineId.join(',');
    const result = updatedAirlineIdString.startsWith(',') ? updatedAirlineIdString.substring(1) : updatedAirlineIdString
    setAirlineId(result);
  };
  

  const handleSubmit = () => {
    fetchFilteredData(facilities,minPrice,maxPrice,airlineId)
    // console.log({facilities,minPrice,maxPrice,airlineId})
  }

  return (
    <div>
      {/* head filter */}
      <div className='flex flex-row justify-between'>
        <h2 className='text-2xl font-semibold text-white / max-xl:text-xl'>Filter</h2>
        <button className='text-white rounded-lg px-2 bg-[#4FCF4D] text-sm font-semibold max-sm:inline-block hover:bg-white hover:text-[#4FCF4D]' onClick={handleSubmit}>Apply Filter</button>
      </div> 
      {/* filter column */}
      <div className='w-full my-5 bg-white shadow-xl px-7 rounded-xl / max-xl:px-5'>
        
        
        <div className='border-b'>{/* Facilities */}
          <button className='flex flex-row justify-between w-full py-5 pr-[3px] / max-xl:py-4' onClick={()=>handleOpenDropdown(openFacilities,setOpenFacilities)}>
            <p className='text-base font-semibold'>Facilities</p>
            <Image alt='' src='/arrow.svg' width={10} height={10} className={openFacilities ? '-rotate-90 w-2.5' : 'rotate-90 w-2.5'}></Image>
          </button>
          {openFacilities && 
          <div className='flex flex-col'>
            <div className='flex flex-row items-center justify-between w-full mb-5'>
              <label className='text-sm' htmlFor='baggage' >Baggage</label><input type="checkbox" name="" id="baggage" className='w-4 h-4' value='1' onChange={handleChangeFacilities} checked={facilities.includes('1')} />
            </div>
            <div className='flex flex-row items-center justify-between w-full mb-5'>
              <label className='text-sm' htmlFor='meal' >Meal</label><input type="checkbox" name="" id="meal" className='w-4 h-4' value='2' onChange={handleChangeFacilities} checked={facilities.includes('2')} />
            </div>
            <div className='flex flex-row items-center justify-between w-full mb-5'>
              <label className='text-sm' htmlFor='wifi' >Wi-fi</label><input type="checkbox" name="" id="wifi" className='w-4 h-4' value='3' onChange={handleChangeFacilities} checked={facilities.includes('3')} />
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
            <div className='flex flex-row items-center justify-between w-full mb-5'>
              <label className='text-sm' htmlFor='garudaId' >Garuda Indonesia</label><input type="checkbox" name="" id="garudaId" className='w-4 h-4' value='2' onChange={handleChangeAirlineId} checked={airlineId.includes('2')}/>
            </div>
            <div className='flex flex-row items-center justify-between w-full mb-5'>
              <label className='text-sm' htmlFor='airAsia' >Air Asia</label><input type="checkbox" name="" id="airAsia" className='w-4 h-4' value='4' onChange={handleChangeAirlineId} checked={airlineId.includes('4')}/>
            </div>
            <div className='flex flex-row items-center justify-between w-full mb-5'>
              <label className='text-sm' htmlFor='lionAir' >Lion Air</label><input type="checkbox" name="" id="lionAir" className='w-4 h-4' value='3' onChange={handleChangeAirlineId} checked={airlineId.includes('3')}/>
            </div>
            <div className='flex flex-row items-center justify-between w-full mb-5'>
              <label className='text-sm' htmlFor='sgp' >Singapore Airlines</label><input type="checkbox" name="" id="sgp" className='w-4 h-4' value='1' onChange={handleChangeAirlineId} checked={airlineId.includes('1')}/>
            </div>
            <div className='flex flex-row items-center justify-between w-full mb-5'>
              <label className='text-sm' htmlFor='citilink' >Citilink</label><input type="checkbox" name="" id="citilink" className='w-4 h-4' value='5' onChange={handleChangeAirlineId} checked={airlineId.includes('5')}/>
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
              <p className='text-xs color-41'>Lowest</p>
              <p className='text-xs color-41'>Highest</p>
            </div>
            <MultiRangeSlider
              min={0}
              max={1000}
              onChange={({ min, max }) => {
                setMaxPrice(max)
                setMinPrice(min)
              }}
            />
          </div>}
        </div>

      </div>
    </div>
  )
};

export default Filter;

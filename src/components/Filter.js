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
  


  // console.log('facilities=>',facilities)
  // console.log('airlineId=>',airlineId)
  // console.log('max=>',maxPrice)
  // console.log('min=>',minPrice)

  const handleSubmit = () => {
    fetchFilteredData(facilities,minPrice,maxPrice,airlineId)
    // console.log({facilities,minPrice,maxPrice,airlineId})
  }

  return (
    <div>
      {/* head filter */}
      <div className='flex flex-row justify-between'>
        <h2 className='text-white font-semibold text-2xl / max-xl:text-xl'>Filter</h2>
        <button className='text-white text-sm font-semibold max-sm:inline-block hover:underline' onClick={handleSubmit}>Apply Filter</button>
      </div> 
      {/* filter column */}
      <div className='w-full px-7 my-5 bg-white rounded-xl shadow-xl / max-xl:px-5'>
        
        {/* <div className='border-b'>transit
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
        </div> */}
        
        <div className='border-b'>{/* Facilities */}
          <button className='flex flex-row justify-between w-full py-5 pr-[3px] / max-xl:py-4' onClick={()=>handleOpenDropdown(openFacilities,setOpenFacilities)}>
            <p className='text-base font-semibold'>Facilities</p>
            <Image alt='' src='/arrow.svg' width={10} height={10} className={openFacilities ? '-rotate-90 w-2.5' : 'rotate-90 w-2.5'}></Image>
          </button>
          {openFacilities && 
          <div className='flex flex-col'>
            <div className='flex flex-row justify-between w-full items-center mb-5'>
              <label className='text-sm' htmlFor='baggage' >Baggage</label><input type="checkbox" name="" id="baggage" className='w-4 h-4' value='1' onChange={handleChangeFacilities} checked={facilities.includes('1')} />
            </div>
            <div className='flex flex-row justify-between w-full items-center mb-5'>
              <label className='text-sm' htmlFor='meal' >Meal</label><input type="checkbox" name="" id="meal" className='w-4 h-4' value='2' onChange={handleChangeFacilities} checked={facilities.includes('2')} />
            </div>
            <div className='flex flex-row justify-between w-full items-center mb-5'>
              <label className='text-sm' htmlFor='wifi' >Wi-fi</label><input type="checkbox" name="" id="wifi" className='w-4 h-4' value='3' onChange={handleChangeFacilities} checked={facilities.includes('3')} />
            </div>
          </div>}
        </div>

        {/* Departure Time */}
        {/* <div className='border-b'>
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
        </div> */}
        {/* Time Arrived */}
        {/* <div className='border-b'>
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
        </div> */}

        <div className='border-b'>{/* Airlines */}
          <button className='flex flex-row justify-between w-full py-5 pr-[3px] / max-xl:py-4' onClick={()=>handleOpenDropdown(openAirlines,setOpenAirlines)}>
            <p className='text-base font-semibold'>Airlines</p>
            <Image alt='' src='/arrow.svg' width={10} height={10} className={openAirlines ? '-rotate-90 w-2.5' : 'rotate-90 w-2.5'}></Image>
          </button>
          {openAirlines && 
          <div className='flex flex-col'>
            <div className='flex flex-row justify-between w-full items-center mb-5'>
              <label className='text-sm' htmlFor='garudaId' >Garuda Indonesia</label><input type="checkbox" name="" id="garudaId" className='w-4 h-4' value='2' onChange={handleChangeAirlineId} checked={airlineId.includes('2')}/>
            </div>
            <div className='flex flex-row justify-between w-full items-center mb-5'>
              <label className='text-sm' htmlFor='airAsia' >Air Asia</label><input type="checkbox" name="" id="airAsia" className='w-4 h-4' value='4' onChange={handleChangeAirlineId} checked={airlineId.includes('4')}/>
            </div>
            <div className='flex flex-row justify-between w-full items-center mb-5'>
              <label className='text-sm' htmlFor='lionAir' >Lion Air</label><input type="checkbox" name="" id="lionAir" className='w-4 h-4' value='3' onChange={handleChangeAirlineId} checked={airlineId.includes('3')}/>
            </div>
            <div className='flex flex-row justify-between w-full items-center mb-5'>
              <label className='text-sm' htmlFor='sgp' >Singapore Airlines</label><input type="checkbox" name="" id="sgp" className='w-4 h-4' value='1' onChange={handleChangeAirlineId} checked={airlineId.includes('1')}/>
            </div>
            <div className='flex flex-row justify-between w-full items-center mb-5'>
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
              <p className='color-41 text-xs'>Lowest</p>
              <p className='color-41 text-xs'>Highest</p>
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

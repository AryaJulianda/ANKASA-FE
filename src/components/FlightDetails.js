import React from "react"
import Image from "next/image";

const FlightDetails = ({ticket}) => {
  
  const dateObj = new Date(ticket.takeoff);
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const dayOfWeek = daysOfWeek[dateObj.getUTCDay()];

  const date = dateObj.getUTCDate();
  const month = dateObj.toLocaleString('default', { month: 'long' }); 
  const year = dateObj.getUTCFullYear();

  return (
    <div className='w-[30%] flex flex-col gap-5 py-5 // max-sm:w-full'>
    {/* head */}
    <div className='flex flex-row justify-between'>
      <h2 className='font-semibold text-2xl text-white'>Flight Details</h2>
      <button className='text-base font-semibold text-white // max-xl:text-sm'>View Details</button>
    </div>
    {/* main */}
    <div className='w-full p-7 bg-white rounded-xl shadow-xl flex flex-col gap-5 max-xl:p-5'>
      {/* maskapai name */}
      <div className='w-full rounded-2xl flex flex-row items-center gap-7'>
        <img alt='' src={ticket.photo} width={100} height={100}/>
        <p className='font-semibold text-base text-41'>{ticket.name}</p>
      </div>
      {/* from to */}
      <div className='w-full'>
        <div className="flex flex-row justify-between">
          <h1 className="text-lg font-semibold text-black // max-xl:text-sm // max-sm:text-base">{ticket.fromCity} ( {ticket.fromCountry} )</h1>
          <Image alt='' src='/plane.svg' width={17} height={17} className='mb-2 // max-xl:mb-0 max-xl:w-4'/>
          <h1 className="text-lg font-semibold text-black // max-xl:text-sm // max-sm:text-base">{ticket.toCity} ( {ticket.toCountry} )</h1> {/*takeoffHours,takeoffMinutes,landingHours,landingHours */}
        </div>
        <p className='font-thin text-sm text-41 mt-5 // max-xl:text-xs // max-sm:text-sm'>{dayOfWeek}, {date} {month} {year} <span className='text-41 mx-2 // max-xl:mx-1'>●</span> {ticket.takeoffHours}:{ticket.takeoffMinutes} - {ticket.landingHours}:{ticket.landingMinutes}</p>
      </div>
      {/* checklist */}
      <div>
        <div className='mb-2'>
          <Image alt='' src='/checklist.svg' width={20} height={20} className='inline-block'></Image>
          <p className='text-primary font-medium text-sm inline-block px-2'>Refundable</p>
        </div>
        <div className='mb-2'>
          <Image alt='' src='/checklist.svg' width={20} height={20} className='inline-block'></Image>
          <p className='text-primary font-medium text-sm inline-block px-2'>Can reschedule</p>
        </div>
      </div>
      {/* total payment */}
      <div className='flex flex-row border-t-2  pt-5'>
        <p className='font-medium text-lg flex-1 // max-xl:text-base'>Total Payment</p>
        <p className='text-primary font-semibold text-2xl mr-3 // max-xl:text-xl'>$ 145,00</p>
        <Image alt='' src='/arrow.svg' width={12} height={12} className='rotate-90 // max-xl:w-2'/>
      </div>
    </div>

  </div>
  )
};

export default FlightDetails;

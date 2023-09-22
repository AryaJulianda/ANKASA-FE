"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Router } from "next/router";

const SelectTicket = ({tickets}) => {
  // console.log('tickets=>',tickets)
  return (
    <div className='w-[70%] flex flex-col gap-5 py-5 // max-sm:w-full'>
      {/* head st */}
      <div className='flex flex-row justify-between'>
        <h2 className='text-white font-semibold text-2xl / max-xl:text-xl'>Select Ticket</h2>
        <button className='text-white text-base font-semibold / max-sm:hidden'>Sort By</button>
        {/* <button className='text-base font-semibold hidden / max-sm:inline-block' onClick={handleShowFilter}>{showFilter ? `Hide Filter` : `Show Filter`}</button> */}
      </div>

{/*##########################################################################################################################*/}

      {/* list ticket */}

      {tickets?.map((ticket)=>{
        //  console.log('ticket=>',ticket)
          const [fromCity, fromCountry] = ticket.from.location.split(',').map(item => item.trim());
          const [toCity, toCountry] = ticket.to.location.split(',').map(item => item.trim());

          const takeoffDate = new Date(ticket.takeoff);
          const landingDate = new Date(ticket.landing);

          const takeoffDay = takeoffDate.getDay();
          const takeoffHours = takeoffDate.getHours();
          const takeoffMinutes = takeoffDate.getMinutes();
          const landingHours = landingDate.getHours();
          const landingMinutes = landingDate.getMinutes();

          const isBaggage = ticket.facilities.includes('baggage')
          const isMeal = ticket.facilities.includes('meal')
          const isWifi = ticket.facilities.includes('wifi')

        return(
        <div key={ticket.code}>
          <Link href={{ 
            pathname: '/detail', 
            query: {'code':ticket.code,'name':ticket.name,'photo':ticket.photo,fromCountry,fromCity,toCountry,toCity,toCountry,'takeoff':ticket.takeoff,takeoffHours,takeoffMinutes,landingHours,landingMinutes}
          }}>
            <div className='bg-white p-7 rounded-2xl shadow-xl flex flex-col gap-2 w-full / max-sm:p-5 max-sm:gap-0'>
              {/* head */}
              <div className='w-full rounded-2xl flex flex-row items-center gap-7 // max-sm:gap-2'>
                <img alt='' src={ticket.photo} width={100} height={100} className='max-sm:w-10'/>
                <p className='font-semibold text-base text-41 // max-sm:text-sm'>{ticket.name}</p>
                {/* cost */}
                <p className='text-primary text-base font-medium text-right flex-1'>$ {ticket.price}<span className='text-41 text-sm'>/pax</span></p>
              </div>
              {/* info */}
              <div className='flex flex-row justify-between items-center // max-sm:flex-wrap'>
                {/* from to */}
                <div className='w-fit'>
                  <div className="flex flex-row justify-between py-3 items-center gap-2">
                    <div className="text-left w-24 ">
                      <h1 className="text-xl font-medium text-black">{fromCity}</h1>
                      <h1 className="text-xl font-medium text-gray-500">{fromCountry}</h1>
                      <p className="text-xs font-extralight text-[#6B6B6B] mb-2" id='takeoff'>{takeoffHours}.{0 <= takeoffMinutes <= 9 ?  '0' + takeoffMinutes : takeoffMinutes}</p>
                    </div>
                    <Image alt='' src='/plane.svg' width={20} height={20} className='mb-2 w-5'/>
                    <div className="text-right w-24 ">
                    <h1 className="text-xl font-medium text-black">{toCity}</h1>
                      <h1 className="text-xl font-medium text-gray-500">{toCountry}</h1>
                      <p className="text-xs font-extralight text-[#6B6B6B] mb-2" id='landing'>{landingHours}.{0 <= landingMinutes <= 9 ?  '0' + landingMinutes : landingMinutes}</p>
                    </div>
                  </div>
                </div>
                {/* times */}
                <p className='text-41 text-base text-center w-fit / max-xl:text-sm  / max-sm:mr-3'>{landingHours - takeoffHours} Hour 0 Minutes<br/>
                <span className='text-41 text-sm text-center / max-xl:text-xs'>{ticket.transit} Transit</span></p>
                {/* fasilitas
                <div className='flex flex-row gap-3 / max-xl:hidden'>
                  <Image alt='' src='/koper.svg' width={26} height={26} className='max-xl:w-5'/>
                  <Image alt='' src='/food.svg' width={26} height={26} className='max-xl:w-5'/>
                  <Image alt='' src='/wifi.svg' width={26} height={26} className='max-xl:w-5'/>
                </div> */}
                
                {/* button */}
                <button className='bg-primary rounded-xl text-white font-bold text-base px-12 py-3 shadow-md shadow-primary'>Select</button>
              </div>
              {/* view detail */}
              <div className='flex flex-row justify-between items-center // max-sm:hidden'>
                {/* view button */}
                <button className='flex flex-row w-fit gap-4 items-center '>
                  <p className='text-primary font-semibold text-base'>View Detail</p>
                  <Image alt='' src='/arrow.svg' width={10} height={10} className='rotate-90 w-2.5 h-auto'/>
                </button>
                {/* fasilitas */}
                <div className='flex flex-row gap-3 / max-xl:gap-1'>
                {isBaggage && <Image alt='' src='/koper.svg' width={26} height={26} className='max-xl:w-5'/>}
                {isMeal && <Image alt='' src='/food.svg' width={26} height={26} className='max-xl:w-5'/>}
                {isWifi && <Image alt='' src='/wifi.svg' width={26} height={26} className='max-xl:w-5'/>}
                </div>
              </div>
            </div>
          </Link>
        </div>
        )
      })}
        
    </div>
  )
};

export default SelectTicket;


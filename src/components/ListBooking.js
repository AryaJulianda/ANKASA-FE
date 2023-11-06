'use client'
import Image from "next/image";
import React from "react"


const ListBooking = ({tickets,router}) => {
  const handleDetail = (status,code) => {
    if(status==1){
      router.push('/detail/payment?code='+code)
    } else if(status==2){
      router.push(`/detail/payment/booking?code=`+code)
    }
  }

  return (
    <div className="flex flex-col w-full gap-5">

      {/* Header */}
      <div className="flex flex-row items-center justify-between py-6 bg-white shadow-lg px-7 rounded-2xl mb-7 // max-sm:mb-4">
        <p className="text-2xl font-semibold text-primary">My Booking</p>
        <p className="text-base font-semibold text-primary">Order History</p>
      </div>

      {/* List Booking */}
      {!tickets ? (<p className="text-base font-semibold text-center text-41">Empty Ticket</p>) :
      tickets?.map((ticket)=>{
      return(
        <div className="w-full px-8 bg-white shadow-lg rounded-xl py-7" key={ticket.code}>
          {/* from to */} 
          <div className='flex flex-col w-full gap-4 pb-4 border-b-2'>
            <p className="text-sm">Monday, 20 July 2023 - 12:33</p>
            <div className="flex flex-row gap-5 w-fit">
              <h1 className="text-xl font-semibold text-black // max-sm:text-base max-sm:font-bold">{ticket.ticket.from.location}</h1>
              <Image alt='' src='/plane.svg' width={17} height={17} className=''/>
              <h1 className="text-xl font-semibold text-black // max-sm:text-base max-sm:font-bold">{ticket.ticket.to.location}</h1>
            </div>
            <p className='text-sm font-thin text-41'>{ticket.ticket.airline.name}, AB-221</p>
          </div>
          {/* status */}
          <div className="flex flex-row items-center justify-between pt-4">
            <p className="text-base font-semibold text-41 // max-sm:hidden">Status</p>
            {ticket.statusId==1?
            <p className="text-white font-semibold text-sm px-4 py-2 bg-[#FF7F23] rounded-md shadow-lg // max-sm:text-sm max-sm:px-2">Waiting For Payment</p>
            :<p className="text-white font-semibold text-sm px-4 py-2 bg-[#4FCF4D] rounded-md shadow-lg // max-sm:text-sm max-sm:px-2">Ticket issued</p>}
            {/* view detail */}
            <button onClick={()=>handleDetail(ticket.statusId,ticket.code)} className='flex flex-row items-center gap-4 w-fit'>
              <p className='text-base font-semibold text-primary // max-sm:text-sm'>View Detail</p>
              <Image alt='' src='/arrow.svg' width={10} height={10} className='rotate-90'/>
            </button>
          </div>
        </div>)
      })}

    </div>
  )
};

export default ListBooking;

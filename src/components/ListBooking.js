import Image from "next/image";
import React from "react"

const ListBooking = () => {
  return (
    <div className="flex flex-col w-full">

      {/* Header */}
      <div className="flex flex-row justify-between px-7 py-6 rounded-2xl bg-white shadow-lg items-center mb-7 // max-sm:mb-4">
        <p className="text-2xl font-semibold text-primary">My Booking</p>
        <p className="text-primary font-semibold text-base">Order History</p>
      </div>

      {/* List Booking */}
      <div className="rounded-xl bg-white shadow-lg w-full px-8 py-7">
        {/* from to */} 
        <div className='w-fit flex flex-col gap-4 border-b-2 pb-4'>
          <p className="text-sm">Monday, 20 July 2023 - 12:33</p>
          <div className="flex flex-row justify-between gap-5">
            <h1 className="text-xl font-semibold text-black // max-sm:text-base max-sm:font-bold">Medan ( IDN )</h1>
            <Image src='/plane.svg' width={17} height={17} className=''/>
            <h1 className="text-xl font-semibold text-black // max-sm:text-base max-sm:font-bold">Tokyo ( JPN )</h1>
          </div>
          <p className='font-thin text-sm text-41'>Garuda Indonesia, AB-221</p>
        </div>
        {/* status */}
        <div className="flex flex-row items-center pt-4 justify-between">
          <p className="text-base text-41 font-semibold // max-sm:hidden">Status</p>
          <p className="text-white font-semibold text-sm px-4 py-2 bg-[#FF7F23] rounded-md shadow-lg // max-sm:text-sm max-sm:px-2">Waiting For Payment</p>
          {/* view detail */}
          <button className='flex flex-row w-fit gap-4 items-center'>
            <p className='text-primary font-semibold text-base // max-sm:text-sm'>View Detail</p>
            <Image src='/arrow.svg' width={10} height={10} className='rotate-90'/>
          </button>
        </div>
      </div>

    </div>
  )
};

export default ListBooking;

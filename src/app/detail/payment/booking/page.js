'use client'
import { getTicketById } from '@/app/api/route';
import Barcode from 'react-barcode';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const Booking = () => {
  const searchParams = useSearchParams()
  const code = searchParams.get('code')
  // console.log(code)
  const [data,setData] = useState({});

  const fetchData = async () => {
    const res = await getTicketById(code)
    console.log(res.data?.result)
    setData(res.data.result)
  }
  console.log(data?.ticket?.airline.photo)


  useEffect(()=>{
    fetchData();
  },[])
  return (
    <div>
      <Navbar/>
      <main className='pt-28 pb-12 bg-gray-200 // max-sm:pt-10 max-sm:px-3 max-sm:pb-8'>

        {/* booking pass */}
        <div className='w-[90%] px-16 py-10 mt-12 bg-white rounded-2xl m-auto shadow-2xl // max-sm:w-full max-sm:p-5'>
          {/* head */}
          <div className='flex flex-row mb-7 justify-between items-center'>
            <h1 className='text-2xl font-semibold'>Booking Pass</h1>
            <button className=''><Image alt='' src='/icon-option.svg' width={5} height={23}/></button>
          </div>
          {/* ticket */}
          <div className='rounded-lg border-2 flex flex-col'>
            {/* left */}
            <section className='w-full px-12 py-10 border-b-2 //  max-sm:p-4'>
              {/* title */}
              <div className='flex flex-row items-center mb-10 gap-7 // max-sm:gap-5 max-sm:mb-4'>
                <img alt='' src={data?.ticket?.airline.photo} width={100} height={100} className='max-sm:w-14'/>
                {/* from to */}
                <div className='w-full'>
                  <div className="flex flex-row justify-start items-center gap-7 // max-sm:gap-5">
                    <h1 className="text-2xl font-semibold text-black text-left // max-sm:text-sm">{data?.ticket?.from.location}</h1>
                    <Image alt='' src='/plane.svg' width={20} height={20} className='mb-2 // max-sm:w-4'/>
                    <h1 className="text-2xl font-semibold text-black text-right // max-sm:text-sm">{data?.ticket?.to.location}</h1>
                  </div>
                </div>
              </div>
              {/* data */}
              <div className='grid grid-cols-2 gap-y-6 // max-sm:gap-y-2'>
                <div className=''>
                  <h5 className='text-[#A5A5A5] text-xs'>Code</h5>
                  <p className='text-[#595959] font-medium text-base // max-sm:text-sm'>AB-221</p>
                </div>
                <div className=''>
                  <h5 className='text-[#A5A5A5] text-xs'>Class</h5>
                  <p className='text-[#595959] font-medium text-base // max-sm:text-sm'>Economy</p>
                </div>
                <div className=''>
                  <h5 className='text-[#A5A5A5] text-xs'>Terminal</h5>
                  <p className='text-[#595959] font-medium text-base // max-sm:text-sm'>A</p>
                </div>
                <div className=''>
                  <h5 className='text-[#A5A5A5] text-xs'>Gate</h5>
                  <p className='text-[#595959] font-medium text-base // max-sm:text-sm'>221</p>
                </div>
                <div className=' col-span-2'>
                  <h5 className='text-[#A5A5A5] text-xs'>Departure</h5>
                  <p className='text-[#595959] font-medium text-base // max-sm:text-sm'>Monday, 20 July ‘20 - 12:33</p>
                </div>
              </div>

            </section>
            {/* right */}
            <section className='w-full flex justify-center items-center p-10 // max-sm:p-4'>
                {/* <Image alt='' src='/barcode (1).svg' width={1} height={1} className='w-4/5 // max-sm:w-full'/> */}
                <Barcode value={code} />
                 {/* <div className="bg-[url('/barcode.svg')] w-full h-full bg-cover bg-center bg-primary -rotate-90 absolute top-0"/> */}
            </section>
          </div> 
        </div>
              
      </main>
      <Footer/>
    </div>
  )
};

export default Booking;

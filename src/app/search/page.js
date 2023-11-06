'use client'
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'
import Filter from '@/components/Filter';
import SelectTicket from '@/components/SelectTicket';
import { getAllData, getDataFiltered } from '../api/route';
import { useEffect, useState } from 'react';

const Search = () => {
  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(false)
  const fetchAllData = async () => {
    setLoading(true)
    const res = await getAllData()
    setData(res)
    setLoading(false)
  }

  const fetchFilteredData = async (facilities,minPrice,maxPrice,airlineId) => {
    setLoading(true)
    const res = await getDataFiltered(facilities,minPrice,maxPrice,airlineId)
    setData(res)
    setLoading(false)
  }

  useEffect(()=>{
    fetchAllData();
  },[])

  // console.log('data',data)
  return (
    <div>
      <Navbar/>
      <main className='min-h-screen pt-28 max-xl:pt-20 max-sm:pt-16'>
        {/* main */}
        <div className='bg-[#F5F6FA] w-full min-h-screen px-16 relative z-50 flex flex-row gap-6 max-xl:px-8 max-xl:gap-4 max-sm:px-4 max-sm:flex-col'>
          {/* bluebox */}
          <div className='absolute left-0 right-0 h-24 shadow-2xl bg-primary -z-10 rounded-b-3xl'></div>
          {/* filter */}
          <div className='w-[30%] py-5 max-sm:w-full'>
            <Filter fetchFilteredData={fetchFilteredData} />
          </div>

          {/* select ticket */}
          <SelectTicket tickets={data.data} loading={loading} setLoading={setLoading}/>


        </div>
      </main>
      <Footer/>
    </div>
  )
};

export default Search;

  // const [showFilter,setShowFilter]= useState(true)

  // const handleShowFilter = () => {
  //   setShowFilter(!showFilter)
  // }


            {/* plane */}
          {/* <Image alt='' src="/logo-w1.svg" width={50} height={50} className='w-12 mr-5 max-sm:hidden' priority></Image> */}
          {/* from to */}
          {/* <div className='w-fit / max-sm:w-full'>
            <div className="flex flex-row items-end justify-between gap-10 py-3 / max-sm:gap-2 ">
              <div className="text-left">
                <p className="mb-2 text-sm text-white">From</p>
                <h1 className="text-lg font-semibold text-white / max-sm:text-base">Medan ( IDN )</h1>
              </div>
              <Image alt='' src='/switch-w.svg' width={17} height={17} className='mb-2'/>
              <div className="text-right">
                <p className="mb-2 text-sm text-white">To</p>
                <h1 className="text-lg font-semibold text-white / max-sm:text-base">Tokyo ( JPN )</h1>
              </div>
            </div>
            <p className='text-sm font-thin text-white border-white / max-sm:text-xs max-sm:text-center max-sm:py-2 max-sm:border-t-2'>Monday, 20 July 2023 <span className='mx-2 text-white'>●</span> 6 Passenger <span className='mx-2 text-white'>●</span> Economy</p>
          </div> */}
          {/* change btn */}
          {/* <button className='ml-auto text-base font-semibold text-white / max-sm:hidden'>Change Search</button> */}

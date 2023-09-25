'use client'
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'
import ProfileSection from '@/components/ProfileSection';
import ListBooking from '@/components/ListBooking';
import { getMyTickets } from '../api/route';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Bars } from 'react-loader-spinner';

const MyBooking = () => {
  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(false)
  const router =useRouter()
  const fetchAllData = async () => {
    setLoading(true)
    const res = await getMyTickets()
    setData(res.data)
    setLoading(false)
  }

  console.log(data)
  useEffect(()=>{
    fetchAllData();
  },[])

  return (
    <div>
      <Navbar/>
      {loading ? <Bars width='100px' height='auto' color='#2395FF' wrapperClass='flex justify-center items-center w-screen h-screen'/> : <>
      <main className='mt-28 py-12 px-[70px] bg-[#F5F6FA] flex flex-row w-full gap-7 // max-xl:mt-20 max-xl:px-10 max-xl:gap-4 // max-sm:flex-col-reverse max-sm:px-4 max-sm:mt-10'>
        <ProfileSection/>
        <ListBooking tickets={data.result} router={router}/>
      </main>
      <Footer/></>}
    </div>
  )
};

export default MyBooking;

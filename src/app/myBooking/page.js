import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'
import ProfileSection from '@/components/ProfileSection';
import ListBooking from '@/components/ListBooking';
import Image from 'next/image';

const MyBooking = () => {

  return (
    <div>
      <Navbar/>
      <main className='mt-28 py-12 px-[70px] bg-[#F5F6FA] flex flex-row w-full gap-7 // max-xl:mt-20 max-xl:px-10 max-xl:gap-4 // max-sm:flex-col-reverse max-sm:px-4 max-sm:mt-10'>
        <ProfileSection/>
        <ListBooking />
      </main>
      <Footer/>
    </div>
  )
};

export default MyBooking;

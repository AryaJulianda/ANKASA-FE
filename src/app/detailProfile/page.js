import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'
import ProfileSection from '@/components/ProfileSection';
import BiodataProfile from '@/components/BiodataProfile';
import Image from 'next/image';

const DetailProfile = () => {

  return (
    <div>
      <Navbar/>
      <main className='mt-28 py-12 px-[70px] bg-[#F5F6FA] flex flex-row w-full gap-7 // max-xl:mt-20 max-xl:px-10 max-xl:gap-4 // max-sm:flex-col max-sm:px-4 max-sm:mt-10'>
        <ProfileSection/>
        <BiodataProfile />
      </main>
      <Footer/>
    </div>
  )
};

export default DetailProfile;

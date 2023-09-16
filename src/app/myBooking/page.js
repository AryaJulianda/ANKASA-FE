import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'
import ProfileSection from '@/components/ProfileSection';
import Image from 'next/image';

const Page = () => {

  return (
    <div>
      <Navbar/>
      <main className='mt-32 py-12 px-[70px] bg-[#F5F6FA] flex flex-row w-full gap-7'>
        <ProfileSection/>
      </main>
      <Footer/>
    </div>
  )
};

export default Page;

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'
import Image from 'next/image';

const Booking = () => {

  return (
    <div>
      <Navbar/>
      <main className='pt-28 pb-12 bg-primary'>

        {/* booking pass */}
        <div className='w-[80%] px-16 py-10 mt-12 bg-white rounded-2xl m-auto shadow-2xl'>
          {/* head */}
          <div className='flex flex-row mb-7 justify-between items-center'>
            <h1 className='text-2xl font-semibold'>Booking Pass</h1>
            <button className=''><Image src='/icon-option.svg' width={5} height={23}/></button>
          </div>
          {/* ticket */}
          <div className='rounded-lg border-2 flex flex-row'>
            {/* left */}
            <section className='w-[70%] px-12 py-10 border-r-2'>
              {/* title */}
              <div className='flex flex-row items-center mb-10 gap-7'>
                <Image src='/garuda.jpg' width={100} height={100}/>
                {/* from to */}
                <div className='w-full'>
                  <div className="flex flex-row justify-start items-center gap-7">
                    <h1 className="text-2xl font-semibold text-black">Medan <br />( IDN )</h1>
                    <Image src='/plane.svg' width={20} height={20} className='mb-2'/>
                    <h1 className="text-2xl font-semibold text-black">Tokyo <br />( JPN )</h1>
                  </div>
                </div>
              </div>
              {/* data */}
              <div className='grid grid-cols-2 gap-y-6'>
                <div className=''>
                  <h5 className='text-[#A5A5A5] text-sm'>Code</h5>
                  <p className='text-[#595959] font-medium text-base'>AB-221</p>
                </div>
                <div className=''>
                  <h5 className='text-[#A5A5A5] text-sm'>Class</h5>
                  <p className='text-[#595959] font-medium text-base'>Economy</p>
                </div>
                <div className=''>
                  <h5 className='text-[#A5A5A5] text-sm'>Terminal</h5>
                  <p className='text-[#595959] font-medium text-base'>A</p>
                </div>
                <div className=''>
                  <h5 className='text-[#A5A5A5] text-sm'>Gate</h5>
                  <p className='text-[#595959] font-medium text-base'>221</p>
                </div>
                <div className=' col-span-2'>
                  <h5 className='text-[#A5A5A5] text-sm'>Departure</h5>
                  <p className='text-[#595959] font-medium text-base'>Monday, 20 July ‘20 - 12:33</p>
                </div>
              </div>

            </section>
            {/* right */}
            <section className='w-[30%] flex justify-center items-center'>
                <Image src='/barcode (1).svg' width={1} height={1} className='w-full h-full -rotate-90'/>
            </section>
          </div>
        </div>
              
      </main>
      <Footer/>
    </div>
  )
};

export default Booking;

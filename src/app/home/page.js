import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'
import Image from 'next/image';

const Home = () => {


  return (
    <div>
      <Navbar/>
      <main className='pt-28 px-32 max-xl:px-16 max-xl:pt-20 max-sm:px-4 max-sm:pt-10'>
        {/* header */}
        <div className='py-10 max-sm:hidden'>
          <h1 className='text-5xl leading-snug text-41 font-semibold max-sm:text-center'>Find your <span className='text-primary'>Flight</span></h1>
          <p className='text-[#979797] font-normal text-lg max-sm:text-center'>and explore the world with us</p>
        </div>
        <div className='bg-[url("https://res.cloudinary.com/dgwlgaxtm/image/upload/v1695653546/ttrwnvo9z9swgaawdsxu.jpg")] w-[1094px] max-sm:w-full bg-cover h-[500px] bg-no-repeat rounded-3xl -ml-60 max-sm:m-0 bg-center max-sm:mt-10'>
          <div className='py-5 hidden max-sm:flex z-50 w-full h-full flex-col justify-center items-center bg-gradient-to-br from-[#000000bd] to-[#00000052] rounded-3xl'>
            <h1 className='text-5xl leading-snug text-white font-semibold max-sm:text-center'>Find your <span className='text-primary'>Flight</span></h1>
            <p className='text-white font-normal text-lg max-sm:text-center'>and explore the world with us</p>
          </div>
        </div>
        <Image alt='' src="/cloud-blue.svg" width={1} height={1} className='w-52 absolute right-10 top-[600px] -z-20 max-xl:hidden' />

        {/* trending */}
        <div className='py-16 '>
          {/* header trending */}
          <div className='py-10 flex flex-row justify-between items-end'>
            <div>
              <h5 className='text-primary font-medium text-sm'>TRENDING</h5>
              <h2 className='font-semibold text-2xl'>Trending destinations</h2>
            </div>
            <div>
              <h5 className='text-primary font-semibold text-lg'>Show All</h5>
            </div>
          </div>
          {/* list trending */}
          <div className='flex flex-row gap-5 overflow-x-scroll w-full justify-between pb-10'>
            <div className='min-w-[208px] h-[266px] p-6 rounded-2xl bg-[url("https://res.cloudinary.com/dgwlgaxtm/image/upload/v1695653546/ttrwnvo9z9swgaawdsxu.jpg")] bg-center bg-cover flex flex-col justify-between'>
              <p className='text-white font-bold text-sm bg-[#ffffff69] rounded-full w-fit px-4 py-2'>15 Airlines</p>
              <div className='flex flex-row justify-between'>
                <div>
                  <h3 className='font-semibold text-sm text-white'>Tokyo</h3>
                  <h1 className='font-bold text-2xl text-white'>Japan</h1>
                </div>
                <Image alt='' src='/more.svg' width={30} height={30} className=''/>
              </div>
            </div>
            <div className='min-w-[208px] h-[266px] p-6 rounded-2xl bg-[url("https://res.cloudinary.com/dgwlgaxtm/image/upload/v1695653546/ttrwnvo9z9swgaawdsxu.jpg")] bg-center bg-cover flex flex-col justify-between'>
              <p className='text-white font-bold text-sm bg-[#ffffff69] rounded-full w-fit px-4 py-2'>15 Airlines</p>
              <div className='flex flex-row justify-between'>
                <div>
                  <h3 className='font-semibold text-sm text-white'>Tokyo</h3>
                  <h1 className='font-bold text-2xl text-white'>Japan</h1>
                </div>
                <Image alt='' src='/more.svg' width={30} height={30} className=''/>
              </div>
            </div>
            <div className='min-w-[208px] h-[266px] p-6 rounded-2xl bg-[url("https://res.cloudinary.com/dgwlgaxtm/image/upload/v1695653546/ttrwnvo9z9swgaawdsxu.jpg")] bg-center bg-cover flex flex-col justify-between'>
              <p className='text-white font-bold text-sm bg-[#ffffff69] rounded-full w-fit px-4 py-2'>15 Airlines</p>
              <div className='flex flex-row justify-between'>
                <div>
                  <h3 className='font-semibold text-sm text-white'>Tokyo</h3>
                  <h1 className='font-bold text-2xl text-white'>Japan</h1>
                </div>
                <Image alt='' src='/more.svg' width={30} height={30} className=''/>
              </div>
            </div>
            <div className='min-w-[208px] h-[266px] p-6 rounded-2xl bg-[url("https://res.cloudinary.com/dgwlgaxtm/image/upload/v1695653546/ttrwnvo9z9swgaawdsxu.jpg")] bg-center bg-cover flex flex-col justify-between'>
              <p className='text-white font-bold text-sm bg-[#ffffff69] rounded-full w-fit px-4 py-2'>15 Airlines</p>
              <div className='flex flex-row justify-between'>
                <div>
                  <h3 className='font-semibold text-sm text-white'>Tokyo</h3>
                  <h1 className='font-bold text-2xl text-white'>Japan</h1>
                </div>
                <Image alt='' src='/more.svg' width={30} height={30} className=''/>
              </div>
            </div>
            <div className='min-w-[208px] h-[266px] p-6 rounded-2xl bg-[url("https://res.cloudinary.com/dgwlgaxtm/image/upload/v1695653546/ttrwnvo9z9swgaawdsxu.jpg")] bg-center bg-cover flex flex-col justify-between'>
              <p className='text-white font-bold text-sm bg-[#ffffff69] rounded-full w-fit px-4 py-2'>15 Airlines</p>
              <div className='flex flex-row justify-between'>
                <div>
                  <h3 className='font-semibold text-sm text-white'>Tokyo</h3>
                  <h1 className='font-bold text-2xl text-white'>Japan</h1>
                </div>
                <Image alt='' src='/more.svg' width={30} height={30} className=''/>
              </div>
            </div>
            <div className='min-w-[208px] h-[266px] p-6 rounded-2xl bg-[url("https://res.cloudinary.com/dgwlgaxtm/image/upload/v1695653546/ttrwnvo9z9swgaawdsxu.jpg")] bg-center bg-cover flex flex-col justify-between'>
              <p className='text-white font-bold text-sm bg-[#ffffff69] rounded-full w-fit px-4 py-2'>15 Airlines</p>
              <div className='flex flex-row justify-between'>
                <div>
                  <h3 className='font-semibold text-sm text-white'>Tokyo</h3>
                  <h1 className='font-bold text-2xl text-white'>Japan</h1>
                </div>
                <Image alt='' src='/more.svg' width={30} height={30} className=''/>
              </div>
            </div>
            <div className='min-w-[208px] h-[266px] p-6 rounded-2xl bg-[url("https://res.cloudinary.com/dgwlgaxtm/image/upload/v1695653546/ttrwnvo9z9swgaawdsxu.jpg")] bg-center bg-cover flex flex-col justify-between'>
              <p className='text-white font-bold text-sm bg-[#ffffff69] rounded-full w-fit px-4 py-2'>15 Airlines</p>
              <div className='flex flex-row justify-between'>
                <div>
                  <h3 className='font-semibold text-sm text-white'>Tokyo</h3>
                  <h1 className='font-bold text-2xl text-white'>Japan</h1>
                </div>
                <Image alt='' src='/more.svg' width={30} height={30} className=''/>
              </div>
            </div>
            <div className='min-w-[208px] h-[266px] p-6 rounded-2xl bg-[url("https://res.cloudinary.com/dgwlgaxtm/image/upload/v1695653546/ttrwnvo9z9swgaawdsxu.jpg")] bg-center bg-cover flex flex-col justify-between'>
              <p className='text-white font-bold text-sm bg-[#ffffff69] rounded-full w-fit px-4 py-2'>15 Airlines</p>
              <div className='flex flex-row justify-between'>
                <div>
                  <h3 className='font-semibold text-sm text-white'>Tokyo</h3>
                  <h1 className='font-bold text-2xl text-white'>Japan</h1>
                </div>
                <Image alt='' src='/more.svg' width={30} height={30} className=''/>
              </div>
            </div>
            <div className='min-w-[208px] h-[266px] p-6 rounded-2xl bg-[url("https://res.cloudinary.com/dgwlgaxtm/image/upload/v1695653546/ttrwnvo9z9swgaawdsxu.jpg")] bg-center bg-cover flex flex-col justify-between'>
              <p className='text-white font-bold text-sm bg-[#ffffff69] rounded-full w-fit px-4 py-2'>15 Airlines</p>
              <div className='flex flex-row justify-between'>
                <div>
                  <h3 className='font-semibold text-sm text-white'>Tokyo</h3>
                  <h1 className='font-bold text-2xl text-white'>Japan</h1>
                </div>
                <Image alt='' src='/more.svg' width={30} height={30} className=''/>
              </div>
            </div>
            <div className='min-w-[208px] h-[266px] p-6 rounded-2xl bg-[url("https://res.cloudinary.com/dgwlgaxtm/image/upload/v1695653546/ttrwnvo9z9swgaawdsxu.jpg")] bg-center bg-cover flex flex-col justify-between'>
              <p className='text-white font-bold text-sm bg-[#ffffff69] rounded-full w-fit px-4 py-2'>15 Airlines</p>
              <div className='flex flex-row justify-between'>
                <div>
                  <h3 className='font-semibold text-sm text-white'>Tokyo</h3>
                  <h1 className='font-bold text-2xl text-white'>Japan</h1>
                </div>
                <Image alt='' src='/more.svg' width={30} height={30} className=''/>
              </div>
            </div>
          </div>
        </div>

        {/* top destination */}
        <div className='bg-primary rounded-3xl w-full flex flex-col items-center py-14 px-10'>
          {/* header */}
          <div>
            <h5 className='text-center text-white text-sm font-medium'>Top 10</h5>
            <h1 className='text-center text-white text-2xl font-semibold'>Top 10 Destinations</h1>
          </div>

          {/* list */}
          <div className='flex flex-row justify-between py-12 gap-5 overflow-x-scroll w-full'>
            {/* list item */}
            <div>
              <div className='bg-[url("https://res.cloudinary.com/dgwlgaxtm/image/upload/v1695653546/ttrwnvo9z9swgaawdsxu.jpg")] w-36 bg-center bg-cover h-36 rounded-full border-4 border-white mb-3'/>
              <p className='text-center text-white text-xl font-semibold'>Tokyo</p>
            </div>
            {/* list item */}
            <div>
              <div className='bg-[url("https://res.cloudinary.com/dgwlgaxtm/image/upload/v1695653546/ttrwnvo9z9swgaawdsxu.jpg")] w-36 bg-center bg-cover h-36 rounded-full border-4 border-white mb-3'/>
              <p className='text-center text-white text-xl font-semibold'>Tokyo</p>
            </div>
            {/* list item */}
            <div>
              <div className='bg-[url("https://res.cloudinary.com/dgwlgaxtm/image/upload/v1695653546/ttrwnvo9z9swgaawdsxu.jpg")] w-36 bg-center bg-cover h-36 rounded-full border-4 border-white mb-3'/>
              <p className='text-center text-white text-xl font-semibold'>Tokyo</p>
            </div>
            {/* list item */}
            <div>
              <div className='bg-[url("https://res.cloudinary.com/dgwlgaxtm/image/upload/v1695653546/ttrwnvo9z9swgaawdsxu.jpg")] w-36 bg-center bg-cover h-36 rounded-full border-4 border-white mb-3'/>
              <p className='text-center text-white text-xl font-semibold'>Tokyo</p>
            </div>
            {/* list item */}
            <div>
              <div className='bg-[url("https://res.cloudinary.com/dgwlgaxtm/image/upload/v1695653546/ttrwnvo9z9swgaawdsxu.jpg")] w-36 bg-center bg-cover h-36 rounded-full border-4 border-white mb-3'/>
              <p className='text-center text-white text-xl font-semibold'>Tokyo</p>
            </div>
            {/* list item */}
            <div>
              <div className='bg-[url("https://res.cloudinary.com/dgwlgaxtm/image/upload/v1695653546/ttrwnvo9z9swgaawdsxu.jpg")] w-36 bg-center bg-cover h-36 rounded-full border-4 border-white mb-3'/>
              <p className='text-center text-white text-xl font-semibold'>Tokyo</p>
            </div>
            {/* list item */}
            <div>
              <div className='bg-[url("https://res.cloudinary.com/dgwlgaxtm/image/upload/v1695653546/ttrwnvo9z9swgaawdsxu.jpg")] w-36 bg-center bg-cover h-36 rounded-full border-4 border-white mb-3'/>
              <p className='text-center text-white text-xl font-semibold'>Tokyo</p>
            </div>
            {/* list item */}
            <div>
              <div className='bg-[url("https://res.cloudinary.com/dgwlgaxtm/image/upload/v1695653546/ttrwnvo9z9swgaawdsxu.jpg")] w-36 bg-center bg-cover h-36 rounded-full border-4 border-white mb-3'/>
              <p className='text-center text-white text-xl font-semibold'>Tokyo</p>
            </div>
            {/* list item */}
            <div>
              <div className='bg-[url("https://res.cloudinary.com/dgwlgaxtm/image/upload/v1695653546/ttrwnvo9z9swgaawdsxu.jpg")] w-36 bg-center bg-cover h-36 rounded-full border-4 border-white mb-3'/>
              <p className='text-center text-white text-xl font-semibold'>Tokyo</p>
            </div>
          </div>

          {/* pagination */}
          {/* <div className='flex flex-row justify-center gap-7'>
            <button  id='prev' className='bg-primary rounded-md border-2 border-white flex justify-center items-center py-3 pr-7 pl-6 shadow-xl'>
              <Image alt='' src='/arrow-w.svg' width={15} height={15} className='rotate-180'/>
            </button>
            <button id='next' className='bg-white rounded-md flex justify-center items-center py-3 pr-7 pl-6 shadow-xl'>
              <Image alt='' src='/arrow.svg' width={15} height={15} className=''/>
            </button>
          </div> */}
        </div>

      </main>
      <Footer/>
    </div>
  )
};

export default Home;

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'
import Image from 'next/image';

const Home = () => {


  return (
    <div>
      <Navbar/>
      <main className='px-32 pt-28 max-xl:px-16 max-xl:pt-20 max-sm:px-4 max-sm:pt-10'>
        {/* header */}
        <div className='py-10 max-sm:hidden'>
          <h1 className='text-5xl font-semibold leading-snug text-41 max-sm:text-center'>Find your <span className='text-primary'>Flight</span></h1>
          <p className='text-[#979797] font-normal text-lg max-sm:text-center'>and explore the world with us</p>
        </div>
        <div className='bg-[url("https://res.cloudinary.com/dgwlgaxtm/image/upload/v1695653546/ttrwnvo9z9swgaawdsxu.jpg")] w-[1094px] max-sm:w-full bg-cover h-[500px] bg-no-repeat rounded-3xl -ml-60 max-sm:m-0 bg-center max-sm:mt-10'>
          <div className='py-5 hidden max-sm:flex z-50 w-full h-full flex-col justify-center items-center bg-gradient-to-br from-[#000000bd] to-[#00000052] rounded-3xl'>
            <h1 className='text-5xl font-semibold leading-snug text-white max-sm:text-center'>Find your <span className='text-primary'>Flight</span></h1>
            <p className='text-lg font-normal text-white max-sm:text-center'>and explore the world with us</p>
          </div>
        </div>
        <Image alt='' src="/cloud-blue.svg" width={1} height={1} className='w-52 absolute right-10 top-[600px] -z-20 max-xl:hidden' />

        {/* trending */}
        <div className='py-16 '>
          {/* header trending */}
          <div className='flex flex-row items-end justify-between py-10'>
            <div>
              <h5 className='text-sm font-medium text-primary'>TRENDING</h5>
              <h2 className='text-2xl font-semibold'>Trending destinations</h2>
            </div>
            <div>
              <h5 className='text-lg font-semibold text-primary'>Show All</h5>
            </div>
          </div>
          {/* list trending */}
          <div className='flex flex-row justify-between w-full gap-5 pb-10 overflow-x-scroll'>
            <div className='min-w-[208px] h-[266px] p-6 rounded-2xl bg-[url("https://res.cloudinary.com/dgwlgaxtm/image/upload/v1695653546/ttrwnvo9z9swgaawdsxu.jpg")] bg-center bg-cover flex flex-col justify-between'>
              <p className='text-white font-bold text-sm bg-[#ffffff69] rounded-full w-fit px-4 py-2'>15 Airlines</p>
              <div className='flex flex-row justify-between'>
                <div>
                  <h3 className='text-sm font-semibold text-white'>Tokyo</h3>
                  <h1 className='text-2xl font-bold text-white'>Japan</h1>
                </div>
                <Image alt='' src='/more.svg' width={30} height={30} className=''/>
              </div>
            </div>
            <div className='min-w-[208px] h-[266px] p-6 rounded-2xl bg-[url("https://res.cloudinary.com/dgwlgaxtm/image/upload/v1696428743/azat9kgrswjsqqujrql5.jpg")] bg-center bg-cover flex flex-col justify-between'>
              <p className='text-white font-bold text-sm bg-[#ffffff69] rounded-full w-fit px-4 py-2'>15 Airlines</p>
              <div className='flex flex-row justify-between'>
                <div>
                  <h3 className='text-sm font-semibold text-white'>Bali</h3>
                  <h1 className='text-2xl font-bold text-white'>Indonesia</h1>
                </div>
                <Image alt='' src='/more.svg' width={30} height={30} className=''/>
              </div>
            </div>
            <div className='min-w-[208px] h-[266px] p-6 rounded-2xl bg-[url("https://res.cloudinary.com/dgwlgaxtm/image/upload/v1696428858/nytjxz9a2l4sfvz73qiz.jpg")] bg-center bg-cover flex flex-col justify-between'>
              <p className='text-white font-bold text-sm bg-[#ffffff69] rounded-full w-fit px-4 py-2'>15 Airlines</p>
              <div className='flex flex-row justify-between'>
                <div>
                  <h3 className='text-sm font-semibold text-white'>Paris</h3>
                  <h1 className='text-2xl font-bold text-white'>Prancis</h1>
                </div>
                <Image alt='' src='/more.svg' width={30} height={30} className=''/>
              </div>
            </div>
            <div className='min-w-[208px] h-[266px] p-6 rounded-2xl bg-[url("https://res.cloudinary.com/dgwlgaxtm/image/upload/v1696428958/mzkozv1kv3pjg55xkxlg.jpg")] bg-center bg-cover flex flex-col justify-between'>
              <p className='text-white font-bold text-sm bg-[#ffffff69] rounded-full w-fit px-4 py-2'>15 Airlines</p>
              <div className='flex flex-row justify-between'>
                <div>
                  <h3 className='text-sm font-semibold text-white'>Cappadocia</h3>
                  <h1 className='text-2xl font-bold text-white'>Turkey</h1>
                </div>
                <Image alt='' src='/more.svg' width={30} height={30} className=''/>
              </div>
            </div>
            <div className='min-w-[208px] h-[266px] p-6 rounded-2xl bg-[url("https://res.cloudinary.com/dgwlgaxtm/image/upload/v1696428905/levux17oni9y1yiriefh.jpg")] bg-center bg-cover flex flex-col justify-between'>
              <p className='text-white font-bold text-sm bg-[#ffffff69] rounded-full w-fit px-4 py-2'>15 Airlines</p>
              <div className='flex flex-row justify-between'>
                <div>
                  <h3 className='text-sm font-semibold text-white'>Roma</h3>
                  <h1 className='text-2xl font-bold text-white'>Italia</h1>
                </div>
                <Image alt='' src='/more.svg' width={30} height={30} className=''/>
              </div>
            </div>
            <div className='min-w-[208px] h-[266px] p-6 rounded-2xl bg-[url("https://res.cloudinary.com/dgwlgaxtm/image/upload/v1695653546/ttrwnvo9z9swgaawdsxu.jpg")] bg-center bg-cover flex flex-col justify-between'>
              <p className='text-white font-bold text-sm bg-[#ffffff69] rounded-full w-fit px-4 py-2'>15 Airlines</p>
              <div className='flex flex-row justify-between'>
                <div>
                  <h3 className='text-sm font-semibold text-white'>Tokyo</h3>
                  <h1 className='text-2xl font-bold text-white'>Japan</h1>
                </div>
                <Image alt='' src='/more.svg' width={30} height={30} className=''/>
              </div>
            </div>
            <div className='min-w-[208px] h-[266px] p-6 rounded-2xl bg-[url("https://res.cloudinary.com/dgwlgaxtm/image/upload/v1696428743/azat9kgrswjsqqujrql5.jpg")] bg-center bg-cover flex flex-col justify-between'>
              <p className='text-white font-bold text-sm bg-[#ffffff69] rounded-full w-fit px-4 py-2'>15 Airlines</p>
              <div className='flex flex-row justify-between'>
                <div>
                  <h3 className='text-sm font-semibold text-white'>Bali</h3>
                  <h1 className='text-2xl font-bold text-white'>Indonesia</h1>
                </div>
                <Image alt='' src='/more.svg' width={30} height={30} className=''/>
              </div>
            </div>
            <div className='min-w-[208px] h-[266px] p-6 rounded-2xl bg-[url("https://res.cloudinary.com/dgwlgaxtm/image/upload/v1696428858/nytjxz9a2l4sfvz73qiz.jpg")] bg-center bg-cover flex flex-col justify-between'>
              <p className='text-white font-bold text-sm bg-[#ffffff69] rounded-full w-fit px-4 py-2'>15 Airlines</p>
              <div className='flex flex-row justify-between'>
                <div>
                  <h3 className='text-sm font-semibold text-white'>Paris</h3>
                  <h1 className='text-2xl font-bold text-white'>Prancis</h1>
                </div>
                <Image alt='' src='/more.svg' width={30} height={30} className=''/>
              </div>
            </div>
            <div className='min-w-[208px] h-[266px] p-6 rounded-2xl bg-[url("https://res.cloudinary.com/dgwlgaxtm/image/upload/v1696428958/mzkozv1kv3pjg55xkxlg.jpg")] bg-center bg-cover flex flex-col justify-between'>
              <p className='text-white font-bold text-sm bg-[#ffffff69] rounded-full w-fit px-4 py-2'>15 Airlines</p>
              <div className='flex flex-row justify-between'>
                <div>
                  <h3 className='text-sm font-semibold text-white'>Cappadocia</h3>
                  <h1 className='text-2xl font-bold text-white'>Turkey</h1>
                </div>
                <Image alt='' src='/more.svg' width={30} height={30} className=''/>
              </div>
            </div>
            <div className='min-w-[208px] h-[266px] p-6 rounded-2xl bg-[url("https://res.cloudinary.com/dgwlgaxtm/image/upload/v1696428905/levux17oni9y1yiriefh.jpg")] bg-center bg-cover flex flex-col justify-between'>
              <p className='text-white font-bold text-sm bg-[#ffffff69] rounded-full w-fit px-4 py-2'>15 Airlines</p>
              <div className='flex flex-row justify-between'>
                <div>
                  <h3 className='text-sm font-semibold text-white'>Roma</h3>
                  <h1 className='text-2xl font-bold text-white'>Italia</h1>
                </div>
                <Image alt='' src='/more.svg' width={30} height={30} className=''/>
              </div>
            </div>
           
          </div>
        </div>

        {/* top destination */}
        <div className='flex flex-col items-center w-full px-10 bg-primary rounded-3xl py-14'>
          {/* header */}
          <div>
            <h5 className='text-sm font-medium text-center text-white'>Top 10</h5>
            <h1 className='text-2xl font-semibold text-center text-white'>Top 10 Destinations</h1>
          </div>

          {/* list */}
          <div className='flex flex-row justify-between w-full gap-5 py-12 overflow-x-scroll'>
            {/* list item */}
            <div>
              <div className='bg-[url("https://res.cloudinary.com/dgwlgaxtm/image/upload/v1695653546/ttrwnvo9z9swgaawdsxu.jpg")] w-36 bg-center bg-cover h-36 rounded-full border-4 border-white mb-3'/>
              <p className='text-xl font-semibold text-center text-white'>Tokyo</p>
            </div>
            {/* list item */}
            <div>
              <div className='bg-[url("https://res.cloudinary.com/dgwlgaxtm/image/upload/v1696428743/azat9kgrswjsqqujrql5.jpg")] w-36 bg-center bg-cover h-36 rounded-full border-4 border-white mb-3'/>
              <p className='text-xl font-semibold text-center text-white'>Bali</p>
            </div>
            {/* list item */}
            <div>
              <div className='bg-[url("https://res.cloudinary.com/dgwlgaxtm/image/upload/v1696428858/nytjxz9a2l4sfvz73qiz.jpg")] w-36 bg-center bg-cover h-36 rounded-full border-4 border-white mb-3'/>
              <p className='text-xl font-semibold text-center text-white'>Paris</p>
            </div>
            {/* list item */}
            <div>
              <div className='bg-[url("https://res.cloudinary.com/dgwlgaxtm/image/upload/v1696428958/mzkozv1kv3pjg55xkxlg.jpg")] w-36 bg-center bg-cover h-36 rounded-full border-4 border-white mb-3'/>
              <p className='text-xl font-semibold text-center text-white'>Cappadocia</p>
            </div>
            {/* list item */}
            <div>
              <div className='bg-[url("https://res.cloudinary.com/dgwlgaxtm/image/upload/v1696428905/levux17oni9y1yiriefh.jpg")] w-36 bg-center bg-cover h-36 rounded-full border-4 border-white mb-3'/>
              <p className='text-xl font-semibold text-center text-white'>Roma</p>
            </div>
            {/* list item */}
            <div>
              <div className='bg-[url("https://res.cloudinary.com/dgwlgaxtm/image/upload/v1695653546/ttrwnvo9z9swgaawdsxu.jpg")] w-36 bg-center bg-cover h-36 rounded-full border-4 border-white mb-3'/>
              <p className='text-xl font-semibold text-center text-white'>Tokyo</p>
            </div>
            {/* list item */}
            <div>
              <div className='bg-[url("https://res.cloudinary.com/dgwlgaxtm/image/upload/v1696428743/azat9kgrswjsqqujrql5.jpg")] w-36 bg-center bg-cover h-36 rounded-full border-4 border-white mb-3'/>
              <p className='text-xl font-semibold text-center text-white'>Bali</p>
            </div>
            {/* list item */}
            <div>
              <div className='bg-[url("https://res.cloudinary.com/dgwlgaxtm/image/upload/v1696428858/nytjxz9a2l4sfvz73qiz.jpg")] w-36 bg-center bg-cover h-36 rounded-full border-4 border-white mb-3'/>
              <p className='text-xl font-semibold text-center text-white'>Paris</p>
            </div>
            {/* list item */}
            <div>
              <div className='bg-[url("https://res.cloudinary.com/dgwlgaxtm/image/upload/v1696428958/mzkozv1kv3pjg55xkxlg.jpg")] w-36 bg-center bg-cover h-36 rounded-full border-4 border-white mb-3'/>
              <p className='text-xl font-semibold text-center text-white'>Capadocia</p>
            </div>
            {/* list item */}
            <div>
              <div className='bg-[url("https://res.cloudinary.com/dgwlgaxtm/image/upload/v1696428905/levux17oni9y1yiriefh.jpg")] w-36 bg-center bg-cover h-36 rounded-full border-4 border-white mb-3'/>
              <p className='text-xl font-semibold text-center text-white'>Roma</p>
            </div>
          </div>

          {/* pagination */}
          {/* <div className='flex flex-row justify-center gap-7'>
            <button  id='prev' className='flex items-center justify-center py-3 pl-6 border-2 border-white rounded-md shadow-xl bg-primary pr-7'>
              <Image alt='' src='/arrow-w.svg' width={15} height={15} className='rotate-180'/>
            </button>
            <button id='next' className='flex items-center justify-center py-3 pl-6 bg-white rounded-md shadow-xl pr-7'>
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

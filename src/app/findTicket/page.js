import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'
import Image from 'next/image';
import Filter from '@/components/Filter';
import SelectTicket from '@/components/SelectTicket';
const url = process.env.BASE_URL;

export async function getData() {
  try {
    const response = await fetch( url + '/airlines/flight' ); 
    const data = await response.json();
    if (!response.ok) { throw new Error('Gagal mengambil data dari server');}

    return data;
  } catch (error) {
    console.error('Terjadi kesalahan saat mengambil data:', error);
  }
}

const Search = async () => {
  const data = await getData()
  console.log('url=>',url)
  // console.log('data=>',data)



  return (
    <div>
      <Navbar/>
      <main className='pt-28 / max-xl:pt-20 / max-sm:pt-16'>
        {/* bluebox */}
        <div className='bg-primary py-10 px-16 flex flex-row items-center rounded-b-3xl shadow-2xl / max-xl:py-5 max-xl:px-8 / max-sm:py-2 max-sm:px-4 max-sm:-mt-2'>
          {/* plane */}
          <Image alt='' src="/logo-w1.svg" width={50} height={50} className='mr-5 max-sm:hidden w-12' priority></Image>
          {/* from to */}
          <div className='w-fit / max-sm:w-full'>
            <div className="flex flex-row justify-between py-3 gap-10 items-end / max-sm:gap-2 ">
              <div className="text-left">
                <p className="text-sm text-white mb-2">From</p>
                <h1 className="text-lg font-semibold text-white / max-sm:text-base">Medan ( IDN )</h1>
              </div>
              <Image alt='' src='/switch-w.svg' width={17} height={17} className='mb-2'/>
              <div className="text-right">
                <p className="text-sm text-white mb-2">To</p>
                <h1 className="text-lg font-semibold text-white / max-sm:text-base">Tokyo ( JPN )</h1>
              </div>
            </div>
            <p className='font-thin text-sm text-white / max-sm:text-xs max-sm:text-center max-sm:py-2 max-sm:border-t-2 border-white'>Monday, 20 July 2023 <span className='text-white mx-2'>●</span> 6 Passenger <span className='text-white mx-2'>●</span> Economy</p>
          </div>
          {/* change btn */}
          <button className='text-white text-base font-semibold ml-auto / max-sm:hidden'>Change Search</button>

        </div>
        {/* main */}
        <div className='bg-[#F5F6FA] w-full px-16 flex flex-row gap-6 / max-xl:px-8 max-xl:gap-4 / max-sm:px-4 max-sm:flex-col'>
          
          {/* filter */}
          <div className='w-[30%] py-5 / max-sm:w-full max-sm:hidden'>
            <Filter />
          </div>

          {/* select ticket */}
          <SelectTicket tickets={data.data}/>


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
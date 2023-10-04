'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {

  const router = useRouter()
  const [searchVisible,setSearchVisible] = useState(false)
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [findTicketVisible, setFindTicketVisible] = useState(false);
  const [accessToken,setAccessToken] = useState('')

  useEffect(() => {
    setAccessToken(localStorage.getItem('access_token'))
    // && router.push("/auth/login")
  }, []);

  // console.log('access token =>',accessToken)
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  }

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  }

  const toggleFindTicket = () => {
    // setFindTicketVisible(!findTicketVisible);
    accessToken ? router.push('/search') : router.push('/auth/login')
  }

  const toggleMyBooking = () => {
    // setFindTicketVisible(!findTicketVisible);
    accessToken ? router.push('/myBooking') : router.push('/auth/login')
  }

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    router.push('/auth/login')

  }

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-[9999]">
        <main className="flex bg-white items-center py-8 justify-around shadow-lg / max-xl:py-4 / max-sm:py-4 max-sm:justify-between max-sm:px-5">

          <section>
            <div className="flex flex-row items-center gap-x-3">
              <Image alt="" src='/logo-b.svg' width={1} height={1} className="w-12 / max-sm:w-8"/>
              <h1 className="text-2xl font-semibold text-41 / max-sm:text-xl">Ankasa</h1>
            </div> 
          </section>

          <section className="flex flex-row items-center gap-12 / max-sm:hidden ">
            <div className="bg-gray-100 flex flex-row items-center h-fit px-5 py-3 gap-x-3 w-64 rounded-xl shadow-md">
              <Image alt="" src='/search.svg' width={1} height={1} className="w-6"/>
              <input type="text" onClick={toggleFindTicket} placeholder="Where you want to go?" className="text-sm text-gray-500 focus:outline-none bg-transparent"/>
            </div>  

            <div className='flex flex-row gap-x-12'>
              <div> 
                <button className="text-base font-bold text-41 border-b-4 hover:border-primary" onClick={toggleFindTicket}>Find Ticket</button>
              </div>
              <div> 
                <button className="text-base font-bold text-41 border-b-4 hover:border-primary" onClick={toggleMyBooking}>My Booking</button>
              </div>
            </div>
          </section>

          {accessToken ?
          (<section className="flex flex-row items-center gap-10 / max-sm:hidden">
            <div className="flex flex-row gap-10">
              <Image alt="" src='/icon-message.svg' width={24} height={24} className="w-6"/>
              <Image alt="" src='/icon-notification.svg' width={24} height={24} className="w-6"/>
            </div>

            <button onClick={()=>accessToken? router.push('/detailProfile') : router.push('/auth/login')}>
              <Image alt="" src='/nico.jpg' width={56} height={56} className="rounded-full border-2 border-primary p-0.5"/>
            </button>
          </section>) 
          :(<button 
              onClick={()=> router.push('/auth/login')}
              className="bg-primary text-base font-bold text-white py-3 px-10 rounded-xl hover:text-primary hover:bg-white border-2 border-white hover:border-primary shadow-primary / max-sm:hidden">
            Sing In
          </button>)}

          <section className="max-sm:flex flex-row align-center gap-4 hidden">
            <Image alt="" src='/search.svg' width={1} height={1} className="w-5" onClick={toggleSearch}/>
            <Image alt="" src='/hamburger.svg' id="sideBarButton" width={1} height={1} className="w-5" onClick={toggleSidebar}/>
          </section>
          
          {searchVisible &&(
            <div className="bg-gray-100 flex flex-row items-center h-fit px-4 py-3 gap-x-3 w-64 rounded-xl shadow-md absolute">
              <Image alt="" src='/search.svg' width={1} height={1} className="w-6"/>
              <input type="text" placeholder="Where you want to go?" className="text-sm text-gray-500 focus:outline-none bg-transparent"/>
            </div>)} 

        </main>
        
        {/* SIDE BAR */}
        {sidebarVisible && (
        <div className='w-2/3 bg-white fixed z-[99999] top-0 bottom-0 right-0 shadow-2xl pt-16'>
          <div className='flex flex-col items-center'>
            <div className="border-b-2 border-gray-200 w-full text-center p-5"> 
              <button className={findTicketVisible ? "text-base font-bold text-primary" : "text-base font-bold text-41"} onClick={toggleFindTicket}>Find Ticket</button>
            </div>
            <div className="border-b-2 border-gray-200 w-full text-center p-5"> 
              <button className="text-base font-bold text-41">My Booking</button>
            </div>
            <div className="border-b-2 border-gray-200 w-full text-center p-5"> 
              <button className="text-base font-bold text-41">Profile</button>
            </div>
            <div className="border-b-2 border-gray-200 w-full text-center p-5"> 
              <button className="text-base font-bold text-red-500" onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </div>)}
      </div>

      {/* FIND TICKET */}
      {findTicketVisible && (
      <div className='fixed top-24 right-96 flex flex-col w-96 bg-white shadow-2xl px-10 py-8 gap-4 rounded-xl my-10 mx-auto / max-xl:top-16 max-xl:right-60 max-xl:py-8 max-xl:px-6 max-xl:h-3/4 max-xl:overflow-y-scroll / max-sm:top-24 max-sm:right-0 max-sm:left-0 max-sm:w-5/6 z-50'>
        <p className="text-base font-medium">Hey, <br/>Where you want to go?</p>
        
        <button className="flex flex-row justify-between w-full">
          <p className="text-base text-primary font-semibold">Recently Searched</p>
          <Image alt="" src='/arrow.svg' width={10} height={10}/>
        </button>

        <div className="flex flex-row bg-white shadow-lg rounded-xl justify-between px-5 py-3">
          <div className="text-left">
            <p className="text-sm text-gray-500">From</p>
            <h1 className="text-xl font-semibold text-black">Medan</h1>
            <p className="text-sm font-thin">Indondesia</p>
          </div>
          <Image alt="" src='/switch.svg' width={17} height={17}/>
          <div className="text-right">
            <p className="text-sm text-gray-500">To</p>
            <h1 className="text-xl font-semibold text-black">Tokyo</h1>
            <p className="text-sm font-thin">Japan</p>
          </div>
        </div>

        <div className="flex flex-row justify-between">
          <button className="bg-primary rounded-md flex flex-row justify-center py-3 px-6 gap-3 items-center / max-sm:py-2 max-sm:px-3">
            <Image src='/oneway.svg' width={18} height={18} alt="cek"/>
            <p className="text-sm font-semibold text-white">One way</p>
          </button>
          <button className="bg-gray-200 rounded-md flex flex-row justify-center py-3 px-6 gap-3 items-center / max-sm:py-2 max-sm:px-3">
            <Image alt="" src='/roundtrip.svg' width={18} height={18}/>
            <p className="text-sm font-semibold text-gray-700">Round trip</p>
          </button>
        </div>
        
        <div>
          <h5 className="mb-2 text-sm text-gray-500 font-medium">Departure</h5>
          <button className="flex flex-row rounded-xl border border-gray-200 w-full px-5 py-4 justify-between">
            <p className="text-sm font-bold">Monday, 20 July 2020</p>
            <Image alt="" src='/arrow.svg' width={10} height={10}/>
          </button>
        </div>

        <div>
          <h5 className="mb-2 text-sm text-gray-500 font-medium">How many person</h5>
          <div className="flex flex-row gap-4">
            <button className="flex flex-row rounded-md border border-gray-200 w-full justify-between p-5 py-3">
              <p className="text-sm font-bold">2 Child</p>
              <Image alt="" src='/arrow.svg' width={10} height={10}/>
            </button>
            <button className="flex flex-row rounded-md border border-gray-200 w-full justify-between p-5 py-3">
              <p className="text-sm font-bold ">2 Adult</p>
              <Image alt="" src='/arrow.svg' width={10} height={10}/>
            </button>
          </div>
        </div>

        <div>
          <h5 className="mb-2 text-sm text-gray-500 font-medium">Which class do you want?</h5>
          <div className="flex flex-row justify-between w-full items-center">
            <div className="flex flex-row items-center gap-1">
              <input type="radio" id="economy" name="class" value="economy" />
              <label for="economy" className="text-sm font-bold">Economy</label>
            </div>
            <div className="flex flex-row items-center gap-1">
              <input type="radio" id="business" name="class" value="business" />
              <label for="business" className="text-sm font-bold">Business</label>
            </div>
            <div className="flex flex-row items-center gap-1">
              <input type="radio" id="First-class" name="class" value="First-class" />
              <label for="First-class" className="text-sm font-bold">First Class</label>
            </div>
          </div>
        </div>

        <button className="bg-primary rounded-xl flex flex-row justify-between items-center px-9 py-4 mt-3">
          <p className="text-lg font-bold text-white">SEARCH FLIGHT</p>
          <Image alt="" src='/arrow-w.svg' width={10} height={10}/>
        </button>

      </div>)}
    </div>
  )
};

export default Navbar;

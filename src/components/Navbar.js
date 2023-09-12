'use client';

import Image from "next/image";
import { useState } from "react";

const Navbar = () => {

  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  }

  return (
    <div className="relative">
      <main className="flex bg-white items-center py-8 justify-around shadow-lg / max-xl:py-4 / max-sm:py-4 max-sm:justify-between max-sm:px-5">

        <section>
          <div className="flex flex-row items-center gap-x-3">
            <Image src='/logo-b.svg' width={1} height={1} className="w-12 / max-sm:w-8"/>
            <h1 className="text-2xl font-semibold text-41 / max-sm:text-xl">Ankasa</h1>
          </div> 
        </section>

        <section className="flex flex-row items-center gap-12 / max-sm:hidden ">
          <div className="bg-gray-100 flex flex-row items-center h-fit px-5 py-3 gap-x-3 w-64 rounded-xl shadow-md">
            <Image src='/search.svg' width={1} height={1} className="w-6"/>
            <input type="text" placeholder="Where you want to go?" className="text-sm text-gray-500 focus:outline-none bg-transparent"/>
          </div>  

          <div className='flex flex-row gap-x-12 '>
            <div> 
              <button className="text-base font-bold text-41">Find Ticket</button>
              <div className="w-10 h-1 bg-primary rounded mx-auto"/>
            </div>
            <div> 
              <button className="text-base font-bold text-41">My Booking</button>
              <div className="w-10 h-1 bg-primary rounded mx-auto"/>
            </div>
          </div>
        </section>

        <section className="flex flex-row items-center gap-10 / max-sm:hidden">
          <div className="flex flex-row gap-10">
            <Image src='/icon-message.svg' width={24} height={24} className="w-6"/>
            <Image src='/icon-notification.svg' width={24} height={24} className="w-6"/>
          </div>

          <div>
            <Image src='/nico.jpg' width={56} height={56} className="rounded-full border-2 border-primary p-0.5"/>
          </div>
        </section>

        <section className="flex flex-row align-center gap-4">
          <Image src='/search.svg' width={1} height={1} className="w-5"/>
          <Image src='/hamburger.svg' id="sideBarButton" width={1} height={1} className="w-5" onClick={toggleSidebar}/>
        </section>

      </main>

      {sidebarVisible && (
      <div className='w-2/3 bg-white fixed -z-50 top-0 bottom-0 right-0 shadow-2xl pt-16'>
        <div className='flex flex-col items-center'>
          <div className="border-b-2 border-gray-200 w-full text-center p-5"> 
            <button className="text-base font-bold text-41">Find Ticket</button>
          </div>
          <div className="border-b-2 border-gray-200 w-full text-center p-5"> 
            <button className="text-base font-bold text-41">My Booking</button>
          </div>
          <div className="border-b-2 border-gray-200 w-full text-center p-5"> 
            <button className="text-base font-bold text-41">Profile</button>
          </div>
          <div className="border-b-2 border-gray-200 w-full text-center p-5"> 
            <button className="text-base font-bold text-red-500">Logout</button>
          </div>
        </div>
      </div>)}
    </div>
  )
};

export default Navbar;

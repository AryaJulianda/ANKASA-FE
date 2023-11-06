import Image from "next/image";

const Footer = () => {

  return (
    <>
    <main className="flex flex-row w-full py-8 bg-white shadow-inner h-72 justify-evenly / max-sm:flex-col max-sm:h-fit max-sm:items-center max-sm:gap-14" >
      <section className="flex flex-col justify-between h-full w-72 max-sm:gap-4 // max-sm:w-full max-sm:px-8">
        <div className="flex flex-row items-center gap-x-3">
          <Image alt='' src='/logo-b.svg' width={1} height={1} className="w-12 / max-sm:w-8"/>
          <h1 className="text-2xl font-semibold text-41 / max-sm:text-xl">Ankasa</h1>
        </div> 
        <p>Find your Flight and explore the world with us. We will take care of the rest</p>
        <p>© Ankasa.  All Rights Reserved.</p>
      </section>

      <section className="flex flex-col justify-center gap-5 max-sm:w-full max-sm:px-8">
        <h5 className="text-base font-medium">Features</h5>
        <p className="text-sm">Find Ticket</p>
        <p className="text-sm">My Booking</p>
        <p className="text-sm">Chat</p>
        <p className="text-sm">Notification</p>
      </section>

      <section className="flex flex-col gap-5">
        <h5 className="text-base font-medium">Download Ankasa App</h5>
        <Image alt='' src='/app-store.png' width={200} height={60} />
        <Image alt='' src='/play-store.png' width={200} height={60} />
      </section>

      <section className="flex flex-col gap-4">
        <h5 className="text-base font-medium">Follow Us</h5>
        <div className="flex flex-row justify-between ">
          <Image alt='' src='/facebook.svg' width={24} height={24}/>
          <Image alt='' src='/twitter.svg' width={24} height={24}/>
          <Image alt='' src='/instagram.svg' width={24} height={24}/>
          <Image alt='' src='/youtube.svg' width={24} height={24}/>
        </div>
        

        <div className="flex flex-row gap-1 py-4 mt-auto">
          <Image alt='' src='/icon-location.svg' width={24} height={24} />
          <span className=''>Jakarta, Indonesia</span>
        </div>
      </section>
    </main>
    </>
  )
};

export default Footer;

import Image from "next/image";

const Footer = () => {

  return (
    <>
    <main className="flex w-full h-72 bg-white py-8 flex-row justify-evenly shadow-inner / max-sm:flex-col max-sm:h-fit max-sm:items-center max-sm:gap-14" >
      <section className="w-72 flex flex-col justify-between h-full max-sm:gap-4">
        <div className="flex flex-row items-center gap-x-3">
          <Image src='/logo-b.svg' width={1} height={1} className="w-12 / max-sm:w-8"/>
          <h1 className="text-2xl font-semibold text-41 / max-sm:text-xl">Ankasa</h1>
        </div> 
        <p>Find your Flight and explore the world with us. We will take care of the rest</p>
        <p>© Ankasa.  All Rights Reserved.</p>
      </section>

      <section className="flex flex-col justify-start gap-5">
        <h5 className="text-base font-medium">Features</h5>
        <p className="text-sm">Find Ticket</p>
        <p className="text-sm">My Booking</p>
        <p className="text-sm">Chat</p>
        <p className="text-sm">Notification</p>
      </section>

      <section className="flex flex-col gap-5">
        <h5 className="text-base font-medium">Download Ankasa App</h5>
        <Image src='/app-store.png' width={200} height={60} />
        <Image src='/play-store.png' width={200} height={60} />
      </section>

      <section className="flex flex-col gap-4">
        <h5 className="text-base font-medium">Follow Us</h5>
        <div className="flex flex-row justify-between ">
          <Image src='/facebook.svg' width={24} height={24}/>
          <Image src='/twitter.svg' width={24} height={24}/>
          <Image src='/instagram.svg' width={24} height={24}/>
          <Image src='/youtube.svg' width={24} height={24}/>
        </div>
        

        <div className="flex flex-row gap-1 mt-auto py-4">
          <Image src='/icon-location.svg' width={24} height={24} />
          <span className=''>Jakarta, Indonesia</span>
        </div>
      </section>
    </main>
    </>
  )
};

export default Footer;
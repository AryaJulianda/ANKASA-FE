import Image from "next/image";
import Hero from "@/components/Auth/Hero";
import RegistForm from "@/components/Auth/RegistForm";
const Page = () => {

  return (
    <main className="flex min-h-screen flex-row">
      <Hero />
      <div className='w-2/5 max-xl:w-1/2 max-md:w-full min-h-full flex flex-col justify-center relative px-10 max-sm:px-7 py-10'>
        <div className='flex flex-row max-sm:flex-col max-sm:py-5 py-10 items-center max-sm:justify-center gap-3'>
          <Image src="/logo-b.svg" alt="logo" className='w-10 h-10 mr-3 max-sm:mr-1' width={1} height={1} priority/>
          <h1 className='font-semibold text-2xl text-gray-700'>Ankasa</h1>
        </div>
        <RegistForm />
      </div>
    </main>
  )
};

export default Page;

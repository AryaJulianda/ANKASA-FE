import Image from "next/image";
import Hero from "@/components/Hero";

const Page = () => {

  return (
    <main className="flex min-h-screen flex-row">
    <Hero />
    
    <div className='w-2/5 max-xl:w-1/2 max-md:w-full min-h-full flex flex-col justify-center relative px-10 max-sm:px-7 py-10'>
      <div className='flex flex-row max-sm:flex-col max-sm:py-5 py-10 items-center max-sm:justify-center gap-3'>
        <Image src="/logo-b.svg" alt="logo" className='w-10 h-10 max-sm:mr-0' width={1} height={1}/>
        <h1 className='font-semibold text-2xl text-gray-700'>Ankasa</h1>
      </div>

      <div className=''>
        <h1 className='text-4xl max-sm:text-2xl max-sm:text-center font-semibold py-8 text-black'>Forgot Password</h1>
        <form className='flex flex-col gap-5'>

          <input 
            type="text" name="name" placeholder='Email' 
            className='border-b-2 border-gray-300 p-4 text-base focus:outline-none focus:border-primary'
          />     
        
          <button type="submit" className='bg-primary text-white py-4 font-bold rounded-xl my-4'>
            Send
          </button>

        </form>
      </div>

    </div>
  </main>
  )
};

export default Page;

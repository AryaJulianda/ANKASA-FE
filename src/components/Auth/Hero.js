import Image from "next/image";

const Hero = (props) => {
  return (
    <main className="w-3/5 max-xl:w-1/2 max-md:hidden min-h-full bg-primary flex justify-center items-center">
    <div className='relative'>
      <Image src="/cloud.svg" alt="cloud" className="w-96" width={1} height={1} priority />
      <Image src='/logo-w4.svg' alt='logo-w' className='absolute top-12 right-28 w-10' width={1} height={1}/>
      <Image src='/logo-w1.svg' alt='logo-w' className='absolute top-36 right-28 w-52' width={1} height={1}/>
      <Image src='/logo-w2.svg' alt='logo-w' className='absolute top-40 right-4 w-16' width={1} height={1}/>
      <Image src='/logo-w3.svg' alt='logo-w' className='absolute bottom-4 left-10 w-16' width={1} height={1}/>
    </div>
  </main>
  )
};

export default Hero;

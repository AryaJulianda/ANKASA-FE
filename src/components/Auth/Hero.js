import Image from "next/image";

const Hero = (props) => {
  return (
    <main className="flex items-center justify-center w-3/5 min-h-full max-xl:w-1/2 max-md:hidden bg-primary">
    <div className='relative'>
      <Image src="/cloud.svg" alt="cloud" className="w-96" width={1} height={1} priority />
      <Image src='/logo-w4.svg' alt='logo-w' className='absolute w-10 top-12 right-28' width={1} height={1}/>
      <Image src='/logo-w1.svg' alt='logo-w' className='absolute top-36 right-28 w-52' width={1} height={1}/>
      <Image src='/logo-w2.svg' alt='logo-w' className='absolute w-16 top-40 right-4' width={1} height={1}/>
      <Image src='/logo-w3.svg' alt='logo-w' className='absolute w-16 bottom-4 left-10' width={1} height={1}/>
    </div>
  </main>
  )
};

export default Hero;

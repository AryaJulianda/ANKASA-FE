'use client'
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'
import Image from 'next/image';
import MonthPicker from '@/components/MonthPicker';
import { useRouter, useSearchParams } from 'next/navigation';
import { payTicket } from '@/app/api/route';
import { Bars } from 'react-loader-spinner';
import { useState } from 'react';

const Payment = () => {
  // const data = searchParams
  const [loadingPn,setLoadingPn]=useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const code = searchParams.get('code')
  // console.log({code})
  
  const handlePaynow = async (e) => {
    setLoadingPn(true)
    e.preventDefault()
    const res = await payTicket(code)
    const query = new URLSearchParams({code}).toString()
    console.log({res,query})
    router.push('/detail/payment/booking?'+query);
  }
  
  return (
    <div>
      <Navbar/>
      {loadingPn ? <Bars width='100px' height='auto' color='#2395FF' wrapperClass='flex justify-center items-center w-screen h-screen'/> : <>
      <main className='pt-28 bg-[#F5F6FA] // max-xl:pt-20 // max-sm:pt-10'>
        {/* bluebox */}
        <div className='bg-primary py-10 px-16 flex flex-row items-center rounded-b-3xl shadow-2xl h-44 absolute right-0 left-0 w-full // max-sm:rounded-b-2xl max-sm:h-28'>
        </div>

        {/* main */}
        <div className='w-full px-16 py-5 flex flex-row gap-6 z-10 relative // max-xl:px-8 max-xl:gap-3 // max-sm:flex-col-reverse max-sm:px-4'>
          
          {/* Details */}
          <div className=' w-[70%] py-5 // max-sm:w-full'>
            {/* Payment Details */}
            <div className='flex flex-col'>
              <h2 className='font-semibold text-2xl text-white // max-sm:text-41'>Payment Detail</h2>
              <div className='w-full p-7 my-6 bg-white rounded-xl shadow-xl // max-sm:p-4'>
                <form className='flex flex-col gap-5'>
                  {/* Payment method */}
                  <div className='px-4'>
                    <label htmlFor="creditNumber" className='block mb-4 text-primary text-sm'>Payment Method</label>
                    <div className="mb-4 flex flex-row justify-between min-h-[1.5rem] pl-[1.5rem]">
                      <div>
                        <input
                          className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                          type="radio"
                          name="paymentMethod"
                          id="creditCard"/>
                        <label
                          className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                          htmlFor="creditCard">
                          Credit card
                        </label>
                      </div>
                      <Image alt='' src='/credit-card.svg' width={30} height={30}></Image>
                    </div>
                    <div className="mb-4 flex flex-row justify-between min-h-[1.5rem] pl-[1.5rem]">
                      <div>
                        <input
                          className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                          type="radio"
                          name="paymentMethod"
                          id="paypal"/>
                        <label
                          className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                          htmlFor="paypal">
                          Paypal
                        </label>
                      </div>
                      <Image alt='' src='/paypal.svg' width={30} height={30}></Image>
                    </div>
                  </div>
                  {/* number card */}
                  <div>
                    <label htmlFor="creditNumber" className='block text-primary text-sm px-4'>Card Number</label>
                    <input 
                      type="number" name="creditNumber" id='creditNumber' placeholder='0000 0000 0000 0000' 
                      className='border-b-2 text-black p-4 text-base focus:outline-none focus:border-primary w-full remove-arrow'
                    />
                  </div>
                  <div>
                    <label htmlFor='cvv' className='block text-primary text-sm px-4'>CVC/CvV</label>
                    <input 
                      type="password" id='cvv' name="cvv" placeholder='000'
                      className='border-b-2 text-black p-4 text-base focus:outline-none focus:border-primary w-full'
                    />         
                  </div>
                  <div>
                    <label htmlFor='expiryDate' className='block text-primary text-sm px-4'>Expiry Date</label>
                    <MonthPicker/>
                  </div>
                </form>
              </div>
            </div>
            <div className='flex justify-evenly gap-5'>
              <button onClick={handlePaynow} className=' mb-10 text-white bg-primary font-bold text-lg py-4 px-14 rounded-xl shadow-lg hover:shadow-primary'>{!loadingPn ? 'Pay Now' : <Bars/>}</button>
            </div>
          </div>

          {/* Flight Details */}
          {/* <FlightDetails ticket={data} price={data.totalPrice}/> */}

        </div>
      
      </main>
      <Footer/></>}
    </div>
  )
};

export default Payment;

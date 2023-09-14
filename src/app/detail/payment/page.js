import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'
import Image from 'next/image';
import MonthPicker from '@/components/MonthPicker';

const Payment = () => {

  return (
    <div>
      <Navbar/>
      <main className='pt-28 bg-[#F5F6FA]'>
        {/* bluebox */}
        <div className='bg-primary py-10 px-16 flex flex-row items-center rounded-b-3xl shadow-2xl h-44 absolute right-0 left-0 w-full'>
        </div>

        {/* main */}
        <div className='w-full px-16 py-5 flex flex-row gap-6 z-10 relative'>
          
          {/* Details */}
          <div className=' w-[70%] py-5'>
            {/* Payment Details */}
            <div className='flex flex-col'>
              <h2 className='font-semibold text-2xl text-white'>Payment Detail</h2>
              <div className='w-full px-7 py-7 my-6 bg-white rounded-xl shadow-xl'>
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
                      <Image src='/credit-card.svg' width={30} height={30}></Image>
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
                      <Image src='/paypal.svg' width={30} height={30}></Image>
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

          </div>

          {/* Flight Details */}
          <div className='w-[30%] flex flex-col gap-5 py-5'>
            {/* head */}
            <div className='flex flex-row justify-between'>
              <h2 className='font-semibold text-2xl text-white'>Flight Details</h2>
              <button className='text-base font-semibold text-white'>View Details</button>
            </div>
            {/* main */}
            <div className='w-full p-7 bg-white rounded-xl shadow-xl flex flex-col gap-5'>
              {/* maskapai name */}
              <div className='w-full rounded-2xl flex flex-row items-center gap-7'>
                <Image src='/garuda.jpg' width={100} height={100}/>
                <p className='font-semibold text-base text-41'>Garuda Indonesia</p>
              </div>
              {/* from to */}
              <div className='w-full'>
                <div className="flex flex-row justify-between">
                  <h1 className="text-lg font-semibold text-black">Medan ( IDN )</h1>
                  <Image src='/plane.svg' width={17} height={17} className='mb-2'/>
                  <h1 className="text-lg font-semibold text-black">Tokyo ( JPN )</h1>
                </div>
                <p className='font-thin text-sm text-41 mt-5'>Monday, 20 July 2023 <span className='text-41 mx-2'>●</span> 12:33 - 15:21</p>
              </div>
              {/* checklist */}
              <div>
                <div className='mb-2'>
                  <Image src='/checklist.svg' width={20} height={20} className='inline-block'></Image>
                  <p className='text-primary font-medium text-sm inline-block px-2'>Refundable</p>
                </div>
                <div className='mb-2'>
                  <Image src='/checklist.svg' width={20} height={20} className='inline-block'></Image>
                  <p className='text-primary font-medium text-sm inline-block px-2'>Can reschedule</p>
                </div>
              </div>
              {/* total payment */}
              <div className='flex flex-row border-t-2  pt-5'>
                <p className='font-medium text-lg flex-1'>Total Payment</p>
                <p className='text-primary font-semibold text-2xl mr-3'>$ 145,00</p>
                <Image src='/arrow.svg' width={12} height={12} className='rotate-90'/>
              </div>
            </div>

          </div>

        </div>
        
        <div className='flex justify-center'>
          <button className=' mb-10 text-white bg-primary font-bold text-lg py-4 px-14 rounded-xl shadow-lg hover:shadow-primary'>Pay Now</button>
        </div>
        
      </main>
      <Footer/>
    </div>
  )
};

export default Payment;

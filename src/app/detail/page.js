'use client'
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'
import Image from 'next/image';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/high-res.css'
import SelectCountry from '@/components/SelectCountry';

const Detail = () => {

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
            {/* Person Details */}
            <div className='flex flex-col'>
              <h2 className='font-semibold text-2xl text-white'>Contact Person Details</h2>
              <div className='w-full px-7 py-7 my-6 bg-white rounded-xl shadow-xl'>
                <form className='flex flex-col gap-5'>
                  <div>
                    <label htmlFor="name" className='block text-primary text-sm px-4'>Full Name</label>
                    <input 
                      type="text" name="name" id='name' placeholder='insert your full name' 
                      className='border-b-2 text-black p-4 text-base focus:outline-none focus:border-primary w-full'
                    />
                  </div>
                  <div>
                    <label htmlFor="name" className='block text-primary text-sm px-4'>Email</label>
                    <input 
                      type="text" name="email" placeholder='insert your email address'
                      className='border-b-2 text-black p-4 text-base focus:outline-none focus:border-primary w-full'
                    />         
                  </div>
                  <div>
                    <label htmlFor="name" className='block text-primary text-sm px-4'>Phone Number</label>
                    <PhoneInput
                      country={'id'}
                      containerClass='p-4 border-b focus:border-primary'
                      inputStyle={{border:'none',width:'100%'}}
                      buttonStyle={{border:'none',backgroundColor:'white'}}
                    />      
                  </div>
                  <div className='flex flex-row gap-4 py-4 px-5 bg-red-100 rounded-xl'>
                    <Image src='/warning.svg' width={24} height={24}></Image>
                    <p className='text-[#595959] text-sm font-semibold'>Make sure the customer data is correct!</p>
                  </div>
                </form>
              </div>
            </div>
            <div className='flex flex-col'>
              {/* header */}
              <h2 className='font-semibold text-2xl text-black'>Passengger Details</h2>
              {/* form */}
              <div className='w-full px-7 py-8 my-6 bg-white rounded-xl shadow-xl'>
                <form className='flex flex-col gap-5'>

                  {/* same contact toggle */}
                  <div className='flex flex-row gap-4 py-4 px-5 bg-sky-100 rounded-xl justify-between'>
                    <p className='text-[#595959] text-sm font-semibold'>Passenger : 1 Adult</p>          
                    <div>
                      <label
                        className="text-[#595959] text-sm font-semibold inline-block mx-4 hover:cursor-pointer"
                        htmlFor="flexSwitchCheckDefault">
                        Same as contact person
                        </label>
                      <input
                        className="mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault" />
                    </div>
                  </div>

                  {/* Title */}
                  <div>
                    <label htmlFor="title" className='block text-primary text-sm px-4'>Title</label>
                    <select name="title" id="" className='w-full focus:outline-none px-3 border-b-2 py-4 focus:border-primary'>
                      <option value="Mr" selected>Mr.</option>
                      <option value="Mrs">Mrs.</option>
                    </select>
                  </div>

                  {/* full name */}
                  <div>
                    <label htmlFor="name" className='block text-primary text-sm px-4'>Full Name</label>
                    <input 
                      type="text" name="name" id='name' placeholder='insert passenger full name' 
                      className='border-b-2 text-black p-4 text-base focus:outline-none focus:border-primary w-full'
                    />
                  </div>

                  {/* Nationallity */}
                  <div>
                    <label htmlFor="country" className='block text-primary text-sm px-4'>Nationallity</label>
                    <SelectCountry></SelectCountry>
                  </div>                  

                </form>
              </div>
            </div> 

            {/* Insurance */}
            <div className='flex flex-col'>
              {/* header */}
              <h2 className='font-semibold text-2xl text-black'>Insurance</h2>
              {/* form */}
              <div className='w-full px-7 py-8 my-6 bg-white rounded-xl shadow-xl'>
                <form className='flex flex-col gap-5'>

                  {/* insurence check */}
                  <div className='flex flex-col'>
                    <div className='flex flex-row w-full border-b-2 pb-4'>
                      <input 
                        type="checkbox" name='insurance' id='insurance' className='w-4'
                      />
                      <label htmlFor='insurance' className=' text-black text-lg font-semibold px-4'>Travel Insurance</label>
                      <p className='text-primary font-bold text-lg text-right flex-1'>$ 2,00<span className='text-[#979797] font-semibold text-sm'>/pax</span></p>
                    </div>
                    <p className='text-sm font-medium pt-5'>Get travel compensation up to $ 10.000,00</p>
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
          <button className=' mb-10 text-white bg-primary font-bold text-lg py-4 px-14 rounded-xl shadow-lg shadow-primary'>Procesed to Payment</button>
        </div>
        
      </main>
      <Footer/>
    </div>
  )
};

export default Detail;

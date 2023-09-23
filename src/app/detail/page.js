'use client'
import { useParams, useRouter } from 'next/navigation';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'
import Image from 'next/image';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/high-res.css'
import SelectCountry from '@/components/SelectCountry';
import FlightDetails from '@/components/FlightDetails';
import { useState } from 'react';
import Link from 'next/link';

const Detail = ({searchParams}) => {
  const ticket = searchParams;

  const [numberOfPassengers, setNumberOfPassengers] = useState('1');
  const [price,setPrice] = useState(ticket.price)
  const [insuranceChecked, setInsuranceChecked] = useState(false);
  const [passenger, setPassenger] = useState({
    title1: 'Mr',
    fullname1: '',
    nationality1: '',
    title2: 'Mr',
    fullname2: '',
    nationality2: '',
  });

  const handleChangePassenger = (e) => {
    const { name, value } = e.target;
    setPassenger({
      ...passenger,
      [name]: value,
    });
  };
  const handleNumberPassengers = (e) => {
    setNumberOfPassengers(e.target.value);
    e.target.value == 2 ? setPrice(price*2) : setPrice(price/2)
  };
  const handleInsuranceChange = (e) => {
    const isChecked = e.target.checked;
    setInsuranceChecked(isChecked);
    setPrice((prevPrice) => isChecked ? prevPrice + 2 : prevPrice - 2);
  };
  // console.log({passenger})

  return (
    <div>
      <Navbar/>
      <main className='pt-28 bg-[#F5F6FA] // max-xl:pt-20 // max-sm:pt-10'>
        {/* bluebox */}
        <div className='bg-primary py-10 px-16 flex flex-row items-center rounded-b-3xl shadow-2xl h-44 absolute right-0 left-0 w-full // max-sm:rounded-b-2xl max-sm:h-28'>
        </div>

        {/* main */}
        <div className='w-full px-16 py-5 flex flex-row gap-6 z-10 relative // max-xl:px-8 max-xl:gap-3 // max-sm:flex-col-reverse max-sm:px-4'>
          {/* Details */}
          <div className=' w-[70%] py-5 // max-sm:w-full'>
            {/* Person Details */}
            <div className='flex flex-col'>
              <h2 className='font-semibold text-2xl text-white // max-sm:text-primary'>Contact Person Details</h2>
              <div className='w-full px-7 py-7 my-6 bg-white rounded-xl shadow-xl // max-xl:px-5 // max-sm:px-4 max-sm:py-4'>
                <form className='flex flex-col gap-5'>
                  <div>
                    <label htmlFor="name" className='block text-primary text-sm px-4'>Full Name</label>
                    <input 
                      type="text" name="name" id='name' placeholder='insert your full name' 
                      className='border-b-2 text-black p-4 text-base focus:outline-none focus:border-primary w-full'
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className='block text-primary text-sm px-4'>Email</label>
                    <input 
                      type="text" name="email" id='email' placeholder='insert your email address'
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
                    <Image alt='' src='/warning.svg' width={24} height={24}></Image>
                    <p className='text-[#595959] text-sm font-semibold'>Make sure the customer data is correct!</p>
                  </div>
                </form>
              </div>
            </div>
            {/* Passengger Detail */}
            <div className='flex flex-col'>
              {/* header */}
              <h2 className='font-semibold text-2xl text-black'>Passengger Details</h2>
              {/* form */}
              <div className='w-full px-7 py-8 my-6 bg-white rounded-xl shadow-xl // max-xl:px-5 // max-sm:px-4 max-sm:py-4 '>
                <form className='flex flex-col gap-5'>

                  {/* same contact toggle */}
                  <div className='flex flex-row gap-4 py-4 px-5 bg-sky-100 rounded-xl justify-between // max-sm:flex-col'>
                    <div className='flex flex-row gap-3'>                     
                      <p className='text-[#595959] text-sm font-semibold '>Passenger</p>   
                      <p className='text-[#595959] text-sm font-semibold '>:</p>   
                      <select name="title" id="" value={numberOfPassengers} onChange={handleNumberPassengers} className='bg-transparent border-none outline-none text-[#595959] text-sm font-semibold'>
                        <option value="1">1 Adult</option>
                        <option value="2">2 Adult</option>
                      </select>      
                    </div>
                    <div className='flex flex-row justify-between'>
                      <label
                        className="text-[#595959] text-sm font-semibold inline-block mx-4 hover:cursor-pointer // max-sm:mx-0 max-sm:mr-4"
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

                  {/* Passengger 1 */}
                  <p className='text-[#000] text-base font-semibold mx-3'>Passengger 1</p>
                  {/* Title */}
                  <div>
                    <label htmlFor="title1" className='block text-primary text-sm px-4'>Title</label>
                    <select 
                      name="title1" id="title1" value={passenger.title1} onChange={handleChangePassenger}
                      className='w-full focus:outline-none px-3 border-b-2 py-4 focus:border-primary'
                    >
                      <option value="Mr">Mr.</option>
                      <option value="Mrs">Mrs.</option>
                    </select>
                  </div>

                  {/* full name */}
                  <div>
                    <label htmlFor="fullname1" className='block text-primary text-sm px-4'>Full Name</label>
                    <input 
                      value={passenger.fullname1} onChange={handleChangePassenger}
                      type="text" name="fullname1" id='fullname1' placeholder='insert passenger full name' 
                      className='border-b-2 text-black p-4 text-base focus:outline-none focus:border-primary w-full'
                    />
                  </div>

                  {/* Nationallity */}
                  <div>
                    <label htmlFor="nationality1" className='block text-primary text-sm px-4'>Nationality</label>
                    <SelectCountry name={'nationality1'} value={passenger.nationality1} onChange={handleChangePassenger}/>
                  </div>          

                  {/* Passengger 2 */}
                  {numberOfPassengers == 2 &&(<>
                  <p className='text-[#000] text-base font-semibold mx-3 mt-5'>Passengger 2</p>
                  {/* Title */}
                  <div>
                    <label htmlFor="title2" className='block text-primary text-sm px-4'>Title</label>
                    <select 
                      value={passenger.title2} onChange={handleChangePassenger}
                      name="title2" id="title2" className='w-full focus:outline-none px-3 border-b-2 py-4 focus:border-primary'
                    >
                      <option value="Mr">Mr.</option>
                      <option value="Mrs">Mrs.</option>
                    </select>
                  </div>

                  {/* full name */}
                  <div>
                    <label htmlFor="fullname2" className='block text-primary text-sm px-4'>Full Name</label>
                    <input 
                      value={passenger.fullname2} onChange={handleChangePassenger}
                      type="text" name="fullname2" id='fullname2' placeholder='insert passenger full name' 
                      className='border-b-2 text-black p-4 text-base focus:outline-none focus:border-primary w-full'
                    />
                  </div>

                  {/* Nationallity */}
                  <div>
                    <label htmlFor="nationality2" className='block text-primary text-sm px-4'>Nationality</label>
                    <SelectCountry name={'nationality2'} value={passenger.nationality2} onChange={handleChangePassenger}/>
                  </div></>)}                  

                </form>
              </div>
            </div> 

            {/* Insurance */}
            <div className='flex flex-col'>
              {/* header */}
              <h2 className='font-semibold text-2xl text-black'>Insurance</h2>
              {/* form */}
              <div className='w-full px-7 py-8 my-6 bg-white rounded-xl shadow-xl // max-xl:px-5 // max-sm:px-4 max-sm:py-4'>
                <form className='flex flex-col gap-5'>

                  {/* insurence check */}
                  <div className='flex flex-col'>
                    <div className='flex flex-row w-full border-b-2 pb-4'>
                      <input 
                        onChange={handleInsuranceChange} checked={insuranceChecked}
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
           <FlightDetails ticket={ticket} price={price}/>
        </div>
        
        <div className='flex justify-center'>
          <Link href={{ 
            pathname: '/detail/payment', 
            query: {...ticket,'totalPrice':price,...passenger}
          }}>
            <button className=' mb-10 -mt-5 text-white bg-primary font-bold text-lg py-4 px-14 rounded-xl shadow-lg shadow-primary'>Procesed to Payment</button>
          </Link>
        </div>
        
      </main>
      <Footer/>
    </div>
  )
};

export default Detail;

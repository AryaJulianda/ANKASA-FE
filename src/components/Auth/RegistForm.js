'use client'
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Bars } from "react-loader-spinner";

const RegistForm = (props) => {

  const base_url = 'https://easy-lime-seal-toga.cyclic.app';
  const router = useRouter();

  const [isLoading,setLoading]=useState(false)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        console.log(value)
        break;
      case "email":
        setEmail(value);
        console.log(value)
        break;
      case "password":
        setPassword(value);
        console.log(value)
        break;
    }

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const formData = new URLSearchParams();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      
      const loading = toast.loading('Waiting...');
      const response = await fetch(`${base_url}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      const data = await response.json();
      if (response.ok) {
        console.log(data.message,data.data);
        toast.success('Register Successfully!',{id:loading});
        router.push('/auth/login')
      } else {
        const message = data.message
        // console.log(`Regist Failed : ${message}`)
        toast.error(`Regist Failed : ${message}`,{id:loading});
      }
    } catch (error) {
      console.error("Something went wrong:", error);
      // toast.error(`Regist Failed : ${message}`);
    }
  };


  const [showPassword,setShowPassword] = useState(false);
  const handleShowPassword = () => {
    showPassword ? setShowPassword(false) : setShowPassword(true)
  }
  const [checked,setChecked] = useState(false);

  return (
    <div className=''>
      <h1 className='py-8 text-4xl font-semibold text-black max-sm:text-2xl max-sm:text-center'>Register</h1>
      <form className='flex flex-col gap-5'>
        <input 
          type="text" name="name" placeholder='Full Name' value={name} onChange={(e)=> handleChange(e)}
          className='p-4 text-base border-b-2 border-gray-300 focus:outline-none focus:border-primary'
        />

        <input 
          type="text" name="email" placeholder='Email' value={email} onChange={(e)=> handleChange(e)}
          className='p-4 text-base border-b-2 border-gray-300 focus:outline-none focus:border-primary'
        />         
      
        <div className='relative'>
          <input 
            type={showPassword ? "text" : "password"} name="password" placeholder='Password' value={password} onChange={(e)=> handleChange(e)}
            className='w-full p-4 text-base border-b-2 border-gray-300 focus:outline-none focus:border-primary'
          />
          <Image src='/see.svg' alt='see password' className='absolute top-0 right-0 p-4 w-14' width={1} height={1} onClick={handleShowPassword}/>
        </div>
      
        <button 
            type="submit" className={ checked ? 'bg-primary text-white py-4 font-bold rounded-xl mt-4 mb-0' : 'bg-sky-800 text-white py-4 font-bold rounded-xl mt-4 mb-0 cursor-not-allowed'} 
            onClick={(e)=>handleSubmit(e)} disabled={!checked}>
          Sing Up
        </button>

        <div className="form-group form-check">
          <input name="acceptTerms" type="checkbox" className='w-4 h-4 mr-4 checked:bg-primary border-primary' checked={checked} onChange={() => setChecked(!checked)}/>
          <label htmlFor="acceptTerms" className="">Accept Terms & Conditions</label>
        </div>

        <div className='py-4 mx-5 mt-5 text-center border-t-2 border-gray-300'>
          <p>Already have an account</p>
        </div>

        <Link href='/auth/login' onClick={()=>setLoading(true)} className='py-4 font-bold text-center bg-white border-2 text-primary rounded-xl border-primary'>
              {!isLoading ? 'Sing In' : 
              <Bars height = "20px"
                width = "auto"
                color = '#2395FF'/>}
            </Link>

      </form>
    </div>
  )
};

export default RegistForm;

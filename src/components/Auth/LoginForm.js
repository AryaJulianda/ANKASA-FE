'use client'
import Image from "next/image";
import { useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import toast from "react-hot-toast";
import { Bars } from  'react-loader-spinner'

const LoginForm = (props) => {
  const base_url = 'https://easy-lime-seal-toga.cyclic.app';
  const router = useRouter()

  const [loading,setLoading] = useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
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
      formData.append("email", email);
      formData.append("password", password);

      const loading = toast.loading('Waiting...');
      const response = await fetch(`${base_url}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      const data = await response.json();
      if (response.ok) {
        console.log(data.message,data.data);
        localStorage.setItem("access_token", data.data.access_token);
        // console.log("access_token", data.data.access_token);
        toast.success('Login Successfully!',{id:loading});
        router.push('/')
      } else {
        // console.log('Login Failed : ',data.message)
        toast.error(`Login Failed : ${data.message}`,{id:loading});
      }
    } catch (error) {
      console.error("Something went wrong:", error);
    }
  };

  // SEE PASSWORD
  const [showPassword,setShowPassword] = useState(false);
  const handleShowPassword = () => {
    showPassword ? setShowPassword(false) : setShowPassword(true)
  }

  return (
    <div className=''>
        <h1 className='py-8 text-4xl font-semibold text-black max-sm:text-2xl max-sm:text-center'>Login</h1>
        <form className='flex flex-col gap-5'>
          <input 
            type="text" name="email" placeholder='Email' value={email} onChange={(e)=>handleChange(e)}
            className='p-4 text-base border-b-2 border-gray-300 focus:outline-none focus:border-primary'
          />   
        
          <div className='relative'>
            <input 
              type={showPassword ? 'text' :'password'} name="password" placeholder='Password' security="false" value={password} onChange={(e)=>handleChange(e)}
              className='w-full p-4 text-base border-b-2 border-gray-300 focus:outline-none focus:border-primary'
            />
            <Image src='/see.svg' className='absolute top-0 right-0 p-4 w-14' width={1} height={1} alt='see password' onClick={handleShowPassword}/>
          </div>
        
          <button type="submit" className='py-4 my-4 font-bold text-white bg-primary rounded-xl' onClick={(e)=>handleSubmit(e)}>
            Sing In
          </button>

          {/* <div className="text-center">
            <p>Did you forgot your password?</p>
            <a href="#" className="mt-5 text-primary hover:border-b-2 border-primary">Tap here for reset</a>
          </div> */}

          <div className='py-4 mx-5 mt-5 text-center border-t-2 border-gray-300'>
            <p>Don't have an account</p>
          </div>

            <Link href='/auth/register' onClick={()=>setLoading(true)} className='py-4 font-bold text-center bg-white border-2 text-primary rounded-xl border-primary'>
              {!loading ? 'Sing Up' : 
              <Bars height = "20px"
                width = "auto"
                color = '#2395FF'/>}
            </Link>

        </form>
      </div>
  )
};

export default LoginForm;

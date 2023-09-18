'use client'
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const RegistForm = (props) => {

  const base_url = 'https://easy-lime-seal-toga.cyclic.app';
  const router = useRouter();

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
      <h1 className='text-4xl max-sm:text-2xl max-sm:text-center font-semibold py-8 text-black'>Register</h1>
      <form className='flex flex-col gap-5'>
        <input 
          type="text" name="name" placeholder='Full Name' value={name} onChange={(e)=> handleChange(e)}
          className='border-b-2 border-gray-300 p-4 text-base focus:outline-none focus:border-primary'
        />

        <input 
          type="text" name="email" placeholder='Email' value={email} onChange={(e)=> handleChange(e)}
          className='border-b-2 border-gray-300 p-4 text-base focus:outline-none focus:border-primary'
        />         
      
        <div className='relative'>
          <input 
            type={showPassword ? "text" : "password"} name="password" placeholder='Password' value={password} onChange={(e)=> handleChange(e)}
            className='border-b-2 border-gray-300 p-4 text-base focus:outline-none focus:border-primary w-full'
          />
          <Image src='/see.svg' alt='see password' className='absolute top-0 right-0 p-4 w-14' width={1} height={1} onClick={handleShowPassword}/>
        </div>
      
        <button 
            type="submit" className={ checked ? 'bg-primary text-white py-4 font-bold rounded-xl mt-4 mb-0' : 'bg-sky-800 text-white py-4 font-bold rounded-xl mt-4 mb-0 cursor-not-allowed'} 
            onClick={(e)=>handleSubmit(e)} disabled={!checked}>
          Sing Up
        </button>

        <div className="form-group form-check">
          <input name="acceptTerms" type="checkbox" className='mr-4 w-4 h-4 checked:bg-primary border-primary' checked={checked} onChange={() => setChecked(!checked)}/>
          <label htmlFor="acceptTerms" className="">Accept Terms & Conditions</label>
        </div>

        <div className='border-t-2 border-gray-300 text-center mx-5 py-4 mt-5'>
          <p>Already have an account</p>
        </div>

        <Link href="/auth/login" type="submit" className='text-primary bg-white py-4 font-bold rounded-xl border-2 border-primary text-center'>
          Sing In
        </Link>

      </form>
    </div>
  )
};

export default RegistForm;

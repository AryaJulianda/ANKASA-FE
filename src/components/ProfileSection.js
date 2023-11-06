'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
const ProfileSection = () => {
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    router.push('/auth/login')
  }
  return (
    <div className="min-w-[30%] h-fit bg-white p-7 rounded-xl shadow-xl flex flex-col items-center gap-6 // max-sm:w-full">
      {/* Photo Profile */}
      <Image src='/nico.jpg' width={135} height={135} alt="Photo Profile" className="mt-2 border-2 border-white rounded-full ring-2 ring-primary"/>
      {/* Select Photo Button */}
      <button className="px-6 py-2 text-base font-bold border-2 text-primary rounded-xl border-primary hover:shadow-md hover:shadow-primary">Select Photo</button>
      {/* Profile info*/}
      <div>
        <p className="mb-2 text-xl font-semibold">Mike Kowalski</p>
        {/* Profile Location */}
        <div className="flex flex-row items-center">
          <Image src='/icon-location-blue.svg' width={20} height={20} alt="Icon Location"/>
          <p className="text-sm text-41">Medan, Indonesia</p>
        </div>
      </div>
      {/* Card */}
      <div className="w-full">
        {/* Header Card */}
        <div className="flex flex-row items-center justify-between mb-2">
          <p className="text-sm font-semibold">Cards</p>
          <a href="" className="text-sm font-semibold text-primary">+ Add</a>
        </div>
        {/* Main Card */}
        <div className="px-6 py-3 rounded-lg shadow-lg bg-primary shadow-primary">
          <p className="mb-2 text-sm font-semibold text-white">44441 1235 5512 5555</p>
          <div className="flex flex-row items-center justify-between">
            <p className="text-[#AEFAFF] text-xs">X Card</p>
            <p className="text-[#AEFAFF] text-xs">$ 1,440.2</p>
          </div>
        </div>
        
      </div>
      {/* Nav */}
      <nav className="flex flex-col w-full gap-3">
        <button className="flex flex-row items-center justify-between w-full gap-5 px-4 py-2">
            <Image src='/user-circle.svg' width={20} height={20} alt="user"/>
            <p className="flex-1 text-base font-semibold text-primary text-start">Profile</p>
            <Image src='/arrow.svg' width={10} height={10} alt="arrow" />
          </button>
          <button className="flex flex-row items-center justify-between w-full gap-5 px-4 py-2">
            <Image src='/star.svg' width={20} height={20} alt="start icon"/>
            <p className="flex-1 text-base font-semibold text-black text-start">My Review</p>
            <Image src='/arrow-gray.svg' width={10} height={10} alt="arrow" />
          </button>
          <button className="flex flex-row items-center justify-between w-full gap-5 px-4 py-2">
            <Image src='/setting.svg' width={20} height={20} alt="user"/>
            <p className="flex-1 text-base font-semibold text-black text-start">Setting</p>
            <Image src='/arrow-gray.svg' width={10} height={10} alt="arrow" />
          </button>
          <button onClick={handleLogout} className="flex flex-row items-center justify-between w-full gap-5 px-4 py-2">
            <Image src='/logout.svg' width={20} height={20} alt="user"/>
            <p className="font-semibold text-base text-[#F24545] flex-1 text-start">Logout</p>
            <Image src='/arrow-red.svg' width={10} height={10} alt="arrow" />
          </button>
      </nav>
    </div>
  )
};

export default ProfileSection;

import Image from "next/image";

const ProfileSection = (props) => {
  return (
    <div className="min-w-[30%] bg-white p-7 rounded-xl shadow-xl flex flex-col items-center gap-6 // max-sm:w-full">
      {/* Photo Profile */}
      <Image src='/nico.jpg' width={135} height={135} alt="Photo Profile" className="mt-2 rounded-full ring-2 ring-primary border-2 border-white"/>
      {/* Select Photo Button */}
      <button className="text-primary text-base font-bold py-2 px-6 rounded-xl border-2 border-primary hover:shadow-md hover:shadow-primary">Select Photo</button>
      {/* Profile info*/}
      <div>
        <p className="font-semibold text-xl mb-2">Mike Kowalski</p>
        {/* Profile Location */}
        <div className="flex flex-row items-center">
          <Image src='/icon-location-blue.svg' width={20} height={20} alt="Icon Location"/>
          <p className="text-sm text-41">Medan, Indonesia</p>
        </div>
      </div>
      {/* Card */}
      <div className="w-full">
        {/* Header Card */}
        <div className="mb-2 flex flex-row justify-between items-center">
          <p className="font-semibold text-sm">Cards</p>
          <a href="" className="font-semibold text-sm text-primary">+ Add</a>
        </div>
        {/* Main Card */}
        <div className="bg-primary rounded-lg shadow-lg shadow-primary py-3 px-6">
          <p className="text-white font-semibold text-sm mb-2">44441 1235 5512 5555</p>
          <div className="flex flex-row justify-between items-center">
            <p className="text-[#AEFAFF] text-xs">X Card</p>
            <p className="text-[#AEFAFF] text-xs">$ 1,440.2</p>
          </div>
        </div>
        
      </div>
      {/* Nav */}
      <nav className="w-full flex flex-col gap-3">
        <button className="px-4 py-2 flex flex-row justify-between items-center w-full gap-5">
            <Image src='/user-circle.svg' width={20} height={20} alt="user"/>
            <p className="font-semibold text-base text-primary flex-1 text-start">Profile</p>
            <Image src='/arrow.svg' width={10} height={10} alt="arrow" />
          </button>
          <button className="px-4 py-2 flex flex-row justify-between items-center w-full gap-5">
            <Image src='/star.svg' width={20} height={20} alt="start icon"/>
            <p className="font-semibold text-base text-black flex-1 text-start">My Review</p>
            <Image src='/arrow-gray.svg' width={10} height={10} alt="arrow" />
          </button>
          <button className="px-4 py-2 flex flex-row justify-between items-center w-full gap-5">
            <Image src='/setting.svg' width={20} height={20} alt="user"/>
            <p className="font-semibold text-base text-black flex-1 text-start">Setting</p>
            <Image src='/arrow-gray.svg' width={10} height={10} alt="arrow" />
          </button>
          <button className="px-4 py-2 flex flex-row justify-between items-center w-full gap-5">
            <Image src='/logout.svg' width={20} height={20} alt="user"/>
            <p className="font-semibold text-base text-[#F24545] flex-1 text-start">Logout</p>
            <Image src='/arrow-red.svg' width={10} height={10} alt="arrow" />
          </button>
      </nav>
    </div>
  )
};

export default ProfileSection;

import Image from "next/image"
import greenIcon from '@/public/greenIcon.png';

const NavDashboard = () => {
  return (
    <header className="w-full py-3 bg-white border-b border-gray-200 flex items-center justify-between px-4 z-50 fixed top-0 left-0">
        <nav className=" w-full  bg-white  flex items-center justify-between px-4 z-50">
            <Image src={greenIcon} alt="green icon" width={70} />
            
        </nav>
    </header>
  )
}

export default NavDashboard
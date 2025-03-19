import { Link } from "react-router"
import { HiMiniBars3CenterLeft } from "react-icons/hi2"
import { IoSearch } from "react-icons/io5";


export const Navbar = () => {
  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
      {/* nav */}
      <nav className=" flex justify-between items-center">
        {/* left side */}
        <div className="flex items-center md:gap-16 gap-4">
          <Link to="/" >
            <HiMiniBars3CenterLeft className="size-6" />
          </Link>

          {/* search input */}
          <div className="relative sm:w-72 w-40 space-x-2">
            <IoSearch className="absolute inline-block left-3 inset-y-2"/>
            <input 
            type="text" 
            placeholder="Search" 
            className="px-6 py-1 border bg-[#eaeaea] rounded-md w-full md:px-8 focus:outline-none" />
          </div>

        </div>
        {/* right side */}
        <div >Links</div>
      </nav>


    </header>
  )
}

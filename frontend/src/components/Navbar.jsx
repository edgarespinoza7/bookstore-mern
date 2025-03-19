import React, { useState } from 'react'
import { Link } from "react-router"
import { HiMiniBars3CenterLeft } from "react-icons/hi2"
import { IoSearch } from "react-icons/io5";
import { LuCircleUser } from "react-icons/lu";
import { RiHeartLine } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";
import avatarImg from '../assets/avatar.png'

const navigation = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Orders', href: '/orders' },
  { name: 'Cart', href: '/cart' },
  { name: 'Check Out', href: '/checkout' },
]


export const Navbar = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const currentUser = true;

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
            <IoSearch className="absolute inline-block left-3 inset-y-2" />
            <input
              type="text"
              placeholder="Search"
              className="px-6 py-1 border bg-[#eaeaea] rounded-md w-full md:px-8 focus:outline-none" />
          </div>

        </div>
        {/* right side */}
        <div className="relative flex items-center gap-4 md:space-x-3 space-x-2">
          <div>
            {currentUser ?
              <>
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  <img src={avatarImg} alt="" className={`size-7 rounded-full ${currentUser ? 'ring-2 ring-blue-500' : ''}`} />
                </button>
                {/* Show dropdown */}
                {isDropdownOpen && (
                  <div className='absolute mt-2 w-48 z-40 right-0 bg-white shadow-lg rounded-md'>
                    <ul className='py-2'>
                      {navigation.map(item => (
                        <li key={item.name} onClick={() => setIsDropdownOpen(false)}>
                          <Link to={item.href} className="block py-2 px-4 text-sm" >{item.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
              :
              <Link to='/login'><LuCircleUser className="size-6" /></Link>
            }
          </div>
          <button className="hidden md:inline-block">
            <RiHeartLine className="size-6" />
          </button>
          <Link to='/cart' className="bg-primary text-white p-1 sm:px-6 px-2 rounded-md flex items-center gap-2">
            <FiShoppingCart className="size-6" />
            <span className="text-sm font-semibold sm:ml-1">0</span>
          </Link>
        </div>
      </nav>


    </header>
  )
}

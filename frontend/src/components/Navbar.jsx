import React, { useState } from "react";
import { Link } from "react-router";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { LuCircleUser } from "react-icons/lu";
import { RiHeartLine } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";
import avatarImg from "../assets/avatar.png";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";

const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Orders", href: "/orders" },
  { name: "Cart", href: "/cart" },
  { name: "Check Out", href: "/checkout" },
];

const Navbar = () => {
  // State to manage dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const cartItems = useSelector((state) => state.cart.cartItems);


  // State to manage user authentication status
  const { currentUser, logOut } = useAuth();

  const handleLogOut = async () => {
    try {
      await logOut();
      setIsDropdownOpen(false);
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  }

  return (
    <header className="max-w-screen-2xl mx-auto px-4 md:px-12 py-6">
      {/* nav */}
      <nav className=" flex justify-between items-center">
        {/* left side */}
        <div className="flex items-center md:gap-16 gap-4">
          <Link to="/">
            <HiMiniBars3CenterLeft className="size-6" />
          </Link>

          {/* search input */}
          <div className="relative sm:w-72 w-38 space-x-2">
            <IoSearch className="absolute inline-block left-2 inset-y-2" />
            <input
              type="text"
              placeholder="Search"
              className="px-8 py-1 border bg-[#eaeaea] rounded-md w-full md:px-8 focus:outline-none"
            />
          </div>
        </div>

        {/* right side */}
        <div className="relative flex items-center md:space-x-3 space-x-2">
          <div>
            {currentUser ? (
              <>
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  <img
                    src={avatarImg}
                    alt=""
                    className={`size-6 rounded-full ${currentUser ? "ring-2 ring-blue-500" : ""
                      }`}
                  />
                </button>
                {/* Show dropdown */}
                {isDropdownOpen && (
                  <div className="absolute mt-2 w-48 z-40 right-0 bg-white shadow-lg rounded-md">
                    <ul className="py-2">
                      {navigation.map((item) => (
                        <li
                          key={item.name}
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <Link
                            to={item.href}
                            className="block py-2 px-4 text-sm hover:bg-gray-100"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                      <li
                        onClick={() => {
                          handleLogOut();
                          setIsDropdownOpen(false);
                        }}
                      >
                        <button className="block w-full text-left py-2 px-4 text-sm hover:bg-gray-100">Log Out</button></li>
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link to="/login">
                <LuCircleUser className="size-6" />
              </Link>
            )}
          </div>
          <button className="hidden md:inline-block">
            <RiHeartLine className="size-6" />
          </button>
          <Link
            to="/cart"
            className="bg-primary text-base p-1 sm:px-6 px-2 rounded-md flex items-center gap-2"
          >
            <FiShoppingCart className="size-6" />
            {/* Show cart item count */}
            {cartItems.length > 0 && (
              <span className="absolute text-center top-1 right-1.5 bg-red-500 text-white font-bold text-xs rounded-full px-2 py-1">
                {cartItems.length}
              </span>
            )}
            {/* Cart item count */}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
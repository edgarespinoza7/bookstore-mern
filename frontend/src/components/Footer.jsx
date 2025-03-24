import React from 'react'
import footerLogo from '../assets/footer-logo.png'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (

    <footer className=' max-w-screen bg-gray-900 text-white px-4 py-10'>
      {/* Top Section */}
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center gap-8 px-4'>
        {/* Left Side - Logo and Nav */}
        <div className='md:w-1/2 w-full'>
          <img src={footerLogo} alt="logo" className='mb-5 w-36' />
          <ul className='flex flex-col md:flex-row gap-4'>
            <li><a href="#about" className='hover:text-primary'>About</a></li>
            <li><a href="#features" className='hover:text-primary'>Features</a></li>
            <li><a href="#pricing" className='hover:text-primary'>Pricing</a></li>
            <li><a href="#news" className='hover:text-primary'>News</a></li>
            <li><a href="#contact" className='hover:text-primary'>Contact</a></li>
          </ul>
        </div>
        {/* Right Side - Newsletter */}
        <div className='md:w-1/2 w-full'>
          <p className='mb-4'>Subscribe to our newsletter to receive the latest updates, news, and offers!</p>
          <div className='flex'>
            <input type="email"
              placeholder='Enter your email'
              className='w-full px-4 py-2 rounded-l-md text-black bg-white border-2 border-primary'
            />
            <button className='bg-primary px-6 py-2 text-black rounded-r-md hover:bg-amber-400 hover:text-white cursor-pointer'>Subscribe</button>
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-700 pt-6 px-4'>
        {/* Left Side - Privacy Links */}
        <ul className='flex gap-6 mb-4 md:mb-0'>
          <li><a href="#privacy" className='hover:text-primary'>Privacy Policy</a></li>
          <li><a href="#terms" className='hover:text-primary'>Terms of Service</a></li>
          <li><a href="#terms" className='hover:text-primary'>Sales and Refund</a></li>
          <li><a href="#terms" className='hover:text-primary'>Legal</a></li>
        </ul>

        {/* Right Side - Social Icons */}
        <div className='flex gap-6'>
          <a href="#" target='_blank' className='hover:text-primary'>
            <FaFacebook size={24} />
          </a>
          <a href="#" target='_blank' className='hover:text-primary'>
            <FaTwitter size={24} />
          </a>
          <a href="#" target='_blank' className='hover:text-primary'>
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
'use client';
import LogoImage from '../assets/icons/Frame5.svg';
import MenuIcon from '../assets/icons/menu.svg';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <div className="overflow-x-hidden max-w-screen overflow-y-auto bg-black">
      <div className="px-4">
    <div className="container bg-black">
      <div className="py-4 flex items-center justify-between">

      <div className="relative items-center">
        <div className="absolute top-1 items-center left-0 w-20 aspect-square bg-[linear-gradient(to_right,#F7AABE,#B57CEC,#E472D1)] blur-md opacity-40 rounded-full"></div>

        <LogoImage className="h-20 w-20 relative items-center mt-1"/>
      </div>
      <div className='border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden'>

      <MenuIcon className="text-white" />
      </div>
      <nav className='text-white gap-6 items-center hidden sm:flex'>
        
        <a href="https://joinhica.com" className='text-opacity-60 text-white hover:text-opacity-100 transition' >About</a>
        <a href="#" className='text-opacity-60 text-white hover:text-opacity-100 transition'>Features</a>
        <a href="#" className='text-opacity-60 text-white hover:text-opacity-100 transition'>Updates</a>
        <a href="https://bytebloggerbase.com/" className='text-opacity-60 text-white hover:text-opacity-100 transition'>Blogs</a>
        <Link href="#faqs" className='text-opacity-60 text-white hover:text-opacity-100 transition'>Help</Link>
        <button className='bg-white py-2 px-4 rounded-lg text-black' onClick={() => window.location.href = 'https://dash.ctf.joinhica.com'}>Sign-Up</button>
      </nav>

      </div>

    </div>
    </div>
    </div>
  )
};

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {HiOutlineUser,HiOutlineShoppingCart,HiBars3BottomRight} from 'react-icons/hi2'
import Searchbar from './Searchbar'
import CartDrawer from '../Layout/CartDrawer'
import { IoMdClose } from 'react-icons/io'



const Navbar = () => {
  const [drawerOpen,setDrawerOpen] = useState(false);
  const [navDrawerOpen,setNavDrawerOpen] =useState(false)

     const navDrawer =()=>{
        setNavDrawerOpen(!navDrawerOpen);
    }

    const toggleCartDrawer =()=>{
        setDrawerOpen(!drawerOpen);
    }
  return (
    <>
    <nav className='container mx-auto flex items-center justify-between py-6 px-6'>
      {/* Left-Logo */}
      <div >
        <Link to='/' className='text-2xl font-medium'>Rabbit</Link>
      </div>
      {/* Center -- Navigation Links */}
      <div className='hidden md:flex space-x-6'>
        <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
        Men
        </Link>
        <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
        Women
        </Link>
        <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
        Top Wear
        </Link>
        <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
        Bottom Wear
        </Link>
      </div>
      {/* Right Section for the Icons */}
      <div className='flex items-center space-x-6'>
         <Link to={'/profile'} className='hover:text-black'>
         <HiOutlineUser className='h-6 w-6 text-gray-700'/>
         </Link>
         <button onClick={toggleCartDrawer} className=' hover:text-black relative'>
         <HiOutlineShoppingCart className='h-6 w-6 text-gray-700'/>
         <span className='absolute -top-2 bg-[#ea2e0e] text-white text-xs rounded-full px-2 py-.5'>4</span>
         </button>
         {/* serach button */}
         <Searchbar className/> 
         <button onClick={navDrawer}className='md:hidden' >
         <HiBars3BottomRight className='h-6 w-6 text-gray-700'/>
         </button>
      </div>
    </nav>
    <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer}/>
    {/* Mobile navigation */}
    <div className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transfom transition-transform duration-300 z-50 ${navDrawerOpen?"translate-x-0":"-translate-x-full"}`}>
    <div className='flex justify-end p-4'>
      <button onClick={navDrawer}>
        <IoMdClose className='h-6 w-6 text-gray-600'/>
      </button>
    </div>
    <div className='p-4'>
      <h2 className='text-xl font-semibold mb-4'>Menu</h2>
      <nav className='space-y-4'>
        <Link to='#' onClick={navDrawer} className='block text-gray-600 hover:text-black'>Men</Link>
        <Link to='#' onClick={navDrawer} className='block text-gray-600 hover:text-black'>Women</Link>
        <Link to='#' onClick={navDrawer} className='block text-gray-600 hover:text-black'>Top Wear</Link>
        <Link to='#' onClick={navDrawer} className='block text-gray-600 hover:text-black'>Bottom Wear</Link>
      </nav>
    </div>
    </div>
    </>
  )
}

export default Navbar

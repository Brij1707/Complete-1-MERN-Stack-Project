import React, { useState } from 'react'
import { HiMagnifyingGlass, HiMiniXMark } from 'react-icons/hi2';

const Searchbar = () => {
    const [searchTerm,setSearchTerm] = useState("");
    const [isOpen,setIsOpen] = useState(false);

    const handleSerchToggle=()=>{
        setIsOpen(!isOpen);
        }

    const handleSearch = (e) =>{
        e.preventDefault();
        console.log("Search Term", searchTerm);
        setIsOpen(false); 
        
    }

  return (
    
      <div className={`flex items-center justify-center w-full transition-All duration-300 ${isOpen?"absolute top-0 left-0 w-full bg-white h-24 z-50":""}`}>
      
      {isOpen?(<form onSubmit={handleSearch} className='relative flex items-center justify-center w-full'>
        <div className='relative w-1/2 flex items-center'>
        <input type='text' onChange={(e)=> setSearchTerm(e.target.value)} value={searchTerm} placeholder='Search' className='bg-gray-100 px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-700'></input>
        <button type='submit' className='absolute right-2'>
            <HiMagnifyingGlass className='h-6 w-6'/>
        </button>
        </div> 
        <button onClick={handleSerchToggle} type='button' className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800'>
            <HiMiniXMark className='h-6 w-6' />
        </button>

      </form>):(
        <button onClick={handleSerchToggle}>
            <HiMagnifyingGlass className='h-6 w-6'/>
        </button>
      )}
    </div>
  )
}

export default Searchbar

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import {HiBell} from 'react-icons/hi'

function Headers() {

  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll',handleScroll)
    return () => {
      window.removeEventListener('scroll',handleScroll)
    }
  }, [])
  

  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
        <div className='flex items-center space-x-2 md:space-x-10'>
            <img alt='Netflix' src='https://rb.gy/ulxxee' className='cursor-pointer object-contain' width={100} height={100}/>
            <ul className='hidden space-x-4 md:flex'>
                <li className='headerLink'>Home</li>
                <li className='headerLink'>TV Shows</li>
                <li className='headerLink'>Movies</li>
                <li className='headerLink'>New & Popular</li>
                <li className='headerLink'>My List</li>
            </ul>
        </div>
        <div className='flex items-center space-x-4 text-sm font-light'>
            <AiOutlineSearch className='text-white hidden h-6 w-6 sm:inline'/>
            <p className='hidden lg:inline'>Kids</p>
            <HiBell className='w-6 h-6'/>
            <Link href='/account'>
              <img src='https://rb.gy/g1pwyx' alt='profile' className='cursor-pointer rounded'/>
            </Link>
        </div>
    </header>
  )
}

export default Headers
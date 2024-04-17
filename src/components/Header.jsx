
import React from 'react'
import MenuItem from "./MenuItem";
import Link from 'next/link';

function Header() {
  return (
    <div className='flex justify-between items-center p-3 max-width-6xl mx-auto'>
      <div className='flex gap-4'>
        <MenuItem title="home" address="/" /> 
        <MenuItem title="about" address="/about" /> 
      </div>
      <div className='flex gap-4 items-center'>
        <Link href={"/"} className="flex gap-1 items-center">
        <span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg'>ImDb</span>
        </Link>
        <span className='text-xl hidden sm:inline'>Clone</span>
      </div>
    </div>
  )
}

export default Header

import Link from 'next/link'
import React from 'react'

function MenuItem({title, address}) {
  return (
    <Link href={address} className='hover:text-amber-500'>
        <p className='upper hidden sm:inline text-sm'>{title}</p>
    </Link>
  )
}

export default MenuItem

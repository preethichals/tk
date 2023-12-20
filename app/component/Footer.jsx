import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
   <>
    <div className="hidden p-4 lg:flex lg:flex-1 lg:justify-end bg-gray-800">
        
            <div className="text-sm font-semibold leading-6 text-gray-900">
              <span className='flex flex-row justify-around'>
            <Link href='' target="_blank" rel="noopener noreferrer"><img src='/LinkedIn.png' width={30} height={30} className="me-2" /> </Link>
            <Link href='' target="_blank" rel="noopener noreferrer"><img src='/Facebook.png' width={30} height={30} className="me-2"/></Link>
            <Link href='' target="_blank" rel="noopener noreferrer"><img src='/gmail.png' width={30} height={30} className="me-2" /></Link>
            <Link href='' target="_blank" rel="noopener noreferrer"><img src='/WhatsApp.png' width={30} height={30} /></Link></span><span aria-hidden="true"></span>
            </div>
          </div>
   </>
  )
}

export default Footer
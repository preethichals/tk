import Link from 'next/link'
import React from 'react'

function Call() {
  return (
   <>
   
    <div className="relative isolate overflow-hidden py-16 sm:py-20 bg-gradient-to-l from-sky-600 to-blue-800">
     
    
     
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-md lg:mx-0 float-left">
          <h2 className="text-4xl font-medium  text-gray-100 sm:text-4xl text-right anton tracking-wide">Take a call with our Expert</h2>
          <p className="mt-2 text-xl leading-8 text-gray-100 text-left">
 Get started on your idea today
          </p>
           <div className="mt-6 float-left">
                        <Link
                          href="#"
                          className=" poppins rounded-sm border border-transparent bg-white px-4 py-2 text-base  text-gray-800  hover:text-blue-700"
                        >
                          Schedule a call
                        </Link>
                      </div>
        </div>
       
       
      </div>
    </div>
   </>
  )
}

export default Call
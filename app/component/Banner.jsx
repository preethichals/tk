import Link from 'next/link'
import React from 'react'

function Banner() {


  return (
   <>
   

    <div className="relative isolate overflow-hidden  py-24 sm:py-32">
      <img
        src="/h1.jpg"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 my-24">
        <div className="mx-auto max-w-md lg:mx-0 float-right">
          <h2 className="text-4xl font-bold tracking-tight text-blue-800 sm:text-6xl text-right">Work with us</h2>
          <p className="mt-6 text-lg leading-8 text-gray-800 text-right">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat fugiat aliqua.
          </p>
           <div className="mt-6 text-center">
                        <Link
                          href="#"
                          className="rounded-lg hover:bg-gradient-to-b  bg-gradient-to-t from-sky-600 to-blue-800 text-white poppins border-transparent bg-white px-4 py-2 text-base transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                        >
                          Read More
                        </Link>
                      </div>
        </div>
          
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          
        
        </div>
      </div>
    </div>

   </>
  )
}

export default Banner
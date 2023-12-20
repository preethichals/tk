import Link from 'next/link';
import React from 'react'

function Industry() {
      const industry = [
    {
      name: "Retails and Supply chain",
      imageSrc:
        "/tech-2.png",
      href: "#",
    },
      {
      name: "Education",
      imageSrc:
        "/tech-3.png",
      href: "#",
    },
      {
      name: "Logistics",
      imageSrc:
        "/tech-2.png",
      href: "#",
    },
      {
      name: "Health Care",
      imageSrc:
        "/tech-4.png",
      href: "#",
    },
      {
      name: "Automotive",
      imageSrc:
        "/tech-3.png",
      href: "#",
    },
   
   
  
  ];

  return (
   <>
      <div className=" py-10 sm:py-12 text-center bg-indigo-50 border-b-2 border-gray-400">
 <h2 className="text-4xl font-semibold tracking-wide text-center text-gray-900 sm:text-4xl anton">
          Industry Coverage
        </h2>
         <div className="bg-indigo-50 mt-8">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto  lg:max-w-none">
                  

                  <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:gap-x-8 ">
                    {industry.map((callout) => (
                      <div key={callout.name} className="group relative transition ease-in-out  delay-150 hover:-translate-y-4 duration-300 hover:border-gray-400 hover:scale-100  group-hover:text-white border-2 bg-gradient-to-r from-sky-600 to-blue-800  hover:bg-indigo-50 ">
                        <div className="relative  h-52 w-full overflow-hidden sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1  sm:h-52">
                          <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"/>
                        </div>
                        <h3 className="text-base font-semibold my-2 text-white">
                          <Link href={callout.href}>
                            <span className="absolute inset-0" />
                            {callout.name}
                          </Link>
                        </h3>
                       
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            </div>
   </>
  )
}

export default Industry
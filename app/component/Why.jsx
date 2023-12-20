import Link from 'next/link'
import React from 'react'

function Why() {
     const posts = [
  {
    id: 1,
    title: 'Business Domain Expertise',
    href: '#',
    description:'Our business acumen stimulates to explore newer business domains and problems. We provide holistic and flexible business architecture document, to tightly align with customers vision and mission. ',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
   {
    id: 2,
    title: 'Technical Expertise',
    href: '#',
    description:"ThoutKatalyst's competency on digital, embedded, mobile and cloud IT leads to the realization of detailed system architecture document. We also analyse and pinpoint the right and relevant technologies along with tools to implement products efficiently. ",
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
   {
    id: 3,
    title: 'Delivery expertise',
    href: '#',
    description:'ThoutKatalyst plan and prioritize a series of tasks to achieve the desired outcomes in a predictable and timely manner. We possess a unique ability to manage projects reliably so they are delivered on time, ',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },

]
  return (
    <>
   
    <div className=" bg-indigo-50 py-24 sm:py-26 text-center  ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8  ">
        <div className="mx-auto max-w-full lg:mx-0 ">
        <h2 className="text-4xl font-semibold tracking-wide text-center text-gray-900 sm:text-4xl anton">Why Thoutkatalyst</h2>

          <p className="my-8 text-xl text-gray-600 font-medium ">
           Our business acumen stimulates to explore newer business domains and problems
          </p>
        </div>
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-400  sm:mt-8 sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className=" poppins flex shadow-xl font-sans  group-hover:text-white max-w-xl bg-white group text-gray-700 py-12 px-8 rounded-xl flex-col items-start justify-between hover:bg-gradient-to-l from-sky-600 to-blue-800">
             
              <div className="  group-hover:text-white group relative text-gray-900 ">
                <h3 className=" text-xl font-medium tracking-wider  ">
                  <Link href={post.href}>
                    <span className="absolute inset-0 " />
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-7 tracking-wide">{post.description}</p>
              </div>
            
            </article>
          ))}
        </div>
      </div>
    </div>

    </>
  )
}

export default Why
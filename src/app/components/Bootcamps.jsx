import Image from 'next/image'
import React from 'react'
import { BsSoundwave } from 'react-icons/bs'

export default function Bootcamps() {
  return (
    <>
        <div className='w-full h-auto bg-blue-950'>
              <div className='w-[90%] h-auto bg-transparent flex justify-between items-center gap-4 mx-auto py-4 px-4 space-y-4'>
                    <div className='w-[50%] h-auto bg-transparent px-2 py-2'>
                        <div className='w-100 h-auto  flex justify-center items-center gap-4 rounded-lg border-2 border-blue-300 py-2'>
                            <span className='text-2xl font-extrabold text-white'><BsSoundwave /></span>
                             <span className='text-xl font-extrabold text-white'>Online classes </span>
                        </div>

                        <p className='font-extrabold text-white text-6xl py-8' >Interactive Online Learning</p>
                        <p className='bold text-white/50 text-xl py-8'>Advance your career with instructor-led online classes focused on in-demand skills, 
                            practical projects, and real-world applications.</p>

                        <div className='flex justify-center items-center gap-4 '>
                            <button className='w-[280px] h-auto bg-blue-700 border-2 border-blue-700 rounded-lg cursor-pointer text-white py-2'>Join our upcoming live training</button>
                            <button className='w-[250px] h-auto bg-transparent border-2 border-blue-400 rounded-lg cursor-pointer text-white py-2'>View upcoming online classes</button>
                        </div>
                    </div>


 
                    <div>
                        <div>
                            <Image src="/phos.jpeg" width={300} height={300} alt='negtech ' className='w-100 h-100 rounded-full object-cover'/>
                            <div className='w-120 h-auto mx-auto py-4'>
                            <p className='font-bold text-2xl text-white text-center py-2 '>Ngalaka Gift</p>
                            <p className='font-normal text-xl text-white/40 text-center '>Full stack web development instructor</p>
                            </div>
                            
                        </div>

                    </div>

             </div>
        </div>
    </>
  )
}

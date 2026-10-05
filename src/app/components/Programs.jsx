import React from 'react'
import { FaComputer } from 'react-icons/fa6'
import { PiGraduationCapBold } from 'react-icons/pi'
import { TiShoppingBag } from 'react-icons/ti'

export default function Programs() {
  return (
    <>
      <div className='w-full h-auto bg-blue-950'>
        <div className='w-[90%] h-auto flex justify-between items-center gap-2 bg-transparent py-4 mx-auto'>
                <div className='w-[50%] h-auto space-y-8 px-4 py-4'>
                    <h1 className='font-extrabold text-white border-l-4 px-4 border-red-700'>Career courses</h1>
                    <p className='text-4xl font-normal text-white'>Find a tech skill that moves you forward.</p>

                    <p className='text-white/40'>Build practical, career-ready skills through instructor-led training focused on real-world tools,
                         hands-on projects, and the skills employers value.</p>
                </div>

                <div  className='w-[40%] h-auto space-y-8 px-4 py-4'>

                    <div className='flex justify-between items-center gap-4 border-y-2 border-white/30 py-4'>
                        <div className='flex  justify-between items-center gap-4'>
                            <span className='font-semibold text-blue-100 text-xl'><FaComputer /></span>
                            <p className='font-bold text-white'>Hands-on</p>
                        </div>
                        <p className='text-white/60 font-normal text-sm'>Develop job-ready skills from day one</p>
                    </div>

                     <div className='flex justify-between items-center gap-4 border-y-2 border-white/30 py-4'>
                        <div   className='flex  justify-between items-center gap-4'>
                            <span className='font-semibold text-blue-100 text-xl'><PiGraduationCapBold /></span>
                            <p className='font-bold text-white'>Well-planned learning</p>
                        </div>
                        <p className='text-white/60 font-normal text-sm'>Guided learning programs</p>
                    </div>

                    <div className='flex justify-between items-center gap-4 border-y-2 border-white/30 py-4'>
                        <div className='flex  justify-between items-center gap-4' >
                            <span className='font-semibold text-blue-100 text-xl'><TiShoppingBag /></span>
                            <p className='font-bold text-white'>Industry-focused</p>
                        </div>
                        <p className='text-white/60 font-normal text-sm'>Projects & Mentorship</p>
                   </div>
            </div>
        </div>
      </div>
    </>
  )
}

import { programmes } from '@/lib/programmes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { CgShapeHexagon } from 'react-icons/cg';
import { GiGraduateCap } from 'react-icons/gi';
import { IoMdCheckmark } from 'react-icons/io';
import { IoArrowForward, IoLocation, IoTimeOutline } from 'react-icons/io5';
// import CurriculumForm from './CurriculumForm';

export default async function ProgrammeDetails({ params }) {
     const { id } = await params; // we need to get the value of the query params from the url

      const courseId = Number(id);
      
      const programme = programmes.find( (p) => p.id === courseId );

      if (!programme) {
    return (
      <div className="p-6">
        <p>programms not found</p>
      </div>
    );
  }
  return (
    <>
    <div className='w-full h-auto bg-blue-950'>

        <div className=" py-4 px-4 ">

        <Link href="/courses" className='className="text-white text-sm py-8 px-4 font-bold text-white'>
             ← All courses
        </Link>
        
        </div>

            <div className='w-[90%] h-auto mx-auto flex justify-between items-center gap-4'>

            <div className='w-[50%] h-auto space-y-4'>
            <h1 className="text-sm font-bold mt-6 border-l-4 border-red-800 px-4 text-white">
            {programme.name}
          </h1>

          <p className='font-semibold text-4xl text-white'>{programme.program}</p>
          <p className='text-white/60 font-normal text-xl'>{programme.description}</p>

          <div className='flex justify-between items-center gap-4 py-4'>
            <div className='flex justify-between items-center gap-4'>
                <span className='text-2xl font-bold text-green-700'><IoTimeOutline /></span>
                <div>
                    <p className=' text-sm text-white font-semibold'>{programme.duration}</p>
                    <p className='text-sm text-white/60 font-normal'>{programme.time}</p>
                </div>
                
            </div>
            <div className='flex justify-between items-center gap-4'>
                <span className='text-2xl font-bold text-green-700'><GiGraduateCap /></span>
                 <div>
                    <p className=' text-sm  text-white font-semibold'>{programme.mode}</p>
                    <p className='text-sm text-white/60 font-normal'>{programme.aid}</p>
                 </div>
            </div>
            <div className='flex justify-between items-center gap-4'>
                <span className='text-2xl font-bold text-green-700'><IoLocation /></span>
                <div>
                    <p className=' text-sm  text-white font-semibold'>{programme.format}</p>
                    <p className='text-sm text-white/60 font-normal'>{programme.type}</p>
                </div>
            </div>
          </div>
          
          <div className='flex justify-between items-center gap-4 px-4'>
                   <Link href="/application">
                <button className='flex justify-center items-center gap-4 py-2 px-2 cursor-pointer text-sm bg-red-800 text-white font-bold rounded-lg'>
                    {programme.enroll}
                    <span><IoArrowForward /></span>
                    </button>
                    </Link>

                  
                  <button className='flex justify-center items-center gap-4 py-2 px-2 cursor-pointer bg-transparent text-sm text-white font-bold border border-white rounded-lg'>
                  <span><CgShapeHexagon /></span>
                    {programme.askques}
              </button>
          
                
                <Link href={`/courses/${programme.id}/curri`}>
                  <button className='flex justify-center items-center gap-4 py-2 px-2 cursor-pointer bg-transparent text-sm text-white font-bold border border-white rounded-lg'>
                  <span><CgShapeHexagon /></span>
                    {programme.curri}
              </button>
            </Link> 
              
          </div>
        </div>

        <div className='w-[40%] h-auto border border-white  pb-2'>
          <Image
            src={programme.image}
            alt={programme.title}
            width={300}
            height={300}
            className="w-[500px] h-[400px] object-cover rounded-2xl"/>

          <div className='w-full h-auto'>
            <div className=' bg-gradient-to-br from-gray-400 via-gray-600 to-gray-950 px-4 py-2'>
                 <p className='text-white text-xl font-bold'>TUITION</p>
            </div>

            <div className='space-y-2 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 px-4 py-2'>
                <p className='text-xl font-extrabold text-white'>{programme.price}</p>
               <p className='text-white'>VAT-inclusive where applicable. Instalment plans are available.</p>
            </div>
        
          </div>
          </div>

            </div>

        <p className="mb-6 text-gray-600">
          Send email about {programme.name}.
        </p>
        {/* <CurriculumForm
          courseId={programme.id}
          courseName={programme.name}
        /> */}     
    </div>

    <div className='w-full h-auto bg-blue-100 py-12'>
            <div className='w-[90%] h-auto flex justify-between items-center gap-4 mx-auto '>
                  <div className=' w-[60%] h-auto space-y-4'>
                        <h1 className='text-orange-800 font-bold'>What you will learn</h1>
                        <p className='w-159 text-3xl font-semibold text-blue-950'>Flexible Learning, Practical Skills, Real Opportunities</p>

                        <div className='grid grid-cols-2 gap-4'>
                              <div className='flex justify-center items-center gap-4 px-4 py-4 border border-black/10 '>
                                <span><IoMdCheckmark /></span>
                                <p>{programme.details}</p>
                              </div>

                              <div className='flex justify-center items-center gap-4 px-4 py-4 border border-black/10 '>
                                <span><IoMdCheckmark /></span>
                                <p>{programme.details1}</p>
                              </div>

                              <div className='flex justify-center items-center gap-4 px-4 py-4 border border-black/10 '>
                                <span><IoMdCheckmark /></span>
                                <p>{programme.details2}</p>
                              </div>
                        </div>
                  </div>

                  <div className='w-[30%] h-auto bg-white py-4  border-t-4 border-red-800 space-y-4'>
                        <h1 className='font-extrabold text-xl text-red-800 px-4 py-4'>Your seat includes</h1>

                        <div  className='flex justify-start items-center gap-4 px-4 py-2'>
                          <span><IoMdCheckmark /></span> 
                          <p className='text-black/40 font-bold'>Live instructor-led classes</p>
                        </div>

                        <div  className='flex justify-start items-center gap-4 px-4 py-2'>
                          <span><IoMdCheckmark /></span> 
                          <p className='text-black/40 font-bold'>Practical labs and projects</p>
                        </div>

                        <div  className='flex justify-start items-center gap-4 px-4 py-2'>
                          <span><IoMdCheckmark /></span> 
                          <p className='text-black/40 font-bold'>Course materials</p>
                        </div>

                        <div  className='flex justify-start items-center gap-4 px-4 py-2'>
                          <span><IoMdCheckmark /></span> 
                          <p className='text-black/40 font-bold'>Portfolio and career support</p>
                        </div>

                         <div  className='flex justify-start items-center gap-4 px-4'>
                          <span><IoMdCheckmark /></span> 
                          <p>Verifiable certificate</p>
                        </div>

                   

                  <div className='space-y-4 w-60 h-aut0 mx-auto'>
                  <Link href="/application">
                  <button className='flex justify-center items-center gap-4 py-2 px-2 w-60 h-auto  bg-red-800  cursor-pointer text-white font-bold border border-white rounded-lg'>
                  <span><CgShapeHexagon /></span>
                    {programme.enroll}
                   </button>
                      </Link> 
                        </div>

                  </div>

            </div>
    </div>
    </>
  )
}

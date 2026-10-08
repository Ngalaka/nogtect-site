import { programmes } from '@/lib/programmes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { CgShapeHexagon } from 'react-icons/cg';
import { GiGraduateCap } from 'react-icons/gi';
import { IoArrowForward, IoLocation, IoTimeOutline } from 'react-icons/io5';
import { MdOutlineFileDownload } from 'react-icons/md';

export default async function ProgrammeDetails({ params }) {
     const { id } = await params; // we need to get the value of the query params from the url

      const programme = programmes.find( (p) => p.id === Number(id) );

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
                    <p className=' text-sm text-white font-semibold'>{programme.mode}</p>
                    <p className='text-sm text-white/60 font-normal'>{programme.aid}</p>
                 </div>
            </div>
            <div className='flex justify-between items-center gap-4'>
                <span className='text-2xl font-bold text-green-700'><IoLocation /></span>
                <div>
                    <p className=' text-sm text-white font-semibold'>{programme.format}</p>
                    <p className='text-sm text-white/60 font-normal'>{programme.type}</p>
                </div>
            </div>
          </div>
          
          <div className='flex justify-between items-center gap-4 px-4'>

                <button className='flex justify-center items-center gap-4 py-2 px-2 cursor-pointer text-sm bg-orange-600 text-white font-bold rounded-lg'>
                    {programme.enroll}
                    <span><IoArrowForward /></span>
                    </button>

                    <Link href="/courses">
              <button className='flex justify-center items-center gap-4 py-2 px-2 cursor-pointer bg-transparent text-sm text-white font-bold border border-white rounded-lg'>
                  <span><CgShapeHexagon /></span>
                    {programme.askques}
              </button>
            </Link>
                
          
                <button className='flex justify-center items-center gap-4 py-2 px-2 cursor-pointer bg-transparent text-sm text-white font-bold  rounded-lg'>
                    <span><MdOutlineFileDownload /></span>
                    {programme.curri}
                    </button>
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

        
         

    </div>
    </>
  )
}

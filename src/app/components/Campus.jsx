import React from 'react'
import { GoLocation } from 'react-icons/go'

export default function Campus() {
  return (
    <>
        <div className='w-full h-auto bg-blue-50 py-8 flex flex-col justify-stretch items-center gap-2 '>
                
                <div className='w-[80%] h-auto flex justify-between items-center gap-4 px-4'>
               <div className='w-[45%] space-y-4'>
                <h1 className='font-extrabold text-sm text-red-800'>Explore Our Locations</h1>
                <p  className='text-3xl text-black font-semibold' >Explore Our Learning Environment.</p>
            </div>

            <div>
                <h1 className='font-extrabold text-sm text-red-800' >Explore our campuses</h1>
            </div>
            </div>

            {/*  */}

            <div className='w-[80%] h-auto flex justify-between items-center gap-4 px-4 py-4'>
                <div className='w-[50%] h-auto bg-white shadow-md px-4 py-4 space-y-4'>
                    <div className='flex justify-stretch items-center gap-4'>
                        <span className='font-semibold text-xl text-red-800'><GoLocation /></span>
                        <p className=' text-black font-semibold'> Port Harcourt</p>
                    </div>

                    <p className=' text-black/60 font-semibold' >No 1 Adulphus Avenu along refinery Express Road Akpajo-Nichia Eleme Port Harcourt, River State </p>
                    <p  className='font-extrabold text-sm text-red-800'>07039306184</p>
                </div>

                <div className='w-[50%] h-auto bg-white shadow-md px-4 py-4 space-y-4'>
                    <div className='flex justify-stretch items-center gap-4'>
                        <span className='font-semibold text-xl text-red-800'><GoLocation /></span>
                        <p className=' text-black font-semibold'> Abia State</p>
                    </div>

                    <p className=' text-black/60 font-semibold' >No 1 Eronwu Street off Brass opposite Richpon filling Station, Aba North, Abia State  </p>
                    <p  className='font-extrabold text-sm text-red-800'>09159533474</p>
                </div>

            </div>
            
        </div>
    </>
  )
}

import Link from 'next/link'
import React from 'react'
import { IoArrowForward } from 'react-icons/io5'

export default function Begin() {
  return (
    <>
        <div className='w-full h-[200px] bg-blue-950 py-8 flex flex-col justify-center items-center'>
                <div className='w-[90%] h-auto  bg-transparent mx-auto space-y-4 py-8'>
                        <h1 className='text-xl font-extrabold text-blue-300'>Need help choosing the right course?</h1>
                </div>

                <div className='w-[90%] h-auto flex justify-between items-center gap-4'>
                    <div>
                        <p className='font-semibold text-4xl text-white'>Tell us your goal. We will help you choose.</p>
                    </div>

                     <div>

                        <Link href="/contact"
                       className="inline-block rounded-lgflex justify-center items-center gap-4 font-extrabold cursor-pointer text-sm bg-orange-600 text-white px-2 py-2 rounded-lg"
                      >
                     Get Course Guidance
                    </Link>
                     </div>
                </div>
        </div>
    </>
  )
}

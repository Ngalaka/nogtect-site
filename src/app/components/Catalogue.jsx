import React from 'react'

export default function Catalogue() {
  return (
    <>
        <div className = "w-full h-auto  space-y-8 py-4">
            <div className = "w-[80%] h-auto flex justify-between items-baseline gap-4 mx-auto">

                <div className = "w-[45%] h-auto  space-y-4 px-2">
                    <h1 className = "text-2xl font-bol">Programme catalogue</h1>
                    <p  className = "text-4xl text-blue-800 font-bold">Learn a skill you can use.</p>
                </div>

                <div className = "w-[55%] h-auto ">
                  <p className =" text-black/80 text-xl">Find the right training for your goals. Explore programs by skill area, 
                  experience level, and learning format, then get guidance from our team before you enroll.</p>   
                </div>
            </div>
        </div>
    </>
  )
}

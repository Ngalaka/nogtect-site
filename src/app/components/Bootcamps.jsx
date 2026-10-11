import Image from 'next/image'
import React from 'react'
import { BsSoundwave } from 'react-icons/bs'

export default function Bootcamps() {
  return (
    <>
      <div className="w-full h-auto bg-blue-950">
        <div className="w-[90%] h-auto bg-transparent flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-4 mx-auto py-8 px-2 sm:px-4">

          {/* Instructor Image and Details */}
          <div className="w-full lg:w-[45%] h-auto flex flex-col items-center">
            <div className="w-full flex flex-col items-center">

              <Image
                src="/phos.jpeg"
                width={500}
                height={500}
                alt="NOGTECH instructor Ngalaka Gift"
                className="w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-100 xl:h-100 rounded-full object-cover"
              />

              <div className="w-full max-w-[480px] mx-auto py-4">
                <p className="font-bold text-xl sm:text-2xl text-white text-center py-2">
                  Ngalaka Gift
                </p>

                <p className="font-normal text-sm sm:text-base lg:text-xl text-white/40 text-center">
                  Full stack web development instructor
                </p>
              </div>

            </div>
          </div>

          {/* Online Classes Content */}
          <div className="w-full lg:w-[50%] h-auto bg-transparent px-1 sm:px-2 py-2">

            <div className="w-full sm:max-w-[400px] h-auto flex justify-center items-center gap-3 sm:gap-4 rounded-lg border-2 border-blue-300 py-2 px-3">
              <span className="text-xl sm:text-2xl font-extrabold text-white">
                <BsSoundwave />
              </span>

              <span className="text-base sm:text-xl font-extrabold text-white">
                Online classes
              </span>
            </div>

            <p className="font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl py-5 sm:py-8">
              Interactive Online Learning
            </p>

            <p className="font-bold text-white/50 text-base sm:text-lg lg:text-xl py-4 sm:py-6 lg:py-8">
              Advance your career with instructor-led online classes focused
              on in-demand skills, practical projects, and real-world
              applications.
            </p>

            {/* Buttons */}
            <div className="w-full flex flex-col sm:flex-row justify-start items-stretch sm:items-center gap-3 sm:gap-4">
              <button className="w-full sm:w-auto sm:flex-1 lg:flex-none lg:w-[280px] min-h-11 bg-blue-700 border-2 border-blue-700 rounded-lg cursor-pointer text-white text-sm sm:text-base px-4 py-3">
                Join our upcoming live training
              </button>

              <button className="w-full sm:w-auto sm:flex-1 lg:flex-none lg:w-[250px] min-h-11 bg-transparent border-2 border-blue-400 rounded-lg cursor-pointer text-white text-sm sm:text-base px-4 py-3">
                View upcoming online classes
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
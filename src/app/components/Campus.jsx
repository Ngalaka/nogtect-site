import React from 'react'
import { GoLocation } from 'react-icons/go'

export default function Campus() {
  return (
    <>
      <div className="w-full h-auto bg-blue-50 py-8 flex flex-col justify-stretch items-center gap-2">

        {/* Section heading */}
        <div className="w-[90%] lg:w-[80%] h-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 px-2 sm:px-4">

          <div className="w-full sm:w-[65%] lg:w-[45%] space-y-4">
            <h1 className="font-extrabold text-sm text-red-800">
              Explore Our Locations
            </h1>

            <p className="text-2xl sm:text-3xl text-black font-semibold">
              Explore Our Learning Environment.
            </p>
          </div>

          <div className="w-full sm:w-auto">
            <h1 className="font-extrabold text-sm text-red-800">
              Explore our campuses
            </h1>
          </div>

        </div>

        {/* Campus cards */}
        <div className="w-[90%] lg:w-[80%] h-auto flex flex-col md:flex-row justify-between items-stretch gap-4 px-2 sm:px-4 py-4">

          {/* Abia State Campus */}
          <div className="w-full md:w-1/2 h-auto bg-white shadow-md px-4 sm:px-6 py-5 space-y-4 rounded-lg">

            <div className="flex justify-start items-center gap-3">
              <span className="font-semibold text-xl text-red-800 shrink-0">
                <GoLocation />
              </span>

              <p className="text-black font-semibold text-base sm:text-lg">
                Abia State
              </p>
            </div>

            <p className="text-black/60 font-semibold text-sm sm:text-base leading-7 break-words">
              No 1 Eronwu Street off Brass opposite Richpon filling Station, Aba North, Abia State
            </p>

            <p className="font-extrabold text-sm text-red-800">
              09159533474
            </p>

          </div>

          {/* Port Harcourt Campus */}
          <div className="w-full md:w-1/2 h-auto bg-white shadow-md px-4 sm:px-6 py-5 space-y-4 rounded-lg">

            <div className="flex justify-start items-center gap-3">
              <span className="font-semibold text-xl text-red-800 shrink-0">
                <GoLocation />
              </span>

              <p className="text-black font-semibold text-base sm:text-lg">
                Port Harcourt
              </p>
            </div>

            <p className="text-black/60 font-semibold text-sm sm:text-base leading-7 break-words">
              No 1 Adulphus Avenu along refinery Express Road Akpajo-Nichia Eleme Port Harcourt, River State
            </p>

            <p className="font-extrabold text-sm text-red-800">
              07039306184
            </p>

          </div>

        </div>

      </div>
    </>
  )
}
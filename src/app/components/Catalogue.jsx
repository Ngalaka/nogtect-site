import React from 'react'

export default function Catalogue() {
  return (
    <>
      <div className="w-full h-auto space-y-8 py-6 sm:py-8">

        {/* Section heading and description */}
        <div className="w-[90%] lg:w-[80%] h-auto flex flex-col md:flex-row justify-between items-start md:items-baseline gap-6 md:gap-4 mx-auto">

          {/* Right side: Description */}
          <div className="w-full md:w-[55%] h-auto px-2">

            <p className="text-base sm:text-lg lg:text-xl text-black/80 leading-7">
              Find the right training for your goals. Explore programs by skill area,
              experience level, and learning format, then get guidance from our team
              before you enroll.
            </p>

          </div>

          {/* Left side: Heading */}
          <div className="w-full md:w-[45%] h-auto space-y-4 px-2">

            <h1 className="text-xl sm:text-2xl font-bold">
              Programme catalogue
            </h1>

            <p className="text-3xl sm:text-4xl text-blue-800 font-bold leading-tight">
              Learn a skill you can use.
            </p>

          </div>

        </div>

      </div>
    </>
  )
}
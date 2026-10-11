import Link from 'next/link'
import React from 'react'
import { IoArrowForward } from 'react-icons/io5'

export default function Begin() {
  return (
    <>
      <div className="flex min-h-[200px] w-full flex-col items-center justify-center bg-blue-950 py-8">
        {/* Heading */}
        <div className="mx-auto h-auto w-[90%] space-y-4 bg-transparent py-4 sm:py-6">
          <h1 className="text-lg font-extrabold text-blue-300 sm:text-xl">
            Need help choosing the right course?
          </h1>
        </div>

        {/* Main content */}
        <div className="flex h-auto w-[90%] flex-col items-start justify-between gap-6 lg:flex-row lg:items-center lg:gap-4">
          {/* Description */}
          <div className="w-full lg:w-auto">
            <p className="text-2xl font-semibold leading-snug text-white sm:text-3xl lg:text-4xl">
              Tell us your goal. We will help you choose.
            </p>
          </div>

          {/* Call-to-action button */}
          <div className="w-full shrink-0 sm:w-auto">
            <Link
              href="/contact"
              className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-orange-600 px-4 py-3 text-sm font-extrabold text-white transition-colors duration-300 hover:bg-orange-700 sm:w-auto"
            >
              Get Course Guidance
              <IoArrowForward size={18} />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
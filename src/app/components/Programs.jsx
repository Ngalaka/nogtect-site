"use client";

import React from "react";
import { FaComputer } from "react-icons/fa6";
import { PiGraduationCapBold } from "react-icons/pi";
import { TiShoppingBag } from "react-icons/ti";

export default function Programs() {
  return (
    <div className="w-full h-auto bg-blue-950">
      <div className="mx-auto flex h-auto w-[90%] max-w-7xl flex-col items-stretch justify-between gap-8 py-8 sm:py-10 lg:flex-row lg:items-center lg:gap-10 lg:py-12">

        {/* RIGHT SECTION: Program benefits */}
        <div className="flex h-auto min-w-0 flex-col space-y-0 px-2 py-2 sm:px-4 lg:w-[45%]">

          {/* Benefit 1 */}
          <div className="flex flex-col gap-3 border-y border-white/30 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <div className="flex min-w-0 items-center gap-3 sm:gap-4">
              <span className="shrink-0 text-xl font-semibold text-blue-100 sm:text-2xl">
                <FaComputer />
              </span>

              <p className="font-bold text-white sm:text-base">
                Hands-on
              </p>
            </div>

            <p className="text-sm font-normal leading-6 text-white/60 sm:max-w-[55%] sm:text-right">
              Develop job-ready skills from day one
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="flex flex-col gap-3 border-b border-white/30 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <div className="flex min-w-0 items-center gap-3 sm:gap-4">
              <span className="shrink-0 text-xl font-semibold text-blue-100 sm:text-2xl">
                <PiGraduationCapBold />
              </span>

              <p className="font-bold text-white sm:text-base">
                Well-planned learning
              </p>
            </div>

            <p className="text-sm font-normal leading-6 text-white/60 sm:max-w-[55%] sm:text-right">
              Guided learning programs
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="flex flex-col gap-3 border-b border-white/30 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <div className="flex min-w-0 items-center gap-3 sm:gap-4">
              <span className="shrink-0 text-xl font-semibold text-blue-100 sm:text-2xl">
                <TiShoppingBag />
              </span>

              <p className="font-bold text-white sm:text-base">
                Industry-focused
              </p>
            </div>

            <p className="text-sm font-normal leading-6 text-white/60 sm:max-w-[55%] sm:text-right">
              Projects &amp; Mentorship
            </p>
          </div>

        </div>

        {/* LEFT SECTION: Heading and description */}
        <div className="flex h-auto min-w-0 flex-col space-y-5 px-2 py-2 sm:space-y-6 sm:px-4 lg:w-[50%] lg:space-y-8">
          <h1 className="border-l-4 border-red-700 px-4 font-extrabold text-white text-base sm:text-lg">
            Career courses
          </h1>

          <p className="text-3xl font-normal leading-tight text-white sm:text-4xl lg:text-5xl">
            Find a tech skill that moves you forward.
          </p>

          <p className="text-sm leading-7 text-white/60 sm:text-base">
            Build practical, career-ready skills through instructor-led
            training focused on real-world tools, hands-on projects, and
            the skills employers value.
          </p>
        </div>

      </div>
    </div>
  );
}
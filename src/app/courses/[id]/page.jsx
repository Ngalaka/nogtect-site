import { programmes } from '@/lib/programmes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { CgShapeHexagon } from 'react-icons/cg';
import { FaRegAddressBook } from 'react-icons/fa6';
import { GiGraduateCap } from 'react-icons/gi';
import { IoMdCheckmark } from 'react-icons/io';
import { IoArrowForward, IoCheckmark, IoLocation, IoTimeOutline } from 'react-icons/io5';
import { MdOutlineDateRange, MdOutlineFileDownload } from 'react-icons/md';
import { PiBagSimpleBold } from 'react-icons/pi';
import { SiCssdesignawards } from 'react-icons/si';


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
    {/* Learning section */}
<div className="w-full bg-blue-50 py-8 sm:py-10 lg:py-12">

  <div className="mx-auto flex w-full max-w-7xl flex-col items-stretch gap-8 px-4 sm:px-6 lg:flex-row lg:items-start lg:gap-10 lg:px-8">

    {/* Sticky sidebar */}
    <aside className="w-full min-w-0 self-start border-t-4 border-red-800 bg-white py-4 shadow-sm lg:sticky lg:top-24 lg:w-[30%] lg:shrink-0">

      <h2 className="px-4 py-4 text-xl font-extrabold text-red-800">
        Your seat includes
      </h2>

      {[
        "Live instructor-led classes",
        "Practical labs and projects",
        "Course materials",
        "Portfolio and career support",
        "Verifiable certificate",
      ].map((benefit) => (
        <div key={benefit} className="flex items-start gap-3 px-4 py-2">
          <span className="mt-1 shrink-0">
            <IoMdCheckmark />
          </span>
          <p className="font-bold text-black/50">{benefit}</p>
        </div>
      ))}

      <div className="space-y-3 px-4 py-4">

        <Link
          href="/application"
          className="flex w-full items-center justify-center gap-3 rounded-lg bg-red-800 px-4 py-3 text-center font-bold text-white shadow-lg transition hover:bg-red-900"
        >
          {programme.enroll}
          <IoArrowForward />
        </Link>

        <Link
          href="/contact"
          className="flex w-full items-center justify-center gap-3 rounded-lg border border-red-800 px-4 py-3 text-center font-bold text-red-800 hover:bg-red-50"
        >
          {programme.askques}
          <CgShapeHexagon />
        </Link>

        <Link
          href={`/courses/${programme.id}/curri`}
          className="flex w-full items-center justify-center gap-3 rounded-lg border border-red-800 px-4 py-3 text-center font-bold text-red-800 hover:bg-red-50"
        >
          <MdOutlineFileDownload />
          {programme.curri}
        </Link>

      </div>
    </aside>

    {/* Main learning content */}
    <div className="w-full min-w-0 space-y-10 lg:flex-1">

      {/* What you will learn */}
      <section className="space-y-4">
        <h2 className="font-bold text-orange-800">
          What you will learn
        </h2>

        <p className="w-full max-w-3xl text-2xl font-semibold leading-tight text-blue-950 sm:text-3xl">
          Flexible Learning, Practical Skills, Real Opportunities
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

          <div className="flex items-start gap-3 border border-black/10 p-4">
            <span className="mt-1 shrink-0">
              <IoMdCheckmark />
            </span>
            <p className="min-w-0">{programme.details}</p>
          </div>

          <div className="flex items-start gap-3 border border-black/10 p-4">
            <span className="mt-1 shrink-0">
              <IoMdCheckmark />
            </span>
            <p className="min-w-0">{programme.details1}</p>
          </div>

          <div className="flex items-start gap-3 border border-black/10 p-4 sm:col-span-2">
            <span className="mt-1 shrink-0">
              <IoMdCheckmark />
            </span>
            <p className="min-w-0">{programme.details2}</p>
          </div>

        </div>
      </section>

      {/* Upcoming classes */}
      <section className="w-full space-y-4">
        <h2 className="py-2 text-xl font-semibold text-red-800">
          Upcoming classes
        </h2>

        <div className="flex flex-col gap-3 py-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-3xl font-semibold text-blue-950 sm:text-4xl">
            Choose a published intake.
          </p>
          <p className="text-sm font-bold text-black/40">
            Dates shown here come from the NOGTECH class system.
          </p>
        </div>

        <div className="w-full space-y-4 border-2 border-dotted bg-blue-100 px-4 py-6 sm:px-6 sm:py-8">
          <div className="flex items-start gap-3 sm:gap-4">
            <span className="shrink-0">
              <MdOutlineDateRange size={30} />
            </span>

            <div className="min-w-0 space-y-4">
              <p className="text-xl font-semibold text-black/70 sm:text-2xl">
                The next intake is being confirmed.
              </p>

              <p className="font-semibold leading-relaxed text-black/60">
                Admissions will confirm the start date, class time, learning
                format, and availability before you make a commitment.
              </p>

              <Link
                href="/contact"
                className="inline-flex flex-wrap items-center gap-3 text-lg font-bold text-red-800 hover:underline sm:text-xl"
              >
                Ask for the next class date
                <IoArrowForward />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programme overview */}
      <section className="w-full space-y-5 py-6 sm:py-8">

        <div className="flex flex-col gap-2 px-1 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-semibold text-blue-950">
            Programme Overview
          </h2>
          <p className="text-sm text-black/50">
            4 topic areas / 6 weeks
          </p>
        </div>

        <div className="flex flex-col items-start gap-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-3xl font-normal text-black sm:text-4xl">
            Explore the Curriculum
          </p>

          <Link
            href={`/courses/${programme.id}/curri`}
            className="inline-flex w-full items-center justify-center gap-3 rounded-lg border border-black px-4 py-3 font-bold text-black hover:bg-blue-100 sm:w-auto"
          >
            <MdOutlineFileDownload />
            {programme.curri}
          </Link>
        </div>

        <p className="text-base font-semibold leading-relaxed text-black/50 sm:text-lg">
          Explore the key topics covered in this programme. For a detailed
          breakdown of lessons and modules, please contact our Admissions Team.
        </p>
      </section>

      {/* Prerequisites and tools */}
      <section className="w-full space-y-4">
        <h2 className="py-2 text-xl font-semibold text-red-800">
          Get Ready Before Your First Class
        </h2>

        <p className="text-3xl text-black sm:text-4xl">
          Know what you need and where the course can take you.
        </p>

        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">

          <div className="min-w-0 space-y-4 bg-white px-4 py-5">
            <span className="block text-green-700">
              <FaRegAddressBook size={30} />
            </span>

            <p className="py-2 text-xl font-semibold">Prerequisites</p>

            <div className="flex items-start gap-3">
              <span className="mt-1 shrink-0 text-green-700">
                <IoCheckmark />
              </span>
              <p>A laptop and reliable internet for online classes</p>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1 shrink-0 text-green-700">
                <IoCheckmark />
              </span>
              <p>No prior experience required for beginner tracks</p>
            </div>
          </div>

          <div className="min-w-0 space-y-4 bg-white px-4 py-5">
            <span className="block text-green-700">
              <PiBagSimpleBold size={30} />
            </span>

            <p className="py-2 text-xl font-semibold">
              Tools You Will Gain Hands-On Experience With
            </p>

            {[
              "Content Briefs and Project Guidelines",
              "Software Development Libraries",
              "Code Structure & Diagrams",
              "Reusable Code Components",
            ].map((tool) => (
              <div key={tool} className="flex items-start gap-3">
                <span className="mt-1 shrink-0 text-green-700">
                  <IoCheckmark />
                </span>
                <p>{tool}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Hands-on project experience */}
      <section className="w-full space-y-4">
        <h2 className="py-2 text-xl font-semibold text-red-800">
          Hands-On Project Experience
        </h2>

        <p className="text-3xl text-black/80 sm:text-4xl lg:text-5xl">
          Build work worth showing.
        </p>

        <div className="w-full bg-green-800 px-4 py-5 sm:px-6 sm:py-6">
          <div className="flex items-start gap-4">
            <span className="shrink-0 text-white">
              <SiCssdesignawards size={30} />
            </span>

            <div className="min-w-0 space-y-4">
              <h3 className="font-bold text-white">
                Completion credential
              </h3>

              <p className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                Receive an Industry-Recognized Certificate
              </p>

              <p className="text-sm font-bold leading-relaxed text-white/70">
                Earn a verifiable NOGTECH Certificate of Completion backed by
                an industry-aligned curriculum and practical, hands-on learning.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>

  </div>
</div>

<div className="w-full bg-blue-950">

  <p className="mx-auto max-w-7xl px-4 pb-6 text-gray-300 sm:px-6 lg:px-8">
    Send email about {programme.name}.
  </p>

  {/* Course introduction and tuition */}
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pb-10 sm:px-6 lg:flex-row lg:items-start lg:px-8">

    {/* Tuition card */}
    <div className="w-full min-w-0 overflow-hidden rounded-xl border border-white/20 pb-2 lg:w-[40%] lg:shrink-0">

      <Image
        src={programme.image}
        alt={programme.title || programme.name}
        width={700}
        height={500}
        sizes="(max-width: 1023px) 100vw, 40vw"
        className="h-auto max-h-[420px] w-full object-cover"
      />

      <div className="bg-gradient-to-br from-gray-400 via-gray-600 to-gray-950 px-4 py-3">
        <p className="text-xl font-bold text-white">TUITION</p>
      </div>

      <div className="space-y-2 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 px-4 py-4">
        <p className="text-xl font-extrabold text-white sm:text-2xl">
          {programme.price}
        </p>
        <p className="text-sm leading-relaxed text-white sm:text-base">
          VAT-inclusive where applicable. Instalment plans are available.
        </p>
      </div>

    </div>

    {/* Course information */}
    <div className="w-full min-w-0 space-y-5 lg:w-[60%]">

      <h1 className="mt-4 border-l-4 border-red-800 px-4 text-sm font-bold text-white">
        {programme.name}
      </h1>

      <p className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
        {programme.program}
      </p>

      <p className="text-base leading-relaxed text-white/60 sm:text-lg">
        {programme.description}
      </p>

      {/* Course information */}
      <div className="grid grid-cols-1 gap-5 py-4 sm:grid-cols-2 xl:grid-cols-3">

        <div className="flex items-start gap-3">
          <span className="shrink-0 text-2xl text-green-500">
            <IoTimeOutline />
          </span>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-white">{programme.duration}</p>
            <p className="text-sm text-white/60">{programme.time}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span className="shrink-0 text-2xl text-green-500">
            <GiGraduateCap />
          </span>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-white">{programme.mode}</p>
            <p className="text-sm text-white/60">{programme.aid}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span className="shrink-0 text-2xl text-green-500">
            <IoLocation />
          </span>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-white">{programme.format}</p>
            <p className="text-sm text-white/60">{programme.type}</p>
          </div>
        </div>

      </div>

      {/* Course buttons */}
      <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">

        <Link
          href="/application"
          className="inline-flex w-full items-center justify-center gap-3 rounded-lg bg-red-800 px-4 py-3 text-sm font-bold text-white hover:bg-red-900 sm:w-auto"
        >
          {programme.enroll}
          <IoArrowForward />
        </Link>

        <Link
          href="/contact"
          className="inline-flex w-full items-center justify-center gap-3 rounded-lg border border-white px-4 py-3 text-sm font-bold text-white hover:bg-white hover:text-blue-950 sm:w-auto"
        >
          <CgShapeHexagon />
          {programme.askques}
        </Link>

        <Link
          href={`/courses/${programme.id}/curri`}
          className="inline-flex w-full items-center justify-center gap-3 rounded-lg border border-white px-4 py-3 text-sm font-bold text-white hover:bg-white hover:text-blue-950 sm:w-auto"
        >
          <MdOutlineFileDownload />
          {programme.curri}
        </Link>

      </div>
    </div>

  </div>

  {/* Back to all courses */}
  <div className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
    <Link
      href="/courses"
      className="inline-block py-2 text-sm font-bold text-white hover:text-red-300"
    >
      ← All courses
    </Link>
  </div>

  {/* Keep your CurriculumForm here if needed */}
</div>

    </>
  )
}

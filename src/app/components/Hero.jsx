"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import {
  Navigation,
  Autoplay,
  Pagination,
  EffectFade,
} from "swiper/modules";

import { GiSelfLove } from "react-icons/gi";
import { CiClock2 } from "react-icons/ci";
import { BiVideoRecording } from "react-icons/bi";
import { TbCertificate } from "react-icons/tb";
import {
  IoIosArrowRoundForward,
  IoMdArrowRoundForward,
} from "react-icons/io";

import { heroimage } from "@/lib/heroimage";
import Link from "next/link";

export default function Hero() {
  const jobs = [
    { id: 1, title: "works", job: "/airtel.jpg" },
    { id: 2, title: "works", job: "/zennith.jpg" },
    { id: 3, title: "works", job: "/meta.jpg" },
    { id: 4, title: "works", job: "/google.jpg" },
    { id: 5, title: "works", job: "/online.jpg" },
    { id: 6, title: "works", job: "/amazon.jpg" },
    { id: 7, title: "works", job: "/apple.jpg" },
    { id: 8, title: "works", job: "/dh.jpg" },
    { id: 9, title: "works", job: "/fiver.jpg" },
    { id: 10, title: "works", job: "/ailogo.jpg" },
    { id: 11, title: "works", job: "/freelance.jpg" },
    { id: 12, title: "works", job: "/organ.jpg" },
  ];

  const courses = [
    {
      id: 1,
      title: "Web Dev",
      image: "/website.jpg",
      imgtitle: "courses",
    },
    {
      id: 2,
      title: "UI & UX Design",
      image: "/ux.jpg",
      imgtitle: "courses",
    },
    {
      id: 3,
      title: "Data Analysis",
      image: "/dataan.jpg",
      imgtitle: "courses",
    },
    {
      id: 4,
      title: "Multimedia",
      image: "/Multimedia.jpg",
      imgtitle: "courses",
    },
    {
      id: 5,
      title: "AI Automation",
      image: "/Ai.jpg",
      imgtitle: "courses",
    },
    {
      id: 6,
      title: "Digital Marketing",
      image: "/market.jpg",
      imgtitle: "courses",
    },
  ];

  const heroImages = [
    "/pytho.jpg",
    "/java.jpg",
    "/next.svg",
    "/dataan.jpg",
    "/html.jpg",
    "/jscript.jpg",
    "/nodejs.jpg",
    "/tailwind.jpg",
    "/ux.jpg",
    "/mongoose.jpg",
    "/Multimedia.jpg",
    "/marketing.jpg",
  ];

  return (
    <>
      {/* =========================================
          1. MAIN HERO SECTION
      ========================================= */}

      <section className="relative min-h-[520px] overflow-hidden sm:min-h-[600px] lg:min-h-[700px]">

        {/* Background Image Slider */}
        <div className="absolute inset-0 z-0">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            className="h-full w-full"
          >
            {heroimage.map((image) => (
              <SwiperSlide key={image.id}>
                <div className="relative h-full min-h-[520px] w-full sm:min-h-[600px] lg:min-h-[700px]">
                  <Image
                    src={image.job}
                    width={300}
                    height={300}
                    alt="NOGTECH digital skills training"
                    className="h-full w-full object-cover"
                    priority={image.id === heroimage[0]?.id}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 z-[1] bg-black/70" />

        {/* Hero Content */}
        <div className="relative z-[2] mx-auto flex min-h-[520px] max-w-7xl items-center px-4 py-12 sm:min-h-[600px] sm:px-6 sm:py-16 lg:min-h-[700px] lg:px-8 lg:py-20">

          <div className="flex w-full justify-stretch items-center gap-10">

            {/* LEFT SIDE */}
            <div className="w-full lg:w-1/2">

              <p className="mb-4 text-xs font-semibold uppercase tracking-[2px] text-orange-400 sm:text-sm sm:tracking-[3px]">
                NOGTECH DIGITAL SKILLS TRAINING
              </p>

              <h1 className="max-w-2xl text-3xl font-extrabold leading-tight text-white min-[400px]:text-4xl sm:text-5xl lg:text-6xl">
                Build Your Future With
                <span className="block text-blue-500">
                  Digital Skills
                </span>
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-7 text-gray-200 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
                Learn practical technology skills that can help you build
                websites, create digital products, work with artificial
                intelligence, design user experiences, and build a successful
                digital career.
              </p>

              {/* Buttons */}
              <div className="mt-6 flex flex-col gap-3 min-[480px]:flex-row min-[480px]:flex-wrap sm:mt-8 sm:gap-4">

                   <Link href="/application"  className="w-full rounded-lg bg-blue-600 px-5 py-3.5 font-semibold text-white transition duration-300 hover:bg-orange-500 sm:w-auto sm:px-7">
                  Register for Training
            </Link>

                    <Link href="/contact" className="w-full rounded-lg border border-white/50 bg-white/10 px-5 py-3.5 font-semibold text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-gray-900 sm:w-auto sm:px-7">
                  Explore Courses
                </Link>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================
          2. INDIVIDUALS AND COMPANIES
      ========================================= */}

      <section className="h-auto w-full bg-blue-100 py-8 sm:py-12">

        <div className="mx-auto h-auto w-[90%] max-w-7xl py-4 sm:w-[85%] lg:w-[80%]">
          <span className="block rounded-2xl py-2 text-center text-2xl font-extrabold text-blue-900 sm:text-3xl lg:text-4xl">
            One platform for skills, talent and global work
          </span>
        </div>

        {/* Image Cards */}
        <div className="mx-auto flex h-auto w-[90%] max-w-7xl flex-col items-stretch gap-5 md:flex-row md:gap-4 lg:w-[85%]">

          {/* Companies Card */}
          <div className="relative h-[380px] w-full overflow-hidden rounded-xl sm:h-[450px] md:w-[36%] lg:h-[500px]">

            <Image
              src="/techpics.jpg"
              alt="Technology professionals and companies"
              fill
              sizes="(min-width: 768px) 36vw, 100vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/50" />

            <div className="absolute inset-0 z-10 flex flex-col justify-end p-4 text-white sm:p-6 lg:p-8">

              <span className="text-xl font-bold text-orange-500 sm:text-2xl">
                For Companies
              </span>

              <h2 className="mb-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
                Build your Team
              </h2>

              <p className="mb-5 text-sm leading-7 sm:text-base">
                Access verified professionals and the infrastructure to hire,
                manage and pay them.
              </p>

              <button
                type="button"
                className="flex w-fit max-w-full items-center gap-2 text-left text-base font-extrabold text-orange-500 sm:text-lg"
              >
                Find Talented Individuals
                <IoMdArrowRoundForward className="shrink-0 text-2xl" />
              </button>

            </div>
          </div>

          {/* Individual Card */}
          <div className="relative h-[380px] w-full overflow-hidden rounded-xl sm:h-[450px] md:w-[64%] lg:h-[500px]">

            <Image
              src="/mypic.jpeg"
              alt="Web Development Training"
              fill
              sizes="(min-width: 768px) 64vw, 100vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute inset-0 z-10 flex flex-col justify-end p-4 text-white sm:p-6 lg:p-8">

              <span className="text-xl font-bold text-orange-500 sm:text-2xl">
                For Individual
              </span>

              <h2 className="mb-3 text-3xl font-bold sm:text-4xl lg:text-5xl xl:text-6xl">
                Build your Career
              </h2>

              <p className="mb-5 max-w-xl text-sm leading-7 sm:text-base">
                Learn practical skills, work on real projects, receive coaching
                and prepare for global opportunities.
              </p>

              <button
                type="button"
                className="flex w-fit max-w-full items-center gap-3 text-left text-base font-extrabold text-orange-500 sm:text-xl"
              >
                Explore Programs
                <IoMdArrowRoundForward className="shrink-0 text-2xl" />
              </button>

            </div>
          </div>

        </div>

        {/* Four Benefits */}
        <div className="mx-auto grid h-auto w-[90%] max-w-7xl grid-cols-1 gap-4 py-8 sm:grid-cols-2 lg:w-[85%] lg:grid-cols-4 lg:gap-2">

          <div className="flex items-center gap-3 border-b border-black/20 px-3 py-3 sm:border-b-0 sm:border-r-2 lg:px-4">
            <span className="text-xl font-bold text-orange-500">01</span>
            <span className="font-bold text-blue-900">
              Technology and business skills
            </span>
          </div>

          <div className="flex items-center gap-3 border-b border-black/20 px-3 py-3 sm:border-b-0 lg:border-r-2 lg:px-4">
            <span className="text-xl font-bold text-orange-500">02</span>
            <span className="font-bold text-blue-900">
              Projects and assessments
            </span>
          </div>

          <div className="flex items-center gap-3 border-b border-black/20 px-3 py-3 sm:border-b-0 sm:border-r-2 lg:px-4">
            <span className="text-xl font-bold text-orange-500">03</span>
            <span className="font-bold text-blue-900">
              Coaching and career support
            </span>
          </div>

          <div className="flex items-center gap-3 px-3 py-3 lg:px-4">
            <span className="text-xl font-bold text-orange-500">04</span>
            <span className="font-bold text-blue-900">
              Clear program and cohort details
            </span>
          </div>

        </div>
      </section>


      {/* =========================================
          3. OUR LEARNERS WORK AT
      ========================================= */}

      <section className="h-auto w-full py-8 sm:py-12">

        <div className="mx-auto h-auto w-[90%] py-4 sm:w-[80%] lg:w-[60%]">
          <h2 className="py-4 text-center text-2xl font-bold text-blue-900 sm:text-3xl lg:text-4xl">
            Our learners work at
          </h2>
        </div>

        <div className="mx-auto w-[95%]">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={2}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 12,
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 7,
                spaceBetween: 24,
              },
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            className="overflow-hidden"
          >
            {jobs.map((job) => (
              <SwiperSlide key={job.id}>
                <div className="flex h-28 items-center justify-center sm:h-32">
                  <Image
                    src={job.job}
                    width={200}
                    height={120}
                    alt={job.title}
                    sizes="(min-width: 1024px) 12vw, 40vw"
                    className="h-20 w-full object-contain sm:h-24"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </section>



      <section className="h-auto w-full py-8 sm:py-12">

        <div className="mx-auto h-auto w-[90%] max-w-3xl py-6 sm:w-[80%]">
          <h2 className="block py-4 text-center text-2xl font-extrabold text-blue-900 sm:text-3xl lg:text-4xl">
            Every Skill Has a Starting Point
          </h2>

          <p className="text-center text-base text-black/80 sm:text-lg lg:text-xl">
            Build the skills to move forward in tech
          </p>
        </div>

        {/* Certification Cards */}
        <div className="mx-auto grid h-auto w-[90%] max-w-7xl grid-cols-1 gap-6 sm:w-[85%] md:grid-cols-2 xl:grid-cols-3">

          {/* Masterclass */}
          <div className="flex h-full flex-col rounded-lg border border-blue-600 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg md:col-span-2 xl:col-span-1">

            <div className="flex flex-wrap items-center justify-center gap-3 px-4 py-5">
              <span className="bg-blue-200 text-2xl text-blue-700">
                <GiSelfLove />
              </span>

              <span className="text-center text-sm font-bold text-blue-500">
                Masterclass
              </span>
            </div>

            <div className="flex-1 px-4 py-2">
              <p className="text-sm leading-7 text-black/70">
                Learn practical tech skills through concise, focused sessions
                built for real-world application. Perfect for professionals and
                learners who want to upgrade their skills and start applying
                what they learn right away.
              </p>
            </div>

            <div className="space-y-3 px-4 py-3">

              <div className="flex items-start gap-3">
                <CiClock2 className="shrink-0 text-2xl font-extrabold text-blue-700" />
                <span className="text-sm font-bold text-black/60">
                  1-6 hours
                </span>
              </div>

              <div className="flex items-start gap-3">
                <BiVideoRecording className="shrink-0 text-2xl font-extrabold text-blue-700" />
                <span className="text-sm font-bold text-black/60">
                  Physical/Online, Live Sessions
                </span>
              </div>

              <div className="flex items-start gap-3">
                <TbCertificate className="shrink-0 text-2xl font-extrabold text-blue-700" />
                <span className="text-sm font-bold text-black/60">
                  No certification
                </span>
              </div>

            </div>

            <div className="mt-auto p-4">
              <button
                type="button"
                className="w-full rounded-lg bg-blue-900 px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-blue-700"
              >
                Browse Masterclasses
              </button>
            </div>
          </div>

          {/* Diploma Programme */}
          <div className="flex h-full flex-col rounded-lg border border-blue-600 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">

            <div className="flex flex-wrap items-center justify-center gap-3 px-4 py-5">
              <span className="bg-blue-200 text-2xl text-blue-700">
                <GiSelfLove />
              </span>

              <span className="text-center text-sm font-bold text-blue-500">
                Diploma Certificate
              </span>
            </div>

            <div className="flex-1 px-4 py-2">
              <p className="text-sm leading-7 text-black/70">
                Build the skills you need for a successful career in technology.
                With structured lessons, practical projects, expert mentorship,
                and a supportive learning community, you will develop the
                confidence and experience to pursue opportunities in the digital
                economy.
              </p>
            </div>

            <div className="space-y-3 px-4 py-3">

              <div className="flex items-start gap-3">
                <CiClock2 className="shrink-0 text-2xl font-extrabold text-blue-700" />
                <span className="text-sm font-bold text-black/60">
                  4-6 months
                </span>
              </div>

              <div className="flex items-start gap-3">
                <BiVideoRecording className="shrink-0 text-2xl font-extrabold text-blue-700" />
                <span className="text-sm font-bold text-black/60">
                  Live classes + recorded lectures
                </span>
              </div>

              <div className="flex items-start gap-3">
                <TbCertificate className="shrink-0 text-2xl font-extrabold text-blue-700" />
                <span className="text-sm font-bold text-black/60">
                  NOGTECH Diploma Certificate
                </span>
              </div>

            </div>

            <div className="mt-auto p-4">
              <button
                type="button"
                className="w-full rounded-lg bg-blue-900 px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-blue-700"
              >
                Start a Diploma Program
              </button>
            </div>
          </div>

          {/* Nano-Diploma */}
          <div className="flex h-full flex-col rounded-lg border border-blue-600 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">

            <div className="flex flex-wrap items-center justify-center gap-3 px-4 py-5">
              <span className="bg-blue-200 text-2xl text-blue-700">
                <GiSelfLove />
              </span>

              <span className="text-center text-sm font-bold text-blue-500">
                Short, focused learning programme
              </span>
            </div>

            <div className="flex-1 px-4 py-2">
              <p className="text-sm leading-7 text-black/70">
                Explore self-paced programs designed to help you develop
                specialized technology skills at your own pace. Build practical
                knowledge, complete real-world projects, and earn a NOGTECH
                certificate to showcase your skills and strengthen your
                professional profile.
              </p>
            </div>

            <div className="space-y-3 px-4 py-3">

              <div className="flex items-start gap-3">
                <CiClock2 className="shrink-0 text-2xl font-extrabold text-blue-700" />
                <span className="text-sm font-bold text-black/60">
                  4-8 weeks (flexible, self-paced)
                </span>
              </div>

              <div className="flex items-start gap-3">
                <BiVideoRecording className="shrink-0 text-2xl font-extrabold text-blue-700" />
                <span className="text-sm font-bold text-black/60">
                  Live classes + recorded lectures
                </span>
              </div>

              <div className="flex items-start gap-3">
                <TbCertificate className="shrink-0 text-2xl font-extrabold text-blue-700" />
                <span className="text-sm font-bold text-black/60">
                  NOGTECH Nano-Diploma Certificate
                </span>
              </div>

            </div>

            <div className="mt-auto p-4">
              <button
                type="button"
                className="w-full rounded-lg bg-blue-900 px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-blue-700"
              >
                Explore Nano Certification
              </button>
            </div>
          </div>

        </div>
      </section>


      {/* =========================================
          5. OUR COURSES
      ========================================= */}

      <section className="h-auto w-full py-8 sm:py-12">

        <div className="mx-auto h-auto w-[90%] max-w-5xl py-6 sm:py-8">

          <h2 className="py-4 text-center text-2xl font-extrabold text-blue-900 sm:text-3xl lg:text-4xl">
            Some of our tech courses/programme
          </h2>

          <p className="text-center text-sm leading-7 text-black/60 sm:text-base">
            We ensure that Africans interested in exploring various occupations
            can readily access the resources they need to learn and grow.
          </p>

        </div>

        {/* Course Grid */}
        <div className="mx-auto grid w-[90%] max-w-7xl grid-cols-2 gap-x-4 gap-y-8 py-6 sm:grid-cols-3 sm:gap-6 lg:grid-cols-6">

          {courses.map((course) => (
            <div
              key={course.id}
              className="min-w-0 overflow-hidden rounded-lg transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >

              <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                <Image
                  src={course.image}
                  fill
                  sizes="(min-width: 1024px) 16vw, (min-width: 640px) 28vw, 45vw"
                  alt={course.imgtitle}
                  className="object-cover transition duration-300 hover:scale-105"
                />
              </div>

              <p className="break-words px-2 py-3 text-base font-extrabold text-blue-900 sm:px-3 sm:text-lg">
                {course.title}
              </p>

            </div>
          ))}

        </div>
      </section>


      {/* =========================================
          6. TOP COURSE / TEAM TRAINING
      ========================================= */}

      <section className="h-auto w-full bg-blue-800 py-8 sm:py-12">

        <div className="mx-auto flex h-auto w-[90%] max-w-7xl flex-col items-center gap-8 sm:w-[85%] lg:flex-row lg:gap-10">

          {/* Text */}
          <div className="w-full space-y-5 lg:w-1/2 lg:space-y-6">

            <h2 className="text-2xl font-normal text-white sm:text-3xl lg:text-4xl">
              We deliver hands-on, specialized training tailored to your teams
            </h2>

            <p className="text-base leading-7 text-white/70 sm:text-lg lg:text-xl">
              Specialized expertise for your developers, plus the broader skills
              your whole org needs. One platform, so you close skill gaps across
              the entire team instead of one corner of it.
            </p>

            <button
              type="button"
              className="flex w-full max-w-full items-center justify-center gap-3 rounded-2xl bg-red-800 px-4 py-3 text-base font-bold text-white transition hover:bg-red-700 sm:w-fit sm:text-lg"
            >
              Learn more about our skills
              <IoIosArrowRoundForward className="shrink-0 text-2xl sm:text-3xl" />
            </button>

          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative h-[280px] w-full overflow-hidden rounded-2xl sm:h-[380px] lg:h-[450px]">
              <Image
                src="/tcsch.jpg"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                alt="NOGTECH specialized team training"
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>


      {/* =========================================
          7. INTRODUCING THE PROGRAMME
      ========================================= */}

      <section className="h-auto w-full bg-blue-950 py-10 sm:py-14">

        <div className="mx-auto flex h-auto w-[90%] max-w-7xl flex-col items-center gap-10 lg:w-[85%] lg:flex-row lg:gap-12">

          {/* International Student / Partner Image */}
          <div className="w-full lg:w-1/2">

            <div className="mx-auto flex min-h-[280px] w-full max-w-xl flex-col items-center justify-center overflow-hidden rounded-2xl border-2 border-white/20 p-4 sm:min-h-[350px] sm:p-8 lg:min-h-[400px]">

              <div className="relative flex min-h-[230px] w-full items-center justify-center bg-blue-100 sm:min-h-[280px]">

                <Image
                  src="/partner.jpeg"
                  width={400}
                  height={300}
                  alt="NOGTECH learning partner"
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="h-auto max-h-[280px] w-full object-contain sm:max-h-[320px]"
                />

              </div>

            </div>
          </div>

          {/* Programme Information */}
          <div className="mx-auto h-auto w-full max-w-2xl lg:w-1/2">

            <div className="py-3">
              <span className="inline-block max-w-full rounded-full bg-blue-100 px-5 py-2 text-center text-xs font-extrabold text-orange-700 sm:text-sm">
                Flexible Learning Options
              </span>
            </div>

            <div className="py-3">
              <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                Small Steps. Specialized Skills. Bigger Opportunities
              </h2>
            </div>

            <div className="py-3">
              <p className="text-sm leading-7 text-white/60 sm:text-base">
                Explore NOGTECH programmes designed to help you master specific
                technology skills through structured lessons, guided practice,
                and hands-on projects. Learn essential concepts, strengthen
                your technical abilities, and apply your knowledge through
                practical training.
              </p>
            </div>

            {/* Programme Features */}
            <div className="grid grid-cols-1 gap-3 py-3 min-[480px]:grid-cols-2 xl:grid-cols-3">

              <button
                type="button"
                className="w-full rounded-full border border-white/50 bg-transparent px-3 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Project Led
              </button>

              <button
                type="button"
                className="w-full rounded-full border border-white/50 bg-transparent px-3 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Recognised Certificate
              </button>

              <button
                type="button"
                className="w-full rounded-full border border-white/50 bg-transparent px-3 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Shorter Timeline
              </button>

            </div>
          </div>

        </div>
      </section>

    </>
  );
}
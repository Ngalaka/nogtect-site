import Image from "next/image";
import React from "react";
import { BiAlarm } from "react-icons/bi";
import { DiFsharp } from "react-icons/di";
import { TbMoneybagPlus } from "react-icons/tb";
import { CiBezier } from "react-icons/ci";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { FaPeopleRoof } from "react-icons/fa6";
import { SiMaterialdesign } from "react-icons/si";
import { GiHumanTarget } from "react-icons/gi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { LuAward } from "react-icons/lu";
import { PiHandshakeThin } from "react-icons/pi";
import Link from "next/link";

export default function About() {
  return (
    <>
      {/* Brief History for NOGTECH */}
      <div className="flex h-auto w-full flex-col items-center justify-between gap-8 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:gap-4 lg:px-2">
        {/* LEFT SIDE: About NOGTECH */}
        <div className="w-full lg:w-[50%]">
          <span className="block w-full px-2 py-2 text-center text-sm text-blue-500 sm:px-8">
            KNOWN US MORE
          </span>

          <h1 className="py-4 text-center text-3xl font-bold text-blue-900 sm:text-4xl lg:text-6xl">
            ABOUT NOGTECH
          </h1>

          <div className="h-auto w-full px-2 py-2 sm:px-8">
            <p>
              NOGTECH Training Institute is a technology-driven digital skills
              academy legally registered in Nigeria with the Corporate Affairs
              Commission (CAC) in 2024. We are committed to equipping
              individuals, students, entrepreneurs, and aspiring technology
              professionals with the practical knowledge, technical skills, and
              creative mindset required to thrive in today rapidly evolving
              digital world.
            </p>
          </div>

          <div className="h-auto w-full px-2 py-2 sm:px-8">
            <p>
              At NOGTECH, we believe that technology education should go beyond
              theoretical knowledge. Our training approach is built around
              hands-on learning, practical demonstrations, collaborative
              projects, and the development of real-world applications. From the
              fundamentals of programming to advanced professional projects, we
              guide our students through a structured learning journey that
              transforms beginners into confident, capable, and innovative
              digital professionals.
            </p>
          </div>

          <div className="h-auto w-full px-2 py-2 sm:px-8">
            <p>
              With professional instructors, a practical learning environment,
              comprehensive course outlines, and a strong emphasis on teamwork,
              NOGTECH provides learners with the opportunity to acquire
              industry-relevant digital skills from the foundation level to
              professional proficiency.
            </p>
          </div>

          <div className="h-auto w-full space-y-4 px-2 py-2 sm:px-8">
            <p>
              NOGTECH Training Institute provides a learning pathway designed to
              help you achieve your goals. To become a leading technology
              training institute in Nigeria and beyond, recognized for
              developing highly skilled, innovative, and industry-ready digital
              professionals who drive technological advancement, create
              employment opportunities, and provide sustainable digital
              solutions to real-world challenges.
            </p>

            <p>
              We envision a future where every motivated individual has access
              to quality technology education, practical digital skills, and the
              opportunity to become a creator, innovator, entrepreneur, and
              leader in the global digital economy.
            </p>

            <p>
              Our mission is simple: to transform potential into practical
              digital skills and practical skills into opportunities.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: CEO Image */}
        <div className="flex w-full flex-col items-center lg:w-[40%]">
          <Image
            src="/ceopic.jpeg"
            alt="CEO Photo"
            width={500}
            height={500}
            className="h-auto w-full max-w-[350px] lg:rounded-full object-cover sm:max-w-[400px] lg:h-[500px] lg:w-[500px] lg:max-w-none"
          />

          <div className="w-full py-4 text-center sm:w-[70%] lg:w-[50%]">
            <p className="text-2xl font-bold text-blue-900 sm:text-3xl">
              NGALAKA GIFT
            </p>

            <p className="text-sm font-semibold text-blue-600">
              CEO NOGTECH Training Institute
            </p>
          </div>
        </div>
      </div>

      {/* Rooted in Excellence, Driven by Innovation */}
      <div className="h-auto w-full bg-blue-900 py-4 sm:py-8">
        <div className="mx-auto h-auto w-[90%] py-6 sm:w-[80%] lg:w-[50%] lg:py-8">
          <h1 className="py-4 text-center text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            Rooted in Excellence, Driven by Innovation
          </h1>

          <p className="text-center text-sm text-white">
            We are committed to nurturing talent, fostering continuous growth,
            and empowering the next generation of digital professionals to
            achieve their career aspirations
          </p>
        </div>

        {/* Activities of NOGTECH */}
        <div className="mx-auto grid h-auto w-[90%] grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {/* Flexibility */}
          <div className="rounded-lg p-4 shadow-[0_35px_35px_rgba(0,0,0,0.25)] transition duration-300 ease-in-out hover:scale-[0.98]">
            <p className="px-4 py-2 text-2xl text-white">
              <BiAlarm />
            </p>

            <h1 className="px-4 text-center text-xl font-semibold text-white">
              Flexibility
            </h1>

            <p className="px-4 text-sm text-white/80">
              Our weekday, weekend, and online classes give you the flexibility
              to learn conveniently while balancing your work, studies, and
              other commitments.
            </p>
          </div>

          {/* Conducive Environment */}
          <div className="rounded-lg p-4 shadow-[0_35px_35px_rgba(0,0,0,0.25)] transition duration-300 ease-in-out hover:scale-[0.98]">
            <p className="px-4 py-2 text-xl text-white">
              <DiFsharp />
            </p>

            <h1 className="px-4 text-center text-xl font-semibold text-white">
              Conducive Environment
            </h1>

            <p className="px-4 text-sm text-white/80">
              We create a supportive and conducive learning environment where
              students can learn, practice, collaborate, and develop their
              skills with confidence.
            </p>
          </div>

          {/* Affordable Tuition Fees */}
          <div className="rounded-lg p-4 shadow-[0_35px_35px_rgba(0,0,0,0.25)] transition duration-300 ease-in-out hover:scale-[0.98]">
            <p className="px-4 py-2 text-2xl text-white">
              <TbMoneybagPlus />
            </p>

            <h1 className="px-4 text-center text-xl font-semibold text-white">
              Affordable tuition fees
            </h1>

            <p className="px-4 text-sm text-white/80">
              At NOGTECH Training Institute, we strive to make quality
              technology education accessible and affordable. Our training
              programs are competitively priced, with flexible payment options
              available to make it easier for learners to enroll and complete
              their chosen program.
            </p>
          </div>

          {/* Digital Skills */}
          <div className="rounded-lg p-4 shadow-[0_35px_35px_rgba(0,0,0,0.25)] transition duration-300 ease-in-out hover:scale-[0.98]">
            <p className="px-4 py-2 text-2xl text-white">
              <CiBezier />
            </p>

            <h1 className="px-4 text-center text-xl font-semibold text-white">
              Digital Skills & Professional Development
            </h1>

            <p className="px-4 text-sm text-white/80">
              Our modern learning facilities, advanced tools, and practical
              training approach provide the ideal environment for developing
              digital skills. Students gain hands-on experience through projects
              that transform theoretical knowledge into practical expertise.
            </p>
          </div>

          {/* Like-Minded Innovators */}
          <div className="rounded-lg p-4 shadow-[0_35px_35px_rgba(0,0,0,0.25)] transition duration-300 ease-in-out hover:scale-[0.98]">
            <p className="px-4 py-2 text-2xl text-white">
              <LiaPeopleCarrySolid />
            </p>

            <h1 className="px-4 text-center text-xl font-semibold text-white">
              Connect with Like-Minded Innovators
            </h1>

            <p className="px-4 text-sm text-white/80">
              Our engineers are all Native English speakers, they work on your
              time-zone and will easily adopt your collaboration tools and
              practices.
            </p>
          </div>

          {/* Diverse Talent Base */}
          <div className="rounded-lg p-4 shadow-[0_35px_35px_rgba(0,0,0,0.25)] transition duration-300 ease-in-out hover:scale-[0.98]">
            <p className="px-4 py-2 text-2xl text-white">
              <FaPeopleRoof />
            </p>

            <h1 className="px-4 text-center text-xl font-semibold text-white">
              Diverse talent base
            </h1>

            <p className="px-4 text-sm text-white/80">
              More Black Talent: Through our operations in Africa we are able to
              give you access to high quality engineers from under-represented
              backgrounds.
            </p>
          </div>
        </div>
      </div>

      {/* About NOGTECH: Real-World Practice */}
      <div className="h-auto w-full bg-blue-50">
        <div className="mx-auto flex h-auto w-[90%] flex-col items-center justify-between gap-8 py-8 sm:w-[85%] lg:w-[80%] lg:flex-row lg:gap-4">
          <div className="w-full space-y-4 lg:w-[50%]">
            <h1 className="border-l-4 border-red-900 px-4 text-xl font-bold text-red-800">
              About Nogtech
            </h1>

            <p className="text-3xl font-semibold text-black sm:text-4xl">
              Where technology learning meets real-world practice
            </p>

            <p className="font-normal text-black/70">
              NOGTECH empowers learners to build practical, career-ready skills
              through expert instruction, hands-on projects, and structured
              support.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            <Image
              src="/techsch.jpg"
              width={600}
              height={400}
              alt="NOGTECH technology training"
              className="h-auto w-full rounded-lg object-cover lg:h-100 lg:w-150"
            />
          </div>
        </div>
      </div>

      {/* Practical Experience */}
      <div className="h-auto w-full bg-white py-8 sm:py-12">
        <div className="mx-auto flex h-auto w-[90%] flex-col justify-between gap-6 px-2 sm:w-[85%] sm:px-4 lg:w-[80%] lg:flex-row lg:items-center lg:gap-4">
          <div className="w-full space-y-4 lg:w-[50%]">
            <h1 className="border-l-4 border-red-900 px-4 text-sm font-bold text-red-800">
              Shorter version
            </h1>

            <p className="text-3xl font-normal text-blue-950 sm:text-4xl">
              Technology is best learned through practical experience.
            </p>
          </div>

          <div className="h-auto w-full px-2 text-sm text-black/50 sm:px-4 lg:w-[50%]">
            <p>
              Our physical classrooms and online learning environment are
              designed to move learners beyond passive theory. Every learning
              pathway combines expert instruction, guided practice, feedback,
              and hands-on projects that make progress visible.
            </p>

            <p className="py-4">
              Whether you learn with us in person or online, whether you are
              starting from scratch, switching careers, or strengthening your
              existing role, the goal remains the same: to develop practical
              skills you can confidently explain, apply, and demonstrate in the
              real world.
            </p>
          </div>
        </div>
      </div>

      {/* What Shapes the Experience */}
      <div className="h-auto w-full bg-white py-8 sm:py-12">
        <div className="mx-auto flex h-auto w-[90%] flex-col justify-between gap-6 px-2 sm:w-[85%] sm:px-4 lg:w-[80%] lg:flex-row lg:items-center lg:gap-4">
          <div className="w-full space-y-4 lg:w-[50%]">
            <h1 className="border-l-4 border-red-900 px-4 text-sm font-bold text-red-800">
              What shapes the experience
            </h1>

            <p className="text-3xl font-normal text-blue-950 sm:text-4xl">
              Learn with Purpose. Build with Confidence.
            </p>
          </div>

          <div className="h-auto w-full px-2 text-sm text-black/50 sm:px-4 lg:w-[50%]">
            <p>
              Our learning approach combines technical skills with practical
              experience, confidence, professionalism, and opportunities to
              apply what you learn in the real world.
            </p>
          </div>
        </div>
      </div>

      {/* Learning Experience Cards */}
      <div className="h-auto w-full bg-white py-8 sm:py-12">
        <div className="mx-auto grid h-auto w-[90%] grid-cols-1 gap-6 sm:w-[85%] sm:grid-cols-2 lg:w-[90%] lg:grid-cols-4 lg:gap-0">
          {/* Practical by Design */}
          <div className="min-h-[150px] space-y-4 border-l border-black/70 bg-white px-4 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <span className="text-xl font-bold text-green-600">
              <SiMaterialdesign />
            </span>

            <p className="py-2 text-xl font-extralight">
              Practical by design
            </p>

            <p className="text-sm text-black/60">
              Lessons turn quickly into labs, exercises, and work learners can
              show.
            </p>
          </div>

          {/* Human Support */}
          <div className="min-h-[150px] space-y-4 border-l border-black/70 bg-white px-4 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <span className="text-xl font-bold text-green-600">
              <GiHumanTarget />
            </span>

            <p className="py-2 text-xl font-extralight">
              Human support
            </p>

            <p className="text-sm text-black/60">
              Instructors and peers make difficult concepts easier to navigate.
            </p>
          </div>

          {/* Career Relevance */}
          <div className="min-h-[150px] space-y-4 border-l border-black/70 bg-white px-4 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <span className="text-xl font-bold text-green-600">
              <MdOutlineShoppingBag />
            </span>

            <p className="py-2 text-xl font-extralight">
              Career relevance
            </p>

            <p className="text-sm text-black/60">
              Programmes focus on workflows, tools, and outcomes used beyond the
              classroom.
            </p>
          </div>

          {/* Visible Progress */}
          <div className="min-h-[150px] space-y-4 border-l border-black/70 bg-white px-4 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <span className="text-xl font-bold text-green-600">
              <LuAward />
            </span>

            <p className="py-2 text-xl font-extralight">
              Visible progress
            </p>

            <p className="text-sm text-black/60">
              Projects, assessments, attendance, and certificates create a clear
              learning record.
            </p>
          </div>
        </div>
      </div>

      {/* Network of Learners and Builders */}
      <div className="h-auto w-full bg-green-900">
        <div className="mx-auto flex h-auto w-[90%] flex-col justify-between gap-8 py-8 sm:w-[85%] lg:w-[90%] lg:flex-row lg:items-center lg:gap-4">
          <div className="flex w-full flex-col items-start gap-4 sm:flex-row sm:items-center lg:w-[70%]">
            <div>
              <span className="text-white">
                <PiHandshakeThin className="h-12 w-12 font-extrabold sm:h-16 sm:w-16" />
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="font-extrabold text-white/70">
                A Network of Learners and Builders
              </h1>

              <p className="text-3xl font-normal text-white sm:text-4xl lg:text-5xl">
                Start with a class. Grow beyond it.
              </p>

              <p className="text-sm text-white/60">
                NOGTECH connects learners with experienced instructors, fellow
                learners, hands-on projects, alumni, and a community that
                supports continuous learning and professional growth.
              </p>
            </div>
          </div>

          <div className="w-full sm:w-auto">
            <Link
              href="/courses"
              className="block w-full rounded-lg bg-red-800 px-6 py-3 text-center font-bold text-white shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition duration-300 hover:bg-red-700 sm:w-60"
            >
              Explore Courses
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
import Image from "next/image";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="w-full h-17.5 bg-blue-900 flex justify-between items-center gap-2 px-8 "></div>

      <header className="sticky top-0 z-50 flex h-17.5 w-full items-center justify-between gap-2 bg-white px-8">
        <div className="flex justify-between items-center gap-4">
          <Image
            src="/logo.jpeg"
            alt="NOGTECH training"
            width={300}
            height={300}
            className="w-12 h-12 rounded-lg"
          />

          <span className="font-bold text-blue-900">NOGTECH</span>
        </div>
        <nav className="w-180 h-auto flex justify-between items-center gap-2">
          <div className="flex justify-center items-center gap-2 transition duration-300 ease-in-out hover:text-blue-900">
            <Link
              href="/"
              className="text-black text-sm font-semibold transition duration-300 ease-in-out hover:text-blue-900"
            >
              Home
            </Link>
          </div>

          <div className="flex justify-center items-center gap-2 transition duration-300 ease-in-out hover:text-blue-900">
            <Link
              href="/courses"
              className="text-black text-sm font-semibold transition duration-300 ease-in-out hover:text-blue-900"
            >
              Courses
            </Link>
          </div>

          <div className="flex justify-center  items-center gap-2 transition duration-300 ease-in-out hover:text-blue-900">
            <Link
              href="/about"
              className="text-black text-sm font-semibold transition duration-300 ease-in-out hover:text-blue-900"
            >
              About Us
            </Link>
          </div>

          <div className="flex justify-center items-center gap-2 transition duration-300 ease-in-out hover:text-blue-900">
            <Link
              href="/testimonial"
              className="text-black text-sm font-semibold transition duration-300 ease-in-out hover:text-blue-900"
            >
              Testimonial
            </Link>
          </div>

          <div className="flex justify-center items-center gap-2 transition duration-300 ease-in-out hover:text-blue-900">
            <Link
              href="/contact"
              className="text-black text-sm font-semibold transition duration-300 ease-in-out hover:text-blue-900"
            >
              Contact Us
            </Link>
          </div>
        </nav>

        

        {/* light mode and drak mode */}

        <div className="flex justify-between items-center gap-2">
          <button className="w-34 py-2 bg-blue-900 text-sm text-white font-bold cursor-pointer rounded-lg">
            <Link href="/contact">Register</Link>
          </button>
          <button className="w-34 py-2  bg-red-800 text-sm text-white font-bold cursor-pointer rounded-lg">
            <Link href="/contact">Enquire Now</Link>
          </button>
        </div>

        <div className="text-black text-2xl font-bold  justify-center items-center gap-2 hidden">
          <span className="text-black text-2xl font-bold">
            <IoClose />
          </span>
          <span className="text-black text-2xl font-bold">
            <GiHamburgerMenu />
          </span>
        </div>
      </header>
    </>
  );
}

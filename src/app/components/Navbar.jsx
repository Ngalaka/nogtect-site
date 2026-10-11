"use client";

import Image from "next/image";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Blue Bar */}
      <div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 flex h-17.5 w-full items-center justify-between gap-2 bg-white px-4 sm:px-6 lg:px-8">
        {/* Logo and Brand Name */}
        <div className="flex shrink-0 items-center justify-between gap-2 sm:gap-4">
          <Image
            src="/logo.jpeg"
            alt="NOGTECH training"
            width={300}
            height={300}
            className="h-10 w-10 rounded-lg object-cover sm:h-12 sm:w-12"
          />

          <span className="text-base font-bold text-blue-900 sm:text-lg">
            NOGTECH
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden h-auto w-180 items-center justify-between gap-2 lg:flex">
          <div className="flex items-center justify-center gap-2 transition duration-300 ease-in-out hover:text-blue-900">
            <Link
              href="/"
              className="text-sm font-semibold text-black transition duration-300 ease-in-out hover:text-blue-900"
            >
              Home
            </Link>
          </div>

          <div className="flex items-center justify-center gap-2 transition duration-300 ease-in-out hover:text-blue-900">
            <Link
              href="/courses"
              className="text-sm font-semibold text-black transition duration-300 ease-in-out hover:text-blue-900"
            >
              Courses
            </Link>
          </div>

          <div className="flex items-center justify-center gap-2 transition duration-300 ease-in-out hover:text-blue-900">
            <Link
              href="/about"
              className="text-sm font-semibold text-black transition duration-300 ease-in-out hover:text-blue-900"
            >
              About Us
            </Link>
          </div>

          <div className="flex items-center justify-center gap-2 transition duration-300 ease-in-out hover:text-blue-900">
            <Link
              href="/testimonial"
              className="text-sm font-semibold text-black transition duration-300 ease-in-out hover:text-blue-900"
            >
              Testimonial
            </Link>
          </div>

          <div className="flex items-center justify-center gap-2 transition duration-300 ease-in-out hover:text-blue-900">
            <Link
              href="/contact"
              className="text-sm font-semibold text-black transition duration-300 ease-in-out hover:text-blue-900"
            >
              Contact Us
            </Link>
          </div>
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden items-center justify-between gap-2 xl:flex">
          <Link
            href="/contact"
            className="w-34 rounded-lg bg-blue-900 py-2 text-center text-sm font-bold text-white transition duration-300 hover:bg-blue-800"
          >
            Register
          </Link>

          <Link
            href="/contact"
            className="w-34 rounded-lg bg-red-800 py-2 text-center text-sm font-bold text-white transition duration-300 hover:bg-red-700"
          >
            Enquire Now
          </Link>
        </div>

        {/* Mobile and Tablet Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center justify-center rounded-md p-2 text-2xl text-blue-900 transition duration-300 hover:bg-gray-100 lg:hidden"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? <IoClose /> : <GiHamburgerMenu />}
        </button>
      </header>

      {/* Mobile and Tablet Navigation Menu */}
      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-x-0 top-[calc(4.375rem+4.375rem)] z-40 max-h-[calc(100vh-8.75rem)] overflow-y-auto border-t border-gray-200 bg-white px-5 py-5 shadow-lg sm:px-8 lg:hidden"
        >
          <nav className="flex flex-col gap-1">
            <Link
              href="/"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm font-semibold text-gray-800 transition duration-300 hover:bg-blue-50 hover:text-blue-900"
            >
              Home
            </Link>

            <Link
              href="/courses"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm font-semibold text-gray-800 transition duration-300 hover:bg-blue-50 hover:text-blue-900"
            >
              Courses
            </Link>

            <Link
              href="/about"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm font-semibold text-gray-800 transition duration-300 hover:bg-blue-50 hover:text-blue-900"
            >
              About Us
            </Link>

            <Link
              href="/testimonial"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm font-semibold text-gray-800 transition duration-300 hover:bg-blue-50 hover:text-blue-900"
            >
              Testimonial
            </Link>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm font-semibold text-gray-800 transition duration-300 hover:bg-blue-50 hover:text-blue-900"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile and Tablet Action Buttons */}
          {/* Desktop Action Buttons */}
          <div className="hidden shrink-0 items-center justify-between gap-2 xl:flex">
            <Link
              href="/contact"
              className="w-34 rounded-lg bg-blue-900 py-2 text-center text-sm font-bold text-white transition duration-300 hover:bg-blue-800"
            >
              Register
            </Link>

            <Link
              href="/contact"
              className="w-34 rounded-lg bg-red-800 py-2 text-center text-sm font-bold text-white transition duration-300 hover:bg-red-700"
            >
              Enquire Now
            </Link>
          </div>

          {/* Mobile and Tablet Controls */}
          <div className="flex shrink-0 items-center gap-2 xl:hidden">
            {/* Register Button */}
            <Link
              href="/contact"
              className="rounded-lg bg-blue-900 px-3 py-2 text-xs font-bold text-white transition duration-300 hover:bg-blue-800 sm:px-4 sm:text-sm"
            >
              Register
            </Link>

            {/* Hamburger / Close Button */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center justify-center rounded-md p-2 text-2xl text-blue-900 transition duration-300 hover:bg-gray-100"
              aria-label={
                isMenuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMenuOpen ? <IoClose /> : <GiHamburgerMenu />}
            </button>
          </div>
        </div>
      )}
      </div>
    </>
  );
}

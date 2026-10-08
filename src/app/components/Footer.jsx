import Image from 'next/image'
import React from 'react'
import { AiTwotoneMail } from 'react-icons/ai'
import { FaFacebook, FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa6'
import { FiPhoneIncoming } from 'react-icons/fi'
import { IoCarSportOutline } from 'react-icons/io5'

export default function Footer() {
  return (
    <>
       {/* footer */}
        <div className="w-full h-auto md:w-1/2  lg:w-full">

          {/* footer detail */}
          <div className="w-full h-auto flex-col text-black justify-center items-center py-4 px-4  md:w-1/2  lg:w-full lg:m-auto lg:py-2 lg:px-16 flex lg:flex-row lg:justify-between lg:items-start lg:gap-8">
            <div className="w-full gap-4 px-6 lg:w-[40%] h-auto flex flex-col justify-start items-start lg:gap-4">
              <div className='flex justify-center items-center gap-2 cursor-pointer'>
                <div>
                  <Image src="/logo.jpeg" width={80} height={80} alt="Nogtech" className="w-20 h-14 object-contain cursor-pointer"/>
                </div>
                <span className='text-xl font-bold text-blue-950'>Nogtech</span>
              </div>

              <div className="w-full text-black h-auto md:w-1/2  lg:w-full py-4 lg:px-2">
                <p>
                  Empowering learners, professionals, and organizations with 
                  practical technology skills for the digital future.
                </p>
              </div>

              <div className="w-full h-auto lg:h-full py-4 px-2">
                {/* phone number */}
                <div className='flex items-center gap-2 cursor-pointer'>
                  <span className="text-xl text-blue-900"><FiPhoneIncoming /></span>
                  <p>+234 7059743120</p>
                </div>

                {/* email */}
                <div className='flex items-center gap-2 cursor-pointer'>
                  <span className="text-xl text-blue-900"><AiTwotoneMail /></span>
                  <p className="text-blue-900">hello@lagosusedcars.ng</p>
                </div>
              </div>
            </div>

            {/* Buy a car */}
            <div className="w-full py-4 text-black  px-6 md:w-1/2 lg:w-[25%] h-auto ">
              <div className="w-full h-auto flex flex-col justify-start items-start gap-4">
                <p className="text-sm text-black lg:text-black/50">Courses</p>
              </div>

              <div className="w-full h-auto flex flex-col justify-start items-start gap-2  text-black">
                <ul className="flex flex-col justify-start items-start gap-2 space-y-2">
                  <li>Search Listing</li>
                  <li>Tokunbo Cars</li>
                  <li>Nigerian Used Cars</li>
                  <li>Brand New</li>
                  <li>Drive Now Pay later</li>
                  <li>Nierian Used Cars</li>
                </ul>
              </div>
            </div>

            {/* Sell a Car */}
            <div className='w-full py-4  text-black px-6 md:w-1/2  lg:w-[25%] h-auto'>
              <div className="w-full h-auto flex flex-col justify-start items-start gap-4" >
                <p className="text-sm  text-black/50">About us</p>
              </div>

              <div className="w-full h-auto text-black flex flex-col justify-start items-start gap-2" >
                <ul className="flex flex-col justify-start items-start gap-2 space-y-2">
                  <li>List your car</li>
                  <li>Dealer Registration</li>
                  <li>Pricing Plans</li>
                  <li>Car Valuation</li>
                </ul>
              </div>
            </div>

            {/* Company */}
            <div className="w-full py-8 px-6 md:w-1/2  lg:w-[25%] h-auto ">
              <div className="w-full h-auto flex flex-col justify-start items-start gap-4" >
                <p className="text-sm lg:text-black text-black/50">Contact us </p>
              </div>

              <div className="  w-full h-auto flex flex-col justify-start items-start gap-2 " >
                <ul className="flex flex-col justify-start items-start gap-2 space-y-2">
                  <li>About Us</li>
                  <li>Services</li>
                  <li>FAQ</li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Copy Right */}

          <div className="w-full h-auto flex-col justify-start items-start px-4 md:w-1/2  lg:w-[90%] m-auto lg:py-4 lg:px-16 flex lg:flex-row lg:justify-between lg:items-center lg:gap-8">
            <div  className=' px-6 py-4'>
              <p>2023 Lagos Used Cars. All rights reserved.</p>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4 px-4 py-2">
              <span className="text-xl text-blue-900"><FaFacebook /></span>
              <span className="text-xl text-blue-900"><FaTwitter /></span>
              <span className="text-xl text-blue-900"><FaInstagram /></span>
            </div>
          </div>
        </div>

    </>
  )
}

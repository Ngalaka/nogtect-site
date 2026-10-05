import Image from 'next/image'
import React from 'react'
import { BiAlarm } from "react-icons/bi";
import { DiFsharp } from "react-icons/di";
import { TbMoneybagPlus } from "react-icons/tb";
import { CiBezier } from "react-icons/ci";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { FaPeopleRoof } from "react-icons/fa6";

export default function About() {
  return (
    <>
      <div className='w-full h-auto flex justify-between items-center gap-4 px-2 py-8'>
        {/* Brief History for NOGTECH */}
        <div className='w-[50%]'>
            <span className='w-full h-auto py-2 px-8 text-sm text-center text-blue-500'>KNOWN US MORE</span>
            <h1 className='text-6xl font-bold py-4 text-center text-blue-900'>ABOUT NOGTECH</h1>
                <div className='w-full h-auto py-2 px-8'>
                     <p>
                        NOGTECH Training Institute is a technology-driven digital skills academy legally
                         registered in Nigeria with the Corporate Affairs Commission (CAC) in 2024.
                          We are committed to equipping individuals, students, entrepreneurs, 
                          and aspiring technology professionals with the practical knowledge, technical skills, 
                        and creative mindset required to thrive in today rapidly evolving digital world.
                     </p>
                </div>

                <div className='w-full h-auto py-2 px-8'>
                    <p>
                        At NOGTECH, we believe that technology education should go beyond theoretical 
                        knowledge. Our training approach is built around hands-on learning, practical
                         demonstrations, collaborative projects, and the development of real-world applications. 
                         From the fundamentals of programming to advanced professional projects, we guide our 
                         students through a structured learning journey that transforms beginners into confident,
                          capable, and innovative digital professionals.
                    </p>
                </div>

                <div className='w-full h-auto py-2 px-8'>
                   
                    <p>With professional instructors, a practical learning environment, 
                    comprehensive course outlines, and a strong emphasis on teamwork,
                     NOGTECH provides learners with the opportunity to acquire industry-relevant digital 
                     skills from the foundation level to professional proficiency.</p>
                </div>


            <div className='w-full h-auto py-2 px-8'>
                <p> NOGTECH Training Institute provides a learning pathway designed to help you 
                     achieve your goals. To become a leading technology training institute in Nigeria and beyond,
                     recognized for developing highly skilled, innovative, and industry-ready 
                     digital professionals who drive technological advancement, create employment opportunities,
                      and provide sustainable digital solutions to real-world challenges.</p>

                    <p>We envision a future where every motivated individual has access to quality 
                    technology education, practical digital skills, and the opportunity to become a creator, 
                    innovator, entrepreneur, and leader in the global digital economy.</p>

                    <p>Our mission is simple: to transform potential into practical digital skills and practical skills into opportunities.</p>

            </div>

           
        </div>

        {/* CEO Images */}

        <div className='w-[40%]'>
            <Image src="/ceo.jpeg" alt='CEO Photo' width={300} height={300} className='w-[500px] h-[500px] rounded-full'/>

            <div className='w-[50%] m-auto py-4'>
            <p className='font-bold text-blue-900 text-3xl'>NGALAKA GIFT</p>
            <p className='font-semibold text-blue-600 text-sm'>CEO NOGTECH Training Institute</p>
        </div>
        </div>
      </div>

{/* Driven  */}
      <div className=' w-full h-auto bg-blue-900'>
            <div className='w-[50%] h-auto m-auto py-8'>
                <h1 className='text-center py-4 text-4xl font-bold text-white'>Rooted in Excellence, Driven by Innovation</h1>
                <p className='text-center text-white text-sm'>We are committed to nurturing talent, fostering continuous growth, and empowering the next generation of 
                    digital professionals to achieve their career aspirations</p>
            </div>

            {/* Activities of NOGTECH */}

            <div className='w-[90%] h-auto mx-auto grid grid-cols-3 gap-8 '>
                {/* Flexibility */}
                <div className='shadow-[0_35px_35px_rgba(0,0,0,0.25)]  transition duration-3000 ease-in-out hover:scale-x-90'>
                    <p className='text-white text-2xl font-bold py-2 px-4'><BiAlarm /></p>
                    <h1 className='text-white text-xl font-semibold px-4 text-center'>Flexibility </h1>
                    <p className='text-white/80 text-sm px-4'>Our weekday, weekend, and online classes give you the flexibility to learn conveniently 
                        while balancing your work, studies, and other commitments.</p>
                </div>

                 {/*Condusive Environment */}
                <div  className='shadow-[0_35px_35px_rgba(0,0,0,0.25)]  transition duration-3000 ease-in-out hover:scale-x-90'>
                    <p className='text-white text-xl font-bold py-2 px-4'><DiFsharp /></p>
                    <h1 className='text-white text-xl font-semibold px-4 text-center'>Condusive Environment </h1>
                    <p className='text-white/80 text-sm px-4'>We create a supportive and conducive learning environment where students can learn, 
                        practice, collaborate, and develop their skills with confidence.</p>
                </div>


                 {/* Affordable tuition fees */}
                <div className='shadow-[0_35px_35px_rgba(0,0,0,0.25)]  transition duration-3000 ease-in-out hover:scale-x-90'>
                    <p className='text-white text-2xl font-bold py-2 px-4'><TbMoneybagPlus /></p>
                    <h1 className='text-white text-xl font-semibold px-4 text-center'>Affordable tuition fees</h1>
                    <p className='text-white/80 text-sm px-4'>At NOGTECH Training Institute, we strive to make quality technology 
                     education accessible and affordable. Our training programs are competitively
                     priced, with flexible payment options
                    available to make it easier for learners to enroll and complete their chosen program.</p>
                </div>

                 {/* Digital Skills & Professional Development */}
                <div className='shadow-[0_35px_35px_rgba(0,0,0,0.25)]  transition duration-3000 ease-in-out hover:scale-x-90'>
                    <p className='text-white text-2xl font-bold py-2 px-4'><CiBezier /></p>
                    <h1 className='text-white text-xl font-semibold px-4  text-center'> Digital Skills & Professional Development</h1>
                    <p className='text-white/80 text-sm px-4 '>Our modern learning facilities, advanced tools, and practical 
                        training approach provide the ideal environment for developing 
                        digital skills. Students gain hands-on experience through 
                        projects that transform theoretical knowledge into practical expertise.</p>
                </div>

                 {/* Connect with Like-Minded Innovators */}
                <div className='shadow-[0_35px_35px_rgba(0,0,0,0.25)] transition duration-3000 ease-in-out hover:scale-x-90'>
                    <p className='text-white text-2xl font-bold py-2 px-4'><LiaPeopleCarrySolid /></p>
                    <h1 className='text-white text-xl font-semibold px-4 text-center'>Connect with Like-Minded Innovators</h1>
                    <p className='text-white/80 text-sm px-4'>Our engineers are all Native English speakers, they work on your 
                    time-zone and will easily adopt your collaboration tools and practices.</p>
                </div>

                 {/* Diverse talent base */}
                <div className='shadow-[0_35px_35px_rgba(0,0,0,0.25)] transition duration-3000 ease-in-out hover:scale-x-90'>
                    <p className='text-white text-2xl font-bold py-2 px-4 '><FaPeopleRoof /></p>
                    <h1 className='text-white text-xl font-semibold px-4 text-center'>Diverse talent base</h1>
                    <p className='text-white/80 text-sm px-4'>More Black Talent: Through our operations in Africa we are able
                     to give you access to high quality engineers from under-represented backgrounds.</p>
                </div>
            </div>
      </div>
    </>
  )
}

"use client";
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"
import { Navigation, Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { GiSelfLove } from "react-icons/gi";
import { CiClock2 } from "react-icons/ci";
import { BiVideoRecording } from "react-icons/bi";
import { TbCertificate } from "react-icons/tb";
import { IoIosArrowRoundForward, IoMdArrowRoundForward } from "react-icons/io";


export default function Hero() {
  const jobs = [
    {
        id: 1,
        title:"works",
        job:"/airtel.jpg",
      },

       {
        id: 2,
        title:"works",
        job:"/zennith.jpg",
      },


       {
        id: 3,
        title:"works",
        job:"/meta.jpg",
      },


       {
        id: 4,
        title:"works",
        job:"/google.jpg",
      },


       {
        id: 5,
        title:"works",
        job:"/online.jpg",
      },


       {
        id: 6,
        title:"works",
        job:"/amazon.jpg",
      },


       {
        id: 7,
        title:"works",
        job:"/apple.jpg",
      },

       {
        id: 8,
        title:"works",
        job:"/dh.jpg",
      },


       {
        id: 9,
        title:"works",
        job:"/fiver.jpg",
      },


       {
        id: 10,
        title:"works",
        job:"/ailogo.jpg",
      },



       {
        id: 11,
        title:"works",
        job:"/freelance.jpg",
      },


       {
        id: 12,
        title:"works",
        job:"/organ.jpg",
      },


]
    const courses = [
  {
    id: 1,
    title: "Web Dev ",
    image: "/website.jpg",
    imgtitle:"courses",
  },
 {
    id: 2,
    title: "UI & UX Design ",
    image: "/ux.jpg",
    imgtitle:"courses",
  },
   
  {
    id: 3,
    title: "Data Analysis",
    image: "/dataan.jpg",
    imgtitle:"courses",
  },

 {
    id: 4,
    title: "Multimedia ",
    image: "/Multimedia.jpg",
   imgtitle:"courses",
  },
   
  {
    id: 5,
    title: "AI AUtomation",
    image: "/Ai.jpg",
    imgtitle:"courses",
  },
   
  {
    id: 6,
    title: "Digital Marketing",
    image: "/market.jpg",
    imgtitle:"courses",
  }
    

   
];
  const heroImages = ["/pytho.jpg", "/java.jpg", "/next.svg", "/dataan.jpg", "/html.jpg", "/jscript.jpg", "/nodejs.jpg", "/tailwind.jpg", "/ux.jpg", "/mongoose.jpg", "/Multimedia.jpg", 
    "/marketing.jpg"
  ];
  return (
    <>
      <section className="relative min-h-[700px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/photo1.jpg"
            alt="NOGTECH technology background"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Dark Overlay */}

        <div className="absolute inset-0 -z-10 bg-black/70"></div>

        {/* Hero Content */}
        <div className="mx-auto flex min-h-[700px] max-w-7xl items-center px-6 py-20 lg:px-8">
          {/* LEFT SIDE */}
          <div className="w-full lg:w-1/2">
            {/* Small Heading */}
            <p className="mb-4 text-sm font-semibold uppercase tracking-[3px] text-orange-400">
              NOGTECH DIGITAL SKILLS TRAINING
            </p>

            {/* Main Heading */}
            <h1 className="max-w-2xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Build Your Future With
              <span className="block text-blue-500"> Digital Skills </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-8 text-gray-200 sm:text-lg">
              Learn practical technology skills that can help you build
              websites, create digital products, work with artificial
              intelligence, design user experiences, and build a successful
              digital career.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-lg bg-blue-600 px-7 py-3.5 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-orange-500">
                {" "}
                Register for Training
              </button>

              <button className="rounded-lg border border-white/50 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-gray-900">
                {" "}
                Explore Courses{" "}
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden w-full lg:block lg:w-1/2 lg:pl-12">
            <div className="relative mx-auto max-w-lg">
              {/* Decorative Background */}

              <div className="absolute -inset-4 rounded-3xl bg-blue-500/20 blur-2xl"></div>

              {/* Image Slider */}

              <div className="relative overflow-hidden rounded-2xl border-0 border-white/20 bg-white/10 p-2 shadow-2xl backdrop-blur-sm">
                <Swiper
                  //  modules={[Autoplay, Pagination, EffectFade]}
                  modules={[Autoplay, EffectFade]}
                  effect="fade"
                  loop={true}
                  autoplay={{ delay: 2000, disableOnInteraction: false }}
                  //  pagination={{ clickable: true, }}
                  className="h-[420px] rounded-xl"
                >
                  {/* Slides MUST be inside Swiper */}
                  {heroImages.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div className="relative h-full w-full overflow-hidden rounded-xl">
                        <Image
                          src={image}
                          alt={`NOGTECH training ${index + 1}`}
                          fill
                          priority={index === 0}
                          className="object-cover transition duration-700 hover:scale-105"
                        />

                        {/* Image Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
      
     
     {/*  */}

     <section className="w-full h-auto py-8 bg-blue-100 ">
      <div className="w-[70%] h-auto py-4 mx-auto">
          <span className="block text-center py-2 text-3xl font-extrabold rounded-4xl text-blue-900">One platform for skills, talent and global work</span>
      </div>
    
{/*  */}
      <div className="w-[90%] m-auto h-auto flex justify-between items-center gap-2">
      <div className="w-[64%] relative w-150 h-125 overflow-hidden ">

      {/* Background Image */}
      <Image
        src="/mypic.jpeg"
        alt="Web Development Training"
        fill
        className="object-cover"
      />

       {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
        
         {/* Write-up */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 text-white">
           <span className="font-bold text-2xl text-orange-500">For Individual</span>
        <h2 className="text-6xl font-bold mb-3">
          Build your Career
        </h2>

        <p className="text-base leading-7 mb-5">
         Learn Practical skills, works on real projects,receive coaching and prepare for global opportunitie
        </p>

        <div className="flex justify-stretch items-center gap-4 bg-transparent text-orange-500 font-extrabold text-xl">
          <button>Explore Programs</button>
          <span><IoMdArrowRoundForward /></span>
        </div>
      </div>
      </div>


      {/*  */}

      <div className="w-[35%] relative w-150 h-125 overflow-hidden ">

      {/* Background Image */}
      <Image
        src="/techpics.jpg"
        alt="Web Development Training"
        fill
        className="object-cover "
      />

       {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
        
         {/* Write-up */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 text-white">
           <span className="font-bold text-2xl text-orange-500">For Companies</span>
        <h2 className="text-6xl font-bold mb-3">
          Build your Team
        </h2>

        <p className="text-base leading-7 mb-5">
         Access verified professionals and the infrasturcture to hire, manage and pay them
        </p>

        <div className="flex justify-stretch items-center gap-4 bg-transparent text-orange-500 font-extrabold text-xl">
          <button>Find Talented Skill Individual</button>
          <span><IoMdArrowRoundForward /></span>
        </div>
      </div>
      </div>
      </div>

      {/*  */}

      <div className="w-[80%] h-auto flex justify-between items-center gap-2 mx-auto py-8  ">
          <div>
            <div className="flex justify-center items-center gap-2 border-r-4 px-4 border-black/35">
                <span className="block text-orange-500 font-bold text-xl">01</span>
                <span className="block text-blue-900 font-bold ">Technology and business skills</span>
            </div>
          </div>

            <div>
              <div className="flex justify-center items-center gap-2 border-r-4 px-4 border-black/35">
                <span className="block text-orange-500 font-bold text-xl">02</span>
                <span className="block text-blue-900 font-bold">Projects and assessments</span>
              </div>
            </div>

            <div>
              <div className="flex justify-center items-center gap-2 border-r-4 px-4 border-black/35">
                <span className="block text-orange-500 font-bold text-xl">03</span>
                <span className="block text-blue-900 font-bold">Coaching and career support</span>
              </div>
            </div>

            <div>
              <div className="flex justify-center items-center gap-2 border-r-4 px-4 border-black/35">
                <span className="block text-orange-500 font-bold text-xl">04</span>
                <span className="block text-blue-900 font-bold">Clear program and cohort details</span>
              </div>
            </div>
      </div>
     </section>
        {/* Our learners work at */}
        
        <section className='w-full h-auto'>
            <div className='w-full h-auto py-8'>

               <div className='w-[40%] h-auto m-auto'> <h1 className='text-center font-bold text-blue-900 py-8 text-4xl'> Our learners work at</h1></div>
                   <Swiper
            // modules={[ ]}
            modules={[Navigation, Pagination, Autoplay]}
            // modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={6}
            // navigation
            // pagination={{ clickable: true }}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },

              768: {
                slidesPerView: 4,
              },

              1024: {
                slidesPerView: 7,
              },
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            // loop={false}
            // loop={true}
            className="overflow-hidden"
          >
          
           <div className="w-full h-auto flex justify-between items-center gap-4 ">
              {jobs.map((job) => (
                < SwiperSlide key={job.id} >
                  <div className="w-full h-auto">
                    <Image src={job.job} width={300} height={300} alt="Nogtech" className="w-[90%] h-40 mx-auto lg:w-20 lg:h-20 object-cover" />
                  </div>
                </SwiperSlide>
              ))}
            </div>

          </Swiper>


            </div>
              
        </section>


      {/* Certification path */}

      <section className="w-full h-auto ">
        <div className="w-[50%] h-auto mx-auto py-8">
          <span className="block text-blue-900 font-extrabold text-4xl text-center py-4">
            Every Skill Has a Starting Point
          </span>
          <p className="text-black/80 text-xl text-center">
            Build the skills to move forward in tech
          </p>
        </div>

        <div className="w-[90%] h-auto flex justify-between items-center gap-8 mx-auto">
          <div className=" w-87.5 border border-blue-600 rounded-lg transition-transform duration-3000 ease-in-out hover:scale-y-110 ">
            {/* certification */}
            <div className="flex justify-center items-center gap-4 py-4">
              <span className="block bg-blue-200 text-blue-700 text-2xl">
                <GiSelfLove />
              </span>
              <span className="text-blue-500 font-bold text-sm">
                short, focused learning programme.
              </span>
            </div>

            <div className="py-2">
              <p className="text-sm text-black/70 px-4">
                Explore self-paced programs designed to help you develop
                specialized technology skills at your own pace. Build practical
                knowledge, complete real-world projects, and earn a NOGTECH
                certificate to showcase your skills and strengthen your
                professional profile.
              </p>
            </div>
            <div>
              <div className="flex justify-stretch items-center gap-2 px-2">
                <span className="block text-blue-700 text-2xl font-extrabold">
                  <CiClock2 />
                </span>
                <span className="block font-bold text-sm text-black/60">
                  4-8 weeks (flexible, self-paced)
                </span>
              </div>

              <div className="flex justify-stretch items-center gap-2 px-2">
                <span className="block text-blue-700 text-2xl font-extrabold">
                  <BiVideoRecording />
                </span>
                <span className="block font-bold text-sm text-black/60">
                  Live classes + recorded lecture
                </span>
              </div>

              <div className="flex justify-stretch items-center gap-2 px-2">
                <span className=" block text-blue-700 text-2xl font-extrabold">
                  <TbCertificate />
                </span>
                <span className="block font-bold text-sm text-black/60">
                  NOGTECH Nano-Diploma Certificate
                </span>
              </div>
            </div>

            <div className="w-[250px] h-auto mx-auto py-2">
              <button className="w-[250px] h-auto mx-auto py-2 text-sm text-center cursor-pointer bg-blue-900 rounded-lg text-white font-bold">
                Explore Nano Certification
              </button>
            </div>
          </div>

          <div  className=" w-87.5 border border-blue-600 rounded-lg transition-transform duration-3000 ease-in-out hover:scale-y-110 ">
            {/* certification */}
            <div className="flex justify-center items-center gap-4 py-4">
              <span className="block bg-blue-200 text-blue-700 text-2xl">
                <GiSelfLove />
              </span>
              <span className="text-blue-500 font-bold text-sm">
                Diploma Certificate.
              </span>
            </div>

            <div className="py-2">
              <p className="text-sm text-black/70 px-4">
                Build the skills you need for a successful career in technology.
                With structured lessons, practical projects, expert mentorship,
                and a supportive learning community, you will develop the
                confidence and experience to pursue opportunities in the digital
                economy.
              </p>
            </div>
            <div>
              <div className="flex justify-stretch items-center gap-2 px-2">
                <span className=" block text-blue-700 text-2xl font-extrabold">
                  <CiClock2 />
                </span>
                <span className="block font-bold text-sm text-black/60">4-6 months</span>
              </div>

              <div className="flex justify-stretch items-center gap-2 px-2">
                <span className=" blocktext-blue-700 text-2xl font-extrabold text-blue-700">
                  <BiVideoRecording />
                </span>
                <span className="block font-bold text-sm  text-black/60">
                  Live classes + recorded lecturess
                </span>
              </div>

              <div className="flex justify-stretch items-center gap-2 px-2">
                <span className=" block text-blue-700 text-2xl font-extrabold">
                  <TbCertificate />
                </span>
                <span className="block font-bold text-sm text-black/60">
                 NOGTECH Diploma certificate
                </span>
              </div>
            </div>

            <div className="w-[250px] h-auto mx-auto py-2">
              <button className="w-[250px] h-auto py-2 text-sm text-center bg-blue-900 rounded-lg cursor-pointer text-white font-bold">
                Start a Diploma Program
              </button>
            </div>
          </div>

          <div  className=" w-87.5 border border-blue-600 rounded-lg transition-transform duration-3000 ease-in-out hover:scale-y-110 ">
            {/* certification */}
            <div className="flex justify-center items-center gap-4 py-4">
              <span className="block bg-blue-200 text-blue-700 text-2xl">
                <GiSelfLove />
              </span>
              <span className="text-blue-500 font-bold text-sm">
                Masterclass.
              </span>
            </div>

            <div className="py-2">
              <p className="text-sm text-black/70 px-4">
                Learn practical tech skills through concise, focused sessions
                built for real-world application. Perfect for professionals and
                learners who want to upgrade their skills and start applying
                what they learn right away.
              </p>
            </div>

            <div>
              <div className="flex justify-stretch items-center gap-2 px-2 ">
                <span className="text-blue-700 text-2xl font-extrabold">
                  <CiClock2 />
                </span>
                <span className="block font-bold text-sm text-black/60">1-6 hours </span>
              </div>

              <div className="flex justify-stretch items-center gap-2 px-2">
                <span className="text-blue-700 text-2xl font-extrabold">
                  <BiVideoRecording />
                </span>
                <span className="block font-bold text-sm  text-black/60">
                  Physical/Online, Live Sessions
                </span>
              </div>

              <div className="flex justify-stretch items-center gap-2 px-2">
                <span className="text-blue-700 text-2xl font-extrabold">
                  <TbCertificate />
                </span>
                <span className="block font-bold text-sm  text-black/60 ">
                  No certification
                </span>
              </div>
            </div>
            <div className="w-62.5 h-auto mx-auto py-4">
              <button className="w-62.5 h-auto py-2 text-sm text-center bg-blue-900 rounded-lg text-white font-bold cursor-pointer">
                Browse Masterclasses
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Course */}

      <div className="w-full h-auto py-8">
        <div className="w-full h-auto py-8">
            <h1 className=" text-blue-900 font-extrabold text-4xl text-center py-4">Some of our tech courses/programme</h1>
            <p className="text-black/60 text-center">We ensure that Africans interested in exploring various occupations can readily access the resources</p>
            <p  className="text-black/60 text-center">they need to learn and grow</p>
        </div>

            <div className="flex justify-between items-center gap-4 py-8 ">
               {courses.map((course) => (
          <div key={course.id} >

            <div>
                <Image src={course.image} width={300} height={300} alt={course.imgtitle} className="w-50 h-50 "/>
            </div>
            {/* <div className="absolute top-400 "> 
              <p className="text-white font-extrabold text-sm px-8">{course.title}</p>
                </div> */}

                <div>
                   <p className=" font-extrabold text-xl px-4 text-blue-900">{course.title}</p>
                </div>
            </div>
              ))}
            </div>       
      </div>

        {/* Top course */}

              <div className='w-full h-auto bg-blue-800 py-8'>
                {/*  */}
                <div className='w-[90%] h-auto mx-auto flex justify-between items-center gap-4'>
                  <div className='w-[50%] h-auto'>
                    <Image src="/tcsch.jpg" width={300} height={300} alt='Nogtech' className='w-[500px] h-[500px] object-cover rounded-2xl'/>
                  </div>

                  <div className='w-[50%] h-auto space-y-6'>
                    <h1 className='font-normal text-3xl text-white' >We deliver hands-on, specialized training tailored to your teams</h1>

                    <p className='text-white/60 text-xl'>Specialized expertise for your developers, plus the broader skills your whole org needs. One platform,
                     so you close skill gaps across the entire team instead of one corner of it.</p>

                       <button className='flex justify-center items-center gap-4 font-bold text-xl rounded-2xl cursor-pointer bg-red-800 text-white py-4 px-2'>
                        Learn more about our skills
                        <span className='block font-bold text-2xl'><IoIosArrowRoundForward /></span>
                       </button>
                  </div>
                </div>
              </div>

      {/* Introducing the Program */}

      <div className="w-full h-125 bg-blue-950 flex justify-between items-center gap-4 py-8">
        <div className="w-[40%] h-auto mx-auto">
              <div className="py-4">
                <span className="block bg-blue-100 w-70 text-center py-2 text-sm font-extrabold rounded-4xl text-orange-700">Flexible Learning Options</span>
              </div>

              <div className="py-4">
                <h1 className="font-extrabold text-4xl text-white">Small Steps. Specialized Skills. Bigger Opportunities</h1>
              </div>

              <div className="py-4">
                <p className="text-white/50" >Explore NOGTECH programmes designed to help you master specific technology 
                  skills through structured lessons, guided practice, and hands-on projects. Learn essential concepts, 
                  strengthen your technical abilities, and apply your knowledge through practical training.</p>
              </div>

              <div className="flex justify-between items-center gap-4">
              
                <button className="w-50 h-auto cursor-pointer bg-transparent border border-white rounded-4xl text-white text-sm font-bold py-2 ">Project Led</button>
                <button  className="w-50 h-auto cursor-pointer bg-transparent border border-white rounded-4xl text-white text-sm font-bold py-2 ">Recognised Certificate</button>
                <button  className="w-50 h-auto cursor-pointer bg-transparent border border-white rounded-4xl text-white text-sm font-bold py-2 ">Storter Timeline</button>
              </div>
        </div>

              {/* International Student  */}
          <div className="w-[50%] h-auto">
          <div className="w-120 h-100 border-2 border-white/20 flex flex-col justify-center items-center">
             <div className="w-140 h-50 bg-blue-100">
               <Image src="/partner.jpeg" width={300} height={300} alt="partiner" className="w-70 -mt-20 mx-auto"/> 
             </div>
          </div>    
        </div>

      </div>
    </>
  );
}


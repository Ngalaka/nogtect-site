"use client";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import { CiSearch } from "react-icons/ci";
// import { id } from "zod/locales";
import { CiClock1 } from "react-icons/ci";
import { IoArrowForward } from "react-icons/io5";

export default function Searchcourse() {

  // programmes, bootcamps, and courses data
  const programmes = [
    {
      id: 1,
       name: "Business & Productivity",
      program: "Advanced Microsoft Excel",
      description: "Advance your Excel skills for reporting, formulas, pivot tables, dashboards, automation, and business analysis.",
      duration: "12 weeks",
      icon:<CiClock1 />,
      format: "Physical / Online virtual",
      price: "₦86,000",
      image: "/advanexcel.jpg",
      icon2: <IoArrowForward />,
      view: "View programme", 
      title: "programms"
      
    },
    {
      id: 2,
      name: "Data Science & Analytics",
      program: "Data Science Course",
      description: "Automate repetitive work and business processes with generative AI, workflow platforms, APIs, agents, and responsible human oversight.",
      duration: "16 weeks",
      icon: <CiClock1 />,
      format: "Physical / Online virtual",
      price: "₦430,000",
      image: "/datasci.jpg",
      icon2: <IoArrowForward />,
      view: "View programme",
      title: "programms"
    },

    {
      id: 3,
      name: "UI/UX & Product Design",
      program: "UI/UX & Product Design",
      description: "Learn user research, wireframing, prototyping, usability testing, and portfolio-ready product design with Figma.",
      duration: "12 weeks",
      icon: <CiClock1 />,
      format: "Physical / Online virtual",
      price: "₦161,250",
      image: "/uiux.jpg",
      icon2: <IoArrowForward />,
      view: "View programme", 
      title: "programms"

    },

  
    {
      id:4,
      name: "Software Development",
      program: "Web Development with PHP & MySQL",
      description: "Learn dynamic website development with PHP, MySQL, forms, authentication, CRUD operations, and deployment basics.",
      duration: "16 weeks",
      icon: <CiClock1 />,
      format: "Physical / Online virtual",
      price: "₦430,000",
      image: "/php.jpg",
      icon2: <IoArrowForward />,
      view: "View programme", 
      title: "programms"
    },

    {
      id:5,
      name: "Creative & Media",
      program: "Videography",
      description: "Learn camera movement, lighting, sound, storytelling, editing, and practical video production for brands and events.",
      duration: "8 weeks",
      icon: <CiClock1 />,
      format: "On-campus / Hybrid",
      price: "₦215,000",
      image: "/multi.jpg",
      icon2: <IoArrowForward />,
      view: "View programme", 
      title: "programms"
    },

    {
      id:6,
      name: "Digital Marketing",
      program: "Social Media Marketing",
      description: "Plan, create, publish, and measure social media campaigns for brands, SMEs, creators, and community growth.",
      duration: "8 weeks",
      icon: <CiClock1 />,
      format: "Online / Physical",
      price: "₦64,500",
      image: "/digitalmark.jpg",
      icon2: <IoArrowForward />,
      view: "View programme", 
      title: "programms"
    },

    {
      id:7,
      name: "Software Development",
      program: "Python Programming",
      description: "Learn Python from the ground up with scripts, functions, files, APIs, data handling, testing, and practical projects.",
      icon: <CiClock1 />,
       duration: "12 weeks",
      format: "Physical / Online virtual",
      price: "₦215,000",
      image: "/pythons.jpg",
      icon2: <IoArrowForward />,
      view: "View programme", 
      title: "programms"
    },

    {
      id:8,
      name: "Cybersecurity",
      program: "Certified Ethical Hacker (CEH)",
      description: "Prepare for ethical hacking and security testing with practical labs, attack-and-defence concepts, and CEH-aligned instruction.",
      icon: <CiClock1 />,
      duration: "16 weeks",
      format: "Physical / Online virtual",
      price: "₦1,290,000",
      image: "/cybersecurity.jpg",
      icon2: <IoArrowForward />,
      view: "View programme", 
      title: "programms"
    },


     {
      id:9,
      name: "Digital Marketing",
      program: "Content & Copywriting",
      description: "Learn persuasive writing for websites, social media, email, ads, and business communication.",
      icon: <CiClock1 />,
      duration: "8 weeks",
      format: "Online / Physical",
      price: "₦107,500",
      image: "/contentcreat.jpg",
      icon2: <IoArrowForward />,
      view: "View programme", 
      title: "programms"
    },

 {
      id:10,
      name: "Data Science & Analytics",
      program: "Data Analysis with Excel",
      description: "Learn Excel formulas, data cleaning, pivot tables, charts, dashboards, and practical reporting for business decisions.",
      icon: <CiClock1 />,
      duration: "12 weeks",
      format: "Online / Physical",
      price: "₦161,250",
      image: "/dataxcel.jpg",
      icon2: <IoArrowForward />,
      view: "View programme", 
      title: "programms"
    },

    {
      id:11,
      name: "Data Science & Analytics",
      program: "Data Analysis with Power BI",
      description: "Turn raw data into clear dashboards, models, and business insights using Microsoft Power BI..",
      icon: <CiClock1 />,
      duration: "8 weeks",
      format: "Online / Physical",
      price: "₦215,000",
      image: "/powerbi.jpg",
      icon2: <IoArrowForward />,
      view: "View programme", 
      title: "programms"
    },

     {
      id:12,
      name: "Software Development",
      program: "Full-Stack Web Development with Next.js",
      description: "Build modern full-stack web applications with HTML, CSS, JavaScript, React, Next.js, Node.js, databases, authentication, testing, and deployment.",
      icon: <CiClock1 />,
      duration: "16 weeks",
      format: "Online / Physical",
      price: "₦430,000",
      image: "/webmern.jpg",
      icon2: <IoArrowForward />,
      view: "View programme", 
      title: "programms"
    },

     {
      id:13,
      name: "Software Development",
      program: "Full-Stack Web Development with Django",
      description: "Create secure full-stack applications with Python, Django, REST APIs, React, databases, authentication, and deployment.",
      icon: <CiClock1 />,
      duration: "16 weeks",
      format: "Online / Physical",
      price: "₦430,000",
      image: "/django.jpg",
      icon2: <IoArrowForward />,
      view: "View programme", 
      title: "programms"
    },

     {
      id:14,
      name: "UI/UX & Product Design",
      program: "Graphics Design",
      description: "Learn visual communication, branding, typography, layout, and digital design with practical portfolio projects.",
      icon: <CiClock1 />,
      duration: "12 weeks",
      format: "Online / Physical",
      price: "₦161,250",
      image: "/graphic.jpg",
      icon2: <IoArrowForward />,
      view: "View programme", 
      title: "programms"
    },

     {
      id:15,
      name: "Business & Productivity",
      program: "Microsoft Office Specialist",
      description: "Build practical Word, Excel, PowerPoint, and productivity skills for office work and MOS certification readiness..",
      icon: <CiClock1 />,
      duration: "8 weeks",
      format: "Online / Physical",
      price: "₦107,500",
      image: "/office.jpg",
      icon2: <IoArrowForward />,
      view: "View programme", 
      title: "programms"
    },

     {
      id:16,
      name: "AI Automation",
      program: "Business & Productivity",
      description: "Build practical Word, Excel, PowerPoint, and productivity skills for office work and MOS certification readiness..",
      icon: <CiClock1 />,
      duration: "8 weeks",
      format: "Online / Physical",
      price: "₦107,500",
      image: "/Ai.jpg",
      icon2: <IoArrowForward />,
      view: "View programme", 
      title: "programms"
    }
    
  ];

  // Array of dropdown items
  const pathways = [
    "All pathways ",
    "Business & Productivity",
    "cloud & DevOps",
    "Cybersecurity",
    "Creative & Media",
    "Data Science & Analytics",
    "Digital Marketing",
    "Engineering & CAD",
    "Networking & Hardware",
    "Project Management",
    "Software Development",
    "UI/UX & Product Design",
  ];

  // Array of dropdown items
  const experiences = [
    "All experiences levels",
    "Beginner-friendly",
    "Some experience",
    "Experienced learner",
  ];

  const formats = [
    "All",
    "Physical class",
    "Online Virtual",
    " Physical & Online virtual",
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    //  getValues, // for checking password and confirm password
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const payload = {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        mobile: data.mobile,
        campus: data.campus,
        course: data.course,
        guidance: data.guidance,
        messages: data.messages,
        emailRole: "myself",
      };
      console.log("Payload:", payload);
      const res = await axios.post("/api/email", payload);

      console.log("Status:", res.status);
      console.log("Response:", res.data);

      if (res.data.success || res.status == 200) {
        router.push("/");
        reset();
      }
    } catch (error) {
      console.error(error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
    <div>
      {/* Search Form */}
      <div className="w-full h-auto bg-blue-800 py-2">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="w-[98%] h-auto py-2 mx-auto bg-blue-950 flex justify-between items-baseline gap-4">
            <div className="flex justify-center items-center gap-2">
              <span>
                <CiSearch />
              </span>
              <input
                type="text"
                {...register("search", {
                  required: "Please enter a search term",
              
                })}
                 placeholder="Please enter a search term"
                className="w-[400px] h-auto outline-none py-4  bg-blue-950 text-white  font-bold border-2 px-2 rounded-lg  focus:border-blue-500
                placeholder:text-xl placeholder:font-bold placeholder:text-white/40 placeholder:opacity-80focus:outline-none hover:outline-1 hover:border-2 hover:border-white/50"
              />

              {errors.search && (
                <p className="text-red-500 text-sm">{errors.search.message}</p>
              )}
            </div>

            <div>
              <div>
                <span></span>
                <span></span>
              </div>
              <select
                id="pathway"
                {...register("pathway", {
                  required: "Please Select-One a pathway",
                })}
                className="w-[240px] h-auto outline-none py-4  bg-blue-950 text-white font-bold border-2 px-2 rounded-lg  focus:border-blue-500
                focus:outline-none hover:outline-1 hover:border-2 hover:border-white/50"
              >
                <option value="">All pathways</option>

                {pathways.map((path, index) => (
                  <option
                    key={index}
                    value={path}
                    className=" block mb-2 font-bold text-white"
                  >
                    {path}
                  </option>
                ))}
              </select>

              {errors.pathway && (
                <p className="text-red-500 text-sm">{errors.pathway.message}</p>
              )}
            </div>

            <div className="flex justify-center items-center gap-2">
              <span></span>
              <select
                id="experience"
                {...register("experience", {
                  required: "Please select a experience",
                })}
                className="w-[240px] h-auto outline-none py-4  bg-blue-950 text-white font-bold border-2 px-2 rounded-lg  focus:border-blue-500
               focus:outline-none hover:outline-1 hover:border-2 hover:border-white/50"
              >
                <option value="">All experiences levels</option>

                {experiences.map((experience, index) => (
                  <option
                    key={index}
                    value={experience}
                    className=" block mb-2 font-bold text-white"
                  >
                    {experience}
                  </option>
                ))}
              </select>

              {errors.experience && (
                <p className="text-red-500 text-sm">
                  {errors.experience.message}
                </p>
              )}
            </div>

            <div>
              <span></span>
              <select
                id="format"
                {...register("format", {
                  required: "Please select a format",
                })}
                className="w-[240px] h-auto outline-none py-4  bg-blue-950 text-white font-bold border-2 px-2 rounded-lg  focus:border-blue-500
               focus:outline-none hover:outline-1 hover:border-2 hover:border-white/50"
              >
                <option value="">Physical class</option>

                {formats.map((format, index) => (
                  <option
                    key={index}
                    value={format}
                    className=" block mb-2 font-bold text-white"
                  >
                    {format}
                  </option>
                ))}
              </select>

              {errors.format && (
                <p className="text-red-500 text-sm">{errors.format.message}</p>
              )}
            </div>
          </div>
        </form>
      </div>



      {/* course cards */}

      <div>
        <div>
          <h2>38 programmes found</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                     {programmes.map((programme) => (
                    <div key={programme.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                          <div>
                            <Image src = {programme.image}  width={300} height={300} alt={programme.title} 
                            className="w-full h-[200px] object-cover" />
                          </div>
                        <div>
                          <span>{programme.program}</span>
                        </div>
                    </div>
                     ))}
              </div>

          </div>
        </div>

      </div>
   
      
    </>
  );
}

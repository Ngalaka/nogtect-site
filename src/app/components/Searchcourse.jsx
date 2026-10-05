"use client"
import React from 'react'
import { useForm } from 'react-hook-form';
import { CiSearch } from 'react-icons/ci';

export default function Searchcourse() {

// Array of dropdown items
  const guidances = [
    "Programme guidance",
    "Fees and payment plans",
    "Class dates and times",
    "Campus visit",
    "Application support",
    "Other enquiry",
  ];

  // Array of dropdown items
  const courses = [
    "Full Stack Web Development",
    "UI/UX Design",
    "Python Programming",
    "AI Automation",
    "Data Analytics",
    "Digital Marketing",
  ];


  const campuses = [
    "Port Harcourt",
    "Abia State",
    "Imo State",
    "Online",
    "Not sure yet",
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
    <div className = "w-full h-auto bg-blue-800 py-2">

              <form action="" onSubmit={handleSubmit(onSubmit)}>
                 <div className = "w-[98%] h-auto py-2 mx-auto bg-blue-950 flex justify-between items-baseline gap-4">

            <div className ="flex justify-center items-center gap-2">
                <space><CiSearch /></space>
                <input text="text" placeholder="Search courses..."  className="w-[300px] h-auto outline-none py-2  bg-blue-950 text-white font-bold border-2 px-2 hover:outline-1 hover:border-2 hover:border-white/50"></input>
            </div>

            <div>
              <div>
                    <space></space> 
                    <space></space>
              </div>
               
               <select
                {...register("coursesearch", {
                  required: "Please select a campus city",
                })}
               className="w-[300px] h-auto outline-none py-4  bg-blue-950 text-white font-bold border-2 px-2 hover:outline-1 hover:border-2 hover:border-white/50"
              >
                <option value="">Choose a Preferred city</option>

                {campuses.map((campus, index) => (
                  <option
                    key={index}
                    value={campus}
                    className=" block mb-2 font-bold text-white"
                  >
                    {campus}
                  </option>
                ))}
              </select>

              {errors.coursesearch && (
                <p className="text-red-600">{errors.coursesearch.message}</p>
              )}

            </div>


            <div  className ="flex justify-center items-center gap-2">
                <space></space>
                  <select
                id="course"
                {...register("course", {
                  required: "Please select a course",
                })}
                className="w-[300px] h-auto outline-none py-2  bg-blue-950 text-white font-bold border-2 px-2 hover:outline-1 hover:border-2 hover:border-white/50"
              >
                <option value="">Not yet sure </option>

                {courses.map((course, index) => (
                  <option
                    key={index}
                    value={course}
                    className=" block mb-2 font-bold text-white"
                  >
                    {course}
                  </option>
                ))}
              </select>

              {errors.course && (
                <p className="text-red-500 text-sm">{errors.course.message}</p>
              )}
            </div>

            <div>
            
            </div>
        </div>
              </form>

           
    </div>
        
    </>
  )
}

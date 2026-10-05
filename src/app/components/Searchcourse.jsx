"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { CiSearch } from "react-icons/ci";

export default function Searchcourse() {

  // 
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
    "Both Physical & Online",
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
        

    </div>
      
    </>
  );
}

"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { IoMdArrowForward } from "react-icons/io";

export default function Email() {
  const [loading, setLoading] = useState(false);

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

  // destructure useForm to get register, handleSubmit, errors, and reset functions

  // use router
  const router = useRouter();

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
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          {/* First Name */}
          <div className="flex justify-between items-center gap-4 ">
            <div className="px-4 py-2">
              <label className=" block mb-2 font-bold text-white">
                First name
              </label>

              <input
                type="text"
                {...register("firstname", {
                  required: "First name field is required",
                })}
                className="w-[300px] h-auto outline-none py-2  bg-blue-950 text-white font-bold px-2 hover:outline-1 hover:border-2 border-orange-800"
              />

              {errors.firstname && (
                <p className="text-red-500 text-sm">
                  {errors.firstname.message}
                </p>
              )}
            </div>

            {/* Last Name */}
            <div className="px-4 py-2">
              <label className=" block mb-2 font-bold text-white">
                Last name
              </label>

              <input
                type="text"
                {...register("lastname", {
                  required: "last name field is required",
                })}
                className="w-[300px] h-auto outline-none py-2  bg-blue-950 text-white font-bold px-2 hover:outline-1 hover:border-2 border-orange-800"
              />

              {errors.lastname && (
                <p className="text-red-500 text-sm">
                  {errors.lastname.message}
                </p>
              )}
            </div>
          </div>

          {/* tell detal */}

          <div className="flex justify-between items-center gap-4">
            {/* email */}
            <div className="px-4 py-2">
              <label className=" block mb-2 font-bold text-white">
                Email address
              </label>

              <input
                type="email"
                {...register("email", {
                  required: "Email address field is required",
                })}
                className="w-[300px] h-auto outline-none py-2  bg-blue-950 text-white font-bold px-2 hover:outline-1 hover:border-2 border-orange-800"
              />

              {errors.email && (
                <p className="text-red-500 text-sm ">{errors.email.message}</p>
              )}
            </div>

            {/* mobile */}
            <div className="px-4 py-2">
              <label className=" block mb-2 font-bold text-white">
                Mobile number
              </label>

              <input
                type="text"
                {...register("mobile", {
                  required: "mobile field is required",
                })}
                className="w-[300px] h-auto outline-none py-2  bg-blue-950 text-white font-bold px-2 hover:outline-1 hover:border-2 border-orange-800"
              />

              {errors.mobile && (
                <p className="text-red-500 text-sm">{errors.mobile.message}</p>
              )}
            </div>
          </div>

          {/* course */}

          <div className="flex justify-between items-center gap-4">
            {/* Preferred campus */}
            <div className="px-4 py-2">
              <label className=" block mb-2 font-bold text-white">
                Preferred campus
              </label>

              <select
                {...register("campus", {
                  required: "Please select a campus city",
                })}
                className="w-[300px] h-auto outline-none py-2  bg-blue-950 text-white font-bold px-2 hover:outline-1 hover:border-2 border-orange-800"
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

              {errors.campus && (
                <p className="text-red-600">{errors.campus.message}</p>
              )}
            </div>

            {/* Programme of interest */}
            <div className="px-4 py-2">
              <label className=" block mb-2 font-bold text-white">
                Programme of interest
              </label>

              <select
                id="course"
                {...register("course", {
                  required: "Please select a course",
                })}
                className="w-[300px] h-auto outline-none py-2  bg-blue-950 text-white font-bold px-2 hover:outline-1 hover:border-2 border-orange-800"
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
          </div>

          {/* guidance */}
          <div className="px-4 py-4">
            <label className=" block mb-2 font-bold text-white">
              What would you like help with?
            </label>

            <select
              {...register("guidance", {
                required: "Please select aguidance",
              })}
              className="w-full h-auto outline-none py-3  bg-blue-950 text-white font-bold px-2 hover:outline-1 hover:border-2 border-orange-800"
            >
              <option value="">Programme guidances </option>

              {guidances.map((guidance, index) => (
                <option
                  key={index}
                  value={guidances}
                  className=" block mb-2 font-bold text-white"
                >
                  {guidance}
                </option>
              ))}
            </select>

            {errors.guidance && (
              <p className="text-red-500 text-sm">{errors.guidance.message}</p>
            )}
          </div>

          {/* brief message */}
          <div className="px-4 py-2">
            <label className=" block mb-2 font-bold text-white">
              Your message
            </label>

            <textarea
              name="messages"
              {...register("messages", {
                required: "last name field is required",
              })}
              placeholder="Tell us the skill you want to learn, your current experience, preperred location and schedule"
              rows="8"
              className="w-full h-auto outline-none py-2  bg-blue-950 text-white font-bold px-2 hover:outline-1 hover:border-2 border-orange-800"
            ></textarea>

            {errors.messages && (
              <p className="text-red-500 text-sm">{errors.messages.message}</p>
            )}
          </div>

          <div className="px-4 py-4">
            <button
              type="submit"
              disabled={loading}
              className={`w-full h-auto p-2 flex justify-center items-center gap-4 lg:p-2 rounded-lg text-white lg:w-[400px] font-extrabold ${loading ? "bg-gray-300 cursor-not-allowed" : " bg-orange-600 hover:bg-blue-700"}`}
            >
              {loading ? "Sending..." : "Send enquiry"}
              <span>
                <IoMdArrowForward />
              </span>
            </button>
          </div>

          <div className="px-4 py-4">
            <p className=" block mb-2 font-semibold text-white/40">
              By sending this information, you agree that Nogtech may contact
              you about this enquiry.
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

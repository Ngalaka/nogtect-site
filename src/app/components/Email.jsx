"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { IoMdArrowForward } from "react-icons/io";

export default function Email() {
  const [loading, setLoading] = useState(false);

  const guidances = [
    "Programme guidance",
    "Fees and payment plans",
    "Class dates and times",
    "Campus visit",
    "Application support",
    "Other enquiry",
  ];

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

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
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

      const res = await axios.post("/api/admin/email", payload);

      console.log("Status:", res.status);
      console.log("Response:", res.data);

      if (res.data.success || res.status === 200) {
        reset();
        router.push("/");
      }
    } catch (error) {
      console.error(error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  // Shared responsive input styling
  const inputClass =
    "w-full min-w-0 h-auto outline-none py-3 bg-white text-black font-bold px-3 border-2 border-transparent rounded-md focus:border-orange-800 transition-colors";

  const labelClass = "block mb-2 font-bold text-white text-sm sm:text-base";

  const fieldClass = "w-full min-w-0 px-2 py-2";

  const errorClass = "text-red-400 text-sm mt-1";

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full space-y-2"
      >
        {/* First name and last name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4">

          <div className={fieldClass}>
            <label className={labelClass}>
              First name
            </label>

            <input
              type="text"
              autoComplete="given-name"
              placeholder="Enter your first name"
              {...register("firstname", {
                required: "First name field is required",
              })}
              className={inputClass}
            />

            {errors.firstname && (
              <p className={errorClass}>
                {errors.firstname.message}
              </p>
            )}
          </div>

          <div className={fieldClass}>
            <label className={labelClass}>
              Last name
            </label>

            <input
              type="text"
              autoComplete="family-name"
              placeholder="Enter your last name"
              {...register("lastname", {
                required: "Last name field is required",
              })}
              className={inputClass}
            />

            {errors.lastname && (
              <p className={errorClass}>
                {errors.lastname.message}
              </p>
            )}
          </div>

        </div>

        {/* Email and mobile number */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4">

          <div className={fieldClass}>
            <label className={labelClass}>
              Email address
            </label>

            <input
              type="email"
              autoComplete="email"
              placeholder="Enter your email address"
              {...register("email", {
                required: "Email address field is required",
              })}
              className={inputClass}
            />

            {errors.email && (
              <p className={errorClass}>
                {errors.email.message}
              </p>
            )}
          </div>

          <div className={fieldClass}>
            <label className={labelClass}>
              Mobile number
            </label>

            <input
              type="tel"
              autoComplete="tel"
              placeholder="Enter your mobile number"
              {...register("mobile", {
                required: "Mobile number field is required",
              })}
              className={inputClass}
            />

            {errors.mobile && (
              <p className={errorClass}>
                {errors.mobile.message}
              </p>
            )}
          </div>

        </div>

        {/* Campus and programme */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4">

          <div className={fieldClass}>
            <label className={labelClass}>
              Preferred campus
            </label>

            <select
              {...register("campus", {
                required: "Please select a campus",
              })}
              className={inputClass}
            >
              <option value="">Choose a preferred campus</option>

              {campuses.map((campus) => (
                <option key={campus} value={campus}>
                  {campus}
                </option>
              ))}
            </select>

            {errors.campus && (
              <p className={errorClass}>
                {errors.campus.message}
              </p>
            )}
          </div>

          <div className={fieldClass}>
            <label className={labelClass}>
              Programme of interest
            </label>

            <select
              {...register("course", {
                required: "Please select a programme",
              })}
              className={inputClass}
            >
              <option value="">Select a programme</option>

              {courses.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </select>

            {errors.course && (
              <p className={errorClass}>
                {errors.course.message}
              </p>
            )}
          </div>

        </div>

        {/* Guidance */}
        <div className={fieldClass}>
          <label className={labelClass}>
            What would you like help with?
          </label>

          <select
            {...register("guidance", {
              required: "Please select the type of guidance you need",
            })}
            className={inputClass}
          >
            <option value="">Choose an enquiry type</option>

            {guidances.map((guidance) => (
              <option key={guidance} value={guidance}>
                {guidance}
              </option>
            ))}
          </select>

          {errors.guidance && (
            <p className={errorClass}>
              {errors.guidance.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div className={fieldClass}>
          <label className={labelClass}>
            Your message
          </label>

          <textarea
            {...register("messages", {
              required: "Please enter your message",
            })}
            placeholder="Tell us the skill you want to learn, your current experience, preferred location and schedule."
            rows={6}
            className={`${inputClass} resize-y leading-7`}
          />

          {errors.messages && (
            <p className={errorClass}>
              {errors.messages.message}
            </p>
          )}
        </div>

        {/* Submit button */}
        <div className="px-2 py-4">
          <button
            type="submit"
            disabled={loading}
            className={`w-full sm:w-auto sm:min-w-[280px] lg:w-[400px] min-h-12 px-5 py-3 flex justify-center items-center gap-3 rounded-lg text-white font-extrabold transition-colors ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-red-800 hover:bg-blue-700 cursor-pointer"
            }`}
          >
            {loading ? "Sending..." : "Send enquiry"}

            <IoMdArrowForward className="text-xl shrink-0" />
          </button>
        </div>

        {/* Privacy notice */}
        <div className="px-2 py-2">
          <p className="mb-2 font-semibold text-sm sm:text-base text-white/60 leading-6">
            By sending this information, you agree that NOGTECH may contact
            you about this enquiry.
          </p>
        </div>

      </form>
    </div>
  );
}
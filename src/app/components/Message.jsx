"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { IoMdArrowForward } from "react-icons/io";

export default function Message() {
  const campuses = [
    "Port Harcourt",
    "Abia State",
    "Imo State",
    "Online classes",
    "Not sure yet",
  ];

  const timelines = [
    "As soon as possible",
    "Within 1-3 months",
    "Within 3-6 months",
    "Planning for later",
  ];

  const courses = [
    "Full Stack Web Development",
    "UI/UX Design",
    "Python Programming",
    "AI Automation",
    "Data Analytics",
    "Digital Marketing",
  ];

  const [loading, setLoading] = useState(false);
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
        organisation: data.organisation,
        learners: data.learners,
        timeline: data.timeline,
        messages: data.messages,
        emailRole: "staff",
      };

      console.log("Payload:", payload);

      const res = await axios.post("/api/email", payload);

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

  // Shared responsive styling
  const inputClass =
    "block w-full min-w-0 rounded-md border-2 border-transparent bg-blue-950 px-3 py-3 font-bold text-white outline-none transition-colors focus:border-orange-800";

  const labelClass =
    "mb-2 block text-sm font-bold text-white sm:text-base";

  const fieldClass = "min-w-0 px-2 py-2";

  const errorClass = "mt-1 text-sm text-red-400";

  return (
    <div className="w-full min-w-0">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full space-y-2"
      >
        {/* First name and last name */}
        <div className="grid grid-cols-1 gap-2 sm:gap-4 md:grid-cols-2">

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

        {/* Email and mobile */}
        <div className="grid grid-cols-1 gap-2 sm:gap-4 md:grid-cols-2">

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

        {/* Organisation and number of learners */}
        <div className="grid grid-cols-1 gap-2 sm:gap-4 md:grid-cols-2">

          <div className={fieldClass}>
            <label className={labelClass}>
              Organisation name
            </label>

            <input
              type="text"
              autoComplete="organization"
              placeholder="Enter your organisation name"
              {...register("organisation", {
                required: "Organisation name is required",
              })}
              className={inputClass}
            />

            {errors.organisation && (
              <p className={errorClass}>
                {errors.organisation.message}
              </p>
            )}
          </div>

          <div className={fieldClass}>
            <label className={labelClass}>
              Number of learners
            </label>

            <input
              type="number"
              min="1"
              placeholder="e.g. 30"
              {...register("learners", {
                required: "Please enter the number of learners",
                valueAsNumber: true,
                min: {
                  value: 1,
                  message: "The number of learners must be at least 1",
                },
              })}
              className={inputClass}
            />

            {errors.learners && (
              <p className={errorClass}>
                {errors.learners.message}
              </p>
            )}
          </div>

        </div>

        {/* Campus and programme */}
        <div className="grid grid-cols-1 gap-2 sm:gap-4 md:grid-cols-2">

          <div className={fieldClass}>
            <label className={labelClass}>
              Preferred campus
            </label>

            <select
              {...register("campus", {
                required: "Please select a preferred campus",
              })}
              className={inputClass}
            >
              <option value="">
                Choose a preferred campus
              </option>

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
              <option value="">
                Select a programme
              </option>

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

        {/* Preferred timeline */}
        <div className={fieldClass}>
          <label className={labelClass}>
            Preferred timeline
          </label>

          <select
            {...register("timeline", {
              required: "Please select a preferred timeline",
            })}
            className={inputClass}
          >
            <option value="">
              Choose a preferred timeline
            </option>

            {timelines.map((timeline) => (
              <option key={timeline} value={timeline}>
                {timeline}
              </option>
            ))}
          </select>

          {errors.timeline && (
            <p className={errorClass}>
              {errors.timeline.message}
            </p>
          )}
        </div>

        {/* Training brief */}
        <div className={fieldClass}>
          <label className={labelClass}>
            Your training brief
          </label>

          <textarea
            {...register("messages", {
              required: "Please enter your training brief",
            })}
            placeholder="Tell us the skills your team needs, current capacity, preferred format, location and expected outcome."
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
            className={`flex min-h-12 w-full items-center justify-center gap-3 rounded-lg px-5 py-3 font-extrabold text-white transition-colors sm:w-auto sm:min-w-[280px] lg:w-[400px] ${
              loading
                ? "cursor-not-allowed bg-gray-400"
                : "cursor-pointer bg-red-800 hover:bg-blue-700"
            }`}
          >
            {loading ? "Sending..." : "Send enquiry"}

            <IoMdArrowForward className="shrink-0 text-xl" />
          </button>
        </div>

        {/* Privacy notice */}
        <div className="px-2 py-4">
          <p className="mb-2 text-sm font-semibold leading-6 text-white/50 sm:text-base">
            By sending this information, you agree that NOGTECH may contact
            you about this enquiry.
          </p>
        </div>

      </form>
    </div>
  );
}
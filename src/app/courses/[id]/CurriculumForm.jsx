"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { programmes } from "@/lib/programmes";
import Image from "next/image";
import Link from "next/link";
import { FaRegEnvelope } from "react-icons/fa6";
import React from "react";
export default function CurriculumForm({ courseId, courseName, courseTitle }) {
  // Track whether the form is being submitted.
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const selectedProgramme = programmes.find(
    (item) => String(item.id) === String(courseId),
  );
  // Initialise React Hook Form.
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // This function runs when the form is valid.
  const onSubmit = async (data) => {
    try {
      setLoading(true);
      setMessage("");
      setErrorMessage("");
      const payload = {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        mobile: data.mobile,
        questions: data.questions,
        // emailRole: "myself",
      };

      console.log("Payload:", payload);

      const res = await axios.post("/api/questions", payload);

      console.log("Status:", res.status);
      console.log("Response:", res.data);

      if (res.data.success || res.status === 200) {
        reset();
       router.refresh();
      }
    } catch (error) {
      console.error(error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="w-full h-auto py-8 sm:py-10 lg:py-12">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Back to course */}
          <div className="py-2">
            <Link
              href={`/courses/${courseId}`}
              className="inline-flex w-full items-center justify-center rounded-lg bg-blue-950 px-5 py-3 text-center font-bold text-white transition-colors hover:bg-blue-900 sm:w-auto"
            >
              ← Back to Course
            </Link>
          </div>

          {/* Programme guide heading */}
          <div className="space-y-3">
            <h1 className="text-lg font-bold text-red-800 sm:text-xl">
              Free programme guide
            </h1>

            <p className="w-full max-w-3xl text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
              Receive the <span className="text-red-800">{courseTitle}</span>{" "}
              curriculum
            </p>

            <p className="w-full max-w-3xl text-base leading-relaxed text-black/60 dark:text-white/70 sm:text-lg">
              Enter your email to receive the published syllabus or latest
              course overview, with the available learning details and
              admissions next steps.
            </p>
          </div>

          {/* Header icon */}
          <div className="flex h-12 w-12 sm:h-15 sm:w-15 items-center justify-center rounded-full bg-blue-950">
            <FaRegEnvelope size={26} className="text-white sm:hidden" />
            <FaRegEnvelope size={30} className="hidden text-white sm:block" />
          </div>

          {/* Programme image and form */}
          <div className="flex w-full flex-col items-stretch gap-6 lg:flex-row lg:items-start lg:gap-8">
            {/* Curriculum request form */}
            <div className="w-full min-w-0 rounded-lg border border-black/10 px-4 py-5 shadow-lg dark:border-white/10 sm:px-6 sm:py-6 lg:flex-1">
              <form
                action=""
                onSubmit={handleSubmit(onSubmit)}
                className="w-full space-y-5"
              >
                <p className="text-center text-sm leading-relaxed sm:text-base">
                  I am requesting the curriculum for this{" "}
                  <span className="font-bold text-blue-900 dark:text-blue-300">
                    {courseTitle}
                  </span>
                </p>

                {/* First name and last name */}
                <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="min-w-0">
                    <label htmlFor="firstname" className="block py-2 font-bold">
                      First name <span className="text-red-500">*</span>
                    </label>

                    <input
                      type="text"
                      id="firstname"
                      autoComplete="given-name"
                      required
                      {...register("firstname", {
                        required: "Your first name is required",
                      })}
                      className="w-full min-w-0 rounded-lg border border-black/30 bg-white px-3 py-2 text-gray-900 outline-none transition-all duration-200 ease-in-out placeholder:text-gray-400 hover:border-black/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500"
                    />

                    {errors.firstname && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.firstname.message}
                      </p>
                    )}
                  </div>

                  <div className="min-w-0">
                    <label htmlFor="lastname" className="block py-2 font-bold">
                      Last name <span className="text-red-500">*</span>
                    </label>

                    <input
                      type="text"
                      id="lastname"
                      autoComplete="family-name"
                      required
                      {...register("lastname", {
                        required: "Your last name is required",
                      })}
                      className="w-full min-w-0 rounded-lg border border-black/30 bg-white px-3 py-2 text-gray-900 outline-none transition-all duration-200 ease-in-out placeholder:text-gray-400 hover:border-black/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500"
                    />

                    {errors.lastname && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.lastname.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="min-w-0">
                  <label htmlFor="email" className="block py-2 font-bold">
                    Email <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="email"
                    id="email"
                    autoComplete="email"
                    required
                    placeholder="you@example.com"
                    {...register("email", {
                      required: "Your email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email address",
                      },
                    })}
                    className="w-full min-w-0 rounded-lg border border-black/30 bg-white px-3 py-2 text-gray-900 outline-none transition-all duration-200 ease-in-out placeholder:text-gray-400 hover:border-black/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500"
                  />

                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone number (optional) */}
                <div className="min-w-0">
                  <label htmlFor="phone" className="block py-2 font-bold">
                    Phone number
                  </label>

                  <span className="block pb-2 text-sm text-black/40 dark:text-white/50">
                    Optional
                  </span>

                  <input
                    type="tel"
                    id="phone"
                    autoComplete="tel"
                    placeholder="+234 800 000 0000"
                    className="w-full min-w-0 rounded-lg border border-black/30 bg-white px-3 py-2 text-gray-900 outline-none transition-all duration-200 ease-in-out placeholder:text-gray-400 hover:border-black/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500"
                  />
                </div>

                {/* Question about the selected course */}
                <div className="min-w-0">
                  <label htmlFor="question" className="mb-2 block font-medium">
                    Your question <span className="text-red-500">*</span>
                  </label>

                  <textarea
                    id="question"
                    rows={5}
                    placeholder="Ask us anything about this programme..."
                    {...register("question", {
                      required: "Please enter your question",
                      minLength: {
                        value: 10,
                        message:
                          "Your question must contain at least 10 characters",
                      },
                    })}
                    className="w-full min-w-0 resize-y rounded-lg border border-black/30 bg-white px-3 py-2 text-gray-900 outline-none transition-all duration-200 ease-in-out placeholder:text-gray-400 hover:border-black/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500"
                  />

                  {errors.question && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.question.message}
                    </p>
                  )}
                </div>

                {/* Success message */}
                {message && (
                  <p
                    role="status"
                    className="break-words text-green-700 dark:text-green-400"
                  >
                    {message}
                  </p>
                )}

                {/* Error message */}
                {errorMessage && (
                  <p role="alert" className="break-words text-red-600">
                    {errorMessage}
                  </p>
                )}

                {/* Submit button */}
                <div className="w-full py-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full sm:w-auto sm:min-w-[280px] lg:w-[400px] min-h-12 px-5 py-3 flex justify-center items-center gap-3 rounded-lg text-white font-extrabold transition-colors ${
                      loading
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-red-800 hover:bg-blue-700 cursor-pointer"
                    }`}
                  >
                    {loading ? "Submitting..." : "Email me the programme guide"}

                    <FaRegEnvelope size={20} />
                  </button>
                </div>
              </form>
            </div>

            {/* Programme details */}
            <div className="w-full min-w-0 space-y-4 lg:w-[40%] lg:shrink-0">
              {selectedProgramme ? (
                <>
                  <div className="w-full overflow-hidden rounded-lg">
                    <Image
                      src={selectedProgramme.image}
                      width={600}
                      height={400}
                      alt={selectedProgramme.name || courseName}
                      className="h-auto w-full rounded-lg object-cover"
                      sizes="(max-width: 1023px) 100vw, 40vw"
                    />
                  </div>

                  <p className="break-words font-bold text-black dark:text-white">
                    Programme Price:{" "}
                    <span className="text-lg text-red-800 sm:text-xl">
                      {selectedProgramme.price}
                    </span>
                  </p>
                </>
              ) : (
                <p className="text-red-600">
                  Programme details could not be found.
                </p>
              )}
            </div>
          </div>

          {/* Show the selected course */}
          <div className="w-full rounded-lg bg-white p-3 text-gray-900 shadow-sm sm:p-4">
            <p className="text-base font-bold text-blue-900 sm:text-lg">
              Programme selected: <span>{courseName}</span>
            </p>
          </div>
        </div>
      </div>

      {/*  */}
    </>
  );
}

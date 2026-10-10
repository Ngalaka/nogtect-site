"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { programmes } from "@/lib/programmes";
import Image from "next/image";
import Link from "next/link";
import { FaRegEnvelope } from "react-icons/fa6";
import React from "react";
export default function CurriculumForm({ courseId, courseName }) {
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
    setLoading(true);
    setMessage("");
    setErrorMessage("");

    try {
      // Send the form data and selected course to the API.
      //   const response = await axios.post("/api/curriculum", {
      //     courseId,
      //     courseName,
      //     name: data.name,
      //     email: data.email,
      //     question: data.question,
      //   });

      // Show a success message.
      setMessage(
        response.data.message || "Your enquiry was submitted successfully.",
      );

      // Clear the form after a successful submission.
      reset();
    } catch (error) {
      // Show a useful error if the request fails.
      setErrorMessage(
        error.response?.data?.message ||
          "Unable to submit your enquiry. Please try again.",
      );
    } finally {
      // Stop the loading state whether the request succeeds or fails.
      setLoading(false);
    }
  };

  return (
    <>
      <div className="w-full h-auto py-12">
        <div className="w-[90%] h-auto px-4 mx-auto space-y-2 ">
          <div className="w-15 h-15 rounded-full bg-blue-950 flex justify-center items-center">
            <span className="text-center">
              <FaRegEnvelope size={30} className="text-white" />
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="font-bold text-xl text-red-800">
              Free programme guide
            </h1>
            <p className="w-150 h-auto font-bold text-4xl">
              Receive the <span className="text-red-800">{courseName}</span>{" "}
              curriculum
            </p>
            <p className="w-150 h-auto text-xl text-black/60">
              Enter your email to receive the published syllabus or latest
              course overview, with the available learning details and
              admissions next steps.
            </p>
          </div>

           {/* Show the selected course */}
            <div className="rounded-lg bg-gray-100 p-4 text-gray-900">
              <p className="text-sm text-gray-600">Programme selected <span className="font-semibold">{courseName}</span></p>
            </div>

          <div className="w-full h-auto flex justify-between items-center gap-4">
            <div className="w-[50%] space-y-2 py-2">
              {selectedProgramme ? (
                <>
                  <Image
                    src={selectedProgramme.image}
                    width={300}
                    height={300}
                    alt={selectedProgramme.name || courseName}
                    className="w-full h-auto object-cover"
                  />

                  <p className="font-bold text-black">
                    Programme Price:{" "}
                    <span className="text-xl text-red-800">
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

           

            <div className="w-[50%] h-auto shadow-lg px-4 py-4 border border-black/10 rounded-lg">
              <form
                action=""
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
              >
                <p className="text-center text-xl text-red-800">
                  {" "}
                  I am requesting for Curriculum for this Programme
                </p>
                <div className="flex justify-stretch items-center gap-4">
                  <div className="">
                    <label htmlFor="firstname" className="block py-2 font-bold">
                      First name
                    </label>
                    <span className="block text-red-500">*</span>
                    <input
                      type="text"
                      id="firstname"
                      required
                      {...register("firstname", {
                        required: "Your first name is required",
                      })}
                      className="w-[240px] h-auto py-2 px-2 outline-none border border-black/30 rounded-lg  bg-white dark:bg-gray-900 dark:text-white text-gray-900 placeholder:text-gray-400  dark:placeholder:text-gray-500 transition-all
                                duration-200 ease-in-out hover:border-black/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    />
                    {errors.firstname && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.firstname.message}
                      </p>
                    )}
                  </div>

                  <div className="">
                    <label htmlFor="lastname" className="block py-2 font-bold">
                      Last name
                    </label>
                    <span className="block text-red-500">*</span>
                    <input
                      type="text"
                      id="lastname"
                      required
                      {...register("lastname", {
                        required: "Your last name is required",
                      })}
                      className="w-[240px] h-auto py-2 px-2 outline-none border border-black/30 rounded-lg  bg-white dark:bg-gray-900 dark:text-white text-gray-900 placeholder:text-gray-400  dark:placeholder:text-gray-500 transition-all
                                duration-200 ease-in-out hover:border-black/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    />
                    {errors.lastname && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.lastname.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="">
                  <label htmlFor="email" className="block py-2 font-bold">
                    Email
                  </label>
                  <span className="block text-red-500">*</span>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="you@example.com"
                    {...register("email", {
                      required: "Your email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email address",
                      },
                    })}
                    className="w-[500px] h-auto py-2 px-2 outline-none border border-black/30 rounded-lg  bg-white dark:bg-gray-900 dark:text-white text-gray-900 placeholder:text-gray-400  dark:placeholder:text-gray-500 transition-all
                                duration-200 ease-in-out hover:border-black/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="">
                  <label htmlFor="phone" className="block py-2 font-bold">
                    Email
                  </label>
                  <span className="block text-black/40">Optional</span>
                  <input
                    type="text"
                    name=""
                    id="phone"
                    required
                    placeholder="+234 800 000 0000"
                    className="w-[500px] h-auto py-2 px-2 outline-none border border-black/30 rounded-lg  bg-white dark:bg-gray-900 dark:text-white text-gray-900 placeholder:text-gray-400  dark:placeholder:text-gray-500 transition-all
                                duration-200 ease-in-out hover:border-black/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>

                {/* Question about the selected course */}
                <div>
                  <label htmlFor="question" className="mb-2 block font-medium">
                    Your question
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
                    className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
                  />

                  {errors.question && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.question.message}
                    </p>
                  )}
                </div>

                {/* Success message */}
                {message && (
                  <p role="status" className="text-green-700">
                    {message}
                  </p>
                )}

                {/* Error message */}
                {errorMessage && (
                  <p role="alert" className="text-red-600">
                    {errorMessage}
                  </p>
                )}

                <div className="py-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-100 h-auto px-4 py-2 mx-auto rounded-lg flex justify-center items-center gap-4 bg-red-800 text-white font-extrabold roubded-lg cursor-pointer"
                  >
                     <span>
                      <FaRegEnvelope size={20} />
                    </span>
                    {loading
                      ? "Submitting..."
                      : " Email me the programme guide"}
                   
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/*  */}
          <div className="py-4">
            <Link
              href={`/courses/${courseId}`}
              className="mt-6 inline-block w-50 rounded-lg bg-blue-950 py-2 text-center font-bold text-white hover:underline"
            >
              ← Back to Course
            </Link>
          </div>
        </div>
      </div>

      {/*  */}
    </>
  );
}

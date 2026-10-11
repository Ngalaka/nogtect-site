"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { MdWhatsapp } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { RiOrganizationChart } from "react-icons/ri";
import Email from "../components/Email";
import Message from "../components/Message";
import Campus from "../components/Campus";

export default function Page() {
  const [emailRole, setEmailRole] = useState("myselfRole");
  // function for Role

  const handleRoleChange = (role) => {
    setEmailRole(role);
  };

  const phoneNumber = "2349159533474";

  // // The message that appears automatically
  const message =
    "Hello NOGTECH, I would like to know more about your digital skills training programs.";

  // Generate the WhatsApp URL
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`;

  // Your NOGTECH email address

  const emailAddress = "nogtech.traininginstitute@gmail.com";

  // Default email subject
  const subject = "Enquiry About NOGTECH Training";

  // Default email message
  const body =
    "Hello NOGTECH, I would like to know more about your digital skills training programs.";

  // Create the Gmail compose URL
  const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    emailAddress,
  )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <>
      <div className="w-full min-w-0">

  {/* ENQUIRY SECTION */}
  <section className="w-full bg-blue-950 py-8 sm:py-10 lg:py-14">
    <div className="mx-auto flex w-[92%] max-w-7xl flex-col justify-between gap-8 lg:flex-row lg:items-start lg:gap-10">

      {/* Enquiry form and role selection */}
      <div className="min-w-0 w-full border border-white/30 bg-blue-900 py-5 sm:py-6 lg:w-[58%]">

        <h2 className="px-4 text-base font-extrabold text-white sm:px-6 sm:text-lg">
          Who is this training for?
        </h2>

        {/* Role selection cards */}
        <div className="mx-auto mt-5 grid w-[92%] grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4">

          {/* For an organisation */}
          <button
            type="button"
            onClick={() => handleRoleChange("staffRole")}
            aria-pressed={emailRole === "staffRole"}
            className={`min-w-0 h-full cursor-pointer border px-3 py-5 text-center transition-colors sm:px-4 ${
              emailRole === "staffRole"
                ? "border-2 border-orange-800 bg-blue-950"
                : "border border-white/40 bg-blue-950 hover:border-white/70"
            }`}
          >
            <span className="mb-3 flex justify-center text-3xl text-blue-200">
              <RiOrganizationChart />
            </span>

            <span className="block text-base font-extrabold text-white sm:text-lg">
              For an organisation
            </span>

            <span className="mt-2 block text-sm leading-6 text-white/60">
              Team or institutional training
            </span>
          </button>

          {/* For myself */}
          <button
            type="button"
            onClick={() => handleRoleChange("myselfRole")}
            aria-pressed={emailRole === "myselfRole"}
            className={`min-w-0 h-full cursor-pointer border px-3 py-5 text-center transition-colors sm:px-4 ${
              emailRole === "myselfRole"
                ? "border-2 border-orange-800 bg-blue-950"
                : "border border-white/40 bg-blue-950 hover:border-white/70"
            }`}
          >
            <span className="mb-3 flex justify-center text-3xl text-blue-200">
              <LuUser />
            </span>

            <span className="block text-base font-extrabold text-white sm:text-lg">
              For myself
            </span>

            <span className="mt-2 block text-sm leading-6 text-white/60">
              Course and admissions guidance
            </span>
          </button>

        </div>

        {/* Display the appropriate form */}
        <div className="mt-5 min-w-0 px-3 sm:px-5">
          {emailRole === "myselfRole" && <Email />}
          {emailRole === "staffRole" && <Message />}
        </div>

      </div>

      {/* Enquiry introduction */}
      <div className="min-w-0 px-1 sm:px-4 lg:w-[40%]">
        <h2 className="text-lg font-extrabold text-white sm:text-xl">
          Send an enquiry
        </h2>

        <p className="mt-4 text-3xl font-normal leading-tight text-white sm:text-4xl lg:text-5xl">
          Tell us what you want to achieve.
        </p>

        <p className="py-4 text-base leading-7 text-white/60 sm:text-lg">
          The more context you share, the easier it is for admissions to
          recommend the right pathway and next step.
        </p>

        <div className="my-3 h-[2px] w-full max-w-sm bg-white/70" />

        {/* What happens next */}
        <div className="py-3">
          <div className="flex items-center gap-3 py-3 sm:gap-4">
            <span className="shrink-0 text-2xl font-extrabold text-blue-200">
              <IoTimeOutline />
            </span>

            <h3 className="text-lg font-extrabold text-white sm:text-xl">
              What happens next
            </h3>
          </div>

          <p className="py-2 text-sm leading-7 text-white/70 sm:text-base">
            Your enquiry is recorded for the admissions team. A
            representative will follow up using the contact details you
            provide.
          </p>
        </div>
      </div>

    </div>
  </section>


  {/* CONTACT SECTION */}
  <section className="w-full bg-blue-900 py-8 sm:py-10 lg:py-14">
    <div className="mx-auto flex w-[92%] max-w-7xl flex-col justify-between gap-8 lg:flex-row lg:items-center lg:gap-12">

      {/* Contact details */}
      <div className="flex min-w-0 flex-col lg:w-[40%]">

        {/* WhatsApp */}
        <div className="flex items-center gap-4 border-t border-white/50 py-4 sm:gap-6">
          <span className="shrink-0 text-2xl font-extrabold text-blue-200 sm:text-3xl">
            <MdWhatsapp />
          </span>

          <div className="min-w-0">
            <Link
              href={whatsappURL}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <span className="block text-base font-bold text-white sm:text-lg">
                WhatsApp
              </span>

              <span className="mt-1 block text-sm font-normal text-white/60 transition-colors hover:text-white sm:text-base">
                Start a conversation
              </span>
            </Link>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center gap-4 border-y border-white/50 py-4 sm:gap-6">
          <span className="shrink-0 text-2xl font-extrabold text-blue-200 sm:text-3xl">
            <MdOutlineEmail />
          </span>

          <div className="min-w-0">
            <Link
              href={gmailURL}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <span className="block text-base font-bold text-white sm:text-lg">
                Email us
              </span>

              <span className="mt-1 block break-all text-sm font-normal leading-6 text-white/60 transition-colors hover:text-white sm:text-base">
                nogtech.traininginstitute@gmail.com
              </span>
            </Link>
          </div>
        </div>

        {/* Call */}
        <div className="flex items-center gap-4 border-b border-white/50 py-4 sm:gap-6">
          <span className="shrink-0 text-2xl font-extrabold text-blue-200 sm:text-3xl">
            <IoCallOutline />
          </span>

          <div className="min-w-0">
            <span className="block text-base font-bold text-white sm:text-lg">
              Call Enrollment
            </span>

            <a
              href="tel:07039306184"
              className="mt-1 block break-words text-sm font-normal text-white/60 transition-colors hover:text-white sm:text-base lg:text-lg"
            >
              07039306184
            </a>
          </div>
        </div>

      </div>

      {/* Contact introduction */}
      <div className="min-w-0 px-1 sm:px-4 lg:w-[55%]">
        <div className="border-l-4 border-red-800 bg-transparent">
          <h1 className="px-4 text-lg font-extrabold text-white sm:text-xl">
            Contact NOGTECH
          </h1>
        </div>

        <div className="w-full py-5 sm:py-7 lg:py-8">
          <h2 className="text-3xl font-normal leading-tight text-white sm:text-4xl lg:text-5xl">
            We are Here to Help You Move Forward.
          </h2>
        </div>

        <div className="py-2 sm:py-4">
          <p className="text-base leading-7 text-white/60 sm:text-lg lg:text-xl">
            Speak with admissions about programmes, fees, schedules,
            campus visits, or your application.
          </p>
        </div>
      </div>

    </div>
  </section>


  {/* CAMPUS SECTION */}
  <section className="w-full min-w-0">
    <Campus />
  </section>

</div>
    </>
  );
}

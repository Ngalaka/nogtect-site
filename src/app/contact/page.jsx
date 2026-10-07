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
      <div>
        <div className="w-full h-auto bg-blue-900 py-8">
          {/* contact section */}
          <div className="w-[90%] h-auto flex flex-row justify-between items-center gap-4 m-auto">
            <div className="w-[50%] h-auto px-4 ">
              <div className="border-l-4 border-red-800 bg-transparent">
                <h1 className="text-xl font-extrabold text-white px-4">
                  Contact Nogtect
                </h1>
              </div>

              <div className="w-full h-auto py-8 ">
                <h1 className="font-normal text-5xl text-white">
                  We are Here to Help You Move Forward.
                </h1>
              </div>

              <div className="py-4">
                <p className="text-white/50 text-xl ">
                  Speak with admissions about programmes, fees, schedules,
                  campus visits, or your application.
                </p>
              </div>
            </div>
            {/* contact details */}
            <div className="w-[30%] h-auto">
              {/* call */}
              <div className="flex justify-stretch items-center gap-8 border-y border-white/50 py-4">
                <span className="block font-extrabold text-blue-200 text-2xl">
                  <IoCallOutline />
                </span>
                <div>
                  <span className="block font-bold text-white text-xl">
                    Call Enrollment
                  </span>
                  <span className="block text-white/40 text-xl font-normal">
                    07039306184
                  </span>
                </div>
              </div>

              {/* email */}
              <div className="flex justify-stretch items-center gap-8 border-y border-white/50 py-4">
                <span className="block font-extrabold text-blue-200 text-2xl">
                  <MdOutlineEmail />
                </span>
                <div>
                  <Link
                    href={gmailURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="block font-bold text-white text-xl">
                      Email us
                    </span>
                    <span className="block text-white/40 text-xl font-normal">
                      nogtech.traininginstitute@gmail.com
                    </span>
                  </Link>
                </div>
              </div>

              {/* whatsapp */}
              <div className="flex justify-stretch items-center gap-8 border-y border-white/50 py-4">
                <span className="block font-extrabold text-blue-200 text-2xl">
                  <MdWhatsapp />
                </span>
                <div>
                  <Link
                    href={whatsappURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="block font-bold text-white text-xl">
                      WhatsApp
                    </span>
                    <span className="block text-white/40 text-xl font-normal">
                      Start a conversation
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* */}
        <div className="w-full h-auto bg-blue-950 py-4">
          <div className="w-[90%] h-auto flex flex-row justify-between items-center gap-4 m-auto">
            {/* email information */}
            <div className="w-[40%] bg-transparent">
              <h1 className="font-extrabold text-xl text-white ">
                Send an enquiry
              </h1>
              <p className="font-normal text-5xl text-white">
                Tell us what you want to achieve.
              </p>
              <p className="text-white/50 text-xl py-4">
                The more context you share, the easier it is for admissions to
                recommend the right pathway and next step.
              </p>
              <div className="w-[80%] h-[2px] bg-white"></div>

              {/* what happen next */}
              <div>
                <div className="flex justify-stretch items-center gap-4 py-4">
                  <span className="block font-extrabold text-blue-200 text-2xl">
                    <IoTimeOutline />
                  </span>
                  <p className="font-extrabold text-xl text-white ">
                    What happens next
                  </p>
                </div>
                <p className="text-white/70 text-sm py-2">
                  Your enquiry is recorded for the admissions team. A
                  representative will follow up using the contact details you
                  provide.
                </p>
              </div>
            </div>

            {/* email details */}
            <div className="w-[55%] h-auto bg-blue-900 py-4 border border-white/30 ">
              <h1 className="font-extrabold  text-white px-4 ">
                Who is this training for?
              </h1>

              {/* tag to navigate */}

              <div className="w-[90%] flex justify-between items-center gap-4 mx-auto">
                <div
                  onClick={() => handleRoleChange("myselfRole")}
                  className={`w-[50%] h-auto  py-2 cursor-pointer
                ${
                  emailRole === "myselfRole"
                    ? "bg-blue-950 text-white border-2 border-orange-800  "
                    : "bg-blue-950 text-white border border-white/40 "
                }`}
                >
                  <span className="  block w-[40] m-auto text-3xl text-blue-200 py-2">
                    <LuUser />
                  </span>
                  <p className="font-extrabold  text-white px-4 text-center">
                    For myself{" "}
                  </p>
                  <p className="font-normal  text-white/40 px-4 text-center ">
                    Course and admissions guidance {""}
                  </p>
                </div>

                <div
                  onClick={() => handleRoleChange("staffRole")}
                  className={`w-[50%] h-auto  py-2 cursor-pointer
                ${
                  emailRole === "staffRole"
                    ? "bg-blue-950 text-white border-2 border-orange-800  "
                    : "bg-blue-950 text-white border border-white/40 "
                }`}
                >
                  <span className="  block w-[40] m-auto text-3xl text-blue-200 py-2">
                    <RiOrganizationChart />
                  </span>
                  <p className="font-extrabold  text-white px-4 text-center">
                    For an organisation{" "}
                  </p>
                  <p className="font-normal  text-white/40 px-4 text-center ">
                    Team or institutional training{""}
                  </p>
                </div>
              </div>

              {/*  */}
              {/* using condition to chect the user role */}
              {emailRole === "myselfRole" && <Email />}
              {emailRole === "staffRole" && <Message/>}
        
            </div>
          </div>
        </div>

        <div>
            <Campus/>
        </div>
      </div>
    </>
  );
}

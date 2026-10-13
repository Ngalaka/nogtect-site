"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
export default function EmallMessage() {
  const [data, setData] = useState({ emailmessage: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmailmessage = async () => {
      try {
        setLoading(true);
        const res = await axios.get("/api/email");

        console.log("fetched data", res.data);
        setData(res.data);
      } catch (error) {
        console.error("Error fetching emailmessage:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEmailmessage();
  }, []);

  const filteredEmail = data?.emailmessage;
  return (
    <>
      <div className="bg-[#f7f2ec] h-auto p-2">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
          <h1 className="text-3xl text-black font-black">Email Receive</h1>
          <p className="text-gray-500">
            {filteredEmail.length} Email message available
          </p>
        </div>
      </div>

      {/* Responsive table */}
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full min-w-[1400px] border-collapse text-left text-sm">
          {/* Table headings */}
          <thead className="bg-gray-100  text-gray-700">
            <tr>
              <th className="border-b p-3 text-sm">S/N</th>

              <th className="border-b p-3">First Name</th>
              <th className="border-b p-3">Last Name</th>
              <th className="border-b p-3">Email</th>
              <th className="border-b p-3">Mobile</th>
              <th className="border-b p-3">Campus</th>
              <th className="border-b p-3">Course</th>
              <th className="border-b p-3">Organisation</th>
              <th className="border-b p-3">Learners</th>
              <th className="border-b p-3">Timeline</th>
              <th className="border-b p-3">Message</th>
              <th className="border-b p-3">Email Role</th>
              <th className="border-b p-3">Date Submitted</th>
            </tr>
          </thead>

          <tbody>
            {Array.isArray(filteredEmail) && 
            filteredEmail.length > 0 ? (
            filteredEmail.map((email, index) => (
              <tr key={email._id} className="hover:bg-gray-50">
                <td className="border-b p-3"> {index + 1} </td>
                <td className="border-b p-3"> {email.firstname} </td>
                <td className="border-b p-3"> {email.lastname} </td>
                <td className="border-b p-3"> {email.email} </td>
                <td className="border-b p-3"> {email.mobile} </td> 
                <td className="border-b p-3"> {email.campus} </td> 
                <td className="border-b p-3"> {email.course} </td> 
                <td className="border-b p-3"> {email.organisation || "N/A"} </td> 
                <td className="border-b p-3"> {email.learners} </td>
                <td className="border-b p-3"> {email.timeline} </td>
                <td className="border-b p-3"> {email.messages || "N/A"} </td> 
                <td className="border-b p-3"> {email.emailRole || "N/A"} </td>
                <td className="border-b p-3">
                {email.createdAt ? new Date( email.createdAt ).toLocaleString() : "N/A"}
                </td>
              </tr>
              )) 
            ) : (
              <tr> 
                <td colSpan={13} className="p-6 text-center text-gray-500" > 
                  No registration messages found.
                   </td> 
                   </tr>
           )}
          </tbody>
        </table>
      </div>
    </>
  );
}

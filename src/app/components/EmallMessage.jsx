"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
export default function EmallMessage() {
  const [data, setData] = useState({ emailmessage: [] });
  const [loading, setLoading] = useState(true);


const [deletingId, setDeletingId] = useState(null);
const [error, setError] = useState("");
const [success, setSuccess] = useState("");


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


  // delete 

  // Delete one email message
const handleDelete = async (id) => {
const confirmed = window.confirm(
"Are you sure you want to delete this email message?"
);

if (!confirmed) return;

try {
  setDeletingId(id);
  setError("");
  setSuccess("");

  // Send DELETE request to the API
 const res = await axios.delete(`/api/email/${id}`);

  // Remove the deleted message from the nested array
  setData((previousData) => ({
    ...previousData,
    emailmessage: Array.isArray(previousData.emailmessage)
      ? previousData.emailmessage.filter(
          (message) => message._id !== id
        )
      : [],
  }));

  setSuccess(
    res.data.message || "Email message deleted successfully."
  );
} catch (error) {
  console.error(
    "Delete error:",
    error.response?.data || error.message
  );

  setError(
    error.response?.data?.message ||
      "Unable to delete this email message."
  );
} finally {
  setDeletingId(null);
}

};

if (loading) {
return <p className="p-4">Loading email messages...</p>;
}


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
        <div className="">
                {loading ? (
                    <p className="text-center text-black">Loading Myself Email Message...</p>
                ) : filteredEmail.length === 0 ? (
                    <p className="text-center text-black mt-10">
                       No listed myself Email message
                    </p>
                ) : (
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
              <th className="border-b p-3">Courses</th>
              <th className="border-b p-3">Guidance</th>
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
                <td className="border-b p-3"> {email.guidance} </td>
                <td className="border-b p-3"> {email.messages || "N/A"} </td> 
                <td className="border-b p-3"> {email.emailRole || "N/A"} </td>
                <td className="border-b p-3">
                {email.createdAt ? new Date( email.createdAt ).toLocaleString() : "N/A"}
                </td>
                  <td className="border p-3">
                    <button
                      type="button"
                      onClick={() => handleDelete(email._id)}
                      disabled={deletingId === email._id}
                      aria-label={`Delete ${email.firstname} ${email.lastname}`}
                      title="Delete registration"
                      className="inline-flex items-center gap-2 rounded bg-red-600 px-3 py-2 text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <FaTrashAlt />

                      {deletingId === email._id
                        ? "Deleting..."
                        : "Delete"}
                    </button>
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
         )}
         </div>
    </>
  );
}

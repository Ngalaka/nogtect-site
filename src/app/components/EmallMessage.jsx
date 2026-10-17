"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";


export default function EmallMessage() {
const router = useRouter();
const [data, setData] = useState({ emailmessage: [] });
const [loading, setLoading] = useState(true);


const [deletingId, setDeletingId] = useState(null);
const [error, setError] = useState("");
const [success, setSuccess] = useState("");


  useEffect(() => {
    const fetchEmailmessage = async () => {
      try {
    setLoading(true);

    const response = await axios.get("/api/admin/email", {
      withCredentials: true,
    });

    setData({
      emailmessage: response.data.emailmessage ?? [],
    });
  } catch (error) {
    if (error.response?.status === 401) {
      router.replace("/admin/login");
      return;
    }

    console.error("Error fetching email messages:", error);
  } finally {
    setLoading(false);
  }
};
    fetchEmailmessage();
  }, []);
// array 
  const filteredEmail = data?.emailmessage;


  // delete 

  // Delete one email message

const handleDelete = async (id) => {
  if (!window.confirm("Are you sure you want to delete this record?")) {
    return;
  }

  try {
   await axios.delete(`/api/admin/email/${id}`, {
      withCredentials: true,
    });

    // Update the interface after successful deletion.
    setData((previous) => ({
      ...previous,
      emailmessage: previous.emailmessage.filter(
        (item) => item._id !== id
      ),
    }));


  } catch (error) {
     if (error.response?.status === 401) {
      router.replace("/admin/login");
      return;
    }

    console.error("Error deleting email:", error);
    alert(
      error.response?.data?.message ||
      "Failed to delete the email record."
    );

    
  }
};

if (loading) {
return <p className="p-4">Loading email messages...</p>;
}


  return (
    <>
      <div className="w-full h-auto p-2">
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
      <div className="">     
        <table className="w-full min-w-[1400px] border-collapse text-left text-sm">
          {/* Table headings */}
          <thead className=" w-full py-2  text-gray-700">
            <tr>
              <th className="px-2 text-center">S/N</th>
              <th className="px-2 text-center">First Name</th>
              <th className="px-2 text-center">Last Name</th>
              <th className="px-2 text-center">Email</th>
              <th className="px-2 text-center">Mobile</th>
              <th className="px-2 text-center">Campus</th>
              <th className="px-2 text-center">Courses</th>
              <th className="px-2 text-center">Guidance</th>
              <th className="px-2 text-center">Message</th>
              <th className="px-2 text-center">Email Role</th>
              <th className="px-2 text-center">Date Submitted</th>
            </tr>
          </thead>

          <tbody>
            {Array.isArray(filteredEmail) && 
            filteredEmail.length > 0 ? (
            filteredEmail.map((email, index) => (
              <tr key={email._id} className="hover:bg-gray-50">
                <td className=""> {index + 1} </td>
                <td className=""> {email.firstname} </td>
                <td className=""> {email.lastname} </td>
                <td className=""> {email.email} </td>
                <td className=""> {email.mobile} </td> 
                <td className=""> {email.campus} </td> 
                <td className=""> {email.course} </td>
                <td className=""> {email.guidance} </td>
                <td className=""> {email.messages || "N/A"} </td> 
                <td className=""> {email.emailRole || "N/A"} </td>
                <td className="">
                {email.createdAt ? new Date( email.createdAt ).toLocaleString() : "N/A"}
                </td>
                  <td className=" p-3">
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

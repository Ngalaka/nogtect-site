
"use client";
import { useState } from "react";
import axios from "axios";
import { FiSearch, FiRefreshCw } from "react-icons/fi";

export default function EmailSearch() {
  // Store the text entered by the admin
  const [searchTerm, setSearchTerm] = useState("");

  // Store the matching records returned by the API
  const [emailmessage, setEmailmessage] = useState([]);

  // Track the loading status
  const [loading, setLoading] = useState(false);

  // Store any error message
  const [error, setError] = useState("");

  // Run the search when the form is submitted
  const handleSearch = async (event) => {
    event.preventDefault();

    const query = searchTerm.trim();

    // Validate the search input
    if (!query) {
      setEmailmessage([]);
      setError("Please enter a name, email, course, or search term.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setEmailmessage([]);

      // Send the search request to the Next.js API
      const res = await axios.get("/api/admin/email/search", {
        params: { q: query },
      });

      // Save the matching records in React state
      setEmailmessage(res.data.emailmessage ?? []);
    } catch (error) {
      console.error("Search failed:", error);

      setError(
        error.response?.data?.message ||
          "Unable to search records. Please try again."
      );
    } finally {
      // Stop the loading indicator
      setLoading(false);
    }
  };

  // Clear the search and its results
  const handleReset = () => {
    setSearchTerm("");
    setEmailmessage([]);
    setError("");
    setLoading(false);
  };

  return (
    <section className="mx-auto w-full max-w-7xl p-4">
      <h1 className="mb-2 text-2xl font-bold">
        Search Email Messages
      </h1>

      <p className="mb-5 text-gray-600">
        Search registration and enquiry records from MongoDB.
      </p>

      {/* Search form */}
      <form
        onSubmit={handleSearch}
        className="mb-6 flex flex-col gap-3 sm:flex-row"
      >
        <input
          type="search"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Search name, email, course, campus..."
          className="min-w-0 flex-1 rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
        />

        <button
          type="submit"
          disabled={loading}
          className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <FiSearch />
          {loading ? "Searching..." : "Search"}
        </button>

        <button
          type="button"
          onClick={handleReset}
          disabled={loading}
          className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-5 py-3 hover:bg-gray-100 disabled:opacity-50"
        >
          <FiRefreshCw />
          Reset
        </button>
      </form>

      {/* Loading message */}
      {loading && (
        <p className="mb-4 text-blue-600">
          Searching records...
        </p>
      )}

      {/* Error message */}
      {error && (
        <p role="alert" className="mb-4 text-red-600">
          {error}
        </p>
      )}

      {/* Results table */}
      {emailmessage.length > 0 && (
        <>
          <p className="mb-3 text-sm text-gray-600">
            Found {emailmessage.length} matching record(s).
          </p>

          <div className="overflow-x-auto rounded-lg border">
            <table className="w-full min-w-[900px] border-collapse text-left text-sm">
              <thead className="bg-gray-100 text-gray-800">
                <tr>
                  <th className="border-b p-3">S/N</th>
                  <th className="border-b p-3">First Name</th>
                  <th className="border-b p-3">Last Name</th>
                  <th className="border-b p-3">Email</th>
                  <th className="border-b p-3">Mobile</th>
                  <th className="border-b p-3">Campus</th>
                  <th className="border-b p-3">Course</th>
                </tr>
              </thead>

              <tbody>
                {emailmessage.map((search, index) => (
                  <tr key={search._id} className="hover:bg-gray-50">
                    <td className="border-b p-3">
                      {index + 1}
                    </td>

                    <td className="border-b p-3">
                      {search.firstname || "-"}
                    </td>

                    <td className="border-b p-3">
                      {search.lastname || "-"}
                    </td>

                    <td className="border-b p-3">
                      {search.email || "-"}
                    </td>

                    <td className="border-b p-3">
                      {search.mobile || "-"}
                    </td>

                    <td className="border-b p-3">
                      {search.campus || "-"}
                    </td>

                    <td className="border-b p-3">
                      {search.course || "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {/* No matching records */}
      {!loading &&
        !error &&
        emailmessage.length === 0 &&
        searchTerm.trim() !== "" && (
          <p className="py-5 text-gray-600">
            No matching records found. Try another search term.
          </p>
        )}
    </section>
  );
}

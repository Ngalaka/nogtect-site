"use client";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";

export default function AdminDashboard() {
  const router = useRouter();

  // Records must always be an array.
  const [records, setRecords] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [adminEmail, setAdminEmail] = useState("");

  // Fetch records from the protected admin API.
  const fetchRecords = useCallback(
    async (keyword = "") => {
      try {
        setLoading(true);
        setError("");

        const res = await axios.get("/api/admin/email", {
          params: keyword.trim()
            ? { search: keyword.trim() }
            : {},
          withCredentials: true,
        });

        // Expected API response: { emailmessage: [...] }
        const emailRecords = res.data?.emailmessage;

        if (!Array.isArray(emailRecords)) {
          console.error(
            "Unexpected /api/admin/email response:",
            res.data
          );

          setRecords([]);
          setError(
            "The server returned an unexpected records format. Check the email API."
          );
          return;
        }

        setRecords(emailRecords);
      } catch (err) {
        console.error(
          "Error fetching admin records:",
          err.response?.data || err.message
        );

        if (err.response?.status === 401) {
          router.replace("/admin/login");
          return;
        }

        setError(
          err.response?.data?.message ||
            "Unable to load database records."
        );
      } finally {
        setLoading(false);
      }
    },
    [router]
  );

  // Verify the admin session before fetching records.
  useEffect(() => {
    let active = true;

    async function initialize() {
      try {
        const res = await axios.get("/api/admin/me", {
          withCredentials: true,
        });

        if (!active) return;

        setAdminEmail(res.data?.email || "");
        await fetchRecords();
      } catch (err) {
        if (!active) return;

        if (err.response?.status !== 401) {
          console.error(
            "Unable to verify admin session:",
            err.response?.data || err.message
          );
        }

        router.replace("/admin/login");
      }
    }

    initialize();

    return () => {
      active = false;
    };
  }, [fetchRecords, router]);

  // Search records.
  async function handleSearch(e) {
    e.preventDefault();
    await fetchRecords(search);
  }

  // Reset search and reload all records.
  function handleReset() {
    setSearch("");
    fetchRecords("");
  }

  // Delete a record.
  async function handleDelete(id) {
    const confirmed = window.confirm(
      "Are you sure you want to permanently delete this record?"
    );

    if (!confirmed) return;

    try {
      await axios.delete(`/api/admin/email/${id}`, {
        withCredentials: true,
      });

      setRecords((current) =>
        current.filter((record) => record._id !== id)
      );
    } catch (err) {
      console.error(
        "Error deleting record:",
        err.response?.data || err.message
      );

      if (err.response?.status === 401) {
        router.replace("/admin/login");
        return;
      }

      alert(
        err.response?.data?.message ||
          "Unable to delete the record."
      );
    }
  }

  // Edit a record using the existing PATCH endpoint.
  async function handleEdit(record) {
    const firstname = window.prompt(
      "Enter first name:",
      record.firstname ?? ""
    );

    if (firstname === null) return;

    const lastname = window.prompt(
      "Enter last name:",
      record.lastname ?? ""
    );

    if (lastname === null) return;

    const email = window.prompt(
      "Enter email:",
      record.email ?? ""
    );

    if (email === null) return;

    try {
      const res = await axios.patch(
        `/api/admin/email/${record._id}`,
        { firstname, lastname, email },
        { withCredentials: true }
      );

      // Support either common response property.
      const updatedRecord =
        res.data?.emailmessage ??
        res.data?.emailMessage ??
        res.data?.record;

      if (!updatedRecord || !updatedRecord._id) {
        console.error("Unexpected edit API response:", res.data);
        alert(
          "The server response did not contain the updated record. Check your PATCH API."
        );
        return;
      }

      setRecords((current) =>
        current.map((item) =>
          item._id === record._id ? updatedRecord : item
        )
      );
    } catch (err) {
      console.error(
        "Error updating record:",
        err.response?.data || err.message
      );

      if (err.response?.status === 401) {
        router.replace("/admin/login");
        return;
      }

      alert(
        err.response?.data?.message ||
          "Unable to update the record."
      );
    }
  }

  // Log out the administrator.
  async function handleLogout() {
    try {
      await axios.post(
        "/api/admin/logout",
        {},
        { withCredentials: true }
      );
    } catch (err) {
      console.error(
        "Logout request failed:",
        err.response?.data || err.message
      );
    } finally {
      router.replace("/admin/login");
      router.refresh();
    }
  }

  return (
    <main className="min-h-screen bg-gray-100 p-4 text-gray-900 md:p-8">
      {/* Dashboard navigation */}
      <section className="mb-6 grid gap-4 sm:grid-cols-2">
        <Link
          href="/admin/dashboard/searchemail"
          className="rounded-lg bg-white p-5 shadow transition hover:shadow-md"
        >
          <h2 className="text-lg font-bold text-blue-700">
            Search Email
          </h2>

          <p className="mt-2 text-sm text-gray-600">
            Search registration and enquiry records.
          </p>

          <span className="mt-4 inline-block font-medium">
            Open search →
          </span>
        </Link>

        <Link
          href="/admin/dashboard/emailmessage"
          className="rounded-lg bg-white p-5 shadow transition hover:shadow-md"
        >
          <h2 className="text-lg font-bold text-blue-700">
            Email Messages
          </h2>

          <p className="mt-2 text-sm text-gray-600">
            View and manage submitted enquiry messages.
          </p>

          <span className="mt-4 inline-block font-medium">
            Open messages →
          </span>
        </Link>
      </section>

      {/* Dashboard header */}
      <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold md:text-3xl">
            NOGTECH Admin Dashboard
          </h1>

          <p className="mt-2 text-sm text-gray-600">
            Administrator: {adminEmail || "Admin"}
          </p>
        </div>

        <button
          type="button"
          onClick={handleLogout}
          className="rounded-md bg-red-600 px-5 py-3 text-white hover:bg-red-700"
        >
          Logout
        </button>
      </header>

      {/* Dashboard summary */}
      <section className="mb-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg bg-white p-5 shadow">
          <p className="text-gray-500">Records displayed</p>

          <p className="mt-2 text-3xl font-bold">
            {records.length}
          </p>
        </div>

        <div className="rounded-lg bg-white p-5 shadow">
          <p className="text-gray-500">Database management</p>

          <p className="mt-2 font-semibold">
            View · Search · Edit · Delete
          </p>
        </div>
      </section>

      {/* Records table */}
      <section className="rounded-lg bg-white p-4 shadow md:p-6">
        <h2 className="mb-4 text-xl font-bold">
          Registration and enquiry records
        </h2>

        <form
          onSubmit={handleSearch}
          className="mb-5 flex flex-col gap-3 sm:flex-row"
        >
          <input
            type="search"
            placeholder="Search name, email, mobile, campus, course..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="min-w-0 flex-1 rounded-md border p-3"
          />

          <button
            type="submit"
            disabled={loading}
            className="rounded-md bg-blue-700 px-5 py-3 text-white disabled:opacity-50"
          >
            Search
          </button>

          <button
            type="button"
            onClick={handleReset}
            disabled={loading}
            className="rounded-md border px-5 py-3 disabled:opacity-50"
          >
            Reset
          </button>
        </form>

        {error && (
          <p
            role="alert"
            className="mb-4 rounded-md bg-red-50 p-3 text-red-700"
          >
            {error}
          </p>
        )}

        {loading ? (
          <p className="py-8 text-center">
            Loading records...
          </p>
        ) : records.length === 0 ? (
          <p className="py-8 text-center text-gray-500">
            No records found.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3">Name</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Mobile</th>
                  <th className="p-3">Campus</th>
                  <th className="p-3">Course</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>

              <tbody>
                {records.map((record) => (
                  <tr key={record._id} className="border-b">
                    <td className="p-3">
                      {record.firstname} {record.lastname}
                    </td>

                    <td className="p-3">{record.email}</td>
                    <td className="p-3">{record.mobile}</td>
                    <td className="p-3">{record.campus}</td>
                    <td className="p-3">{record.course}</td>

                    <td className="p-3">
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => handleEdit(record)}
                          className="rounded bg-blue-600 px-3 py-2 text-white hover:bg-blue-700"
                        >
                          Edit
                        </button>

                        <button
                          type="button"
                          onClick={() => handleDelete(record._id)}
                          className="rounded bg-red-600 px-3 py-2 text-white hover:bg-red-700"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  );
}

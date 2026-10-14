"use client";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function AdminDashboard() {
   const router = useRouter();

  const [records, setRecords] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [adminEmail, setAdminEmail] = useState("");

  const fetchRecords = useCallback(async (keyword = "") => {
    try {
      setLoading(true);
      setError("");

      const res = await axios.get("/api/admin/email", {
        params: keyword.trim()
          ? { search: keyword.trim() }
          : {},
      });

      setRecords(res.data.emailMessage ?? []);
    } catch (err) {
      if (err.response?.status === 401) {
        router.replace("/admin/login");
        return;
      }

      setError("Unable to load database records.");
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    let active = true;

    async function initialize() {
      try {
        const res = await axios.get("/api/admin/me");

        if (!active) return;

        setAdminEmail(res.data.email);
        await fetchRecords();
      } catch {
        if (active) router.replace("/admin/login");
      }
    }

    initialize();

    return () => {
      active = false;
    };
  }, [fetchRecords, router]);

  async function handleSearch(e) {
    e.preventDefault();
    await fetchRecords(search);
  }

  async function handleDelete(id) {
    const confirmed = window.confirm(
      "Are you sure you want to permanently delete this record?"
    );

    if (!confirmed) return;

    try {
      await axios.delete(`/api/admin/email/${id}`);

      setRecords((current) =>
        current.filter((record) => record._id !== id)
      );
    } catch (err) {
      if (err.response?.status === 401) {
        router.replace("/admin/login");
        return;
      }

      alert("Unable to delete the record.");
    }
  }

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
        { firstname, lastname, email }
      );

      setRecords((current) =>
        current.map((item) =>
          item._id === record._id
            ? res.data.emailMessage
            : item
        )
      );
    } catch (err) {
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

  async function handleLogout() {
    try {
      await axios.post("/api/admin/logout");
    } finally {
      router.replace("/admin/login");
      router.refresh();
    }
  }

  return (
    <>
         <main className="min-h-screen bg-gray-100 p-4 text-gray-900 md:p-8">
      <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold md:text-3xl">
            NOGTECH Admin Dashboard
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Administrator: {adminEmail}
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="rounded-md bg-red-600 px-5 py-3 text-white"
        >
          Logout
        </button>
      </header>

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
            onClick={() => {
              setSearch("");
              fetchRecords("");
            }}
            className="rounded-md border px-5 py-3"
          >
            Reset
          </button>
        </form>

        {error && (
          <p role="alert" className="mb-4 text-red-600">
            {error}
          </p>
        )}

        {loading ? (
          <p className="py-8 text-center">Loading records...</p>
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
                          onClick={() => handleEdit(record)}
                          className="rounded bg-blue-600 px-3 py-2 text-white"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => handleDelete(record._id)}
                          className="rounded bg-red-600 px-3 py-2 text-white"
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
    </>
  )
}

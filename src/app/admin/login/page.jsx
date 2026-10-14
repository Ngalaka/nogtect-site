"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import React from 'react'

export default function AdminLogin() {
      const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await axios.post("/api/admin/login", {
        email,
       password: password,
      });

      router.replace("/admin/dashboard");
      router.refresh();
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
         <main className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md space-y-5 rounded-xl bg-white p-8 shadow-lg"
      >
        <h1 className="text-2xl font-bold text-gray-900">
          NOGTECH Admin Login
        </h1>

        <p className="text-sm text-gray-600">
          Authorized administrators only.
        </p>

        <div>
          <label
            htmlFor="email"
            className="mb-1 block font-medium"
          >
            Administrator email
          </label>

          <input
            id="email"
            type="email"
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-md border p-3 text-gray-900"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="mb-1 block font-medium"
          >
            Password
          </label>

          <input
            id="password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full rounded-md border p-3 text-gray-900"
          />
        </div>

        {error && (
          <p role="alert" className="text-sm text-red-600">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-md bg-blue-700 p-3 font-semibold text-white disabled:opacity-50"
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </main>
    </>
  )
}

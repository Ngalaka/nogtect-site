"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function AdminLogin() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function handleLogin(formData) {
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "/api/admin/login",
        {
          email: formData.email.trim(),
          password: formData.password,
        },
        {
          withCredentials: true,
        }
      );

      if (response.data.success === true) {
        router.replace("/admin/dashboard");
        router.refresh();
      } else {
        setError(
          response.data.message || "Login failed. Please try again."
        );
      }
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
    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="w-full max-w-md space-y-5 rounded-xl bg-white p-8 shadow-lg"
      >
        <h1 className="text-2xl font-bold text-gray-900">
          NOGTECH Admin Login
        </h1>

        <p className="text-sm text-gray-600">
          Authorized administrators only.
        </p>

        {/* Administrator email */}
        <div>
          <label
            htmlFor="email"
            className="mb-1 block font-medium text-gray-900"
          >
            Administrator email
          </label>

          <input
            id="email"
            type="email"
            autoComplete="username"
            placeholder="Enter your administrator email"
            aria-invalid={!!errors.email}
            {...register("email", {
              required: "Administrator email is required.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address.",
              },
            })}
            className="w-full rounded-md border p-3 text-gray-900 outline-none focus:border-blue-700"
          />

          {errors.email && (
            <p className="mt-1 text-sm text-red-600">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Administrator password */}
        <div>
          <label
            htmlFor="password"
            className="mb-1 block font-medium text-gray-900"
          >
            Password
          </label>

          <input
            id="password"
            type="password"
            autoComplete="current-password"
            placeholder="Enter your password"
            aria-invalid={!!errors.password}
            {...register("password", {
              required: "Password is required.",
            })}
            className="w-full rounded-md border p-3 text-gray-900 outline-none focus:border-blue-700"
          />

          {errors.password && (
            <p className="mt-1 text-sm text-red-600">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Login API error */}
        {error && (
          <p
            role="alert"
            className="rounded-md bg-red-50 p-3 text-sm text-red-600"
          >
            {error}
          </p>
        )}

        {/* Submit button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-md bg-blue-700 p-3 font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </main>
  );
}
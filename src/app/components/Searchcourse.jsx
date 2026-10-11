"use client";

import React, { useState } from "react";
import { programmes } from "@/lib/programmes";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { CiClock1 } from "react-icons/ci";
import { IoArrowForward } from "react-icons/io5";

export default function Searchcourse() {
  const [filteredProgrammes, setFilteredProgrammes] = useState(programmes);

  const pathways = [
    "Business & Productivity",
    "Cloud & DevOps",
    "Cybersecurity",
    "Creative & Media",
    "Data Science & Analytics",
    "Digital Marketing",
    "Engineering & CAD",
    "Networking & Hardware",
    "Project Management",
    "Software Development",
    "UI/UX & Product Design",
  ];

  const experiences = [
    "Beginner-friendly",
    "Some experience",
    "Experienced learner",
  ];

  const formats = [
    "Physical class",
    "Online Virtual",
    "Physical & Online virtual",
  ];

  const {
    register,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      search: "",
      pathway: "",
      experience: "",
      format: "",
    },
  });

  // Watch the search form values.
  const searchTerm = watch("search");
  const selectedPathway = watch("pathway");
  const selectedExperience = watch("experience");
  const selectedFormat = watch("format");

  // Filter programmes when a search field changes.
  React.useEffect(() => {
    const filtered = programmes.filter((programme) => {
      const matchesSearch =
        !searchTerm ||
        `${programme.name} ${programme.program} ${programme.description}`
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchesPathway =
        !selectedPathway || programme.name === selectedPathway;

      const matchesExperience =
        !selectedExperience ||
        (selectedExperience === "Beginner-friendly"
          ? true
          : selectedExperience === "Some experience"
            ? true
            : true);

      const matchesFormat =
        !selectedFormat ||
        programme.format
          ?.toLowerCase()
          .replace(/\s+/g, " ")
          .includes(selectedFormat.toLowerCase().replace(/\s+/g, " "));

      return (
        matchesSearch &&
        matchesPathway &&
        matchesExperience &&
        matchesFormat
      );
    });

    setFilteredProgrammes(filtered);
  }, [searchTerm, selectedPathway, selectedExperience, selectedFormat]);

  const inputClass =
    "w-full min-w-0 rounded-lg border-2 border-white/20 bg-blue-950 px-3 py-3 text-sm font-semibold text-white outline-none transition-colors placeholder:text-white/50 focus:border-blue-400 sm:px-4 sm:py-4 sm:text-base";

  return (
    <div className="h-auto w-full" id="search-course">

      {/* Search and filter section */}
      <div className="h-auto w-full bg-blue-800 py-5 sm:py-7">
        <form
          onSubmit={(event) => event.preventDefault()}
          className="mx-auto w-[92%] max-w-7xl"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">

            {/* Search input */}
            <div className="min-w-0">
              <input
                type="search"
                {...register("search")}
                placeholder="Search programmes..."
                aria-label="Search programmes"
                className={inputClass}
              />

              {errors.search && (
                <p className="mt-1 text-sm text-red-300">
                  {errors.search.message}
                </p>
              )}
            </div>

            {/* Pathway filter */}
            <div className="min-w-0">
              <select
                id="pathway"
                {...register("pathway")}
                className={inputClass}
                aria-label="Filter by pathway"
              >
                <option value="">All pathways</option>

                {pathways.map((path) => (
                  <option key={path} value={path} className="text-black">
                    {path}
                  </option>
                ))}
              </select>

              {errors.pathway && (
                <p className="mt-1 text-sm text-red-300">
                  {errors.pathway.message}
                </p>
              )}
            </div>

            {/* Experience filter */}
            <div className="min-w-0">
              <select
                id="experience"
                {...register("experience")}
                className={inputClass}
                aria-label="Filter by experience level"
              >
                <option value="">All experience levels</option>

                {experiences.map((experience) => (
                  <option
                    key={experience}
                    value={experience}
                    className="text-black"
                  >
                    {experience}
                  </option>
                ))}
              </select>

              {errors.experience && (
                <p className="mt-1 text-sm text-red-300">
                  {errors.experience.message}
                </p>
              )}
            </div>

            {/* Class format filter */}
            <div className="min-w-0">
              <select
                id="format"
                {...register("format")}
                className={inputClass}
                aria-label="Filter by class format"
              >
                <option value="">All class formats</option>

                {formats.map((format) => (
                  <option
                    key={format}
                    value={format}
                    className="text-black"
                  >
                    {format}
                  </option>
                ))}
              </select>

              {errors.format && (
                <p className="mt-1 text-sm text-red-300">
                  {errors.format.message}
                </p>
              )}
            </div>

          </div>
        </form>
      </div>

      {/* Programme cards section */}
      <div className="h-auto w-full bg-white py-8 sm:py-10 lg:py-12">
        <div className="mx-auto h-auto w-[92%] max-w-7xl">

          {/* Results heading */}
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="px-1 text-xl font-semibold text-blue-950 sm:text-2xl">
              Programmes found
            </h2>

            <p className="px-1 text-sm text-gray-500">
              {filteredProgrammes.length}{" "}
              {filteredProgrammes.length === 1 ? "programme" : "programmes"}
            </p>
          </div>

          {/* Responsive grid */}
          {filteredProgrammes.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 py-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 sm:gap-5 lg:gap-7">

              {filteredProgrammes.map((programme) => (
                <div
                  key={programme.id}
                  className="flex h-full min-w-0 flex-col overflow-hidden rounded-xl bg-white shadow-md transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Programme image */}
                  <div className="relative h-[200px] w-full sm:h-[210px] lg:h-[220px]">
                    <Image
                      src={programme.image}
                      alt={programme.program || programme.name}
                      fill
                      sizes="(max-width: 639px) 92vw, (max-width: 1023px) 45vw, 30vw"
                      className="object-cover"
                    />
                  </div>

                  {/* Programme details */}
                  <div className="flex flex-1 flex-col p-4 sm:p-5">

                    <div className="mb-2">
                      <span className="text-sm font-bold text-blue-900 sm:text-base">
                        {programme.name}
                      </span>
                    </div>

                    <h3 className="mb-3 text-lg font-semibold leading-snug text-gray-900 sm:text-xl">
                      {programme.program}
                    </h3>

                    <p className="mb-4 flex-1 text-sm leading-6 text-gray-600 sm:text-base">
                      {programme.description}
                    </p>

                    {/* Duration and class format */}
                    <div className="flex flex-col gap-3 border-t border-gray-100 py-4 sm:flex-row sm:items-start sm:justify-between">

                      <div className="flex min-w-0 items-center gap-2 text-gray-700">
                        <span className="shrink-0 text-xl text-blue-900">
                          {programme.icon || <CiClock1 />}
                        </span>

                        <span className="text-sm font-medium">
                          {programme.duration}
                        </span>
                      </div>

                      <span className="text-sm leading-5 text-gray-600 sm:max-w-[55%] sm:text-right">
                        {programme.format}
                      </span>
                    </div>

                    {/* Price and programme link */}
                    <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 pt-4">

                      <span className="text-xl font-extrabold text-gray-900 sm:text-2xl">
                        {programme.price}
                      </span>

                      <Link
                        href={`/courses/${programme.id}`}
                        className="inline-flex items-center gap-2 rounded-md font-bold text-blue-900 transition-colors hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        <span className="text-sm">
                          {programme.view || "View programme"}
                        </span>

                        <span className="text-lg">
                          {programme.icon2 || <IoArrowForward />}
                        </span>
                      </Link>

                    </div>
                  </div>
                </div>
              ))}

            </div>
          ) : (
            <div className="py-16 text-center">
              <h3 className="text-xl font-semibold text-gray-800">
                No programmes found
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Try changing your search term or selecting different filters.
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
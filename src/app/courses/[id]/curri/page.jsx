import React from "react";
import { programmes } from "@/lib/programmes";
import CurriculumForm from "../CurriculumForm";
import { notFound } from "next/navigation";
export default async function CurriculumPage({ params }) {
  const { id } = await params;

  const programme = programmes.find((item) => String(item.id) === String(id));

  if (!programme) {
    notFound();
  }
  return (
    <>
      <div className="mx-auto w-full max-w-5xl min-w-0 px-3 sm:px-5 lg:px-6">
        <div className="w-full min-w-0 py-4 sm:py-6 lg:py-8">
          <CurriculumForm
            courseTitle={programme.program}
            courseName={programme.name}
            courseId={programme.id}
          />
        </div>
      </div>
    </>
  );
}

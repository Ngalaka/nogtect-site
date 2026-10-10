import React from 'react'
import { programmes } from "@/lib/programmes";
import CurriculumForm from "../CurriculumForm";
import { notFound } from "next/navigation";
export default  async function CurriculumPage({ params }) {
     const { id } = await params;

  const programme = programmes.find(
    (item) => String(item.id) === String(id)
  );

  if (!programme) {
    notFound();
  }
  return (
    <>
        <div>
     <CurriculumForm
      courseId={programme.id}
      courseName={programme.name}
    />
        </div>
    </>
  )
}

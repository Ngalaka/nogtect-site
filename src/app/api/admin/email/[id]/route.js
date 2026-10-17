import { Response } from "next/server";
import mongoose from "mongoose";
import connectToDb from "@/lib/connection";
import Email from "@/app/models/emailModel";
import { requireAdmin } from "@/lib/admin-auth";

export async function DELETE(req, { params }) {
  try {
    // 1. Verify the administrator's session.
    const admin = await requireAdmin();

    if (!admin) {
      return Response.json(
        {
          success: false,
          message: "Unauthorized. Please log in.",
        },
        { status: 401 }
      );
    }

    // 2. Read and validate the record ID.
    const { id } = await params;

    if (!mongoose.isValidObjectId(id)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email record ID.",
        },
        { status: 400 }
      );
    }

    // 3. Connect to MongoDB.
    await connectToDb();

    // 4. Delete only the record matching this ID.
    const deletedEmail = await Email.findByIdAndDelete(id);

    // 5. Handle a record that does not exist.
    if (!deletedEmail) {
      return Response.json(
        {
          success: false,
          message: "Email record not found.",
        },
        { status: 404 }
      );
    }

    // 6. Confirm successful deletion.
    return Response.json({
      success: true,
      message: "Email record deleted successfully.",
      id: deletedEmail._id.toString(),
    });
  } catch (error) {
    console.error("DELETE /api/admin/email/[id] error:", error);

    return Response.json(
      {
        success: false,
        message: "Unable to delete the email record.",
      },
      { status: 500 }
    );
  }
}

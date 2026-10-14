import Email from "@/app/models/emailModel";
import connectToDb from "@/lib/connection";
import mongoose from "mongoose";
export async function DELETE(req, { params }) {
  try {

     const admin = await requireAdmin();

    if (!admin) {
      return Response.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }
    // 1. Connect to MongoDB
     await connectToDb();

    // 2. Get the ID from the dynamic route
    const { id } = await params;

    // 3. Validate the MongoDB ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return Response.json({ message: "Invalid record ID" },{ status: 400 });
    }

    // 4. Find and delete the selected record
    const emailmessage = await  Email.findByIdAndDelete(id);

    // 5. Check whether the record existed
    if (!emailmessage) {
      return Response.json({ message: "Record not found" },
        { status: 404 }
      );
    }

    // 6. Send a success response
    return Response.json({message: "Record deleted successfully",emailmessage,},{ status: 200 }
    );
  } catch (error) {
    // 7. Handle unexpected errors
    console.error("Delete API error:", error);

    return Response.json({ message: "Failed to delete record" },{ status: 500 });
  }
}

import Email from "@/app/models/emailModel";
import connectToDb from "@/lib/connection";
import mongoose from "mongoose";
export async function DELETE(req, { params }) {
  try {
    // 2. Connect to MongoDB.
    await connectToDb();

    // 3. Get the ID from the dynamic route.
    const { id } = await params;

    // 4. Validate the MongoDB document ID.
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return Response.json(
        { message: "Invalid record ID" },
        { status: 400 }
      );
    }

    // 5. Delete the selected email record.
    const deletedMessage = await Email.findByIdAndDelete(id);

    // 6. Check whether the record existed.
    if (!deletedMessage) {
      return Response.json(
        { message: "Record not found" },
        { status: 404 }
      );
    }

    // 7. Return the successful result.
    return Response.json(
      {
        message: "Email message deleted successfully.",
        emailmessage: deletedMessage,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Delete API error:", error);

    return Response.json(
      { message: "Failed to delete record" },
      { status: 500 }
    );
  }
}

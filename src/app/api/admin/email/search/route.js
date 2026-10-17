
import connectToDb from "@/lib/connection";
import Email from "@/app/models/emailModel";
import { requireAdmin } from "@/lib/requireAdmin";

// GET: Search email records in MongoDB
export async function GET(req) {
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

    // 2. Read the search term from the URL
    const { searchParams } = new URL(req.url);
    const searchTerm = searchParams.get("q")?.trim();

    // 3. Check whether the admin entered a search term
    if (!searchTerm) {
      return Response.json({ message: "Please enter a search term." },{ status: 400 });
    }

    // 4. Escape special regex characters
    const safeSearchTerm = searchTerm.replace(
      /[.*+?^${}()|[\]\\]/g,
      "\\$&"
    );

    // 5. Create the search condition
    const searchCondition = {
      $or: [
        { firstname: { $regex: safeSearchTerm, $options: "i" } },
        { lastname: { $regex: safeSearchTerm, $options: "i" } },
        { email: { $regex: safeSearchTerm, $options: "i" } },
        { mobile: { $regex: safeSearchTerm, $options: "i" } },
        { campus: { $regex: safeSearchTerm, $options: "i" } },
        { course: { $regex: safeSearchTerm, $options: "i" } },
        { organisation: { $regex: safeSearchTerm, $options: "i" } },
      ],
    };

    // 6. Search MongoDB using Mongoose
    const emailmessage = await Email.find(searchCondition)
      .sort({ createdAt: -1 })
      .limit(50)
      .lean();

    // 7. Return the matching records
    return Response.json({success: true, count: emailmessage.length, emailmessage,},{ status: 200 });
  } catch (error) {
    console.error("Email search error:", error);

    // 8. Handle server errors
    return Response.json({ message: "Failed to search email records." },{ status: 500 });
  }
} 
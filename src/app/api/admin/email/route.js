
import connectToDb from "@/lib/connection";
import Email from "@/app/models/emailModel";
import { requireAdmin } from "@/lib/admin-auth";



export const POST = async (req) => {
  try {

    // Get data from the request body
    const {
      firstname,
      lastname,
      email,
      mobile,
      campus,
      course,
      guidance,
      organisation,
      learners,
      timeline,
      messages,
       emailRole,
    } = await req.json();

    console.log(firstname, lastname, email, mobile, campus, course, guidance,  organisation, learners, timeline, messages,  emailRole);

    // Validate required fields
    if (!firstname || !lastname || !email || !mobile || !campus || !course ||  !messages) {
      return Response.json(
        {
          error:
            "Missing required fields: firstname, lastname, email, or mobile or course, campus, guidance,  organisation, learners, timeline, messages",
        },
        { status: 400 }
      );
    }

    
    // Connect to MongoDB
    await connectToDb();

    // Create new email record
    const newEmail = await Email.create({
      firstname,
      lastname,
      email,
      mobile,
      campus,
      course,
      guidance,
      organisation,
      learners,
      timeline,
      messages,
      emailRole:  emailRole || "myself",
    });

    // Check if creation failed
    if (!newEmail) {
      return Response.json(
        { error: "Failed to create email" },
        { status: 500 }
      );
    }

    // Successful response
    return Response.json(
      {
        message: "Email sent successfully",
        data: newEmail,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error during email sending:", error);

    return Response.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};




// Get request

export const GET = async (request) => {
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

// 2. Connect to MongoDB only after authentication.
    await connectToDb();

    // 3. Read the optional search keyword.
    const { searchParams } = new URL(request.url);
    const keyword = searchParams.get("search")?.trim();

    // 4. Build the database query.
    const query = {};

    if (keyword) {
      const escapedKeyword = keyword.replace(
        /[.*+?^${}()|[\]\\]/g,
        "\\$&"
      );

      const searchRegex = new RegExp(escapedKeyword, "i");

      query.$or = [
        { firstname: searchRegex },
        { lastname: searchRegex },
        { email: searchRegex },
        { course: searchRegex },
        { campus: searchRegex },
      ];
    }

    // 5. Fetch the matching records.
    const emailmessage = await Email.find(query)
      .sort({ createdAt: -1 })
      .lean();

    // 6. Return the records to the authorized client.
    return Response.json({
      success: true,
      emailmessage,
    });
  } catch (error) {
    console.error("GET /api/admin/email error:", error);

    return Response.json(
      {
        success: false,
        message: "Unable to fetch email messages.",
      },
      { status: 500 }
    );
  }
}
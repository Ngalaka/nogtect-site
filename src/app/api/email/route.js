import Email from "@/app/models/emailModel";
import { requireAdmin } from "@/lib/admin-auth";
import connectToDb from "@/lib/connection";

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

    // Check if email already exists
    // const existingEmail = await Email.findOne({ email });

    // if (existingEmail) {
    //   return Response.json(
    //     { error: "Email already exists" },
    //     { status: 400 }
    //   );
    // }

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

export const GET = async () => {
  try {
    // Step 1: Verify that the requester is an admin
    const admin = await requireAdmin();

    if (!admin) {
      return Response.json(
        { message: "Unauthorized. Admin login required." },
        { status: 401 }
      ); 
    }

    // Step 2: Connect to MongoDB
    await connectToDb();

    // Step 3: Fetch email records, newest first
    const emailmessage = await Email.find().sort({
      createdAt: -1,
    });

    // Step 4: Return the records
    return Response.json(
      { emailmessage },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching email:", error);

    return Response.json(
      { message: "Failed to fetch email." },
      { status: 500 }
    );
  }
};
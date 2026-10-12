import Email from "@/app/models/emailModel";
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






// GET request handler to fetch all properties from the database
export const GET = async (req, res) => {


    try {
        await connectToDb();

        // fetch all properties with status "approved", 
        // populate the listedBy field with the user's first name and 
        // email, and sort by creation date in descending order
        const emailMessage = await Email.find()
            .sort({ createdAt: -1 })
        return Response.json({ emailMessage }, { status: 200 });
    } 

    catch (error) {
        console.error("Error fetching email:", error);
        return Response.json({ message: "Failed to fetch properties" }, { status: 500 });
     }
}
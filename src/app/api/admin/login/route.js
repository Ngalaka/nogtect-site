
import bcrypt from "bcryptjs";
import { createAdminSession } from "@/lib/admin-auth";

export async function POST(req) {
  try {
    // 1. Read the submitted login details.
    const body = await req.json();
    const { email, password } = body;

    // 2. Validate the input.
    if (
      typeof email !== "string" ||
      typeof password !== "string" ||
      email.trim().length === 0 ||
      password.length === 0 ||
      email.length > 254 ||
      password.length > 200
    ) {
      return Response.json(
        {
          success: false,
          message: "Invalid credentials",
        },
        { status: 400 }
      );
    }

    // 3. Load the administrator credentials from .env.local.
    const adminEmail = process.env.ADMIN_EMAIL;
    const passwordHash = process.env.ADMIN_PASSWORD_HASH;

    // 4. Confirm that the environment variables exist.
    if (!adminEmail || !passwordHash) {
      console.error(
        "Admin login environment variables are missing."
      );

      return Response.json(
        {
          success: false,
          message: "Admin login is not configured",
        },
        { status: 500 }
      );
    }

    // 5. Compare the submitted email with the configured email.
    const emailMatches =
      email.trim().toLowerCase() ===
      adminEmail.trim().toLowerCase();

    // 6. Compare the submitted password with its bcrypt hash.
    const passwordMatches = await bcrypt.compare(
      password,
      passwordHash
    );

    // 7. Reject incorrect credentials.
    if (!emailMatches || !passwordMatches) {
      return Response.json(
        {
          success: false,
          message: "Invalid email or password",
        },
        { status: 401 }
      );
    }

    // 8. Create the session only after successful validation.
    await createAdminSession();

    // 9. Return the success response.
    return Response.json({
      success: true,
      message: "Login successful",
    });
  } catch (error) {
    console.error("Admin login error:", error);

    return Response.json(
      {
        success: false,
        message: "Unable to process login",
      },
      { status: 500 }
    );
  }
}

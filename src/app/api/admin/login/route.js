
import bcrypt from "bcryptjs";
import { createAdminSession } from "@/lib/admin-auth";

export async function POST(req) {
  try {
    // 1. Read the login details from Postman or the frontend
    const body = await req.json();
    const { email, password } = body;

    // 2. Validate the submitted values
    if (
      typeof email !== "string" ||
      typeof password !== "string" ||
      email.trim().length === 0 ||
      password.length === 0 ||
      email.length > 254 ||
      password.length > 200
    ) {
      return Response.json(
        { message: "Invalid credentials" },
        { status: 400 }
      );
    }

    // 3. Read administrator credentials from .env.local
  const adminEmail = process.env.ADMIN_EMAIL;
const passwordHash = process.env.ADMIN_PASSWORD_HASH;

console.log("Email loaded:", Boolean(process.env.ADMIN_EMAIL));
console.log("Hash loaded:", Boolean(process.env.ADMIN_PASSWORD_HASH));
console.log("Hash length:", process.env.ADMIN_PASSWORD_HASH?.length ?? 0);

    // 4. Confirm the environment variables are configured
    console.log(
      "Admin email configured:",
      Boolean(adminEmail)
    );

    console.log(
      "Password hash configured:",
      Boolean(passwordHash)
    );

    if (!adminEmail || !passwordHash) {
      console.error("Admin login environment variables are missing.");

      return Response.json(
        { message: "Admin login is not configured" },
        { status: 500 }
      );
    }

    // 5. Compare the submitted email with the configured email
    const emailMatches =
      email.trim().toLowerCase() ===
      adminEmail.trim().toLowerCase();

    // 6. Compare the submitted password with the bcrypt hash
    const passwordMatches = await bcrypt.compare(
      password,
      passwordHash
    );

    // 7. Log comparison results without exposing credentials
    console.log("Email matches:", emailMatches);
    console.log("Password matches:", passwordMatches);

    // 8. Reject incorrect credentials
    if (!emailMatches || !passwordMatches) {
      return Response.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    // 9. Create the administrator session
    await createAdminSession();

    // 10. Return a successful login response
    return Response.json({
      success: true,
      message: "Login successful",
    });
  } catch (error) {
    // Log server-side errors for debugging
    console.error("Admin login error:", error);

    return Response.json(
      { message: "Unable to process login" },
      { status: 500 }
    );
  }
}

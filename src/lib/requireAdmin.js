
import "server-only";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";

const COOKIE_NAME = "admin_session";

export async function requireAdmin() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)?.value;

    if (!token) {
      return null;
    }

    const secret = process.env.ADMIN_SESSION_SECRET;

    if (!secret) {
      throw new Error("ADMIN_SESSION_SECRET is missing");
    }

    const secretKey = new TextEncoder().encode(secret);

    const { payload } = await jwtVerify(token, secretKey, {
      algorithms: ["HS256"],
    });

    if (
      payload.role !== "admin" ||
      typeof payload.sub !== "string" ||
      !payload.sub
    ) {
      return null;
    }

    return {
      id: payload.sub,
      email:
        typeof payload.email === "string" ? payload.email : "",
      role: payload.role,
    };
  } catch (error) {
    if (
      error instanceof Error &&
      error.message === "ADMIN_SESSION_SECRET is missing"
    ) {
      throw error;
    }

    return null;
  }
}

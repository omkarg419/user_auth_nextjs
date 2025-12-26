import { NextResponse } from "next/server";

export async function POST() {
  try {

const response = NextResponse.json(
    {
        message: "Logout successful",
        success: true,
    }
)

    // Clear the token cookie
    response.cookies.set("token", "", {
      httpOnly: true,
      maxAge: 0, // Expire the cookie immediately
    });

  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}

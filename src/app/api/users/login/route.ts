import { connectDB } from "@/dbconfig/dbconfig";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import { NextResponse, NextRequest } from "next/server";

connectDB();

export async function POST(request: NextRequest) {
  try {

    const reqBody = await request.json();
    const { email, password } = reqBody;
    console.log(reqBody);

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Check if password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

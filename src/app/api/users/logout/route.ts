import { NextResponse } from "next/server";

export async function POST() {
  try {



  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}

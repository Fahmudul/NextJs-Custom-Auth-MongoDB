import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    const cookie = cookies();
    cookie.delete("token");
    return NextResponse.json({
      message: "Logged out successfully",
      status: 200,
    });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};

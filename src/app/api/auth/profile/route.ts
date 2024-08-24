import User from "@/Models/userModel";
import jwt from "jsonwebtoken";
import { cookies, headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    const token = headers().get("authorization")?.split(" ")[1];
    // console.log(token);
    if (!token) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const verified: any = jwt.verify(token, process.env.JWT_SECRET!);
    // console.log("from line 15", verified);
    if (verified) {
      const user = await User.findOne({ email: verified.email });
      // console.log("from line 18", user);
      return NextResponse.json(user);
    } 
    return NextResponse.json({});
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};

import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import User from "@/Models/userModel";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const userInfo = await request.json();
    // console.log(userInfo);
    const { email, password } = userInfo;
    const user = await User.findOne({ email });
    // console.log("from line 12", user);
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    if (!user.isVerified) {
      return NextResponse.json(
        { message: "Please Verify your email" },
        { status: 401 }
      );
    }
    const passwordMatch = await bcryptjs.compare(password, user.password);
    if (!passwordMatch) {
      return NextResponse.json(
        { message: "Incorrect password" },
        { status: 401 }
      );
    }
    // Create json web token
    const token = jwt.sign({ email }, process.env.JWT_SECRET!, {
      expiresIn: "1d",
    });
    const response = NextResponse.json({
      message: "Login successful",
      token: token,
      status: 200,
    });
    response.cookies.set("token", token);
    return response;
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};

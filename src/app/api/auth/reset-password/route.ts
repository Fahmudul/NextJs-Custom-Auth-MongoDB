import bcryptjs from "bcryptjs";
import { SendEmail } from "@/Helper/SendMail";
import User from "@/Models/userModel";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const { email, password } = await request.json();
    const { searchParams } = new URL(request.url);
    const token = searchParams.get("token");
    const requestType = searchParams.get("request");
    if (email) {
      // console.log("from line 13", email);
      const user = await User.findOne({ email });
      if (!user) {
        return NextResponse.json({ message: "User not found", status: 404 });
      }
      await SendEmail(email, "reset-password");
      return NextResponse.json({
        message: "Email sent successfully",
        status: 200,
      });
    } else if (token && requestType && password) {
      const user = await User.findOne({ resetPasswordToken: token });
      const hashedPassword = await bcryptjs.hash(password, 10);
      if (!user) {
        return NextResponse.json({ message: "User not found", status: 404 });
      }
      user.password = hashedPassword;
      user.resetPasswordToken = undefined;
      user.resetPasswordTokenExpiry = undefined;
      await user.save();
      return NextResponse.json({
        message: "Password reset successfully",
        status: 200,
      });
    }
  } catch (error: any) {
    return NextResponse.json({ message: error.message, status: 500 });
  }
};

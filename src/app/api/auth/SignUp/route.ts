import { connectDB } from "@/Database/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/Models/userModel";
import bcryptjs from "bcryptjs";
import { SendEmail } from "@/Helper/SendMail";
export const POST = async (req: NextRequest) => {
  try {
    await connectDB();
    const body = await req.json();
    const { name, email, password } = body;
    // console.log(body);
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcryptjs.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    const savedUser = await newUser.save();
    await SendEmail();
    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({
      message: error.message,
      error: error,
      status: 500,
    });
  }
};

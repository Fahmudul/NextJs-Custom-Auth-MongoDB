import User from "@/Models/userModel";
import bcryptjs from "bcryptjs";
import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // use false for STARTTLS; true for SSL on port 465
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

export const SendEmail = async (
  email: string,
  emailType: string
): Promise<string> => {
  // console.log("from line 18", email, emailType);
  const token = await bcryptjs.hash(email, 10);
  if (emailType === "verify-email") {
    // console.log("send email line 20");
    await User.findOneAndUpdate(
      { email },
      {
        verifyToken: token,
        verifyTokenExpiry: Date.now() + 60 * 60 * 1000,
      }
    );
  } else {
    // console.log("send email line 30");

    await User.findOneAndUpdate(
      { email },
      {
        resetPasswordToken: token,
        resetPasswordTokenExpiry: Date.now() + 60 * 60 * 1000,
      }
    );
  }
  // console.log(token);
  const mailOptions = {
    from: { name: "Electro", address: process.env.GMAIL_USER! },
    to: email,
    subject: "Verify Email",
    text: "Please click the link below",
    html: `Click the link below to <a href="${
      process.env.NEXT_DOMAIN
    }/${emailType}?token=${token}">${
      emailType === "verify-email" ? "Verify Email" : "Reset Password"
    }</a> or copy and paste this link in your browser: ${
      process.env.NEXT_PUBLIC_BASE_URL
    }/${emailType}?token=${token}`,
  };
  let errorMessage;
  let successInfo;

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      errorMessage = error.toString();
    } else {
      // console.log("Email sent: ", info.response);
      successInfo = info.response.toString();
    }
  });
  if (errorMessage) {
    return errorMessage;
  } else {
    return "Email sent successfully";
  }
};

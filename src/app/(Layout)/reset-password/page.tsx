"use client";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";

const ResetPasswordPage = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const router = useRouter();
  const [showPassword, setShowPassword] = React.useState(false);
  // console.log(token);
  const passwordRef = useRef<HTMLInputElement>(null);
  const resetPassword = async () => {
    const password = passwordRef.current?.value;
    if (!password) {
      alert("Please enter your password");
      return;
    }
    const response = await axios.post(
      `/api/auth/reset-password?token=${token}&request=reset`,
      { password }
    );
    if (response.data.message === "Password reset successfully") {
      router.push("/login-sign-up");
    }
  };
  return (
    <div className="container min-h-[calc(100vh-10rem)] flex flex-col space-y-4 justify-center items-center mx-auto border w-full mt-16 rounded-3xl shadow-[#85bdd7] shadow-2xl">
      <label className="label">New Password</label>
      <div className="relative c_form">
        <input
          type={showPassword ? "text" : "password"}
          className="input"
          ref={passwordRef}
        />
        {showPassword ? (
          <LuEyeOff
            className="absolute right-5 top-8"
            onClick={() => setShowPassword(!showPassword)}
          />
        ) : (
          <LuEye
            className="absolute right-5 top-8"
            onClick={() => setShowPassword(!showPassword)}
          />
        )}
      </div>
      <button className="btn bg-[#85bdd7]" onClick={resetPassword}>
        Reset
      </button>
    </div>
  );
};

export default ResetPasswordPage;

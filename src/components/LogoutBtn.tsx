"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { PiSignOut } from "react-icons/pi";

const LogoutBtn = () => {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      const response = await axios(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/logout`
      );
      if (response.data.status === 200) {
        router.push("/login-sign-up");
      }
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return (
    <button
      className="flex items-center"
      onClick={() => {
        handleLogout();
      }}
    >
      <PiSignOut />
      Signout
    </button>
  );
};

export default LogoutBtn;

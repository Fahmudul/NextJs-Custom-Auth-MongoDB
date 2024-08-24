"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { PiSignOut } from "react-icons/pi";

const LogoutBtn = () => {
  const router = useRouter();
  const handleLogout = async () => {
    const response = await axios("/api/auth/logout");
    if (response.data.status === 200) {
      router.push("/login-sign-up");
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

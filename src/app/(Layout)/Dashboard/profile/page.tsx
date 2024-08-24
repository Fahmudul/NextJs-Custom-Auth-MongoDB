import { getUserDetails } from "@/Helper/GetUserDetails";
import React from "react";
import avatar from "@/../public/avatar.jpg";
import { cookies } from "next/headers";
import Image from "next/image";
const ProfilePage = async () => {
  const token = cookies().get("token")?.value;
  const userDetails = token ? await getUserDetails(token) : null;
  // console.log(userDetails);
  return (
    <div>
      <div className="max-w-4xl mx-auto py-10 px-5">
        <div className="bg-white shadow-lg rounded-lg p-8">
          {/* Profile Picture */}
          <div className="flex justify-center mb-6">
            <Image
              src={avatar}
              alt={`s profile picture`}
              className="rounded-full max-w-20"
            />
          </div>

          {/* Username/Display Name */}
          <h1 className="text-3xl font-bold text-center mb-4">
            {userDetails.username}
          </h1>

          {/* Bio/Description */}
          <p className="text-center text-gray-600 mb-6">{userDetails?.bio}</p>

          {/* Email Address */}
          <div className="text-center mb-4">
            <span className="text-gray-500">Email: </span>
            <span className="text-gray-800">{userDetails?.email}</span>
          </div>

          {/* Joined Date */}
          <div className="text-center">
            <span className="text-gray-500">Joined: </span>
            <span className="text-gray-800">{"12/23/24"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

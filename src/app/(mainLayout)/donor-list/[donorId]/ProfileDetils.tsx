"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface UserProfile {
  id: string;
  userId: string;
  bio?: string;
  age?: number;
  lastDonationDate?: string;
  createdAt: string;
  updatedAt: string;
}

interface ProfileData {
  id: string;
  name: string;
  email: string;
  bloodType?: string;
  location?: string;
  availability: boolean;
  profileImage?: string | null;
  createdAt: string;
  updatedAt: string;
  UserProfile?: UserProfile;
}

export const ProfileDetils = ({ profile }: any) => {
  const [data, setData] = useState<ProfileData | null>(null);

  useEffect(() => {
    fetch(
      `https://blood-donation-server-seven.vercel.app/api/my-profile/${profile?.donorId}`
    )
      .then((res) => res.json())
      .then((profile) => {
        setData(profile.data);
      });
  }, [profile?.donorId]);

  return (
    <>
      <div className="max-w-[95%] mx-auto bg-gradient-to-b from-red-500 to-pink-500 rounded-3xl flex flex-col justify-center items-center text-white">
        <Image
          src={
            data?.profileImage ||
            "https://avatar.iran.liara.run/public/boy?username=Ash"
          }
          alt={data?.name as string || "userimage"}
          className="max-w-full h-auto rounded-full border-4 p-1 border-red-500 mx-auto -mt-16"
          width="120"
          height="120"
        />
        <div className="w-full mt-6 text-center">
          <h4 className="text-2xl font-medium">
            {data?.name} ({data?.UserProfile?.age})
          </h4>
          <p className="mb-4 text-md">{data?.UserProfile?.bio}</p>
          <div className="w-full flex justify-between items-center my-8">
            <div className="w-full mb-4 text-xl font-bold">
              Blood Group:
              <p>
                {data?.bloodType === "A_POSITIVE"
                  ? "A+"
                  : data?.bloodType === "A_NEGATIVE"
                  ? "A-"
                  : data?.bloodType === "B_POSITIVE"
                  ? "B+"
                  : data?.bloodType === "B_NEGATIVE"
                  ? "B-"
                  : data?.bloodType === "AB_POSITIVE"
                  ? "AB+"
                  : data?.bloodType === "AB_NEGATIVE"
                  ? "AB-"
                  : data?.bloodType === "O_POSITIVE"
                  ? "O+"
                  : data?.bloodType === "O_NEGATIVE"
                  ? "O-"
                  : "Unknown"}
              </p>
            </div>
            <div className="w-full mb-4 text-xl font-bold">
              Location:
              <p>{data?.location}</p>
            </div>
            <div className="w-full mb-4 text-xl font-bold">
              Email:
              <p>{data?.email}</p>
            </div>
            <div className="w-full mb-4 text-xl font-bold">
              Last Donation Date:
              <p>{data?.UserProfile?.lastDonationDate}</p>
            </div>
            <div className="w-full mb-4 text-xl font-bold">
              Availability:
              <p>{data?.availability ? "Available" : "Not Available"}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

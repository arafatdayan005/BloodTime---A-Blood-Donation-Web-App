"use client";
import UploadWidget from "@/components/UploadWidget";
import { SetStateAction, useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

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

const Profile = () => {
  const [data, setData] = useState<ProfileData | null>(null);
  const [photoURL, setPhotoURL] = useState("");
  const [availability, setAvailability] = useState(false);
  const { register, handleSubmit, setValue } = useForm();

  const handleImageUpload = (url: SetStateAction<string>) => {
    setPhotoURL(url);

    const token = localStorage.getItem("token");
    fetch("https://blood-donation-server-seven.vercel.app/api/my-profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify({ profileImage: url }),
    })
      .then((res) => res.json())
      .then((d) => console.log(d))
      .catch((error) => console.error("Error:", error));
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("https://blood-donation-server-seven.vercel.app/api/my-profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    })
      .then((res) => res.json())
      .then((d) => {
        setData(d?.data);
        setPhotoURL(d?.data?.profileImage ?? "");
        setAvailability(d?.data?.availability);

        setValue("location", d?.data?.location ?? "");
        setValue("age", d?.data?.UserProfile?.age ?? "");
        setValue("bloodType", d?.data?.bloodType ?? "Choose a type");
        setValue("lastDonationDate", d?.data?.UserProfile?.lastDonationDate ?? "");
        setValue("bio", d?.data?.UserProfile?.bio ?? "");
      })
      .catch((error) => console.error("Error:", error));
  }, [setValue]);

  const handleToggle = (e: any) => {
    const token = localStorage.getItem("token");
    fetch("https://blood-donation-server-seven.vercel.app/api/my-profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify({ availability: e.target.checked }),
    })
      .then((res) => res.json())
      .then((d) => console.log(d))
      .catch((error) => console.error("Error:", error));
    setAvailability(e.target.checked);
  };

  const onSubmit = async (formData: FieldValues) => {
    console.log(formData);
    if (formData?.age) {
      formData.age = Number(formData?.age);
    }
    const token = localStorage.getItem("token");
    fetch("https://blood-donation-server-seven.vercel.app/api/my-profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((d) => console.log(d))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <>
      <UploadWidget
        onImageUpload={handleImageUpload}
        photoURL={photoURL} // Pass the photoURL state here
      />
      <div className="relative flex flex-wrap justify-center items-center mt-2">
        <label
          className="cursor-pointer pr-2 text-slate-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400"
          htmlFor="id-c04"
        >
          No
        </label>
        <input
          className="relative w-8 h-4 transition-colors rounded-lg appearance-none cursor-pointer hover:bg-slate-400 after:hover:bg-slate-600 checked:hover:bg-red-300 checked:after:hover:bg-red-600 focus:outline-none checked:focus:bg-red-400 checked:after:focus:bg-red-700 focus-visible:outline-none peer bg-slate-300 after:absolute after:top-0 after:left-0 after:h-4 after:w-4 after:rounded-full after:bg-slate-500 after:transition-all checked:bg-red-200 checked:after:left-4 checked:after:bg-red-500 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:after:bg-slate-300"
          type="checkbox"
          checked={availability}
          onChange={handleToggle}
          id="id-c04"
        />
        <label
          className="cursor-pointer pl-2 text-slate-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400"
          htmlFor="id-c04"
        >
          Yes
        </label>
      </div>
      <p className="mb-2 text-center">Available for Donation?</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-8">
          <div className="w-full flex-1">
            <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
              Location
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
              <input
                id="location"
                {...register("location")}
                placeholder="Location"
                className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
              />
            </div>
          </div>
          <div className="w-full flex-1">
            <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
              Age
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
              <input
                id="age"
                {...register("age")}
                placeholder="Age"
                type="number"
                className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="w-full flex-1">
            <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
              Blood Group
            </div>
            <div className="bg-white my-2 flex border rounded">
              <select
                className="bg-gray-50 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                id="bloodType"
                {...register("bloodType")}
                defaultValue="Choose a type"
              >
                <option disabled>Choose a type</option>
                <option value="A_POSITIVE">A_POSITIVE</option>
                <option value="A_NEGATIVE">A_NEGATIVE</option>
                <option value="B_POSITIVE">B_POSITIVE</option>
                <option value="B_NEGATIVE">B_NEGATIVE</option>
                <option value="AB_POSITIVE">AB_POSITIVE</option>
                <option value="AB_NEGATIVE">AB_NEGATIVE</option>
                <option value="O_POSITIVE">O_POSITIVE</option>
                <option value="O_NEGATIVE">O_NEGATIVE</option>
              </select>
            </div>
          </div>
          <div className="w-full flex-1">
            <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
              Last Donation Date
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
              <input
                id="lastDonationDate"
                {...register("lastDonationDate")}
                type="date"
                className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
              />
            </div>
          </div>
        </div>

        <div className="w-full flex-1">
          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Bio
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <textarea
              rows={3}
              id="bio"
              {...register("bio")}
              placeholder="Tell us about yourself"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-fit mx-auto mt-8 py-3 px-4 flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-500 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none"
        >
          Update
        </button>
      </form>
    </>
  );
};

export default Profile;

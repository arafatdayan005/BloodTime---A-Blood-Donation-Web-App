import React, { ChangeEvent } from "react";
import { useStepperContext } from "../StepperContext";

export default function Profile() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="flex flex-col">
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Bio
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            value={userData["bio"] || ""}
            name="bio"
            placeholder="Tell us about yourself"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Blood Group
        </div>
        <div className="bg-white my-2 flex border rounded">
          <select
            className="bg-gray-50 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            name="bloodType"
            onChange={handleChange}
            value={userData["bloodType"] || "Choose a type"}
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
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Last Donation Date
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            value={userData["lastDonationDate"] || ""}
            name="lastDonationDate"
            placeholder="YY/MM/DD"
            type="date"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
    </div>
  );
}

"use client";
import React, { useEffect, useState } from "react";
import { DonorCards } from "./DonorCards";

export const SearchFilter = () => {
  const [donors, setDonors] = useState([]);
  useEffect(() => {
    fetch("https://blood-donation-server-seven.vercel.app/api/donor-list")
      .then((res) => res.json())
      .then((donorData) => {
        const filteredDonors = donorData.data.filter(
          (donor: { bloodType: null }) => donor.bloodType !== null
        );
        setDonors(filteredDonors);
      });
  }, []);

  return (
    <>
      <p className="text-center text-lg text-gray-600">
        Search or Filter Donors According To Your Criteria
      </p>
      <div className="max-w-[85%] mx-auto my-8">
        <form>
          <div className="flex gap-8 justify-between items-center">
            <input
              type="text"
              id="searchTerm"
              //{...register("searchTerm")}
              name="searchTerm"
              className="py-3 px-4 block w-full border-red-200 rounded-lg text-sm border focus:border-red-500 focus:ring-red-500 appearance-none outline-none disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-white dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              placeholder="Keyword"
            />
            <select
              className="bg-gray-50 text-gray-900 text-sm rounded-lg block w-full py-3 px-4 border border-red-200 outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              name="bloodType"
              //onChange={handleChange}
              defaultValue={"Sort By"}
            >
              <option disabled>Sort By</option>
              <option value="name">Name</option>
              <option value="age">Age</option>
              <option value="Location">Location</option>
              <option value="lastDonationDate">Last Donation Date</option>
            </select>
            <select
              className="bg-gray-50 text-gray-900 text-sm rounded-lg block w-full py-3 px-4 border border-red-200 outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              name="bloodType"
              //onChange={handleChange}
              defaultValue={"Sort Order"}
            >
              <option disabled>Sort Order</option>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
            <select
              className="bg-gray-50 text-gray-900 text-sm rounded-lg block w-full py-3 px-4 border border-red-200 outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              name="bloodType"
              //onChange={handleChange}
              defaultValue={"Choose a Blood Group"}
            >
              <option disabled>Choose a Blood Group</option>
              <option value="A_POSITIVE">A_POSITIVE</option>
              <option value="A_NEGATIVE">A_NEGATIVE</option>
              <option value="B_POSITIVE">B_POSITIVE</option>
              <option value="B_NEGATIVE">B_NEGATIVE</option>
              <option value="AB_POSITIVE">AB_POSITIVE</option>
              <option value="AB_NEGATIVE">AB_NEGATIVE</option>
              <option value="O_POSITIVE">O_POSITIVE</option>
              <option value="O_NEGATIVE">O_NEGATIVE</option>
            </select>
            <select
              className="bg-gray-50 text-gray-900 text-sm rounded-lg block w-full py-3 px-4 border border-red-200 outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              name="bloodType"
              //onChange={handleChange}
              defaultValue={"Availability"}
            >
              <option disabled>Availability</option>
              <option value="true">Available</option>
              <option value="false">Not Available</option>
            </select>
          </div>
          <button
            type="submit"
            className="mt-8 w-fit mx-auto flex justify-center text-red-500 hover:text-white border-2 border-red-500 hover:bg-red-600 font-medium rounded-lg text-md px-5 py-2.5 text-center duration-500"
          >
            Search Donor
          </button>
          <button className="w-fit mx-auto mb-8 flex justify-center items-center text-gray-700 text-center hover:text-red-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                clipRule="evenodd"
              />
            </svg>
            Reset All
          </button>
        </form>
      </div>

      <p className="text-center text-3xl font-semibold text-red-500">Total Donors Found: {donors.length || ""}</p>
      <div className="max-w-[85%] mx-auto my-20 grid grid-cols-4 gap-x-8 gap-y-20 md:gap-y-12 lg:gap-y-24 text-center pt-6">
        {donors.map((donor, i) => (
          <div className="col-span-4 md:col-span-2 lg:col-span-1" key={i}>
            <DonorCards donor={donor} />
          </div>
        ))}
      </div>
    </>
  );
};

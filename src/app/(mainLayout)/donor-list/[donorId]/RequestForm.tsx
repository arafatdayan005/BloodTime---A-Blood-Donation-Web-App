"use client";
import { FieldValues, useForm } from "react-hook-form";

export const RequestForm = ({ profile }: any) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: FieldValues) => {
    data.donorId = profile?.donorId;

    const token = localStorage.getItem("token");
    fetch(
      "https://blood-donation-server-seven.vercel.app/api/donation-request",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((d) => console.log(d))
      .catch((error) => console.error("Error:", error));

    reset();
  };

  return (
    <div className="max-w-[40%] mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="number"
          {...register("phoneNumber")}
          name="phoneNumber"
          id="phoneNumber"
          placeholder="Phone Number"
          className="py-3 ps-4 pe-2 mb-4 block w-full text-center border-red-200 rounded-lg text-sm border focus:border-red-500 focus:ring-red-500 appearance-none outline-none disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-white dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          required
        />
        <input
          type="text"
          {...register("hospitalName")}
          name="hospitalName"
          id="hospitalName"
          placeholder="Hospital Name"
          className="py-3 px-4 mb-4 block w-full text-center border-red-200 rounded-lg text-sm border focus:border-red-500 focus:ring-red-500 appearance-none outline-none disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-white dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          required
        />
        <input
          type="text"
          {...register("hospitalAddress")}
          name="hospitalAddress"
          id="hospitalAddress"
          placeholder="Hospital Address"
          className="py-3 px-4 mb-4 block w-full text-center border-red-200 rounded-lg text-sm border focus:border-red-500 focus:ring-red-500 appearance-none outline-none disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-white dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          required
        />
        <input
          type="date"
          {...register("dateOfDonation")}
          name="dateOfDonation"
          id="dateOfDonation"
          className="py-3 ps-4 pe-2 mb-4 block w-full text-center border-red-200 rounded-lg text-sm border focus:border-red-500 focus:ring-red-500 appearance-none outline-none disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-white dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          required
        />
        <textarea
          {...register("reason")}
          name="reason"
          id="reason"
          rows={5}
          placeholder="Reason or Messege"
          className="py-3 ps-4 pe-2 mb-4 block w-full text-center border-red-200 rounded-lg text-sm border focus:border-red-500 focus:ring-red-500 appearance-none outline-none disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-white dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          required
        />
        <button
          type="submit"
          className="w-full text-white bg-red-500 hover:bg-red-600 font-medium rounded-lg text-md px-5 py-2.5 mb-20 text-center duration-500"
        >
          Send Blood Request
        </button>
      </form>
    </div>
  );
};

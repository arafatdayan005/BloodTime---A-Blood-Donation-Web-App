import Image from "next/image";
import Link from "next/link";

export const DonorCards = ({ donor }: any) => {
  return (
    <div className="relative bg-white dark:bg-slate-800 shadow-[0_0_50px_0_rgba(35,31,32,0.1)] rounded-xl hover:-translate-y-1 duration-500 h-full p-6 lg:p-8">
      <Image
        src={
          donor?.profileImage ||
          "https://avatar.iran.liara.run/public/boy?username=Ash"
        }
        alt={donor?.name}
        className="max-w-full h-auto rounded-full border-4 p-1 border-red-600 mx-auto -mt-20"
        width="120"
        height="120"
      />
      <div className="mt-6">
        <h4 className="text-2xl font-medium mb-1">{donor?.name}</h4>
        <p className="mb-4 text-md text-red-600 font-bold">
          {donor.bloodType === "A_POSITIVE"
            ? "A+"
            : donor.bloodType === "A_NEGATIVE"
            ? "A-"
            : donor.bloodType === "B_POSITIVE"
            ? "B+"
            : donor.bloodType === "B_NEGATIVE"
            ? "B-"
            : donor.bloodType === "AB_POSITIVE"
            ? "AB+"
            : donor.bloodType === "AB_NEGATIVE"
            ? "AB-"
            : donor.bloodType === "O_POSITIVE"
            ? "O+"
            : donor.bloodType === "O_NEGATIVE"
            ? "O-"
            : "Unknown"}
        </p>
        <p>{donor.location}</p>
        <p className="opacity-50">
          {donor.availability ? "Available" : "Not Available"}
        </p>
      </div>
      <Link
        href={`/donor-list/${donor.id}`}
        className="absolute left-0 right-0 -bottom-6 w-fit mx-auto text-white bg-red-500 hover:bg-red-600 font-medium rounded-lg text-md px-5 py-2.5 text-center duration-500"
      >
        Details
      </Link>
    </div>
  );
};

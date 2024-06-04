import { ProfileDetils } from "./ProfileDetils";
import { RequestForm } from "./RequestForm";

export default function DonorDetails({ params }: any) {
  return (
    <>
      <section className="pt-20">
        <ProfileDetils profile={params} />
        <p className="mt-20 mb-4 text-3xl text-center font-semibold">
          Request For Blood
        </p>
        <p className="text-center text-gray-500 mb-10">Please fill out the form below to request a donation from this donor.</p>
        <RequestForm profile={params} />
      </section>
    </>
  );
}

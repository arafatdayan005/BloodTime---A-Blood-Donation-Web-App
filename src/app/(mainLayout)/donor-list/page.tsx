import { SearchFilter } from "./SearchFilter";

export default function DonorList() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center py-10">Available Donors</h1>
      <SearchFilter />
    </>
  );
}

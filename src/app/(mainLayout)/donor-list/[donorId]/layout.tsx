import ProtectedRoute from "./ProtectedRoute";

export default function DonorDetails({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ProtectedRoute>{children}</ProtectedRoute>
    </>
  );
}

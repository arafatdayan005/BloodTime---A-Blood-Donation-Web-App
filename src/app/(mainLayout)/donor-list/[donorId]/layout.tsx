"use client";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const router = useRouter();
  const token = localStorage.getItem("token");

  if (!token) {
    router.replace("/login");
  }

  return children;
}

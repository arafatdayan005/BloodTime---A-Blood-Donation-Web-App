"use client";
import { UseContextProvider } from "./StepperContext";
import { RegisterForm } from "./RegisterForm";

export default function page() {
  return (
    <>
      <section className="bg-gray-50 py-12 relative flex justify-center flex-wrap lg:items-center">
        <UseContextProvider>
          <RegisterForm />
        </UseContextProvider>
      </section>
    </>
  );
}

"use client";
import { useState } from "react";
import Account from "./steps/Account";
import Personal from "./steps/Personal";
import Profile from "./steps/Profile";
import Final from "./steps/Final";
import Stepper from "./Stepper";
import { useStepperContext } from "./StepperContext";

export const RegisterForm = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const { userData } = useStepperContext();

  const steps = ["Account", "Personal", "Profile", "Complete"];

  const displayStep = (step: number) => {
    switch (step) {
      case 1:
        return <Account />;
      case 2:
        return <Personal />;
      case 3:
        return <Profile />;
      case 4:
        return <Final />;
      default:
    }
  };

  const handleClick = (direction: string) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl md:w-1/2">
      <div className="text-center mt-5">
        <h1 className="block text-2xl font-bold text-red-500 dark:text-white">
          Sign up
        </h1>
        <p className="block text-center mt-5 mb-2">
          Want to Register as a Donor?
        </p>
        <div className="relative flex flex-wrap justify-center items-center">
          <label
            className="cursor-pointer pr-2 text-slate-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400"
            htmlFor="id-c04"
          >
            No
          </label>
          <input
            className="peer relative h-6 w-12 cursor-pointer appearance-none rounded-xl bg-slate-300 transition-colors after:absolute after:top-0 after:left-0 after:h-6 after:w-6 after:rounded-full after:bg-slate-500 after:transition-all checked:bg-red-200 checked:after:left-6 checked:after:bg-red-500 hover:bg-slate-400 after:hover:bg-slate-600 checked:hover:bg-red-300 checked:after:hover:bg-red-600 focus:outline-none checked:focus:bg-red-400 checked:after:focus:bg-red-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-200 disabled:after:bg-slate-300"
            type="checkbox"
            onChange={(e) => setIsToggled(e.target.checked)}
            id="id-c04"
          />
          <label
            className="cursor-pointer pl-2 text-slate-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400"
            htmlFor="id-c04"
          >
            Yes
          </label>
        </div>
      </div>
      {/* Stepper */}
      <div className="horizontal container">
        {isToggled && <Stepper steps={steps} currentStep={currentStep} />}

        <div className="p-10 ">
          {displayStep(currentStep)}
        </div>
      </div>

      {/* navigation button */}
      {isToggled && currentStep !== steps.length ? (
        <div className="container mt-4 mb-8 flex justify-around">
          <button
            onClick={() => handleClick("prev")}
            className={`cursor-pointer rounded-xl border-2 border-slate-300 bg-white py-2 px-4 font-semibold uppercase text-slate-400 transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white  ${
              currentStep === 1 ? " cursor-not-allowed opacity-50 " : ""
            }`}
          >
            Back
          </button>

          <button
            onClick={() => handleClick("next")}
            className="cursor-pointer rounded-lg bg-red-500 py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white disabled:cursor-not-allowed disabled:bg-red-500"
            disabled={currentStep === steps.length - 1 && (!userData?.name || !userData?.email || !userData?.password || !userData?.bio || !userData?.location || !userData?.bloodType || !userData?.lastDonationDate || !userData?.age)}
          >
            {currentStep === steps.length - 1 ? "Confirm" : "Next"}
          </button>
        </div>
      ) : (
        <button
          type="submit"
          className="w-1/4 mx-auto mb-8 py-3 px-4 flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-500 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none"
        >
          Sign up
        </button>
      )}
    </div>
  );
};

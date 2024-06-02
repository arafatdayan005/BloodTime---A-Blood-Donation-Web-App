"use client";
import Lottie from "lottie-react";
import loginAnimation from "./../../assets/loginAnimation.json";

export const LottieAnime = () => {
  return (
    <div className="h-64 sm:h-96 lg:h-full lg:w-[30%]">
      <Lottie animationData={loginAnimation} loop={true} />
    </div>
  );
};

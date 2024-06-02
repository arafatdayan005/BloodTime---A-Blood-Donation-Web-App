import React from "react";
import { UserData, useStepperContext } from "./../StepperContext";

export default function Account() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <form>
      <div className="flex flex-col">
        <div className="mx-2 w-full flex-1">
          <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
            Username
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
            <input
              onChange={handleChange}
              value={userData["name"] || ""}
              name="name"
              placeholder="Username"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
              required
            />
          </div>
        </div>
        <div className="mx-2 w-full flex-1">
          <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
            Email
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
            <input
              onChange={handleChange}
              value={userData["email"] || ""}
              name="email"
              placeholder="Email"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
              required
            />
          </div>
        </div>
        <div className="mx-2 w-full flex-1">
          <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
            Password
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
            <input
              onChange={handleChange}
              value={userData["password"] || ""}
              name="password"
              placeholder="Password"
              type="password"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
              required
            />
          </div>
        </div>
        <div className="mx-2 w-full flex-1">
          <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
            Confirm Password
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
            <input
              // onChange={handleChange}
              // value={userData["password"] || ""}
              name="confirm"
              placeholder="Confirm Password"
              type="password"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
              required
            />
          </div>
        </div>
      </div>
    </form>
  );
}

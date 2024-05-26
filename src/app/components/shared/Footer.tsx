import Image from "next/image";
import icon from "./../../../assets/social.png";

export default function Footer() {
  return (
    <div className="bg-[#f6b3b3] dark:bg-[#1d2b22] py-12">
      <div className="w-full flex justify-center">
        <div className="max-w-[90%]">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
            <div className="col-span-2 text-black dark:text-white ">
              <div className="flex items-end">
                <span className="font-raleway text-lg md:text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Blood<span className="text-red-500">Time</span>
                </span>
              </div>
              <p className="my-4">
                Donate blood, share the love and make the change for humanity,
                be the hero.
              </p>
              <Image src={icon} className="mt-4" alt="" />
            </div>
            <div className="col-span-1 text-black dark:text-white ">
              <h3 className="mb-6 font-medium text-xl">About Us</h3>
              <p className="cursor-pointer hover:underline">Items</p>
              <p className="cursor-pointer hover:underline">Work</p>
              <p className="cursor-pointer hover:underline">Latest News</p>
              <p className="cursor-pointer hover:underline">Career</p>
            </div>
            <div className="col-span-1 text-black dark:text-white ">
              <h3 className="mb-6 font-medium text-xl">Product</h3>
              <p className="cursor-pointer hover:underline">Prototype</p>
              <p className="cursor-pointer hover:underline">Plan & Pricing</p>
              <p className="cursor-pointer hover:underline">Customer</p>
              <p className="cursor-pointer hover:underline">Integration</p>
            </div>
            <div className="col-span-1 text-black dark:text-white ">
              <h3 className="mb-6 font-medium text-xl">Support</h3>
              <p className="cursor-pointer hover:underline">Help Desk</p>
              <p className="cursor-pointer hover:underline">Sales</p>
              <p className="cursor-pointer hover:underline">Become a Partner</p>
              <p className="cursor-pointer hover:underline">Developers</p>
            </div>
            <div className="col-span-1 text-black dark:text-white ">
              <h3 className="mb-6 font-medium text-xl">Contact</h3>
              <p>524 Dhaka, Bangladesh</p>
              <p>+880 11111111</p>
            </div>
          </div>
          <hr className="border-t border-gray-950 dark:border-gray-100  border-opacity-40 my-8"></hr>
          <div className="flex justify-between text-gray-500">
            <p>@2023 BloodTime. All Rights Reserved</p>
            <p>Powered by BloodTime</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import video from "./../../assets/v.mp4";
import Image from "next/image";
import aboutimg from "./../../assets/aboutimg.jpg";
import tipsimg from "./../../assets/tipsimg.png";

const Home = () => {
  return (
    <>
      <div className="relative dark:bg-black">
        <video
          className="-mt-36 w-full"
          src={video}
          autoPlay
          muted
          loop
          plays-inline="true"
        />
        <div className="absolute p-20 top-0 bottom-0 my-auto w-full flex justify-between items-center">
          <h3 className="text-white text-4xl font-semibold">
            Share The <span className="text-red-500">Elixir</span> of Life
            <br />
            <span className="text-6xl font-bold">
              Save a <span className="text-red-500">Soul</span>
            </span>
          </h3>
          <h3 className="text-white text-4xl font-semibold text-right">
            Sacrifice for <span className="text-red-500">Humanity</span>
            <br />
            <span className="text-6xl font-bold">
              Be a <span className="text-red-500">Hero</span>
            </span>
          </h3>
        </div>
        <Link
          href="donor-list"
          className="w-fit absolute bottom-40 left-0 right-0 mx-auto text-red-500 hover:text-white border-2 border-red-500 hover:bg-red-600 font-medium rounded-lg text-md px-5 py-2.5 text-center duration-500"
        >
          Search Donor
        </Link>
      </div>
      <section className="max-w-[85%] mx-auto py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
        <div className="container px-4">
          <div className="grid grid-cols-12 items-center gap-4 mb-12">
            <div className="col-span-12 lg:col-span-6">
              <h1 className="text-3xl leading-none font-bold uppercase tracking-wider mb-2">
                Welcome to <span className="text-red-500">BloodTime</span>
              </h1>
              <hr className="bg-red-600 h-1 rounded-[3px] w-12 opacity-100 my-6" />
              <p className="opacity-70 mb-2">
                Since our inception set out in 2012, BloodTime has successfully
                contributed in blood donation to over 500+ patients. Sharing
                awareness to young generation the usefulness of donating blood
                for others to save countless lives.
              </p>
              <ul className="flex flex-col mt-5">
                <li className="flex">
                  <span className="text-red-600 mr-2 mb-4 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="opacity-75 text-sm">
                    1000+ Donors Available 24/7
                  </span>
                </li>
                <hr className="w-11/12 my-2" />
                <li className="flex">
                  <span className="text-red-600 mr-2 mb-4 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="opacity-75 text-sm">
                    Associated with 200+ Medical facilities
                  </span>
                </li>
                <hr className="w-11/12 my-2" />
                <li className="flex">
                  <span className="text-red-600 mr-2 mb-4 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="opacity-75 text-sm">
                    Donated Blood to Over 500+ Patients
                  </span>
                </li>
                <hr className="w-11/12 my-2" />
                <li className="flex">
                  <span className="text-red-600 mr-2 mb-4 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="opacity-75 text-sm">
                    Contributed in Public Awareness
                  </span>
                </li>
                <hr className="w-11/12 my-2" />
                <li className="flex">
                  <span className="text-red-600 mr-2 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="opacity-75 text-sm">
                    Customer Service Available Country Wide
                  </span>
                </li>
              </ul>
              <div className="mt-12">
                <Link
                  href="/about"
                  className="bg-red-500 text-white dark:bg-white dark:text-black hover:bg-red-600 rounded-md px-5 py-2 transition"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div className="mt-12 lg:mt-0">
                <Image
                  src={aboutimg}
                  alt=""
                  className="max-w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h1 className="text-center text-5xl font-bold">
          Frequently <span className="text-red-500">Asked</span> Questions
        </h1>
        <div className="max-w-[85%] mx-auto grid grid-cols-12 gap-4 justify-between items-center my-12">
          <div className="col-span-12 lg:col-span-6">
            <Image src={tipsimg} alt="tips" className="rounded-2xl" />
          </div>

          <div className="col-span-12 lg:col-span-6 m-2 space-y-2">
            <div
              className="group flex flex-col gap-2 rounded-lg border hover:border-red-500 p-5"
              tabIndex={1}
            >
              <div className="flex cursor-pointer items-center justify-between">
                <span className="font-bold">How often can I donate blood?</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5 transition-all duration-500 group-focus:-rotate-180 group-focus:text-red-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
                You can donate whole blood every 56 days because it takes time
                for your body to replenish all its components. Plasma can be
                donated every 28 days as it replenishes quickly. Platelets can
                be donated up to 24 times a year since they are rapidly
                replaced, allowing for more frequent donations.
              </div>
            </div>

            <div
              className="group flex flex-col gap-2 rounded-lg border p-5 hover:border-red-500"
              tabIndex={2}
            >
              <div className="flex cursor-pointer items-center justify-between">
                <span className="font-bold">
                  What is the minimum age for donating blood?
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5 transition-all duration-500 group-focus:-rotate-180 group-focus:text-red-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
                The minimum age for donating blood is typically 17 years old in
                many regions, although some places may allow 16-year-olds to
                donate with parental consent. It`s important to check with your
                local blood donation center for specific age requirements and
                regulations.
              </div>
            </div>

            <div
              className="group flex flex-col gap-2 rounded-lg border p-5 hover:border-red-500"
              tabIndex={3}
            >
              <div className="flex cursor-pointer items-center justify-between">
                <span className="font-bold">
                  How long does the blood donation process take?
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5 transition-all duration-500 group-focus:-rotate-180 group-focus:text-red-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
                The entire blood donation process takes about 1 hour, which
                includes registration, a health screening, and post-donation
                refreshments. However, the actual blood donation itself, where
                blood is drawn, only takes about 10 minutes.
              </div>
            </div>

            <div
              className="group flex flex-col gap-2 rounded-lg border p-5 hover:border-red-500"
              tabIndex={3}
            >
              <div className="flex cursor-pointer items-center justify-between">
                <span className="font-bold">
                  How can I encourage others to donate?
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5 transition-all duration-500 group-focus:-rotate-180 group-focus:text-red-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
                Share your donation experience, bring friends and family to
                donate with you, and spread awareness about the importance of
                blood donation through social media and community events.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

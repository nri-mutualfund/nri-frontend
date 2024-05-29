"use client";
import Image from "next/image";
import React from "react";
import { IoChevronDownOutline } from "react-icons/io5";
const page = () => {
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("data", data);
  };
  return (
    <div className="bg-white sm:pt-4 pb-12">
      <div className="max-w-screen-2xl mx-auto py-6 xl:px-40 md:px-16 px-10">
        <div className="mx-auto text-center max-w-3xl">
          <h2 className="text-gray-800 mx-auto font-medium text-center  leading-[40px]">
            Meet our <span className="text-primary">NRI Ambassadors</span>{" "}
            across the Globe
          </h2>
          <p className="font-extralight mt-1 text-sm text-center max-w-2xl mx-auto">
            {`If you are a non-resident Indian (NRI) who shares our vision of India
          becoming the world's largest economy, we invite you to join our
          prestigious 'Ambassador' program. As an Ambassador, you will enjoy
          exclusive perks and benefits. Apply now to become a part of India's
          growth story and help shape its promising future.`}
          </p>
          <p className="font-extralight mt-10 text-sm text-centerl">
            Trusted by People working in reputed companies across the globe
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-2  max-w-md mx-auto">
            <Image
              src="/assets/apple.png"
              alt="Your Image Alt Text"
              className="w-[100px] transition-all duration-300 hover:scale-110"
              width={500}
              height={1}
            />
            <Image
              src="/assets/safaricom.png"
              alt="Your Image Alt Text"
              className="w-[130px] transition-all duration-300 hover:scale-110"
              width={500}
              height={1}
            />
            <Image
              src="/assets/jpmorgan.png"
              alt="Your Image Alt Text"
              className="w-[130px] transition-all duration-300 hover:scale-110"
              width={500}
              height={1}
            />
            <Image
              src="/assets/barclays.png"
              alt="Your Image Alt Text"
              className="w-[130px] transition-all duration-300 hover:scale-110"
              width={500}
              height={1}
            />
          </div>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md bg-white md:px-10 py-8 rounded-sm md:drop-shadow-lg">
          <p className="text-lg font-semibold tracking-tight text-gray-900 text-center">
            Apply in 20 seconds
          </p>
          <p className="mt-1 text-sm text-gray-400 text-center mb-10">
            50,000+ Nris applied in last 6 months
          </p>
          <form className="space-y-6" onSubmit={submit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Your name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="name"
                  placeholder="Fullname as per passport"
                  required
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Your Email address
              </label>
              <div className=" mt-2 relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                  required
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Country
              </label>
              <div className="mt-2 relative">
                <select
                  id="country"
                  name="country"
                  defaultValue={"Choose your country"}
                  required
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 appearance-none"
                >
                  <option disabled>Choose your country</option>
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="FR">France</option>
                  <option value="GE">Germany</option>
                  <option value="IND">India</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <IoChevronDownOutline />
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Whatsapp Number
              </label>
              <div className=" mt-2 relative">
                <input
                  id="whatsapp_number"
                  name="whatsapp_number"
                  type="text"
                  placeholder="Whatsapp Number"
                  required
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Reasons for account opening(you can select multiple)
              </label>
              <div className="mt-2 relative">
                <select
                  id="reason"
                  name="reason"
                  defaultValue={"Choose your country"}
                  required
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 appearance-none"
                >
                  <option disabled>Choose your country</option>
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="FR">France</option>
                  <option value="GE">Germany</option>
                  <option value="IND">India</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <IoChevronDownOutline />
                </div>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Start Process Now
              </button>
            </div>
            <p className="mt-1 text-sm text-gray-400 text-left font-light">
              I have checked all the details and these details can be used for
              my account opening
            </p>
            <p className="mt-1 text-sm text-gray-400 text-left font-light">
              You will recieve call from bank on your whatsapp number
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;

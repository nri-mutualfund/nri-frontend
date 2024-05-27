"use client";
import GoogleAuthButton from "@/components/googleAuthButton";
import React, { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import Image from "next/image";
import moment from "moment";
const Page = () => {
  const [country, setCountry] = useState("");
  const [pan, setPan] = useState("");
  const [isFromCanadaOrUS, setOrigin] = useState(false);
  const getCodes = {
    US: "+1",
    GE: "+49",
    IND: "+91",
    FR: "+33",
    UK: "+44",
  };
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const newDate = new Date(`${data?.date}-${data?.month}-${data?.year}`)
    console.log("data", data,newDate);
    console.log("new Date",moment(newDate))
  };
  return (
    <>
      <div className="w-100% flex">
        <div className="flex w-5/12 min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=green&shade=700"
              alt="Your Company"
            />
            {/* <h2 className="mt-10 text-start font-bold leading-9 tracking-tight text-gray-900">
              Create an account
            </h2> */}
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={submit}>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Please add your PAN and Date of Birth
                </label>
                <div className="mt-2 relative">
                  <select
                    disabled
                    onChange={(e) => {
                      setCountry(e.target.value);
                    }}
                    className="px-4 pr-10 block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 appearance-none"
                  >
                    <option>United States</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <IoChevronDownOutline color="#8898aa" />
                  </div>
                </div>
                <div className="mt-2 flex gap-2 items-center">
                  <FaLock />
                  <p className="text-xs text-gray-500">
                    Your information is always protected
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  PAN
                </label>
                <div className="mt-2 flex gap-4">
                  <input
                    value={pan}
                    onChange={(e) => setPan(e.target.value)}
                    autoComplete="off"
                    className=" px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  />
                  <button
                    type="button"
                    className="flex px-6 justify-center rounded-md bg-primary py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    Check
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Date of Birth
                </label>
                <div className="mt-2 flex items-center gap-2">
                  <input
                    id="date"
                    type="text"
                    name="date"
                    autoComplete="off"
                    maxLength={2}
                    required
                    placeholder="DD"
                    className=" px-2 block w-12 rounded-md border-0 py-1.5 text-center text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  />
                  <div className="h-[1px] bg-gray-300 w-4"></div>
                  <input
                    id="month"
                    type="text"
                    name="month"
                    autoComplete="off"
                    maxLength={2}
                    required
                    placeholder="MM"
                    className=" px-2 block w-12 rounded-md border-0 py-1.5 text-gray-900 text-center shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  />
                  <div className="h-[1px] bg-gray-300 w-4"></div>
                  <input
                    id="year"
                    type="text"
                    name="year"
                    autoComplete="off"
                    minLength={4}
                    maxLength={4}
                    required
                    placeholder="YYYY"
                    className=" px-2 block w-24 rounded-md border-0 py-1.5 text-gray-900 text-center shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="mt-4 w-full rounded-md bg-secondary px-4 py-4 relative">
                <p className="underline underline-offset-4 text-gray-700">
                  Why do we ask this?
                </p>
                <p className="text-xs mt-4 md:max-w-[60%] text-gray-500">{`It's a mandatory request from SEBI. All
                 investors must provide their PAN details to
                 open investment account.`}</p>
                <Image
                  src="/assets/flag.png"
                  alt="Your Image Alt Text"
                  className="w-[30px] absolute right-4 top-4"
                  width={500}
                  height={1}
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="flex w-1/3 justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Continue
                </button>
                <button
                  type="button"
                  className="flex w-1/3 justify-center rounded-md border-primary border px-3 py-1.5 text-sm font-semibold leading-6 text-primary shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Skip
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* img */}
        <div className="w-7/12 h-screen lg:block hidden">
          <img
            src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9"
            className="w-full h-full"
            alt="wfdasdsa"
          />
        </div>
      </div>
    </>
  );
};

export default Page;

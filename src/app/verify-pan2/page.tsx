"use client";
import GoogleAuthButton from "@/components/googleAuthButton";
import React, { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useMutation, useQuery } from "@tanstack/react-query";
import { addDetails2, getDetails } from "./api";
import { BsFillFlagFill } from "react-icons/bs";
import nProgress from "nprogress";
import { toast } from "react-toastify";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { addDetails } from "../verify-pan/api";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const [country, setCountry] = useState("");
  const [pan, setPan] = useState("");
  const [checked, setChecked] = useState(false);
  const [formData, setFormData] = useState({});
  const { data } = useQuery({
    queryKey: ["key22"],
    queryFn: getDetails,
  });
  const { mutate, data: panDetails } = useMutation({
    mutationFn: addDetails2,
    onSuccess: (data) => {
      if (data?.data?.status === "valid") {
        setChecked(true);
        toast("pan verification done!");
      } else if (data?.data?.status === "invalid") {
        toast("invalid pan details!");
      } else {
        toast("failed to verify!");
      }
    },
    onError: (error) => {
      console.log("error", error);
    },
  });
  const { mutate: submitPanDetail } = useMutation({
    mutationFn: addDetails,
    onSuccess: (data) => {
      nProgress.start();
      router.push("/profile");
    },
    onError: (error) => {
      console.log("error", error);
    },
  });
  const submitData = () => {
    submitPanDetail(formData);
  };
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const newDate = `${data?.date}/${data?.month}/${data?.year}`;
    const newData = {
      pan: data.pan,
      dob: newDate,
    };
    console.log("data", newData);
    setFormData({ ...newData, pan_verified: true });
    mutate(newData);
  };
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-10 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="h-10 w-auto mx-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=green&shade=700"
            alt="Your Company"
          />
          {/* <h2 className="mt-10 text-start font-bold leading-9 tracking-tight text-gray-900">
              Create an account
            </h2> */}
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white md:px-10 py-10 rounded-md md:shadow-md md:border border-gray-200">
          <form className="space-y-6" onSubmit={submit}>
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Please add your PAN and Date of Birth
              </label>
              <div className="mt-2 relative">
                <select
                  disabled
                  className="px-4 pr-10 block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 appearance-none"
                >
                  <option>{data?.located_at}</option>
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
                <div className="px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 flex gap-2 items-center justify-between">
                  <input
                    id="pan"
                    type="text"
                    name="pan"
                    autoComplete="off"
                    required
                    className=" "
                    maxLength={10}
                  />
                  {checked && (
                    <IoCheckmarkCircleOutline size={20} color="#008000" />
                  )}
                </div>

                <button
                  type="submit"
                  disabled={checked}
                  className="flex px-6 justify-center rounded-md bg-primary py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Check
                </button>
              </div>
              {checked && (
                <label className="block text-sm font-medium leading-6 text-primary mt-2">
                  Great, your PAN {panDetails?.data?.pan} is KYC complaint!
                </label>
              )}
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
              <Link
                href={
                  "https://www.amfiindia.com/investor-corner/investor-center/kyc.html"
                }
                target="_blank"
              >
                <p className="underline underline-offset-4 text-gray-700">
                  Why do we ask this?
                </p>
              </Link>
              <p className="text-xs mt-4 md:max-w-[60%] text-gray-500">{`It's a mandatory request from SEBI. All
                 investors must provide their PAN details to
                 open investment account.`}</p>

              <BsFillFlagFill className="absolute right-4 top-4" size={30} />
            </div>
            <div className="">
              {checked ? (
                <button
                  type="button"
                  onClick={() => {
                    submitData();
                  }}
                  className="flex w-1/3 justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Continue
                </button>
              ) : (
                <Link
                  href={"/skip"}
                  onClick={() => {
                    nProgress.start();
                  }}
                >
                  <button
                    type="button"
                    className="flex w-1/3 justify-center rounded-md border-primary border px-3 py-1.5 text-sm font-semibold leading-6 text-primary shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ml-auto"
                  >
                    Skip
                  </button>
                </Link>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;

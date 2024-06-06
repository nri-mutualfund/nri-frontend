"use client";
import ProgressBar from "@/components/ProgressBar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import nProgress from "nprogress";
import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
const Page = () => {
  const router = useRouter();
  const [status, setStatus] = useState("");
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    nProgress.start();
    router.push("/bank-details");
    console.log("data", data);
  };
  return (
    <div className="px-10 md:px-20 lg:px-40  py-14 bg-secondary">
      <ProgressBar widthPercentage={55} />
      <form
        className="border rounded-lg p-14 mt-10 bg-white shadow-sm"
        onSubmit={submit}
      >
        <div className="grid grid-cols-1 md:grid-cols-5 gap-x-20 border-b border-gray-900/10 pb-0">
          <div className="pb-12 col-span-2">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Create your investor profile
            </h2>
            <p className="mt-1 text-xs text-gray-600 font-light">
              Income details
            </p>
          </div>
          <div className="col-span-3">
            <div className="pb-12">
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="income_source"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    <span className="text-red-500">*</span> Income Source
                  </label>
                  <div className="mt-2">
                    <select
                      id="income_source"
                      name="income_source"
                      autoComplete="income_source"
                      required
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option value={""}>Select Income Source</option>
                      <option value={"Job"}>Job</option>
                      <option value={"Bussiness"}>Bussiness</option>
                      <option value={"Other"}>Other</option>
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="occupation"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    <span className="text-red-500">*</span> Occupation
                  </label>
                  <div className="mt-2">
                    <select
                      id="occupation"
                      name="occupation"
                      autoComplete="occupation"
                      required
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option value={""}>Select Occupation</option>
                      <option value={"Job"}>Job</option>
                      <option value={"Bussiness"}>Bussiness</option>
                      <option value={"Other"}>Other</option>
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="income_slab"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    <span className="text-red-500">*</span> Income Slab
                  </label>
                  <div className="mt-2">
                    <select
                      id="income_slab"
                      name="income_slab"
                      autoComplete="income_slab"
                      required
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option value={""}>Select Income Slab</option>
                      <option value={"Job"}>Job</option>
                      <option value={"Bussiness"}>Bussiness</option>
                      <option value={"Other"}>Other</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-x-20 border-b border-gray-900/10 pt-12 pb-4">
          <div className="pb-12 col-span-2"></div>
          <div className="col-span-3">
            <div className="pb-12">
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="income_slab"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    <span className="text-red-500">*</span> Select if any of
                    these apply to you
                  </label>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="income_slab"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  ></label>
                </div>
                <div className="sm:col-span-3">
                  <div
                    className={`w-full block rounded-md border py-2 px-4 ${
                      status === "I’m Married" ? "border-primary" : ""
                    }`}
                    onClick={() => {
                      setStatus("I’m Married");
                    }}
                  >
                    <p
                      className={`text-sm ${
                        status === "I’m Married" ? "text-primary" : ""
                      }`}
                    >
                      I’m Married
                      <br />
                      <br />
                    </p>
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <div
                    className={`w-full block rounded-md border py-2 px-4 ${
                      status ===
                      "I have income from outside of India and I pay tax in other countries."
                        ? "border-primary"
                        : ""
                    }`}
                    onClick={() => {
                      setStatus(
                        "I have income from outside of India and I pay tax in other countries."
                      );
                    }}
                  >
                    <p
                      className={`text-sm ${
                        status ===
                        "I have income from outside of India and I pay tax in other countries."
                          ? "text-primary"
                          : ""
                      }`}
                    >
                      I have income from outside of India and I pay tax in other
                      countries.
                    </p>
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <div
                    className={`w-full block rounded-md border py-2 px-4 ${
                      status ===
                      "I'm a politically exposed person in a foreign country"
                        ? "border-primary"
                        : ""
                    }`}
                    onClick={() => {
                      setStatus(
                        "I'm a politically exposed person in a foreign country"
                      );
                    }}
                  >
                    <p
                      className={`text-sm ${
                        status ===
                        "I'm a politically exposed person in a foreign country"
                          ? "text-primary"
                          : ""
                      }`}
                    >
                      {`I'm a politically exposed person in a foreign country`}
                      <br />
                      <br />
                    </p>
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <div
                    className={`w-full block rounded-md border py-2 px-4 ${
                      status ===
                      "Are you related to politically exposed person in a foreign country?"
                        ? "border-primary"
                        : ""
                    }`}
                    onClick={() => {
                      setStatus(
                        "Are you related to politically exposed person in a foreign country?"
                      );
                    }}
                  >
                    <p
                      className={`text-sm ${
                        status ===
                        "Are you related to politically exposed person in a foreign country?"
                          ? "text-primary"
                          : ""
                      }`}
                    >
                      Are you related to politically exposed person in a foreign
                      country?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {status ===
          "I have income from outside of India and I pay tax in other countries." && (
          <div className="grid grid-cols-1 md:grid-cols-5 gap-x-20 border-b border-gray-900/10 pt-12 pb-4">
            <div className="col-span-2">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                TAX Residency 1 Details
              </h2>
            </div>
            <div className="col-span-3">
              <div className="pb-12">
                <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="tax_residency"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      <span className="text-red-500">*</span> TAX Residency
                    </label>
                    <div className="mt-2">
                      <select
                        id="tax_residency"
                        name="tax_residency"
                        autoComplete="tax_residency"
                        required
                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      >
                        <option value={""}>Select TAX Residency</option>
                        <option value={"India"}>India</option>
                        <option value={"United States"}>United States</option>
                        <option value={"United Kingdom"}>United Kingdom</option>
                      </select>
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="tin_or_pan"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      <span className="text-red-500">*</span> TIN/PAN Details
                    </label>
                    <div className="mt-2">
                      <input
                        id="tin_or_pan"
                        name="tin_or_pan"
                        autoComplete="tin_or_pan"
                        required
                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-10 flex items-center justify-end gap-x-6">
          <Link href={"/investor-profile"}>
            <button
              type="submit"
              className="bg-white text-primary  px-2 md:px-8 py-2 rounded-lg cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 duration-300 border border-primary"
            >
              Back
            </button>
          </Link>

          <button
            type="submit"
            className="bg-primary text-white  px-2 md:px-8 py-2 rounded-lg cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 duration-300"
          >
            Save & Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;

"use client";
import ProgressBar from "@/components/ProgressBar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import nProgress from "nprogress";
import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
const Page = () => {
  const [status, setStatus] = useState("");
  const router = useRouter();
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("data", data);
    nProgress.start();
    router.push("/nominee-details");
  };
  return (
    <div className="px-10 md:px-20 lg:px-40  py-14 bg-secondary min-h-screen">
      <ProgressBar widthPercentage={66} />
      <form
        className="border rounded-lg p-14 mt-10 bg-white shadow-sm"
        onSubmit={submit}
      >
        <div className="grid grid-cols-1 md:grid-cols-5 gap-x-20 border-b border-gray-900/10 pb-0">
          <div className="pb-12 col-span-2">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Add Bank Account
            </h2>
          </div>
          <div className="col-span-3">
            <div className="pb-12">
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="account_type"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    <span className="text-red-500">*</span> Bank Account Type
                  </label>
                  <div className="mt-2">
                    <select
                      id="account_type"
                      name="account_type"
                      autoComplete="account_type"
                      required
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option value={""}>Select Account Type</option>
                      <option value={"NRE"}>NRE</option>
                      <option value={"NRO"}>NRO</option>
                    </select>
                    <Link
                      href={"https://cleartax.in/s/nre-nro-accounts"}
                      target="_blank"
                    >
                      <p className="underline underline-offset-4 text-xs font-light mt-1 text-gray-400">
                        What is NRE/NRO?
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="sm:col-span-3"></div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="account_number"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    <span className="text-red-500">*</span> Account Number
                  </label>
                  <div className="mt-2">
                    <input
                      id="account_number"
                      name="account_number"
                      autoComplete="account_number"
                      required
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="ifsc_code"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    <span className="text-red-500">*</span> IFSC Code
                  </label>
                  <div className="mt-2">
                    <input
                      id="ifsc_code"
                      name="ifsc_code"
                      autoComplete="ifsc_code"
                      required
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="verification_document"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    <span className="text-red-500">*</span> Verification
                    Document
                  </label>
                  <div className="mt-2">
                    <select
                      id="verification_document"
                      name="verification_document"
                      autoComplete="verification_document"
                      required
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option value={""}>Select Document</option>
                      <option value={"PAN"}>PAN</option>
                      <option value={"Adhar"}>Adhar</option>
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="verification_document_media"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    <br />
                  </label>
                  <div className="mt-2">
                    <input
                      id="verification_document_media"
                      name="verification_document_media"
                      autoComplete="verification_document_media"
                      type="file"
                      required
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-end gap-x-6">
          <Link href={"/income-details"}>
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

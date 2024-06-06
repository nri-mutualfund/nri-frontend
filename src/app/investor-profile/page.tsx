"use client";
import ProgressBar from "@/components/ProgressBar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import nProgress from "nprogress";
import React from "react";
import { FaLock } from "react-icons/fa";
const Page = () => {
  const router = useRouter();
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("data", data);
    nProgress.start();
    router.push("/income-details");
  };
  return (
    <div className="px-10 md:px-20 lg:px-40  py-14 bg-secondary">
      <ProgressBar widthPercentage={44} />
      <form
        className="border rounded-lg p-14 mt-10 bg-white shadow-sm"
        onSubmit={submit}
      >
        <div className="grid grid-cols-1 md:grid-cols-5 gap-x-20 border-b border-gray-900/10 pb-0">
          <div className="pb-12 col-span-2">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Create your investor profile
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Upload files with supported types - jpg, jpeg, png, pdf
            </p>
            <p className="mt-1 text-sm leading-6 text-gray-600 flex items-center gap-2">
              <FaLock color="#000" /> Your information is always protected
            </p>
          </div>
          <div className="col-span-3">
            <div className="pb-12">
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <h2 className="text-base font-semibold leading-7 text-gray-900">
                    <span className="text-red-500">*</span> Hand Signature Photo
                  </h2>
                  <p className="mt-1 text-xs text-gray-600 font-light">
                    On a clear and white background Ensure it matches your PAN
                    and Passport
                  </p>
                </div>

                <div className="sm:col-span-3">
                  <input
                    id="hand_signature_media"
                    name="hand_signature_media"
                    type="file"
                    autoComplete="hand_signature_media"
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="sm:col-span-3">
                  <h2 className="text-base font-semibold leading-7 text-gray-900">
                    <span className="text-red-500">*</span> Passport Front Page
                  </h2>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="passport_front_page_media">
                    <input
                      id="passport_front_page_media"
                      name="passport_front_page_media"
                      type="file"
                      autoComplete="passport_front_page_media"
                      required
                      // className="hidden"
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </label>
                </div>
                <div className="sm:col-span-3">
                  <h2 className="text-base font-semibold leading-7 text-gray-900">
                    <span className="text-red-500">*</span> Indian PAN Card
                  </h2>
                  <p className="mt-1 text-xs text-gray-600 font-light">
                    sample
                  </p>
                </div>

                <div className="sm:col-span-3">
                  <input
                    id="indian_pan_card_media"
                    name="indian_pan_card_media"
                    type="file"
                    autoComplete="indian_pan_card_media"
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="sm:col-span-3">
                  <h2 className="text-base font-semibold leading-7 text-gray-900">
                    <span className="text-red-500">*</span> Passport Size Photo
                  </h2>
                  <p className="mt-1 text-xs text-gray-600 font-light">
                    A clear and a recent picture
                  </p>
                </div>

                <div className="sm:col-span-3">
                  <input
                    id="passport_size_photo_media"
                    name="passport_size_photo_media"
                    type="file"
                    autoComplete="passport_size_photo_media"
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="sm:col-span-3">
                  <h2 className="text-base font-semibold leading-7 text-gray-900">
                    <span className="text-red-500">*</span> Overseas Citizen of
                    India (OCI) Card
                  </h2>
                </div>

                <div className="sm:col-span-3">
                  <input
                    id="oci_card_media"
                    name="oci_card_media"
                    type="file"
                    autoComplete="oci_card_media"
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-end gap-x-6">
          <Link href={"/profile"}>
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

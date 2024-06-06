"use client";
import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getProfileDetails, addProfileDetails } from "./api";
import { toast } from "react-toastify";
import nProgress from "nprogress";
import { useRouter } from "next/navigation";
import ProgressBar from "@/components/ProgressBar";
interface ProfileData {
  first_name?: string;
  phone_number?: string;
  email?: string;
}

const Page = () => {
  const router = useRouter();
  const { data } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfileDetails,
  });
  const [name, setName] = useState(data?.first_name ?? "");
  const [phone, setPhone] = useState(data?.phone_number ?? "");
  const [email, setEmail] = useState(data?.email ?? "");
  const { isSuccess, mutate } = useMutation({
    mutationKey: ["investorProfile1"],
    mutationFn: addProfileDetails,
    onSuccess: (data) => {
      nProgress.start();
      router.push("/investor-profile");
    },
    onError: (error) => {
      console.log("error", error);
      toast("error occured");
    },
  });
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const address = JSON.stringify({
      address1: data?.address_line1,
      address2: data?.address_line2,
      city: data?.city,
      state: data?.state,
      zipcode: data?.zipcode,
      country: data?.country,
    });
    const form = new FormData();
    form.append("country_of_birth", data?.country_of_birth);
    form.append("city_of_birth", data?.city_of_birth);
    form.append("father_or_spouse_name", data?.father_or_spouse_name);
    form.append("gender", data?.gender);
    form.append("residential_address", address);
    form.append("phone_number", data?.phone);
    form.append("full_name", data?.full_name);

    // form.append("address_proof_media", data?.address_proof);

    mutate(form);
  };

  console.log("data", data);
  return (
    <div className="px-10 md:px-20 lg:px-40  py-14 bg-secondary">
      <ProgressBar widthPercentage={33} />
      <form
        className="border rounded-lg p-14 mt-10 bg-white shadow-sm"
        onSubmit={submit}
      >
        <div className="grid grid-cols-1 md:grid-cols-5 gap-x-20 border-b border-gray-900/10 pb-0">
          <div className="pb-12 col-span-2">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Profile
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>
          <div className="col-span-3">
            <div className="pb-12">
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="full_name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    <span className="text-red-500">*</span> Legal Full Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      // value={name}
                      // onChange={(e) => setName(e.target.value)}
                      defaultValue={name}
                      name="full_name"
                      id="full_name"
                      autoComplete="given-name"
                      required
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="country_of_birth"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    <span className="text-red-500">*</span> Country of Birth
                  </label>
                  <div className="mt-2">
                    <select
                      id="country_of_birth"
                      name="country_of_birth"
                      autoComplete="country_of_birth"
                      required
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option value={""}>Select Country</option>
                      <option value={"United States"}>United States</option>
                      <option value={"Canada"}>Canada</option>
                      <option value={"Mexico"}>Mexico</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    <span className="text-red-500">*</span> Email
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="email"
                      required
                      disabled
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="city_of_birth"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    <span className="text-red-500">*</span> City of Birth
                  </label>
                  <div className="mt-2">
                    <input
                      id="city_of_birth"
                      name="city_of_birth"
                      type="text"
                      autoComplete="city_of_birth"
                      required
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    <span className="text-red-500">*</span> Phone Number
                  </label>
                  <div className="mt-2">
                    <input
                      id="phone"
                      name="phone"
                      type="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      autoComplete="phone"
                      required
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="father_or_spouse_name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    <span className="text-red-500">*</span> Father’s or Spouse’s
                    Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="father_or_spouse_name"
                      name="father_or_spouse_name"
                      type="text"
                      autoComplete="father_or_spouse_name"
                      required
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="gender"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    <span className="text-red-500">*</span> Gender
                  </label>
                  <div className="mt-2">
                    <select
                      id="gender"
                      name="gender"
                      autoComplete="gender"
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option value={""}>Select Gender</option>
                      <option value={"Male"}>Male</option>
                      <option value={"Female"}>Female</option>
                      <option value={"Other"}>Other</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-x-20 border-b border-gray-900/10 py-12">
          <div className="pb-12 col-span-2">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Current Residential Address
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>
          <div className="col-span-3">
            <div className="pb-12">
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="address_line1"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    <span className="text-red-500">*</span> Address - Line 1
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="address_line1"
                      id="address_line1"
                      autoComplete="given-name"
                      required
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="address_line2"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    <span className="text-red-500">*</span> Address - Line 2
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="address_line2"
                      id="address_line2"
                      autoComplete="given-name"
                      required
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    <span className="text-red-500">*</span> City
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      autoComplete="given-name"
                      required
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    <span className="text-red-500">*</span> State
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="state"
                      id="state"
                      autoComplete="given-name"
                      required
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="zipcode"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    <span className="text-red-500">*</span> Zip Code
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="zipcode"
                      id="zipcode"
                      required
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    <span className="text-red-500">*</span> Country
                  </label>
                  <div className="mt-2">
                    <select
                      id="country"
                      name="country"
                      required
                      autoComplete="country-name"
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option value={""}>Select Country</option>
                      <option value={"United States"}>United States</option>
                      <option value={"Canada"}>Canada</option>
                      <option value={"Mexico"}>Mexico</option>
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <p>
                    <span className="text-red-500">*</span> Current Address
                    Proof
                  </p>
                  <p className="text-sm font-light text-gray-300 mt-4">
                    Driver/Learner License/ID Card (Unexpired) or Utility Bill
                    (dated within 3 months) or Bank Statement (dated within 3
                    months) Note: Credit card statement is not an acceptable
                    document
                  </p>
                </div>
                <div className="sm:col-span-3">
                  <div className="mt-2">
                    <input
                      id="address_proof"
                      name="address_proof"
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

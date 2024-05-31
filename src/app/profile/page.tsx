"use client";
import React from "react";

const page = () => {
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("data", data);
  };
  return (
    <div className="px-10 md:px-20 lg:px-40  py-14">
      <form className="" onSubmit={submit}>
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
                    Legal Full Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
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
                    Country of Birth
                  </label>
                  <div className="mt-2">
                    <select
                      id="country_of_birth"
                      name="country_of_birth"
                      autoComplete="country_of_birth"
                      required
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="city_of_birth"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    City of Birth
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
                    Phone Number
                  </label>
                  <div className="mt-2">
                    <input
                      id="phone"
                      name="phone"
                      type="phone"
                      autoComplete="phone"
                      required
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="father_name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Father’s or Spouse’s Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="father_name"
                      name="father_name"
                      type="text"
                      autoComplete="father_name"
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
                    Gender
                  </label>
                  <div className="mt-2">
                    <select
                      id="gender"
                      name="gender"
                      autoComplete="gender"
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
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
                    Address - Line 1
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
                    Address - Line 2
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
                    City
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
                    State
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
                    Zip Code
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
                    Country
                  </label>
                  <div className="mt-2">
                    <select
                      id="country"
                      name="country"
                      required
                      autoComplete="country-name"
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <p>Current Address Proof</p>
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

export default page;

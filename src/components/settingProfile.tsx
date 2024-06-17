import React from "react";

const SettingProfile = () => {
  return (
    <div>
      <form
        className="divide-y divide-gray-200 lg:col-span-9"
        action="#"
        method="POST"
      >
        <div className="py-6 md:px-4 md:p-6 lg:pb-8 text-gray-900">
          <h3 className="text-md font-medium">Personal details</h3>
          <div className="mt-6 grid grid-cols-12 gap-6">
            <div className="col-span-12 sm:col-span-6">
              <label className="block text-sm font-medium text-gray-600">
                Legal First name
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary500 focus:outline-none focus:ring-primary500 sm:text-sm placeholder:text-gray-400 placeholder:italic"
                placeholder="John"
              />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label className="block text-sm font-medium text-gray-600">
                Legal Last name
              </label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary500 focus:outline-none focus:ring-primary500 sm:text-sm placeholder:text-gray-400 placeholder:italic"
                placeholder="Doe"
              />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary500 focus:outline-none focus:ring-primary500 sm:text-sm placeholder:text-gray-400 placeholder:italic disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500"
                disabled
                value="christopher@shlokaconcepts.com"
              />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <div className="relative rounded-md shadow-sm">
                <label className="block text-sm font-medium leading-6 text-gray-600">
                  Mobile
                </label>
                <input
                  type="text"
                  name="mobile"
                  id="mobile"
                  className="block w-full rounded-md pl-28 border border-gray-300 py-1.5 px-3 shadow-sm focus:border-primary500 focus:outline-none focus:ring-primary500 sm:text-sm placeholder:text-gray-400 placeholder:italic sm:leading-6"
                  placeholder="(555) 987-6543"
                ></input>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label className="block text-sm font-medium text-gray-600">
                Date of Birth
              </label>
              <input
                type="text"
                name="dob"
                id="dob"
                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary500 focus:outline-none focus:ring-primary500 sm:text-sm placeholder:text-gray-400 placeholder:italic disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500"
                placeholder="00-00-0000"
              ></input>
            </div>
          </div>
        </div>
        <div className="py-6 md:px-4 md:p-6 lg:pb-8 text-gray-900">
          <h3 className="text-md font-medium">Document numbers</h3>
          <div className="mt-6 grid grid-cols-12 gap-6">
            <div className="col-span-12 sm:col-span-6">
              <label className="block text-sm font-medium text-gray-600">
                PAN (Permanent Account Number)
              </label>
              <input
                type="password"
                name="pan"
                id="pan"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary500 focus:outline-none focus:ring-primary500 sm:text-sm placeholder:text-gray-400 placeholder:italic"
                placeholder="ABCDE1234F (10 digit)"
              ></input>
            </div>
          </div>
        </div>
        <div className="py-6 md:px-4 md:p-6 lg:pb-8 text-gray-900">
          <h3 className="text-md font-medium">Current Residential address</h3>
          <div className="mt-6 grid grid-cols-12 gap-6">
            <div className="-mt-4 col-span-12 sm:col-span-6">
              <label className="block text-sm font-medium text-gray-600">
                Address - Line 1
              </label>
              <input
                type="text"
                name="address1"
                id="address1"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary500 focus:outline-none focus:ring-primary500 sm:text-sm placeholder:text-gray-400 placeholder:italic"
                placeholder="123 Main St"
              ></input>
            </div>
            <div className="sm:-mt-4 col-span-12 sm:col-span-6">
              <label className="block text-sm font-medium text-gray-600">
                Address - Line 2
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="address2"
                  id="address2"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary500 focus:outline-none focus:ring-primary500 sm:text-sm placeholder:text-gray-400 placeholder:italic"
                  placeholder="Apt 789"
                ></input>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label className="block text-sm font-medium text-gray-600">
                City
              </label>
              <input
                type="text"
                name="city"
                id="city"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary500 focus:outline-none focus:ring-primary500 sm:text-sm placeholder:text-gray-400 placeholder:italic"
                placeholder="New York"
              ></input>
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label className="block text-sm font-medium text-gray-600">
                State
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="state"
                  id="state"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary500 focus:outline-none focus:ring-primary500 sm:text-sm placeholder:text-gray-400 placeholder:italic"
                  placeholder="New York"
                ></input>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label className="block text-sm font-medium text-gray-600">
                Zip Code
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="zipcode"
                  id="zipcode"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary500 focus:outline-none focus:ring-primary500 sm:text-sm placeholder:text-gray-400 placeholder:italic"
                  placeholder="10001"
                ></input>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label className="block text-sm font-medium text-gray-600">
                Country of Residence
              </label>
              <div className="relative mt-1">
                <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-sm border border-gray-300 focus:border-primary500 focus:outline-none focus:ring-primary500 focus:ring-1 sm:text-sm">
                  <input
                    className="w-full border-none py-2 pl-3 pr-10 sm:text-sm leading-5 focus:ring-0"
                    id="headlessui-combobox-input-:rjs:"
                    type="text"
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-4 items-center">
          <div className="flex-1 justify-start text-sm text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="inline w-4 h-4 mr-1 -mt-1"
            >
              <path
                fill-rule="evenodd"
                d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Your information is encrypted and secure
          </div>
          <div className="inline-flex justify-end py-4 px-4 sm:px-6">
            <button
              type="submit"
              className="ml-5 inline-flex justify-center rounded-md border border-transparent bg-primary py-2 px-8 text-sm font-medium text-white shadow-sm hover:bg-primary700 focus:outline-none focus:ring-2 focus:ring-primary500 focus:ring-offset-2 disabled:bg-gray-300"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SettingProfile;

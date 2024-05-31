"use client";
import GoogleAuthButton from "@/components/googleAuthButton";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { addDetails } from "./api";
const Page = () => {
  const router = useRouter();
  const [country, setCountry] = useState("");
  const [residentialStatus, setStaus] = useState("");
  const [isFromCanadaOrUS, setOrigin] = useState(false);
  const getCodes: { [key: string]: string } = {
    US: "+1",
    GE: "+49",
    CA: "+1",
    FR: "+33",
    UK: "+44",
    IND: "+91",
  };
  const getFullName: { [key: string]: string } = {
    US: "United States",
    GE: "Germany",
    IND: "India",
    FR: "France",
    UK: "United Kingdom",
  };
  const { mutate } = useMutation({
    mutationKey: ["key1"],
    mutationFn: addDetails,
    onSuccess: (data) => {
      router.push("verify-pan2");
    },
    onError: (error) => {},
  });
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    let newData = {
      located_at: getFullName[data?.country],
      phone_number: getCodes[data?.country] + data.phone,
    };
    if (country !== "IND") {
      newData = {
        ...newData,
        residency_status: residentialStatus,
      };

      if (data?.isFromCanadaOrUS === "on") {
        newData = {
          ...newData,
          is_usa_or_canada: true,
        };
      }
    }
    mutate(newData);
  };
  return (
    <>
      <div className="flex min-h-screen flex-1 flex-col justify-start px-10 py-12 lg:px-8">
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
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Hey, where are you located?
              </label>
              <div className="mt-2 relative">
                <select
                  id="country"
                  name="country"
                  defaultValue={"Choose your country"}
                  onChange={(e) => {
                    setCountry(e.target.value);
                  }}
                  className="px-4 pr-10 block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 appearance-none"
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

            {country !== "" && country === "IND" && (
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Phone Number
                </label>
                <div className="mt-2">
                  <div className="flex w-full rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 pr-1">
                    <p className="border-r-2 px-4 py-1">{getCodes[country]}</p>
                    <input
                      id="phone"
                      name="phone"
                      type="phone"
                      autoComplete="phone"
                      required
                      className="block w-full placeholder:text-gray-400 px-4 py-1 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            )}
            {country !== "" && country !== "IND" && (
              <>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Please select your residency status
                  </label>
                  <div className="mt-2">
                    <div
                      onClick={() => {
                        setStaus("NRI");
                      }}
                      className={`px-2 block w-full text-xs rounded-md border-0 py-2.5 ${
                        residentialStatus === "NRI"
                          ? "text-gray-700"
                          : "text-gray-300"
                      } shadow-sm ring-1 ring-inset ${
                        residentialStatus === "NRI"
                          ? "ring-gray-700"
                          : "ring-gray-300"
                      }`}
                    >
                      <p>NRI</p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div
                      onClick={() => {
                        setStaus("PIO/OCI - Non Resident");
                      }}
                      className={`px-2 block w-full text-xs rounded-md border-0 py-2.5 ${
                        residentialStatus === "PIO/OCI - Non Resident"
                          ? "text-gray-700"
                          : "text-gray-300"
                      } shadow-sm ring-1 ring-inset  ${
                        residentialStatus === "PIO/OCI - Non Resident"
                          ? "ring-gray-700"
                          : "ring-gray-300"
                      }`}
                    >
                      <p>PIO/OCI - Non Resident</p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div
                      onClick={() => {
                        setStaus("PIO/OCI - Resident Indian");
                      }}
                      className={`px-2 block w-full text-xs rounded-md border-0 py-2.5 ${
                        residentialStatus === "PIO/OCI - Resident Indian"
                          ? "text-gray-700"
                          : "text-gray-300"
                      } shadow-sm ring-1 ring-inset  ${
                        residentialStatus === "PIO/OCI - Resident Indian"
                          ? "ring-gray-700"
                          : "ring-gray-300"
                      }`}
                    >
                      <p>PIO/OCI - Resident Indian</p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div
                      onClick={() => {
                        setStaus("Mariner/Seafarer/Sailor");
                      }}
                      className={`px-2 block w-full text-xs rounded-md border-0 py-2.5 ${
                        residentialStatus === "Mariner/Seafarer/Sailor"
                          ? "text-gray-700"
                          : "text-gray-300"
                      } shadow-sm ring-1 ring-inset  ${
                        residentialStatus === "Mariner/Seafarer/Sailor"
                          ? "ring-gray-700"
                          : "ring-gray-300"
                      }`}
                    >
                      <p>Mariner/Seafarer/Sailor</p>
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="phone2"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    {residentialStatus === "NRI" ||
                    residentialStatus === "PIO/OCI - Non Resident"
                      ? "Overseas Phone Number"
                      : "Phone Number"}
                  </label>
                  <div className="mt-2">
                    <div className="flex w-full rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 pr-1">
                      <p className="border-r-2 px-4 py-1">
                        {getCodes[country]}
                      </p>
                      <input
                        id="phone"
                        name="phone"
                        type="phone"
                        autoComplete="phone"
                        required
                        className="block w-full placeholder:text-gray-400 px-4 py-1 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    name="isFromCanadaOrUS"
                    className="w-4 h-4 text-primary bg-primary border-gray-300 rounded"
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ms-2 text-sm font-medium text-gray-700"
                  >
                    I’m from US / Canada
                  </label>
                </div>
              </>
            )}

            <div>
              {country !== "" && (
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Next
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;

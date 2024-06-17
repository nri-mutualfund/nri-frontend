"use client";
import ProgressBar from "@/components/ProgressBar";
import { useMutation, useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import nProgress from "nprogress";
import React, { useEffect, useState } from "react";
import { FaLock } from "react-icons/fa";
import { addProfileDetails, getInvestorProfileDetails } from "../profile/api";
import { toast } from "react-toastify";
import { IoCloseCircleOutline } from "react-icons/io5";
import Loader from "@/components/Loader";
import { incomeBrackets, incomeTypes } from "@/utility/values";
import { CustomError } from "@/utility/type";

type NomineeDetail = {
  tax_residency: string;
  tin_or_pan: string;
};
type FormTypes = {
  income_source: string;
  occupation: string;
  income_slab: string;
  status_applies: string[];
  tax_residency_data?: any[]; // Optional property
};
const Page = () => {
  const router = useRouter();
  const [status, setStatus] = useState<string[]>([]);

  const [taxResidency, setTaxResidency] = useState<NomineeDetail[]>([
    {
      tax_residency: "",
      tin_or_pan: "",
    },
  ]);
  const { data: profileData, isLoading } = useQuery({
    queryKey: ["investorProfile1"],
    queryFn: getInvestorProfileDetails,
  });
  const { mutate } = useMutation({
    mutationKey: ["investorProfile1"],
    mutationFn: addProfileDetails,
    onSuccess: (data) => {
      nProgress.start();
      router.push("/bank-details");
    },
    onError: (error: CustomError) => {
      if (error?.response?.status === 401) {
        nProgress.start();
        toast("user unauthorized");
        router.push("/signin");
      }
    },
  });
  const getStatus = [
    "I’m Married",
    "I have income from outside of India and I pay tax in other countries.",
    "I'm a politically exposed person in a foreign country",
    "Are you related to politically exposed person in a foreign country?",
  ];
  const getStatusIndex = (statusArray: string[]): string[] => {
    const indexMapping: { [key: string]: string } = {};
    getStatus.forEach((status, index) => {
      indexMapping[status] = (index + 1).toString();
    });

    return statusArray?.map((status) => indexMapping[status]);
  };
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries()) as {
      income_source?: string;
      occupation?: string;
      income_slab?: string;
    };

    let newData: FormTypes = {
      income_source: data?.income_source ?? "",
      occupation: data?.occupation ?? "",
      income_slab: data?.income_slab ?? "",
      status_applies: getStatusString(status),
    };
    if (status?.includes("2")) {
      newData = {
        ...newData,
        tax_residency_data: taxResidency,
      };
    }
    console.log("data", newData);
    mutate(newData);
  };
  const getStatusString = (indices: string[]): string[] => {
    return indices
      .map((indexStr) => parseInt(indexStr))
      .map((index) => getStatus[index - 1])
      .filter((status) => status !== undefined); // Ensure we filter out any undefined values in case of invalid indices
  };
  function handleTaxResidencyDetailListUpdate(
    selectedNominee: NomineeDetail,
    key: string,
    value: string
  ) {
    setTaxResidency(
      taxResidency.map((currentNominee) =>
        currentNominee === selectedNominee
          ? {
              ...currentNominee,
              [key]: value,
            }
          : currentNominee
      )
    );
  }
  function addTax() {
    setTaxResidency([
      ...taxResidency,
      {
        tax_residency: "",
        tin_or_pan: "",
      },
    ]);
  }
  function removeTax(item: NomineeDetail) {
    setTaxResidency(taxResidency.filter((nominee) => nominee !== item));
  }
  const toggleString = (targetString: string) => {
    if (status?.includes(targetString)) {
      setStatus(status.filter((str) => str !== targetString));
    } else {
      setStatus([...status, targetString]);
    }
  };
  useEffect(() => {
    if (profileData) {
      if (profileData?.status_applies) {
        setStatus(getStatusIndex(profileData?.status_applies));
      }
      if (profileData?.tax_residency_data) {
        setTaxResidency(profileData?.tax_residency_data);
      }
    }
  }, [profileData]);
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="px-10 md:px-20 lg:px-40  py-14 bg-secondary">
        <ProgressBar widthPercentage={55} />
        {/* {isLoading ? (
        <Loader />
      ) : ( */}
        <form
          className="border rounded-lg p-14 mt-10 bg-white shadow-sm"
          onSubmit={submit}
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-x-20 border-b border-gray-900/10 pb-0">
            <div className="pb-12 col-span-2">
              <h3 className="font-semibold ">Create your investor profile</h3>
              <p className="mt-1 text-xs text-text_dark font-light">
                Income details
              </p>
            </div>
            <div className="col-span-3">
              <div className="pb-12">
                <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="income_source"
                      className="block text-h4 font-medium leading-6 text-text_dark"
                    >
                      <span className="text-red-500">*</span> Income Source
                    </label>
                    <div className="mt-2">
                      <select
                        id="income_source"
                        name="income_source"
                        autoComplete="income_source"
                        required
                        defaultValue={profileData?.income_source}
                        className="block w-full rounded-md border-0 py-1.5 px-2 text-text_dark shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-xs sm:leading-6"
                      >
                        <option value={""}>Select Income Source</option>
                        {incomeTypes?.map((item, index) => (
                          <option value={item} key={index}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="occupation"
                      className="block text-h4 font-medium leading-6 text-text_dark"
                    >
                      <span className="text-red-500">*</span> Occupation
                    </label>
                    <div className="mt-2">
                      <select
                        id="occupation"
                        name="occupation"
                        autoComplete="occupation"
                        required
                        defaultValue={profileData?.occupation}
                        className="block w-full rounded-md border-0 py-1.5 px-2 text-text_dark shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-xs sm:leading-6"
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
                      className="block text-h4 font-medium leading-6 text-text_dark"
                    >
                      <span className="text-red-500">*</span> Income Slab
                    </label>
                    <div className="mt-2">
                      <select
                        id="income_slab"
                        name="income_slab"
                        autoComplete="income_slab"
                        required
                        defaultValue={profileData?.income_slab}
                        className="block w-full rounded-md border-0 py-1.5 px-2 text-text_dark shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-xs sm:leading-6"
                      >
                        <option value={""}>Select Income Slab</option>
                        {incomeBrackets?.map((item, index) => (
                          <option value={item} key={index}>
                            {item}
                          </option>
                        ))}
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
                      className="block text-h4 font-medium leading-6 text-text_dark"
                    >
                      <span className="text-red-500">*</span> Select if any of
                      these apply to you
                    </label>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="income_slab"
                      className="block text-xs font-medium leading-6 text-text_dark"
                    ></label>
                  </div>
                  <div className="sm:col-span-3">
                    <div
                      className={`w-full flex rounded-md border py-2 px-4 cursor-pointer  h-14 items-center ${
                        status?.includes("1") ? "border-primary" : ""
                      }`}
                      onClick={() => {
                        toggleString("1");
                      }}
                    >
                      <p
                        className={`text-xs ${
                          status?.includes("1") ? "text-primary" : ""
                        }`}
                      >
                        I’m Married
                      </p>
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <div
                      className={`w-full flex rounded-md border py-2 px-4 cursor-pointer h-14 items-center ${
                        status?.includes("2") ? "border-primary" : ""
                      }`}
                      onClick={() => {
                        toggleString("2");
                      }}
                    >
                      <p
                        className={`text-xs ${
                          status?.includes("2") ? "text-primary" : ""
                        }`}
                      >
                        I have income from outside of India and I pay tax in
                        other countries.
                      </p>
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <div
                      className={`w-full flex rounded-md border py-2 px-4 cursor-pointer h-14 items-center ${
                        status?.includes("3") ? "border-primary" : ""
                      }`}
                      onClick={() => {
                        toggleString("3");
                      }}
                    >
                      <p
                        className={`text-xs ${
                          status?.includes("3") ? "text-primary" : ""
                        }`}
                      >
                        {`I'm a politically exposed person in a foreign country`}
                      </p>
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <div
                      className={`w-full flex rounded-md border py-2 px-4 cursor-pointer h-14 items-center ${
                        status?.includes("4") ? "border-primary" : ""
                      }`}
                      onClick={() => {
                        toggleString("4");
                      }}
                    >
                      <p
                        className={`text-xs ${
                          status?.includes("4") ? "text-primary" : ""
                        }`}
                      >
                        Are you related to politically exposed person in a
                        foreign country?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {status?.includes("2") && (
            <div className="grid grid-cols-1 md:grid-cols-5 gap-x-20 border-b border-gray-900/10 pt-12 pb-4">
              <div className="col-span-2">
                <h2 className="text-base font-semibold leading-7 text-text_dark">
                  TAX Residency Details
                </h2>
              </div>
              <div className="col-span-3">
                {taxResidency?.length &&
                  taxResidency?.map((item, index) => (
                    <div className="pb-12" key={index}>
                      <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">
                        <div className="sm:col-span-3">
                          <label
                            // htmlFor="tax_residency"
                            className="block text-h4 font-medium leading-6 text-text_dark"
                          >
                            <span className="text-red-500">*</span> TAX
                            Residency
                          </label>
                          <div className="mt-2">
                            <select
                              // id="tax_residency"
                              // name="tax_residency"
                              onChange={(e) => {
                                handleTaxResidencyDetailListUpdate(
                                  item,
                                  "tax_residency",
                                  e.target.value
                                );
                              }}
                              autoComplete="tax_residency"
                              required
                              value={item?.tax_residency}
                              className="block w-full rounded-md border-0 py-1.5 px-2 text-text_dark shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-xs sm:leading-6"
                            >
                              <option value={""}>Select TAX Residency</option>
                              <option value={"India"}>India</option>
                              <option value={"United States"}>
                                United States
                              </option>
                              <option value={"United Kingdom"}>
                                United Kingdom
                              </option>
                            </select>
                          </div>
                        </div>
                        <div className="sm:col-span-3 ">
                          <label
                            // htmlFor="tin_or_pan"
                            className="block text-h4 font-medium leading-6 text-text_dark"
                          >
                            <span className="text-red-500">*</span> TIN/PAN
                            Details
                          </label>
                          <div className="mt-2 relative">
                            <input
                              // id="tin_or_pan"
                              // name="tin_or_pan"
                              // autoComplete="tin_or_pan"

                              onChange={(e) => {
                                handleTaxResidencyDetailListUpdate(
                                  item,
                                  "tin_or_pan",
                                  e.target.value
                                );
                              }}
                              required
                              maxLength={10}
                              minLength={10}
                              value={item?.tin_or_pan}
                              className="block w-[85%] rounded-md border-0 py-1.5 px-2 text-text_dark shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-xs sm:leading-6"
                            />
                            {index !== 0 && (
                              <button
                                className=" items-center justify-center absolute right-0 top-1"
                                onClick={() => removeTax(item)}
                              >
                                <IoCloseCircleOutline className="w-6 h-6" />
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="col-span-2">
                <button
                  type="button"
                  onClick={addTax}
                  className="bg-white text-primary  px-2 md:px-8 py-2 rounded-lg cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 duration-300 border border-primary"
                >
                  + Add TAX Residency
                </button>
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
        {/* )} */}
      </div>
    </div>
  );
};

export default Page;

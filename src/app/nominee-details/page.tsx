"use client";
import ProgressBar from "@/components/ProgressBar";
import { useMutation, useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaLock } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";
import { addNomineeDetails, getNomineeDetails } from "./api";
import nProgress from "nprogress";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { familyRelations } from "@/utility/values";
import { it } from "node:test";
import { CustomError } from "@/utility/type";
export type NomineeDetail = {
  full_legal_name: string;
  relation: string;
  pan: string;
  dob: string;
  address: string;
  percentage_share: string;
};
const Page = () => {
  const router = useRouter();
  const [canAddNominee, setCanAddNominee] = useState(false);
  const { data: nomineeData, isLoading } = useQuery({
    queryKey: ["nomineeDetails"],
    queryFn: getNomineeDetails,
  });
  const { mutate } = useMutation({
    mutationKey: ["nomineeDetails"],
    mutationFn: addNomineeDetails,
    onSuccess: (data) => {
      nProgress.start();
      router.push("/finish");
    },
    onError: (error: CustomError) => {
      if (error?.response?.status === 401) {
        nProgress.start();
        toast("user unauthorized");
        router.push("/signin");
      }
    },
  });
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("data", nomineeDetailList);
    const newData = {
      nomineeList: nomineeDetailList,
    };
    mutate(newData);
  };
  const [nomineeDetailList, setNomineeDetailList] = useState<NomineeDetail[]>([
    {
      full_legal_name: "",
      relation: "",
      pan: "",
      dob: "",
      address: "",
      percentage_share: "",
    },
  ]);

  function addNominee() {
    setNomineeDetailList([
      ...nomineeDetailList,
      {
        full_legal_name: "",
        relation: "",
        pan: "",
        dob: "",
        address: "",
        percentage_share: "",
      },
    ]);
  }
  function removeNominee(item: NomineeDetail) {
    setNomineeDetailList(
      nomineeDetailList.filter((nominee) => nominee !== item)
    );
  }

  function handleNomineeDetailListUpdate(
    selectedNominee: NomineeDetail,
    key: string,
    value: string
  ) {
    setNomineeDetailList(
      nomineeDetailList.map((currentNominee) =>
        currentNominee === selectedNominee
          ? {
              ...currentNominee,
              [key]: value,
            }
          : currentNominee
      )
    );
  }
  const totalPercentage = nomineeDetailList.reduce(
    (amt, item) => (amt += Number(item?.percentage_share)),
    0
  );
  useEffect(() => {
    if (nomineeData?.length) {
      const newData = nomineeData?.map(
        ({
          full_legal_name,
          relation,
          pan,
          dob,
          address,
          percentage_share,
        }: NomineeDetail) => ({
          full_legal_name,
          relation,
          pan,
          dob,
          address,
          percentage_share,
        })
      );
      setNomineeDetailList(newData);
    }
  }, [nomineeData]);
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="px-10 md:px-20 lg:px-40  py-14 bg-secondary min-h-screen">
        <div className="hidden md:block">
          <ProgressBar widthPercentage={33} />
        </div>
        <div className="block md:hidden">
          <div className="px-2">
            <ol className="flex items-center w-full mx-auto">
              <li className="flex w-full items-center text-primary after:content-[''] after:w-full after:h-1 after:border-b after:border-primary after:border-4 after:inline-block">
                <span className="flex items-center justify-center w-10 h-10 bg-primary rounded-full lg:h-12 lg:w-12  shrink-0">
                  <h5 className="text-white">1</h5>
                </span>
              </li>
              <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-primary after:border-4 after:inline-block">
                <span className="flex items-center justify-center w-10 h-10 bg-primary rounded-full lg:h-12 lg:w-12  shrink-0">
                  <h5 className="text-white">2</h5>
                </span>
              </li>
              <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-primary after:border-4 after:inline-block">
                <span className="flex items-center justify-center w-10 h-10 bg-primary rounded-full lg:h-12 lg:w-12  shrink-0">
                  <h5 className="text-white">3</h5>
                </span>
              </li>

              <li className="flex items-center ">
                <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12  shrink-0">
                  <h5>4</h5>
                </span>
              </li>
            </ol>
          </div>
          <div className="flex justify-between mt-2 px-2">
            <h5 className="text-primary font-medium">KYC</h5>
            <h5 className="text-center font-medium pl-6 text-primary">
              Investor
              <br /> Profile
            </h5>
            <h5 className="font-medium pl-4 text-primary">Bank</h5>
            <h5 className="font-medium">Nominee</h5>
          </div>
        </div>
        <form
          className="md:border md:rounded-lg md:p-14 mt-10 md:bg-white md:shadow-sm"
          onSubmit={submit}
        >
          <div className="grid grid-cols-1 gap-x-20 border-b border-gray-900/10 pb-0 ">
            <div className="pb-10 col-span-2 flex gap-2 ">
              <h3 className="font-semibold">
                Add Nominee(s) for your Investment
              </h3>
              <label className="inline-flex items-center mb-5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={canAddNominee}
                  className="sr-only peer"
                  onChange={(e) => {
                    console.log("e", e.target.value);
                    setCanAddNominee((prev) => !prev);
                  }}
                />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
              </label>
            </div>
            {canAddNominee && (
              <div className="col-span-3">
                <div className="pb-10 overflow-x-auto">
                  <table className="table-auto w-full text-sm text-left rtl:text-right ">
                    <thead>
                      <tr className="border-b-gray-200 border-b-2">
                        <th className="pb-2 text-h4 text-text_dark text-nowrap pr-6 ">
                          FULL LEGAL NAME
                        </th>
                        <th className="pb-2 text-h4 text-text_dark text-nowrap pr-6 ">
                          RELATION
                        </th>
                        <th className="pb-2 text-h4 text-text_dark text-nowrap pr-6 ">
                          NOMINEE’S PAN
                        </th>
                        <th className="pb-2 text-h4 text-text_dark text-nowrap pr-6 ">
                          NOMINEE’S DOB
                        </th>
                        <th className="pb-2 text-h4 text-text_dark text-nowrap pr-6">
                          NOMINEE’S Address
                        </th>
                        <th className="pb-2 text-h4 text-text_dark text-nowrap">
                          % SHARE
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {nomineeDetailList.map((item, idx) => {
                        return (
                          <tr key={idx}>
                            <td className="pt-2">
                              <input
                                type="text"
                                className="block w-11/12 rounded-md border-0 py-1.5 px-2 text-text_dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-xs sm:leading-6"
                                onChange={(e) =>
                                  handleNomineeDetailListUpdate(
                                    item,
                                    "full_legal_name",
                                    e.target.value
                                  )
                                }
                                placeholder="Name"
                                required
                                value={item?.full_legal_name}
                              />
                            </td>
                            <td className="pt-2">
                              {/* <input type="text"
                                                            className="block w-11/12 rounded-md border-0 py-1.5 px-2 text-text_dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                                            onChange={e => handleNomineeDetailListUpdate(item, 'relation', e.target.value)}
                                                            value={item?.relation} /> */}
                              <select
                                className="block w-32 mr-3 rounded-md border-0  py-[9px] px-2 text-text_dark shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:max-w-xs sm:text-xs sm:leading-6"
                                onChange={(e) =>
                                  handleNomineeDetailListUpdate(
                                    item,
                                    "relation",
                                    e.target.value
                                  )
                                }
                                required
                                value={item?.relation}
                              >
                                <option value={""}>Select</option>
                                {familyRelations?.map((item, index) => (
                                  <option value={item} key={index}>
                                    {item}
                                  </option>
                                ))}
                              </select>
                            </td>
                            <td className="pt-2">
                              <input
                                type="text"
                                className="block w-11/12 rounded-md border-0 py-1.5 px-2 text-text_dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-xs sm:leading-6"
                                onChange={(e) =>
                                  handleNomineeDetailListUpdate(
                                    item,
                                    "pan",
                                    e.target.value
                                  )
                                }
                                value={item?.pan}
                                required
                                placeholder="PAN"
                              />
                            </td>
                            <td className="pt-2">
                              <input
                                type="date"
                                className="block w-11/12 rounded-md border-0 py-1.5 px-2 text-text_dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-xs sm:leading-6"
                                onChange={(e) =>
                                  handleNomineeDetailListUpdate(
                                    item,
                                    "dob",
                                    e.target.value
                                  )
                                }
                                value={item?.dob}
                                placeholder="DD-MM-YYYY"
                                required
                              />
                            </td>
                            <td className="pt-2">
                              <input
                                type="text"
                                className="block w-11/12 rounded-md border-0 py-1.5 px-2 text-text_dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-xs sm:leading-6"
                                onChange={(e) =>
                                  handleNomineeDetailListUpdate(
                                    item,
                                    "address",
                                    e.target.value
                                  )
                                }
                                value={item?.address}
                                placeholder="Address"
                                required
                              />
                            </td>
                            <td className="pt-2 flex gap-1">
                              <input
                                type="number"
                                className="block w-10/12 rounded-md border-0 py-1.5 px-2 text-text_dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-xs sm:leading-6"
                                onChange={(e) => {
                                  const val = e.target.valueAsNumber;
                                  // // val + total <= 100
                                  // console.log('val',val,100 - totalPercentage + 1 , 100 - totalPercentage + 1 < val)
                                  // console.log('rem val',100 - totalPercentage + 1 , 100 - totalPercentage + 1 < val)
                                  if (val > 100) return;
                                  handleNomineeDetailListUpdate(
                                    item,
                                    "percentage_share",
                                    e.target.value
                                  );
                                }}
                                placeholder="0"
                                value={item?.percentage_share}
                                required
                              />
                              {idx !== 0 && (
                                <button
                                  className=" items-center justify-center"
                                  onClick={() => removeNominee(item)}
                                >
                                  <IoCloseCircleOutline className="w-6 h-6" />
                                </button>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="mt-2 font-medium leading-7 text-text_dark flex justify-between ">
                  <button className="" onClick={addNominee}>
                    {" "}
                    Add more
                  </button>
                  <div className="flex gap-5">
                    <p>Total</p>
                    <p>{totalPercentage}%</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="mt-10 flex items-center justify-end gap-x-6">
            <Link href={"/bank-details"}>
              <button
                type="button"
                className="bg-white text-primary  px-8 py-2 rounded-lg cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 duration-300 border border-primary"
              >
                Back
              </button>
            </Link>

            {/* <Link
          href={"/finish"}
          > */}
            <button
              type="submit"
              disabled={totalPercentage !== 100}
              className="bg-primary text-white  px-8 py-2 rounded-lg cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 duration-300 disabled:cursor-not-allowed disabled:opacity-70"
            >
              Complete
            </button>
            {/* </Link> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;

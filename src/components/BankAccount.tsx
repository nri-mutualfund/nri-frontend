import { getBankDetails } from "@/app/bank-details/api";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import nProgress from "nprogress";
import { useRouter } from "next/navigation";
import { getInvestorProfileDetails, getProfileDetails } from "@/app/profile/api";

const BankAccount = () => {
  const router = useRouter();

  const { data: bankData, isLoading } = useQuery({
    queryKey: ["bankDetails"],
    queryFn: getBankDetails,
  });

  const { data, status } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfileDetails,
  });
  const { data: profileData } = useQuery({
    queryKey: ["investorProfile1"],
    queryFn: getInvestorProfileDetails,
  });
 
  const hasBankDetails = !!bankData?.id;

  const goToAddNew = () => {
    console.log("clocked ort");
    // router.push("/bank-details");
    if (status === "success") {
      // router.push("/profile");
      nProgress.start();
      if (data?.tab === "kyc") {
        router.push("/verify-pan");
      } else if (data?.tab === "investor_profile") {
        if (profileData?.country_of_birth) {
          router.push("/investor-profile");
        } else if (profileData?.hand_signature_media) {
          router.push("/income-details");
        } else {
          router.push("/profile");
        }
      } else if (data?.tab === "bank") {
        router.push("/bank-details");
      } else if (data?.tab === "nominee") {
        router.push("/nominee-details");
      } else if (data?.stage === "ready") {
        router.push("/finish");
      }
    }
  };
  const maskAccountNumber = (accountNumber: string) => {
    if (!accountNumber) return ""; // handle case where accountNumber is undefined or null
    const lastFourDigits = accountNumber.slice(-4); // get the last 4 digits
    const maskedDigits = "x".repeat(accountNumber.length - 4); // create a string of 'x' with the length of the account number minus 4
    return maskedDigits + lastFourDigits; // concatenate the masked part with the last 4 digits
  };
  return (
    <div className="md:px-6 py-6 lg:col-span-9">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h3 className="text-lg font-medium leading-6 text-gray-700">
            Bank Accounts
          </h3>
        </div>
      </div>
      {
        hasBankDetails ?
          <table className="mt-6 table-auto w-full text-sm text-left rtl:text-right ">
            <thead>
              <tr className="border-b-gray-200 border-b-2 ">
                <th className="pb-2 text-xs text-gray-600">
                  ACCOUNT
                </th>
                <th className="pb-2 text-xs text-gray-600">
                  TYPE
                </th>
                <th className="pb-2 text-xs text-gray-600">
                  IFSC
                </th>
                <th className="pb-2 text-xs text-gray-600">
                </th>
              </tr>
            </thead>
            <tbody>
              <tr >
                <td className="pt-2 text-sm font-medium">
                  {maskAccountNumber(bankData?.account_number ?? ''
                  )}
                </td>
                <td className="pt-2 text-sm">
                  {bankData?.account_type}
                </td>

                <td className="pt-2 text-sm">
                  {bankData?.ifsc_code}

                </td>
                <td className="pt-2 text-sm flex gap-1">
                  <button
                    className="rounded-md bg-white font-medium text-primary hover:text-primary500 focus:outline-none focus:ring-2 focus:ring-primary500 focus:ring-offset-2"
                  >
                    Update
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          :
          <div className="py-24 text-center">
            <div className="justify-center text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="mx-auto h-16 w-16"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
                ></path>
              </svg>
            </div>
            <h3 className="mt-2 text-md font-semibold text-gray-700">
              Get started by finishing your application
            </h3>
            <div className="mt-6">
              <button
                // type="submit"
                onClick={goToAddNew}
                className="inline-flex items-center rounded-md bg-primary px-4 py-3 text-md font-semibold text-white shadow-sm hover:bg-primary500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Finish onboarding{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="ml-2 h-5 w-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
      }

    </div>
  );
};

export default BankAccount;

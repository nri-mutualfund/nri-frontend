"use client";
import MultiSelect from "@/components/MultipleSelect";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoChevronDownOutline } from "react-icons/io5";
import { MdOutlinePercent, MdLocationOn } from "react-icons/md";
import { RxCountdownTimer } from "react-icons/rx";
interface Option {
  value: string;
  label: string;
  disabled?: boolean;
}
const Page = () => {
  const [country, setCountry] = useState("");
  const [code, setCode] = useState("+1");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const options = [
    { value: "US", label: "United States" },
    { value: "GE", label: "Germany" },
    { value: "CA", label: "Canada" },
    { value: "FR", label: "France" },
    { value: "UK", label: "United Kingdom" },
  ];

  const getCodes: { [key: string]: string } = {
    US: "+1",
    GE: "+49",
    CA: "+1",
    FR: "+33",
    UK: "+44",
  };
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("data", data);
  };
  console.log("selected", selectedOptions);
  return (
    <>
      <section className="xl:px-40 md:px-16 px-10 py-14 bg-[#f2f8f24d]">
        <div className="grid grid-cols-2 lg:grid-cols-5 items-start justify-center gap-y-20 gap-x-4">
          <div className="col-span-3">
            <div className="">
              <div className="max-w-lg">
                <h1 className="mx-auto">
                  Open your NRO, NRI Bank Account with Renowned Indian Banks
                </h1>
                <h5 className="mt-4 pb-4">
                  Apply in multiple partner banks to speed-up your NRI bank
                  account opening process. It is now easy, fast and secure for
                  NRIs & OCIs to bank in India with SBNRI.
                </h5>
              </div>
              <ul className="flex flex-col gap-4 pt-4">
                <li className="flex items-center gap-2 font-medium text-text_light">
                  <IoIosCheckmarkCircle className="text-primary" />
                  Simplified process as per your country
                </li>
                <li className="flex items-center gap-2 font-medium text-text_light">
                  <IoIosCheckmarkCircle className="text-primary" />
                  Dedicated bank RM to help you at each step
                </li>
                <li className="flex items-center gap-2 font-medium text-text_light">
                  <IoIosCheckmarkCircle className="text-primary" />
                  Industry high FD & savings rate
                </li>
              </ul>
            </div>
            <div className="bg-white border-gray-200 border shadow-sm rounded-lg mt-10">
              <div className="flex gap-4 items-center px-8 py-6">
                <Image
                  src="/assets/HDFC_LOGO.png"
                  alt="Your Image Alt Text"
                  className="w-[70px] transition-all duration-300 hover:scale-110"
                  width={500}
                  height={1}
                />
                <div>
                  <h3 className="">HDFC Bank</h3>
                  <div className="flex items-center gap-2 mt-3 flex-wrap">
                    <div className="flex items-center gap-1">
                      <MdOutlinePercent color="#424242" />
                      <p className="text-sm font-semibold text-text_dark">
                        Up to 7.60% p.a. FD Rate
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <MdLocationOn color="#424242" />
                      <p className="text-sm font-semibold text-text_dark">
                        8700+ Branches
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <RxCountdownTimer color="#424242" />
                      <p className="text-sm font-semibold text-text_dark">
                        Medium Process Time
                      </p>
                    </div>
                  </div>
                  <ul className="pt-4 list-disc list-inside space-y-2">
                    <li className="text-[16px] font-medium text-text_light">
                      Savings Account Interest Rate – Up to 3.0% p.a
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-4 items-center border-t px-8 py-6">
                <Image
                  src="/assets/IDFC_LOGO.png"
                  alt="Your Image Alt Text"
                  className="w-[70px] transition-all duration-300 hover:scale-110"
                  width={500}
                  height={1}
                />
                <div>
                  <h3 className="">IDFC Bank</h3>
                  <div className="flex items-center gap-2 mt-3 flex-wrap">
                    <div className="flex items-center gap-1">
                      <MdOutlinePercent color="#424242" />
                      <p className="text-sm font-semibold text-text_dark">
                        Up to 7.25% p.a. FD Rate
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <MdLocationOn color="#424242" />
                      <p className="text-sm font-semibold text-text_dark">
                        800+ Branches
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <RxCountdownTimer color="#424242" />
                      <p className="text-sm font-semibold text-text_dark">
                        Fast Process Time
                      </p>
                    </div>
                  </div>

                  <ul className="pt-4 list-disc list-inside space-y-2">
                    <li className="text-[16px] font-medium text-text_light">
                      Savings Account Interest Rate – Up to 3.0% p.a
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-4 items-center border-t px-8 py-6 ">
                <Image
                  src="/assets/axis.png"
                  alt="Your Image Alt Text"
                  className="w-[70px] transition-all duration-300 hover:scale-110"
                  width={500}
                  height={1}
                />
                <div>
                  <h3 className="">Axis Bank</h3>
                  <div className="flex items-center gap-2 mt-3 flex-wrap">
                    <div className="flex items-center gap-1">
                      <MdOutlinePercent color="#424242" />
                      <p className="text-sm font-semibold text-text_dark">
                        Up to 7.4% p.a. FD Rate
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <MdLocationOn color="#424242" />
                      <p className="text-sm font-semibold text-text_dark">
                        5000+ Branches
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <RxCountdownTimer color="#424242" />
                      <p className="text-sm font-semibold text-text_dark">
                        Medium Process Time
                      </p>
                    </div>
                  </div>
                  <ul className="pt-4 list-disc list-inside space-y-2">
                    <li className="text-[16px] font-medium text-text_light">
                      Savings Account Interest Rate – Up to 3.5% p.a
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`col-span-2 flex justify-center lg:justify-end items-start sticky ${"top-32"} z-40`}
          >
            <div className="">
              <div className="bg-white border-gray-200 border-2 shadow-md rounded-lg px-8 py-6 max-w-sm">
                <h3 className="text-center">Apply in 20 seconds</h3>
                <h4 className="text-center mb-4">
                  50,000+ NRIs applied in last 6 months
                </h4>
                <form onSubmit={submit} className="text-text_dark">
                  <div className="mb-4">
                    <label className="block text-xs leading-6 mb-1 text-text_dark font-medium">
                      Name
                    </label>
                    <input
                      type="name"
                      id="name"
                      name="name"
                      className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Full name as per Passport"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-xs leading-6 mb-1 text-text_dark font-medium ">
                      Email
                    </label>
                    <input
                      type="Email"
                      id="Email"
                      name="email"
                      className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Enter email"
                      required
                    />
                  </div>
                  <div className="mb-4 relative">
                    <label className="block text-xs leading-6 mb-1 text-text_dark font-medium ">
                      Country
                    </label>
                    <select
                      id="countries"
                      name="country"
                      defaultValue={"Choose your country"}
                      onChange={(e) => {
                        setCountry(e.target.value);
                        setCode(getCodes[e.target.value]);
                      }}
                      className="bg-gray-50 border border-gray-300 rounded-lg  block w-full p-2.5  placeholder-gray-400 text-black focus:ring-blue-50 "
                    >
                      <option selected disabled>
                        Choose a country
                      </option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="GE">Germany</option>
                    </select>
                    {/* <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 top-4">
                      <IoChevronDownOutline />
                    </div> */}
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="phone"
                      className="block text-xs font-medium leading-6 text-text_dark"
                    >
                      Whatsapp Number
                    </label>
                    <div className="mt-2">
                      <div className="flex w-full rounded-md border-0 py-0.5 text-text_dark shadow-sm ring-1 ring-inset ring-gray-300 pr-1">
                        <p className="border-r-2 px-4 py-1">{code}</p>
                        <input
                          id="whatsapp_number"
                          name="whatsapp_number"
                          type="phone"
                          autoComplete="phone"
                          className="block w-full placeholder:text-text_light px-4 py-1 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-xs leading-6 mb-1 text-text_dark font-medium ">
                      Reasons for account opening(You can select multiple)
                    </label>
                    <MultiSelect
                      options={options}
                      selectedOptions={selectedOptions}
                      setSelectedOptions={setSelectedOptions}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 "
                  >
                    Start Process Now
                  </button>
                </form>
                <ul className="pt-4 list-disc list-inside space-y-2">
                  <li className="text-gray-300 text-xs font-thin">
                    I have checked all the details and these details can be used
                    for my bank account opening.
                  </li>
                  <li className="text-gray-300 text-xs font-thin">
                    You will receive call from bank on the entered WhatsApp
                    number.
                  </li>
                </ul>
              </div>
              <div className="flex justify-center items-center gap-6  max-w-sm mt-4">
                <Image
                  src="/assets/AXIS_LOGO2.png"
                  alt="Your Image Alt Text"
                  className="w-[100px] transition-all duration-300 hover:scale-110"
                  width={500}
                  height={1}
                />
                <Image
                  src="/assets/HDFC_LOGO2.png"
                  alt="Your Image Alt Text"
                  className="w-[100px] transition-all duration-300 hover:scale-110"
                  width={500}
                  height={1}
                />
                <Image
                  src="/assets/IDFC_LOGO2.png"
                  alt="Your Image Alt Text"
                  className="w-[100px] transition-all duration-300 hover:scale-110"
                  width={500}
                  height={1}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;

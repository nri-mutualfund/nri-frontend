"use client";
import MultiSelect from "@/components/MultipleSelect";
import Image from "next/image";
import React, { useState } from "react";
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
  return (
    <>
      <section className="xl:px-40 md:px-16 px-10 py-14">
        <div className="flex flex-wrap items-start justify-center gap-y-20">
          <div className="w-full lg:w-[60%]">
            <div className="">
              <div className="max-w-lg">
                <h1 className="font-medium leading-snug text-slate-800">
                  Open your NRO, NRI Bank Account with{" "}
                </h1>
                <h1 className="font-medium leading-snug text-primary pb-6">
                  Renowned Indian Banks
                </h1>
                <p className="font-medium w-auto">
                  Apply in multiple partner banks to speed-up your NRI bank
                  account opening process. It is now easy, fast and secure for
                  NRIs & OCIs to bank in India with SBNRI.
                </p>
              </div>
              <ul className="flex flex-col gap-4 pt-4">
                <li className="flex items-center gap-2 font-medium text-gray-500">
                  <IoIosCheckmarkCircle className="text-primary" />
                  Simplified process as per your country
                </li>
                <li className="flex items-center gap-2 font-medium text-gray-500">
                  <IoIosCheckmarkCircle className="text-primary" />
                  Dedicated bank RM to help you at each step
                </li>
                <li className="flex items-center gap-2 font-medium text-gray-500">
                  <IoIosCheckmarkCircle className="text-primary" />
                  Industry high FD & savings rate
                </li>
              </ul>
            </div>
            <div className="bg-white border-gray-200 border shadow-sm rounded-lg mt-10">
              <div className="flex gap-4 items-center px-8 py-6 ">
                <Image
                  src="/assets/axis.png"
                  alt="Your Image Alt Text"
                  className="w-[70px] transition-all duration-300 hover:scale-110"
                  width={500}
                  height={1}
                />
                <div>
                  <p className="text-lg font-semibold text-[#333]">Axis Bank</p>
                  <div className="flex items-center gap-2 mt-3 flex-wrap">
                    <div className="flex items-center gap-1">
                      <MdOutlinePercent color="#555" />
                      <p className="text-sm font-semibold text-[#555]">
                        Up to 7.50% p.a. FD Rate
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <MdLocationOn color="#555" />
                      <p className="text-sm font-semibold text-[#555]">
                        520+ Branches
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <RxCountdownTimer color="#555" />
                      <p className="text-sm font-semibold text-[#555]">
                        Fast Process Time
                      </p>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-gray-400">
                    <span className="font-bold text-2xl">.</span> Medical
                    assistance for loved ones back home in India
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-center border-t px-8 py-6">
                <Image
                  src="/assets/HDFC_LOGO.png"
                  alt="Your Image Alt Text"
                  className="w-[70px] transition-all duration-300 hover:scale-110"
                  width={500}
                  height={1}
                />
                <div>
                  <p className="text-lg font-semibold text-[#333]">HDFC Bank</p>
                  <div className="flex items-center gap-2 mt-3 flex-wrap">
                    <div className="flex items-center gap-1">
                      <MdOutlinePercent color="#555" />
                      <p className="text-sm font-semibold text-[#555]">
                        Up to 7.40% p.a. FD Rate
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <MdLocationOn color="#555" />
                      <p className="text-sm font-semibold text-[#555]">
                        4900+ Branches
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <RxCountdownTimer color="#555" />
                      <p className="text-sm font-semibold text-[#555]">
                        Medium Process Time
                      </p>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-gray-400">
                    <span className="font-bold text-2xl">.</span> Savings
                    Account Interest Rate – Up to 3.5% p.a
                  </p>
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
                  <p className="text-lg font-semibold text-[#333]">IDFC Bank</p>
                  <div className="flex items-center gap-2 mt-3 flex-wrap">
                    <div className="flex items-center gap-1">
                      <MdOutlinePercent color="#555" />
                      <p className="text-sm font-semibold text-[#555]">
                        Up to 7.75% p.a. FD Rate
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <MdLocationOn color="#555" />
                      <p className="text-sm font-semibold text-[#555]">
                        3300+ Branche
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <RxCountdownTimer color="#555" />
                      <p className="text-sm font-semibold text-[#555]">
                        Fast Process Time
                      </p>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-gray-400">
                    <span className="font-bold text-2xl">.</span> Savings
                    Account Interest Rate – Up to 6.25% p.a.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[40%] flex justify-center lg:justify-end items-start">
            <div>
              <div className="bg-white border-gray-200 border-2 shadow-md rounded-lg px-8 py-6 max-w-sm">
                <h1 className="text-xl font-medium text-center  ">
                  Apply in 20 seconds
                </h1>
                <p className="text-gray-400 text-center mb-4 ">
                  50,000+ NRIs applied in last 6 months
                </p>
                <form onSubmit={submit}>
                  <div className="mb-4">
                    <label className="block text-[11px] font-medium ">
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
                    <label className="block text-[11px] font-medium ">
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
                    <label className="block text-[11px] font-medium ">
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
                      className="bg-gray-50 border border-gray-300 rounded-lg  block w-full p-2.5  placeholder-gray-400 text-black focus:ring-blue-50 appearance-none"
                    >
                      <option selected disabled>
                        Choose a country
                      </option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="GE">Germany</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 top-4">
                      <IoChevronDownOutline />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Whatsapp Number
                    </label>
                    <div className="mt-2">
                      <div className="flex w-full rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 pr-1">
                        <p className="border-r-2 px-4 py-1">{code}</p>
                        <input
                          id="whatsapp_number"
                          name="whatsapp_number"
                          type="phone"
                          autoComplete="phone"
                          className="block w-full placeholder:text-gray-400 px-4 py-1 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-[11px] font-medium ">
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
                <ul className="pt-4">
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

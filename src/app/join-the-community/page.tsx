"use client";
import { countryCodes, countryNamesForProfile } from "@/utility/values";
import Image from "next/image";
import React, { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
const Page = () => {
  const [country, setCountry] = useState("");
  const [code, setCode] = useState("+91");

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("data", data);
  };
  const getCodes: { [key: string]: string } = {
    US: "+1",
    GE: "+49",
    CA: "+1",
    FR: "+33",
    UK: "+44",
  };
  return (
    <div className="bg-white sm:pt-4 lg:py-10 pb-12">
      <div className="max-w-screen-2xl mx-auto  xl:px-40 md:px-16 px-10">
        <div className="mx-auto text-center max-w-4xl">
          <h1 className="mx-auto text-center">
            Meet our <span className="text-text_dark">NRI Ambassadors</span>{" "}
            across the Globe
          </h1>
          <h5 className="mt-4 mb-4 text-center max-w-2xl mx-auto">
            {`If you are a non-resident Indian (NRI) who shares our vision of India
          becoming the world's largest economy, we invite you to join our
          prestigious 'Ambassador' program. As an Ambassador, you will enjoy
          exclusive perks and benefits. Apply now to become a part of India's
          growth story and help shape its promising future.`}
          </h5>
          <h5 className="font-medium mt-10 text-center">
            Trusted by People working in reputed companies across the globe
          </h5>
          <div className="grid grid-cols-4 items-center gap-2  max-w-md mx-auto">
            <Image
              src="/assets/apple.png"
              alt="Your Image Alt Text"
              className="w-[100px] transition-all duration-300 hover:scale-110"
              width={500}
              height={1}
            />
            <Image
              src="/assets/safaricom.png"
              alt="Your Image Alt Text"
              className="w-[130px] transition-all duration-300 hover:scale-110 md:mt-[-10px] md:ml-[-15px]"
              width={500}
              height={1}
            />
            <Image
              src="/assets/jpmorgan.png"
              alt="Your Image Alt Text"
              className="w-[130px] transition-all duration-300 hover:scale-110"
              width={500}
              height={1}
            />
            <Image
              src="/assets/barclays.png"
              alt="Your Image Alt Text"
              className="w-[130px] transition-all duration-300 hover:scale-110"
              width={500}
              height={1}
            />
          </div>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md bg-white md:px-8 border-gray-200 md:border-2 md:shadow-md rounded-lg py-6">
          <h3 className="text-center">Apply in 20 seconds</h3>
          <h4 className="mt-1 text-center mb-10">
            50,000+ Nris applied in last 6 months
          </h4>
          <form className="space-y-6 text-text_dark" onSubmit={submit}>
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium leading-6 text-text_dark"
              >
                Your name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="name"
                  placeholder="Fullname as per passport"
                  required
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-text_dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium leading-6 text-text_dark"
              >
                Your Email address
              </label>
              <div className=" mt-2 relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                  required
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-text_dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-medium leading-6 text-text_dark"
              >
                Country
              </label>
              <div className="mt-2 relative">
                <select
                  id="country"
                  name="country"
                  defaultValue={"Choose your country"}
                  onChange={(e) => {
                    setCountry(e.target.value);
                    setCode(getCodes[e.target.value]);
                  }}
                  required
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-text_dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:leading-6 appearance-none"
                >
                  <option value={""}>Choose your country</option>
                  {countryNamesForProfile?.map((item, index) => (
                    <option value={item} key={index}>
                      {item}
                    </option>
                  ))}
                </select>
                {/* <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <IoChevronDownOutline />
                </div> */}
              </div>
            </div>
            {/* <div>
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
                    className="block w-full placeholder:text-gray-400 px-4 py-1 focus:ring-2 focus:ring-inset focus:ring-primary sm:leading-6"
                    required
                  />
                </div>
              </div>
            </div> */}
            <div>
              <label
                htmlFor="whatsapp_number"
                className="block text-xs font-medium leading-6 text-text_dark"
              >
                Whatsapp Number
              </label>
              <div className="mt-2">
                <div className="flex w-full rounded-md border-0 py-0.5 text-text_dark shadow-sm ring-1 ring-inset ring-gray-300 pr-1">
                  <select
                    id="contry_code"
                    name="country_code"
                    defaultValue={""}
                    required
                    className="px-2 block w-[30%] border-0 sm:text-sm sm:leading-6 appearance-none ml-1 border-r-2 border-r-gray-300 focus:ring-0 "
                  >
                    <option value={""}>code</option>
                    {countryCodes?.map((item, index) => (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <input
                    id="whatsapp_number"
                    name="whatsapp_number"
                    type="text"
                    autoComplete="phone"
                    required
                    maxLength={16}
                    className="block w-[70%] placeholder:text-gray-400 px-4 py-1 border-none focus:ring-0 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-xs font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Start Process Now
              </button>
            </div>
            <p className="mt-1 text-xs text-gray-400 text-left font-light">
              I have checked all the details and these details can be used for
              my account opening
            </p>
            <p className="mt-1 text-xs text-gray-400 text-left font-light">
              You will recieve call from bank on your whatsapp number
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;

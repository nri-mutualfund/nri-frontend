"use client";
import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import {
  getProfileDetails,
  addProfileDetails,
  getInvestorProfileDetails,
} from "./api";
import { toast } from "react-toastify";
import nProgress from "nprogress";
import { useRouter } from "next/navigation";
import ProgressBar from "@/components/ProgressBar";
import ImageModal from "@/components/ImageModal";
import Loader from "@/components/Loader";
import { countryNamesForProfile } from "@/utility/values";
import { IoMdEye } from "react-icons/io";
import Link from "next/link";
import { CustomError } from "@/utility/type";
import { isFileSizeValid } from "@/utility/helper";

const Page = () => {
  const router = useRouter();
  const { data } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfileDetails,
  });
  console.log(data, "jhhjkjhj");
  const { data: profileData, isLoading } = useQuery({
    queryKey: ["investorProfile1"],
    queryFn: getInvestorProfileDetails,
  });

  const [errorStatus, setErrorStatus] = useState("");
  const [image1, setImage1] = useState<File | null>(null);
  const [previewSrc1, setPreviewSrc1] = useState<string | null>(null);
  const [show, setShow] = useState(false);
  const [uplaod1, setUploading1] = useState(false);

  const { isSuccess, mutate } = useMutation({
    mutationKey: ["investorProfile1"],
    mutationFn: addProfileDetails,
    onSuccess: (data) => {
      nProgress.start();
      router.push("/investor-profile");
    },
    onError: (error: CustomError) => {
      if (error?.response?.status === 401) {
        nProgress.start();
        toast("user unauthorized");
        router.push("/signin");
      } else {
        console.log("error", error);
        toast("error occured");
      }
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

    // form.append("address_proof_media",image1);
    if (!image1) {
      setErrorStatus("image1");
    } else {
      mutate(form);
    }
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (isFileSizeValid(file.size)) {
        const file = files[0];
        setImage1(file);

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setPreviewSrc1(reader.result as string);
        };
        setErrorStatus("");
        setUploading1(true);
        setTimeout(() => {
          setUploading1(false);
        }, 3000);
      }
    }
  };
  const openPdfInNewTab = (pdfFile: File | null) => {
    if (pdfFile) {
      const pdfUrl = URL.createObjectURL(pdfFile);
      window.open(pdfUrl, "_blank");
    }
  };

  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="px-10 md:px-20 lg:px-40  py-14 bg-secondary">
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
              <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block">
                <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12  shrink-0">
                  <h5>2</h5>
                </span>
              </li>
              <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block">
                <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12  shrink-0">
                  <h5>3</h5>
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
            <h5 className="text-center font-medium pl-6">
              Investor
              <br /> Profile
            </h5>
            <h5 className="font-medium pl-4">Bank</h5>
            <h5 className="font-medium">Nominee</h5>
          </div>
        </div>

        {isLoading ? (
          <Loader />
        ) : (
          <form
            className="md:border rounded-lg md:p-14 mt-10 md:bg-white md:shadow-sm"
            onSubmit={submit}
          >
            <div className="grid grid-cols-1 md:grid-cols-5 gap-x-20 border-b border-gray-900/10 pb-0">
              <div className="pb-12 sm:col-span-2">
                <h3 className="font-semibold">Profile</h3>
                <h4 className="mt-1 text-sm leading-6">
                  Please ensure that the information provided aligns exactly
                  with the details registered with the PAN card authorities.
                  Each field should precisely match the corresponding
                  information on your PAN card.
                </h4>
              </div>
              <div className="sm:col-span-3">
                <div className="pb-12">
                  <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="full_name"
                        className="block text-h4 font-medium leading-6 text-text_dark"
                      >
                        <span className="text-red-500">*</span> Legal Full Name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          // value={name}
                          // onChange={(e) => setName(e.target.value)}
                          defaultValue={data?.first_name}
                          name="full_name"
                          id="full_name"
                          autoComplete="given-name"
                          required
                          className="block w-full rounded-md border-0 py-1.5 px-2 text-text_dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-xs sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="country_of_birth"
                        className="block text-h4 font-medium leading-6 text-text_dark"
                      >
                        <span className="text-red-500">*</span> Country of Birth
                      </label>
                      <div className="mt-2">
                        <select
                          id="country_of_birth"
                          name="country_of_birth"
                          autoComplete="country_of_birth"
                          required
                          defaultValue={profileData?.country_of_birth}
                          className="block w-full rounded-md border-0 py-1.5 px-2 text-text_dark shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:max-w-xs sm:text-xs sm:leading-6"
                        >
                          <option value={""}>Select Country</option>
                          {countryNamesForProfile?.map((item, index) => (
                            <option value={item} key={index}>
                              {item}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="email"
                        className="block text-h4 font-medium leading-6 text-text_dark"
                      >
                        <span className="text-red-500">*</span> Email
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          defaultValue={
                            data?.investorProfileDetail?.email
                              ? data?.investorProfileDetail?.email
                              : data?.email
                          }
                          autoComplete="email"
                          required
                          disabled
                          className="block w-full rounded-md border-0 py-1.5 px-2 text-text_dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-xs sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="city_of_birth"
                        className="block text-h4 font-medium leading-6 text-text_dark"
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
                          defaultValue={profileData?.city_of_birth}
                          className="block w-full rounded-md border-0 py-1.5 px-2 text-text_dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-xs sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="phone"
                        className="block text-h4 font-medium leading-6 text-text_dark"
                      >
                        <span className="text-red-500">*</span> Phone Number
                      </label>
                      <div className="mt-2">
                        <input
                          id="phone"
                          name="phone"
                          defaultValue={data?.phone_number}
                          autoComplete="phone"
                          required
                          className="block w-full rounded-md border-0 py-1.5 px-2 text-text_dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-xs sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="father_or_spouse_name"
                        className="block text-h4 font-medium leading-6 text-text_dark"
                      >
                        <span className="text-red-500">*</span> Father’s or
                        Spouse’s Name
                      </label>
                      <div className="mt-2">
                        <input
                          id="father_or_spouse_name"
                          name="father_or_spouse_name"
                          type="text"
                          autoComplete="father_or_spouse_name"
                          required
                          defaultValue={profileData?.father_or_spouse_name}
                          className="block w-full rounded-md border-0 py-1.5 px-2 text-text_dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-xs sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="gender"
                        className="block text-h4 font-medium leading-6 text-text_dark"
                      >
                        <span className="text-red-500">*</span> Gender
                      </label>
                      <div className="mt-2">
                        <select
                          id="gender"
                          name="gender"
                          autoComplete="gender"
                          defaultValue={profileData?.gender}
                          className="block w-full rounded-md border-0 py-1.5 px-2 text-text_dark shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:max-w-xs sm:text-xs sm:leading-6"
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
              <div className="pb-12 sm:col-span-2">
                <h3 className="font-semibold">Current Residential Address</h3>
                <h4 className="mt-1 text-sm leading-6">
                  Please ensure that the information provided aligns exactly
                  with the details registered with the PAN card authorities.
                </h4>
              </div>
              <div className="sm:col-span-3">
                <div className="pb-12">
                  <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="address_line1"
                        className="block text-h4 font-medium leading-6 text-text_dark"
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
                          defaultValue={
                            profileData?.residential_address?.address1
                          }
                          className="block w-full rounded-md border-0 py-1.5 px-2 text-text_dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-xs sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="address_line2"
                        className="block text-h4 font-medium leading-6 text-text_dark"
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
                          defaultValue={
                            profileData?.residential_address?.address2
                          }
                          className="block w-full rounded-md border-0 py-1.5 px-2 text-text_dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-xs sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="city"
                        className="block text-h4 font-medium leading-6 text-text_dark"
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
                          defaultValue={profileData?.residential_address?.city}
                          className="block w-full rounded-md border-0 py-1.5 px-2 text-text_dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-xs sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="state"
                        className="block text-h4 font-medium leading-6 text-text_dark"
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
                          defaultValue={profileData?.residential_address?.state}
                          className="block w-full rounded-md border-0 py-1.5 px-2 text-text_dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-xs sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="zipcode"
                        className="block text-h4 font-medium leading-6 text-text_dark"
                      >
                        <span className="text-red-500">*</span> Zip Code
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="zipcode"
                          id="zipcode"
                          required
                          defaultValue={
                            profileData?.residential_address?.zipcode
                          }
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 py-1.5 px-2 text-text_dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-xs sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-h4 font-medium leading-6 text-text_dark"
                      >
                        <span className="text-red-500">*</span> Country
                      </label>
                      <div className="mt-2">
                        <select
                          id="country"
                          name="country"
                          required
                          defaultValue={
                            profileData?.residential_address?.country
                          }
                          autoComplete="country-name"
                          className="block w-full rounded-md border-0 py-1.5 px-2 text-text_dark shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:max-w-xs sm:text-xs sm:leading-6"
                        >
                          <option value={""}>Select Country</option>
                          {countryNamesForProfile?.map((item, index) => (
                            <option value={item} key={index}>
                              {item}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <p>
                        <span className="text-red-500">*</span> Current Address
                        Proof (Self-Attested)
                      </p>
                      <Link
                        href={
                          "https://drive.google.com/file/d/1vAZXdgobaK441spUcv6s4Jrl3bbJ-Mb8/view"
                        }
                        target="_blank"
                      >
                        <p className="mt-1 text-xs text-text_dark underline underline-offset-2 font-light hover:text-primary">
                          See Sample
                        </p>
                      </Link>
                      <h4 className="text-xs mt-4">
                        Driver/Learner License/ID Card (Unexpired) or Utility
                        Bill (dated within 3 months) or Bank Statement (dated
                        within 3 months) Note: Credit card statement is not an
                        acceptable document
                      </h4>
                    </div>
                    {/* <div className="sm:col-span-3">
                  <div className="mt-2">
                    <input
                      id="address_proof"
                      name="address_proof"
                      type="file"
                      required
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-text_dark shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:max-w-xs sm:text-sm sm:leading-6"
                    />
                  </div>
                </div> */}
                    <div className="sm:col-span-3 ">
                      <div className="flex gap-10 items-center">
                        {previewSrc1 && !uplaod1 && (
                          <button
                            type="button"
                            className="text-primary flex items-center gap-2"
                            onClick={() => {
                              if (image1?.type === "application/pdf") {
                                openPdfInNewTab(image1);
                              } else {
                                setShow(true);
                              }
                            }}
                          >
                            Preview
                            <IoMdEye size={20} />
                          </button>
                        )}

                        <label htmlFor="address_proof">
                          <div
                            className={`bg-white text-primary  px-2 md:px-8 py-1 rounded-2xl cursor-pointer hover:border hover:border-primary ${
                              uplaod1 ? "border border-primary" : ""
                            }`}
                          >
                            {uplaod1 ? (
                              <p>Uploading...</p>
                            ) : previewSrc1 ? (
                              <p>Update</p>
                            ) : (
                              <p>Upload</p>
                            )}
                          </div>
                          <input
                            id="address_proof"
                            type="file"
                            onChange={handleFileChange}
                            className="hidden"
                            accept="image/png, image/jpeg, .pdf"
                          />
                        </label>
                      </div>

                      {errorStatus === "image1" && (
                        <p className="text-red-500 text-xs mt-1">
                          This field is required!
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 flex items-center justify-end gap-x-6">
              <button
                type="submit"
                className="bg-primary text-white  px-8 py-2 rounded-lg cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 duration-300"
              >
                Save & Next
              </button>
            </div>
          </form>
        )}
        <ImageModal isOpen={show} onClose={() => setShow(false)}>
          <div className="flex justify-between items-center">
            {previewSrc1 && (
              <img src={previewSrc1} alt="Description" className="mx-auto" />
            )}
          </div>
        </ImageModal>
      </div>
    </div>
  );
};

export default Page;

"use client";
import ImageModal from "@/components/ImageModal";
import ProgressBar from "@/components/ProgressBar";
import { useMutation, useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import nProgress from "nprogress";
import React, { useState } from "react";
import { addBankDetails, getBankDetails } from "./api";
import { toast } from "react-toastify";
import Loader from "@/components/Loader";
const Page = () => {
  const [status, setStatus] = useState("");
  const [errorStatus, setErrorStatus] = useState("");
  const [image1, setImage1] = useState<File | null>(null);
  const [previewSrc1, setPreviewSrc1] = useState<string | null>(null);
  const [show, setShow] = useState(false);
  const router = useRouter();
  const { data: bankData, isLoading } = useQuery({
    queryKey: ["bankDetails"],
    queryFn: getBankDetails,
  });
  const { mutate } = useMutation({
    mutationKey: ["bankDetails"],
    mutationFn: addBankDetails,
    onSuccess: (data) => {
      nProgress.start();
      router.push("/nominee-details");
    },
    onError: (error) => {
      console.log("error", error);
      toast("error occured");
    },
  });
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    let data = Object.fromEntries(formData.entries());
    if (!image1) {
      setErrorStatus("image1");
    } else {
      // data = { ...data, verification_doc: image1 };
      const form = new FormData();
      form.append("account_number", data?.account_number);
      form.append("account_type", data?.account_type);
      form.append("ifsc_code", data?.ifsc_code);
      form.append("verification_document", data?.verification_document);
      // form.append("verification_doc", image1);

      // console.log("data", data);

      mutate(form);
    }
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setImage1(file);

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPreviewSrc1(reader.result as string);
      };
    }
    setErrorStatus("");
  };
  const openPdfInNewTab = (pdfFile: File | null) => {
    if (pdfFile) {
      const pdfUrl = URL.createObjectURL(pdfFile);
      window.open(pdfUrl, "_blank");
    }
  };
  return (
    <div className="px-10 md:px-20 lg:px-40  py-14 bg-secondary min-h-screen">
      <ProgressBar widthPercentage={66} />
      {isLoading ? (
        <Loader />
      ) : (
        <form
          className="border rounded-lg p-14 mt-10 bg-white shadow-sm"
          onSubmit={submit}
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-x-20 border-b border-gray-900/10 pb-0">
            <div className="pb-12 col-span-2">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Add Bank Account
              </h2>
            </div>
            <div className="col-span-3">
              <div className="pb-12">
                <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="account_type"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      <span className="text-red-500">*</span> Bank Account Type
                    </label>
                    <div className="mt-2">
                      <select
                        id="account_type"
                        name="account_type"
                        autoComplete="account_type"
                        required
                        defaultValue={bankData?.account_type}
                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      >
                        <option value={""}>Select Account Type</option>
                        <option value={"NRE"}>NRE</option>
                        <option value={"NRO"}>NRO</option>
                      </select>
                      <Link
                        href={"https://cleartax.in/s/nre-nro-accounts"}
                        target="_blank"
                      >
                        <p className="underline underline-offset-4 text-xs font-light mt-1 text-gray-400">
                          What is NRE/NRO?
                        </p>
                      </Link>
                    </div>
                  </div>
                  <div className="sm:col-span-3"></div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="account_number"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      <span className="text-red-500">*</span> Account Number
                    </label>
                    <div className="mt-2">
                      <input
                        id="account_number"
                        name="account_number"
                        autoComplete="account_number"
                        required
                        defaultValue={bankData?.account_number}
                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="ifsc_code"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      <span className="text-red-500">*</span> IFSC Code
                    </label>
                    <div className="mt-2">
                      <input
                        id="ifsc_code"
                        name="ifsc_code"
                        autoComplete="ifsc_code"
                        required
                        defaultValue={bankData?.ifsc_code}
                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="verification_document"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      <span className="text-red-500">*</span> Verification
                      Document
                    </label>
                    <div className="mt-2">
                      <select
                        id="verification_document"
                        name="verification_document"
                        autoComplete="verification_document"
                        required
                        defaultValue={bankData?.verification_document}
                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      >
                        <option value={""}>Select Document</option>
                        <option value={"PAN"}>PAN</option>
                        <option value={"Adhar"}>Adhar</option>
                      </select>
                    </div>
                  </div>
                  {/* <div className="sm:col-span-3">
                  <label
                    htmlFor="verification_document_media"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    <br />
                  </label>
                  <div className="mt-2">
                    <input
                      id="verification_document_media"
                      name="verification_document_media"
                      autoComplete="verification_document_media"
                      type="file"
                      required
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    />
                  </div>
                </div> */}
                  <div className="sm:col-span-3 ">
                    <div className="flex gap-10 items-center pt-10">
                      <label htmlFor="verification_document_media">
                        <p className="cursor-pointer">Upload</p>
                        <input
                          id="verification_document_media"
                          type="file"
                          onChange={handleFileChange}
                          className="hidden"
                          accept="image/png, image/jpeg, .pdf"
                        />
                      </label>
                      {previewSrc1 && (
                        <button
                          type="button"
                          onClick={() => {
                            if (image1?.type === "application/pdf") {
                              openPdfInNewTab(image1);
                            } else {
                              setShow(true);
                            }
                          }}
                        >
                          Preview
                        </button>
                      )}
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
            <Link href={"/income-details"}>
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
      )}
      <ImageModal isOpen={show} onClose={() => setShow(false)}>
        <div className="flex justify-between items-center">
          {previewSrc1 && (
            <img src={previewSrc1} alt="Description" className="mx-auto" />
          )}
        </div>
      </ImageModal>
    </div>
  );
};

export default Page;

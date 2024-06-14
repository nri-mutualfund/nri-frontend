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
import { IoMdEye } from "react-icons/io";
import { CustomError } from "@/utility/type";

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
    <div className="max-w-screen-2xl mx-auto">
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
                <h3 className="font-semibold">Add Bank Account</h3>
              </div>
              <div className="col-span-3">
                <div className="pb-12">
                  <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="account_type"
                        className="block text-xs font-medium leading-6 text-text_dark"
                      >
                        <span className="text-red-500">*</span> Bank Account
                        Type
                      </label>
                      <div className="mt-2">
                        <select
                          id="account_type"
                          name="account_type"
                          autoComplete="account_type"
                          required
                          defaultValue={bankData?.account_type}
                          className="block w-full rounded-md border-0 py-1.5 px-2 text-text_dark shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                          <option value={""}>Select Account Type</option>
                          <option value={"NRE"}>NRE</option>
                          <option value={"NRO"}>NRO</option>
                          <option value={"Resident Individual"}>
                            Resident Individual
                          </option>
                          <option value={"Resident Joint Account"}>
                            Resident Joint Account
                          </option>
                        </select>
                        <Link
                          href={"https://cleartax.in/s/nre-nro-accounts"}
                          target="_blank"
                        >
                          <p className="underline underline-offset-4 text-xs font-light mt-1 text-text_light">
                            What is NRE/NRO?
                          </p>
                        </Link>
                      </div>
                    </div>
                    <div className="sm:col-span-3"></div>
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="account_number"
                        className="block text-xs font-medium leading-6 text-text_dark"
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
                          className="block w-full rounded-md border-0 py-1.5 px-2 text-text_dark shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="ifsc_code"
                        className="block text-xs font-medium leading-6 text-text_dark"
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
                          className="block w-full rounded-md border-0 py-1.5 px-2 text-text_dark shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="verification_document"
                        className="block text-xs font-medium leading-6 text-text_dark"
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
                          className="block w-full rounded-md border-0 py-1.5 px-2 text-text_dark shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                          <option value={""}>Select Document</option>
                          <option value={"Bank Statement"}>
                            Bank Statement
                          </option>
                          <option value={"Cancelled Cheque"}>
                            Cancelled Cheque
                          </option>
                        </select>
                        <Link
                          href={
                            "https://drive.google.com/file/d/1Wg_CgaLA6y67v09_2PIFsbtUHVuBJ6Uu/view"
                          }
                          target="_blank"
                        >
                          <p className="mt-1 text-xs text-text_dark underline underline-offset-2 font-light hover:text-primary">
                            See Sample
                          </p>
                        </Link>
                      </div>
                    </div>
                    {/* <div className="sm:col-span-3">
                  <label
                    htmlFor="verification_document_media"
                    className="block text-xs font-medium leading-6 text-text_dark"
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
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-text_dark shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    />
                  </div>
                </div> */}
                    <div className="sm:col-span-3 ">
                      <div className="flex gap-10 items-center pt-10">
                        {previewSrc1 && (
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

                        <label htmlFor="verification_document_media">
                          {previewSrc1 ? (
                            <p className="text-primary cursor-pointer">
                              Update
                            </p>
                          ) : (
                            <div className="bg-white text-primary  px-2 md:px-8 py-1 rounded-2xl cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 duration-300 border border-primary">
                              <p>Upload</p>
                            </div>
                          )}
                          <input
                            id="verification_document_media"
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
    </div>
  );
};

export default Page;

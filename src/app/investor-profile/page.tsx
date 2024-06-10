"use client";
import ImageModal from "@/components/ImageModal";
import ProgressBar from "@/components/ProgressBar";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import nProgress from "nprogress";
import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import { addProfileDetails } from "../profile/api";
import { toast } from "react-toastify";
const Page = () => {
  const router = useRouter();
  const [image1, setImage1] = useState<File | null>(null);
  const [previewSrc1, setPreviewSrc1] = useState<string | null>(null);
  const [image2, setImage2] = useState<File | null>(null);
  const [previewSrc2, setPreviewSrc2] = useState<string | null>(null);
  const [image3, setImage3] = useState<File | null>(null);
  const [previewSrc3, setPreviewSrc3] = useState<string | null>(null);
  const [image4, setImage4] = useState<File | null>(null);
  const [previewSrc4, setPreviewSrc4] = useState<string | null>(null);
  const [image5, setImage5] = useState<File | null>(null);
  const [previewSrc5, setPreviewSrc5] = useState<string | null>(null);
  const [currentURL, setCurrentURL] = useState<string | null>(null);
  const [errorStatus, setErrorStatus] = useState("");

  const [show, setShow] = useState(false);
  const { mutate } = useMutation({
    mutationKey: ["investorProfile1"],
    mutationFn: addProfileDetails,
    onSuccess: (data) => {
      nProgress.start();
      router.push("income-details");
    },
    onError: (error) => {
      console.log("error", error);
      toast("error occured");
      nProgress.start();
      router.push("income-details");
    },
  });
  const validate = () => {
    if (!image1) {
      setErrorStatus("image1");
    } else if (!image2) {
      setErrorStatus("image2");
    } else if (!image3) {
      setErrorStatus("image3");
    } else if (!image4) {
      setErrorStatus("image4");
    } else if (!image5) {
      setErrorStatus("image5");
    } else {
      setErrorStatus("");
      const data = {
        hand_signature_media: image1,
        passport_front_page_media: image2,
        indian_pan_card_media: image3,
        passport_size_photo_media: image4,
        oci_card_media: image5,
      };
      const formData = new FormData();
      formData.append("hand_signature_media", image1);
      formData.append("passport_front_page_media", image2);
      formData.append("indian_pan_card_media", image3);
      formData.append("passport_size_photo_media", image4);
      formData.append("oci_card_media", image5);
      console.log("file", data);
      mutate(formData);
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
  const handleFileChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setImage2(file);

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPreviewSrc2(reader.result as string);
      };
    }
    setErrorStatus("");
  };
  const handleFileChange3 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setImage3(file);

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPreviewSrc3(reader.result as string);
      };
    }
    setErrorStatus("");
  };
  const handleFileChange4 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setImage4(file);

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPreviewSrc4(reader.result as string);
      };
    }
    setErrorStatus("");
  };
  const handleFileChange5 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setImage5(file);

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPreviewSrc5(reader.result as string);
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
    <div className="px-10 md:px-20 lg:px-40  py-14 bg-secondary">
      <ProgressBar widthPercentage={44} />
      <div className="border rounded-lg p-14 mt-10 bg-white shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-x-20 border-b border-gray-900/10 pb-0 ">
          <div className="pb-12 sm:col-span-2">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Create your investor profile
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Upload files with supported types - jpg, jpeg, png, pdf
            </p>
            <p className="mt-1 text-sm leading-6 text-gray-600 flex items-center gap-2">
              <FaLock color="#000" /> Your information is always protected
            </p>
          </div>
          <div className="sm:col-span-3">
            <div className="pb-12">
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <h2 className="text-base font-semibold leading-7 text-gray-900">
                    <span className="text-red-500">*</span> Hand Signature Photo
                  </h2>
                  <p className="mt-1 text-xs text-gray-600 font-light">
                    On a clear and white background Ensure it matches your PAN
                    and Passport
                  </p>
                </div>

                <div className="sm:col-span-3 ">
                  <div className="flex gap-10 items-center">
                    <label htmlFor="hand_signature_media">
                      <p className="cursor-pointer">Upload</p>
                      <input
                        id="hand_signature_media"
                        type="file"
                        required
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
                            setCurrentURL(previewSrc1);
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
                <div className="sm:col-span-3">
                  <h2 className="text-base font-semibold leading-7 text-gray-900">
                    <span className="text-red-500">*</span> Passport Front Page
                  </h2>
                </div>

                <div className="sm:col-span-3 ">
                  <div className="flex gap-10 items-center">
                    <label htmlFor="passport_front_page_media">
                      <p className="cursor-pointer">Upload</p>
                      <input
                        id="passport_front_page_media"
                        type="file"
                        required
                        className="hidden"
                        onChange={handleFileChange2}
                        accept="image/png, image/jpeg, .pdf"
                      />
                    </label>
                    {previewSrc2 && (
                      <button
                        type="button"
                        onClick={() => {
                          if (image2?.type === "application/pdf") {
                            openPdfInNewTab(image2);
                          } else {
                            setCurrentURL(previewSrc2);
                            setShow(true);
                          }
                        }}
                      >
                        Preview
                      </button>
                    )}
                  </div>

                  {errorStatus === "image2" && (
                    <p className="text-red-500 text-xs mt-1">
                      This field is required!
                    </p>
                  )}
                </div>
                <div className="sm:col-span-3">
                  <h2 className="text-base font-semibold leading-7 text-gray-900">
                    <span className="text-red-500">*</span> Indian PAN Card
                  </h2>
                  <p className="mt-1 text-xs text-gray-600 font-light">
                    sample
                  </p>
                </div>

                <div className="sm:col-span-3 ">
                  <div className="flex gap-10 items-center">
                    <label htmlFor="indian_pan_card_media">
                      <p className="cursor-pointer">Upload</p>
                      <input
                        id="indian_pan_card_media"
                        type="file"
                        required
                        className="hidden"
                        onChange={handleFileChange3}
                        accept="image/png, image/jpeg, .pdf"
                      />
                    </label>
                    {previewSrc3 && (
                      <button
                        type="button"
                        onClick={() => {
                          if (image3?.type === "application/pdf") {
                            openPdfInNewTab(image3);
                          } else {
                            setCurrentURL(previewSrc3);
                            setShow(true);
                          }
                        }}
                      >
                        Preview
                      </button>
                    )}
                  </div>
                  {errorStatus === "image3" && (
                    <p className="text-red-500 text-xs mt-1">
                      This field is required!
                    </p>
                  )}
                </div>
                <div className="sm:col-span-3">
                  <h2 className="text-base font-semibold leading-7 text-gray-900">
                    <span className="text-red-500">*</span> Passport Size Photo
                  </h2>
                  <p className="mt-1 text-xs text-gray-600 font-light">
                    A clear and a recent picture
                  </p>
                </div>

                <div className="sm:col-span-3 ">
                  <div className="flex gap-10 items-center">
                    <label htmlFor="passport_size_photo_media">
                      <p className="cursor-pointer">Upload</p>
                      <input
                        id="passport_size_photo_media"
                        name="passport_size_photo_media"
                        type="file"
                        required
                        className="hidden"
                        onChange={handleFileChange4}
                        accept="image/png, image/jpeg, .pdf"
                      />
                    </label>
                    {previewSrc4 && (
                      <button
                        type="button"
                        onClick={() => {
                          if (image4?.type === "application/pdf") {
                            openPdfInNewTab(image4);
                          } else {
                            setCurrentURL(previewSrc4);
                            setShow(true);
                          }
                        }}
                      >
                        Preview
                      </button>
                    )}
                  </div>
                  {errorStatus === "image4" && (
                    <p className="text-red-500 text-xs mt-1">
                      This field is required!
                    </p>
                  )}
                </div>
                <div className="sm:col-span-3">
                  <h2 className="text-base font-semibold leading-7 text-gray-900">
                    <span className="text-red-500">*</span> Overseas Citizen of
                    India (OCI) Card
                  </h2>
                </div>

                <div className="sm:col-span-3 ">
                  <div className="flex gap-10 items-center">
                    <label htmlFor="oci_card_media">
                      <p className="cursor-pointer">Upload</p>
                      <input
                        id="oci_card_media"
                        type="file"
                        required
                        className="hidden"
                        onChange={handleFileChange5}
                        accept="image/png, image/jpeg, .pdf"
                      />
                    </label>
                    {previewSrc5 && (
                      <button
                        type="button"
                        onClick={() => {
                          if (image5?.type === "application/pdf") {
                            openPdfInNewTab(image5);
                          } else {
                            setCurrentURL(previewSrc5);
                            setShow(true);
                          }
                        }}
                      >
                        Preview
                      </button>
                    )}
                  </div>
                  {errorStatus === "image5" && (
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
          <Link href={"/profile"}>
            <button className="bg-white text-primary  px-2 md:px-8 py-2 rounded-lg cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 duration-300 border border-primary">
              Back
            </button>
          </Link>

          <button
            type="button"
            onClick={validate}
            className="bg-primary text-white  px-2 md:px-8 py-2 rounded-lg cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 duration-300"
          >
            Save & Next
          </button>
        </div>
      </div>
      <ImageModal isOpen={show} onClose={() => setShow(false)}>
        <div className="flex justify-between items-center">
          {currentURL && (
            <img src={currentURL} alt="Description" className="mx-auto" />
          )}
        </div>
      </ImageModal>
    </div>
  );
};

export default Page;

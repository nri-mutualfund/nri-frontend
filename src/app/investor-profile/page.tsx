"use client";
import ImageModal from "@/components/ImageModal";
import ProgressBar from "@/components/ProgressBar";
import { useMutation, useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import nProgress from "nprogress";
import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import { addProfileDetails, getInvestorProfileDetails } from "../profile/api";
import { toast } from "react-toastify";
import { IoMdEye } from "react-icons/io";
import { CustomError } from "@/utility/type";
import { getDetails } from "../verify-pan2/api";
const Page = () => {
  const router = useRouter();
  const [image0, setImage0] = useState<File | null>(null);
  const [previewSrc0, setPreviewSrc0] = useState<string | null>(null);
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
  const [uplaod0, setUploading0] = useState(false);
  const [uplaod1, setUploading1] = useState(false);
  const [uplaod2, setUploading2] = useState(false);
  const [uplaod3, setUploading3] = useState(false);
  const [uplaod4, setUploading4] = useState(false);
  const [uplaod5, setUploading5] = useState(false);

  const [show, setShow] = useState(false);
  // const { data: kycDetails } = useQuery({
  //   queryKey: ["key22"],
  //   queryFn: getDetails,
  // });
  const { data: profileData } = useQuery({
    queryKey: ["investorProfile1"],
    queryFn: getInvestorProfileDetails,
  });
  const hasIndianOrigin = profileData?.country_of_birth === "India";
  const { mutate } = useMutation({
    mutationKey: ["investorProfile1"],
    mutationFn: addProfileDetails,
    onSuccess: (data) => {
      nProgress.start();
      router.push("income-details");
    },
    onError: (error: CustomError) => {
      if (error?.response?.status === 401) {
        nProgress.start();
        toast("user unauthorized");
        router.push("/signin");
      }
    },
  });
  const validate = () => {
    if (hasIndianOrigin && !image0) {
      setErrorStatus("image0");
    } else if (!image1) {
      setErrorStatus("image1");
    } else if (!image2) {
      setErrorStatus("image2");
    } else if (!image5) {
      setErrorStatus("image5");
    } else if (!image3) {
      setErrorStatus("image3");
    } else if (!image4) {
      setErrorStatus("image4");
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
  const handleFileChange0 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setImage0(file);

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPreviewSrc0(reader.result as string);
      };
    }
    setErrorStatus("");
    setUploading0(true);
    setTimeout(() => {
      setUploading0(false);
    }, 3000);
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
    setUploading1(true);
    setTimeout(() => {
      setUploading1(false);
    }, 3000);
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
    setUploading2(true);
    setTimeout(() => {
      setUploading2(false);
    }, 3000);
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
    setUploading3(true);
    setTimeout(() => {
      setUploading3(false);
    }, 3000);
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
    setUploading4(true);
    setTimeout(() => {
      setUploading4(false);
    }, 3000);
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
    setUploading5(true);
    setTimeout(() => {
      setUploading5(false);
    }, 3000);
  };
  const openPdfInNewTab = (pdfFile: File | null) => {
    if (pdfFile) {
      const pdfUrl = URL.createObjectURL(pdfFile);
      window.open(pdfUrl, "_blank");
    }
  };
  console.log("error status", errorStatus);
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
        <div className="md:border md:rounded-lg md:p-14 mt-10 md:bg-white md:shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-x-20 border-b border-gray-900/10 pb-0 ">
            <div className="pb-12 sm:col-span-2">
              <h3 className="font-semibold">Create your investor profile</h3>
              <p className="mt-1 text-sm leading-6 text-text_dark">
                Upload files with supported types - jpg, jpeg, png, pdf
              </p>
              <p className="mt-1 text-sm leading-6 text-text_dark flex items-center gap-2">
                <FaLock color="#000" /> Your information is always protected
              </p>
            </div>
            <div className="sm:col-span-3">
              <div className="pb-12">
                <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  {hasIndianOrigin && (
                    <>
                      <div className="sm:col-span-3">
                        <h5 className="font-semibold">
                          <span className="text-red-500">*</span> Aadhaar Card
                          (Masked)
                        </h5>
                        <p className="mt-1 text-xs text-text_dark font-light">
                          Name and address must be visible.
                        </p>
                        <Link
                          href={
                            "https://drive.google.com/file/d/19aU0V6ZhD2tAwy2XR2thAL_TGU6EvpWi/view?usp=sharing"
                          }
                          target="_blank"
                        >
                          <p className="mt-1 text-xs text-text_dark underline underline-offset-2 font-light hover:text-primary">
                            See Sample
                          </p>
                        </Link>
                      </div>
                      <div className="sm:col-span-3 ">
                        <div className="flex gap-10 items-center">
                          {previewSrc0 && !uplaod0 && (
                            <button
                              type="button"
                              className="text-primary flex items-center gap-2"
                              onClick={() => {
                                if (image0?.type === "application/pdf") {
                                  openPdfInNewTab(image0);
                                } else {
                                  setCurrentURL(previewSrc0);
                                  setShow(true);
                                }
                              }}
                            >
                              Preview
                              <IoMdEye size={20} />
                            </button>
                          )}
                          <label htmlFor="aadhaar_media">
                            <div
                              className={`bg-white text-primary  px-2 md:px-8 py-1 rounded-2xl cursor-pointer hover:border hover:border-primary ${
                                uplaod0 ? "border border-primary" : ""
                              }`}
                            >
                              {uplaod0 ? (
                                <p>Uploading...</p>
                              ) : previewSrc0 ? (
                                <p>Update</p>
                              ) : (
                                <p>Upload</p>
                              )}
                            </div>

                            <input
                              id="aadhaar_media"
                              type="file"
                              required
                              onChange={handleFileChange0}
                              className="hidden"
                              accept="image/png, image/jpeg, .pdf"
                            />
                          </label>
                        </div>

                        {errorStatus !== "image0" && (
                          <p className="text-red-500 text-xs mt-1">
                            This field is required!
                          </p>
                        )}
                      </div>
                    </>
                  )}
                  <div className="sm:col-span-3">
                    <h5 className="font-semibold">
                      <span className="text-red-500">*</span> Hand Signature
                      Photo
                    </h5>
                    <p className="mt-1 text-xs text-text_dark font-light">
                      On a clear and white background. Ensure it matches your
                      PAN and Passport.
                    </p>
                    <Link
                      href={
                        "https://drive.google.com/file/d/149gBV4Fd4giw_KyJEmiZPoB4wctWW8_j/view"
                      }
                      target="_blank"
                    >
                      <p className="mt-1 text-xs text-text_dark underline underline-offset-2 font-light hover:text-primary">
                        See Sample
                      </p>
                    </Link>
                  </div>

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
                              setCurrentURL(previewSrc1);
                              setShow(true);
                            }
                          }}
                        >
                          Preview
                          <IoMdEye size={20} />
                        </button>
                      )}
                      <label htmlFor="hand_signature_media">
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
                          id="hand_signature_media"
                          type="file"
                          required
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
                  <div className="sm:col-span-3">
                    <h5 className="font-semibold">
                      <span className="text-red-500">*</span>Passport Front Page
                      (Self-Attested)
                    </h5>
                    <Link
                      href={
                        "https://drive.google.com/file/d/1Hg1QX9gX02fuM-vM2WsOmibL0ZBSiUUj/view"
                      }
                      target="_blank"
                    >
                      <p className="mt-1 text-xs text-text_dark underline underline-offset-2 font-light hover:text-primary">
                        See Sample
                      </p>
                    </Link>
                  </div>

                  <div className="sm:col-span-3 ">
                    <div className="flex gap-10 items-center">
                      {previewSrc2 && !uplaod2 && (
                        <button
                          type="button"
                          className="text-primary flex items-center gap-2"
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
                          <IoMdEye size={20} />
                        </button>
                      )}
                      <label htmlFor="passport_front_page_media">
                        <div
                          className={`bg-white text-primary  px-2 md:px-8 py-1 rounded-2xl cursor-pointer hover:border hover:border-primary ${
                            uplaod2 ? "border border-primary" : ""
                          }`}
                        >
                          {uplaod2 ? (
                            <p>Uploading...</p>
                          ) : previewSrc2 ? (
                            <p>Update</p>
                          ) : (
                            <p>Upload</p>
                          )}
                        </div>

                        <input
                          id="passport_front_page_media"
                          type="file"
                          required
                          className="hidden"
                          onChange={handleFileChange2}
                          accept="image/png, image/jpeg, .pdf"
                        />
                      </label>
                    </div>

                    {errorStatus === "image2" && (
                      <p className="text-red-500 text-xs mt-1">
                        This field is required!
                      </p>
                    )}
                  </div>
                  <div className="sm:col-span-3">
                    <h5 className="font-semibold">
                      <span className="text-red-500">*</span> Passport Back Page
                      (Self-Attested)
                    </h5>
                    <Link
                      href={
                        "https://drive.google.com/file/d/1Nn4FmYTCzK_aoWJEKqXfLP8OpVHJOGL6/view"
                      }
                      target="_blank"
                    >
                      <p className="mt-1 text-xs text-text_dark underline underline-offset-2 font-light hover:text-primary">
                        See Sample
                      </p>
                    </Link>
                  </div>

                  <div className="sm:col-span-3 ">
                    <div className="flex gap-10 items-center">
                      {previewSrc5 && !uplaod5 && (
                        <button
                          type="button"
                          className="text-primary flex items-center gap-2"
                          onClick={() => {
                            if (image2?.type === "application/pdf") {
                              openPdfInNewTab(image5);
                            } else {
                              setCurrentURL(previewSrc5);
                              setShow(true);
                            }
                          }}
                        >
                          Preview
                          <IoMdEye size={20} />
                        </button>
                      )}
                      <label htmlFor="oci_card_media">
                        <div
                          className={`bg-white text-primary  px-2 md:px-8 py-1 rounded-2xl cursor-pointer hover:border hover:border-primary ${
                            uplaod5 ? "border border-primary" : ""
                          }`}
                        >
                          {uplaod5 ? (
                            <p>Uploading...</p>
                          ) : previewSrc5 ? (
                            <p>Update</p>
                          ) : (
                            <p>Upload</p>
                          )}
                        </div>
                        <input
                          id="oci_card_media"
                          type="file"
                          required
                          className="hidden"
                          onChange={handleFileChange5}
                          accept="image/png, image/jpeg, .pdf"
                        />
                      </label>
                    </div>
                    {errorStatus === "image5" && (
                      <p className="text-red-500 text-xs mt-1">
                        This field is required!
                      </p>
                    )}
                  </div>
                  <div className="sm:col-span-3">
                    <h5 className="font-semibold">
                      <span className="text-red-500">*</span> Indian PAN Card
                    </h5>
                    <Link
                      href={
                        "https://drive.google.com/file/d/1jTqAfIWCI4Ncr-N9qvl0AAqwBML0T5me/view"
                      }
                      target="_blank"
                    >
                      <p className="mt-1 text-xs text-text_dark underline underline-offset-2 font-light hover:text-primary">
                        See Sample
                      </p>
                    </Link>
                  </div>

                  <div className="sm:col-span-3 ">
                    <div className="flex gap-10 items-center">
                      {previewSrc3 && !uplaod3 && (
                        <button
                          type="button"
                          className="text-primary flex items-center gap-2"
                          onClick={() => {
                            if (image1?.type === "application/pdf") {
                              openPdfInNewTab(image3);
                            } else {
                              setCurrentURL(previewSrc3);
                              setShow(true);
                            }
                          }}
                        >
                          Preview
                          <IoMdEye size={20} />
                        </button>
                      )}

                      <label htmlFor="indian_pan_card_media">
                        <div
                          className={`bg-white text-primary  px-2 md:px-8 py-1 rounded-2xl cursor-pointer hover:border hover:border-primary ${
                            uplaod3 ? "border border-primary" : ""
                          }`}
                        >
                          {uplaod3 ? (
                            <p>Uploading...</p>
                          ) : previewSrc3 ? (
                            <p>Update</p>
                          ) : (
                            <p>Upload</p>
                          )}
                        </div>

                        <input
                          id="indian_pan_card_media"
                          type="file"
                          required
                          className="hidden"
                          onChange={handleFileChange3}
                          accept="image/png, image/jpeg, .pdf"
                        />
                      </label>
                    </div>
                    {errorStatus === "image3" && (
                      <p className="text-red-500 text-xs mt-1">
                        This field is required!
                      </p>
                    )}
                  </div>
                  <div className="sm:col-span-3">
                    <h5 className="font-semibold">
                      <span className="text-red-500">*</span> Passport Size
                      Photo
                    </h5>
                    <p className="mt-1 text-xs text-text_dark font-light">
                      A clear & recent picture
                    </p>
                    <Link
                      href={
                        "https://drive.google.com/file/d/170f8w7Qc8I2kGWqJd5MYVVJ7_1kxbPod/view"
                      }
                      target="_blank"
                    >
                      <p className="mt-1 text-xs text-text_dark underline underline-offset-2 font-light hover:text-primary">
                        (See Specifications)
                      </p>
                    </Link>
                  </div>

                  <div className="sm:col-span-3 ">
                    <div className="flex gap-10 items-center">
                      {previewSrc4 && !uplaod4 && (
                        <button
                          type="button"
                          className="text-primary flex items-center gap-2"
                          onClick={() => {
                            if (image2?.type === "application/pdf") {
                              openPdfInNewTab(image4);
                            } else {
                              setCurrentURL(previewSrc4);
                              setShow(true);
                            }
                          }}
                        >
                          Preview
                          <IoMdEye size={20} />
                        </button>
                      )}
                      <label htmlFor="passport_size_photo_media">
                        <div
                          className={`bg-white text-primary  px-2 md:px-8 py-1 rounded-2xl cursor-pointer hover:border hover:border-primary ${
                            uplaod4 ? "border border-primary" : ""
                          }`}
                        >
                          {uplaod4 ? (
                            <p>Uploading...</p>
                          ) : previewSrc4 ? (
                            <p>Update</p>
                          ) : (
                            <p>Upload</p>
                          )}
                        </div>
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
                    </div>
                    {errorStatus === "image4" && (
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
              <button className="bg-white text-primary  px-8 py-2 rounded-lg cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 duration-300 border border-primary">
                Back
              </button>
            </Link>

            <button
              type="button"
              onClick={validate}
              className="bg-primary text-white  px-8 py-2 rounded-lg cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 duration-300"
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
    </div>
  );
};

export default Page;

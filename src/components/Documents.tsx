import { getInvestorProfileDetails } from "@/app/profile/api";
import ImageModal from "@/components/ImageModal";
import ProgressBar from "@/components/ProgressBar";
import { useMutation, useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import nProgress from "nprogress";
import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import { toast } from "react-toastify";
import { IoMdEye } from "react-icons/io";
import { CustomError } from "@/utility/type";
import { isFileSizeValid } from "@/utility/helper";

const Documents = () => {
  const { data: profileData, isLoading } = useQuery({
    queryKey: ["investorProfile1"],
    queryFn: getInvestorProfileDetails,
  });
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
  const [show, setShow] = useState(false);
  const [uplaod0, setUploading0] = useState(false);
  const [uplaod1, setUploading1] = useState(false);
  const [uplaod2, setUploading2] = useState(false);
  const [uplaod3, setUploading3] = useState(false);
  const [uplaod4, setUploading4] = useState(false);
  const [uplaod5, setUploading5] = useState(false);
  const [maxSizeLimit, setMaxSizeLimit] = useState(false);

  const handleFileChange0 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (isFileSizeValid(file.size)) {
        setImage0(file);

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setPreviewSrc0(reader.result as string);
        };
        setErrorStatus("");
        setMaxSizeLimit(false);
        setUploading0(true);
        setTimeout(() => {
          setUploading0(false);
        }, 3000);
      } else {
        setMaxSizeLimit(true);
      }
    }
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (isFileSizeValid(file.size)) {
        setImage1(file);

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setPreviewSrc1(reader.result as string);
        };
        setErrorStatus("");
        setMaxSizeLimit(false);
        setUploading1(true);
        setTimeout(() => {
          setUploading1(false);
        }, 3000);
      } else {
        setMaxSizeLimit(true);
      }
    }
  };
  const handleFileChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (isFileSizeValid(file.size)) {
        setImage2(file);

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setPreviewSrc2(reader.result as string);
        };
        setErrorStatus("");
        setMaxSizeLimit(false);
        setUploading2(true);
        setTimeout(() => {
          setUploading2(false);
        }, 3000);
      } else {
        setMaxSizeLimit(true);
      }
    }
  };
  const handleFileChange3 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (isFileSizeValid(file.size)) {
        setImage3(file);

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setPreviewSrc3(reader.result as string);
        };
        setErrorStatus("");
        setMaxSizeLimit(false);
        setUploading3(true);
        setTimeout(() => {
          setUploading3(false);
        }, 3000);
      } else {
        setMaxSizeLimit(true);
      }
    }
  };
  const handleFileChange4 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (isFileSizeValid(file.size)) {
        setImage4(file);

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setPreviewSrc4(reader.result as string);
        };
        setErrorStatus("");
        setMaxSizeLimit(false);
        setUploading4(true);
        setTimeout(() => {
          setUploading4(false);
        }, 3000);
      } else {
        setMaxSizeLimit(true);
      }
    }
  };
  const handleFileChange5 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (isFileSizeValid(file.size)) {
        setImage5(file);

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setPreviewSrc5(reader.result as string);
        };
        setErrorStatus("");
        setMaxSizeLimit(false);
        setUploading5(true);
        setTimeout(() => {
          setUploading5(false);
        }, 3000);
      } else {
        setMaxSizeLimit(true);
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
    <div className="md:px-6 py-6 lg:col-span-9">
      <ImageModal isOpen={show} onClose={() => setShow(false)}>
        <div className="flex justify-between items-center">
          {currentURL && (
            <img src={currentURL} alt="Description" className="mx-auto" />
          )}
        </div>
      </ImageModal>
      {/* <span id="headlessui-tabs-panel-:r4e:" role="tabpanel" aria-labelledby="headlessui-tabs-tab-:r44:" tabindex="-1" style="position: fixed; top: 1px; left: 1px; width: 1px; height: 0px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px;"></span>
<span id="headlessui-tabs-panel-:r4f:" role="tabpanel" aria-labelledby="headlessui-tabs-tab-:r45:" tabindex="-1" style="position: fixed; top: 1px; left: 1px; width: 1px; height: 0px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px;"></span>
<span id="headlessui-tabs-panel-:r4g:" role="tabpanel" tabindex="-1" aria-labelledby="headlessui-tabs-tab-:r46:" style="position: fixed; top: 1px; left: 1px; width: 1px; height: 0px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px;"></span> */}
      <div
        id="headlessui-tabs-panel-:r4h:"
        role="tabpanel"
        aria-labelledby="headlessui-tabs-tab-:r47:"
        data-headlessui-state="selected"
      >
        <div className="divide-y divide-gray-200 lg:col-span-9">
          <div className=" divide-y divide-gray-200">
            <div className="space-y-1">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Documents
              </h3>
              <div className="flex gap-2 items-center">
                <p className="mt-2 text-sm text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="inline w-4 h-4 mr-1 -mt-1"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </p>
                <p className="max-w-2xl text-sm text-gray-500">
                  Upload documents with supported types - jpg, jpeg, png, pdf
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 pt-10">
              <div className="sm:col-span-3">
                <h5 className="font-semibold">
                  <span className="text-red-500">*</span> Aadhaar Card (Masked)
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

                {errorStatus === "image0" && (
                  <p className="text-red-500 text-xs mt-1">
                    This field is required!
                  </p>
                )}
              </div>
              <div className="sm:col-span-3">
                <h5 className="font-semibold">
                  <span className="text-red-500">*</span> Hand Signature Photo
                </h5>
                <p className="mt-1 text-xs text-text_dark font-light">
                  On a clear and white background. Ensure it matches your PAN
                  and Passport.
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
                  <span className="text-red-500">*</span> Passport Front Page
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
                  <span className="text-red-500">*</span> Passport Size Photo
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
            {maxSizeLimit && (
              <div className="bg-red-100 rounded-lg mt-10 p-4">
                <h4 className="text-red-500 text-center text-sm">
                  File size should not exceed 244 KB
                </h4>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;

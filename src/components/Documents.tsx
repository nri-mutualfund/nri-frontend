import { getInvestorProfileDetails } from '@/app/profile/api';
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
        <div className="p-6 lg:col-span-9">
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
            <div id="headlessui-tabs-panel-:r4h:" role="tabpanel" aria-labelledby="headlessui-tabs-tab-:r47:" data-headlessui-state="selected">
                <div className="divide-y divide-gray-200 lg:col-span-9">
                    <div className=" divide-y divide-gray-200">
                        <div className="space-y-1">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Documents</h3>
                            <div className='flex gap-2 items-center'>
                                <p className="mt-2 text-sm text-gray-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="inline w-4 h-4 mr-1 -mt-1">
                                        <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clip-rule="evenodd"></path>
                                    </svg>
                                </p>
                                <p className="max-w-2xl text-sm text-gray-500">Upload documents with supported types - jpg, jpeg, png, pdf, mp4, mov</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <dl className="divide-y divide-gray-200">
                                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
                                    <dt className="text-sm font-medium text-gray-600">
                                        <span className="flex">Aadhaar Card (Masked)</span>
                                        <span className="flex text-xs font-normal text-primary italic">Name and address must be visible</span>
                                        <span className="flex text-xs font-normal text-primary italic">
                                            <a href="https://drive.google.com/file/d/19aU0V6ZhD2tAwy2XR2thAL_TGU6EvpWi/view?usp=sharing" className="text-primary500 underline" target="_blank" rel="noopener noreferrer">See sample</a>
                                        </span>
                                    </dt>
                                    <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0 justify-center">
                                        <span className="ml-4 flex flex-shrink-0 items-start space-x-4"></span>
                                        <span className="ml-4 flex flex-shrink-0 items-start space-x-4">
                                            <button type="button" className="rounded-md bg-white font-medium text-primary hover:text-primary500 focus:outline-none focus:ring-2 focus:ring-primary500 focus:ring-offset-2">
                                                <div className='w-[150px]'>
                                                    <label htmlFor='aadhaar' className="button primary block cursor-pointer">
                                                    {previewSrc0 ? (
                          <p className="text-primary cursor-pointer">Update</p>
                        ) : (
                            <p>Upload</p>
                        )}
                                                        </label>
                                                    <input
                                                        id="aadhaar"
                                                        type="file"
                                                        required
                                                        onChange={handleFileChange0}
                                                        className="hidden"
                                                        accept="image/png, image/jpeg, .pdf"
                                                    />
                                                </div>
                                            </button>
                                            {previewSrc0 && (
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
                                        </span>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                        <div className="mt-4">
                            <dl className="divide-y divide-gray-200">
                                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
                                    <dt className="text-sm font-medium text-gray-600">
                                        <span className="flex">Hand Signature Photo</span>
                                        <span className="flex text-xs font-normal text-primary italic">
                                            On a clear and white background. Ensure it matches your
                                            PAN and Passport.</span>
                                        <span className="flex text-xs font-normal text-primary italic">
                                            <a
                                                href="https://drive.google.com/file/d/149gBV4Fd4giw_KyJEmiZPoB4wctWW8_j/view"
                                                className="text-primary500 underline" target="_blank" rel="noopener noreferrer">See sample</a>
                                        </span>
                                    </dt>
                                    <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0 justify-center">
                                        <span className="ml-4 flex flex-shrink-0 items-start space-x-4"></span>
                                        <span className="ml-4 flex flex-shrink-0 items-start space-x-4">
                                            <button type="button" 
                                            className="rounded-md bg-white font-medium text-primary hover:text-primary500 focus:outline-none focus:ring-2 focus:ring-primary500 focus:ring-offset-2"
                                            >
                                                <div className='w-[150px]'>
                                                    <label htmlFor="hand_signature_media" className="button primary block cursor-pointer">
                                                    {previewSrc1 ? (
                          <p className="text-primary cursor-pointer">Update</p>
                        ) : (
                            <p>Upload</p>
                        )}
                                                    </label>
                                                    <input
                                                        id="hand_signature_media"
                                                        type="file"
                                                        required
                                                        onChange={handleFileChange}
                                                        className="hidden"
                                                        accept="image/png, image/jpeg, .pdf"
                                                    />
                                                </div>
                                            </button>
                                            {previewSrc1 && (
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
                                        </span>
                                    </dd>
                                    {errorStatus === "image1" && (
                                        <p className="text-red-500 text-xs mt-1">
                                            This field is required!
                                        </p>
                                    )}
                                </div>
                            </dl>
                        </div>
                        <div className="mt-4">
                            <dl className="divide-y divide-gray-200">
                                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
                                    <dt className="text-sm font-medium text-gray-600">
                                        <span className="flex">Passport Front Page
                                            (Self-Attested)</span>
                                        <span className="flex text-xs font-normal text-primary italic">
                                            <a
                                                href="https://drive.google.com/file/d/1Hg1QX9gX02fuM-vM2WsOmibL0ZBSiUUj/view"
                                                className="text-primary500 underline" target="_blank" rel="noopener noreferrer">See sample</a>
                                        </span>
                                    </dt>
                                    <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0 justify-center">
                                        <span className="ml-4 flex flex-shrink-0 items-start space-x-4"></span>
                                        <span className="ml-4 flex flex-shrink-0 items-start space-x-4">
                                            <button type="button" className="rounded-md bg-white font-medium text-primary hover:text-primary500 focus:outline-none focus:ring-2 focus:ring-primary500 focus:ring-offset-2">
                                                <div className='w-[150px]'>
                                                    <label htmlFor="passport_front_page_media" className="button primary block cursor-pointer">
                                                    {previewSrc2 ? (
                          <p className="text-primary cursor-pointer">Update</p>
                        ) : (
                            <p>Upload</p>
                        )}
                                                    </label>
                                                    <input
                                                        id="passport_front_page_media"
                                                        type="file"
                                                        required
                                                        className="hidden"
                                                        onChange={handleFileChange2}
                                                        accept="image/png, image/jpeg, .pdf"
                                                    />
                                                </div>
                                            </button>
                                            {previewSrc2 && (
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
                                        </span>

                                    </dd>
                                    {errorStatus === "image2" && (
                                        <p className="text-red-500 text-xs mt-1">
                                            This field is required!
                                        </p>
                                    )}
                                </div>
                            </dl>
                        </div>
                        <div className="mt-4">
                            <dl className="divide-y divide-gray-200">
                                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
                                    <dt className="text-sm font-medium text-gray-600">
                                        <span className="flex">Passport Back Page
                                            (Self-Attested)</span>
                                        <span className="flex text-xs font-normal text-primary italic">
                                            <a
                                                href="https://drive.google.com/file/d/1Nn4FmYTCzK_aoWJEKqXfLP8OpVHJOGL6/view"
                                                className="text-primary500 underline" target="_blank" rel="noopener noreferrer">See sample</a>
                                        </span>
                                    </dt>
                                    <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0 justify-center">
                                        <span className="ml-4 flex flex-shrink-0 items-start space-x-4"></span>
                                        <span className="ml-4 flex flex-shrink-0 items-start space-x-4">
                                            <button type="button" className="rounded-md bg-white font-medium text-primary hover:text-primary500 focus:outline-none focus:ring-2 focus:ring-primary500 focus:ring-offset-2">
                                                <div className='w-[150px]'>
                                                    <label
                                                        htmlFor="oci_card_media"
                                                        className="button primary block cursor-pointer">
                                                            {previewSrc5 ? (
                          <p className="text-primary cursor-pointer">Update</p>
                        ) : (
                            <p>Upload</p>
                        )}
                                                        </label>
                                                    <input
                                                        id="oci_card_media"
                                                        type="file"
                                                        required
                                                        className="hidden"
                                                        onChange={handleFileChange5}
                                                        accept="image/png, image/jpeg, .pdf"
                                                    />
                                                </div>
                                            </button>
                                            {previewSrc5 && (
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
                                        </span>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                        <div className="mt-4">
                            <dl className="divide-y divide-gray-200">
                                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
                                    <dt className="text-sm font-medium text-gray-600">
                                        <span className="flex">Indian PAN Card</span>
                                        <span className="flex text-xs font-normal text-primary italic">
                                            <a
                                                href="https://drive.google.com/file/d/1jTqAfIWCI4Ncr-N9qvl0AAqwBML0T5me/view"
                                                className="text-primary500 underline" target="_blank" rel="noopener noreferrer">See sample</a>
                                        </span>
                                    </dt>
                                    <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0 justify-center">
                                        <span className="ml-4 flex flex-shrink-0 items-start space-x-4"></span>
                                        <span className="ml-4 flex flex-shrink-0 items-start space-x-4">
                                            <button type="button" className="rounded-md bg-white font-medium text-primary hover:text-primary500 focus:outline-none focus:ring-2 focus:ring-primary500 focus:ring-offset-2">
                                                <div className='w-[150px]'>
                                                    <label
                                                        htmlFor="indian_pan_card_media"
                                                        className="button primary block cursor-pointer">
                                                            {previewSrc3 ? (
                          <p className="text-primary cursor-pointer">Update</p>
                        ) : (
                            <p>Upload</p>
                        )}
                                                        </label>
                                                    <input
                                                        id="indian_pan_card_media"
                                                        type="file"
                                                        required
                                                        className="hidden"
                                                        onChange={handleFileChange3}
                                                        accept="image/png, image/jpeg, .pdf"
                                                    />
                                                </div>
                                            </button>
                                            {previewSrc3 && (
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
                                        </span>
                                    </dd>
                                    {errorStatus === "image3" && (
                                        <p className="text-red-500 text-xs mt-1">
                                            This field is required!
                                        </p>
                                    )}
                                </div>
                            </dl>
                        </div>
                        <div className="mt-4">
                            <dl className="divide-y divide-gray-200">
                                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
                                    <dt className="text-sm font-medium text-gray-600">
                                        <span className="flex">Passport Size Photo</span>
                                        <span className="flex text-xs font-normal text-primary italic">
                                            A clear & recent picture</span>

                                        <span className="flex text-xs font-normal text-primary italic">
                                            <a
                                                href="https://drive.google.com/file/d/170f8w7Qc8I2kGWqJd5MYVVJ7_1kxbPod/view"
                                                className="text-primary500 underline" target="_blank" rel="noopener noreferrer">See sample</a>
                                        </span>
                                    </dt>
                                    <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0 justify-center">
                                        <span className="ml-4 flex flex-shrink-0 items-start space-x-4"></span>
                                        <span className="ml-4 flex flex-shrink-0 items-start space-x-4">
                                            <button type="button" className="rounded-md bg-white font-medium text-primary hover:text-primary500 focus:outline-none focus:ring-2 focus:ring-primary500 focus:ring-offset-2">
                                                <div className='w-[150px]'>
                                                    <label
                                                        htmlFor="passport_size_photo_media"
                                                        className="button primary block cursor-pointer">
                                                            {previewSrc4 ? (
                          <p className="text-primary cursor-pointer">Update</p>
                        ) : (
                            <p>Upload</p>
                        )}
                                                        </label>
                                                    <input
                                                        id="passport_size_photo_media"
                                                        name="passport_size_photo_media"
                                                        type="file"
                                                        required
                                                        className="hidden"
                                                        onChange={handleFileChange4}
                                                        accept="image/png, image/jpeg, .pdf"
                                                    />
                                                </div>
                                            </button>
                                            {previewSrc4 && (
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
                                        </span>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Documents
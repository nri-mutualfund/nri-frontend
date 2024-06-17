
import { getProfilegDataInSettings } from '@/app/settings/api';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'

const SettingProfile = () => {
    const { data: settingProfileData, isLoading } = useQuery({
        queryKey: ["settting-profile"],
        queryFn: getProfilegDataInSettings,
    });
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };
    return (
        <div >

            <form className="divide-y divide-gray-200 lg:col-span-9"
            //  action="#" method="POST"
            onSubmit={(e)=>{e.preventDefault()}}
             >
                <div className="py-6 px-4 sm:p-6 lg:pb-8 text-gray-900">
                    <h3 className="text-md font-medium">Personal details</h3>
                    <div className="mt-6 grid grid-cols-12 gap-6">
                        <div className="col-span-12 sm:col-span-12">
                            <label className="block text-sm font-medium text-gray-600">Legal Full name</label>
                            <input type="text" name="first-name" id="first-name" required
                            disabled
                                defaultValue={settingProfileData?.userDetails?.first_name}
                                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary500 focus:outline-none focus:ring-primary500 sm:text-sm placeholder:text-gray-400 placeholder:italic" placeholder="John" />
                        </div>
                        {/* <div className="col-span-12 sm:col-span-6">
                            <label className="block text-sm font-medium text-gray-600">Legal Last name</label>
                            <input type="text" name="last-name" id="last-name" required className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary500 focus:outline-none focus:ring-primary500 sm:text-sm placeholder:text-gray-400 placeholder:italic" placeholder="Doe" />
                        </div> */}
                        <div className="col-span-12 sm:col-span-6">
                            <label className="block text-sm font-medium text-gray-600">Email</label>
                            <input type="email" name="email" id="email"
                                defaultValue={settingProfileData?.userDetails?.email}
                                required
                                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary500 focus:outline-none focus:ring-primary500 sm:text-sm placeholder:text-gray-400 placeholder:italic disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500" disabled />
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                            <div className="relative rounded-md shadow-sm">
                                <label className="block text-sm font-medium leading-6 text-gray-600">Mobile</label>
                                <input type="text" name="mobile" id="mobile"
                                    defaultValue={settingProfileData?.userDetails?.phone_number}
                                    // pl-28
                                    className="block w-full rounded-md  border border-gray-300 py-1.5 px-3 shadow-sm focus:border-primary500 focus:outline-none focus:ring-primary500 sm:text-sm placeholder:text-gray-400 placeholder:italic sm:leading-6 " ></input>

                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                            <label className="block text-sm font-medium text-gray-600">Date of Birth</label>
                            <input type="text" name="dob"
                                disabled
                                defaultValue={settingProfileData?.kycDetails?.dob}
                                className="mt-1 block w-1/2 rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary500 focus:outline-none focus:ring-primary500 sm:text-sm placeholder:text-gray-400 placeholder:italic disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500" placeholder="00-00-0000" ></input>
                        </div>
                    </div>
                </div>
                <div className="py-6 px-4 sm:p-6 lg:pb-8 text-gray-900">
                    <h3 className="text-md font-medium">Document numbers</h3>
                    <div className="mt-6 grid grid-cols-12 gap-6">
                        <div className="col-span-12 sm:col-span-6">
                            <label className="block text-sm font-medium text-gray-600">PAN (Permanent Account Number)</label>
                            {/* <input 
                            type="password"
                            // disabled
                             name="pan" 
                             id="pan"
                                defaultValue={settingProfileData?.kycDetails?.pan}
                                required className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary500 focus:outline-none focus:ring-primary500 sm:text-sm placeholder:text-gray-400 placeholder:italic disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500" 
                                // placeholder="ABCDE1234F (10 digit)"
                                ></input> */}
                            <div className="relative">
                                <input
                                    name="pan"
                                    id="pan"
                                    defaultValue={settingProfileData?.kycDetails?.pan}
                                    type={showPassword ? "text" : "password"} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
                                <button type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute top-0 end-0 p-3.5 rounded-e-md">
                                    {showPassword ? (
                                        <svg
                                            className="flex-shrink-0 size-3.5 text-gray-400 dark:text-neutral-600"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                            <circle cx="12" cy="12" r="3"></circle>
                                        </svg>
                                    ) : (
                                        <svg
                                            className="flex-shrink-0 size-3.5 text-gray-400 dark:text-neutral-600"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                                            <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                                            <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                                            <line x1="2" x2="22" y1="2" y2="22"></line>
                                        </svg>
                                    )
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-6 px-4 sm:p-6 lg:pb-8 text-gray-900">
                    <h3 className="text-md font-medium">Current Residential address</h3>
                    <div className="mt-6 grid grid-cols-12 gap-6">
                        <div className="-mt-4 col-span-12 sm:col-span-6">
                            <label className="block text-sm font-medium text-gray-600">Address - Line 1</label>
                            <input type="text"
                                defaultValue={settingProfileData?.addressDetails?.residential_address?.address1}

                                name="address1" id="address1" required className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary500 focus:outline-none focus:ring-primary500 sm:text-sm placeholder:text-gray-400 placeholder:italic" placeholder="123 Main St" ></input>
                        </div>
                        <div className="sm:-mt-4 col-span-12 sm:col-span-6">
                            <label className="block text-sm font-medium text-gray-600">Address - Line 2</label>
                            <div className="relative">
                                <input type="text"
                                    defaultValue={settingProfileData?.addressDetails?.residential_address?.address2}

                                    name="address2" id="address2" required className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary500 focus:outline-none focus:ring-primary500 sm:text-sm placeholder:text-gray-400 placeholder:italic" placeholder="Apt 789" ></input>
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                            <label className="block text-sm font-medium text-gray-600">City</label>
                            <input type="text"
                                defaultValue={settingProfileData?.addressDetails?.residential_address?.city}

                                name="city" id="city" required className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary500 focus:outline-none focus:ring-primary500 sm:text-sm placeholder:text-gray-400 placeholder:italic" placeholder="New York" ></input>
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                            <label className="block text-sm font-medium text-gray-600">State</label>
                            <div className="relative">
                                <input type="text"
                                    defaultValue={settingProfileData?.addressDetails?.residential_address?.state}

                                    name="state" id="state" required className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary500 focus:outline-none focus:ring-primary500 sm:text-sm placeholder:text-gray-400 placeholder:italic" placeholder="New York" ></input>
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                            <label className="block text-sm font-medium text-gray-600">Zip Code</label>
                            <div className="relative">
                                <input type="text"
                                    defaultValue={settingProfileData?.addressDetails?.residential_address?.zipcode}

                                    name="zipcode" id="zipcode" required className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary500 focus:outline-none focus:ring-primary500 sm:text-sm placeholder:text-gray-400 placeholder:italic" placeholder="10001" ></input>
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                            <label className="block text-sm font-medium text-gray-600">Country of Residence</label><div className="relative mt-1">
                                <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-sm border border-gray-300 focus:border-primary500 focus:outline-none focus:ring-primary500 focus:ring-1 sm:text-sm">
                                    <input
                                        type="text"
                                        defaultValue={settingProfileData?.addressDetails?.residential_address?.country}
                                        className="w-full border-none py-2 pl-3 pr-10 sm:text-sm leading-5 focus:ring-0" id="headlessui-combobox-input-:rjs:"

                                    ></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex mt-4 items-center">
                    <div className="flex-1 justify-start text-sm text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="inline w-4 h-4 mr-1 -mt-1">
                            <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clip-rule="evenodd"></path>
                        </svg>
                        Your information is encrypted and secure
                    </div>
                    <div className="inline-flex justify-end py-4 px-4 sm:px-6">
                        <button 
                        onClick={()=>{
                            console.log('clicked')
                        }}
                        // type="submit" 
                        className="ml-5 inline-flex justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary700 focus:outline-none focus:ring-2 focus:ring-primary500 focus:ring-offset-2 disabled:bg-gray-300">Save</button>
                    </div>
                </div>
            </form>
        </div>
    )
}


export default SettingProfile;

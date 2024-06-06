"use client";
import ProgressBar from "@/components/ProgressBar";
import Link from "next/link";
import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";

type NomineeDetail = {
    full_legal_name: string
    relation: string
    pan: string
    dob: string
    address: string
    percentage_share: string
}
const Page = () => {
    const [canAddNominee, setCanAddNominee] = useState(false);
    const submit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());
        console.log("data", data);
    };
    const [nomineeDetailList, setNomineeDetailList] = useState<NomineeDetail[]>([
        {
            full_legal_name: '',
            relation: '',
            pan: '',
            dob: '',
            address: '',
            percentage_share: '',
        }
    ]);

    function addNominee() {
        setNomineeDetailList([
            ...nomineeDetailList,
            {
                full_legal_name: '',
                relation: '',
                pan: '',
                dob: '',
                address: '',
                percentage_share: '',
            },
        ]);
    }
    function removeNominee(item: NomineeDetail) {
        setNomineeDetailList(
            nomineeDetailList.filter((nominee) => nominee !== item),
        );
    }

    console.log('nomineeDetailList', nomineeDetailList);
    function handleNomineeDetailListUpdate(selectedNominee: NomineeDetail, key: string, value: string) {
        setNomineeDetailList(
            nomineeDetailList.map((currentNominee) =>
                currentNominee === selectedNominee
                    ? {
                        ...currentNominee,
                        [key]: value,
                    }
                    : currentNominee,
            ),
        );
    }
    const totalPercentage = nomineeDetailList.reduce((amt, item)=> amt += Number(item?.percentage_share), 0)
    return (
        <div className="px-10 md:px-20 lg:px-40  py-14 bg-secondary min-h-screen">
            <ProgressBar widthPercentage={100} />
            <form
                className="border rounded-lg p-14 mt-10 bg-white shadow-sm"
                onSubmit={submit}
            >
                <div className="grid grid-cols-1 gap-x-20 border-b border-gray-900/10 pb-0">
                    <div className="pb-10 col-span-2 flex gap-2 ">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">
                            Add Nominee(s) for your Investment
                        </h2>
                        <label className="inline-flex items-center mb-5 cursor-pointer">
                            <input type="checkbox" checked={canAddNominee} className="sr-only peer" onChange={e => {
                                console.log('e', e.target.value)
                                setCanAddNominee(prev => !prev)
                            }} />
                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                        </label>
                    </div>
                    {canAddNominee &&
                        <div className="col-span-3">
                            <div className="pb-10">
                                <table className="table-auto w-full text-sm text-left rtl:text-right ">
                                    <thead>
                                        <tr className="border-b-gray-200 border-b-2 ">
                                            <th className="pb-2">FULL LEGAL NAME</th>
                                            <th className="pb-2">RELATION</th>
                                            <th className="pb-2">NOMINEE’S PAN</th>
                                            <th className="pb-2">NOMINEE’S DOB</th>
                                            <th className="pb-2">NOMINEE’S Address</th>
                                            <th className="pb-2">% SHARE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            nomineeDetailList.map((item, idx) => {
                                                return <tr key={idx}>
                                                    <td className="pt-2">
                                                        <input type="text"
                                                            className="block w-11/12 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                            onChange={e => handleNomineeDetailListUpdate(item, 'full_legal_name', e.target.value)}
                                                            value={item?.full_legal_name} />
                                                    </td>
                                                    <td className="pt-2">
                                                    {/* <input type="text"
                                                            className="block w-11/12 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                            onChange={e => handleNomineeDetailListUpdate(item, 'relation', e.target.value)}
                                                            value={item?.relation} /> */}
                                                        <select
                                                            className="block w-32 rounded-md border-0  py-[9px] px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                                            onChange={e => handleNomineeDetailListUpdate(item, 'relation', e.target.value)}
                                                            value={item?.relation} > 
                                                            <option>Father</option>
                                                            <option>Mother</option>
                                                            <option>Brother</option>
                                                            <option>Sister</option>
                                                            </select>
                                                    </td>
                                                    <td className="pt-2">
                                                        <input type="text"
                                                            className="block w-11/12 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                            onChange={e => handleNomineeDetailListUpdate(item, 'pan', e.target.value)}
                                                            value={item?.pan} />
                                                    </td>
                                                    <td className="pt-2">
                                                        <input type="text"
                                                            className="block w-11/12 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                            onChange={e => handleNomineeDetailListUpdate(item, 'dob', e.target.value)}
                                                            value={item?.dob} />
                                                    </td>
                                                    <td className="pt-2">
                                                        <input type="text"
                                                            className="block w-11/12 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                            onChange={e => handleNomineeDetailListUpdate(item, 'address', e.target.value)}
                                                            value={item?.address} />
                                                    </td>
                                                    <td className="pt-2 flex gap-1">
                                                        <input type="number"
                                                            className="block w-10/12 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                            onChange={e => {
                                                                // if(totalPercentage > 100) return
                                                                handleNomineeDetailListUpdate(item, 'percentage_share', e.target.value)
                                                            }}
                                                            value={item?.percentage_share} />
                                                        {
                                                            idx !== 0 &&
                                                            <button
                                                                className=" items-center justify-center"
                                                                onClick={() => removeNominee(item)}><IoCloseCircleOutline className="w-6 h-6" /></button>
                                                        }
                                                    </td>
                                                </tr>
                                            })
                                        }
                                    </tbody>
                                </table>
                                <div className=" mt-2 font-medium leading-7 text-gray-900 flex justify-between pr-10">
                                <button className="" onClick={addNominee}> Add more</button>
                                <div className="flex gap-5">

                                <p>Total 
                                    </p>
                                    <p>

                                    {totalPercentage}%
                                    </p>

                                </div>
                                </div>
                            </div>

                        </div>}
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
        </div>
    );
};

export default Page;

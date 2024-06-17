
import { getNomineeDetails } from '@/app/nominee-details/api';
import { NomineeDetail } from '@/app/nominee-details/page';
import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useRouter } from "next/navigation";
import nProgress from "nprogress";



const Nominiees = () => {
  const router = useRouter();

    const { data: nomineeData, isLoading } = useQuery({
        queryKey: ["nomineeDetails"],
        queryFn: getNomineeDetails,
      });
      const hasNominee = !!nomineeData?.length;
      const goToAdd = ()=> {
        nProgress.start();
      router.push("/nominee-details");
      }
  return (

    <div className="p-6 lg:col-span-9">
        <div className="sm:flex sm:items-center">
            <div className="flex justify-between w-full">
                <h3 className="text-lg font-medium leading-6 text-gray-700 block">Nominees</h3>
                {
                  !!hasNominee && 
                  <button
                  onClick={goToAdd}
                  
                  className="ml-5 inline-flex justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary700 focus:outline-none focus:ring-2 focus:ring-primary500 focus:ring-offset-2 disabled:bg-gray-300">Update</button>
                }

            </div>
            </div>
            {
                hasNominee ? 
                <table className="table-auto mt-6 w-full text-sm text-left rtl:text-right text-gray-900 ">
                <thead>
                  <tr className="border-b-gray-200 border-b-2 ">
                    <th className="pb-2 text-xs text-gray-600">
                      NAME
                    </th>
                    <th className="pb-2 text-xs text-gray-600">
                      RELATION
                    </th>
                    <th className="pb-2 text-xs text-gray-600">
                      PAN
                    </th>
                    <th className="pb-2 text-xs text-gray-600">
                      DOB
                    </th>
                    <th className="pb-2 text-xs text-gray-600">
                      ADDRESS
                    </th>
                    <th className="pb-2 text-xs text-gray-600">SHARE</th>
                  </tr>
                </thead>
                <tbody>
                  {nomineeData.map((item: NomineeDetail, idx:number) => {
                    return (
                      <tr key={idx}>
                        <td className="pt-3">
                            {item?.full_legal_name}
                        </td>
                        <td className="pt-3">

                          {/* <select
                            className="block w-32 mr-3 rounded-md border-0  py-[9px] px-2 text-text_dark shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:max-w-xs sm:text-sm sm:leading-6"
                          
                            
                            value=
                          >
                          </select> */}
                          {item?.relation}
                        </td>
                        <td className="pt-3">
                          {item?.pan}
                        </td>
                        <td className="pt-3">
                            {item?.dob}
                        </td>
                        <td className="pt-3">
                            {item?.address}
                        </td>
                        <td className="pt-3 flex gap-1">
                            {item?.percentage_share} %
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
                :
            <div className="py-24 text-center">
                <div className="justify-center text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto h-16 w-16">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"></path>
                    </svg>
                </div>
                <h3 className="mt-2 text-md font-semibold text-gray-700">Get started by finishing your application</h3>
                 <div className="mt-6">
                    <button 
                    onClick={goToAdd}
                    className="inline-flex items-center rounded-md bg-primary px-4 py-3 text-md font-semibold text-white shadow-sm hover:bg-primary500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                    Finish onboarding       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="ml-2 h-5 w-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"></path>
                    </svg></button>
                 </div>
         
            </div>
            }


    </div>
  );
};

export default Nominiees;

import React from "react";

const Documents = () => {
  return (
    <div className="md:p-6 lg:col-span-9">
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
          <div className="mt-10 divide-y divide-gray-200">
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
                  Upload documents with supported types - jpg, jpeg, png, pdf,
                  mp4, mov
                </p>
              </div>
            </div>
            <div className="mt-4">
              <dl className="divide-y divide-gray-200">
                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
                  <dt className="text-sm font-medium text-gray-600">
                    <span className="flex">Aadhaar Card (Masked)</span>
                    <span className="flex text-xs font-normal text-primary italic">
                      Name and address must be visible
                    </span>
                    <span className="flex text-xs font-normal text-primary italic">
                      <a
                        href="https://drive.google.com/file/d/19aU0V6ZhD2tAwy2XR2thAL_TGU6EvpWi/view?usp=sharing"
                        className="text-primary500 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        See sample
                      </a>
                    </span>
                  </dt>
                  <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0 justify-center">
                    <span className="ml-4 flex flex-shrink-0 items-start space-x-4"></span>
                    <span className="ml-4 flex flex-shrink-0 items-start space-x-4">
                      <button
                        type="button"
                        className="rounded-md bg-white font-medium text-primary hover:text-primary500 focus:outline-none focus:ring-2 focus:ring-primary500 focus:ring-offset-2"
                      >
                        <div className="w-[150px]">
                          <label className="button primary block cursor-pointer">
                            Upload
                          </label>
                          <input
                            type="file"
                            id="aadhaar"
                            accept="image/jpeg,image/jpg,image/png,application/pdf"
                            className="hidden"
                          ></input>
                        </div>
                      </button>
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;

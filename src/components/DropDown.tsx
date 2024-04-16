"use client";
import { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { IoChevronDown } from "react-icons/io5";

interface DropdownMenuProps {
  options: string[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ options }) => {
  const [menu, setMenu] = useState(options[0]); // Initialize menu with the first option

  return (
    <div className="relative">
      <Menu as="div" className="relative text-left">
        <div>
          <Menu.Button className="flex items-center justify-between py-4 w-full rounded-md bg-white px-4 text-sm border-gray-200 border-solid border-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
            {menu}
            <IoChevronDown size={20} />
          </Menu.Button>
        </div>
        <Transition
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-50 w-full">
            {options.map((option, index) => (
              <Menu.Item key={index}>
                {/* {({ active }) => (
                  <button
                    onClick={() => {
                      setMenu(option);
                    }}
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {option}
                  </button>
                )} */}
                <button
                  onClick={() => {
                    setMenu(option);
                  }}
                  className={`text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  {option}
                </button>
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default DropdownMenu;

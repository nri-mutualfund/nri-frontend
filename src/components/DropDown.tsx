import React from "react";

interface DropdownMenuProps {
  title: string;
  content: string;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ title, content }) => {
  return (
    <div className="">
      <details className="group border-2 border-neutral-200 px-6 py-2 rounded-md">
        <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
          <span className="text-[16px] font-light">{title}</span>
          <span className="transition group-open:rotate-180">
            <svg
              fill="none"
              height="24"
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <p className="text-neutral-600 mt-3 group-open:animate-fadeIn text-left text-sm">
          {content}
        </p>
      </details>
    </div>
  );
};

export default DropdownMenu;

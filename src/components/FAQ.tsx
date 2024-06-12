"use client";
import React, { useRef, useState } from "react";

type FAQProps = {
  question: string;
  answer: string;
};

const FAQ = ({ question, answer }: FAQProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    if (contentRef.current) {
      const newHeight =
        contentRef.current.style.maxHeight === "0px"
          ? `${contentRef.current.scrollHeight}px`
          : "0px";
      contentRef.current.style.maxHeight = newHeight;
      setExpanded(newHeight !== "0px");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center border-t px-6 bg-white">
      <div onClick={toggleAccordion} className="cursor-pointer w-full">
        <div className="flex items-start justify-between text-left mt-6">
          <h3 className="">{question}</h3>

          <div
            className={`transform transition-transform duration-500 ${
              expanded ? "rotate-180" : ""
            }`}
          >
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
              <path d={"M6 9l6 6 6-6"} />
            </svg>
          </div>
        </div>
        <div
          ref={contentRef}
          className={`overflow-hidden text-left transition-all duration-500 h-full ${
            expanded ? "my-2" : ""
          }
            }`}
          style={{ maxHeight: "0px" }}
        >
          <h5 className="text-justify">{answer}</h5>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

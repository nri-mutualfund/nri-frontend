import React, { useRef, useState, useEffect } from "react";

interface OTPInputProps {
  length: number; // Number of code input fields
  onChange: (otp: string) => void; // Callback function to handle OTP changes
  hasError: boolean;
}

const OTPInput: React.FC<OTPInputProps> = ({ length, onChange, hasError }) => {
  const [otp, setOtp] = useState<string>(""); // State to store the OTP value

  // Refs for each input field
  const inputRef1 = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);
  const inputRef3 = useRef<HTMLInputElement>(null);
  const inputRef4 = useRef<HTMLInputElement>(null);
  const inputRef5 = useRef<HTMLInputElement>(null);
  const inputRef6 = useRef<HTMLInputElement>(null);

  const inputRefs = [
    inputRef1,
    inputRef2,
    inputRef3,
    inputRef4,
    inputRef5,
    inputRef6,
  ];

  // Function to focus the next input field
  const focusNextInput = (index: number) => {
    inputRefs[index + 1]?.current?.focus();
  };

  // Function to focus the previous input field
  const focusPrevInput = (index: number) => {
    inputRefs[index - 1]?.current?.focus();
  };

  // Event handler to update OTP value and move focus to the next input on input
  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    const newOtp = otp.slice(0, index) + value + otp.slice(index + 1);
    setOtp(newOtp);

    if (value && index < length - 1) {
      focusNextInput(index);
    }
    onChange(newOtp);
  };

  // Event handler to update OTP value and move focus to the previous input on Backspace
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
      const newOtp = otp.slice(0, index - 1) + otp.slice(index);
      setOtp(newOtp);
      focusPrevInput(index);
      onChange(newOtp);
    }
  };

  // Ensure the first input field is focused when the component mounts
  useEffect(() => {
    inputRefs[0]?.current?.focus();
  }, []);

  return (
    <div className="flex mb-2 space-x-2 rtl:space-x-reverse">
      {Array.from({ length }, (_, index) => (
        <div key={index}>
          <label htmlFor={`code-${index + 1}`} className="sr-only">
            {`Code ${index + 1}`}
          </label>
          <input
            type="text"
            maxLength={1}
            id={`code-${index + 1}`}
            className={`block w-9 h-9 py-3 text-xs ${
              hasError
                ? "border-red-500 text-red-500"
                : "text-text_dark border-1"
            } font-extrabold text-center bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
            ref={inputRefs[index]}
            value={otp[index] || ""}
            onChange={(e) => handleInput(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        </div>
      ))}
    </div>
  );
};

export default OTPInput;

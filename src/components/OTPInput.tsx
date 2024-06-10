// import React, { useRef, useState, useEffect } from "react";

// interface OTPInputProps {
//   length: number; // Number of code input fields
//   onChange: (otp: string) => void; // Callback function to handle OTP changes
// }

// const OTPInput: React.FC<OTPInputProps> = ({ length, onChange }) => {
//   const [otp, setOtp] = useState<string>(""); // State to store the OTP value

//   // Refs for each input field
//   const inputRefs = Array.from({ length }, () =>
//     useRef<HTMLInputElement>(null)
//   );

//   // Function to focus the next input field
//   const focusNextInput = (index: number) => {
//     if (inputRefs[index + 1] && inputRefs[index + 1].current) {
//       inputRefs[index + 1].current.focus();
//     }
//   };

//   // Function to focus the previous input field
//   const focusPrevInput = (index: number) => {
//     if (inputRefs[index - 1] && inputRefs[index - 1].current) {
//       inputRefs[index - 1].current.focus();
//     }
//   };

//   // Event handler to update OTP value and move focus to the next input on input
//   const handleInput = (
//     e: React.ChangeEvent<HTMLInputElement>,
//     index: number
//   ) => {
//     const { value } = e.target;
//     const newOtp = otp.slice(0, index) + value + otp.slice(index + 1);
//     setOtp(newOtp);

//     if (value && index < length - 1) {
//       focusNextInput(index);
//     }
//     onChange(newOtp);
//   };

//   // Event handler to update OTP value and move focus to the previous input on Backspace
//   const handleKeyDown = (
//     e: React.KeyboardEvent<HTMLInputElement>,
//     index: number
//   ) => {
//     if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
//       const newOtp = otp.slice(0, index - 1) + otp.slice(index);
//       setOtp(newOtp);
//       focusPrevInput(index);
//       onChange(newOtp);
//     }
//   };

//   // Ensure the first input field is focused when the component mounts
//   useEffect(() => {
//     if (inputRefs[0] && inputRefs[0].current) {
//       inputRefs[0].current.focus();
//     }
//   }, []);

//   return (
//     <div className="flex mb-2 space-x-2 rtl:space-x-reverse">
//       {Array.from({ length }, (_, index) => (
//         <div key={index}>
//           <label htmlFor={`code-${index + 1}`} className="sr-only">
//             {`Code ${index + 1}`}
//           </label>
//           <input
//             type="text"
//             maxLength={1}
//             id={`code-${index + 1}`}
//             className="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//             ref={inputRefs[index]}
//             value={otp[index] || ""}
//             onChange={(e) => handleInput(e, index)}
//             onKeyDown={(e) => handleKeyDown(e, index)}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default OTPInput;

import React from "react";

interface ProgressBarProps {
  widthPercentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ widthPercentage }) => {
  return (
    <div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-primary h-2.5 rounded-full"
          style={{ width: `${widthPercentage}% ` }}
        ></div>
      </div>
      <div className="flex justify-between mt-4">
        <p
          className={`font-medium text-sm ${
            widthPercentage > 0 ? "text-primary" : "text-gray-700"
          }`}
        >
          KYC
        </p>
        <p
          className={`font-medium text-sm ${
            widthPercentage > 33 ? "text-primary" : "text-gray-700"
          }`}
        >
          Investor Profile
        </p>
        <p
          className={`font-medium text-sm ${
            widthPercentage > 66 ? "text-primary" : "text-gray-700"
          }`}
        >
          Banking
        </p>
        <p
          className={`font-medium text-sm ${
            widthPercentage > 99 ? "text-primary" : "text-gray-700"
          }`}
        >
          Nominee
        </p>
      </div>
    </div>
  );
};

export default ProgressBar;

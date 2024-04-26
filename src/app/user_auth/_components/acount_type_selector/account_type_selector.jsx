import React from "react";

function AccountTypeSelector({ selectedOption, handleOptionChange }) {
  return (
    <div className="mt-3 md:flex md:items-center md:-mx-2">
      <label
        className={`flex items-center justify-center w-full px-6 py-3 mt-4 text-blue-500 border border-blue-500 rounded-lg cursor-pointer md:mt-0 md:w-auto md:mx-2 focus:outline-none ${
          selectedOption === "Individual" ? "bg-blue-500 text-white" : ""
        }`}
      >
        <input
          type="radio"
          className="hidden"
          name="plan"
          value="Individual"
          checked={selectedOption === "Individual"}
          onChange={handleOptionChange}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        <span className="mx-2">Individual</span>
      </label>
      <label
        className={`flex items-center justify-center w-full px-6 py-3 mt-4 text-blue-500 border border-blue-500 rounded-lg cursor-pointer md:mt-0 md:w-auto md:mx-2 focus:outline-none ${
          selectedOption === "Enterprise" ? "bg-blue-500 text-white" : ""
        }`}
      >
        <input
          type="radio"
          className="hidden"
          name="plan"
          value="Enterprise"
          checked={selectedOption === "Enterprise"}
          onChange={handleOptionChange}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
        <span className="mx-2">Enterprise</span>
      </label>
    </div>
  );
}

export default AccountTypeSelector;

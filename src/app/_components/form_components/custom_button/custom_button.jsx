import React from "react";

function CustomButton({ type, onClick, text, isSignUpButton }) {
  const buttonClasses =
    "flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide capitalize transition-colors duration-300 transform focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50";
  const buttonColorClasses = isSignUpButton
    ? "text-white bg-blue-500 rounded-lg hover:bg-blue-400"
    : type === "submit"
    ? "text-white bg-blue-500 rounded-lg hover:bg-blue-400"
    : "text-gray-500 rounded-lg border-[1px] hover:border-blue-500 border-slate-300 hover:text-blue-500";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${buttonClasses} ${buttonColorClasses}`}
    >
      <span>{text}</span>
      {type === "submit" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 rtl:-scale-x-100"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </button>
  );
}

export default CustomButton;

"use client";
import Link from "next/link";
import React from "react";

const PricingCard = ({ title, price, features, isPopular, isMonthly }) => {
  return (
    <div
      className={`px-6 py-4 ${
        isPopular
          ? "bg-white border border-gray-200"
          : "bg-white border border-gray-200"
      } transition-colors duration-300 transform rounded-lg hover:bg-gray-200`}
    >
      <p className="text-lg font-medium text-gray-800">{title}</p>
      <h4 className="mt-2 text-3xl font-semibold text-gray-800">
        ${isMonthly === "Month" ? price : parseFloat(price * 12)}{" "}
        <span className="text-base font-normal text-gray-600">
          / {isMonthly}
        </span>
      </h4>
      <p className="mt-4 text-gray-500">
        For most businesses that want to optimize web queries.
      </p>
      <div className="mt-8 space-y-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-blue-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="mx-4 text-gray-700">{feature}</span>
          </div>
        ))}
      </div>
      <Link href={"/user_auth/signup"}>
        <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Choose plan
        </button>
      </Link>
    </div>
  );
};

export default PricingCard;

"use client";
import Image from "next/image";
import { useState } from "react";
import { pricingOptions } from "./_lib/constants/landing_package_pricing";
import PricingCard from "./_components/landing_pricing_card/landing_pricing_card";

export default function Home() {
  const [selectedOption, setSelectedOption] = useState("Month");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <section className="bg-white">
      <div className="container px-6 py-8 mx-auto">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
              Optiomax, package pricing
            </h2>
            <p className="mt-4 text-gray-500">
              No Contracts. No surprise fees.
            </p>
          </div>
          <div className="overflow-hidden p-0.5 mt-6 border rounded-lg">
            <div className="sm:-mx-0.5 flex">
              <input
                type="radio"
                id="monthly"
                name="subscription"
                className="hidden"
                checked={selectedOption === "Month"}
                value={"Month"}
                onChange={handleOptionChange}
              />
              <label
                htmlFor="monthly"
                className={`px-3 w-1/2 sm:w-auto py-1 sm:mx-0.5 rounded-lg group cursor-pointer ${
                  selectedOption === "Month"
                    ? "text-white bg-blue-500 focus:outline-none"
                    : "text-gray-800 bg-transparent hover:bg-gray-200 focus:outline-none"
                }`}
              >
                Monthly
              </label>
              <input
                type="radio"
                id="yearly"
                name="subscription"
                className="hidden"
                checked={selectedOption === "Year"}
                value={"Year"}
                onChange={handleOptionChange}
              />
              <label
                htmlFor="yearly"
                className={`px-3 w-1/2 sm:w-auto py-1 sm:mx-0.5 rounded-lg  group cursor-pointer ${
                  selectedOption === "Year"
                    ? "text-white bg-blue-500 focus:outline-none"
                    : "text-gray-800 bg-transparent hover:bg-gray-200 focus:outline-none"
                }`}
              >
                Yearly
              </label>
            </div>
          </div>
        </div>
        <div className="grid gap-6 mt-16 -mx-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {pricingOptions.map((option, index) => (
            <PricingCard key={index} isMonthly={selectedOption} {...option} />
          ))}
        </div>
      </div>
    </section>
  );
}

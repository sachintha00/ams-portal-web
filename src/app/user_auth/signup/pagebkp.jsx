"use client";
import React, { useState } from "react";
import Link from "next/link";
import RegisterStep01 from "../_components/register_step_01/register_step_01";
import RegisterStep02 from "../_components/register_step_02/register_step_02";
import RegisterStep03 from "../_components/register_step_03/register_step_03";
import Stepper from "../_components/stepper/stepper";
import { FormProvider } from "../../_lib/context/form_context";

function page() {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <RegisterStep01 onNextStep={handleNextStep} />;
      case 2:
        return (
          <RegisterStep02
            onNextStep={handleNextStep}
            onPrevStep={handlePrevStep}
          />
        );
      case 3:
        return (
          <RegisterStep03
            onNextStep={handleNextStep}
            onPrevStep={handlePrevStep}
            step={step}
          />
        );
      default:
        return null;
    }
  };

  return (
    <FormProvider>
      <div className="w-full">
        <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize">
          Get your free account now.
        </h1>
        <p className="mt-4 text-gray-500">
          Let’s get you all set up so you can verify your personal account and
          begin setting up your profile.
        </p>

        <div className="my-10">
          <Stepper step={step} />
        </div>

        {renderStep()}

        <div className="flex items-center justify-center w-full mt-24">
          <p className="text-sm font-normal">
            Already have an account{" "}
            <Link
              href={`/user_auth/signin`}
              className="font-semibold underline cursor-pointer"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </FormProvider>
  );
}

export default page;

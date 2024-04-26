import React from "react";
import "./stepper.css";
import { TiTick } from "react-icons/ti";

const Stepper = ({ step }) => {
  const steps = ["Customer Info", "Organization/Individual Info", "Owner Email"];

  return (
    <>
      <div className="flex justify-between">
        {steps?.map((stepLabel, index) => (
          <div
            key={index}
            className={`step-item ${step === index + 1 && "active"} ${
              index + 1 < step && "complete"
            } `}
          >
            <div className="step">
              {index + 1 < step ? <TiTick size={24} /> : index + 1}
            </div>
            <p className="text-gray-500">{stepLabel}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Stepper;

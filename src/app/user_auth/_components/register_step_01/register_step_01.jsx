"use client";
import React from "react";
import { Formik, Form } from "formik";

import CustomInput from "/app/_components/form_components/custom_input/custom_input";
import Step01FormSchema from "../../_validation_schemas/sign_up_schemas/step_01_form_schema";
import { useFormState } from "../../../_lib/context/form_context";

function RegisterStep01({ onNextStep }) {
  const [state, setState] = useFormState();

  return (
    <div>
      <div className="mt-6">
        <h1 className="text-gray-500">Select type of account</h1>
      </div>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={Step01FormSchema}
        onSubmit={(values, actions) => {
          // actions.setSubmitting(false);
          setState({ ...state, ...values });
          onNextStep();
        }}
      >
        {({ isSubmitting }) => (
          <Form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
            <div>
              <CustomInput
                label="User Name"
                type="text"
                placeholder="username123"
                name="username"
              />
            </div>
            <div>
              <CustomInput
                label="Password"
                type="password"
                placeholder="#########"
                name="password"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            >
              <span>Next</span>
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
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default RegisterStep01;

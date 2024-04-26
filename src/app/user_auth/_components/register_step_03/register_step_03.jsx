import React, { useEffect } from "react";
import { Formik, Form } from "formik";

import Step03FormSchema from "../../_validation_schemas/sign_up_schemas/step_03_form_schema";
import CustomInput from "/app/_components/form_components/custom_input/custom_input";
import { useFormState } from "../../../_lib/context/form_context";

import { useRegisterMutation } from "../../../_lib/redux/features/auth/auth_api";
import { useRouter } from "next/navigation";

function RegisterStep03({ onNextStep, onPrevStep }) {
  const router = useRouter();
  const [state, setState] = useFormState();
  const [register, { isSuccess, error, isError }] = useRegisterMutation();

  return (
    <div>
      <div className="mt-6">
        <h1 className="text-gray-500">Select type of account</h1>
      </div>
      <Formik
        initialValues={{
          ownerEmail: "",
        }}
        validationSchema={Step03FormSchema}
        onSubmit={async (values, actions) => {
          actions.setSubmitting(true);
          setState({ ...state, ...values });
          console.log(state);
          const data = {
            user_name: state.username,
            name: state.personName,
            email: state.emailAddress,
            contact_no: state.contactNo,
            password: state.password,
          };
          await register(data);
          if (isSuccess) {
            router.push("/user_auth/signin");
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className="grid-cols-2 gap-6 mt-8 md:grid-cols-2">
            <CustomInput
              label="Owner Email"
              type="email"
              placeholder="your@email.com"
              name="ownerEmail"
            />

            <div className="grid grid-cols-2 gap-6 mt-8 md:grid-cols-2">
              <button
                type="button"
                onClick={onPrevStep}
                className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-gray-500 capitalize transition-colors duration-300 transform rounded-lg border-[1px] hover:border-blue-500 border-slate-300 hover:text-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              >
                <span>Previous </span>
                {/* <svg
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
        </svg> */}
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              >
                <span>Sign Up</span>
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
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default RegisterStep03;

"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { Form, Formik } from "formik";
import SignInSchema from "../_validation_schemas/sign_in_schema";
import CustomInput from "/app/_components/form_components/custom_input/custom_input";

import { useLoginMutation } from "../../_lib/redux/features/auth/auth_api";
import { useRouter } from "next/navigation";

function page() {
  const [login, { isSuccess, error }] = useLoginMutation();
  const router = useRouter();

  useEffect(() => {
    if (isSuccess) {
      router.push("/dashboard");
    } else if (error && error.message) {
      console.log("Login failed:", error.message);
    }
  }, [isSuccess, error, router]);

  const onSubmithandler = async (values, actions) => {
    try {
      await login({
        email: values.username,
        password: values.password,
      });
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize ">
          Get your free account now.
        </h1>
        <p className="flex flex-col items-center justify-center px-10 mt-4 text-center text-gray-500">
          Let’s get you all set up so you can verify your personal account and
          begin setting up your profile.
        </p>
      </div>

      <div className="flex flex-col items-center">
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          validationSchema={SignInSchema}
          onSubmit={onSubmithandler}
        >
          {({ isSubmitting }) => (
            <Form className="grid w-3/4 gap-6 mt-14 grid-row-1 md:grid-row-2">
              <div>
                <CustomInput
                  label="Email"
                  name="username"
                  type="text"
                  placeholder="example@email.com"
                />
              </div>
              <div>
                <CustomInput
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="********"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              >
                <span>Sign In</span>
              </button>
            </Form>
          )}
        </Formik>
      </div>

      <div className="flex items-center justify-center w-full mt-24">
        <p className="text-sm font-normal">
          Don't have an account{" "}
          <Link
            href={`/user_auth/signup`}
            className="font-semibold underline cursor-pointer"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default page;

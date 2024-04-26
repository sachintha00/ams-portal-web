"use client";
import React from "react";
import { useField } from "formik";

function CustomInput({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div>
      <label
        htmlFor={props.id || props.name}
        className={`block mb-2 text-sm text-gray-600 ${
          meta.touched && meta.error ? "text-red-500" : "text-gray-600"
        }`}
      >
        {label}
      </label>
      <input
        {...field}
        {...props}
        className={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border ${
          meta.touched && meta.error ? "border-red-500" : "border-gray-200"
        } rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`}
      />
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
}

export default CustomInput;

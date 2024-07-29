import * as Yup from "yup";

const Step02FormSingleSchema = Yup.object().shape({
  personName: Yup.string()
    .required("Person name is required")
    .min(2, "Person name must be at least 2 characters long")
    .max(100, "Person name cannot exceed 100 characters"),

  contactNo: Yup.string()
    .required("Contact no is required")
    .matches(/^[\d\s\-\(\)]+$/, "Contact number is not valid")
    .min(10, "Contact number must be at least 10 digits long")
    .max(20, "Contact number cannot exceed 20 digits"),

  address: Yup.string()
    .required("Address is required")
    .min(10, "Address must be at least 10 characters long")
    .max(200, "Address cannot exceed 200 characters"),

  emailAddress: Yup.string()
    .required("Email address is required")
    .email("Email address is not valid"),

  website: Yup.string()
    .required("Website is required")
    .url("Website URL is not valid"),

  contactPerson: Yup.string()
    .required("Contact person is required")
    .min(2, "Contact person name must be at least 2 characters long")
    .max(100, "Contact person name cannot exceed 100 characters"),
});

export default Step02FormSingleSchema;

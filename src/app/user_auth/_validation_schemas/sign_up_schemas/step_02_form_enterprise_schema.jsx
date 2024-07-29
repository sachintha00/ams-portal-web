import * as Yup from "yup";

const Step02FormEnterpriseSchema = Yup.object().shape({
  companyName: Yup.string()
    .required("Company name is required")
    .min(2, "Company name must be at least 2 characters long")
    .max(100, "Company name cannot exceed 100 characters"),

  contactNo: Yup.string()
    .required("Contact number is required")
    .matches(/^[\d\s\-\(\)]+$/, "Contact number is not valid")
    .min(10, "Contact number must be at least 10 digits long")
    .max(20, "Contact number cannot exceed 20 digits"),

  contactPerson: Yup.string()
    .required("Contact person is required")
    .min(2, "Contact person name must be at least 2 characters long")
    .max(100, "Contact person name cannot exceed 100 characters"),

  address: Yup.string()
    .required("Address is required")
    .min(10, "Address must be at least 10 characters long")
    .max(200, "Address cannot exceed 200 characters"),

  email: Yup.string()
    .required("Email address is required")
    .email("Email address is not valid"),

  website: Yup.string()
    .required("Website is required")
    .url("Website URL is not valid"),
});

export default Step02FormEnterpriseSchema;

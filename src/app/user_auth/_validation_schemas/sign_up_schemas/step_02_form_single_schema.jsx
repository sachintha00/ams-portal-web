import * as Yup from "yup";

const Step02FormSingleSchema = Yup.object().shape({
  personName: Yup.string().required("Person name is required"),
  contactNo: Yup.string().required("Contact no is required"),
  address: Yup.string().required("Address is required"),
  emailAddress: Yup.string().required("Email address is required"),
  website: Yup.string().required("Website is required"),
  contactPerson: Yup.string().required("Contact person is required"),
});

export default Step02FormSingleSchema;

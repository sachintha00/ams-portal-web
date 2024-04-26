import * as Yup from "yup";

const Step02FormEnterpriseSchema = Yup.object().shape({
  companyName: Yup.string().required("Company name is required"),
  contactNo: Yup.string().required("Contact no is required"),
  contactPerson: Yup.string().required("Contact person is required"),
  address: Yup.string().required("Address is required"),
  email: Yup.string().required("Email address is required"),
  website: Yup.string().required("Website is required"),
});

export default Step02FormEnterpriseSchema;

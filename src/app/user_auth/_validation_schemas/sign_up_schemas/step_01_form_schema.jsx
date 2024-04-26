import * as Yup from "yup";

const Step01FormSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

export default Step01FormSchema;

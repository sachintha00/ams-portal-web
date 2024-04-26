import * as Yup from "yup";

const Step03FormSchema = Yup.object().shape({
  ownerEmail: Yup.string().required("Owner email is required"),
});

export default Step03FormSchema;

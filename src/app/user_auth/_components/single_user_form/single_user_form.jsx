import React from "react";
import { Formik, Form } from "formik";

import CustomInput from "/app/_components/form_components/custom_input/custom_input";
import CustomButton from "/app/_components/form_components/custom_button/custom_button";
import Step02FormSingleSchema from "../../_validation_schemas/sign_up_schemas/step_02_form_single_schema";
import { useFormState } from "../../../_lib/context/form_context";

function SingleUserForm({ onNextStep, onPrevStep }) {
  const [state, setState] = useFormState();

  return (
    <Formik
      initialValues={{
        personName: "",
        contactNo: "",
        address: "",
        emailAddress: "",
        website: "",
        contactPerson: "",
      }}
      validationSchema={Step02FormSingleSchema}
      onSubmit={(values, actions) => {
        actions.setSubmitting(true);
        setState({ ...state, ...values });
        onNextStep();
      }}
    >
      {({ isSubmitting }) => (
        <Form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
          <CustomInput
            label="Person Name"
            type="text"
            placeholder="Your Name"
            name="personName"
          />
          <CustomInput
            label="Contact No"
            type="text"
            placeholder="XXX-XX-XXXX-XXX"
            name="contactNo"
          />
          <CustomInput
            label="Address"
            type="text"
            placeholder="No, street1, street2"
            name="address"
          />
          <CustomInput
            label="Email address"
            type="email"
            placeholder="your@example.com"
            name="emailAddress"
          />
          <CustomInput
            label="Website"
            type="text"
            placeholder="https://www.your_website_url.com"
            name="website"
          />
          <CustomInput
            label="Contact Person Mobile"
            type="text"
            placeholder="Contact person Mobile"
            name="contactPerson"
          />

          <CustomButton onClick={onPrevStep} text="Previous" />
          <CustomButton
            type="submit"
            text="Next"
            isSignUpButton={true}
            disabled={isSubmitting}
          />
        </Form>
      )}
    </Formik>
  );
}

export default SingleUserForm;

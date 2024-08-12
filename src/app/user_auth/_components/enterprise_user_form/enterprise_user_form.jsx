import React from "react";
import { Formik, Form } from "formik";

import CustomInput from "/app/_components/form_components/custom_input/custom_input";
import CustomButton from "/app/_components/form_components/custom_button/custom_button";
import Step02FormEnterpriseSchema from "../../_validation_schemas/sign_up_schemas/step_02_form_enterprise_schema";
import { useFormState } from "react-dom";

function EnterpriseUserForm({ onNextStep, onPrevStep }) {
  const [state, setState] = useFormState();

  return (
    <Formik
      initialValues={{
        companyName: "",
        contactNo: "",
        contactPerson: "",
        address: "",
        email: "",
        website: "",
      }}
      validationSchema={Step02FormEnterpriseSchema}
      onSubmit={(values, actions) => {
        // actions.setSubmitting(false);
        // console.log(values)
        actions.setSubmitting(true);
        setState({ ...state, ...values });
        onNextStep();
      }}
    >
      {({ isSubmitting }) => (
        <Form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
          <CustomInput
            label="Company Name"
            type="text"
            placeholder="Company Name"
            name="companyName"
          />
          <CustomInput
            label="Contact No"
            type="text"
            placeholder="XXX-XX-XXXX-XXX"
            name="contactNo"
          />
          <CustomInput
            label="Contact Person Mobile"
            type="text"
            placeholder="Contact Person Mobile"
            name="contactPerson"
          />
          <CustomInput
            label="Address"
            type="text"
            placeholder="No, street1, street2"
            name="address"
          />
          <CustomInput
            label="Email"
            type="email"
            placeholder="your@example.com"
            name="email"
          />
          <CustomInput
            label="Website"
            type="text"
            placeholder="https://www.your_website_url.com"
            name="website"
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

export default EnterpriseUserForm;

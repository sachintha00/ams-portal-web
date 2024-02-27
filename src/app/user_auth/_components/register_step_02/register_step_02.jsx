import React, { useState } from "react";

import SingleUserForm from "../single_user_form/single_user_form";
import EnterpriseUserForm from "../enterprise_user_form/enterprise_user_form";
import AccountTypeSelector from "../acount_type_selector/account_type_selector";

function RegisterStep02({ onNextStep, onPrevStep }) {
  const [selectedOption, setSelectedOption] = useState("Individual");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <div className="mt-6">
        <h1 className="text-gray-500">Select type of account</h1>
        <AccountTypeSelector
          selectedOption={selectedOption}
          handleOptionChange={handleOptionChange}
        />
      </div>
      {selectedOption === "Individual" ? (
        <SingleUserForm onNextStep={onNextStep} onPrevStep={onPrevStep} />
      ) : (
        <EnterpriseUserForm onNextStep={onNextStep} onPrevStep={onPrevStep} />
      )}
    </div>
  );
}

export default RegisterStep02;

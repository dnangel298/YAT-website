import { signupFields } from "./AdminFormFields";
import AdminInput from "./AdminInput";
import FormAction from "./FormAction";
import { useState } from "react";

const fields = signupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Register() {
  const [signupState, setSignupState] = useState(fieldsState);

  const handleChange = (e) =>
    setSignupState({
      ...signupState,
      [e.target.id]: e.target.value,
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupState);
    createAccount();
  };

  const createAccount = () => {};
  return (
    <>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="">
          {field.map(
            <AdminInput
              key={field.id}
              handleChange={handleChange}
              value={signupState[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
            />
          )}
          <FormAction />
        </div>
      </form>
    </>
  );
}

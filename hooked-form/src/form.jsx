import React from "react";
import { useField, HookedForm } from "hooked-form";

export const Form = () => (
  <HookedForm validateOnChange={true} validate={validate}>
    <FormContent />
  </HookedForm>
);

const FormContent = () => {
  const [usernameMeta, usernameActions] = useField('username');
  const [passwordMeta, passwordActions] = useField('password');

  return (
    <div>
      <input type="text" {...usernameMeta} {...usernameActions} onChange={e => usernameActions.onChange(e.currentTarget.value)} />
      {usernameMeta.error && <p>{usernameMeta.error}</p>}
      <input type="text" {...passwordMeta} {...passwordActions} onChange={e => passwordActions.onChange(e.currentTarget.value)} />
    </div>
  );
};

const validate = (values) => {
  const errors = {};
  
  if (!values.username) {
    errors.username = 'username is undefined';
  } else if (values.username.length < 3) {
    errors.username = "Username must be at least 3 characters long";
  }

  if (!values.password) {
    errors.password = 'Password is undefined';
  }

  return errors;
}

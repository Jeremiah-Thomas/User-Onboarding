import React from "react";

const Form = (props) => {
  const { formData, submit, change, disabled } = props;

  const onChange = (evt) => {
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  return (
    <form onSubmit={submit}>
      <label htmlFor="fname">
        First Name
        <input
          id="fname"
          name="first_name"
          type="text"
          placeholder="First Name"
          value={formData.first_name}
          onChange={onChange}
        />
      </label>
      <label htmlFor="lname">
        Last Name
        <input
          id="lname"
          name="last_name"
          type="text"
          placeholder="Last Name"
          value={formData.last_name}
          onChange={onChange}
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter an email"
          value={formData.email}
          onChange={onChange}
        />
      </label>
      <label htmlFor="password">
        Password
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Enter a password"
          value={formData.password}
          onChange={onChange}
        />
      </label>
      <label htmlFor="tos">
        Terms Of Service
        <input
          id="tos"
          name="ToS_agreed"
          type="checkbox"
          checked={formData.ToS_agreed}
          onChange={onChange}
        />
      </label>
      <input type="submit" value="Submit" disabled={disabled} />
    </form>
  );
};

export default Form;

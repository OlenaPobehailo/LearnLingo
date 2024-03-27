import { useState } from "react";
import PropTypes from "prop-types";

const AuthForm = ({ title, fields, onSubmit }) => {
  const [formValues, setFormValues] = useState({});

  const handleChange = (e, fieldName) => {
    setFormValues({ ...formValues, [fieldName]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{title}</h2>
      {fields.map((field) => (
        <input
          key={field.name}
          type={field.type}
          placeholder={field.placeholder}
          value={formValues[field.name] || ""}
          onChange={(e) => handleChange(e, field.name)}
        />
      ))}
      <button type="submit">{title}</button>
    </form>
  );
};

export default AuthForm;

AuthForm.propTypes = {
  title: PropTypes.string.isRequired,
  fields: PropTypes.array,
  onSubmit: PropTypes.func,
};

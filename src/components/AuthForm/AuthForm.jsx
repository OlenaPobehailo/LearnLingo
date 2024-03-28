import { useState } from "react";
import PropTypes from "prop-types";
import { Button, Input, Text, Title } from "./AuthForm.styled";

const AuthForm = ({ title, fields, text, button, onSubmit }) => {
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
      <Title>{title}</Title>
      <Text>{text}</Text>
      {fields.map((field) => (
        <Input
          key={field.name}
          type={field.type}
          placeholder={field.placeholder}
          value={formValues[field.name] || ""}
          onChange={(e) => handleChange(e, field.name)}
        />
      ))}
      <Button type="submit">{button}</Button>
    </form>
  );
};

export default AuthForm;

AuthForm.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  fields: PropTypes.array.isRequired,
  button: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

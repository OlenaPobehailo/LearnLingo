import PropTypes from "prop-types";
import { Formik, Form } from "formik";

import {
  Button,
  InputWrapper,
  StyledErrorMessage,
  StyledEyeIcon,
  StyledField,
  Text,
  Title,
} from "./AuthForm.styled";
import { useState } from "react";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const AuthForm = ({
  title,
  fields,
  text,
  button,
  onSubmit,
  validationSchema,
  onClose,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        onSubmit(values);
        setSubmitting(false);
        onClose();
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Title>{title}</Title>
          <Text>{text}</Text>

          {fields.map((field) => (
            <div key={field.name}>
              <InputWrapper>
                <StyledField
                  type={
                    field.type === "password" && isPasswordVisible
                      ? "text"
                      : field.type
                  }
                  id={field.name}
                  name={field.name}
                  placeholder={field.placeholder}
                  aria-label={field.label}
                />
                {field.type === "password" && (
                  <div onClick={togglePasswordVisibility}>
                    <StyledEyeIcon />
                  </div>
                )}
              </InputWrapper>
              <StyledErrorMessage name={field.name} component="div" />
            </div>
          ))}
          <Button type="submit" disabled={isSubmitting}>
            {button}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default AuthForm;

AuthForm.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  fields: PropTypes.array.isRequired,
  button: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  validationSchema: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

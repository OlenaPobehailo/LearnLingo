import PropTypes from "prop-types";
import { Formik, Form } from "formik";
import {
  Button,
  StyledErrorMessage,
  StyledField,
  Text,
  Title,
} from "./AuthForm.styled";

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
              <StyledField
                type={field.type}
                id={field.name}
                name={field.name}
                placeholder={field.placeholder}
                aria-label={field.label}
              />
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

import { useState } from "react";
import { Formik, Form } from "formik";
import { PropTypes } from "prop-types";
import {
  Avatar,
  Input,
  Label,
  Question,
  RadioInput,
  RadioLabel,
  RadioWrapper,
  StyledErrorMessage,
  SubmitButton,
  Subtitle,
  Teacher,
  TeacherName,
  Text,
  Title,
} from "./BookTrialLesson.styled";
import { validationBookSchema } from "../../utils/validationSchema";

const BookTrialLesson = ({ teacher, onCloseModal }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    onCloseModal();
    resetForm();
  };

  const initialValues = {
    fullName: "",
    email: "",
    phoneNumber: "",
  };

  return (
    <div>
      <Title>Book trial lesson</Title>
      <Text>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </Text>
      <Teacher>
        <Avatar src={teacher.avatar_url} alt="" />
        <div>
          <Subtitle>Your teacher</Subtitle>
          <TeacherName>
            {teacher.name} {teacher.surname}
          </TeacherName>
        </div>
      </Teacher>
      <Question>What is your main reason for learning English?</Question>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationBookSchema}
      >
        {({ values, handleChange, handleBlur }) => (
          <Form>
            <RadioWrapper>
              <RadioLabel>
                <RadioInput
                  type="radio"
                  name="category"
                  value="career_business"
                  checked={selectedCategory === "career_business"}
                  onChange={handleCategoryChange}
                />
                <span>Career and business</span>
              </RadioLabel>

              <RadioLabel>
                <RadioInput
                  type="radio"
                  name="category"
                  value="lesson_kids"
                  checked={selectedCategory === "lesson_kids"}
                  onChange={handleCategoryChange}
                />
                <span>Lesson for kids</span>
              </RadioLabel>

              <RadioLabel>
                <RadioInput
                  type="radio"
                  name="category"
                  value="living_abroad"
                  checked={selectedCategory === "living_abroad"}
                  onChange={handleCategoryChange}
                />
                <span>Living abroad</span>
              </RadioLabel>

              <RadioLabel>
                <RadioInput
                  type="radio"
                  name="category"
                  value="exams_coursework"
                  checked={selectedCategory === "exams_coursework"}
                  onChange={handleCategoryChange}
                />
                <span>Exams and coursework</span>
              </RadioLabel>

              <RadioLabel>
                <RadioInput
                  type="radio"
                  name="category"
                  value="culture_travel_hobby"
                  checked={selectedCategory === "culture_travel_hobby"}
                  onChange={handleCategoryChange}
                />
                <span>Culture, travel or hobby</span>
              </RadioLabel>
            </RadioWrapper>

            <Label htmlFor="fullName">Full Name</Label>
            <Input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Full Name"
              value={values.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <StyledErrorMessage name="fullName" component="div" />

            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <StyledErrorMessage name="email" component="div" />

            <Label htmlFor="phoneNumber">Phone number</Label>
            <Input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Phone number"
              value={values.phoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <StyledErrorMessage name="phoneNumber" component="div" />

            <SubmitButton type="submit">Book</SubmitButton>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookTrialLesson;

BookTrialLesson.propTypes = {
  teacher: PropTypes.object,
  onCloseModal: PropTypes.func,
};

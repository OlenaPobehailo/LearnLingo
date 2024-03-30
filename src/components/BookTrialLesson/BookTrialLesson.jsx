import { PropTypes } from "prop-types";
import {
  Avatar,
  Label,
  Question,
  RadioInput,
  RadioWrapper,
  Subtitle,
  Teacher,
  TeacherName,
  Text,
  Title,
} from "./BookTrialLesson.styled";
import { useState } from "react";

const BookTrialLesson = ({ teacher }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
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

      <RadioWrapper>
        <Label>
          <RadioInput
            type="radio"
            name="category"
            value="career_business"
            checked={selectedCategory === "career_business"}
            onChange={handleCategoryChange}
          />
          Career and business
        </Label>

        <Label>
          <RadioInput
            type="radio"
            name="category"
            value="lesson_kids"
            checked={selectedCategory === "lesson_kids"}
            onChange={handleCategoryChange}
          />
          Lesson for kids
        </Label>

        <Label>
          <RadioInput
            type="radio"
            name="category"
            value="living_abroad"
            checked={selectedCategory === "living_abroad"}
            onChange={handleCategoryChange}
          />
          Living abroad
        </Label>

        <Label>
          <RadioInput
            type="radio"
            name="category"
            value="exams_coursework"
            checked={selectedCategory === "exams_coursework"}
            onChange={handleCategoryChange}
          />
          Exams and coursework
        </Label>

        <Label>
          <RadioInput
            type="radio"
            name="category"
            value="culture_travel_hobby"
            checked={selectedCategory === "culture_travel_hobby"}
            onChange={handleCategoryChange}
          />
          Culture, travel or hobby
        </Label>
      </RadioWrapper>
    </div>
  );
};

export default BookTrialLesson;

BookTrialLesson.propTypes = {
  teacher: PropTypes.object,
};

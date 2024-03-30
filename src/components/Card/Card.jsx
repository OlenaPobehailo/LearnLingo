import { PropTypes } from "prop-types";
import {
  Avatar,
  BookLesson,
  CardWrapper,
  Experience,
  Languages,
  Level,
  Levels,
  ReadMoreButton,
  Reviews,
  RightPart,
  Teacher,
  TeacherInfo,
  TeacherInfoWrapper,
} from "./Card.styled";

import { useState } from "react";
import Review from "./Review";
import CardHeader from "./CardHeader";

const Card = ({ teacher }) => {
  const [showMore, setShowMore] = useState(false);

  // console.log(teacher);
  const { reviews, levels, languages } = teacher;

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  // console.log(reviews);

  return (
    <CardWrapper>
      <div>
        <Avatar src={teacher.avatar_url} alt="" />
      </div>
      <RightPart>
        <CardHeader teacher={teacher} />

        <Teacher>
          {teacher.name} {teacher.surname}
        </Teacher>

        <TeacherInfoWrapper>
          <TeacherInfo>
            Speaks:&nbsp;
            <Languages>
              {languages.map((language, index) => (
                <li key={index}>
                  <span>{language}</span>
                  {index < languages.length - 1 && ","}
                </li>
              ))}
            </Languages>
          </TeacherInfo>
          <TeacherInfo>
            Lesson Info:&nbsp; <span>{teacher.lesson_info}</span>
          </TeacherInfo>
          <TeacherInfo>
            Conditions:&nbsp; <span>{teacher.conditions}</span>
          </TeacherInfo>
        </TeacherInfoWrapper>

        <ReadMoreButton onClick={toggleShowMore}>Read more</ReadMoreButton>

        {showMore && (
          <>
            <Experience>{teacher.experience}</Experience>

            <Reviews>
              {reviews.map((review, index) => (
                <Review key={index} review={review} />
              ))}
            </Reviews>
          </>
        )}

        <Levels>
          {levels.map((level, index) => (
            <Level key={index}>
              <span>#{level}</span>
            </Level>
          ))}
        </Levels>

        <BookLesson>Book trial lesson</BookLesson>
      </RightPart>
    </CardWrapper>
  );
};

export default Card;

Card.propTypes = {
  teacher: PropTypes.object,
};

import { PropTypes } from "prop-types";
import {
  Avatar,
  AvatarWrapper,
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
import Modal from "../../components/Modal";
import BookTrialLesson from "../../components/BookTrialLesson";

const Card = ({ teacher }) => {
  const [showMore, setShowMore] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookTrialLesson = () => {
    setIsModalOpen(true);
  };

  const { reviews, levels, languages } = teacher;

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


  return (
    <>
      <CardWrapper>
        <AvatarWrapper>
          <Avatar src={teacher.avatar_url} alt="" />
        </AvatarWrapper>
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
              Lesson&nbsp;Info:&nbsp; <span>{teacher.lesson_info}</span>
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

          <BookLesson onClick={handleBookTrialLesson}>
            Book trial lesson
          </BookLesson>
        </RightPart>
      </CardWrapper>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <BookTrialLesson teacher={teacher} onCloseModal={handleCloseModal} />
        </Modal>
      )}
    </>
  );
};

export default Card;

Card.propTypes = {
  teacher: PropTypes.object,
};

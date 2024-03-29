import { PropTypes } from "prop-types";
import {
  Avatar,
  Book,
  BookLesson,
  CardHeader,
  CardWrapper,
  Experience,
  Heart,
  Info,
  Item,
  Languages,
  Level,
  Levels,
  Review,
  ReviewComment,
  Reviewer,
  ReviewerAvatar,
  ReviewerName,
  ReviewerRating,
  Reviews,
  RightPart,
  Teacher,
  TeacherInfo,
  TeacherInfoWrapper,
  Text,
} from "./Card.styled";

const Card = ({ teacher }) => {
  console.log(teacher);
  const { reviews, levels, languages } = teacher;

  return (
    <CardWrapper>
      <div>
        <Avatar src={teacher.avatar_url} alt="" />
      </div>
      <RightPart>
        <CardHeader>
          <Text>Languages</Text>

          <Info>
            <Item>
              <Book
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.6667 4.13333C14.6667 3.3866 14.6667 3.01323 14.5213 2.72801C14.3935 2.47713 14.1895 2.27316 13.9387 2.14532C13.6534 2 13.2801 2 12.5333 2H12.2667C10.7732 2 10.0265 2 9.45603 2.29065C8.95426 2.54631 8.54631 2.95426 8.29065 3.45603C8 4.02646 8 4.77319 8 6.26667V14L8.0667 13.8999C8.5298 13.2053 8.76135 12.858 9.06727 12.6065C9.33809 12.3839 9.65016 12.2169 9.9856 12.1151C10.3645 12 10.7819 12 11.6168 12H12.5333C13.2801 12 13.6534 12 13.9387 11.8547C14.1895 11.7268 14.3935 11.5229 14.5213 11.272C14.6667 10.9868 14.6667 10.6134 14.6667 9.86667V4.13333Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.33325 4.13333C1.33325 3.3866 1.33325 3.01323 1.47858 2.72801C1.60641 2.47713 1.81038 2.27316 2.06126 2.14532C2.34648 2 2.71985 2 3.46659 2H3.73325C5.22673 2 5.97346 2 6.54389 2.29065C7.04566 2.54631 7.45361 2.95426 7.70927 3.45603C7.99992 4.02646 7.99992 4.77319 7.99992 6.26667V14L7.93322 13.8999C7.47012 13.2053 7.23857 12.858 6.93265 12.6065C6.66182 12.3839 6.34976 12.2169 6.01432 12.1151C5.63542 12 5.21799 12 4.38313 12H3.46659C2.71985 12 2.34648 12 2.06126 11.8547C1.81038 11.7268 1.60641 11.5229 1.47858 11.272C1.33325 10.9868 1.33325 10.6134 1.33325 9.86667V4.13333Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Book>
              Lessons online
            </Item>
            <Item>Lessons done: {teacher.lessons_done}</Item>
            <Item>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_44_287)">
                  <path
                    d="M6.20021 4.69703L8 1.28579L9.79979 4.69703C9.95896 4.9987 10.2491 5.20947 10.5851 5.26762L14.3856 5.92519L11.6975 8.69103C11.4598 8.93563 11.3489 9.27666 11.3975 9.61427L11.9465 13.4319L8.48537 11.7301C8.17929 11.5795 7.82071 11.5796 7.51463 11.7301L4.05348 13.4319L4.6025 9.61427C4.65105 9.27666 4.54024 8.93563 4.30252 8.69103L1.6144 5.92519L5.41486 5.26762C5.75095 5.20947 6.04104 4.9987 6.20021 4.69703ZM14.5177 5.78928L14.5175 5.78947L14.5177 5.78928ZM3.8834 13.5155C3.88344 13.5155 3.88349 13.5155 3.88353 13.5155L3.8834 13.5155Z"
                    fill="#FFC531"
                    stroke="#FFC531"
                    strokeWidth="1.2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_44_287">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Rating: {teacher.rating}
            </Item>
            <Item>
              Price / 1 hour: <span>{teacher.price_per_hour}$</span>
            </Item>
            <Heart
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.5766 4.99419C22.0233 4.44061 21.3663 4.00147 20.6433 3.70187C19.9202 3.40226 19.1452 3.24805 18.3625 3.24805C17.5798 3.24805 16.8047 3.40226 16.0817 3.70187C15.3586 4.00147 14.7016 4.44061 14.1483 4.99419L13 6.14252L11.8516 4.99419C10.734 3.87652 9.21809 3.24863 7.63747 3.24863C6.05685 3.24863 4.54097 3.87652 3.4233 4.99419C2.30563 6.11186 1.67773 7.62774 1.67773 9.20836C1.67773 10.789 2.30563 12.3049 3.4233 13.4225L4.57163 14.5709L13 22.9992L21.4283 14.5709L22.5766 13.4225C23.1302 12.8692 23.5693 12.2122 23.869 11.4892C24.1686 10.7661 24.3228 9.99105 24.3228 9.20836C24.3228 8.42566 24.1686 7.65064 23.869 6.92756C23.5693 6.20448 23.1302 5.54751 22.5766 4.99419Z"
                stroke="#121417"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Heart>
          </Info>
        </CardHeader>
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
        <Experience>{teacher.experience}</Experience>

        <Reviews>
          {reviews.map((review, index) => (
            <Review key={index}>
              <Reviewer>
                <ReviewerAvatar src="" alt="" />
                <div>
                  <ReviewerName>{review.reviewer_name}</ReviewerName>
                  <ReviewerRating>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_44_287)">
                        <path
                          d="M6.20021 4.69703L8 1.28579L9.79979 4.69703C9.95896 4.9987 10.2491 5.20947 10.5851 5.26762L14.3856 5.92519L11.6975 8.69103C11.4598 8.93563 11.3489 9.27666 11.3975 9.61427L11.9465 13.4319L8.48537 11.7301C8.17929 11.5795 7.82071 11.5796 7.51463 11.7301L4.05348 13.4319L4.6025 9.61427C4.65105 9.27666 4.54024 8.93563 4.30252 8.69103L1.6144 5.92519L5.41486 5.26762C5.75095 5.20947 6.04104 4.9987 6.20021 4.69703ZM14.5177 5.78928L14.5175 5.78947L14.5177 5.78928ZM3.8834 13.5155C3.88344 13.5155 3.88349 13.5155 3.88353 13.5155L3.8834 13.5155Z"
                          fill="#FFC531"
                          stroke="#FFC531"
                          strokeWidth="1.2"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_44_287">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    {review.reviewer_rating.toFixed(1)}
                  </ReviewerRating>
                </div>
              </Reviewer>
              <ReviewComment>{review.comment}</ReviewComment>
            </Review>
          ))}
        </Reviews>

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
